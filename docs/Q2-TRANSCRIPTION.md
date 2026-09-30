# Quartet II transcription guide (`Quartet II - Textbook - 1st Edition.pdf`)

Read `data/Q2-SCHEMA.md` first (the data format). **The PDF is the source of truth.** Never guess, never "fix" the book.

## Source

- `Quartet II - Textbook - 1st Edition.pdf` at the repo root, 357 pages, 311 MB. It is **not in git** (over GitHub's
  100 MB limit; `.gitignore`). The pages are phone screenshots of a PDF viewer; the printed page is a fixed box.
- Look at a page: `tools/zoom.sh q2 PDFPAGE page` (whole page, enough for layout) and `tools/zoom.sh q2 PDFPAGE`
  (three 300-dpi-class strips — **use them to read furigana, small print and punctuation**). Read the printed PNG paths.
- OCR of every page (macOS Vision, noisy, only a cross-check): `tools/q2/ocr/NNN.txt` (PDF page). OCR is empty or
  garbage on 縦書き pages and mangles ◇ ★ ✎ and circled numbers.
- **Page maps:** main text **book page N = PDF page N + 27** (pp.001–257 → PDF 28–284). 別冊 **supplement page N = PDF
  page N + 287** (supp pp.001–069 → PDF 288–356). PDF 285 著者略歴, 286 別冊 cover, 287 blank, 357 colophon.
- Front matter: PDF 3 notice · 4 title · 6–7 学習漢字一覧 · 8 文型・表現ノート一覧 · 10 はじめに [03] · 11–14 もくじ ·
  15–19 本書について [08]–[12] · 20–25 About This Book [13]–[18] · 26 品詞と活用の記号 [19] · 27 接続の表し方 [20]
  (PDF 26–27 are printed sideways).

## Lessons (book pages; PDF = +27)

| L | opener | 読む前に | 読み物1 | 読み物2 | strategies | ノート | 書く | 会話1 | 会話2 | 聴解1 / 2 |
|---|---|---|---|---|---|---|---|---|---|---|
| 7 | 001 | 002–003 | 004–005 横 | 007→006 縦 | ⑪ 008 | 1–11, 009–016 | 017–019 | 020–025 | 026–030 | 031 / 032 |
| 8 | 033 | 034–035 | 037→036 縦 | 038–039 横 | ⑫ 040, ⑬ 041 | 1–10, 042–048 | 049–051 | 052–057 | 058–062 | 063 / 064 |
| 9 | 065 | 066–067 | 069→068 縦 | 071→070 縦 | ⑭ 072, ⑮ 073 | 1–11, 074–081 | 082–083 | 084–089 | 090–094 | 095 / 096 |
| 10 | 097 | 098–099 | 100–103 横 | 104–107 横 | ⑯ 108, ⑰ 109 | 1–11, 110–116 | 117–119 | 120–125 | 126–130 | 131 / 132 |
| 11 | 133 | 134–135 | 137→136 縦 | 138–139 横 | ⑱ 140 | 1–11, 141–147 | 148–149 | 150–155 | 156–160 | 161 / 162 |
| 12 | 163 | 164–165 | 166–167 横 | 169→168 縦 | ⑲ 170, ⑳ 171 | 1–11, 172–179 | 180–183 | 184–189 | 190–196 | 197 / 198 |

- **縦書き readings start on the right-hand (odd) page and continue on the left one** ("007→006"): PDF order is backwards.
  Within a page: top tier, then the next tier (dotted rules), each read right to left.
- Line numbers are printed every 5 on a fixed grid; a number printed past the end of the text (beside a profile box)
  is not a text line.
- 聴解 解答・スクリプト pp.238–245 (PDF 265–272): L7 265 · L8 266–267 · L9 267–268 · L10 268–269 · L11 269–270 ·
  L12 271–272. Each: tab, 🎧 label, ■解答 box, boxed situation text, script. Speakers: full name on the first line, then
  one character (社員 → 社). A grey underline in scripts = the lesson's grammar (`__…__`).
- ブラッシュアップ (PDF 226 = p.199): 上級へのチャレンジ ① 視点 200–201 · ② 四字熟語 202–205 · ③ ことわざ 206–208 ·
  ④ オノマトペ 209–211 · ⑤ カタカナ語 212–213 · ⑥ 接続詞 214–217 · ⑦ 慣用句 218–220 · ⑧ インタビュープロジェクト 221–225;
  answers printed at the foot of each unit ("✎答え▶"). 漢字チャレンジ ⑬–㉔ pp.226–237, one page each, no answers.
