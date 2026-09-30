# Quartet I transcription guide (`Quartet1.pdf`)

Read `data/Q2-SCHEMA.md` first (the data format of both Quartet books) and `docs/Q2-TRANSCRIPTION.md` (conventions,
which apply unchanged). **The PDF is the source of truth.** Never guess, never "fix" the book.

## Source

- `Quartet1.pdf` at the repo root, 352 pages, 135 MB. It is **not in git** (over GitHub's 100 MB limit; `.gitignore`).
  US-letter pages with the printed page in the middle.
- Look at a page: `tools/zoom.sh q1 PDFPAGE page` (whole page, enough for layout) and `tools/zoom.sh q1 PDFPAGE`
  (three 300-dpi strips — **use them to read furigana, small print and punctuation**). Read the printed PNG paths.
- OCR of every page (noisy, only a cross-check): `tools/q1/ocr/NNN.txt` (PDF page).
- **Page maps:** main text **book page N = PDF page N + 26** (p.001 = PDF 27). 別冊 **supplement page N = PDF page
  N + 288** (supp p.001 = PDF 289, the 単語リスト contents; p.027 = PDF 315, the 漢字リスト contents; PDF 352 colophon).
- Front matter: PDF 5 文型・表現ノート一覧 · 6–7 学習漢字一覧 · 9 はじめに [03] · 10–13 もくじ · 14–18 本書について
  [08]–[12] · 19–24 About This Book [13]–[18] · 25 品詞と活用の記号 [19] · 26 接続の表し方 [20].
- The accent colour is magenta (Quartet II's is cyan): the renderer's `--q` tokens for `body[data-book="q1"]` in q2.css.

## Lessons (book pages; PDF = +26)

From the もくじ (PDF 10–13) and the transcription. 横 / 縦 = horizontal / 縦書き text; the notes are numbered per lesson
(55 in all, 40 with ★). Reading pages are from the page markers in the data. As in Quartet II, a 縦書き reading over
two pages starts on the right-hand (odd) page and continues on the left one ("037→036").

| L | opener | 読む | 読み物1 | 読み物2 | strategies | ノート | 書く | 会話1 | 会話2 | 聴解1 / 2 |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 001 | 002 | 004 横 | 005 縦 | ① 006, ② 007 | 1–9, 008–015 | 016–017 | 018–023 | 024–028 | 029 / 030 |
| 2 | 031 | 032 | 034–035 横 | 037→036 縦 | ③ 038, ④ 039 | 1–9, 040–049 | 050–051 | 052–057 | 058–063 | 064 / 065 |
| 3 | 067 | 068 | 070–071 横 | 073→072 縦 | ⑤ 074 | 1–10, 075–081 | 082–083 | 084–089 | 090–096 | 097 / 098 |
| 4 | 099 | 100 | 102–103 横 | 105→104 縦 | ⑥ 106, ⑦ 107 | 1–9, 108–115 | 116–117 | 118–123 | 124–129 | 130 / 131 |
| 5 | 133 | 134 | 136–138 横 | 139–140 横 | ⑧ 141 | 1–9, 142–148 | 149–151 | 152–157 | 158–165 | 166 / 167 |
| 6 | 169 | 170 | 173 縦 | 175→174 縦 | ⑨ 176, ⑩ 177 | 1–9, 178–187 | 188–189 | 190–195 | 196–201 | 202 / 203 |

Section titles (読む · 書く · 話す · 聞く), also in `data/q1/book.js` `toc` (the sidebar's fallback while a lesson file is missing):
1 日本を代表する有名人 · 私が尊敬する有名人 · 新しい出会い · アメリカ人留学生から見た日本;
2 メールと手紙 · お礼の手紙 · 先生とのやりとり · フランス人留学生から見た日本;
3 日本を楽しむ · 私の好きな町 · 友人との集まり · イタリア人留学生から見た日本;
4 外国での経験 · 座談会の記事 · 困った時には · ドイツ人留学生から見た日本;
5 和食のすすめ · 私のおすすめ料理 · 週末の予定 · 韓国人留学生から見た日本;
6 日本社会への声 · 投書文を書く · 寮生活でのトラブル · 中国人留学生から見た日本.

- 聴解 解答・スクリプト pp.242–248 (PDF 268–274): L1 268 · L2 269 · L3 270–271 · L4 271–272 · L5 272–273 · L6 273–274.
- ブラッシュアップ (p.205 = PDF 231): **初級文法チェック** ①–⑦ (unit kind `"grammar"`, ids `g1`–`g7`): ① 書き言葉の文体
  206–207 · ② そうだ／らしい／ようだ／みたいだ 208–211 · ③ 敬語 212–215 · ④ あげる／くれる／もらう 216–219 ·
  ⑤ 受身形／使役形／使役受身形 220–223 · ⑥ 条件文 〜たら／〜と／〜ば／〜なら 224–226 · ⑦ 助詞「は」と「が」 227–229.
  **漢字チャレンジ** ①–⑫ (kind `"kanji"`, ids `k1`–`k12`), one page each, pp.230–241: ① 形が似ている漢字 · ② 音符 ·
  ③ 部首「にんべん・ひとやね」 · ④ 部首「きへん・き」 · ⑤ 接頭辞 · ⑥ 接尾辞 · ⑦ 部首「くちへん・くち」 ·
  ⑧ 部首「ひへん・ひ」 · ⑨ 反対語 · ⑩ 同音異義語 · ⑪ 部首「しんにょう」 · ⑫ 部首「ごんべん」.
- Indexes (generated from our data, not transcribed; `verify.js` checks against them): 文型・表現さくいん p.249
  (PDF 275), 単語さくいん pp.250–258 (PDF 276–284).

## 別冊 (supplement page; PDF = +288)

From the 別冊 contents (supp pp.001, 027). Each 単語リスト ends with its 覚える単語と例文 (→ page where they start).

| L | 読み物1 単語リスト → 覚える | 読み物2 単語リスト → 覚える | kanji 読1 | kanji 読2 |
|---|---|---|---|---|
| 1 | 002–003 → 003 | 004–005 → 005 | 001–023 (p.028) | 024–045 (p.030) |
| 2 | 006–007 → 007 | 008–009 → 009 | 046–068 (p.033) | 069–090 (p.035) |
| 3 | 010–011 → 011 | 012–013 → 013 | 091–115 (p.038) | 116–135 (p.040) |
| 4 | 014–016 → 015 | 017–018 → 018 | 136–167 (p.043) | 168–180 (p.046) |
| 5 | 019–020 → 020 | 021–022 → 022 | 181–205 (p.048) | 206–222 (p.050) |
| 6 | 023 → 023 | 024–026 → 025 | 223–235 (p.053) | 236–267 (p.054) |

漢字チャレンジ kanji, as in Quartet II assigned to the lesson of their units: ①② 268–277 (p.058, → kanji01.js) ·
③④ 278–287 (p.059, L2) · ⑤⑥ 288–297 (p.060, L3) · ⑦⑧ 298–307 (p.061, L4) · ⑨⑩ 308–317 (p.062, L5) ·
⑪⑫ 318–327 (p.063, L6). Kanji #1–327 in all.

## Files and merging

Fragments in `/tmp/q1parts` (or `$QPARTS`), the same formats as Quartet II; every merge tool takes the book first:

```sh
node tools/q2/merge-lesson.js q1 1     # l01-*.json (first chunk: pages, opener, sections) → data/q1/l01.js
node tools/q2/merge-vocab.js q1 1      # vocab01-r1.json, vocab01-r2.json → data/q1/vocab01.js
node tools/q2/merge-units.js q1        # u-*.json → data/q1/challenge.js, front-*.json → data/q1/front.js (each only if any)
```

The 文型・表現ノート一覧 (PDF 5) goes in front.js as the section `id: "notelist"` with one `table` per lesson,
`id: "front-notelist-1"` … `"front-notelist-6"` (as Quartet II): `verify.js` checks every lesson's notes, ★ and
patterns against it.

kanjiNN.js has no merge tool: write `TRY.registerKanji(<kanjiNN.json>);` into `data/q1/kanjiNN.js`. **Add every new
file to `files` in `data/q1/book.js`** (only existing files are listed; a missing one shows a load error on the page).

## Tools (run after every file)

```sh
node tools/q2/check.js q1                              # every q1 file: structure, markup, tr present
node tools/q2/check.js data/q1/l01.js                  # one file (the book follows from the path)
node tools/q2/ocr-diff.js data/q1/l01.js 27-56,268     # every string vs OCR of those PDF pages (< 0.85 → look at the scan)
node tools/q2/verify.js q1                             # notes vs the note list, kanji #1–327, words vs 単語さくいん
node tools/text-snapshot.js q1 | diff tools/q1/text-baseline.txt -   # regenerate the baseline after verified changes
python3 -m http.server 8765 → http://localhost:8765/q1/#/l/1/read   # node tools/shot.mjs q1:l/1/read 390 2400 /tmp/a.png
```
