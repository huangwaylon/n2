# N1 transcription guide (TRY! N1, `n1.pdf`, Chinese edition)

N1 uses `data/SCHEMA.md` unchanged (format, markup, transcription rules). This file holds the N1 page map and the
conventions specific to N1. The PDF is the source of truth; zoom in, never guess.

## Source

- `n1.pdf`, 208 pages; PDF page = printed page (p.17 = PDF 17).
- 別冊: supplement page N = PDF 192 + N. やってみよう/Check answers supp pp.1–8 (PDF 193–200); まとめの問題 answers and
  listening scripts supp pp.8–15 (PDF 200–207). Scripts and answers exist only there.
- Layout: `Read n1.pdf pages:"17"`; furigana, small print, punctuation: `tools/zoom.sh n1 17` (three 300-dpi strips).
  OCR for cross-checks only: `tools/n1/ocr/NNN.txt`.

| Ch | Title | Pages | Points | Parts (first point) | やってみよう/Check answers (PDF) | まとめ answers/scripts (PDF) |
|---|---|---|---|---|---|---|
| 1 | オクトーバーフェスト | 16–25 | 1–6 | 1 | 193 | 200–201 |
| 2 | 産業医を増やそう | 26–37 | 7–15 | 1 | 193–194 | 201 |
| 3 | 飯食わぬ女房 | 38–57 | 16–34 | (1) 16, (2) 26 | 194–195 | 202 |
| 4 | 上司との付き合い方 | 58–72 | 35–45 | (1) 35, (2) 41 | 195 | 203 |
| 5 | 転職 | 73–97 | 46–64 | (1) 46, (2) 54, (3) 61 | 195–197 | 203–204 |
| 6 | 研修を終えて | 98–106 | 65–71 | 1 | 197 | 204 |
| 7 | さすが本田君 | 107–128 | 72–87 | (1) 72, (2) 83 | 197–198 | 204–205 |
| 8 | 楽園の萌花 | 129–151 | 88–106 | (1) 88, (2) 96 | 198–199 | 205 |
| 9 | トリアージ | 152–159 | 107–110 | 1 | 199 | 206 |
| 10 | 前衛書道 | 160–172 | 111–123 | 1 | 199–200 | 206–207 |

Point ranges and parts are also in `tools/lib/books.js` (`TOC`, `PARTS`), which `verify-index.js` checks.

## English and Chinese

The book's Chinese is not reproduced (no `zh` fields, no Chinese anywhere); it may be read only to cross-check the
meaning of the Japanese. Every `en` is ours, translated from the Japanese: usage, notes, Plus usage, can-do, genre/title,
examples, sample lines, exercises, scripts, `questionEn`, front matter. Style: `docs/ENGLISH.md`. `deepDive` is
required on every point; `#NN` references point to N1 points 1–123 (checked by `tools/xref.js n1`).

## Conventions

- `genre` / `title` from the chapter banner; the genre line is cropped off most scanned banners, so use the table of
  contents pp.11–15 (furigana printed only on 昔話・実用書・論説文). Part `label`: `"(1)"`, `"(2)"`, `"(3)"`, or `""`.
- できること: split chapters print one box per part; the first goes in the chapter's `canDo`, later ones on their part
  (cross-check with the できること list pp.188–191).
- `phrase` = the heading with the bold part in `**…**` (`"「{樽明|たるあ}け」**を{皮切|かわき}りに**"`); `pattern` = the
  文型索引 form (`"〜を{皮切|かわき}りに"`). Stars as printed.
- Scene icons → `marks` (legend p.6): friends chatting `casual`, the same with a slash `formal`, rays `praise`,
  sweating `regret`; only the icons printed.
- `forms` use the schema badges plus the N1-only `[文]`; bracket lines as printed (`"［[なA]（だ）　[N]（だ）］"`),
  stacked alternatives encoded like the N2 chapters.
- 📎 notes come before やってみよう (`notesFirst: true` in `data/n1/book.js`).
- 見本文: `vertical: true` when printed 縦書き; kinds `article`, `speech`, `story` (昔話, 小説), `dialogue` (scenario,
  社内の会話), `explanation`, `editorial`. Scene headings and stage directions are lines without `sp`; a ※ footnote in
  the frame is `style: "note"`.
- まとめの問題 titles: `{ ja: "問題1 〈{文法形式|ぶんぽうけいしき}の{判断|はんだん}〉", en: "Question 1: Grammar form" }`
  (furigana only where printed). Listening `mode` from the book's instruction; speakers as printed (`M1`, `F2`, `男`,
  `女`); narration `sp: ""`.

## Check

```sh
node tools/check.js n1 5                        # structure, answers, English present, no zh
node tools/ocr-diff.js data/n1/ch05.js 73-97    # every string vs OCR; look up each score < 0.9 on the scan
node tools/text-snapshot.js n1 | diff tools/n1/text-baseline.txt -
node tools/shot.mjs n1:ch/5 1280 2400 /tmp/c5.png --full   # server on :8765, page /n1/#/ch/5
```

Done means: check.js OK; every low ocr-diff score looked at on the zoomed scan; every string compared line by line
with the scan; all answers match the 別冊; anything ambiguous reported (page, what, what was chosen).
