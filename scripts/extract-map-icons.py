#!/usr/bin/env python3
"""Extract useful marker pictograms from minishoot-map marker atlas.

Usage:
  python3 scripts/extract-map-icons.py /path/to/minishoot-map.github.io [output-dir]

Requires ImageMagick (`magick` or `convert`).
"""
from __future__ import annotations
import csv, json, re, shutil, subprocess, sys
from pathlib import Path

ROOT = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('/tmp/minishoot-map-src')
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else Path('docs/assets/map-icons')
ATLAS = ROOT / 'src/data-raw/markers/markers.png'
MARKERS = json.loads((ROOT / 'src/data-processed/markers.json').read_text())

if not ATLAS.exists():
    raise SystemExit(f'Atlas not found: {ATLAS}')

cmd = shutil.which('magick') or shutil.which('convert')
if not cmd:
    raise SystemExit('ImageMagick not found: install magick/convert')

OUT.mkdir(parents=True, exist_ok=True)

def slug(s: str) -> str:
    s = re.sub(r'[^a-zA-Z0-9]+', '-', s).strip('-').lower()
    return s or 'icon'

def crop(texture_i: int, name: str):
    x, y, w, h = MARKERS[texture_i]
    dest = OUT / f'{slug(name)}.png'
    # Resize into a 64x64 transparent box while preserving aspect ratio.
    subprocess.run([
        cmd, str(ATLAS), '-crop', f'{w}x{h}+{x}+{y}', '+repage',
        '-resize', '56x56', '-background', 'none', '-gravity', 'center',
        '-extent', '64x64', str(dest)
    ], check=True)
    return dest.name

icons: list[tuple[str, str, int, str]] = []
seen: set[tuple[str,int]] = set()

def add(category: str, label: str, texture_i: int, filename: str | None = None):
    key = (filename or label, texture_i)
    if key in seen:
        return
    seen.add(key)
    fn = crop(texture_i, filename or f'{category}-{label}')
    icons.append((category, label, texture_i, fn))

# Core map/category pictograms.
core = [
    ('module', 'Module / équipement', 26, 'module'),
    ('skill', 'Skill / pouvoir', 23, 'skill'),
    ('heart', 'Heart crystal / vie', 18, 'heart-crystal'),
    ('energy', 'Energy upgrade', 17, 'energy-upgrade'),
    ('scarab', 'Scarabée doré', 179, 'golden-scarab'),
    ('race', 'Race spirit', 124, 'race-spirit'),
    ('map', 'Fragment de carte', 24, 'map-piece'),
    ('lore', 'Tablette lore', 25, 'lore-tablet'),
    ('key', 'Clé normale', 136, 'regular-key'),
    ('key', 'Clé boss', 137, 'boss-key'),
    ('key', 'Clé unique finale', 122, 'unique-key-final'),
    ('key', 'Clé scarabée', 123, 'unique-key-scarab'),
    ('crystal', 'Gros cristal / red coin', 12, 'big-crystal'),
    ('tunnel', 'Tunnel', 16, 'tunnel'),
]
for c,l,i,f in core:
    add(c,l,i,f)

# Individual modules and module-like pickups from generated extraction, if present.
for csv_name in ['modules.csv', 'modules_and_skills.csv']:
    p = Path('data/map-extract') / csv_name
    if not p.exists():
        continue
    with p.open(newline='') as f:
        for row in csv.DictReader(f):
            tex = row.get('spriteI')
            if not tex:
                continue
            cat = row.get('category','pickup')
            label = row.get('name') or row.get('object') or f'texture-{tex}'
            # Keep the individual useful icons, not every duplicate stat occurrence.
            if cat in {'modules', 'skills'} or row.get('object','').startswith(('Temple','CavePower','CaveBullet')):
                add(cat, label, int(tex), f'{cat}-{label}')

# Write index markdown for humans.
lines = ['# Icônes extraites de la carte interactive', '',
         '> Icônes de marqueurs extraites depuis le sprite atlas de `minishoot-map/minishoot-map.github.io` (`src/data-raw/markers/markers.png`). Usage : repères visuels pour le guide FR.', '',
         '| Catégorie | Icône | Label | textureI | Fichier |',
         '| --- | --- | --- | ---: | --- |']
for category, label, tex, fn in icons:
    lines.append(f'| {category} | <img src="{fn}" width="28" alt="{label}"> | {label} | {tex} | `{fn}` |')
(OUT / 'README.md').write_text('\n'.join(lines) + '\n')
print(f'Extracted {len(icons)} icons into {OUT}')
