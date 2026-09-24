#!/bin/sh
# Screenshot a route of the local site (server must run on :8765).
# usage: tools/shot.sh ROUTE [WIDTH] [HEIGHT] [OUT]   e.g. tools/shot.sh ch/1 390 2400 /tmp/m.png
# WIDTH 390 ≈ iPhone 14, 375 ≈ iPhone SE/mini, 1280 = desktop. Prints the PNG path.
R=${1:-}; W=${2:-1280}; H=${3:-2400}; OUT=${4:-/tmp/n2shot/$(echo "$R" | tr '/' '_')-$W.png}
mkdir -p "$(dirname "$OUT")"
C="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
P=/tmp/n2shot-profile-$$
"$C" --headless=new --disable-gpu --hide-scrollbars --user-data-dir=$P --force-device-scale-factor=1 \
  --window-size=$W,$H --virtual-time-budget=4000 --screenshot="$OUT" "http://localhost:8765/#/$R" >/dev/null 2>&1 &
PID=$!; i=0; while kill -0 $PID 2>/dev/null && [ $i -lt 25 ]; do sleep 1; i=$((i+1)); done
kill $PID 2>/dev/null; rm -rf $P
echo "$OUT"
