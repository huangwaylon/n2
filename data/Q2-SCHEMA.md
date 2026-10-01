# Quartet data schema (`data/q2/`, `data/q1/`)

Both Quartet books: Quartet II (`data/q2/`, lessons 7–12) and Quartet I (`data/q1/`, lessons 1–6). A four-skills course,
so the model differs from the TRY books (`data/SCHEMA.md`): a lesson is a list of sections (読む・書く・話す・聞く), a
section a list of blocks rendered in book order (`assets/js/q2/blocks.js`). Page numbers below are Quartet II's unless
marked Q1; page maps and transcription conventions: `docs/Q2-TRANSCRIPTION.md`, `docs/Q1-TRANSCRIPTION.md`. Per-book
names the renderer shows (`shortTitle`, `titleJa`, `unitKinds`, `accent`) are in each `book.js` (Q1 also `toc`: section
titles shown for a lesson whose file is missing; `openerRuby`: the readings printed under 第 and 課 on each opener).

## Files

| File | Registers | Source |
|---|---|---|
| `book.js` | `TRY.registerBook({ id, kind: "quartet", files, lazy, … })` | `files` load with the page, `lazy` on the routes that show them; list every new file in one of them |
| `lNN.js` | `TRY.registerLesson(Lesson)` | the lesson's pages + its 聴解 解答・スクリプト |
| `vocabNN.js` | `TRY.registerVocab(Vocab)` | 別冊 単語リスト・覚える単語と例文 |
| `kanjiNN.js` | `TRY.registerKanji(Kanji)` | 別冊 漢字リスト (+ the lesson's 漢字チャレンジ kanji) |
| `challenge.js` | `TRY.registerUnits([Unit…])` | ブラッシュアップ units |
| `front.js` | `TRY.registerFront([Section…])` | front matter pp.[03]–[20], incl. the 文型・表現ノート一覧 (`id: "notelist"`) |

The indexes (文型・表現さくいん, 単語さくいん) are generated from the data; `tools/q2/verify.js` checks against them.

## Text and English

A Text is a string (Japanese only) or `{ ja, en, tr }`:

- `ja`: the Japanese exactly as printed.
- `en`: English printed in the book, verbatim (note glosses and explanations, key-example translations, strategies,
  単語 boxes, vocab and kanji meanings, About This Book). `{ en }` without `ja` is an English-only block (always shown).
- `tr`: our translation, required on every Japanese sentence the book does not translate (reading paragraphs,
  examples, questions, instructions, dialogue and script lines, vocab example sentences). Never mix `en` and `tr`.

The book's explanations, glosses and word meanings are always visible; `en` beside `ja` and all `tr` are hidden until
EN. `en` renders grey, `tr` blue with a "generated" tag. `titleTr`, `headTr`, `desc`, `deepDive` are also ours.

## Inline markup (in `ja`, `en`, `tr`)

Everything in `data/SCHEMA.md` "Inline markup" works (`{漢字|かんじ}`, `**bold**`, `__underline__`, `~~strike~~`, `＿＿`,
`\n`). Quartet adds:

| Markup | Meaning |
|---|---|
| `[[text\|7]]` | numbered underline in a reading, linking to grammar note 7 (`{膨\|ふく}らむ[[ばかり\|7]]でしたが`) |
| `[[text\|a]]`, `[[text\|]]` | lettered underline "(a)" (strategies, model compositions, 書くポイント); an underline continued across a line break |
| `{{text}}` | replaceable part of a practice pattern (練習しよう) |
| `!!text!!` | accent colour where it carries meaning: the grammar in a formula, the radical-part kanji in 漢字チャレンジ |
| `[#3]` | boxed example number ③ inside explanations |
| `[#Vて]` | a form or label printed in a box (forms in the book's English, boxed sub-patterns, ［論点1］ p.224); POS letters bold |
| `[#パートA]` `[#パートB]` | Q1 part badges (A filled, B outlined): 練習しよう headings, box titles, ☛ lines, flowchart phases (Q1 pp.021–022, 200) |
| `%%text%%` | grey shading on words (the particle a sentence turns on, the noun a clause modifies) |
| `''text''`, `^^text^^`, `==text==` | italics in the book's English; 傍点 emphasis dots; double underline (strategy keywords) |
| `[普]` | the 普 plain-form badge of formulas; `❶`–`❿` and `○ × △` are literal characters |

- POS symbols in formulas are written as printed, without brackets (`Vる` `V~~ます~~` `V(よ)う` `いA~~い~~` `なA~~だ~~`
  `N₁`; symbol list pp.[19]–[20]); the renderer bolds the POS letters.
- Alternatives stacked in a brace inside a sentence (Q1 p.085) are typed `｛alt1\nalt2｝`; a brace without a line break
  stays literal (choice brackets `｛○かえって／×むしろ｝`). Formulas use `stack` instead.
- Furigana: exactly what the book prints, on those kanji, okurigana outside (`{詰|つ}まった`); readings in 単語 boxes
  and word lists are furigana too.

## Lesson and Section

```js
TRY.registerLesson({
  id: 7,
  pages: [1, 32],                          // book pages, without the answers/scripts
  opener: [                                // p.001: two groups of two skills, each with its ➤ can-do lines
    { skills: [ { skill: "read", title: "異文化での気づき" }, { skill: "write", title: "経験からの学び" } ],
      canDo: [ { ja: "…", tr: "…" } ] },
    { skills: [ … ], canDo: [ … ] } ],
  sections: [ { skill: "read" | "write" | "speak" | "listen", title: { ja, tr }, page: 2, blocks: [Block] } ],
});
```

Section routes: `#/l/7/read` (`write`, `speak`, `listen`); each `head` block with an `id` enters its mini-TOC.

## Blocks

Every block has a type `t`; any block may carry `page` (book page where it starts; shown as a page marker) and `id`
(anchor, unique in the lesson).

### Structure

```js
{ t: "head", text, style, tag, icon, audio, id }
//   band: hatched band of 読み物1 / 会話1 / 聴解1 (tag "読み物1", icon read|write|speak|listen) · num: 1 モデル作文 (tag "1")
//   step: 1-1 やってみよう (tag "1-1") · sq: ■ heading · label: 読む前に / リスニング … · flow: フローチャート · plain
//   rule: 読む前に・読んだ後で, 文型・表現ノート (centred between accent rules) · tag: 読み物1 / 読み物2 under it (tag and icon, no band)
{ t: "p", text, style: "indent" | "small" | "right" | "center" | "note" | "source" }
{ t: "list", mark: "・", items: [ Text | { text, blocks } ] }        // mark as printed (・ • ▸ ▶ ■ □ ＊)
{ t: "qs", items: [ { n: "1.", text, words: ["友達"], blocks, answer } ] }
//   n as printed ("1." "(1)" "①" "1）"); words = the [ … ] box under a question; answer = the printed answer (behind 解答)
//   style: "memo" — prompts on a ruled memo with room to write (「下にメモしなさい」, Q1 pp.024, 090)
{ t: "box", style, title, icon, ref, blocks }
//   gray · blue (accent fill, no border) · accent (fill in an accent frame, Q1 p.035) · frame · attention (💡ここにも注目) · memo (title above a dog-eared sheet, a run two to a row; Q2 p.095) · sheet (title centred on a dog-eared sheet; Q1 pp.084, 094)
//   · task (✎, ref "（読み物2：行13〜15）") · strategy · challenge
{ t: "table", head: [[Cell]], rows: [[Cell]], cols: ["auto", "1fr"], caption, align, headAlign, stripe }
{ t: "words", label, items: [ { ja: "{悩|なや}む", en: "to worry" } ] }     // 単語 box (label default 単語)
{ t: "figure", desc: "…", labels: ["満足度"] }   // a picture that matters: desc ours, labels the printed Japanese
{ t: "chart", title, kind: "bar" | "line" | "pie" | "table", unit, head, rows, note, desc }   // a graph with printed values; desc ours
{ t: "hr" }
```

Tables: Cell = Text or `{ text, colspan, rowspan, style }`; cell styles (combinable, `"gray center"`): `hl` shaded,
`gray` row label beside a coloured head row (Q1 pp.084, 097), `frame` text in a box (Q1 p.106), `plain` unfilled head
cell (Q1 p.049), `center` `right` `left`. `align` / `headAlign`: `"center"` / `"right"` for all body / head cells or one
entry per column (colspans counted; Q1 p.107; Q1 head rows are centred, pp.049, 097, 107, 118, 196, 202); a cell's own
alignment wins. `stripe: true` greys every second body row (Q1 p.107). `regular: true`: head cells not bold (Q1 pp.084, 202). `bare: true`: no rules or shading (a menu on a sheet, Q1 p.094). Fill-in tables: empty cells `""`, printed
blanks ①（　） as printed.

### Reading texts (読み物, モデル作文, strategy examples, brush-up texts)

```js
{ t: "reading", n: 1, title: "日本人学生の留学体験記", author, audio: "1.Yomimono_L7-1", page: 4, vertical: false,
  numbers: true, v: "f",
  lines: [
    "#文化・慣習の壁の厚さ@{岡田|おかだ} {守弘|もりひろ}",   // title line (#) with the byline (@)
    "¶楽しいことと{辛|つら}いことがたくさん{詰|つ}まった、…",
    "生の選択肢と可能性を大きく広げてくれました。",
    5,                                                   // book page 5 starts here (not a line)
  ],
  credit: ["監修・…", "『…』中日新聞社（一部改）"],
  titleTr: "…", headTr: ["…"], tr: ["paragraph 1", "…"],       // tr: one entry per ¶ paragraph
  roles: [ { from: 3, to: 6, label: "❶ {序論|じょろん}" }, { from: 7, to: 13, label: "❷ 本論（1）", sub: "…" } ] }
```

- `lines`: one string per printed line (one column in 縦書き), so line numbers are the book's; title and byline lines
  count. Prefixes: `¶` paragraph start (no indent space typed), `#` title line (`#=` centred), `@` byline
  (right-aligned, may follow a title), `=` centred line, none = continuation. A word split across lines is split the
  same way.
- `{ fig: Block }` in `lines`: a figure, chart or table printed between paragraphs (図1, L10); not a line.
- `numbers: false`: no printed line numbers. `vertical: true`: 縦書き. `start`: first line number when a text continues
  another's numbering. `style`: `profile` | `interview` | `poem` | `email` (Q1 pp.034–035). `tag: false` hides the
  読み物N tag. `v`: voice for speech.
- `headTr`: one entry per `#` line (`""` for a line continuing the previous title line); `titleTr` translates `title`.
- `roles`: bracketed paragraph labels beside a model composition (line ranges as printed).
- Interviews: interviewer lines bold as printed (`"¶**──…**"`). `speakers: true`: turns start "name：", the name hangs
  left (Q1 p.116); `speakers: "right"` right-aligns names, colons in one column (Q1 p.102). `indent: false`: paragraphs
  flush (Q1 p.116).

### Dialogues and 話す

```js
{ t: "dialogue", title, style: "casual" | "formal", styleLabel, setting, audio: "3.Kaiwa_L7-1",
  lines: [ { sp: "メ", v: "f", ja: "❶あのさあ、サラ……。", tr: "…" } ] }
{ t: "roles", style, cards: [ { tag: "A", who: "あなた", text }, { tag: "B", who: "Aの友達", text } ] }
{ t: "flow", head: [Text, Text], steps: [ { side: "a", n: 1, label: "話しかける", text: "…" }, { side: "b", text: "何？" } ] }
{ t: "bubbles", from: "モデル会話", items: [ { label: "① …", text: "…＿＿けど、\n実は私、＿＿。", answer: ["…", "…"] } ] }
//   item turns: [1] — from that line of the text on, the next speaker's own bubble (Q1 pp.025, 091); block alt: true —
//   every second bubble at the right (p.025)
```

- `sp` as printed (`メ`, `サラ`, `社員`, `A`); `v: "m" | "f"` from the character (check.js requires `v` with `sp`); a line
  without `sp` is narration or a stage direction ("〈カフェで〉"). "A：… / B：…" examples are `examples` items with `lines`.
- `flow`: with more than two roles `side: "a"` is the lead and `"b"` the others, `who` / `act` on each role's first
  step; `labels: [{ n, label }]` prints several label-only steps in one bubble (Q1 p.027); `phase: { ja, tr }` on the
  first step of a bracketed group.
- `bubbles.answer`: the words of the book's own モデル会話 that fill the blanks (`from` names it).

### Grammar notes (文型・表現ノート)

```js
{ t: "note", no: 1, star: true, pattern: "〜つつある", gloss: "to be in the process of doing", ref: "読み物1-行13", page: 9,
  blocks: [
    { t: "key", items: [ { ja: "…よくなり**つつある**。", en: "…" } ] },
    { t: "examples", items: [ { n: 1, ja: "…", tr: "…" }, { n: 3, lines: [ { sp: "A", ja, tr }, { sp: "B", ja, tr } ] } ] },
    { t: "conn", forms: ["V~~ます~~ !!つつある!!"], blocks: [
        { t: "list", mark: "•", items: [ { en: "~つつある is used with verbs that denote a change, …" } ] },
        { t: "examples", style: "rei", items: [ { mark: "×", ja: "…" }, { mark: "○", ja: "…", en: "…" } ] } ] } ],
  deepDive: "…" }
```

- `star`: the ★ badge; `ref`: the bracketed source as printed; `pattern` / `gloss` as printed (gloss without ⟨ ⟩).
- `deepDive`: ours (docs/ENGLISH.md), closed under the note. Counterparts in the TRY books: `data/links.js`.
- Sub-patterns (4. 〜こそ → ① Nこそ Y): `{ t: "sub", n: 1, pattern, gloss, ref }` followed by its key / examples / conn;
  example numbers continue as printed.
- `key`: the accent box, book English in `en`.
- `examples`: `n` as printed; items may carry `sp` or `lines`; `tr` required except on × / ？ sentences. `sub: "a"` on
  a line is the a) b) label inside one example (a speaker repeated on the next sub-line is printed once); never type
  "a) " into `ja`/`tr`. `style: "rei"`: 例） lines with `mark` ○ × △ (`label` overrides 例）); `en` only where printed.
