import fs from 'node:fs';
import path from 'node:path';

// Usage: node scripts/extract-map-data.mjs /path/to/minishoot-map.github.io [output-dir]
const SRC = path.join(process.argv[2] || '/tmp/minishoot-map-src', 'src');
const OUT = process.argv[3] || path.resolve('data/map-extract');
fs.mkdirSync(OUT, {recursive:true});
const meta = JSON.parse(fs.readFileSync(path.join(SRC,'data-processed/meta.json'),'utf8'));
const bytes = new Uint8Array(fs.readFileSync(path.join(SRC,'data-raw/objects/objects.bp')));

let index=0, array=bytes, schemas, terminals, primIParsers, stringMap=[];
const int_max=2**31-1;
function peek(){ if(index<array.length) return array[index]; throw new Error('past end');}
function pop(){const v=peek(); index++; return v;}
function skip(){index++;}
function parseCompressedInt(){let res=0,i=0,cur; do {cur=pop(); res = (res + ((cur << (i*7))|0))|0; i++;} while(cur & 0b1000_0000); if(res<0) res=(int_max-res)|0; return res;}
const buf4=new ArrayBuffer(4); const dv4=new DataView(buf4);
function parseFloat32(){ if(peek()===0xff){skip(); return 0;} for(let i=3;i>-1;i--) dv4.setUint8(i,pop()); return dv4.getFloat32(0,true);}
function parseVector2(){ if(peek()===0x7f){skip(); return [0,0];} return [parseFloat32(),parseFloat32()];}
const decoder=new TextDecoder('utf-8');
function parseString(){ if(peek()!==0){ const i=parseCompressedInt()-1; return stringMap[i]; } skip(); const len=parseCompressedInt(); const res=decoder.decode(array.slice(index,index+len)); index+=len; stringMap.push(res); return res;}
function parseAny(){ return parseBySchema(parseCompressedInt());}
const primParsers={"GameManager+None":()=>{throw new Error('None')},"System.Boolean":()=>pop()!=0,"System.Int32":parseCompressedInt,"System.Single":parseFloat32,"System.String":parseString,"GameManager+Reference":parseCompressedInt,"GameManager+Sprite":parseCompressedInt,"UnityEngine.Vector2":parseVector2,"GameManager+Any":parseAny};
function parseBySchema(schemaI){ const s=schemas[schemaI]; if(s.type===0) return primIParsers[schemaI](); if(s.type===1) return parseRecord(schemaI); if(s.type===2) return parseArray(schemaI); throw new Error('bad schema');}
function parseRecord(schemaI){ const term=terminals[schemaI]; if(term!==null) return term; const s=schemas[schemaI]; const res={}; for(let i=0;i<s.members.length;i++) res[s.members[i]]=parseBySchema(s.membersT[i]); if(s.base!=null) res._base=parseBySchema(s.base); res._schema=schemaI; return res;}
function parseArray(schemaI){ const s=schemas[schemaI]; const len=parseCompressedInt(); const res=Array(len); for(let i=0;i<len;i++) res[i]=parseBySchema(s.elementT); res._schema=schemaI; return res;}
function parseSchema(raw){ const typeSchemaI={}; terminals=[]; schemas=raw.map((r,i)=>{const s={...r[2], type:r[0], name:r[1], shortName:r[1]}; if(s.type===1){s.members??=[]; s.membersT??=[];} const m=/[.]([^.]+)$/.exec(s.name); if(m && !Object.hasOwn(typeSchemaI,m[1])){typeSchemaI[m[1]]=i; s.shortName=m[1];} typeSchemaI[s.name]=i; return s;});
  let maybe=[]; for(let i=0;i<schemas.length;i++){const s=schemas[i]; terminals[i]=null; if(s.type===1 && s.members.length===0){ if(s.base==null) terminals[i]={_schema:i}; else if(terminals[s.base]) terminals[i]={_schema:i,_base:terminals[s.base]}; else maybe.push(i); }}
  while(true){let rem=[], added=false; for(const i of maybe){const s=schemas[i]; if(terminals[s.base]!==null){terminals[i]={_schema:i,_base:terminals[s.base]}; added=true;} else rem.push(i);} if(!added) break; maybe=rem;}
  primIParsers=Array(schemas.length); for(const k in primParsers) primIParsers[typeSchemaI[k]]=primParsers[k]; return {typeSchemaI}; }
