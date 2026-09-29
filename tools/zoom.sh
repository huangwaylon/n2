#!/bin/sh
# High-resolution strips of a book page for reading small furigana.
# usage: tools/zoom.sh [n1|n2|q2] PAGE [STRIP]   → prints image paths; STRIP = 1|2|3 (top/middle/bottom), default all;
#        STRIP = page → the whole page at reading resolution (layout). Book default n2; PAGE is the PDF page.
#        (Use this where the Read tool can't open the PDF — it needs pdftoppm, which zoom.sh can do without.)
#        Read the printed PNG paths with the Read tool.
BOOK=n2; case "$1" in n1|n2|q2) BOOK=$1; shift;; esac
P=$(printf "%03d" "$1"); OUT=/tmp/${BOOK}zoom; mkdir -p $OUT
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# render: pdftoppm (poppler) if installed, else tools/lib/pdfcrop.swift (PDFKit, compiled once into /tmp)
crop() { # PDF PAGE DPI X Y W H OUT-without-.png
  if command -v pdftoppm >/dev/null; then pdftoppm -r "$3" -f "$2" -l "$2" -x "$4" -y "$5" -W "$6" -H "$7" -png -singlefile "$1" "$8" 2>/dev/null; return; fi
  bin=/tmp/pdfcrop-bin; [ -x $bin ] && [ $bin -nt "$ROOT/tools/lib/pdfcrop.swift" ] || swiftc -O -o $bin "$ROOT/tools/lib/pdfcrop.swift" 2>/dev/null
  $bin "$1" "$2" "$3" "$4" "$5" "$6" "$7" "$8.png"
}
if [ "$BOOK" = q2 ]; then
  # Quartet II: phone screenshots of a PDF viewer, 2881×5121 px at 192 dpi; the printed page is the fixed box
  # x 48–2830, y 599–4522 (black bars above and below). Not in git (311 MB): see docs/Q2-TRANSCRIPTION.md
  PDF="$ROOT/Quartet II - Textbook - 1st Edition.pdf"
  for s in ${2:-1 2 3}; do
    f=$OUT/p$P-$s.png
    if [ ! -f "$f" ]; then
      if [ "$s" = page ]; then
        crop "$PDF" "$1" 96 24 300 1391 1962 "${f%.png}"
      else
        # three overlapping strips of 1500 px
        y=$(( 599 + (s - 1) * 1212 ))
        crop "$PDF" "$1" 192 48 $y 2782 1500 "${f%.png}"
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
    if [ "$s" = page ]; then crop "$PDF" "$1" 130 0 0 1075 1520 "${f%.png}"
    else
      # three overlapping strips of 1300 px
      y=$(( (s - 1) * 1104 ))
      crop "$PDF" "$1" 300 0 $y 2481 1300 "${f%.png}"
    fi
  fi
  echo "$f"
done
