# 📊 Données extraites

Ce dossier contient les exports structurés utilisés par le guide.

## À lire d’abord

Pour une lecture humaine, n’ouvre pas les CSV directement : utilise les pages claires.

| Besoin | Page claire |
| --- | --- |
| Modules / skills | [`../docs/modules-et-skills.md`](../docs/modules-et-skills.md) |
| Cœurs / énergie | [`../docs/coeurs-et-energie.md`](../docs/coeurs-et-energie.md) |
| Courses | [`../docs/courses-et-race-spirits.md`](../docs/courses-et-race-spirits.md) |
| Scarabées | [`../docs/scarabees-dores.md`](../docs/scarabees-dores.md) |
| Cartes / lore / clés | [`../docs/cartes-lore-et-cles.md`](../docs/cartes-lore-et-cles.md) |
| Explication des CSV | [`../docs/donnees-techniques.md`](../docs/donnees-techniques.md) |

---

## `map-extract/`

Extraction du repo open-source de la carte interactive : <https://github.com/minishoot-map/minishoot-map.github.io>

- source jeu indiquée par la carte : **v1.05**
- formats : JSON + CSV
- script de génération : [`../scripts/extract-map-data.mjs`](../scripts/extract-map-data.mjs)

Fichiers les plus utiles :

- `summary.json` — compteurs globaux
- `all-items.csv` — tout l’extrait en tableur
- `modules_and_skills.csv` — modules, skills et upgrades liés
- `scarabs.csv` — scarabées dorés
- `race_spirits.csv` — esprits de course
- `heart_crystals.csv` — cœurs
- `energy_upgrades.csv` — énergie
- `map_and_lore.csv` — cartes + lore
- `regular_keys.csv` — clés normales
- `entrances.csv` — entrées/transitions

Ces fichiers sont bruts : ils donnent les coordonnées et objets internes. Les explications humaines sont dans les pages `docs/`.