const {typeSchemaI:ti}=parseSchema(meta.schemas);
const scenes=parseAny();

const superCache=Array(schemas.length).fill(null).map(()=>Array(schemas.length).fill(undefined));
for(let i=0;i<schemas.length;i++){let c=i, steps=0; while(c!=null){superCache[c][i]=steps++; c=schemas[c].base;}}
function stepsToBase(schemaI, baseI){return superCache[baseI]?.[schemaI];}
function gotoBase(it, steps){ while(steps>0){it=it._base; steps--;} return it;}
function getAsBase(it, baseI){ const steps=stepsToBase(it._schema, baseI); return steps==null? undefined: gotoBase(it,steps);}

let matrixArr=[];
function construct(t){ const deg2rad=Math.PI/180; const sin=Math.sin(t.rotation*deg2rad), cos=Math.cos(t.rotation*deg2rad); return [cos*t.scale[0], -sin*t.scale[1], t.position[0], sin*t.scale[0], cos*t.scale[1], t.position[1]];}
function premul(n,m){return [m[0]*n[0]+m[1]*n[3], m[0]*n[1]+m[1]*n[4], m[0]*n[2]+m[1]*n[5]+m[2], m[3]*n[0]+m[4]*n[3], m[3]*n[1]+m[4]*n[4], m[3]*n[2]+m[4]*n[5]+m[5]];}
const objects=[];
function prep(obj,parentI, parentM, sceneName){ let transform; for(const c of obj.components){ transform=getAsBase(c,ti.Transform); if(transform) break; } if(!transform) throw new Error('no transform '+obj.name); let m=construct(transform); if(parentM) m=premul(m,parentM); obj._index=objects.length; obj._parentI=parentI; obj._scene=sceneName; obj._pos=[m[2],m[5]]; objects.push(obj); for(const ch of obj.children||[]) if(ch) prep(ch,obj._index,m,sceneName); }
for(const scene of scenes){ for(const root of scene.roots) if(root) prep(root, -1, null, scene.name); }

const moduleNames=['IdolBomb','IdolSlow','IdolAlly','BoostCost','XpGain','HpDrop','PrimordialCrystal','HearthCrystal','SpiritDash','BlueBullet','Overcharge','CollectableScan','Rage','Retaliation','FreePower','Compass','Teleport'];
const skillNames=['Supershot','Dash','Hover','Boost'];
const statsNames=['PowerAllyLevel','<None>','BoostSpeed','BulletNumber','BulletSpeed','_EmptyStatsSlot','PowerBombLevel','CriticChance','Energy','FireRange','FireRate','Hp','MoveSpeed','Supershot','BulletDamage','PowerSlowLevel'];
const keyUses=['None','Normal','Boss','Scarab','Darker','FinalBoss'];
const npcNames=["Familly1","Familly2","Familly3","Blacksmith","Academician","Explorer","MercantHub","UnchosenPurple","UnchosenBlue","UnchosenPurpleSnow","MercantFrogger","_Ermit","PrimordialScarab","Tiny","Healer","MercantBush","MercantJar","Turtle","ScarabCollector","Bard"];
const objectiveNames=["None","Dungeon1","Dungeon2","Dungeon3","Dungeon4","Dungeon5","Temple1","Temple2","Temple3","Tower1","Tower2","Tower3","Tower4","FreeAcademician","OpenSanctuary","AwakeTree","TurtleArrived","FreeMercantHub","FreeScarabCollector","FreeBlacksmith","FreeBard","FreeFamilly1","FreeFamilly3","FreeExplorer","FreeHealer","SkillBoost","SkillDash","SkillSupershot","SkillHover","ShopGarden","ShopForest","ShopSwamp","Scarab","FreeFamilly2","GotAllCrystalBossKey","TrueLastBoss","CaveGreenBeach","CaveGreenGarden","CaveGreenZelda","CaveAcademyRuin","CaveForest","CaveForestJunkyard","CaveAbyss","CaveAbyssDesert","CaveAbyssHouse1","CaveAbyssHouse2","CaveDesertNpc","CaveSewer","CaveBeachRace","CaveSwampRace","CaveSunkenToDungeon","CaveSunkenRace","CaveDarker","CaveGreenHoleUnderJar","CaveJunkyardEast","CaveJunkyardWest","Lighthouse","CaveSunkenHouse","CaveSwampParkour","CaveDesertRace","CaveAbyssRace","CavePrimordial","_CaveTuto","Town"];
const jarTypes=['nothing','hp','random','big crystal','energy','full energy','big crystals (65)'];

