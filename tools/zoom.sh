#!/bin/sh
# High-resolution strips of a book page for reading small furigana.
# usage: tools/zoom.sh [n1|n2] PAGE [STRIP]   → prints image paths; STRIP = 1|2|3 (top/middle/bottom), default all
#        (book default n2; PAGE is the PDF page). Read the printed PNG paths with the Read tool.
BOOK=n2; case "$1" in n1|n2) BOOK=$1; shift;; esac
P=$(printf "%03d" "$1"); OUT=/tmp/${BOOK}zoom; mkdir -p $OUT
PDF="$(cd "$(dirname "$0")/.." && pwd)/$BOOK.pdf"
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
