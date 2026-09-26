# N1 transcription guide (TRY! N1 — `n1.pdf`, the Chinese edition)

Read `data/SCHEMA.md` first: the N1 data uses exactly the same schema and verbatim rules as N2. This file lists what is
different for N1 and the conventions every transcriber must follow so the ten chapters are consistent.
**The PDF is the source of truth.** When in doubt, zoom in; never guess, never "fix" the book.

## Source

- `n1.pdf`, 208 pages. **PDF page = printed book page** for the main text (p.17 is PDF page 17).
- 別冊 (answers, scripts) at the end: **supplement page N = PDF page 192 + N** (supp p.1 = PDF 193 … supp p.15 = PDF 207).
  - やってみよう！/Check answers: supp pp.1–8 (PDF 193–200). まとめの問題 answers + listening scripts: supp pp.8–15 (PDF 200–207).
- Listening scripts exist **only** in the supplement. Answers come **only** from the supplement, never from our judgement.
- Reading pages: `Read n1.pdf pages:"17"` for the layout, then `tools/zoom.sh n1 17` (three 300-dpi strips; Read the PNG paths)
  for every page to get furigana, small print and punctuation exactly right.
- OCR (noisy, only a cross-check): `tools/n1/ocr/ja/NNN.txt`.

| Ch | Title | Pages | Points | Parts (first point) | やってみよう/Check answers | まとめ answers/scripts |
|---|---|---|---|---|---|---|
| 1 | オクトーバーフェスト | 16–25 | 1–6 | 1 | PDF 193 | PDF 200–201 |
| 2 | 産業医を増やそう | 26–37 | 7–15 | 1 | 193–194 | 201 |
| 3 | 飯食わぬ女房 | 38–57 | 16–34 | (1) 16, (2) 26 | 194–195 | 202 |
| 4 | 上司との付き合い方 | 58–72 | 35–45 | (1) 35, (2) 41 | 195 | 203 |
| 5 | 転職 | 73–97 | 46–64 | (1) 46, (2) 54, (3) 61 | 195–197 | 203–204 |
| 6 | 研修を終えて | 98–106 | 65–71 | 1 | 197 | 204 |
| 7 | さすが本田君 | 107–128 | 72–87 | (1) 72, (2) 83 | 197–198 | 204–205 |
| 8 | 楽園の萌花 | 129–151 | 88–106 | (1) 88, (2) 96 | 198–199 | 205 |
| 9 | トリアージ | 152–159 | 107–110 | 1 | 199 | 206 |
| 10 | 前衛書道 | 160–172 | 111–123 | 1 | 199–200 | 206–207 |

(Page ranges are from the table of contents; confirm the exact supplement pages on the scans.)

## Files

- Write fragments, never the generated chapter files: `data/n1/frag/chNN-p0.js`, `chNN-p1.js`, `chNN-p2.js` (one per part)
  and `data/n1/frag/chNN-review.js`. Same `N2F({...})` format as `data/n2/frag/*.js` (see `tools/merge.js` header).
  Part 0 carries `head: { genre, title, canDo }`.
- Build and validate:
  ```sh
  node tools/merge.js n1 5                       # → data/n1/chapters/ch05.js
  node tools/check.js data/n1/chapters/ch05.js   # structure, answers, en presence, no zh
  node tools/ocr-diff.js data/n1/chapters/ch05.js 73-97   # every string vs OCR; look at everything < 0.9 on the scan
  ```
- View it: `python3 -m http.server 8765`, open http://localhost:8765/n1/#/ch/5 ; screenshots:
  `node tools/shot.mjs n1:ch/5 1280 2400 /tmp/c5.png --full`.

## No Chinese

The site is for English-speaking learners of Japanese. The book's Chinese translations are **not** reproduced: no `zh`
fields, no Chinese anywhere in the data or UI (`tools/check.js` fails on any `zh` key). The Chinese printed in the book
may be read as a check on the intended meaning of the Japanese, nothing more.

## English (`en`) — always ours

Nothing in the N1 book is English, so **every** `en` is our own translation: usage, notes, Plus usage, can-do, chapter
genre/title, examples, sample-text lines, exercises, scripts, `questionEn`, front matter. Required on every usage
explanation, clip note, ＋Plus usage, can-do, example, sample line and exercise item.

Write for an English-speaking learner of Japanese at N2→N1 level:

- **Accurate and faithful** to the Japanese — translate the Japanese, not the Chinese; keep every nuance the Japanese
  explanation states (register, speaker's feeling, restrictions). Do not add claims the book does not make (put those
  in `deepDive`).
- **Natural, clear English.** Explanations should be understandable without knowing Chinese or linguistics jargon; when
  quoting Japanese inside English, keep the Japanese form (e.g. "〜を皮切りに is used when…") and gloss it if helpful.
