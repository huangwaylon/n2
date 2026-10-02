# CLAUDE.md

Interactive editions of four Japanese textbooks for English-speaking learners: a static site (GitHub Pages from
`main`, no build step, no dependencies).

| Book | Source | Page | Notes |
|---|---|---|---|
| N2 | *TRY! 日本語能力試験 N2* (Japanese/English) | `index.html` → `/` | `n2.pdf`; PDF page = printed page; 別冊 p.N = PDF 232+N |
| N1 | *TRY! 日本語能力試験 N1* (Chinese edition) | `n1/` | `n1.pdf`; 別冊 p.N = PDF 192+N; `docs/N1-TRANSCRIPTION.md` |
| Q1 | *中級日本語カルテット I* (Japan Times), lessons 1–6 | `q1/` | `Quartet1.pdf` (not in git); book p = PDF − 26, 別冊 p = PDF − 288; `docs/Q1-TRANSCRIPTION.md` |
| Q2 | *中級日本語カルテット II*, lessons 7–12 | `q2/` | `Quartet II - Textbook - 1st Edition.pdf` (not in git); book p = PDF − 27, 別冊 p = PDF − 287; `docs/Q2-TRANSCRIPTION.md` |

Q1 and Q2 share one data model (`data/Q2-SCHEMA.md`), renderer (`assets/js/q2/`) and tools (`tools/q2/`); per-book
names in `data/<book>/book.js`, page ranges in `tools/q2/lib.js`.

## Source of truth

The scans are the source of truth for all book content: Japanese text, furigana, answers, the English the
N2 book prints, and the layout the site imitates. Never "fix" the book; never guess — read the page (`Read n2.pdf
pages:"18"`; `tools/zoom.sh <book> PDFPAGE` for 300-dpi strips, `… PDFPAGE page` for the whole page).

