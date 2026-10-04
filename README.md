# 日本語 — Interactive Japanese Textbooks

Interactive editions of four Japanese textbooks for English-speaking learners, on one static site (switch books in the
top bar; each book's home starts with a shelf of all four and 続きから Continue):

- **N2** — *TRY! 日本語能力試験 N2* (14 chapters, 139 grammar points; the book prints English): https://huangwaylon.github.io/n2/
- **N1** — *TRY! 日本語能力試験 N1* (10 chapters, 123 points), transcribed from the Chinese edition; its Chinese is not
  reproduced and all its English is generated: https://huangwaylon.github.io/n2/n1/
- **Q1** — *4技能でひろがる 中級日本語カルテット I / Quartet I* (lessons 1–6, 55 grammar notes, 初級文法チェック ①–⑦,
  漢字チャレンジ ①–⑫): https://huangwaylon.github.io/n2/q1/
- **Q2** — *Quartet II* (lessons 7–12, 65 grammar notes, 上級へのチャレンジ ①–⑧, 漢字チャレンジ ⑬–㉔):
  https://huangwaylon.github.io/n2/q2/

The TRY books are JLPT grammar books (見本文 → grammar points → practice → まとめの問題); the Quartet books are
four-skills courses (読む・書く・話す・聞く per lesson: readings with the book's line numbers, grammar notes, reading
strategies, model compositions, conversations, listening with scripts and answers, 別冊 vocabulary and kanji lists).

## Features

- The books' content, order, numbering and layout (grammar-point bands, connection formulas, 縦書き texts where the book
  prints them vertically), from 320 px phones to desktop, light or dark theme
- Japanese first: furigana switch (F); English hidden until EN (E), per line or per box. English the book prints is grey;
  English written for this site is tagged **generated**
- Exercises with grading, listening and read-aloud via the browser's Japanese speech synthesis
- Progress and scores in `localStorage`; indexes, drills and flashcards; cross-book links under each grammar point

## Run

Static site on GitHub Pages (from `main`), no build step and no dependencies:

```sh
python3 -m http.server 8765   # http://localhost:8765/ (N2), /n1/, /q1/, /q2/ — module scripts need HTTP, not file://
```

## Validate

Node ≥ 22. After any change, run the validators listed in `CLAUDE.md` (structure and answers, protected-text snapshots,
Quartet checks, cross-references, vocabulary, cross-book links). Layout tools (screenshots, overflow and furigana probes,
timings) need Google Chrome and the server on :8765; see `CLAUDE.md` and `docs/LAYOUT.md` §5.

## Where things are:

| Path | What |
|---|---|
| `index.html`, `n1/`, `q1/`, `q2/` | one minimal page per book |
| `assets/js/` | shared shell and TRY renderer (`main.js`, `content.js`, `exercises.js`, …); `q2/` the Quartet renderer (both Quartet books) |
| `assets/css/` | `base.css` tokens and themes, `shell.css`, `content.css`, `exercises.css`, `q2.css` |
| `data/<book>/` | the transcribed books, one JS file per chapter / lesson / list; `data/links.js` cross-book links |
| `data/SCHEMA.md`, `data/Q2-SCHEMA.md` | data formats (TRY, Quartet) |
| `docs/` | `LAYOUT.md` design reference and QA; `ENGLISH.md` style for generated English; `*-TRANSCRIPTION.md` page maps and conventions per book |
| `tools/` | validators, OCR of every page, text baselines, layout and performance probes |

The scans (`n2.pdf`, `n1.pdf`, and the two Quartet PDFs, which are not in git) are the source of truth for all book
content. Personal study edition; not for distribution.
