# Extraction de la carte interactive

> Données extraites depuis le repo open-source de la carte interactive : <https://github.com/minishoot-map/minishoot-map.github.io>. La carte indique que ses données/images viennent de la version **v1.05** du jeu.

---

## Exports générés

Les exports complets sont dans : [`data/map-extract/`](../data/map-extract/)

Formats disponibles :

- JSON pour traitement script
- CSV pour tableur

Fichiers importants :

- [`summary.json`](../data/map-extract/summary.json)
- [`all-items.csv`](../data/map-extract/all-items.csv)
- [`modules_and_skills.csv`](../data/map-extract/modules_and_skills.csv)
- [`modules.csv`](../data/map-extract/modules.csv)
- [`scarabs.csv`](../data/map-extract/scarabs.csv)
- [`race_spirits.csv`](../data/map-extract/race_spirits.csv)
- [`heart_crystals.csv`](../data/map-extract/heart_crystals.csv)
- [`energy_upgrades.csv`](../data/map-extract/energy_upgrades.csv)
- [`map_and_lore.csv`](../data/map-extract/map_and_lore.csv)
- [`entrances.csv`](../data/map-extract/entrances.csv)

---

## Résumé global

- scènes analysées : **16**
- objets Unity analysés : **176 301**
- modules purs : **17**
- skills : **4**
- preset “Modules & Skills” de la carte : **29** objets
- scarabées dorés : **18**
- race spirits : **8**
- heart crystals / HP : **28**
- energy upgrades : **8**
- map + lore : **13**
- entrées / transitions : **255**
- tunnels : **86**
- checkpoints : **26**
- ennemis : **2 970**
- cristaux destructibles : **810**
- jarres : **369**
- torches : **509**
- autres pickups : **119**

> Note : “Modules & Skills” inclut les vrais `ModulePickup`, les `SkillPickup`, et certains `StatsPickup` considérés par la carte comme upgrades/modules.

---

## Modules + skills extraits

| Type | Nom | Scène | X | Y | Objet |
| --- | --- | ---: | ---: | ---: | --- |
| Stat | BulletNumber lvl 1 | Overworld | -178.5 | -164.13 | StatsPickupBulletNumber1 |
| Stat | BulletNumber lvl 2 | Overworld | -177.41 | -164.13 | StatsPickupBulletNumber2 |
| Stat | BulletNumber lvl 3 | Overworld | -176.32 | -164.13 | StatsPickupBulletNumber3 |
| Stat | BulletNumber lvl 4 | Overworld | -175.22 | -164.13 | StatsPickupBulletNumber4 |
| Skill | Boost | Overworld | 118 | 80 | SkillBoost |
| Module | Retaliation | Overworld | 39 | -139 | PickupModuleRetaliation |
| Module | Teleport | Overworld | -8 | 28 | PickupModuleTeleport |
| Module | Compass | Overworld | -10 | 28.28 | PickupModuleCompass |
| Module | CollectableScan | Overworld | -12 | 28 | PickupModuleCollectableScan |
| Module | Overcharge | Overworld | 235 | -29 | PickupModuleOvercharge |
| Module | IdolAlly | Overworld | -175 | -167 | PickupModuleIdolAlly |
| Module | IdolBomb | Overworld | -179 | -167 | PickupModuleIdolBomb |
| Module | IdolSlow | Overworld | -177 | -167 | PickupModuleIdolSlow |
| Module | FreePower | Overworld | -174 | -167 | PickupModuleFreePower |
| Stat | BulletNumber lvl 0 | Cave | -1002 | -101 | CaveBulletNumber0 |
| Module | BoostCost | Cave | -716 | 22 | PickupModuleBoostCost |
| Module | XpGain | Cave | -652 | -111.52 | PickupModuleXpGain |
| Module | HpDrop | Cave | -479 | 145.64 | PickupModuleHpDrop |
| Module | HearthCrystal | Cave | -706 | -160 | PickupModuleHeartCrystal |
| Module | PrimordialCrystal | Cave | -948 | 237 | PickupModulePrimordialCrystal |
| Module | BlueBullet | Cave | -582 | -28 | PickupModuleBlueBullet |
| Module | Rage | Cave | -756 | -174 | PickupModuleRage |
| Skill | Dash | Dungeon1 | 517 | 237 | SkillDash |
| Skill | Supershot | Dungeon2 | 952 | 340 | SkillSupershot |
| Skill | Hover | Dungeon3 | 867 | -14 | SkillHover |
| Stat | PowerBombLevel lvl 0 | Temple1 | -771 | -323 | Temple1 pickup |
| Stat | PowerSlowLevel lvl 0 | Temple2 | -568 | -346 | Temple2 pickup |
| Stat | PowerAllyLevel lvl 0 | Temple3 | -816 | -494 | Temple3 pickup |
| Module | SpiritDash | Tower | 238 | -341 | PickupModuleSpiritDash |

