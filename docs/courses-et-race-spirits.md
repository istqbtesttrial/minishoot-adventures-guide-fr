# 🏁 Courses et race spirits

> Page claire pour voir les 8 courses et les données liées.  
> Recherche approfondie : [🔎 Recherche deep — les 8 courses](recherche-courses-deep.md)
>
> 🗺️ La carte interactive fait foi pour les 8 race spirits et leurs emplacements ; les sources web expliquent surtout l’accès et les pièges.

## Résumé

| Élément | Nombre | À retenir |
| --- | ---: | --- |
| 👻 Race spirits | 8 | les 8 courses à trouver / compléter |
| 🏁 Timers internes | 5 | courses détectées par les données techniques |
| 🎁 Récompense finale | 1 | à récupérer après les 8 courses |

---

## Ce qu’on sait après recherche web

- Les 8 courses sont nécessaires pour accéder à certains **extras** après le boss final.
- Les faire avant la fin donne aussi un **objet utile**.
- La course la plus souvent ratée est la **course #2**, liée à une tour avec un symbole de **3 slimes**.
- Après les 8 courses, il faut **aller récupérer la récompense finale** : ne pas s’arrêter au succès.

---

## 👻 Les 8 race spirits

| # | Zone technique | Coordonnées | Objet interne | Repère visuel probable |
| ---: | --- | --- | --- | --- |
| 1 | Cave | `-480, -1` | `NpcTiny0` | passage sable / canyon rocheux |
| 2 | Cave | `-503, 93` | `NpcTiny1` | tour aux 3 slimes + accès souterrain |
| 3 | CaveExtra | `-1311, 161` | `NpcTiny2` | forêt sombre / zone bleutée |
| 4 | CaveExtra | `-1293, 42` | `NpcTiny3` | couloir rocheux / ruines |
| 5 | CaveExtra | `-1201, 120` | `NpcTiny4` | forêt rouge / orange |
| 6 | CaveExtra | `-1507, -1` | `NpcTiny5` | chemins de pierre / zone sombre |
| 7 | CaveExtra | `-1503, 122` | `NpcTiny6` | désert / ville dorée |
| 8 | CaveExtra | `-1199, -80` | `NpcTiny7` | lagon / jungle / eau turquoise |

> Les zones techniques viennent des CSV. Les repères visuels viennent des captures du guide communautaire YAL / YellowAfterlife.

---

## ⭐ Course #2 — accès à retenir

Si une course manque, vérifie celle-ci en premier.

### Repères

- Tour avec symbole de **3 slimes** devant l’entrée.
- Depuis le spawn principal : aller au nord, légèrement vers l’est selon les retours joueurs.
- Autre repère : au nord de la première cave de boss.

### Déblocage

1. Trouver / déclencher les 3 slimes de la zone.
2. Deux sont liés à des zones carrées dans l’herbe près de la tour.
3. Le troisième est plus au sud-ouest, derrière une pierre / tombe / entrée à sens unique.
4. Un token / bouton peut déplacer un rocher et révéler le troisième emplacement.
5. Une fois les 3 slimes faits, la tour s’ouvre.
6. La tour mène vers une zone souterraine.
7. La piste est à l’est de cette zone souterraine.

Voir le détail complet : [Recherche deep — Course #2](recherche-courses-deep.md#course-2--acces-detaille-car-cest-la-plus-problematique)

---

## 🏁 Courses chronométrées détectées

| # | Zone | Coordonnées | Durée | Objet interne |
| ---: | --- | --- | ---: | --- |
| 1 | Dungeon3 | `876, -57` | 24 | `Dungeon3RaceManager0` |
| 2 | Dungeon3 | `876, -57` | 15 | `Dungeon3RaceManager1` |
| 3 | Temple3 | `-735, -650` | 13 | `Temple3RaceManager0` |
| 4 | Temple3 | `-897, -594` | 10 | `Temple3RaceManager1` |
| 5 | CaveArena | `467, 553` | 46 | `CaveArenaRaceManager0` |

> Les CSV distinguent les race spirits visibles et certains timers internes. Pour le joueur, la référence pratique reste les **8 race spirits**.

---

## ✅ Checklist courses

- [ ] Course 1 gagnée
- [ ] Course 2 gagnée
- [ ] Course 3 gagnée
- [ ] Course 4 gagnée
- [ ] Course 5 gagnée
- [ ] Course 6 gagnée
- [ ] Course 7 gagnée
- [ ] Course 8 gagnée
- [ ] Récompense finale récupérée
- [ ] Succès **Plus rapide que vous tous !** validé

---

## Si une course manque

1. Utilise l’upgrade qui affiche les **checkmarks** sur les lieux complétés.
2. Revisite les lieux sans coche.
3. Si tout semble terminé mais qu’une tour reste bloquée, suspecte la **tour aux 3 slimes**.
4. Compare avec les captures dans [Recherche deep](recherche-courses-deep.md).

---

## Conseils rapides pour réussir

- Réalloue temporairement les points vers **Move Speed**.
- Max Move Speed coûte 8 cristaux de niveau au total : `1 + 3 + 4`.
- Mets aussi de quoi améliorer le boost si besoin.
- Utilise le boost surtout sur les lignes droites / sorties de virage.
- Si tu bloques trop longtemps, reviens après plus d’upgrades.
- En dernier recours, regarde les options d’accessibilité / vitesse du jeu.

---

## 🔗 Données brutes

- Race spirits CSV : [`../data/map-extract/race_spirits.csv`](../data/map-extract/race_spirits.csv)
- Timers CSV : [`../data/map-extract/timer_races.csv`](../data/map-extract/timer_races.csv)
- Recherche complète : [`recherche-courses-deep.md`](recherche-courses-deep.md)
- Ancienne page détaillée : [`courses.md`](courses.md)
