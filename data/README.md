# 📊 Données extraites

Ce dossier contient les exports structurés utilisés par le guide.

## `map-extract/`

Extraction du repo open-source de la carte interactive : <https://github.com/minishoot-map/minishoot-map.github.io>

- source jeu indiquée par la carte : **v1.05**
- formats : JSON + CSV
- script de génération : [`../scripts/extract-map-data.mjs`](../scripts/extract-map-data.mjs)
- documentation lisible : [`../docs/map-data.md`](../docs/map-data.md)

Fichiers les plus utiles :

- `summary.json` — compteurs globaux
- `all-items.csv` — tout l’extrait en tableur
- `modules_and_skills.csv` — modules, skills et upgrades liés
- `scarabs.csv` — scarabées dorés
- `race_spirits.csv` — esprits de course
- `heart_crystals.csv` — coeurs
- `energy_upgrades.csv` — énergie
- `entrances.csv` — entrées/transitions

Ces fichiers sont bruts : ils donnent les coordonnées et objets internes. Les explications humaines sont dans les fichiers `docs/`.
