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

- [x] Markup for reported gaps (3 commits; data/Q2-SCHEMA.md; Q1 + Q2 applied, Q2 headTr 37 lines): italics in book English, boxed POS forms in English, grey shading, lead + brace
      connection formulas, speaker labels in readings, tr on reading headings, a)/b) sub-labels, table cell styles

- [x] `check.js q1` OK (flow steps with only a label and ×/？ examples need no text/tr); `verify.js q1` OK — L4 #2
      ★ removed (not starred on p.108 or in the list); 8 vocab words not found in the noisy index OCR, to check

Second pass status (2026-09-30): done and pushed — L1 96e1648, L2 03cd873, L3 f75a457, L6 6a32d25, brush-up eafe42b,
front 08818aa, kanji 871c8c1, vocab 9427c7e, links 9e18217, L4 fae865f, L5 b67cc70 + 5fbb1d0 (part 1 no errors), markup scan check cbe95ce/ce20447/203cd2c (34 Q1 notes in 20 new + 14 existing groups).
Interrupted (session ended): markup extension (resumed by a new agent from the uncommitted tree), L4 and L5 second
pass, q1 layout QA — L5 (split in 3 after a context overflow: scan PDF 159–174, scan 175–194 + script, tr + deep-dives) and a scan check of the markup gaps (Q1 L6 pp.196–203, Q1 k3–k12, Q2 k13–k24,
Q2 vocab PDF 302/318, Q2 L7–L9 notes at strip resolution, grey label cells) running; q1 layout QA after them.

- [x] Second pass: every `ocr-diff.js` string < 0.85 checked on the scan (l01 53 · l02 55 · l03 99 · l04 60 · l05 84 · l06 92 · challenge 119 · front 33 · vocab 71–106 each · kanji 6–78 each)
- [x] `tools/q1/text-baseline.txt` generated (first pass; regenerate after the second pass fixes)
- [x] Deep-dives on every 文型・表現ノート (nuance, register, contrasts; as Q2 L7–12)
- [x] Cross-book links: Q1 notes into `data/links.js` (9e18217)
- [x] Second English pass per lesson (translations of readings, dialogues, scripts, exercises vs answers)
- [x] Layout QA (a017183, 1bfa725, 33b4cf3): all q1 routes × widths ± EN ± furi clean; パートA/B badges, dark-theme
      text on accent fills, underline numbers after wraps (fixes the Q2 L7 遠慮 item), e-mail window, docs/LAYOUT.md C32
- [x] Open items from the QA (5bea678 … a88075f): table align/headAlign/stripe and grey labels (pp.049, 097, 107, 118,
      196, 202), inline ｛…｝ brace p.085, 役に立つ表現 = attention (pp.096, 165), accent box p.035, one フローチャート
      heading style (both books), multi-label flow step p.027, small title readings (中国人), 53 book-English spaces,
      index glosses from sub-patterns, p.116 flush / p.102 names right, double strike, one CD per モデル会話, blank+。,
      formula wrapping at 390, conn `side` on 30 boxes
- [x] Layout: `overflow.mjs` + screenshots for q1 routes at 320/390/820/1280, light/dark, `--en`, `--furi` (layout QA above)
- [ ] Performance: `tools/perf.mjs` on q1 routes
- [x] Docs final: CLAUDE.md, README, LAYOUT.md (§6 known limitations), both TRANSCRIPTION guides, both schemas, ENGLISH.md;
      Q2 book-English spaces as Q1 (31 strings). Remove this file once the performance item is done

## 4. Four-book site layout and UX

Done (22fecb5, 6153cbd, 00f8908): named book switcher (≥740) / codes / book menu (≤429); per-book hues; home shelf
of the four books with progress and 続きから Continue (`n2.resume`); ホーム link; skip link, F key, switch roles, Esc,
reduced motion; AA contrast for grey text, teal links, dark-theme buttons; landscape-phone bar; 456 overflow runs clean;
perf no regression. Quartet sidebar lesson themes and Q2 fill contrast (--q-fill) done (ac4cee7). iOS Safari
unverified and content-visibility not taken: see docs/LAYOUT.md §6.


- [x] Audit the whole shell for four books: book switcher, home/landing that presents N2 · N1 · Q1 · Q2, top bar,
      sidebar/drawer, page links, footer, settings; consistency between TRY and Quartet views
- [x] Design proposal (screenshots before) → redesign where needed: navigation between books and within a book,
      typography scale, spacing, per-book accent, reading comfort, touch ergonomics, keyboard, accessibility (contrast,
      focus, landmarks, reduced motion)
- [x] Verify at 320 / 375 / 390 / 430 phones, iPad mini / iPad portrait+landscape (744–1366), desktop 1280–1920;
      light/dark; `--en`; `--furi`; `--touch`; real iOS Safari via `wkshot.mjs`
- [x] Quartet underline label after a line wrap (1bfa725, placeRefNos); WebKit unchecked (no simulator)
- [x] Candidate `content-visibility: auto`: not taken (docs/LAYOUT.md §6)
- [x] Performance unchanged or better (`tools/perf.mjs`); render-dump diffs only intended; docs/LAYOUT.md updated
