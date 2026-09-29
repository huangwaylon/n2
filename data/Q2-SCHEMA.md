# Quartet II data schema (`data/q2/`)

*4技能でひろがる 中級日本語カルテット II* (The Japan Times, 2020) is a four-skills textbook, not a grammar-point book, so it
has its own data model: every lesson is a list of sections (読む・書く・話す・聞く), and every section is a list of
**blocks** rendered in book order (`assets/js/q2/blocks.js`). Page map, transcription conventions and the team workflow:
`docs/Q2-TRANSCRIPTION.md`. The TRY books (`data/n2`, `data/n1`) use `data/SCHEMA.md`; the inline markup below extends
that file's markup.

## Files

| File | Registers | Source (book page = PDF page − 27; 別冊 page = PDF page − 287) |
|---|---|---|
| `book.js` | `TRY.registerBook({ id: "q2", kind: "quartet", files, … })` | — |
| `front.js` | `TRY.registerFront([Section…])` | はじめに, 本書について, About This Book, 記号 pp.[03]–[20] |
| `lNN.js` (l07 … l12) | `TRY.registerLesson(Lesson)` | the lesson's pages + its 聴解 解答・スクリプト (pp.238–245) |
| `vocabNN.js` | `TRY.registerVocab(Vocab)` | 別冊 単語リスト・覚える単語と例文 for the lesson |
| `kanjiNN.js` | `TRY.registerKanji(Kanji)` | 別冊 漢字リスト for the lesson |
| `challenge.js` | `TRY.registerUnits([Unit…])` | ブラッシュアップ: 上級へのチャレンジ ①–⑧ (pp.200–225), 漢字チャレンジ ⑬–㉔ (pp.226–237) |

The indexes (文型・表現さくいん p.246, 単語さくいん pp.248–259) are generated from the data, and the tools check the data
against them (`node tools/q2/verify.js`).

## Text, English

A **Text** is either a string (Japanese only) or an object:

```js
{ ja: "…", en: "…", tr: "…" }
```

- `ja` — the Japanese exactly as printed (inline markup below).
- `en` — English **printed in the book**, verbatim (grammar-note glosses and explanations, key-example translations,
  strategies, 単語 boxes, vocab / kanji meanings, About This Book …). Checked against the OCR by `tools/ocr-diff.js`.
- `tr` — **our** English translation (generated). Required on every Japanese sentence the book doesn't translate
  (reading paragraphs, examples, questions, instructions, dialogue and script lines, vocab example sentences).
  Never put our English in `en`, never put the book's English in `tr`.
- `{ en: "…" }` with no `ja`: an English-only block of the book (explanations). It is always shown.

How the site shows it: the book's explanations (`en` without `ja`, glosses, word meanings) are always visible; book
translations of Japanese sentences (`en` next to `ja`) and all `tr` are hidden until the reader presses EN (`E`).
`en` is grey (book), `tr` is blue with a "generated" tag.

## Inline markup (in `ja`, `en` and `tr`)

Everything from `data/SCHEMA.md` ("Inline markup") works: `{漢字|かんじ}` furigana, `**bold**`, `__underline__`,
`~~strike~~`, `＿＿` blank, `\n` line break. Quartet adds:

| Markup | Meaning | Example |
|---|---|---|
| `[[text\|7]]` | numbered blue underline in a reading: the 文型・表現ノート entry #7 it points to (a link) | `{膨|ふく}らむ[[ばかり\|7]]でしたが` |
| `[[text\|a]]` | lettered underline "(a)" (strategies, model compositions, 書くポイント) | `[[それ\|a]]は、日本人の…` |
| `[[text\|]]` | continuation of the previous numbered underline across a line break (no number printed) | |
| `{{text}}` | blue replaceable part of a practice pattern (練習しよう) | `{{〇〇さん}}って、` |
| `!!text!!` | text printed in the accent colour (blue) where the colour means something: the grammar in a connection formula, the radical-part kanji in 漢字チャレンジ | `V~~ます~~ !!つつある!!` |
| `[#3]` | the boxed example number ③ as printed inside explanations ("see [#1] and [#2]") | |
| `❶ … ❿` | the conversation step marks (blue ❶ in モデル会話 / フローチャート), literal characters | `メ：❷ちょっと言いづらいんだけど` |
| `[普]` | the 普 (plain form) badge of connection formulas (black circle) | `[普] !!（の）!!` |
| `^^text^^` | 傍点 emphasis dots | `^^虫がよすぎる^^` |
| `==text==` | double underline (keywords in strategy examples) | `==敬語==` |
| `○ × △` | literal marks as printed | |

