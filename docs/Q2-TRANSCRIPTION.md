# Quartet II transcription guide (`Quartet II - Textbook - 1st Edition.pdf`)

Data format: `data/Q2-SCHEMA.md`. The conventions and tools here apply to Quartet I too (`docs/Q1-TRANSCRIPTION.md` has
its page map). The PDF is the source of truth; never guess, never "fix" the book.

## Source

- The scan (357 pages, 311 MB) is at the repo root and not in git (over GitHub's file limit; `.gitignore`). Pages are
  phone screenshots of a PDF viewer with the printed page in a fixed box.
- `tools/zoom.sh q2 PDFPAGE page` for the whole page (layout); `tools/zoom.sh q2 PDFPAGE` for three strips to read
  furigana, small print and punctuation. OCR (`tools/q2/ocr/NNN.txt`, PDF page) is a cross-check only: empty or
  garbage on 縦書き pages, mangles ◇ ★ ✎ and circled numbers.
- Book page = PDF − 27 (pp.001–257 = PDF 28–284); 別冊 page = PDF − 287 (supp pp.001–069 = PDF 288–356).
- Front matter (PDF): 8 文型・表現ノート一覧 · 6–7 学習漢字一覧 · 10 はじめに [03] · 11–14 もくじ · 15–19 本書について
  [08]–[12] · 20–25 About This Book [13]–[18] · 26–27 記号 [19]–[20] (printed sideways).

## Lessons (book pages)

| L | opener | 読む前に | 読み物1 | 読み物2 | strategies | ノート | 書く | 会話1 | 会話2 | 聴解1 / 2 |
|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 001 | 002–003 | 004–005 横 | 007→006 縦 | ⑪ 008 | 1–11, 009–016 | 017–019 | 020–025 | 026–030 | 031 / 032 |
| 8 | 033 | 034–035 | 037→036 縦 | 038–039 横 | ⑫ 040, ⑬ 041 | 1–10, 042–048 | 049–051 | 052–057 | 058–062 | 063 / 064 |
| 9 | 065 | 066–067 | 069→068 縦 | 071→070 縦 | ⑭ 072, ⑮ 073 | 1–11, 074–081 | 082–083 | 084–089 | 090–094 | 095 / 096 |
| 10 | 097 | 098–099 | 100–103 横 | 104–107 横 | ⑯ 108, ⑰ 109 | 1–11, 110–116 | 117–119 | 120–125 | 126–130 | 131 / 132 |
| 11 | 133 | 134–135 | 137→136 縦 | 138–139 横 | ⑱ 140 | 1–11, 141–147 | 148–149 | 150–155 | 156–160 | 161 / 162 |
| 12 | 163 | 164–165 | 166–167 横 | 169→168 縦 | ⑲ 170, ⑳ 171 | 1–11, 172–179 | 180–183 | 184–189 | 190–196 | 197 / 198 |

- A 縦書き reading starts on the right-hand (odd) page and continues on the left ("007→006"); within a page, top tier
  first, each tier right to left. Line numbers are printed every 5 on a fixed grid; a number past the end of the text
  (beside a profile box) is not a line.
- 聴解 解答・スクリプト pp.238–245, by PDF page: L7 265 · L8 266–267 · L9 267–268 · L10 268–269 · L11 269–270 · L12
  271–272. Each: tab, 🎧 label, ■解答 box, boxed situation, script. Speakers: full name on the first line, then one
  character (社員 → 社). A grey underline in scripts marks the lesson's grammar (`__…__`).
- ブラッシュアップ (p.199): 上級へのチャレンジ ① 視点 200–201 · ② 四字熟語 202–205 · ③ ことわざ 206–208 · ④ オノマトペ
  209–211 · ⑤ カタカナ語 212–213 · ⑥ 接続詞 214–217 · ⑦ 慣用句 218–220 · ⑧ インタビュープロジェクト 221–225, answers at
  each unit's foot ("✎答え▶"). 漢字チャレンジ ⑬–㉔ pp.226–237, one page each, no answers.
- Indexes (generated, not transcribed): 文型・表現さくいん 246–247, 単語さくいん 248–257.

## 別冊 (supplement pages)

| L | 読み物1 list → 覚える単語と例文 | 読み物2 list → 覚える | kanji 読1 | kanji 読2 |
|---|---|---|---|---|
| 7 | 2–3 → 3–4 | 4–5 → 6 | 328–350 (p.34) | 351–372 (p.36) |
| 8 | 7–8 → 8 | 9–11 → 11 | 373–388 (p.39) | 389–417 (p.40) |
| 9 | 12–13 → 13–14 | 14–16 → 16 | 418–436 (p.44) | 437–462 (p.45) |
| 10 | 17–19 → 19 | 20–21 → 21–22 | 463–487 (p.49) | 488–507 (p.51) |
| 11 | 22–24 → 24 | 25–26 → 26 | 508–533 (p.54) | 534–552 (p.56) |
| 12 | 27–29 → 29 | 30–32 → 32 | 553–574 (p.59) | 575–597 (pp.61–63) |

漢字チャレンジ kanji go in the kanjiNN.js of their units' lesson: ⑬⑭ 598–607 (p.64, L7) · ⑮⑯ 608–617 (p.65) · ⑰⑱
618–627 (p.66) · ⑲⑳ 628–637 (p.67) · ㉑㉒ 638–647 (p.68) · ㉓㉔ 648–657 (p.69, L12).

## Conventions (both books)

- Characters as printed: full-width Japanese punctuation, `……`, `〜` in patterns, `○ × △ ◆ ◇ ★` literal, Latin words
  as printed (Bento, SNS), subscripts N₁ as Unicode. Digits are ASCII (2時間, 550〜650字) even where the glyph looks
  full-width.
- Furigana: exactly the book's readings on exactly those kanji (read the strips). A reading over a word including
  kana is split per kanji run: `{受|う}け{入|い}れる`.
- `**bold**` where the book prints bold: targets in note examples, key phrases in model conversations, interviewer lines.
- `en` = the book's English verbatim, spelling and typos included (report a typo, don't fix it). Glyph gaps are not
  spacing: the book sets Japanese in its English in full-width boxes, so type no space between a Japanese word and a
  half-width `.` `,` `)` or `(` (`the particle が.`, `(e.g., 季節, 状況)`); keep spaces between words (`N によって X`).
