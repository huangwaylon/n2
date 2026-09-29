# CLAUDE.md

Interactive editions of four Japanese textbooks for **English-speaking** learners, served as a static site
(GitHub Pages from `main`, no build step):

- **N2** — *TRY! 日本語能力試験 N2* (bilingual Japanese/English book): `index.html` → `/`
- **N1** — *TRY! 日本語能力試験 N1* (Chinese edition): `n1/index.html` → `/n1/`
- **Q1** — *4技能でひろがる 中級日本語カルテット I / Quartet I* (Japan Times): `q1/index.html` → `/q1/`, lessons 1–6.
  The scan `Quartet1.pdf` (135 MB) is **not in git**; book page = PDF − 26, 別冊 page = PDF − 288;
  `tools/zoom.sh q1 PDFPAGE`; `docs/Q1-TRANSCRIPTION.md`. Same data model, renderer and tools as Q2 (below).
- **Q2** — *4技能でひろがる 中級日本語カルテット II / Quartet II* (Japan Times): `q2/index.html` → `/q2/`. A four-skills
  book (読む・書く・話す・聞く) with its own block data model: `data/Q2-SCHEMA.md`, `docs/Q2-TRANSCRIPTION.md`,
  renderer `assets/js/q2/`, tools `tools/q2/` (both serve Q1 and Q2; per-book names in `data/<book>/book.js`, per-book
  page ranges in `tools/q2/lib.js`). The scan `Quartet II - Textbook - 1st Edition.pdf` (311 MB) is **not in
  git** (over GitHub's file limit); book page = PDF − 27, 別冊 page = PDF − 287; `tools/zoom.sh q2 PDFPAGE`.

## Source of truth

`n2.pdf`, `n1.pdf` and the Quartet I and II scans (repo root) are the **absolute** source of truth for all book content: Japanese text, furigana,
answers, the English the N2 book prints, and the layout the site imitates. Never "fix" the book; never guess —
read the page (`Read n2.pdf pages:"18"`, or `tools/zoom.sh n2 18` for 300-dpi strips to read furigana; `tools/zoom.sh n2 18 page`
for the whole page where Read can't open PDFs — zoom.sh falls back to PDFKit when pdftoppm isn't installed).

- PDF page = printed page. N2 answers/scripts: supplement PDF pp.233–252 (supp p.N = PDF 232+N).
  N1: supplement PDF pp.193–207 (supp p.N = PDF 192+N); N1 page map in `docs/N1-TRANSCRIPTION.md`.
- OCR of every page (noisy, for grep): `tools/<book>/ocr/NNN.txt`.
- **No Chinese anywhere** on the site or in the data (no `zh` fields). The N1 book's Chinese may only be read to
  cross-check meaning.

## English: book vs generated

- **Book English** (N2 only): `en` of usage, ＋Plus usage, 📎 notes, ＊ formNotes, can-do, chapter genre/title, front
  matter. Must match the book verbatim. Rendered grey (`.en--book`).
- **Generated English**: everything else (example/sample/exercise/script translations, `questionEn`, prompts, `why`,
  `deepDive`, compare notes) and *all* N1 English. Must be an accurate, natural American-English rendering of the
  Japanese, consistent with the answer key. Rendered blue with a "generated" tag (`.en--gen`).
- A book field whose English the book does not print carries `gen: true` on its object (`{ ja, en, gen: true }`).
- Site interface text (guide, home) is neither; it is rendered untagged (`src: "ui"`).
- English is hidden by default (EN switch / `E` key / per-line and per-box EN buttons).

## Layout

```
index.html, n1/, q1/, q2/index.html   minimal pages: CSS, assets/js/boot.js, data/<book>/book.js, module assets/js/main.js (+ modulepreload of its modules)
assets/js/
  boot.js       classic script: TRY data registry (registerBook/Chapter/Compare/Front) + theme before first paint; registerBook
                starts loading the book's data files (TRY.load, TRY.ready) while the modules are still downloading
  core.js       book meta, settings/progress (localStorage "n2.*"), DOM helpers, ACT click registry, TTS
  ruby.js       furigana: {漢字|かな} → <ruby>, overhang margins (rubyHtml) and measured correction (fitRubies)
  markup.js     fmt() inline markup, plain(), bilingual helpers (bi, biInner, en, enSrc), pills, buttons, marks
  content.js    chapter view: banner, can-do, mini TOC, 見本文 (notice/prose/dialogue/vertical), grammar points
  exercises.js  all exercise types, Check, まとめの問題, grading and input actions
  pages.js      home, guide, about (front matter), index, compare, can-do list, drill
  vocab.js      単語: vocabulary list per chapter (data/<book>/vocab/chNN.js, loaded on the first vocab route) and its drill
  flash.js      flashcard deck shared by the vocab drills (TRY 単語, Quartet 覚える単語・漢字)
  main.js       awaits the book's data (TRY.ready), builds the shell (topbar/sidebar/footer), router, settings, events
  q2/           Quartet (Q1 and Q2): nav.js adapter and views, blocks.js block renderer, lists.js 別冊 lists, indexes, drill
assets/css/     base.css (tokens, light + dark theme, English layer, primitives) · shell.css · content.css · exercises.css
                · q2.css (both Quartet books; accent tokens --q per book: Q2 cyan, Q1 magenta via body[data-book="q1"])
data/<book>/    book.js (meta) · chNN.js (one file per chapter) · compare.js · front.js · vocab/chNN.js (our word lists)
data/links.js   the same grammar across the books (他の本 Other books under each point / Quartet note)
data/SCHEMA.md  data format and transcription rules — read before editing data
docs/LAYOUT.md  how each book component looks and is rendered, breakpoints, furigana rules, QA checklist
docs/N1-TRANSCRIPTION.md  N1 page map and conventions
docs/Q1-TRANSCRIPTION.md, docs/Q2-TRANSCRIPTION.md  Quartet page maps, conventions, merge tools
docs/ENGLISH.md style guide for all generated English (translations, deep-dives, why, cross-book links)
tools/          validators and layout probes (below); tools/lib/books.js = per-book tool config + Node data loader
```

## Running

```sh
python3 -m http.server 8765          # then http://localhost:8765/ (N2) and http://localhost:8765/n1/ (N1)
```

Routes are hash routes: `#/` home, `#/ch/N`, `#/ch/N/review`, `#/gp/N` (grammar point), `#/compare[/i]`, `#/about`,
`#/guide`, `#/index`, `#/cando`, `#/drill`, `#/vocab[/N]`, `#/vocab/drill`. Module scripts need an HTTP server (not `file://`).

## Validation (run after any change)

```sh
for b in n2 n1; do node tools/check.js $b; node tools/verify-index.js $b; done        # structure, answers, English presence
for b in n2 n1 q1 q2; do node tools/text-snapshot.js $b | diff tools/$b/text-baseline.txt -; done   # protected text unchanged
for b in q1 q2; do node tools/q2/check.js $b && node tools/q2/verify.js $b; done   # Quartet: structure, markup, tr; vs the book's lists
node tools/q2/ocr-diff.js data/q2/l07.js 28-59,265                     # Quartet transcription vs OCR (PDF pages; data/q1/… for Q1)
node tools/ocr-diff.js data/n2/ch01.js 18-29      # transcription vs OCR; check every score < 0.9 on the scan
for b in n2 n1; do node tools/xref.js $b; node tools/vocab-check.js $b; done   # #N cross-references; vocabulary lists
node tools/links.js                               # cross-book links (data/links.js)
```

- `text-snapshot` dumps the Japanese and the book's English. Any diff must be an intended, verified fix; then
  regenerate the baseline (`node tools/text-snapshot.js n2 > tools/n2/text-baseline.txt`).
- Renderer refactors: `node tools/render-dump.mjs n2 --html > /tmp/before.html` (n2, n1, q1, q2) before and after, then diff
  (server on :8765). Without `--html` it dumps rendered text.

Layout tools (Node ≥ 22, Google Chrome, server on :8765; prefix N1 routes with `n1:`, Quartet with `q1:` / `q2:`):

```sh
node tools/shot.mjs ch/1 390 2400 /tmp/a.png [light|dark] [--full] [--en] [--touch] [--dpr=3]   # q1:l/1/read, q2:l/7/read for Quartet
node tools/overflow.mjs ch/1 375 [--en] [--touch] [--furi]   # sideways overflow, clipping, small tap targets, furigana
node tools/lib/wkshot.mjs "iPhone 17e" n1:ch/3 /tmp/wk --probe   # real iOS Safari (simulator) + furigana probe
tools/simshot.sh "iPad mini (A17 Pro)" ch/2                     # simulator screenshot via simctl
node tools/perf.mjs [--cpu=4] [--net=150,10000] [ROUTE …]        # load / route-change timings, requests, DOM size, layout code
```

## Screens and furigana

Must work from 320 px phones through tablets to desktop. Breakpoints: ≥1200 wide · 901–1199 desktop · ≤900 drawer
sidebar · ≤600 phone · ≤390 small phone. Touch targets ≥ 44 px under `(pointer: coarse)`. No horizontal overflow.

Furigana are native `<ruby>`; any block with readings needs line-height ≥ 1.9 so readings sit in the leading and
never cover the line above. A reading wider than its kanji may overhang neighbouring kana/punctuation (never kanji or
another reading); adjacent readings where one is too wide become one group reading; a group reading never breaks
across lines. Both Quartet books print their readings **under** the text (left of the column in 縦書き), below any underline; q2.css
follows it (`ruby-position: under`). Check with `tools/overflow.mjs ROUTE W --furi` (reports off-centre, overlapping, clipped readings and
uneven line pitch) at 320/390/820/1280 with and without `--en`; real WebKit via `wkshot.mjs --probe`.

Follow the books' layout as closely as the screen allows (see `docs/LAYOUT.md`): grammar-point header band, どう使う？
pill, connection formulas with bracket stacks, ①② examples, 📎 clip notes, ＋Plus boxes, dashed Check frame,
まとめの問題 panel, 縦書き sample texts at ≥901 px.

## Conventions

- Plain ES modules, no dependencies, no bundler. Markup is built as template strings; every user string goes through
  `fmt()` / `esc()`. Click handlers: `ACT.name = (el, e) => …` with `data-act="name"` (one listener in main.js).
- Match the surrounding code's density and naming; keep comments about *why*, referencing book pages where layout
  follows the book.
- Theme: `settings.theme` (auto/light/dark); `boot.js` sets `<html data-theme>`; dark tokens in
  `:root[data-theme="dark"]` (base.css). Use tokens, never hard-coded colours that break one theme.
- Progress per book in `localStorage` (`n2.progress`, `n2.progress.n1`, `n2.progress.q1`, `n2.progress.q2`); settings shared
  (`n2.settings`, incl. `sidebar` — ☰ hides the sidebar at ≥901). Keep these keys stable.
- The shell (`main.js`) is shared; what differs per book is an adapter (TRY books in `main.js`, Quartet in
  `assets/js/q2/nav.js`). Every book keeps its page links in the sidebar (`body.nav-sb`).
- Commit and push small, verified checkpoints.
