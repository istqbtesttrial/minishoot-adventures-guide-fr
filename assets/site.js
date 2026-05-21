const checklist = [
  { title: "Progression", icon: "🧭", items: [
    ["Donjon 1 terminé", "Boost récupéré"],
    ["Donjon 2 terminé", "Chapelle / statue suspecte vérifiée"],
    ["Donjon 3 terminé", "Batterie cachée près de la piste de time trial"],
    ["Donjon optionnel du désert", "Pouvoir, boss et scarabée"],
    ["Donjon 4 terminé", "Bâtiment caché, bouton et égouts"],
    ["Boss final battu", "Checkpoint final utilisé si besoin"],
    ["Bonus dungeons terminés", "Post-game et challenges"],
    ["Carte interactive utilisée", "Un seul filtre actif à la fois"],
    ["Vendeurs revisités", "Après chaque gros pouvoir"]
  ]},
  { title: "Collectibles", icon: "🧩", items: [
    ["Tous les modules", "17 modules"],
    ["Tous les skills", "Boost, Dash, Supershot, Hover"],
    ["Tous les cœurs", "28 heart crystals"],
    ["Toute l’énergie", "8 energy upgrades"],
    ["Tous les scarabées", "18 scarabées dorés"],
    ["Fragments de carte", "8 fragments"],
    ["Tablettes lore", "5 tablettes"],
    ["Clés importantes", "clés normales, boss keys, clés uniques"],
    ["Reward courses récupéré", "Après les 8 races"],
    ["Reward scarabées récupéré", "Après les 18 scarabées"]
  ]},
  { title: "Courses", icon: "🏁", items: [
    ["Course #1", "Passage sable / canyon rocheux"],
    ["Course #2", "Tour aux 3 slimes"],
    ["Course #3", "Forêt sombre / zone bleutée"],
    ["Course #4", "Couloir rocheux / ruines"],
    ["Course #5", "Forêt rouge / orange"],
    ["Course #6", "Chemins de pierre / zone sombre"],
    ["Course #7", "Désert / ville dorée"],
    ["Course #8", "Lagon / jungle / eau turquoise"],
    ["Récompense finale", "À récupérer après les 8 courses"]
  ]},
  { title: "Secrets", icon: "🧱", items: [
    ["Family Home", "Retour maison + chaise / siège"],
    ["Wounded Heart", "Chapelle sud-ouest, autel caché"],
    ["Barde écouté", "Rester près du barde"],
    ["Tortue géante", "Vieil Ami"],
    ["Arbre réveillé", "Fini de ronfler"],
    ["Scarabée Primordial", "Rencontre de l’entité"],
    ["Trous / chutes utiles", "Accès cachés"],
    ["Jarres maison familiale", "Succès lié aux jarres"],
    ["Barde écouté assez longtemps", "Ne pas partir trop vite"],
    ["Wounded Heart revalidé", "Autel / passage caché"]
  ]},
  { title: "Final", icon: "✅", items: [
    ["Succès de difficulté", "Ne pas baisser la difficulté"],
    ["Arènes terminées", "Pour la Gloire ?"],
    ["Arènes avec 5 cœurs restants", "C’est fini maintenant"],
    ["PNJ / vendeurs revisités", "Famille, scarabées, courses"],
    ["Tout vérifié", "Checklist complète"],
    ["Sans regarder en arrière", "Seulement en tout dernier"]
  ]}
];

const searchIndex = [
  ["Module manquant", "Vérifie Family Home, vendeur scarabées, récompense des courses et Wounded Heart.", "depannage.html#module"],
  ["Course #2", "Tour aux 3 slimes, accès souterrain, piste à l’est.", "depannage.html#course"],
  ["Dernière course", "Utilise les checkmarks de la carte et compare la tour aux 3 slimes en priorité.", "depannage.html#course"],
  ["Family Home", "Retour maison après avoir sauvé les proches, interaction avec la chaise.", "depannage.html#family"],
  ["Wounded Heart", "Chapelle sud-ouest, autel, passage caché.", "depannage.html#wounded"],
  ["Scarabée manquant", "Comparer les 18 scarabées avec la carte interactive.", "depannage.html#scarabee"],
  ["Batterie cachée", "Près d’une piste de time trial après le Donjon 3.", "depannage.html"],
  ["Donjon désert", "Zone optionnelle à ne pas oublier avant le cleanup final.", "guide.html"],
  ["Récompense des courses", "Après les 8 courses, il faut encore récupérer l’objet final.", "collectibles.html#courses"],
  ["Guide Steam", "Guide écrit illustré conseillé pour comparer visuellement un doute.", "sources.html"],
  ["Walkthrough vidéo", "Run complet utile pour confirmer un accès ou une zone de fin.", "sources.html"],
  ["Succès difficulté", "La plus basse difficulté utilisée détermine les succès.", "checklist.html"],
  ["Sans regarder en arrière", "Action finale à faire seulement à la fin.", "depannage.html#final"],
  ["Carte interactive", "Source absolue pour coordonnées et objets placés.", "https://minishoot-map.github.io/"]
];