- `tr` = our translation (`docs/ENGLISH.md`), on every Japanese sentence without book English.
- Illustrations are not reproduced; a picture needed for a task gets a `figure` (`desc` ours, `labels` the printed
  Japanese); a graph with printed values becomes a `chart` with every value.
- Voices `v` from the character (メイリン f, サラ f, ジョージ m, 絵理 f …), consistent within a lesson; unnamed
  narrators and teachers as heard, else f.
- Answers only from the book: 聴解 from ■解答, brush-up from the unit's 答え line, bubbles from the book's モデル会話.

## Checks

The validation commands are in CLAUDE.md (`tools/q2/check.js`, `verify.js`, `text-snapshot.js`). `tools/q2/ocr-diff.js
data/q2/l07.js 28-59,265` takes PDF pages (lesson pages plus its script page); look up every score < 0.85 on the scan.

## Team workflow

New files are transcribed as JSON fragments in `/tmp/q2parts` (`/tmp/q1parts`; or `$QPARTS`), then merged; after the
merge edit the data files directly. Each file is reviewed line by line against the zoomed scans by a second reader.

```sh
node tools/q2/merge-lesson.js q2 7   # l07-*.json, file-name order; the first carries pages, opener, sections → data/q2/l07.js
node tools/q2/merge-vocab.js q2 7    # vocab07-r1.json, vocab07-r2.json → data/q2/vocab07.js
node tools/q2/merge-units.js q2      # u-*.json → challenge.js, front-*.json → front.js
```

A lesson fragment is `{ "part": "read" | "write" | "speak" | "listen", "blocks": [...] }`; a continuation chunk
`{ "continue": "<reading id>", "lines", "tr", "blocks" }` appends to a long reading. kanjiNN.js has no merge tool: write
`TRY.registerKanji(<json>);`. Add every new file to `book.js` (`files` or `lazy`). Report pages done, anything
ambiguous (page, what, what was chosen) and anything unreadable.