- OCR of every page (noisy, for grep): `tools/<book>/ocr/NNN.txt`.
- No Chinese on the site or in the data (no `zh` fields). N1's Chinese may be read only to cross-check meaning.
- Look at no more than ~8 page images per batch (more overflows an agent's context).

## English: book vs generated

- **Book English** (N2 `en` on usage, ＋Plus usage, 📎 notes, ＊ formNotes, can-do, titles, front matter; Quartet `en`):
  verbatim. Rendered grey (`.en--book`).
- **Generated English**: everything else, and all N1 English. Accurate, natural American English, consistent with the
  answer key; style in `docs/ENGLISH.md`. Rendered blue with a "generated" tag (`.en--gen`). A book field whose English
  the book doesn't print carries `gen: true`.
- Interface text (guide, home) is untagged (`src: "ui"`). English is hidden by default (EN switch / `E` / EN buttons).

## Files

```
index.html, n1/, q1/, q2/   one page per book: CSS, boot.js, data/<book>/book.js, module main.js (+ modulepreload)
assets/js/
  boot.js      classic script: data registry (TRY.register*), theme before first paint, starts loading the book's data
  core.js      book meta, settings/progress (localStorage), place keeping (keepPlace), $/$$/esc, ACT click registry, TTS
  ruby.js      furigana: {漢字|かな} → <ruby>, overhang margins and measured correction (fitRubies)
  markup.js    fmt() inline markup, plain(), bilingual helpers, pills, buttons, pageHead, miniToc, pager
  content.js   TRY chapter view · exercises.js all exercise types and grading · pages.js home, guide, about, index,
               compare, can-do, drill · vocab.js 単語 lists · flash.js flashcards
  main.js      shell (topbar, sidebar, footer), router, settings, 縦/横, events; need(h) loads a route's lazy files.
               Per-book adapter: TRY_BOOK here, QUARTET in q2/nav.js (pages, sidebar, target, viewHtml, needs, layout,
               stats, placeAt, applyVertical)
  q2/          Quartet: nav.js adapter and views, blocks.js block renderer, lists.js 別冊 lists, indexes, drill
assets/css/    base.css (tokens, themes, English layer) · shell.css · content.css · exercises.css · q2.css (--q accent per book)
data/<book>/   TRY: book.js, chNN.js, compare.js, front.js, vocab/chNN.js
               Quartet: book.js, lNN.js, vocabNN.js, kanjiNN.js, challenge.js, front.js
data/links.js  the same grammar across the books (他の本 Other books)
data/SCHEMA.md, data/Q2-SCHEMA.md   data formats and transcription rules — read before editing data
docs/          LAYOUT.md (design, components, QA, limitations) · ENGLISH.md · *-TRANSCRIPTION.md (page maps)
tools/         validators, layout probes, OCR (tools/<book>/ocr, made with tools/ocr/ocr.swift), text baselines;
               tools/lib: books.js per-book config and Node data loader, cdp.mjs headless Chrome, wd.mjs Safari,
               route.mjs tool route → URL, fuzzy.js OCR matching. tools/q2/merge-*.js assembled the Quartet data
               from transcription chunks (docs/Q2-TRANSCRIPTION.md); the data files are edited directly now
```

Data loading: the page loads what home, lessons and the sidebar need (TRY chNN.js, compare.js, front.js; Quartet book.js
`files`; all: links.js). The rest loads on the first route that shows it: TRY `vocab…` → vocab/chNN.js; Quartet book.js
`lazy` (nav.js `needs`): l/N/vocab, l/N/kanji, index, kanji, drill, about. Tools load everything.

## Running

```sh
python3 -m http.server 8765   # http://localhost:8765/ (N2), /n1/, /q1/, /q2/ — modules need HTTP, not file://
```

Hash routes. TRY: `#/` `#/ch/N` `#/ch/N/review` `#/gp/N` `#/compare[/i]` `#/about` `#/guide` `#/index` `#/cando`
`#/drill` `#/vocab[/N]` `#/vocab/drill`. Quartet: `#/l/N` `#/l/N/read|write|speak|listen` `#/l/N/vocab` `#/l/N/kanji`
`#/gn/L-N` `#/st/N` `#/u/ID` (c1, g1, k13 …) `#/about` `#/guide` `#/index` `#/kanji` `#/drill`.

## Validation (after any change)

```sh
for b in n2 n1; do node tools/check.js $b; node tools/verify-index.js $b; done       # structure, answers, English presence
for b in n2 n1 q1 q2; do node tools/text-snapshot.js $b | diff tools/$b/text-baseline.txt -; done   # protected text
for b in q1 q2; do node tools/q2/check.js $b && node tools/q2/verify.js $b; done    # Quartet structure, markup, lists
for b in n2 n1; do node tools/xref.js $b; node tools/vocab-check.js $b; done        # #N references, vocabulary
node tools/links.js                                                                 # cross-book links
node tools/render-smoke.mjs                                                         # every route renders (Node, no browser)
node tools/ocr-diff.js data/n2/ch01.js 18-29        # transcription vs OCR (Quartet: tools/q2/ocr-diff.js); check < 0.9 (Quartet 0.85) on the scan
```

- A text-snapshot diff must be an intended, verified fix; then regenerate the baseline
  (`node tools/text-snapshot.js n2 > tools/n2/text-baseline.txt`).
- Renderer refactors: `node tools/render-dump.mjs <book> --html` before and after, then diff.

Layout tools (Node ≥ 22, Google Chrome, server on :8765; routes `ch/1`, `n1:ch/3`, `q1:l/1/read`, `q2:l/7/read`):

```sh
node tools/shot.mjs ROUTE 390 2400 /tmp/a.png [dark] [--full] [--en] [--touch] [--dpr=3] [--sel=CSS] [--click=CSS]
node tools/overflow.mjs ROUTE 375 [--en] [--touch] [--furi]   # sideways overflow, clipping, small tap targets, furigana
node tools/perf.mjs [--cpu=4] [--net=150,10000] [ROUTE …]     # load / route-change timings
node tools/lib/wkshot.mjs "iPhone 17e" ROUTE /tmp/wk --probe  # real iOS Safari (needs the iOS simulator)
```

Headless Chrome needs an unsandboxed command (allowlisted: `node tools/{shot,overflow,render-dump,perf}.mjs`,
`node /tmp/cdp-*`, `/tmp/n2-layout-sweep.sh`); elsewhere it exits with "Failed to create a ProcessSingleton"
(`tools/lib/cdp.mjs` prints Chrome's stderr).

## Screens and furigana

320 px phones to desktop. Breakpoints: ≥1200 wide · 901–1199 desktop · ≤900 drawer sidebar · ≤600 phone · ≤390 small
phone. Touch targets ≥ 44 px under `(pointer: coarse)`. No horizontal overflow.

Furigana are native `<ruby>`; blocks with readings need line-height ≥ 1.9. A reading wider than its kanji may overhang
neighbouring kana/punctuation (never kanji or another reading); adjacent over-wide readings become one group reading,
which never breaks across lines. Quartet prints readings under the text (left of the column in 縦書き). Check with
`overflow.mjs ROUTE W --furi` at 320/390/820/1280, with and without `--en`.

Follow the books' layout as closely as the screen allows (`docs/LAYOUT.md`): grammar-point bands, どう使う？ pill,
connection formulas, ①② examples, 📎 notes, ＋Plus boxes, Check frame, まとめの問題 panel, 縦書き texts at ≥901 px
(read 横 they reflow to the box width).

## Conventions

- Plain ES modules; markup as template strings; every user string through `fmt()` / `esc()`. Click handlers:
  `ACT.name = (el, e) => …` with `data-act="name"` (one listener in main.js).
- Match the surrounding code's density and naming; comments say *why* and cite book pages where layout follows the book.
- Theme: `settings.theme` (auto/light/dark), `<html data-theme>`, dark tokens in base.css. Use tokens, not hard-coded colours.
- Stable localStorage keys: `n2.progress`, `n2.progress.n1`, `n2.progress.q1`, `n2.progress.q2`, `n2.settings`
  (incl. `sidebar`), `n2.resume` (each book's last place, for 続きから Continue).
- The shell (main.js) is shared; per-book behaviour is an adapter (TRY in main.js, Quartet in q2/nav.js).
- Commit and push small, verified checkpoints. With several agents editing at once: `git add <paths>` only, then
  `git pull --rebase --autostash origin main && git push` (a bare `git pull` fails with "Cannot rebase onto multiple branches" while another agent fetches).
