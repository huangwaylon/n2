#!/bin/sh
# Screenshot a route in REAL mobile Safari (iOS Simulator, WebKit) — Chrome emulation (tools/shot.mjs) does not
# reproduce WebKit layout bugs (e.g. furigana positioning). Needs Xcode's simulators and the site on :8765.
# usage: tools/simshot.sh DEVICE ROUTE [OUT] [WAIT_SECONDS=12]
#   DEVICE  simulator name or UDID: "iPhone 17e" (small phone), "iPhone 17 Pro", "iPhone 17 Pro Max",
#           "iPad mini (A17 Pro)", "iPad Air 11-inch (M4)", "iPad Pro 13-inch (M5)"  (list: xcrun simctl list devices)
#   ROUTE   as for shot.mjs: "ch/2", "gp/12", "ch/3/review"; prefix "n1:" for the N1 book ("n1:ch/5")
# Only the viewport is captured (portrait). Route to a grammar point (gp/NN) to see a given part of a chapter.
# Each call opens a fresh URL (cache-busting query) in the device's Safari; the device is booted if needed.
# Use one device per agent to avoid clobbering someone else's page.
DEV=${1:?device}; R=${2:-}; OUT=${3:-/tmp/simshot/$(echo "$DEV-$R" | tr ' /:()' '_____').png}; W=${4:-12}
mkdir -p "$(dirname "$OUT")"
UDID=$(xcrun simctl list devices available | grep -F "$DEV (" | head -1 | sed -E 's/.*\(([0-9A-F-]{36})\).*/\1/')
[ -z "$UDID" ] && UDID=$DEV
xcrun simctl list devices | grep -q "$UDID) (Booted)" || { xcrun simctl boot "$UDID" >/dev/null 2>&1; sleep 25; W=$((W + 20)); }
case "$R" in n1:*) URL="http://localhost:8765/n1/?t=$(date +%s)#/${R#n1:}";; *) URL="http://localhost:8765/?t=$(date +%s)#/$R";; esac
xcrun simctl openurl "$UDID" "$URL"
sleep "$W"
xcrun simctl io "$UDID" screenshot "$OUT" >/dev/null 2>&1 && echo "$OUT"
