#!/bin/sh
# Screenshot a route of the local site (server must run on :8765).
# usage: tools/shot.sh ROUTE [WIDTH] [HEIGHT] [OUT]   e.g. tools/shot.sh ch/1 1280 2400 /tmp/d.png
# Uses Chrome's --window-size, which cannot go below ~500 px (Chrome clamps the window and the page
# renders at 500 px wide) and has no mobile emulation. For WIDTH < 500 this script therefore hands off to
# tools/shot.mjs (CDP device emulation); prefer calling that directly for phones:
#   node tools/shot.mjs ch/1 390 2400 /tmp/m.png      (390 ≈ iPhone 14, 375 ≈ iPhone SE/mini)
# Prints the PNG path.
R=${1:-}; W=${2:-1280}; H=${3:-2400}; OUT=${4:-/tmp/n2shot/$(echo "$R" | tr '/' '_')-$W.png}
if [ "$W" -lt 500 ]; then exec node "$(dirname "$0")/shot.mjs" "$R" "$W" "$H" "$OUT"; fi
mkdir -p "$(dirname "$OUT")"
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
P=/tmp/n2shot-profile-$$
"$C" --headless=new --disable-gpu --hide-scrollbars --user-data-dir=$P --force-device-scale-factor=1 \
  --window-size=$W,$H --virtual-time-budget=4000 --screenshot="$OUT" "http://localhost:8765/#/$R" >/dev/null 2>&1 &
PID=$!; i=0; while kill -0 $PID 2>/dev/null && [ $i -lt 25 ]; do sleep 1; i=$((i+1)); done
kill $PID 2>/dev/null; rm -rf $P
echo "$OUT"
