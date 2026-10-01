# Quartet I transcription guide (`Quartet1.pdf`)

Data format: `data/Q2-SCHEMA.md`; conventions, checks and the fragment workflow: `docs/Q2-TRANSCRIPTION.md` (they apply
unchanged; merge tools take `q1` as the first argument). This file is the Quartet I page map.

## Source

- `Quartet1.pdf` (352 pages, 135 MB) is at the repo root and not in git (`.gitignore`). US-letter pages with the
  printed page in the middle. `tools/zoom.sh q1 PDFPAGE page` (layout) and `tools/zoom.sh q1 PDFPAGE` (strips for
  furigana and small print); OCR `tools/q1/ocr/NNN.txt` (PDF page).
- Book page = PDF − 26 (p.001 = PDF 27); 別冊 page = PDF − 288 (supp p.001 = PDF 289, the 単語リスト contents; p.027 =
  PDF 315, the 漢字リスト contents; PDF 352 colophon).
- Front matter (PDF): 5 文型・表現ノート一覧 · 6–7 学習漢字一覧 · 9 はじめに [03] · 10–13 もくじ · 14–18 本書について
  [08]–[12] · 19–24 About This Book [13]–[18] · 25 品詞と活用の記号 [19] · 26 接続の表し方 [20].
- Accent colour magenta (Quartet II: cyan). Section titles per lesson: `toc` in `data/q1/book.js`.

## Lessons (book pages)

Notes are numbered per lesson (55 in all, 40 with ★).

| L | opener | 読む | 読み物1 | 読み物2 | strategies | ノート | 書く | 会話1 | 会話2 | 聴解1 / 2 |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 001 | 002 | 004 横 | 005 縦 | ① 006, ② 007 | 1–9, 008–015 | 016–017 | 018–023 | 024–028 | 029 / 030 |
| 2 | 031 | 032 | 034–035 横 | 037→036 縦 | ③ 038, ④ 039 | 1–9, 040–049 | 050–051 | 052–057 | 058–063 | 064 / 065 |
| 3 | 067 | 068 | 070–071 横 | 073→072 縦 | ⑤ 074 | 1–10, 075–081 | 082–083 | 084–089 | 090–096 | 097 / 098 |
| 4 | 099 | 100 | 102–103 横 | 105→104 縦 | ⑥ 106, ⑦ 107 | 1–9, 108–115 | 116–117 | 118–123 | 124–129 | 130 / 131 |
| 5 | 133 | 134 | 136–138 横 | 139–140 横 | ⑧ 141 | 1–9, 142–148 | 149–151 | 152–157 | 158–165 | 166 / 167 |
| 6 | 169 | 170 | 173 縦 | 175→174 縦 | ⑨ 176, ⑩ 177 | 1–9, 178–187 | 188–189 | 190–195 | 196–201 | 202 / 203 |

- 聴解 解答・スクリプト pp.242–248, by PDF page: L1 268 · L2 269 · L3 270–271 · L4 271–272 · L5 272–273 · L6 273–274.
- ブラッシュアップ (p.205): 初級文法チェック ①–⑦ (kind `grammar`, `g1`–`g7`): ① 書き言葉の文体 206–207 ·
  ② そうだ／らしい／ようだ／みたいだ 208–211 · ③ 敬語 212–215 · ④ あげる／くれる／もらう 216–219 · ⑤ 受身形／使役形／使役受身形
  220–223 · ⑥ 条件文 〜たら／〜と／〜ば／〜なら 224–226 · ⑦ 助詞「は」と「が」 227–229. 漢字チャレンジ ①–⑫ (kind `kanji`, `k1`–`k12`), one page each,
  pp.230–241.
- Indexes (generated; `verify.js` checks against them): 文型・表現さくいん p.249, 単語さくいん pp.250–258 (PDF 276–284).

## 別冊 (supplement pages)

Each 単語リスト ends with its 覚える単語と例文 (→ start page).

| L | 読み物1 list → 覚える | 読み物2 list → 覚える | kanji 読1 | kanji 読2 |
|---|---|---|---|---|
| 1 | 002–003 → 003 | 004–005 → 005 | 001–023 (p.028) | 024–045 (p.030) |
| 2 | 006–007 → 007 | 008–009 → 009 | 046–068 (p.033) | 069–090 (p.035) |
| 3 | 010–011 → 011 | 012–013 → 013 | 091–115 (p.038) | 116–135 (p.040) |
| 4 | 014–016 → 015 | 017–018 → 018 | 136–167 (p.043) | 168–180 (p.046) |
| 5 | 019–020 → 020 | 021–022 → 022 | 181–205 (p.048) | 206–222 (p.050) |
| 6 | 023 → 023 | 024–026 → 025 | 223–235 (p.053) | 236–267 (p.054) |

漢字チャレンジ kanji go in the kanjiNN.js of their units' lesson: ①② 268–277 (p.058, L1) · ③④ 278–287 (p.059) · ⑤⑥
288–297 (p.060) · ⑦⑧ 298–307 (p.061) · ⑨⑩ 308–317 (p.062) · ⑪⑫ 318–327 (p.063, L6). Kanji #1–327 in all.

OCR-diff example: `node tools/q2/ocr-diff.js data/q1/l01.js 27-56,268`.