- `conn.forms`: a string, or a bracket stack `{ stack: ["Vる", "Vた", "Nの"], join: "!!際（に）!!" }` (brace closes
  towards the join) or `{ lead: "N", stack: [...] }` (brace opens towards the stack); both may be present; stack lines
  may start with `＊`; never type ｛…／…｝ into a form. `side: true` (set per box as printed): a bullet begun beside the
  box keeps that column (Q1 pp.009, 142); without it bullets run on under the box (Q1 p.010, Q2 p.009). `blocks`: the
  box's English bullets and 例） lines.
- Comparison sub-notes (☛ むしろ and かえって): a `head` with `style: "sq"` followed by the note's blocks.

### Strategies, listening, other exercises, writing

```js
{ t: "strategy", no: 11, title: "{省略|しょうりゃく}された言葉", en: "Word omission in sentences", page: 8, blocks }
{ t: "tf", items: [ { n: "①", text, tr, answer: "○" } ] }
{ t: "choice", items: [ { n: "", text, options: ["❶", "❷", "❸"], answer: 2 } ] }      // answer = index
//   list: true — the options one per line, as a.（　）吉田ルート lists (Q1 pp.064, 097, 166); list: "grid" — two to a row (Q2 p.131)
//   a text with 【a. …　b. …】 holding as many options as `options` renders them in place (the labels and text there are shown)
{ t: "script", audio: "4.Chokai_L7-1", page: 238, key: ["③"], intro: Text, lines: [ { sp: "", v: "f", ja, tr } ] }
{ t: "match", leftLabels: ["a", "b"], left: [Text], rightLabels: ["①", "②"], right: [Text], answer: [1, 0] }
{ t: "compose", min: 550, max: 650 }
```