const storageKey = "minishoot-guide-fr-checklist-v2";
const state = JSON.parse(localStorage.getItem(storageKey) || "{}");
function slug(text){return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}
function save(){localStorage.setItem(storageKey,JSON.stringify(state))}
function renderChecklist(){const root=document.querySelector("#checklistRoot");if(!root)return;root.innerHTML=checklist.map((group,gi)=>`<details class="check-group" ${gi<2?"open":""}><summary><span>${group.icon} ${group.title}</span><span class="group-count" data-group="${slug(group.title)}"></span></summary><div class="check-list">${group.items.map(([title,note],ii)=>{const id=`${slug(group.title)}-${ii}`;const checked=!!state[id];return`<label class="check-item ${checked?"done":""}" for="${id}"><input id="${id}" type="checkbox" ${checked?"checked":""} data-check-id="${id}"><span><strong>${title}</strong><small>${note}</small></span></label>`}).join("")}</div></details>`).join("");root.onchange=e=>{const input=e.target.closest("[data-check-id]");if(!input)return;state[input.dataset.checkId]=input.checked;const item=input.closest(".check-item");item?.classList.toggle("done",input.checked);if(input.checked){item?.animate([{transform:"scale(1)"},{transform:"scale(1.035)"},{transform:"scale(1)"}],{duration:260,easing:"ease-out"})}save();updateProgress()};updateProgress()}
function updateProgress(){const ids=checklist.flatMap(g=>g.items.map((_,i)=>`${slug(g.title)}-${i}`));const done=ids.filter(id=>state[id]).length;const total=ids.length;const pct=total?Math.round(done/total*100):0;const text=document.querySelector("#progressText");const count=document.querySelector("#progressCount");const bar=document.querySelector("#progressBar");if(text)text.textContent=`${pct}%`;if(count)count.textContent=`${done} / ${total} cochés`;if(bar)bar.style.width=`${pct}%`;checklist.forEach(g=>{const groupIds=g.items.map((_,i)=>`${slug(g.title)}-${i}`);const n=groupIds.filter(id=>state[id]).length;const node=document.querySelector(`[data-group="${slug(g.title)}"]`);if(node)node.textContent=`${n}/${groupIds.length}`})}
function setupChecklistActions(){document.querySelector("#resetChecklist")?.addEventListener("click",()=>{if(!confirm("Réinitialiser toutes les coches sur cet appareil ?"))return;Object.keys(state).forEach(k=>delete state[k]);save();renderChecklist()});document.querySelector("#expandAll")?.addEventListener("click",()=>document.querySelectorAll("details.check-group").forEach(d=>d.open=true))}
function setupSearch(){const input=document.querySelector("#quickSearch"),results=document.querySelector("#searchResults");if(!input||!results)return;const render=q=>{q=(q||"").trim().toLowerCase();const matches=(q?searchIndex.filter(([t,d])=>`${t} ${d}`.toLowerCase().includes(q)):searchIndex.slice(0,5));results.innerHTML=matches.map(([t,d,h])=>`<a class="result" href="${h}"><strong>${t}</strong><span>${d}</span></a>`).join("")};input.addEventListener("input",()=>render(input.value));render("")}
function setupReveal(){const items=document.querySelectorAll(".reveal");if(!("IntersectionObserver" in window)){items.forEach(i=>i.classList.add("visible"));return}const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.12});items.forEach(i=>obs.observe(i))}
function setupNav(){const btn=document.querySelector(".menu-button"),nav=document.querySelector(".site-nav");btn?.addEventListener("click",()=>{const open=nav.classList.toggle("open");btn.setAttribute("aria-expanded",String(open))});nav?.addEventListener("click",e=>{if(e.target.closest("a")){nav.classList.remove("open");btn?.setAttribute("aria-expanded","false")}})}
document.addEventListener("DOMContentLoaded",()=>{renderChecklist();setupChecklistActions();setupSearch();setupReveal();setupNav()});