POS symbols in connection formulas are written as printed, without brackets: `Vる` `Vた` `Vて` `V~~ます~~` `Vない`
`Vず` `Vば` `V(よ)う` `いAい` `いAくて` `いA~~い~~` `いAければ` `なA` `なA~~だ~~` `N` `N₁` `N₂`; the renderer sets the
POS letters in bold (front matter p.[19]–[20] lists the symbols).

Furigana: exactly the readings the book prints, on exactly those kanji. Split okurigana out (`{詰|つ}まった`). Readings
in the book's 単語 boxes and word lists are also furigana (`{悩|なや}む`).

## Lesson

```js
TRY.registerLesson({
  id: 7,
  pages: [1, 32],                     // book pages of the lesson (without the answers/scripts)
  opener: [                           // p.001: two groups of two skills, each with its can-do lines (➤)
    { skills: [ { skill: "read", title: "異文化での気づき" }, { skill: "write", title: "経験からの学び" } ],
      canDo: [ { ja: "経験談を読んで、…", tr: "…" }, … ] },
    { skills: [ { skill: "speak", … }, { skill: "listen", … } ], canDo: [ … ] },
  ],
  sections: [ Section, … ],           // 読む, 書く, 話す, 聞く in book order
});
```

### Section

```js
{ skill: "read" | "write" | "speak" | "listen", title: { ja: "異文化での気づき", tr: "…" }, page: 2, blocks: [ Block, … ] }
```

The route of a section is `#/l/7/read` (`write`, `speak`, `listen`). Each heading block with an `id` becomes an entry of
the section's mini table of contents.

## Blocks

Every block is an object with a type `t`. Optional on any block: `page` (the book page where it starts — shown as a
small page marker, used by reviewers), `id` (anchor, unique in the lesson).

### Structure

```js
{ t: "head", text: Text, style: "band" | "num" | "step" | "sq" | "label" | "plain", tag: "1-1", icon, audio, id }
//   band  — the hatched band of 読み物1 / 会話1 / 聴解1 (tag "読み物1", icon read|write|speak|listen)
//   num   — 1 モデル作文 / 2 タスク (tag "1")          step — 1-1 やってみよう (tag "1-1")
//   sq    — ■ 段落構成                                  label — 読む前に / 読んだ後で / リスニング / ディスカッション
//   plain — any other heading (text only)
{ t: "p", text: Text, style: "indent" | "small" | "right" | "center" | "note" }
{ t: "list", mark: "・" | "•" | "▸" | "➤" | "※", items: [ Text | { text: Text, blocks: [Block] } ] }
{ t: "qs", items: [ { n: "1.", text: Text, words: ["友達", …], blocks: [Block], answer: Text } ] }
//   numbered questions / tasks: n as printed ("1." "(1)" "①" "1）"); words = the [ … ] word box under a question;
//   answer = the book's printed answer (聴解 解答) — shown behind a 解答 button
{ t: "box", style: "gray" | "blue" | "frame" | "attention" | "task" | "strategy" | "challenge", title: Text, icon, ref, blocks: [Block] }
//   attention — 💡ここにも注目      task — ✎ box (title, ref "（読み物2：行13〜15）")      strategy — ストラテジー box
{ t: "table", head: [[Cell]], rows: [[Cell]], cols: ["auto", "1fr"] }   // Cell = Text | { text, colspan, rowspan, style }
{ t: "words", items: [ { ja: "{悩|なや}む", en: "to worry" } ] }          // 単語 box
{ t: "figure", desc: "…", labels: ["満足度", "時間"] }  // an illustration / graph that matters: desc = our English description,
                                                         // labels = the Japanese printed in it (verbatim)
{ t: "chart", title: Text, kind: "bar" | "line" | "pie" | "table", unit, head: [...], rows: [[...]], note }
//   a graph whose values are printed: its data as a table, every printed label and value verbatim
{ t: "hr" }
```