function findComp(obj, schema){ for(const c of obj.components){const b=getAsBase(c, schema); if(b) return b;} }
function hasComp(obj, schema){ return !!findComp(obj,schema); }
function compName(c){return schemas[c._schema].shortName;}
function basePickup(c){ return getAsBase(c, ti.Pickup); }
function rowBase(obj, c, category, name, extra={}){return {category, name, object: obj.name, scene: obj._scene, x:+obj._pos[0].toFixed(2), y:+obj._pos[1].toFixed(2), schema: compName(c), objectIndex: obj._index, ...extra};}

const rows=[];
const allByCategory={};
function add(r){ rows.push(r); (allByCategory[r.category]??=[]).push(r); }
for(const obj of objects){
 for(const c0 of obj.components){
  const s=c0._schema;
  if(stepsToBase(s,ti.ModulePickup)!=null){ const c=getAsBase(c0,ti.ModulePickup); add(rowBase(obj,c,'modules',moduleNames[c.moduleId]??`Module ${c.moduleId}`,{moduleId:c.moduleId,spriteI:basePickup(c).spriteI})); }
  else if(stepsToBase(s,ti.SkillPickup)!=null){ const c=getAsBase(c0,ti.SkillPickup); add(rowBase(obj,c,'skills',skillNames[c.skillId]??`Skill ${c.skillId}`,{skillId:c.skillId,spriteI:basePickup(c).spriteI})); }
  else if(stepsToBase(s,ti.StatsPickup)!=null){ const c=getAsBase(c0,ti.StatsPickup); add(rowBase(obj,c,'stats',statsNames[c.statsId]??`Stats ${c.statsId}`,{statsId:c.statsId,level:c.level,spriteI:basePickup(c).spriteI})); }
  else if(stepsToBase(s,ti.ScarabPickup)!=null){ const c=getAsBase(c0,ti.ScarabPickup); add(rowBase(obj,c,'scarabs','Golden Scarab',{container:c.container})); }
  else if(stepsToBase(s,ti.LorePickup)!=null){ const c=getAsBase(c0,ti.LorePickup); add(rowBase(obj,c,'lore','Lore tablet',{spriteI:basePickup(c).spriteI})); }
  else if(stepsToBase(s,ti.MapPickup)!=null){ const c=getAsBase(c0,ti.MapPickup); add(rowBase(obj,c,'map_pieces','Map piece',{spriteI:basePickup(c).spriteI})); }
  else if(stepsToBase(s,ti.KeyUnique)!=null){ const c=getAsBase(c0,ti.KeyUnique); add(rowBase(obj,c,'unique_keys',keyUses[c.keyId]??`Key ${c.keyId}`,{keyId:c.keyId,spriteI:basePickup(c).spriteI})); }
  else if(stepsToBase(s,ti.CrystalKey)!=null){ const c=getAsBase(c0,ti.CrystalKey); add(rowBase(obj,c,'regular_keys','Regular key',{spriteI:basePickup(c).spriteI})); }
  else if(stepsToBase(s,ti.BossKey)!=null){ const c=getAsBase(c0,ti.BossKey); add(rowBase(obj,c,'boss_keys','Boss key',{spriteI:basePickup(c).spriteI})); }
  else if(stepsToBase(s,ti.CrystalBoss)!=null){ const c=getAsBase(c0,ti.CrystalBoss); add(rowBase(obj,c,'boss_drop_keys','Boss drop key',{spriteI:basePickup(c).spriteI})); }
  else if(stepsToBase(s,ti.NpcTiny)!=null){ const c=getAsBase(c0,ti.NpcTiny); add(rowBase(obj,c,'race_spirits','Race spirit',{spriteI:c.spriteI})); }
  else if(stepsToBase(s,ti.Npc)!=null){ const c=getAsBase(c0,ti.Npc); add(rowBase(obj,c,'npcs',npcNames[c.id]??`Npc ${c.id}`,{npcId:c.id,spriteI:c.spriteI})); }
  else if(stepsToBase(s,ti.CrystalNpc)!=null){ const c=getAsBase(c0,ti.CrystalNpc); add(rowBase(obj,c,'crystal_npcs',npcNames[c.id]??`CrystalNpc ${c.id}`,{npcId:c.id,spriteI:c.spriteI})); }
  else if(stepsToBase(s,ti.RaceManager)!=null){ const c=getAsBase(c0,ti.RaceManager); add(rowBase(obj,c,'timer_races','Timer race',{duration:c.duration,torchGroupCount:c.torchGroup.length,target:c.target,targetBis:c.targetBis})); }
  else if(stepsToBase(s,ti.RaceCheckpoint)!=null){ const c=getAsBase(c0,ti.RaceCheckpoint); add(rowBase(obj,c,'race_checkpoints', c.isStartCheckpoint?'Race checkpoint start':'Race checkpoint',{isStartCheckpoint:c.isStartCheckpoint,torchesCount:c.torches.length})); }
  else if(stepsToBase(s,ti.Transition)!=null){ const c=getAsBase(c0,ti.Transition); add(rowBase(obj,c,'entrances',obj.name,{destI:c.destI})); }
  else if(stepsToBase(s,ti.Tunnel)!=null){ const c=getAsBase(c0,ti.Tunnel); add(rowBase(obj,c,'tunnels','Tunnel',{destination:c.destination,spriteI:c.spriteI})); }
  else if(stepsToBase(s,ti.Checkpoint)!=null){ const c=getAsBase(c0,ti.Checkpoint); add(rowBase(obj,c,'checkpoints','Checkpoint',{})); }
  else if(stepsToBase(s,ti.UnlockerTrigger)!=null){ const c=getAsBase(c0,ti.UnlockerTrigger); add(rowBase(obj,c,'unlocker_triggers',objectiveNames[c.objectiveCleared]??`Objective ${c.objectiveCleared}`,{objectiveCleared:c.objectiveCleared,target:c.target,targetBis:c.targetBis})); }
  else if(stepsToBase(s,ti.UnlockerTorch)!=null){ const c=getAsBase(c0,ti.UnlockerTorch); add(rowBase(obj,c,'unlocker_torches','Unlocker torch',{groupCount:c.group.length,target:c.target,targetBis:c.targetBis,linkedTorch:c.linkedTorch})); }
  else if(stepsToBase(s,ti.Unlocker)!=null){ const c=getAsBase(c0,ti.Unlocker); add(rowBase(obj,c,'unlockers',keyUses[c.keyUse]??`KeyUse ${c.keyUse}`,{keyUse:c.keyUse,groupCount:c.group.length,target:c.target,targetBis:c.targetBis})); }
  else if(stepsToBase(s,ti.MovePickupWhenFreed)!=null){ const c=getAsBase(c0,ti.MovePickupWhenFreed); add(rowBase(obj,c,'npc_family_checks','Npc family check',{pickup:c.pickup,npcToFreeCount:c.npcToFree.length})); }
  else if(stepsToBase(s,ti.Jar)!=null){ const c=getAsBase(c0,ti.Jar); if([3,6].includes(c.dropType)) add(rowBase(obj,c,'red_coin_jars',jarTypes[c.dropType],{dropType:c.dropType,size:c.size,spriteI:c.spriteI})); }
  else if(stepsToBase(s,ti.Enemy)!=null){ const c=getAsBase(c0,ti.Enemy); if(c.size===3 && stepsToBase(s,ti.Boss)==null) add(rowBase(obj,c,'large_enemies','Large enemy',{size:c.size,tier:c.tier,spriteI:c.spriteI})); }
  else if(stepsToBase(s,ti.Boss)!=null){ const c=getAsBase(c0,ti.Enemy); add(rowBase(obj,c,'bosses','Boss',{size:c.size,tier:c.tier,spriteI:c.spriteI})); }
 }
}