- Example / exercise translations: natural English that shows how the target grammar is being used (the sense of the
  bold part should be recoverable from the English). Don't translate word-for-word into awkward English.
- `deepDive` (required for every point) is our detailed English explanation: meaning, nuance, register, connection,
  contrast with similar patterns (N2/N1), common learner mistakes, JLPT tips — like the N2 deepDives. It must be
  correct; cite point numbers `#NN` only for N1 points of this book (1–123). No Chinese.

## Conventions (all chapters)

- `genre` / `title` from the chapter banner (the genre line is cropped off most scanned banners — use the table of
  contents pp.11–15, which prints furigana only on 昔話・実用書・論説文): e.g. `genre: { ja: "{実用書|じつようしょ}を読む", en: "…" }`;
  `title.ja` without the part label; part `label: "(1)"`, `"(2)"`, `"(3)"`, or `""` if unsplit.
- Part-specific can-do: split chapters print a できること box at the start of each part → put it on the part (`canDo`
  in the part fragment), and put the chapter-level `head.canDo` only for the first part's box. (Check against N1
  できること list pp.188–191, which lists one per part.)
- Grammar point heading: `phrase` = the heading text with the bold part in `**…**` (e.g. `"「{樽明|たるあ}け」**を{皮切|かわき}りに**"`),
  `pattern` = the canonical form (use the book's 文型索引 form, e.g. `"〜を{皮切|かわき}りに"`). Stars as printed.
- Usage-scene icons → `marks`: 😊😊 friends chatting = `casual`; the same with a slash = `formal`; sun-rays face (high
  evaluation) = `praise`; sweating/regret face = `regret` (legend on p.6). Transcribe exactly the icons printed.
- Connection lines → `forms`, with the schema's badges: `[N]` `[V-る]` `[V-た]` `[V-~~ます~~]` `[Pl]` `[Pl₁]` `[N₁]`
  `[なA~~だ~~]` `[いA~~い~~]` and the N1-only `[文]` (sentence). Bracket lines as printed, e.g. `"［[なA]（だ）　[N]（だ）］"`.
  Look at how N2 fragments encode stacked alternatives and brackets (`data/n2/frag/*`) and follow the same encoding.
- ＊ lines under the connection → `formNotes` (`{ ja: "＊「…」の形も使われる。" }` — keep the ＊).
- Examples ①②… in order; the chain-link icon after an example = `idiom: true`.
- 📎 clip box → `notes` (with its own examples/practice). ＋Plus box → `plus`.
- ☞ line → `xref` string verbatim (e.g. `"☞ 22"`) and the numbers in `see`.
- Illustrations are not reproduced; if an exercise needs the picture, describe it in `prompt.en`.
- Sample text (見本文): `vertical: true` when printed in 縦書き. Kinds: `article` (news), `speech`, `story` (昔話, 小説),
  `dialogue` (scenario, 社内の会話 — speaker in `sp`, `v: "m"|"f"` for TTS), `explanation`, `editorial` (論説文).
  Scene headings / stage directions in a scenario are lines **without** `sp`. A ※ footnote printed in the frame is a
  line with `style: "note"`. Headline → `heading`; dateline/byline lines as printed. Every line gets `en`.
  Keep the book's paragraphing (`cont: true` joins a line to the previous paragraph).
- Exercises: follow `data/SCHEMA.md` (choice with `labels: "abc"`, match, fill with bank, write, order, passage,
  reading, listening). Instruction text printed in the book goes in `prompt.ja` verbatim; `prompt.en` is ours.
  Keep option text exactly as printed (furigana too).
- まとめの問題: section titles like `{ ja: "問題1 〈{文法形式|ぶんぽうけいしき}の{判断|はんだん}〉", en: "Question 1: Grammar form" }`
  (furigana only if printed). Listening: pick `mode` from the book's instruction (task / summary / gist / response —
  see SCHEMA); speakers as printed (`M1`, `M2`, `F`, `F2`, `男`, `女`); narration lines `sp: ""`.
- Furigana: exactly what the book prints, on exactly those kanji — use the zoom strips. Split okurigana out.
- Characters: full-width Japanese punctuation as printed (（ ） 「 」 、 。 ？ ！ ～/〜 as printed — the book uses 〜 in
  patterns). **Digits are ASCII** (1週間, 20%, 1,000円) as in the N2 data, even where the scan's glyph looks full-width —
  the vertical renderer sets 1–2 digit numbers upright itself. Letters like ＡＢＫ stay as printed. `……` stays `……`.

## Done means

- merge + check.js OK, ocr-diff reviewed (every low score looked at on the zoomed scan and either fixed or confirmed),
- every string compared line by line with the zoomed scan,
- all answers match the supplement,
- a short report of anything ambiguous (page, what, what you chose).