### Reading texts (読み物, モデル作文, strategy examples, texts in brush-up)

```js
{ t: "reading", n: 1, title: "日本人学生の留学体験記", audio: "1.Yomimono_L7-1", page: 4, vertical: false, numbers: true,
  lines: [
    "#文化・慣習の壁の厚さ@{岡田|おかだ} {守弘|もりひろ}",   // line 1: title (#) with the byline (@) on the same line
    "¶楽しいことと{辛|つら}いことがたくさん{詰|つ}まった、人生一濃い九か月間は、僕の人",
    "生の選択肢と可能性を大きく広げてくれました。",
    5,                                                  // a number = book page 5 starts here (not a line)
    "¶他にも、…",
  ],
  credit: ["監修・丹羽健夫／編・名古屋外国語大学留学体験記編集委員会", "『星の王子・王女たちの留学物語 2』中日新聞社（一部改）"],
  titleTr: "…", tr: ["paragraph 1 in English", "paragraph 2 …"],   // tr: one entry per ¶ paragraph
  roles: [ { from: 3, to: 6, label: "❶ {序論|じょろん}" }, { from: 7, to: 13, label: "❷ 本論（1）", sub: "大変だった経験" } ] }
```

- `lines`: **one string per printed line** (one column in 縦書き), in order, so the line numbers are the book's. Every
  printed line counts, including title and byline lines (the book numbers them). Prefixes: `¶` first line of a
  paragraph (don't type the indent space), `#` title line (`#=` centred title), `@` byline (right-aligned; may follow a title on the same line),
  `=` centred line, no prefix = continuation. A word split across two lines is split in the data the same way.
- `numbers: false` for texts printed without line numbers (strategy examples).
- `vertical: true` for 縦書き texts (rendered vertically on wide screens, horizontally on phones).
- `roles`: the bracketed paragraph labels beside a model composition (line ranges as printed).
- `start`: the first line number when a text continues another's numbering (a line-numbered プロフィール box:
  `{ t: "reading", style: "profile", start: 48, … }`). `style: "profile"` | `"interview"` | `"poem"` | `"article"`.
- A figure, chart or table printed **between paragraphs** of a text (図1 … in L10) goes into `lines` as an object
  `{ fig: Block }` at its place; it is not a line and doesn't count.
- Interviews: the interviewer's question lines are bold as printed (`"¶**──…**"`).

### Dialogues

```js
{ t: "dialogue", title: "前から思っていたけど", style: "casual" | "formal", styleLabel: "フォーマルなディスカッション", setting: Text, audio: "3.Kaiwa_L7-1",
  lines: [ { sp: "メ", v: "f", ja: "❶あのさあ、サラ……。", tr: "…" }, { sp: "サ", v: "f", ja: "何？", tr: "…" } ] }
```

`sp` exactly as printed (`メ`, `サラ`, `社員`, `A`, `あなた`); `v: "m" | "f"` the speaker's voice for speech synthesis
(from the character; ask if unsure). A line without `sp` is narration / a stage direction ("〈カフェで〉").
Example sentences in the form "A：… / B：…" are `examples` items with `lines`.

### 話す: role cards, flowchart, fill-in bubbles