// Broad marker categories (complete object categories, not only presets)
const existingKeys = new Set(rows.map(r => `${r.objectIndex}:${r.schema}:${r.category}`));
function addOnce(r){ const k=`${r.objectIndex}:${r.schema}:${r.category}`; if(existingKeys.has(k)) return; existingKeys.add(k); add(r); }
for(const obj of objects){
 for(const c0 of obj.components){
  const s=c0._schema;
  if(stepsToBase(s,ti.Jar)!=null){ const c=getAsBase(c0,ti.Jar); addOnce(rowBase(obj,c,'jars',jarTypes[c.dropType]??`drop ${c.dropType}`,{dropType:c.dropType,size:c.size,spriteI:c.spriteI})); }
  else if(stepsToBase(s,ti.CrystalDestroyable)!=null){ const c=getAsBase(c0,ti.CrystalDestroyable); addOnce(rowBase(obj,c,'crystals',c.dropXp?'XP crystal':'No-XP crystal',{dropXp:c.dropXp,size:c.size})); }
  else if(stepsToBase(s,ti.Enemy)!=null){ const c=getAsBase(c0,ti.Enemy); addOnce(rowBase(obj,c,'enemies',stepsToBase(s,ti.Boss)!=null?'Boss/enemy':'Enemy',{size:c.size,tier:c.tier,spriteI:c.spriteI})); }
  else if(stepsToBase(s,ti.Pickup)!=null){ const c=getAsBase(c0,ti.Pickup); addOnce(rowBase(obj,c,'pickups_remaining','Pickup',{spriteI:c.spriteI})); }
  else if(stepsToBase(s,ti.Torch)!=null){ const c=getAsBase(c0,ti.Torch); addOnce(rowBase(obj,c,'torches','Torch',{spriteI:c.spriteI})); }
 }
}