- 聴解 questions are `qs` / `tf` / `choice` with the answers of the book's 解答; the `script` goes at the end of its 聴解;
  `key` is the ■解答 box, one string per printed line; `intro` the boxed situation text.
- `match`: `answer[i]` = index into `right` for `left[i]`, from the answer key.
- 書く: `reading` (モデル作文 with `roles`), `table` (段落構成), `head`/`qs`/`examples` (書くポイント), `compose` after
  書いてみよう (web-only writing area with a character counter, saved in the browser).

## Vocab (`vocabNN.js`)

```js
TRY.registerVocab({ lesson: 7, lists: [
  { sec: "読み物1", title: "日本人学生の留学体験記", page: 2,        // 別冊 page where the list starts
    rows: [ { n: 1, k: "◇", ln: 1, w: "__壁__", yomi: "かべ", en: "wall; barrier" }, { k: "◇", w: "__厚__さ", yomi: "あつさ", en: "thickness" } ],
    targets: { audio: "5.Tango_L7-1", page: 3, items: [ { n: 1, w: "壁", ex: "外国で生活すると、…", tr: "…" } ] } } ] });
```

`n`: the 覚える単語 number (only on those rows); `k`: ◆ / ◇; `ln`: line number where printed (only when it changes);
`w`: the word with the new kanji underlined as printed; `yomi` / `en` as printed. `targets` (覚える単語と例文): `w`, `ex`
as printed (furigana too), `tr` ours.

