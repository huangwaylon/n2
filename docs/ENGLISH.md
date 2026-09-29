# Generated English — style guide

Rules for every English string we write (translations, `why`, `deepDive`, compare notes, vocab notes, `tr` in
Quartet II). The book's own English (N2 `en` on usage, ＋Plus usage, 📎 notes, ＊ formNotes, can-do, titles; Quartet
`en`) is copied verbatim and never edited; see CLAUDE.md "English: book vs generated".

## Translations

- Accurate first: the English says what the Japanese says — no added facts, no dropped clauses, same speaker
  attitude (regret, praise, criticism, politeness) and the same certainty (〜らしい, 〜だろう, 〜かねない).
- Natural American English (color, realize, canceled, apartment). Not a gloss: 〜わけにはいかない is *can't very well*,
  not *there is no reason to go*.
- Show the grammar being taught where English allows it, without breaking English: a sentence built on 〜ものの
  should read *although…*, one built on 〜つつある *is increasingly / is gradually*.
- Consistent with the answer key: an exercise's translation is the sentence with the correct answer filled in.
- Keigo: render the register (*we would be grateful if…*, *may I…*), not a word-for-word humble form.
- Names: TRY books drop さん (田中さん → Tanaka; Mr./Ms. only for 氏 or where English needs a title). Quartet II keeps
  the book's own convention (its printed English writes Yamada-san), so its `tr` does too.

## deepDive (TRY books) and note deep-dives (Quartet II)

A supplement to the book's explanation, for an English speaker. It must add what the book leaves implicit, not
repeat it. Target **100–200 words** (Quartet II notes: 60–130), in this order, skipping what doesn't apply:

1. Core meaning and nuance in one or two sentences — the speaker's attitude, what the pattern implies that a plain
   English gloss misses.
2. Connection and constraints that trip learners up (what can't precede or follow, register: written / spoken /
   formal / literary).
3. Contrast with the one to three closest patterns, each with a short example — within the book as `#N` (checked by
   `tools/xref.js`), in the other books by pattern name (the links themselves are in `data/links.js`).
4. At most one pitfall and one JLPT cue, a sentence each.

Examples in a deep-dive are short, natural and correct; each gets an italic translation (`*…*`). No filler (“It is
important to note”, “Basically”), no restating the heading, no lists of ten collocations — two or three are enough.

## why (exercise explanations)

One or two sentences: why the answer fits (the cue in the sentence) and, for multiple choice, why each tempting
distractor fails. Refer to points as `#N`.

## Cross-book links (`data/links.js`)

Groups of the same or closely related pattern in N2, N1 and Quartet II, shown under each point as 他の本 Other books.
Each entry names the point by book, number and the pattern as printed; `node tools/links.js` checks them.