---

## Scarabées dorés extraits

| # | Scène | X | Y | Objet |
| ---: | --- | ---: | ---: | --- |
| 1 | Overworld | 6.25 | -42.85 | OverworldScarabPickup0 |
| 2 | Overworld | 78 | -132 | OverworldScarabPickup1 |
| 3 | Overworld | 169.08 | 92.73 | OverworldScarabPickup2 |
| 4 | Overworld | -171.87 | 180.2 | OverworldScarabPickup3 |
| 5 | Overworld | -283 | 267 | OverworldScarabPickup4 |
| 6 | Overworld | 125.89 | -49.08 | OverworldScarabPickup5 |
| 7 | Overworld | 231.73 | 36.33 | OverworldScarabPickup6 |
| 8 | Overworld | -68 | 90 | OverworldScarabPickup7 |
| 9 | Cave | -822 | 130.6 | CaveScarabPickup0 |
| 10 | Cave | -822 | 146 | CaveScarabPickup1 |
| 11 | Cave | -774.03 | -53.42 | CaveScarabPickup2 |
| 12 | Cave | -838.48 | -130 | CaveScarabPickup3 |
| 13 | Dungeon2 | 1046 | 340 | Dungeon2ScarabPickup0 |
| 14 | Dungeon3 | 911 | 66 | Dungeon3ScarabPickup0 |
| 15 | Dungeon3 | 829 | -60 | Dungeon3ScarabPickup1 |
| 16 | Temple1 | -851 | -361 | Temple1ScarabPickup0 |
| 17 | Temple2 | -524 | -406 | Temple2ScarabPickup0 |
| 18 | Temple3 | -824 | -619 | Temple3ScarabPickup0 |

---

## Race spirits extraits

| # | Scène | X | Y | Objet |
| ---: | --- | ---: | ---: | --- |
| 1 | Cave | -480 | -1 | NpcTiny0 |
| 2 | Cave | -503 | 93 | NpcTiny1 |
| 3 | CaveExtra | -1311 | 161 | NpcTiny2 |
| 4 | CaveExtra | -1293 | 42 | NpcTiny3 |
| 5 | CaveExtra | -1201 | 120 | NpcTiny4 |
| 6 | CaveExtra | -1507 | -1 | NpcTiny5 |
| 7 | CaveExtra | -1503 | 122 | NpcTiny6 |
| 8 | CaveExtra | -1199 | -80 | NpcTiny7 |

---

## Catégories exportées

| Catégorie | Nombre |
| --- | ---: |
| modules_and_skills | 29 |
| modules | 17 |
| skills | 4 |
| stats | 44 |
| scarabs | 18 |
| race_spirits | 8 |
| heart_crystals | 28 |
| energy_upgrades | 8 |
| map_and_lore | 13 |
| map_pieces | 8 |
| lore | 5 |
| red_coins_big_crystals | 141 |
| red_coin_jars | 37 |
| large_enemies | 104 |
| entrances | 255 |
| tunnels | 86 |
| checkpoints | 26 |
| npcs | 24 |
| crystal_npcs | 10 |
| unique_keys | 3 |
| regular_keys | 13 |
| boss_keys | 3 |
| boss_drop_keys | 4 |
| timer_races | 5 |
| race_checkpoints | 95 |
| unlockers | 117 |
| unlocker_torches | 58 |
| unlocker_triggers | 11 |
| npc_family_checks | 1 |
| enemies | 2 970 |
| crystals | 810 |
| jars | 369 |
| torches | 509 |
| pickups_remaining | 119 |

---

## Limites / prochaines étapes

Cette extraction donne les coordonnées et catégories brutes. Elle inclut maintenant les catégories principales de marqueurs/objets visibles, y compris ennemis, cristaux, jarres, torches et pickups génériques. Elle ne donne pas encore automatiquement une phrase humaine du type “derrière le mur caché au nord-est”, parce que ça demande de relier les coordonnées aux screenshots/biomes.

Prochaine passe utile :

1. générer une page par catégorie avec tableaux complets
2. relier les coordonnées aux captures de la map
3. annoter Family Home, Wounded Heart, courses et scarabées difficiles
4. convertir les coordonnées brutes en repères visuels par zone