## Kanji (`kanjiNN.js`)

```js
TRY.registerKanji({ lesson: 7, page: 34, kanji: [
  { no: 334, k: "差", sec: "読み物1", hl: true, meaning: "point; difference", on: ["サ"], kun: ["さ"], strokes: 10,
    words: [ { m: "◆", w: "差", yomi: "さ", en: "difference" }, { w: "差別", yomi: "さべつ", en: "discrimination" } ] } ] });
```

`sec`: the section tab (on every kanji of its group); `hl`: printed on the grey tile; `m`: ◆ / ◇ before a word.
Stroke-order diagrams are not reproduced.

## Units (`challenge.js`)

```js
TRY.registerUnits([
  { id: "c1", kind: "challenge", no: 1, title: "{視点|してん}", en: "Viewpoint", lesson: 7, lessons: [7], page: 200, blocks },
  { id: "k13", kind: "kanji", no: 13, title: "{部首|ぶしゅ}「さんずい（氵）」", lesson: 7, page: 226, blocks } ]);
```

`kind` is one of the book's `unitKinds` (book.js, sidebar order): Q2 `challenge` (上級へのチャレンジ, `c1`–`c8`), Q1
`grammar` (初級文法チェック, `g1`–`g7`, same blocks), both `kanji` (漢字チャレンジ, Q2 `k13`–`k24`, Q1 `k1`–`k12`). `lessons`: the lessons a unit goes with as printed (Q2 c8
`[8, 10, 12]` with `lesson: null`; Q1 g1, g4, g7 have neither); no renderer reads it yet.

## Front matter (`front.js`)

`TRY.registerFront([ { id: "hajimeni", title, page: 3, blocks }, … ])`, the same blocks. The 文型・表現ノート一覧 is the
section `id: "notelist"` with one `table` per lesson (`id: "front-notelist-7"` …); `verify.js` checks every lesson's
notes, ★ and patterns against it.
