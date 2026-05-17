# 🎮 Guide visuel rapide — Minishoot' Adventures

> Page d’accueil pratique : quoi chercher, avec quel pictogramme, quelle page ouvrir, et quel filtre activer sur la carte interactive.

📌 Légende complète : [Pictogrammes](pictogrammes.md)  
🗺️ Carte interactive : <https://minishoot-map.github.io/>

---

## 🚀 Si tu veux finir le jeu à 100%

Lis dans cet ordre :

| Étape | Picto | Action | Page |
| ---: | --- | --- | --- |
| 1 | 🧭 | Avancer l’histoire proprement | [Soluce](soluce.md) |
| 2 | 🧱 | Vérifier les secrets faciles à rater | [Secrets](secrets.md) |
| 3 | 🧩 | Nettoyer modules et skills | [Modules](modules.md) |
| 4 | 🪲 | Ramasser les scarabées dorés | [Dépannage scarabées](depannage.md#scarabee-dore-manquant) |
| 5 | 🏁 | Terminer les 8 courses | [Courses](courses.md) |
| 6 | ✅ | Faire la checklist finale | [100%](100-percent.md) |
| 7 | 🛠️ | Diagnostiquer ce qui manque | [Dépannage](depannage.md) |

---

## 🗺️ Filtres de la carte interactive

| Filtre map | Icône map | Sert à trouver | Export local |
| --- | --- | --- | --- |
| **Modules & Skills** | <img src="assets/map-icons/module.png" width="34" alt="Module"> <img src="assets/map-icons/skill.png" width="34" alt="Skill"> | modules, pouvoirs, upgrades liés | [`modules_and_skills.csv`](../data/map-extract/modules_and_skills.csv) |
| **Scarabs** | <img src="assets/map-icons/golden-scarab.png" width="34" alt="Scarab"> | scarabées dorés | [`scarabs.csv`](../data/map-extract/scarabs.csv) |
| **Race spirits** | <img src="assets/map-icons/race-spirit.png" width="34" alt="Race spirit"> | esprits de course | [`race_spirits.csv`](../data/map-extract/race_spirits.csv) |
| **Heart crystals** | <img src="assets/map-icons/heart-crystal.png" width="34" alt="Heart crystal"> | vie / coeurs | [`heart_crystals.csv`](../data/map-extract/heart_crystals.csv) |
| **Energy upgrades** | <img src="assets/map-icons/energy-upgrade.png" width="34" alt="Energy"> | énergie | [`energy_upgrades.csv`](../data/map-extract/energy_upgrades.csv) |
| **Map & Lore fragments** | <img src="assets/map-icons/map-piece.png" width="34" alt="Map"> <img src="assets/map-icons/lore-tablet.png" width="34" alt="Lore"> | fragments de carte + lore | [`map_and_lore.csv`](../data/map-extract/map_and_lore.csv) |
| **Red coins / Big crystals** | <img src="assets/map-icons/big-crystal.png" width="34" alt="Big crystal"> | gros cristaux / red coins | [`red_coins_big_crystals.csv`](../data/map-extract/red_coins_big_crystals.csv) |

✅ Méthode : active **un seul filtre à la fois**, puis nettoie zone par zone.

---

## 🧩 Modules et pouvoirs — repères rapides

### ✨ Skills principaux

| Icône | Skill | Où regarder |
| --- | --- | --- |
| <img src="assets/map-icons/skills-boost.png" width="34" alt="Boost"> | Boost | [Soluce](soluce.md) |
| <img src="assets/map-icons/skills-dash.png" width="34" alt="Dash"> | Dash | [Soluce](soluce.md) |
| <img src="assets/map-icons/skills-supershot.png" width="34" alt="Supershot"> | Supershot | [Soluce](soluce.md) |
| <img src="assets/map-icons/skills-hover.png" width="34" alt="Hover"> | Hover | [Soluce](soluce.md) |

### 🧩 Modules souvent importants / oubliés

| Icône | Module | À vérifier |
| --- | --- | --- |
| <img src="assets/map-icons/modules-compass.png" width="34" alt="Compass"> | Compass | utile pour le nettoyage |
| <img src="assets/map-icons/modules-collectablescan.png" width="34" alt="CollectableScan"> | CollectableScan | aide à repérer les collectibles |
| <img src="assets/map-icons/modules-teleport.png" width="34" alt="Teleport"> | Teleport | confort de navigation |
| <img src="assets/map-icons/modules-hearthcrystal.png" width="34" alt="HearthCrystal"> | HearthCrystal | cas lié aux coeurs / récompenses |
| <img src="assets/map-icons/modules-primordialcrystal.png" width="34" alt="PrimordialCrystal"> | PrimordialCrystal | vérifier vendeur/scarabées |
| <img src="assets/map-icons/modules-spiritdash.png" width="34" alt="SpiritDash"> | SpiritDash | lié à progression avancée |

Page complète : [Modules](modules.md)

---

## 🛠️ Diagnostic visuel rapide

| Ce qui manque | Picto map | Première vérification | Page |
| --- | --- | --- | --- |
| Module | <img src="assets/map-icons/module.png" width="34" alt="Module"> | Family Home / vendeur scarabées / courses | [Dépannage](depannage.md#module-manquant-malgre-100-carte) |
| Scarabée | <img src="assets/map-icons/golden-scarab.png" width="34" alt="Scarab"> | filtre **Scarabs** zone par zone | [Dépannage scarabée](depannage.md#scarabee-dore-manquant) |
| Course | <img src="assets/map-icons/race-spirit.png" width="34" alt="Race spirit"> | filtre **Race spirits** | [Courses](courses.md) |
| Coeur | <img src="assets/map-icons/heart-crystal.png" width="34" alt="Heart"> | filtre **Heart crystals** | [Map data](map-data.md) |
| Énergie | <img src="assets/map-icons/energy-upgrade.png" width="34" alt="Energy"> | filtre **Energy upgrades** | [Map data](map-data.md) |
| Lore / carte | <img src="assets/map-icons/lore-tablet.png" width="34" alt="Lore"> <img src="assets/map-icons/map-piece.png" width="34" alt="Map"> | filtre **Map & Lore fragments** | [Map data](map-data.md) |

---

## ⚠️ Les pièges les plus fréquents

| Picto | Piège | Pourquoi c’est important |
| --- | --- | --- |
| 🏠 | **Family Home** | récompense/module facile à oublier après les sauvetages |
| 🪲 | **Vendeur scarabées** | il faut revenir après avoir assez de scarabées |
| 🏁 | **Récompense des 8 courses** | gagner les courses ne suffit pas toujours : récupérer la récompense |
| ❤️ | **Wounded Heart** | passage caché près de l’autel, souvent raté |
| 🗺️ | **100% carte ≠ 100% jeu** | certaines récompenses dépendent d’un retour/interactions |

---

## 📊 Données extraites disponibles

Les données brutes sont dans [`../data/map-extract/`](../data/map-extract/).

Les plus utiles :

- [`summary.json`](../data/map-extract/summary.json)
- [`all-items.csv`](../data/map-extract/all-items.csv)
- [`modules_and_skills.csv`](../data/map-extract/modules_and_skills.csv)
- [`scarabs.csv`](../data/map-extract/scarabs.csv)
- [`race_spirits.csv`](../data/map-extract/race_spirits.csv)
- [`heart_crystals.csv`](../data/map-extract/heart_crystals.csv)
- [`energy_upgrades.csv`](../data/map-extract/energy_upgrades.csv)

---

## 🧠 Règle finale

Si tu es perdu :

1. 🧭 ouvre [Parcours 100%](parcours-100.md)
2. 🗺️ ouvre la carte interactive
3. 🎚️ active un seul filtre
4. 🛠️ si ça ne suffit pas, va dans [Dépannage](depannage.md)
