# N2 文法 — Interactive JLPT N2 Grammar Textbook

An interactive study companion for JLPT N2 grammar, organized around the 14 chapters and
139 grammar points of *TRY! 日本語能力試験 N2 文法から伸ばす日本語* (ABK / ASK Publishing).

**Private repo — personal use.** Run locally: `python3 -m http.server` then open http://localhost:8000/

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
assets/app.js         renderer (routing, markup, exercises, TTS, progress)
assets/style.css
data/chapters/chNN.js one file per chapter — see data/SCHEMA.md
data/compare.js       similar-pattern list
tools/check.js        structural validator:   node tools/check.js data/chapters/ch01.js
tools/verify-index.js asserts every form in the book's index maps to the right point number
tools/index-manifest.txt  ground truth transcribed from the book's index (pp. 216–219)
tools/ocr/            Vision-framework OCR of every page (ocr.swift) — used by tools/ocr-diff.js
tools/ocr-diff.js     fuzzy-matches every transcribed string against the OCR of its pages
```

No build step: open `index.html` through any static server (`python3 -m http.server`) or GitHub Pages.

## Verifying content

```sh
for f in data/chapters/*.js; do node tools/check.js "$f"; done
node tools/verify-index.js
node tools/ocr-diff.js data/chapters/ch01.js 18-29   # strings below 0.90 need a look at the scan
```
