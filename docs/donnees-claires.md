# 📚 Données claires — objets, modules, cœurs, courses

> Version lisible des CSV de `data/map-extract/`.  
> Objectif : ne plus devoir ouvrir 20 fichiers CSV pour comprendre quoi chercher.

Source principale : extraction de la carte interactive `minishoot-map.github.io` — données indiquées comme venant du jeu **v1.05**.

---

## 🚀 Lecture rapide

| Si tu cherches… | Page / fichier clair | CSV brut associé |
| --- | --- | --- |
| 🧩 Modules et skills | cette page + [Modules](modules.md) | `modules_and_skills.csv`, `modules.csv`, `skills.csv` |
| ❤️ Cœurs / HP | cette page | `heart_crystals.csv` |
| ⚡ Énergie | cette page | `energy_upgrades.csv` |
| 🏁 Courses / race spirits | cette page + [Courses](courses.md) | `race_spirits.csv`, `timer_races.csv`, `race_checkpoints.csv` |
| 🪲 Scarabées dorés | cette page + [Dépannage](depannage.md#scarabee-dore-manquant) | `scarabs.csv` |
| 🗺️ Cartes et lore | cette page + [Cartes](cartes.md) | `map_and_lore.csv`, `map_pieces.csv`, `lore.csv` |
| 🔑 Clés | cette page | `regular_keys.csv`, `boss_keys.csv`, `unique_keys.csv` |
| 📊 Tout vérifier | [Extraction map](map-data.md) | `summary.json`, `all-items.csv` |

---

## 📊 Résumé des objets importants

| Catégorie | Nombre | À quoi ça sert |
| --- | ---: | --- |
| 🧩 Modules purs | 17 | modules équipables / améliorations importantes |
| ✨ Skills | 4 | pouvoirs principaux : Boost, Dash, Supershot, Hover |
| 🧩 Modules + skills + upgrades liés | 29 | filtre principal “Modules & Skills” de la carte |
| ❤️ Cœurs / HP | 28 | augmenter la vie |
| ⚡ Énergie | 8 | augmenter l’énergie |
| 🪲 Scarabées dorés | 18 | récompenses / vendeur scarabées |
| 👻 Race spirits | 8 | les 8 esprits de course à trouver |
| 🏁 Courses chronométrées internes | 5 | courses gérées par timer dans les données |
| 🗺️ Fragments de carte | 8 | compléter la carte |
| 📜 Lore tablets | 5 | tablettes d’histoire |
| 🔑 Clés normales | 13 | progression donjons |
| 🔑 Boss keys | 3 | accès boss / donjons |
| 🗝️ Clés uniques | 3 | clés spéciales |

---

## 🧩 Modules et skills

### Skills principaux

| Skill | Scène | Coordonnées | Objet interne |
| --- | --- | --- | --- |
| Boost | Overworld | `118, 80` | `SkillBoost` |
| Dash | Dungeon1 | `517, 237` | `SkillDash` |
| Supershot | Dungeon2 | `952, 340` | `SkillSupershot` |
| Hover | Dungeon3 | `867, -14` | `SkillHover` |

### Modules purs

| Module | Scène | Coordonnées | Objet interne |
| --- | --- | --- | --- |
| Retaliation | Overworld | `39, -139` | `PickupModuleRetaliation` |
| Teleport | Overworld | `-8, 28` | `PickupModuleTeleport` |
| Compass | Overworld | `-10, 28.28` | `PickupModuleCompass` |
| CollectableScan | Overworld | `-12, 28` | `PickupModuleCollectableScan` |
| Overcharge | Overworld | `235, -29` | `PickupModuleOvercharge` |
| IdolAlly | Overworld | `-175, -167` | `PickupModuleIdolAlly` |
| IdolBomb | Overworld | `-179, -167` | `PickupModuleIdolBomb` |
| IdolSlow | Overworld | `-177, -167` | `PickupModuleIdolSlow` |
| FreePower | Overworld | `-174, -167` | `PickupModuleFreePower` |
| BoostCost | Cave | `-716, 22` | `PickupModuleBoostCost` |
| XpGain | Cave | `-652, -111.52` | `PickupModuleXpGain` |
| HpDrop | Cave | `-479, 145.64` | `PickupModuleHpDrop` |
| HearthCrystal | Cave | `-706, -160` | `PickupModuleHeartCrystal` |
| PrimordialCrystal | Cave | `-948, 237` | `PickupModulePrimordialCrystal` |
| BlueBullet | Cave | `-582, -28` | `PickupModuleBlueBullet` |
| Rage | Cave | `-756, -174` | `PickupModuleRage` |
| SpiritDash | Tower | `238, -341` | `PickupModuleSpiritDash` |

### Upgrades classés avec “Modules & Skills” par la carte

| Upgrade | Scène | Coordonnées | Remarque |
| --- | --- | --- | --- |
| BulletNumber lvl 1 | Overworld | `-178.5, -164.13` | tir supplémentaire |
| BulletNumber lvl 2 | Overworld | `-177.41, -164.13` | tir supplémentaire |
| BulletNumber lvl 3 | Overworld | `-176.32, -164.13` | tir supplémentaire |
| BulletNumber lvl 4 | Overworld | `-175.22, -164.13` | tir supplémentaire |
| BulletNumber lvl 0 | Cave | `-1002, -101` | upgrade lié au tir |
| PowerBombLevel lvl 0 | Temple1 | `-771, -323` | pouvoir bombe |
| PowerSlowLevel lvl 0 | Temple2 | `-568, -346` | pouvoir ralentissement |
| PowerAllyLevel lvl 0 | Temple3 | `-816, -494` | pouvoir allié |

---

## ❤️ Cœurs / HP

Total : **28 cœurs**.

### Par zone

| Zone | Nombre | Coordonnées |
| --- | ---: | --- |
| Overworld | 15 | `118,6` · `73,-17` · `42,55.73` · `42,-180` · `91,168` · `-143,158` · `72,-106` · `-1,55.05` · `-126,196` · `205.15,-75.56` · `-178,-167` · `-176,-167` · `172,260` · `-2,-96` · `-275,134` |
| Cave | 8 | `-552,48` · `-738,34` · `-704,90` · `-810,186` · `-810,-147` · `-718,23` · `-656,244` · `-648,86` |
| CaveExtra | 1 | `-1411,-84` |
| Dungeon1 | 1 | `564,236` |
| Dungeon2 | 1 | `908,368` |
| Dungeon3 | 1 | `921,-47` |
| Temple1 | 1 | `-839,-409` |

---

## ⚡ Énergie

Total : **8 upgrades énergie**.

| # | Scène | Coordonnées | Objet interne |
| ---: | --- | --- | --- |
| 1 | Overworld | `-41.96, 16` | `OverworldEnergy0` |
| 2 | Overworld | `-50.5, -34` | `OverworldEnergy1` |
| 3 | Overworld | `18, -22` | `OverworldEnergy2` |
| 4 | Overworld | `-108, 108` | `OverworldEnergy3` |
| 5 | Overworld | `65, 114` | `OverworldEnergy4` |
| 6 | Cave | `-654, -111` | `CaveEnergy0` |
| 7 | Dungeon1 | `500, 219` | `Dungeon1Energy0` |
| 8 | Dungeon3 | `829, -15` | `Dungeon3Energy0` |

---

## 🏁 Courses

Il y a **8 race spirits** visibles dans les données, ce qui correspond aux 8 courses à compléter.

### Race spirits à trouver

| # | Scène | Coordonnées | Objet interne |
| ---: | --- | --- | --- |
| 1 | Cave | `-480, -1` | `NpcTiny0` |
| 2 | Cave | `-503, 93` | `NpcTiny1` |
| 3 | CaveExtra | `-1311, 161` | `NpcTiny2` |
| 4 | CaveExtra | `-1293, 42` | `NpcTiny3` |
| 5 | CaveExtra | `-1201, 120` | `NpcTiny4` |
| 6 | CaveExtra | `-1507, -1` | `NpcTiny5` |
| 7 | CaveExtra | `-1503, 122` | `NpcTiny6` |
| 8 | CaveExtra | `-1199, -80` | `NpcTiny7` |

### Courses chronométrées détectées par les données

| # | Scène | Coordonnées | Durée | Objet interne |
| ---: | --- | --- | ---: | --- |
| 1 | Dungeon3 | `876, -57` | 24 | `Dungeon3RaceManager0` |
| 2 | Dungeon3 | `876, -57` | 15 | `Dungeon3RaceManager1` |
| 3 | Temple3 | `-735, -650` | 13 | `Temple3RaceManager0` |
| 4 | Temple3 | `-897, -594` | 10 | `Temple3RaceManager1` |
| 5 | CaveArena | `467, 553` | 46 | `CaveArenaRaceManager0` |

> Note : les CSV distinguent les **race spirits** et certains **timers internes**. Pour le joueur, la référence pratique reste les 8 race spirits.

---

## 🪲 Scarabées dorés

Total : **18 scarabées dorés**.

| # | Scène | Coordonnées | Objet interne |
| ---: | --- | --- | --- |
| 1 | Overworld | `6.25, -42.85` | `OverworldScarabPickup0` |
| 2 | Overworld | `78, -132` | `OverworldScarabPickup1` |
| 3 | Overworld | `169.08, 92.73` | `OverworldScarabPickup2` |
| 4 | Overworld | `-171.87, 180.2` | `OverworldScarabPickup3` |
| 5 | Overworld | `-283, 267` | `OverworldScarabPickup4` |
| 6 | Overworld | `125.89, -49.08` | `OverworldScarabPickup5` |
| 7 | Overworld | `231.73, 36.33` | `OverworldScarabPickup6` |
| 8 | Overworld | `-68, 90` | `OverworldScarabPickup7` |
| 9 | Cave | `-822, 130.6` | `CaveScarabPickup0` |
| 10 | Cave | `-822, 146` | `CaveScarabPickup1` |
| 11 | Cave | `-774.03, -53.42` | `CaveScarabPickup2` |
| 12 | Cave | `-838.48, -130` | `CaveScarabPickup3` |
| 13 | Dungeon2 | `1046, 340` | `Dungeon2ScarabPickup0` |
| 14 | Dungeon3 | `911, 66` | `Dungeon3ScarabPickup0` |
| 15 | Dungeon3 | `829, -60` | `Dungeon3ScarabPickup1` |
| 16 | Temple1 | `-851, -361` | `Temple1ScarabPickup0` |
| 17 | Temple2 | `-524, -406` | `Temple2ScarabPickup0` |
| 18 | Temple3 | `-824, -619` | `Temple3ScarabPickup0` |

---

## 🗺️ Cartes et lore

### Fragments de carte

| Fragment | Scène | Coordonnées |
| --- | --- | --- |
| Desert | Overworld | `-149.08, 66.44` |
| Green | Overworld | `89, 37` |
| Sunken City | Overworld | `-172, 170` |
| Beach | Overworld | `180, -24` |
| Forest | Cave | `-714, 23` |
| Swamp | Cave | `-481, 146` |
| Abyss | Cave | `-797.94, -114.41` |
| Junkyard | Cave | `-590, 188` |

### Tablettes lore

| Tablette | Scène | Coordonnées |
| --- | --- | --- |
| LorePickup2 | Overworld | `-98.63, -256.95` |
| LorePickup1 | Cave | `-650, -111` |
| LorePickup3 | Cave | `-477, 146` |
| LorePickup4 | Cave | `-800, 188` |
| LorePickup5 | Tower | `-72, -333` |

---

## 🔑 Clés principales

### Clés normales

| Zone | Nombre | Coordonnées |
| --- | ---: | --- |
| Dungeon1 | 4 | `474,271` · `423,225` · `490,205` · `603.84,245.25` |
| Dungeon2 | 4 | `888,340` · `919,261` · `972,314` · `818,288` |
| Dungeon3 | 5 | `949,4` · `792,-65` · `921,-20` · `792,51` · `824.98,-10.34` |

---

## 🧠 Comment utiliser ces infos

1. Ouvre la carte interactive : <https://minishoot-map.github.io/>
2. Active **un seul filtre** : Modules, Hearts, Scarabs, Race spirits, etc.
3. Compare avec les tableaux ci-dessus.
4. Si tu veux tout vérifier en brut, ouvre le CSV correspondant dans `data/map-extract/`.

Cette page est volontairement plus lisible que les CSV : elle sert de **pont entre les données brutes et le guide joueur**.
