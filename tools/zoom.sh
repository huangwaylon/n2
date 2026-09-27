#!/bin/sh
# High-resolution strips of a book page for reading small furigana.
# usage: tools/zoom.sh [n1|n2|q2] PAGE [STRIP]   → prints image paths; STRIP = 1|2|3 (top/middle/bottom), default all;
#        STRIP = page → the whole page at reading resolution (layout). Book default n2; PAGE is the PDF page.
#        Read the printed PNG paths with the Read tool.
BOOK=n2; case "$1" in n1|n2|q2) BOOK=$1; shift;; esac
P=$(printf "%03d" "$1"); OUT=/tmp/${BOOK}zoom; mkdir -p $OUT
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
if [ "$BOOK" = q2 ]; then
  # Quartet II: phone screenshots of a PDF viewer, 2881×5121 px at 192 dpi; the printed page is the fixed box
  # x 48–2830, y 599–4522 (black bars above and below). Not in git (311 MB): see docs/Q2-TRANSCRIPTION.md
  PDF="$ROOT/Quartet II - Textbook - 1st Edition.pdf"
  for s in ${2:-1 2 3}; do
    f=$OUT/p$P-$s.png
    if [ ! -f "$f" ]; then
      if [ "$s" = page ]; then
        pdftoppm -r 96 -f "$1" -l "$1" -x 24 -y 300 -W 1391 -H 1962 -png -singlefile "$PDF" "${f%.png}" 2>/dev/null
      else
        # three overlapping strips of 1500 px
        y=$(( 599 + (s - 1) * 1212 ))
        pdftoppm -r 192 -f "$1" -l "$1" -x 48 -y $y -W 2782 -H 1500 -png -singlefile "$PDF" "${f%.png}" 2>/dev/null
      fi
    fi
    echo "$f"
  done
  exit 0
fi
PDF="$ROOT/$BOOK.pdf"
# page size in pixels at 300 dpi (N2: A4 2481×3508; N1 is a web-print scan, same A4 frame)
for s in ${2:-1 2 3}; do
  f=$OUT/p$P-$s.png
  if [ ! -f "$f" ]; then
    # three overlapping strips of 1300 px
    y=$(( (s - 1) * 1104 ))
    pdftoppm -r 300 -f "$1" -l "$1" -x 0 -y $y -W 2481 -H 1300 -png -singlefile "$PDF" "${f%.png}" 2>/dev/null
  fi
  echo "$f"
done