// Derived presets matching map filters
const moduleStatsIds=new Set([0,2,3,4,6,7,9,10,12,13,14,15]);
const derived={
  modules_and_skills: rows.filter(r=>r.category==='modules'||r.category==='skills'||(r.category==='stats'&&moduleStatsIds.has(r.statsId))),
  heart_crystals: rows.filter(r=>r.category==='stats'&&r.statsId===11),
  energy_upgrades: rows.filter(r=>r.category==='stats'&&r.statsId===8),
  map_and_lore: rows.filter(r=>r.category==='map_pieces'||r.category==='lore'),
  scarabs: rows.filter(r=>r.category==='scarabs'),
  race_spirits: rows.filter(r=>r.category==='race_spirits'),
  red_coins_big_crystals: rows.filter(r=>r.category==='red_coin_jars'||r.category==='large_enemies')
};
for(const [k,v] of Object.entries(derived)) allByCategory[k]=v;

// scene counts
const sceneCounts={}; for(const obj of objects) sceneCounts[obj._scene]=(sceneCounts[obj._scene]??0)+1;
const summary={source:'minishoot-map.github.io',sourceVersion:'game v1.05 per map About text',generatedAt:new Date().toISOString(),totalScenes:scenes.length,totalObjects:objects.length,categoryCounts:Object.fromEntries(Object.entries(allByCategory).map(([k,v])=>[k,v.length])),sceneCounts};
fs.writeFileSync(path.join(OUT,'summary.json'), JSON.stringify(summary,null,2));
fs.writeFileSync(path.join(OUT,'all-items.json'), JSON.stringify(rows,null,2));
for(const [k,v] of Object.entries(allByCategory)) fs.writeFileSync(path.join(OUT,`${k}.json`), JSON.stringify(v,null,2));
function csvEscape(v){ if(v==null) return ''; const s=String(v); return /[",\n]/.test(s)? '"'+s.replaceAll('"','""')+'"':s;}
function writeCsv(name, arr){ const keys=[...new Set(arr.flatMap(o=>Object.keys(o)))]; const lines=[keys.join(',')]; for(const o of arr) lines.push(keys.map(k=>csvEscape(o[k])).join(',')); fs.writeFileSync(path.join(OUT,`${name}.csv`),lines.join('\n'));}
writeCsv('all-items', rows); for(const [k,v] of Object.entries(allByCategory)) writeCsv(k,v);
console.log(JSON.stringify(summary,null,2));