```js
{ t: "roles", style: "casual" | "formal", cards: [ { tag: "A", who: "あなた", text: Text }, { tag: "B", who: "Aの友達", text: Text } ] }
{ t: "flow", head: [Text, Text], steps: [ { side: "a", n: 1, label: "話しかける", text: "あのさあ、〇〇さん……。" }, { side: "b", text: "何？" } ] }
//   more than two roles: side "a" = lead, "b" = the others; who / act on each role's first step (name and action as printed);
//   phase: { ja, tr } on the first step of a bracketed group of steps (the bracket label beside the chart)
{ t: "bubbles", from: "モデル会話", items: [ { label: "① 実は嫌だと思っているということを伝える時",
    text: "親しくしてくれているのがわかるから、＿＿けど、\n実は私、＿＿。", answer: ["気持ちはうれしいんだ", "ボディータッチがちょっと苦手で……"] } ] }
//   answer: the words of the book's own モデル会話 that fill the blanks (from names where they come from)
```

### Grammar notes (文型・表現ノート)

```js
{ t: "note", no: 1, star: true, pattern: "〜つつある", gloss: "to be in the process of doing", ref: "読み物1-行13", page: 9,
  blocks: [
    { t: "key", items: [ { ja: "長い間{不景気|ふけいき}だったが、最近は景気が少しずつよくなり**つつある**。",
                           en: "Although the economy has been in a recession for a long time, it has been gradually recovering recently." } ] },
    { t: "examples", items: [ { n: 1, ja: "政治に興味を持つ若者が{次第|しだい}に増え**つつある**ようだ。", tr: "…" },
                              { n: 3, lines: [ { sp: "A", ja: "…", tr: "…" }, { sp: "B", ja: "…", tr: "…" } ] } ] },
    { t: "conn", forms: ["V~~ます~~ !!つつある!!"], blocks: [
        { t: "list", mark: "•", items: [ { en: "~つつある is used with verbs that denote a change, …" }, … ] },
        { t: "examples", style: "rei", items: [ { mark: "×", ja: "今、図書館で勉強し__つつある__。" },
                                                { mark: "○", ja: "今、図書館で勉強し__ている__。", en: "I am studying at the library right now." } ] } ] },
  ] }
```

