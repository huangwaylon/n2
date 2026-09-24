# N2 文法 — Interactive JLPT N2 Grammar Textbook

Run locally: `python3 -m http.server` then open http://localhost:8000/

## Features

- All 139 grammar points (plus every ＋Plus sub-pattern and usage note), in the book's order and numbering
- Japanese-first explanations; **English translations and detailed English "deep-dives" are hidden by default**
  — toggle globally with the **EN** switch (or press `E`), or per line with the small **EN** buttons
- Furigana toggle
- Sample texts (見本文), やってみよう practice, Check, and JLPT-format まとめの問題
  (文法形式の判断 · 文の組み立て ★ · 文章の文法 / 読解 · 聴解)
- Listening questions and read-aloud for every example via the browser's Japanese speech synthesis
- Progress ("studied") and scores saved in `localStorage`
- Searchable index, similar-pattern comparison list, can-do list, random drill

Book content (sample texts, explanations, examples, exercises, answer keys, listening scripts) is
transcribed verbatim from the book. English translations of sentences and the deep-dives are supplementary.

## Structure

```
index.html            single page app shell
assets/app.js         renderer (routing, markup, exercises, TTS, progress); ownership regions [A]/[B]/[C]
assets/css/           base.css (tokens, shared primitives) · shell.css (topbar, sidebar, pages)
                      · content.css (chapter content) · exercises.css (exercises, review) — see docs/LAYOUT.md §3
data/chapters/chNN.js one file per chapter — see data/SCHEMA.md
data/compare.js       similar-pattern list
tools/check.js        structural validator:   node tools/check.js data/chapters/ch01.js
tools/verify-index.js asserts every form in the book's index maps to the right point number
tools/index-manifest.txt  ground truth transcribed from the book's index (pp. 216–219)
tools/ocr/            Vision-framework OCR of every page (ocr.swift) — used by tools/ocr-diff.js
tools/ocr-diff.js     fuzzy-matches every transcribed string against the OCR of its pages
tools/shot.mjs        screenshot with device emulation (any width, incl. phones)
tools/overflow.mjs    horizontal-overflow / clipping / touch-target probe
tools/text-snapshot.js  text dump of every route; compare against tools/text-baseline.txt
```

No build step: open `index.html` through any static server (`python3 -m http.server`) or GitHub Pages.

## Verifying content

```sh
for f in data/chapters/*.js; do node tools/check.js "$f"; done
node tools/verify-index.js
node tools/ocr-diff.js data/chapters/ch01.js 18-29   # strings below 0.90 need a look at the scan
```

## Layout tools (screenshots, overflow)

Need Node ≥ 22, Google Chrome, and the site served on port 8765 (`python3 -m http.server 8765`).
Routes are hash routes without `#/` (`""` = home, `ch/1`, `ch/2/review`, `gp/12`, `compare` …).

```sh
# screenshot: ROUTE [WIDTH=1280] [HEIGHT=900] [OUT] [light|dark] [--full] [--en]
node tools/shot.mjs ch/1 390 2400 /tmp/ch1-390.png          # iPhone 14 width, mobile emulation
node tools/shot.mjs ch/2/review 375 900 /tmp/r.png dark --en # dark mode, English layer on
node tools/shot.mjs ch/1 1280 900 /tmp/ch1.png --full        # whole page
# page console messages and JS exceptions are printed to stderr

# overflow probe: ROUTE [WIDTH=390] [--en] [--touch] [--dark]  -> JSON {vw, docW, vp, clip, touch?}
node tools/overflow.mjs ch/1 375
for w in 320 375 390; do node tools/overflow.mjs ch/2/review $w --en; done
node tools/overflow.mjs ch/1 390 --touch                     # also list tap targets < 44×44

# layout changes must not change text content:
node tools/text-snapshot.js | diff tools/text-baseline.txt -
```

`tools/shot.sh` (plain `--window-size`) only works at ≥ 500 px; for narrower widths it forwards to `tools/shot.mjs`.
