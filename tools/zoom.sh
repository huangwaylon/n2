#!/bin/sh
# High-resolution strips of a book page for reading small furigana.
# usage: tools/zoom.sh PAGE [STRIP]   → prints image paths; STRIP = 1|2|3 (top/middle/bottom), default all
# Read the printed PNG paths with the Read tool.
P=$(printf "%03d" "$1"); OUT=/tmp/n2zoom; mkdir -p $OUT
PDF="$(cd "$(dirname "$0")/.." && pwd)/n2.pdf"
for s in ${2:-1 2 3}; do
  f=$OUT/p$P-$s.png
  if [ ! -f "$f" ]; then
    # 300 dpi page = 2481 x 3508 px; three overlapping strips of 1300 px
    y=$(( (s - 1) * 1104 ))
    pdftoppm -r 300 -f "$1" -l "$1" -x 0 -y $y -W 2481 -H 1300 -png -singlefile "$PDF" "${f%.png}" 2>/dev/null
  fi
  echo "$f"
done
