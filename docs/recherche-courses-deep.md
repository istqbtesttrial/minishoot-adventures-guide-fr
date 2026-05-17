# 🔎 Recherche deep — les 8 courses

> Synthèse des informations trouvées en ligne + données extraites de la carte interactive.  
> Objectif : comprendre où sont les 8 courses, comment les retrouver, quoi faire si une course manque, et quelle récompense est liée.

---

## Résumé important

- Il y a **8 race spirits** à trouver / battre.
- Les données extraites de la carte interactive listent bien **8 esprits de course**.
- Le guide communautaire de YellowAfterlife / YAL confirme une section dédiée aux **8 races**, avec captures pour chaque course.
- Terminer toutes les courses sert à accéder à du contenu **extras / post-game** après le boss final.
- Les faire avant la fin donne aussi un **objet utile**.
- La course qui bloque le plus souvent les joueurs est la **course #2**, à cause d’un accès caché lié à une tour avec un symbole de **3 slimes**.

---

## Sources principales consultées

| Source | Ce qu’elle apporte |
| --- | --- |
| [Guide Steam “Where’s everything”](https://steamcommunity.com/sharedfiles/filedetails/?id=3448008054) | captures des 8 courses, récompense, conseil de réallocation des points |
| [Version GitHub du guide YAL](https://github.com/YAL-Game-Things/Minishoot-Adventures-Guide) | même guide en version plus stable avec fichiers images |
| [Section “050 Races” du guide YAL](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/050%20Races.md) | structure exacte Race #1 à #8 + reward |
| [Discussion Steam “Second race location?”](https://steamcommunity.com/app/1634860/discussions/0/4362373279646124209/) | détails précis pour débloquer la course #2 |
| [Reddit — last race missing](https://www.reddit.com/r/metroidvania/comments/1t5kx1p/minishoot_adventures_help_finding_last_race/) | méthode pour retrouver une course non validée avec les checkmarks |
| [GodIsAGeek — move faster](https://godisageek.com/2024/04/minishoot-adventures-how-to-move-faster/) | optimisation mouvement : Move Speed coûte 8 cristaux au total |
| Données locales `data/map-extract/race_spirits.csv` | coordonnées brutes des 8 race spirits |
| Données locales `data/map-extract/timer_races.csv` | timers internes de certaines courses |

---

## Coordonnées brutes des 8 race spirits

Ces coordonnées viennent de `race_spirits.csv`.

| # | Zone technique | Coordonnées | Objet interne | Lecture pratique |
| ---: | --- | --- | --- | --- |
| 1 | Cave | `-480, -1` | `NpcTiny0` | course dans une zone souterraine / cave |
| 2 | Cave | `-503, 93` | `NpcTiny1` | probablement la course cachée liée à la tour aux 3 slimes |
| 3 | CaveExtra | `-1311, 161` | `NpcTiny2` | zone extra / souterraine avancée |
| 4 | CaveExtra | `-1293, 42` | `NpcTiny3` | zone extra / souterraine avancée |
| 5 | CaveExtra | `-1201, 120` | `NpcTiny4` | zone extra / souterraine avancée |
| 6 | CaveExtra | `-1507, -1` | `NpcTiny5` | zone extra / souterraine avancée |
| 7 | CaveExtra | `-1503, 122` | `NpcTiny6` | zone extra / souterraine avancée |
| 8 | CaveExtra | `-1199, -80` | `NpcTiny7` | zone extra / souterraine avancée |

> Note : les noms `Cave` / `CaveExtra` sont des noms techniques extraits des données. En jeu, les accès peuvent se faire depuis l’overworld via des tours, grottes, bâtiments ou passages cachés.

---

## Lecture visuelle des captures du guide YAL

Le guide YAL fournit deux captures par course : une vue carte + une vue en jeu. Les régions ci-dessous sont déduites de ces captures, donc à utiliser comme repères visuels, pas comme noms officiels.

| Course | Repère visuel principal | Position approximative | Capture source |
| ---: | --- | --- | --- |
| #1 | passage sable / canyon rocheux, couloir étroit | est / sud-est | [race1a](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race1a.jpg), [race1b](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race1b.jpg) |
| #2 | tour avec symbole de 3 slimes, accès caché vers souterrain | près du spawn central puis zone souterraine | [race2a](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race2a.jpg), [race2b](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race2b.jpg) |
| #3 | forêt sombre / zone bleutée avec chemins rectangulaires | ouest / sud-ouest | [race3a](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race3a.jpg), [race3b](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race3b.jpg) |
| #4 | couloir rocheux / ruines, grande zone intérieure | centre-ouest | [race4a](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race4a.jpg), [race4b](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race4b.jpg) |
| #5 | forêt rouge / orange, alcôves et bouton visible | est / nord-est | [race5a](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race5a.jpg), [capture](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/20250319144757_1.jpg) |
| #6 | chemins de pierre / ruines dans zone sombre | ouest / sud-ouest | [race6a](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race6a.jpg), [race6b](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race6b.jpg) |
| #7 | zone désert / ville dorée, bâtiments à dômes | sud-est | [race7a](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race7a.jpg), [race7b](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race7b.jpg) |
| #8 | lagon / jungle / eau turquoise | sud / sud-est | [race8a](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race8a.jpg), [race8b](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/race8b.jpg) |

---

## Course #2 — accès détaillé, car c’est la plus problématique

La course #2 est celle qui revient le plus souvent dans les discussions.

### Repère général

- Cherche une **tour** avec un dessin / symbole de **3 slimes** devant l’entrée.
- La tour est indiquée par les joueurs comme étant **au nord du spawn principal**, légèrement vers l’est.
- Un autre repère donné : elle est **au nord de la première cave de boss**.

### Pour ouvrir la tour

D’après les retours joueurs :

1. Il faut déclencher / tuer **3 slimes** dans la zone.
2. Deux slimes sont liés à des zones carrées dans l’herbe à gauche / droite de la tour.
3. Le troisième est plus au sud-ouest, caché derrière une pierre / tombe / entrée à sens unique selon les descriptions.
4. Un token / bouton au nord de la tour peut déplacer un rocher et révéler le troisième emplacement.
5. Quand les 3 slimes sont faits, la tour s’ouvre.

### Après la tour

La tour mène à une zone à sens unique / souterraine. La discussion Steam précise ensuite :

- l’entrée de la course est liée à la cave avec la **clé scarabée dorée** ;
- dans la salle au-dessus de la clé, avec une plateforme au milieu, il faut prendre le chemin de droite ;
- ce chemin peut être bloqué par des piliers ;
- le bouton qui ouvre ces piliers est dans la salle au-dessus ;
- la piste de course est à l’est de la zone souterraine atteinte.

### Bug / souci possible

Un joueur signale qu’un slime à l’est pouvait devenir invincible ; redémarrer le jeu a corrigé le problème dans son cas.

---

## Récompense après les 8 courses

Après avoir gagné les 8 courses, il faut encore aller chercher la récompense finale.

Le guide YAL indique qu’après les 8 courses, un objet devient récupérable et qu’il sert ensuite pour les **extras** après le boss final.

Captures de la récompense :

- [emplacement reward 1](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/20250320002806_1.jpg)
- [emplacement reward 2](https://raw.githubusercontent.com/YAL-Game-Things/Minishoot-Adventures-Guide/main/races/20250320002811_1.jpg)

À noter dans le guide joueur :

- gagner les 8 courses ne suffit pas ;
- il faut **retourner récupérer l’objet final** ;
- cet objet est important pour le contenu bonus / post-game.

---

## Si une course manque

Méthode recommandée par les joueurs :

1. Récupérer / utiliser l’upgrade qui affiche les **checkmarks** sur ce qui est terminé.
2. Regarder les lieux qui n’ont pas de coche.
3. Revisiter chaque lieu sans coche : une course peut être mélangée avec une autre activité de zone.
4. Si tout semble coché sauf une tour verrouillée, suspecter la **tour aux 3 slimes** de la course #2.
5. Utiliser les captures du guide YAL pour comparer visuellement les lieux.

---

## Conseils pour réussir les courses

### Build conseillé

- Réallouer temporairement les points vers le **mouvement**.
- Monter **Move Speed** au maximum si possible.
- GodIsAGeek indique que Move Speed a 3 niveaux coûtant `1 + 3 + 4`, donc **8 cristaux de niveau** au total.
- Mettre aussi des points / ressources dans le boost si tu galères.
- Une astuce communautaire mentionne aussi l’usage de l’aptitude de ralentissement du temps.

### Réglages / accessibilité

- Si une course devient trop frustrante, les joueurs mentionnent les options d’accessibilité, notamment la vitesse du jeu.
- À utiliser en dernier recours si l’objectif est juste de finir le 100% sans frustration.

### Méthode d’entraînement

- Faire un tour de reconnaissance sans chercher le temps parfait.
- Repérer les virages où tu perds le plus de temps.
- Garder le boost pour les lignes droites / sorties de virage.
- Ne pas spammer le boost dans les virages serrés.
- Faire 3 ou 4 essais, puis passer à autre chose si tu t’énerves.

---

## Données techniques : timers internes

Le fichier `timer_races.csv` liste 5 courses / timers internes. Cela ne contredit pas les 8 race spirits : le jeu semble distinguer les esprits visibles et certains gestionnaires de timer.

| # | Zone technique | Coordonnées | Durée | Objet interne |
| ---: | --- | --- | ---: | --- |
| 1 | Dungeon3 | `876, -57` | 24 | `Dungeon3RaceManager0` |
| 2 | Dungeon3 | `876, -57` | 15 | `Dungeon3RaceManager1` |
| 3 | Temple3 | `-735, -650` | 13 | `Temple3RaceManager0` |
| 4 | Temple3 | `-897, -594` | 10 | `Temple3RaceManager1` |
| 5 | CaveArena | `467, 553` | 46 | `CaveArenaRaceManager0` |

---

## Ce qu’il reste à faire pour une page parfaite

- Ajouter des captures annotées maison directement dans le repo.
- Identifier précisément quelle capture correspond à quelle zone nommée en français.
- Relier chaque race spirit aux zones du guide avec une route étape par étape.
- Vérifier en jeu la course #2 pour confirmer la formulation exacte : slimes, cercles, token, rocher, tour, cave scarabée.

---

## Verdict

Les infos fiables à retenir :

1. **8 courses / race spirits** au total.
2. La **course #2** est la plus cachée.
3. Les **3 slimes / 3 cercles** ouvrent la tour menant vers l’accès.
4. La piste de la course #2 est dans une zone souterraine, vers l’est.
5. Après les 8 courses, il faut récupérer une **récompense finale**.
6. Cette récompense sert aux **extras / post-game**.
7. Pour réussir les courses, le meilleur plan est de réallouer temporairement vers **Move Speed / boost / ralentissement**.
