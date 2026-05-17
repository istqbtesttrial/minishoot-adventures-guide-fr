# 📊 Données techniques et CSV

> Page pour comprendre les fichiers bruts générés depuis la carte interactive.
>
> Pour les emplacements, catégories, quantités et objets placés, ces données sont la **référence absolue** du guide.

## Source

Les données viennent du repo open-source de la carte interactive : <https://github.com/minishoot-map/minishoot-map.github.io>

La carte indique que ses données/images viennent de la version **v1.05** du jeu.

---

## Fichiers utiles

| Fichier | Utilité |
| --- | --- |
| `summary.json` | compteurs globaux |
| `all-items.csv` | tout l’extrait en tableur |
| `modules_and_skills.csv` | modules, skills et upgrades liés |
| `modules.csv` | modules purs |
| `skills.csv` | skills principaux |
| `heart_crystals.csv` | cœurs / HP |
| `energy_upgrades.csv` | énergie |
| `scarabs.csv` | scarabées dorés |
| `race_spirits.csv` | esprits de course |
| `timer_races.csv` | courses chronométrées internes |
| `map_and_lore.csv` | fragments de carte + lore |
| `regular_keys.csv` | clés normales |
| `boss_keys.csv` | boss keys |
| `unique_keys.csv` | clés spéciales |
| `entrances.csv` | entrées / transitions |
| `tunnels.csv` | tunnels |
| `checkpoints.csv` | checkpoints |
| `enemies.csv` | ennemis |
| `crystals.csv` | cristaux destructibles |
| `jars.csv` | jarres |
| `torches.csv` | torches |

---

## Compteurs importants

| Catégorie | Nombre |
| --- | ---: |
| Scènes analysées | 16 |
| Objets Unity analysés | 176 301 |
| Modules purs | 17 |
| Skills | 4 |
| Modules & Skills carte | 29 |
| Scarabées dorés | 18 |
| Race spirits | 8 |
| Cœurs / HP | 28 |
| Énergie | 8 |
| Map + lore | 13 |
| Entrées / transitions | 255 |
| Tunnels | 86 |
| Checkpoints | 26 |
| Ennemis | 2 970 |
| Cristaux destructibles | 810 |
| Jarres | 369 |
| Torches | 509 |

---

## Pages lisibles générées depuis ces données

- [Modules et skills](modules-et-skills.md)
- [Cœurs et énergie](coeurs-et-energie.md)
- [Courses et race spirits](courses-et-race-spirits.md)
- [Scarabées dorés](scarabees-dores.md)
- [Cartes, lore et clés](cartes-lore-et-cles.md)

---

## Dossier brut

Tous les exports sont dans : [`../data/map-extract/`](../data/map-extract/)

Ancienne page technique complète : [`map-data.md`](map-data.md)
