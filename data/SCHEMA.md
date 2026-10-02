# TRY data schema (N2, N1)

`data/n2/` (TRY! N2) and `data/n1/` (TRY! N1, Chinese edition) share this schema; the Quartet books use
`data/Q2-SCHEMA.md`. Files are edited directly (no build step): `book.js` → `TRY.registerBook`, `chNN.js` →
`TRY.registerChapter` (one per chapter), `compare.js` → `TRY.registerCompare([...])` (similar-pattern groups),
`front.js` → `TRY.registerFront([...])`, `vocab/chNN.js` → `TRY.registerVocab` ("Vocabulary").

## Books

`TRY.registerBook({ id, level, chapters, bookLang, notesFirst, bookTitle, credit, footer })`; `chapters` = how many
chNN.js files to load. `bookLang` is the language of the translations the book prints:

- `"en"` (N2): the English of usage, ＊ formNotes, 📎 notes, ＋Plus usage, can-do, chapter genre/title and front matter
  is the book's and must be verbatim. Where the book prints none for such a field, ours goes in with `gen: true` on the
  object (`usage: { ja, en, gen: true }`). All other `en` is ours.
- `"ja"` (N1): the Chinese is not reproduced (no `zh` fields; `tools/check.js` fails on one); every `en` is ours.
  N1 page map and conventions: `docs/N1-TRANSCRIPTION.md`.

`notesFirst: true` (N1): 📎 notes print before やってみよう (N2 prints them after); a point printed the other way sets
`notesFirst` on the point.

## Inline markup

Usable in any Japanese or English string; rendered by `fmt()` (markup.js).

| Markup | Renders as |
|---|---|
| `{漢字\|かんじ}` | furigana; okurigana outside: `{届\|とど}ける`, not `{届ける\|とどける}`; the base is never kana |
| `**text**` | target grammar (bold, accent) |
| `__text__` | underline (a phrase a question refers to) |
| `[N]` `[V-る]` `[V-ない]` `[いA]` `[なA]` `[Pl]` `[Po]` `[N₁]` `[文]` `[数]` | part-of-speech badge (`[文]` sentence, `[数]` number) |
| `~~x~~` inside a badge | struck ending: `[V-~~ます~~]`, `[いA~~い~~]`, `[N~~だ~~]` |
| `＿＿`, `（　）` | blank in a question |
| `\n` | line break |

## Transcription rules

