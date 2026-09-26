# N2 · N1 文法 — Interactive JLPT Grammar Textbooks

Two books, one site (switch with the **N2 | N1** buttons in the top bar):

- **N2** — *TRY! 日本語能力試験 N2* (14 chapters, 139 points): https://huangwaylon.github.io/n2/
- **N1** — *TRY! 日本語能力試験 N1* (10 chapters, 123 points), transcribed from the Chinese edition — its Chinese is not
  reproduced; all English on the N1 site is generated: https://huangwaylon.github.io/n2/n1/

Static site on GitHub Pages (from `main`, repo root), no build step. Run locally:
`python3 -m http.server 8765`, then open http://localhost:8765/ (N2) or http://localhost:8765/n1/ (N1).

## Features

- Every grammar point (plus every ＋Plus sub-pattern and usage note), in the book's order, numbering and layout
- Japanese-first; English is hidden by default — toggle globally with **EN** (or press `E`), or per line / per box
- English the book prints (N2) is shown in grey; English generated for this site is tagged **generated**
- Furigana toggle; light, dark or automatic theme (⚙ settings)
- Sample texts (見本文, 縦書き where the book prints them vertically), やってみよう, Check, and JLPT-format
  まとめの問題 (文法形式の判断 · 文の組み立て ★ · 文章の文法 / 読解 · 聴解)
- Listening questions and read-aloud via the browser's Japanese speech synthesis
- Progress ("studied") and scores saved in `localStorage`
- Searchable index, similar-pattern comparison list, can-do list, random drill
- Phones (from 320 px), tablets and desktop

Book content (sample texts, explanations, examples, exercises, answer keys, listening scripts) is transcribed verbatim
from the books (`n2.pdf`, `n1.pdf`). Structure, data format and the validation tools: see `CLAUDE.md` and
`data/SCHEMA.md`.