- Indexes (generated from our data, not transcribed): 文型・表現さくいん 246–247, 単語さくいん 248–257.

## 別冊 (supplement page; PDF = +287)

| L | 読み物1 list → 覚える単語と例文 | 読み物2 list → 覚える | kanji 読1 | kanji 読2 |
|---|---|---|---|---|
| 7 | 2–3 → 3–4 | 4–5 → 6 | 328–350 (p.34) | 351–372 (p.36) |
| 8 | 7–8 → 8 | 9–11 → 11 | 373–388 (p.39) | 389–417 (p.40) |
| 9 | 12–13 → 13–14 | 14–16 → 16 | 418–436 (p.44) | 437–462 (p.45) |
| 10 | 17–19 → 19 | 20–21 → 21–22 | 463–487 (p.49) | 488–507 (p.51) |
| 11 | 22–24 → 24 | 25–26 → 26 | 508–533 (p.54) | 534–552 (p.56) |
| 12 | 27–29 → 29 | 30–32 → 32 | 553–574 (p.59) | 575–597 (pp.61–63) |

漢字チャレンジ kanji (the チャレンジ！ box kanji) are listed in the 別冊 too: ⑬⑭ 598–607 (p.64, → kanji07.js), ⑮⑯
608–617 (p.65, L8), ⑰⑱ 618–627 (p.66, L9), ⑲⑳ 628–637 (p.67, L10), ㉑㉒ 638–647 (p.68, L11), ㉓㉔ 648–657 (p.69, L12).
(Supplement page ranges are from the survey — confirm on the scans.)

## Conventions

- **Characters as printed**: full-width Japanese punctuation （）「」『』、。？！, `……` stays `……`, `〜` as printed in
  patterns, `○ × △ ◆ ◇ ★` literal. **Digits are ASCII** (2時間, 29歳, 550〜650字) even where the scan's glyph is
  full-width. Latin letters in Japanese text as printed (Bento, SNS). Subscripts N₁ N₂ as Unicode.
- **Furigana**: exactly the readings the book prints, on exactly those kanji (zoom strips!). `{詰|つ}まった` —
  okurigana outside. A reading over several kanji: `{距離|きょり}`; one over a word including kana is split per kanji
  run: `{受|う}け{入|い}れる`.
- **Bold** (`**…**`) where the book prints bold: target grammar in note examples, key phrases in model conversations,
  interviewer lines in interviews.
- **English**: the book's printed English goes in `en`, **verbatim**, American/British spelling and typos included
  (report a typo, don't fix it). Spacing is not transcribed from the glyph gaps: the book sets Japanese words in its
  English with full-width boxes, so a half-width `.` `,` `)` after a Japanese word (and a `(` before one) looks spaced
  on the scan. Type no space there: `the particle が.`, `(e.g., 季節, 状況)`, `(i.e., 〜ないで)` — not `が .`,
  `季節 ,`, `〜ないで )`. Keep the spaces between words (`N によって X`, `Y 点は`). Our translations go in `tr`: accurate, natural American English, faithful to the
  Japanese (not to any other translation), consistent with the answer keys. Every Japanese sentence that has no book
  English gets `tr`.
- Illustrations are not reproduced. When a picture carries information needed for a task (a graph, a map, a situation
  drawing), add a `figure` with `desc` (our description) and `labels` (the Japanese printed in it). A graph whose values
  are printed → `chart` with all values.
- Speaker voices `v`: from the character (メイリン f, サラ f, ジョージ m, 絵理 f, …) — keep them consistent across the
  lesson; narrators / teachers as heard in the scene (use the character's gender when named, otherwise f).
- 聴解 answers only from ■解答; brush-up answers only from the unit's "答え" line; bubbles' answers only from the book's
  own モデル会話. Never from our own judgement.

## Tools (run after every file)

```sh
node tools/q2/check.js data/q2/l07.js                 # structure, markup, tr present
node tools/q2/ocr-diff.js data/q2/l07.js 28-59,265    # every string vs OCR of those PDF pages (< 0.85 → look at the scan)
python3 -m http.server 8765 → http://localhost:8765/q2/#/l/7/read
```

## Team workflow

Each file is transcribed by one agent and then reviewed line by line against the zoomed scans by a different agent
(transcribe → review → fix). Agents: view each page as a whole page first, then its strips; **keep to your page range**
(context is limited — roughly 12 pages per agent). Report at the end: pages done, anything ambiguous (page, what, what
you chose), anything you could not read.