- `deepDive` (after `blocks`): **our** English deep-dive on the note (docs/ENGLISH.md: 60–130 words; nuance, register and
  contrasts the book's explanation leaves implicit), rendered closed under the note like the TRY books' deep-dives.
  The note's counterparts in TRY! N2 / N1 are listed in data/links.js (他の本).
- `star`: the ★ badge (items practised in the workbook, marked in the book). `ref`: the bracketed source
  "読み物1-行13" as printed. `pattern` / `gloss` exactly as printed (gloss without the ⟨ ⟩).
- A note with sub-patterns (4. 〜こそ → ① Nこそ Y, ② XからこそY): `{ t: "sub", n: 1, pattern: "Nこそ Y", gloss: "it is N that Y" }`
  blocks followed by that sub-pattern's key / examples / conn. Example numbers continue as printed.
- `key`: the blue box (one sentence, or dialogue lines with `sp`), with the book's English in `en`.
- `examples` (the boxed ① ② …): `n` as printed; items may carry `sp` or `lines`; `tr` required. `style: "rei"` = 例） lines
  with `mark` ○ × △; `en` only where the book prints a translation.
- `conn`: the connection box. `forms`: one entry per formula — a string, or a bracket stack
  `{ stack: ["Vる", "Vた", "Nの"], join: "!!際（に）!!" }`; stack lines may start with `＊`. Its `blocks` are the English
  bullets and 例） lines printed in the box.

### Reading strategies (読みのストラテジー)

```js
{ t: "strategy", no: 11, title: "{省略|しょうりゃく}された言葉", en: "Word omission in sentences", page: 8, blocks: [Block] }
```

### Listening (聞く) and the answer key

The questions are ordinary blocks (`qs`, `tf`, `choice`) with the answers of the book's 解答 (pp.238–245); the script is
a `script` block at the end of the 聴解 it belongs to:

```js
{ t: "tf", items: [ { n: "①", text: "多文化共生社会には、大切なことが3つある。", tr: "…", answer: "○" } ] }
{ t: "choice", items: [ { n: "", text: Text, options: ["❶", "❷", "❸", "❹", "❺"], answer: 2 } ] }   // answer = index
{ t: "script", audio: "4.Chokai_L7-1", page: 238, key: ["③"], intro: Text,
  lines: [ { sp: "", v: "f", ja: "カルチャーショックは、…", tr: "…" } ] }
//   key = the ■解答 box exactly as printed, one string per printed line; intro = the boxed situation text
```

### Other exercises

```js
{ t: "match", leftLabels: ["a", "b", "c"], left: [Text…], rightLabels: ["①", "②", "③"], right: [Text…], answer: [1, 2, 0] }
//   線で結びなさい: answer[i] = index into right of the match for left[i] (from the book's answer key)
{ t: "table", … }   // fill-in / memo tables: empty cells are "" ; printed blanks ①（　） as printed
```

Comparison sub-notes inside a grammar note (☛ むしろ and かえって): a `head` (`style: "sq"`) followed by the note's
blocks; choice brackets printed in examples stay literal: `｛○かえって／×むしろ｝`.

### Writing (書く)

`reading` (the モデル作文 with `roles`), `table` (段落構成), `head`/`qs`/`examples` (書くポイント), and
`{ t: "compose", min: 550, max: 650 }` after 書いてみよう: a web-only writing area with a character counter (saved in
the browser).

## Vocab (`vocabNN.js`)

```js
TRY.registerVocab({ lesson: 7, lists: [
  { sec: "読み物1", title: "日本人学生の留学体験記", page: 2,          // 別冊 page where the list starts
    rows: [ { n: 1, k: "◇", ln: 1, w: "__壁__", yomi: "かべ", en: "wall; barrier" },
            { k: "◇", w: "__厚__さ", yomi: "あつさ", en: "thickness" }, … ],
    targets: { audio: "5.Tango_L7-1", page: 3, items: [ { n: 1, w: "壁", ex: "外国で生活すると、文化の壁を感じることがある。", tr: "…" } ] } },
  …
] });
```

`n` = the number printed in the first column (the 覚える単語 number; only on those rows), `k` = ◆ / ◇ as printed, `ln` =
the line number where printed (the book prints it only when it changes), `w` = the word with the new kanji underlined
as printed (`__…__`), `yomi` / `en` as printed. Targets (覚える単語と例文): `w` and `ex` as printed (furigana too),
`tr` ours.

## Kanji (`kanjiNN.js`)

```js
TRY.registerKanji({ lesson: 7, page: 33, kanji: [
  { no: 348, k: "似", sec: "読み物2", hl: true, meaning: "resemble", on: ["ジ"], kun: ["に"], strokes: 7,
    words: [ { m: "", w: "類似", yomi: "るいじ", en: "similarity; resemblance" }, { m: "◆", w: "似る", yomi: "にる", en: "to resemble" } ] },
] });
```

`sec` = the section tab where a new group starts (on every kanji of the group), `hl` = the kanji printed on the grey
tile, `m` = ◆ / ◇ before a word. Stroke-order diagrams are not reproduced (only the stroke count).

## Units (`challenge.js`)

```js
TRY.registerUnits([
  { id: "c1", kind: "challenge", no: 1, title: "{視点|してん}", en: "Viewpoint", lesson: 7, page: 200, blocks: [Block] },
  { id: "k13", kind: "kanji", no: 13, title: "{部首|ぶしゅ}「さんずい（氵）」", lesson: 7, page: 226, blocks: [Block] },
]);
```

## Front matter (`front.js`)

`TRY.registerFront([ { id: "hajimeni", title: Text, page: 3, blocks: [Block] }, … ])` — the same blocks.
