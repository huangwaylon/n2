# Quartet I — work tracker

Working checklist for adding Quartet I (`Quartet1.pdf`, not in git) and the site-wide review started 2026-09-29.
Page map and conventions: `docs/Q1-TRANSCRIPTION.md`. Remove this file when every box is ticked.

## 0. Site-wide review (N2, N1, Q2)

- [x] Cross-book links: 76 groups / 182 links, 10 `see:` contrasts, N1 #23 xref cue (b63be1b, 9dd57d0)
- [x] English QA: Q2 vocab 07/08/11/12, N2/N1 vocab sample, UI text, exercise/script/まとめ sample, deep-dive sample
- [x] Layout sweep (b00fc4c, 7fd8ebd): 149 routes × 6 widths ± EN ± furi, 0 overflow / clipping / small targets;
      book switcher collapses into the drawer below 430 px. No iOS simulator on this machine (xcrun simctl missing)
- [x] Performance (cb7d400, ea22bb0): data loads from boot.js in parallel with modules, modulepreload, Quartet line-number
      refit only for changed readings; FCP −30–50 %. Open: lazy-load Quartet vocab/kanji/challenge files; chunked
      render of the all-words vocab page (7 600 nodes)

## 1. Setup

- [x] `.gitignore` Quartet1.pdf (cece29b)
- [x] `tools/zoom.sh q1` (f34a5e6)
- [x] OCR of all 352 pages → `tools/q1/ocr/` (e31aee0)
- [x] Survey: book = PDF − 26, 別冊 = PDF − 288, lessons 1–6, 初級文法チェック ①–⑦, 漢字チャレンジ ①–⑫
- [x] Infrastructure (f64bb73, 4cc8200): `q1/index.html`, `data/q1/book.js`, BOOKS entry, renderer book-agnostic
      (titles, `q1:` link ids, unit kind "grammar", ①–⑫), pink accent tokens, tools take q1|q2,
      `docs/Q1-TRANSCRIPTION.md`, CLAUDE.md, Q2-SCHEMA note

## 2. Transcription → review (workflow q1-transcribe; fragments in /tmp/q1parts)

Each chunk: transcribed by one agent, reviewed line by line against the scan by another.

| Chunk | PDF pages | Transcribed | Reviewed | Merged + validated | Committed |
|---|---|---|---|---|---|
| L1 read / notes / write+会話1 / 会話2+聞く | 27–56, 268 | [x] | [x] | [x] | [x] |
| L2 | 57–92, 269 | [x] | [x] | [x] | [x] |
| L3 | 93–124, 270–271 | [x] | [x] | [x] | [x] |
| L4 | 125–158, 271–272 | [x] | [x] | [x] | [x] |
| L5 | 159–194, 272–273 | [x] | [x] | [x] | [x] |
| L6 | 195–230, 273–274 | [x] | [x] | [x] | [x] |
| 初級文法チェック ①–⑦ | 231–255 | [x] | [x] | [x] | [x] |
| 漢字チャレンジ ①–⑫ | 256–267 | [x] | [x] | [x] | [x] |
| Front matter (+ 文型・表現ノート一覧 PDF 5, separate agent) | 5, 9, 14–26 | [x] | [x] | [x] | [x] |
| 別冊 単語リスト L1–6 | 289–314 | [x] | [x] | [x] | [x] |
| 別冊 漢字リスト L1–6 + チャレンジ | 315–351 | [x] | [x] | [x] | [x] |

Review error rates found and fixed: lessons 1–10 % (mostly tr wording, bold/underline scope), vocab/kanji 0–3 %.

## 3. After merge (workflow q1-verify: markup → second pass ×10 files → links → layout)

- [ ] Markup for reported gaps: italics in book English, boxed POS forms in English, grey shading, lead + brace
      connection formulas, speaker labels in readings, tr on reading headings, a)/b) sub-labels, table cell styles

- [x] `check.js q1` OK (flow steps with only a label and ×/？ examples need no text/tr); `verify.js q1` OK — L4 #2
      ★ removed (not starred on p.108 or in the list); 8 vocab words not found in the noisy index OCR, to check

- [ ] Second pass: every `ocr-diff.js` string < 0.85 checked on the scan (l01 53 · l02 55 · l03 99 · l04 60 · l05 84 · l06 92 · challenge 119 · front 33 · vocab 71–106 each · kanji 6–78 each)
- [x] `tools/q1/text-baseline.txt` generated (first pass; regenerate after the second pass fixes)
- [ ] Deep-dives on every 文型・表現ノート (nuance, register, contrasts; as Q2 L7–12)
- [ ] Cross-book links: Q1 notes into `data/links.js` (Q2, N2, N1), `see:`-style relations
- [ ] Second English pass per lesson (translations of readings, dialogues, scripts, exercises vs answers)
- [ ] Layout: `overflow.mjs` + screenshots for q1 routes at 320/390/820/1280, light/dark, `--en`, `--furi`
- [ ] Performance: `tools/perf.mjs` on q1 routes
- [ ] Docs final: CLAUDE.md, Q1-TRANSCRIPTION.md, README; remove this file

## 4. Four-book site layout and UX (after sections 1–3)

- [ ] Audit the whole shell for four books: book switcher, home/landing that presents N2 · N1 · Q1 · Q2, top bar,
      sidebar/drawer, page links, footer, settings; consistency between TRY and Quartet views
- [ ] Design proposal (screenshots before) → redesign where needed: navigation between books and within a book,
      typography scale, spacing, per-book accent, reading comfort, touch ergonomics, keyboard, accessibility (contrast,
      focus, landmarks, reduced motion)
- [ ] Verify at 320 / 375 / 390 / 430 phones, iPad mini / iPad portrait+landscape (744–1366), desktop 1280–1920;
      light/dark; `--en`; `--furi`; `--touch`; real iOS Safari via `wkshot.mjs`
- [ ] Quartet lettered/numbered underline label after a line wrap sits under the 2nd line and can hit a reading
      (Q2 L7 書く 390, 遠慮) — markup.js positioning; needs a WebKit check
- [ ] Candidate: `content-visibility: auto` on grammar points with ruby/option fitting deferred to first view
      (chapter render ~140 → ~75 ms at 4x CPU); verify gp/N jump positions and no furigana shift
- [ ] Performance unchanged or better (`tools/perf.mjs`); render-dump diffs only intended; docs/LAYOUT.md updated