Everything the book prints (Japanese, furigana, the N2 book's English, answers) is copied from the scan exactly
(source of truth: CLAUDE.md). Answers and listening scripts come from the 別冊 (N2: PDF pp.233–252, supplement page N =
PDF 232 + N; N1: `docs/N1-TRANSCRIPTION.md`), never from our judgement.

- Furigana: exactly the readings the book prints, on exactly those kanji. Our own Japanese (vocab examples) gets
  readings on words at about N3 level and above and on unusual readings.
- Characters: full-width Japanese punctuation as printed; `〜` as in the patterns; `……` stays `……`; digits are ASCII
  (1週間, 20%, 1,000円) even where the scan's glyph is full-width (the vertical renderer sets 1–2 digits upright);
  letters such as ＡＢＫ as printed.
- Illustrations are not reproduced; if an exercise needs one, describe it in `prompt.en`.
- The chain-link mark after an example → `idiom: true` (not a 📎 note). A ※ footnote under an example (N1) →
  `foot: "※…"` (small, right-aligned, not spoken).
- English: book English verbatim (see "Books"); our English follows `docs/ENGLISH.md`.

## Chapter

```js
TRY.registerChapter({
  id: 1,
  genre: { ja: "お{知|し}らせを{読|よ}む", en: "Reading an Announcement" },
  title: { ja: "スタッフ{募集|ぼしゅう}のお{知|し}らせ", en: "A Job Ad" },   // without the part label
  canDo: [ { ja, en } ],                  // the first part's できること box
  parts: [ Part, … ],                     // one, or one per printed (1)/(2)/(3)
  review: [ ReviewSection, … ]            // まとめの問題
});
```

### Part

```js
{
  label: "(1)",                           // "" when the chapter isn't split
  canDo: [ { ja, en } ],                  // the part's own できること box (later parts)
  sample: {                               // 見本文
    kind: "notice" | "speech" | "dialogue" | "essay" | "article" | "story" | "news" | "explanation" | "editorial",
    heading: "…",                         // headline (notices, articles, editorials)
    lines: [ { sp: "田中", v: "m", ja: "…", en: "…" } ]   // one sentence per line; sp/v for dialogue (v = TTS voice m|f)
  },
  points: [ GrammarPoint, … ],
  check: Exercise | [ Exercise, … ]       // Check: one exercise per word bank
}
```

Layout-only fields (ignored by `tools/text-snapshot.js`; rendering in `docs/LAYOUT.md` C6):

| Field | Meaning |
|---|---|
| `sample.vertical: true` | printed in 縦書き (vertical at ≥901 or when the reader picks 縦) |
| `sample.rings: false` | the frame has no binder-ring holes (`article` never has them) |
| `line.cont: true` | continues the previous line's paragraph |
| `line.style` | overrides the heuristics: `lead` / `center`, `right`, `cont`, `contact` (notice); `credit`, `sep`, `note` (small ※ line) |

Without `style`, the notice, credit (`（文：…）`) and separator (a line of only 〜) heuristics in LAYOUT.md C6a–C6b
apply. A vertical `dialogue` (N1 ch5) heads each column with the speaker; lines without `sp` are stage directions.

### GrammarPoint

```js
{
  no: 1,                                  // book-wide number
  pattern: "〜につき",                     // canonical form (the book's 文型索引 form)
  phrase: "オープン**につき**",            // the heading as printed, target in **…**
  stars: 2,                               // 1–3 as printed
  marks: ["formal"],                      // scene icons printed: casual, formal, polite, regret, praise
  usage: { ja, en },                      // どう使う？
  forms: [ "[N] + につき" ],               // connection lines, one per printed line
  formNotes: [ { ja: "＊…", en } ],        // ＊ lines under the connection (keep the ＊)
  examples: [ { ja, en, idiom, foot, nonum } ],
  notes: [ { ja, en, stars, examples, practice, xref } ],   // 📎 clip notes
  plus: [ { pattern, stars, marks, usage, forms, formNotes, examples, notes, practice, xref } ],   // ＋Plus
  xref: "☞ p.223　〜つつ",                 // the book's ☞ line, verbatim; also on an exercise printed before a Plus box
  see: [ 3, 104 ],                        // related point numbers (other books: data/links.js)
  index: [ "Nにつき" ],                    // extra searchable forms
  deepDive: "…",                          // ours, required; \n\n paragraphs, "- " bullets (docs/ENGLISH.md)
  practice: [ Exercise, … ],              // やってみよう！
  notesFirst: false                       // only when the point prints notes/practice in the other order than book.js
}
```

Connection brackets are encoded as printed: `"［[なA]（だ）　[N]（だ）］"`; follow the existing `chNN.js` files for
stacked alternatives (rendering: LAYOUT.md C10).

### Exercises

`en` is our translation (the sentence with the correct answer filled in); `why: { en }` is shown after grading.
`prompt: { ja, en }` holds the printed instruction. `labels: "abc" | "ab" | "123" | "ABC"` sets option labels as
printed (default: numbers for 4+ options, else letters). `layout: "list"` (on a choice or listening exercise, or one
item): the options printed one per line under the sentence, the （　） left in it (N2 p.31), instead of inline a./b. in
the parentheses or the fitted 4 / 2 / 1 grid; `layout: "grid"` on a listening item overrides the one-per-line pair.

```js
{ type: "choice", prompt, items: [ { q: "…（　）…", options: ["…", …], answer: 1, en, why } ] }
{ q: "…（ a ）…（ b ）…", parts: [ { tag: "a", options, answer }, { tag: "b", options, answer } ] }  // several blanks
{ type: "match", prompt, left: ["…"], right: ["…"], answer: [3, 0, 1, 2], en: ["…"] }   // answer[i] = right index for left[i]
{ type: "fill", prompt, bank: ["に限り", "を問わず"], items: [ { q: "…＿＿…", answer: "を問わず", en } ] }
{ q: "A：…＿＿…\nB：…＿＿…", answer: ["わけ", "はず"] }             // several ＿＿; "やら・やら" fills paired blanks
{ type: "write", prompt, items: [ { q: "…＿＿…", answer: ["祖父母"] } ] }   // accepted strings; optional bank (shown static)
{ type: "order", prompt, items: [ { before, after, pieces: [4 pieces], order: [0, 2, 3, 1], star: 2, en } ] }
{ type: "passage", prompt, title, text: ["…[1]…"], en: ["…"], blanks: [ { options, answer, why } ] }
{ type: "reading", prompt, title, text: ["…"], en: ["…"], items: [ { q, options, optionsEn, answer, en, why } ] }
{ type: "listening", mode, prompt, items: [
  { question, questionEn, script: [ { sp: "女", v: "f", ja } ], en: ["…"], options, optionsEn, answer, why, replyV } ] }
```

- `order`: `order` = piece indices in the correct sequence (pieces not already in order); `star` = the ★ slot (0–3).
- `passage`: blanks `[1]`, `[2]` … in `text`.
- Listening `mode` (from the book's instruction): `task` — question before and after the talk; `summary` — question
  only after, not printed, options printed; `gist` (概要理解) — nothing printed, question then options spoken after
  the talk, bare numeral buttons; `response` (即時応答) — one line, three spoken replies. `question` is required except
  for `response` and never goes in the script as a 質問 line. `replyV: "m"|"f"` sets the voice of spoken replies /
  options (default: opposite of the first speaker). An item without `script` reuses the previous item's.
- `optionsEn`: our translations of printed options, required on `reading` and `task` / `summary` items (length =
  options). For `gist`, `en` = script lines, then options.

### ReviewSection

```js
{ title: { ja: "問題1 〈{文法形式|ぶんぽうけいしき}の{判断|はんだん}〉", en: "Question 1: Grammar form" }, ex: Exercise }
```

Book structure: 問題1 文法形式の判断 (choice) · 問題2 文の組み立て (order) · 問題3 文章の文法 (passage) or 読解
(reading) · 問題4 聴解 (listening). A title repeating the previous 問題N is rendered as its sub-part.

## Vocabulary

`data/<book>/vocab/chNN.js`: our list of the N2/N1-level words each chapter's texts use; not book content, all English
generated. A word is listed once per book, in the first chapter that uses it. Check: `node tools/vocab-check.js <book>`.

```js
TRY.registerVocab({ ch: 1, words: [
  { w: "{募集|ぼしゅう}",                  // dictionary form; ruby gives the reading (kana words plain)
    lv: "N2",                             // "N2" | "N1"
    pos: "noun · する verb",
    en: "recruitment; a call for applicants or entries",   // senses that matter, most common first
    note: "…",                            // optional: register, collocations, look-alikes
    rx: ["ぼしゅ", "ぼうしゅう", "ほしゅう"],   // kanji words: 3 wrong readings, not homophones of the right one
    book: { ja: "…**{募集|ぼしゅう}**…", en: "…", at: "gp/2", src: "book" },
    ex: [ { ja: "…**{募集|ぼしゅう}**…", en: "…", alt: ["{応募|おうぼ}", "…", "…"] }, { ja, en } ] }
] });
```

- `book`: a sentence from the chapter, verbatim from the data, with the word in `**…**` (the chapter's own `**` dropped);
  `at` = `gp/N`, `ch/N` or `ch/N/review`. A line whose English the book prints keeps it and adds `src: "book"`.
- `ex`: 1–2 sentences of ours with the word in `**…**`; `ex[0].alt` = 3 wrong words in the same form (context quiz).
