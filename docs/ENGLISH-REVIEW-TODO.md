# Generated-English review (2026-10) — brief and todo

Removed when done. One agent per unit; ≤ 6 at a time.

## Brief (every agent)

Review all generated English in the unit as a professional Japanese→English translator and a linguist teaching
Japanese to native English speakers. Judge the text as it stands, independently of git history. Read CLAUDE.md,
docs/ENGLISH.md and the relevant schema (data/SCHEMA.md or data/Q2-SCHEMA.md) first.

Scope (generated English only — the N2 book's own English and Quartet book `en` are verbatim and protected):
- Example-sentence translations (`examples[].en`, notes' examples, ＋Plus examples), sample/reading text `en`,
  dialogue lines, exercise `en`, `optionsEn`, `questionEn`, listening script `en`, Quartet `tr`.
- `deepDive`, `why`, compare notes, generated `usage`/notes (`gen: true`, and all N1 English).

For each translation:
- Accurate: says exactly what the Japanese says, no added or dropped content, same subject/object, tense, certainty,
  speaker attitude (regret, criticism, surprise, politeness, irony). Check who does what to whom.
- Captures the nuance of the grammar point being taught, so a learner can see what the pattern contributes
  (〜ものの → *although…*, 〜わけにはいかない → *can't very well*, 〜ざるを得ない → *have no choice but to*).
- Natural American English a native speaker would write; no translationese, no stiff glosses, no over-literal word
  order. Register matches (casual speech casual, formal notice formal).
- Exercises: the translation is the sentence with the correct answer filled in.

For deepDive / why / explanations: every claim must be correct; weaken or remove anything you can't confirm.
Clear and easy for an English speaker; examples natural and correctly translated; `#N` refs valid. Keep the
style guide's length and order. `why` must name the cue and why tempting distractors fail.

Rewrite every string that is wrong, unnatural, or misses the nuance; leave good strings alone. Never edit Japanese
or book English. When the Japanese meaning or context is unclear, read the scan (≤ 8 page images; OCR in
tools/<book>/ocr/ for grep; page maps in CLAUDE.md / docs/*-TRANSCRIPTION.md).

Validate (CLAUDE.md "Validation"; at least check.js / q2 check+verify, text-snapshot diff must be empty, xref,
vocab-check, render-smoke). Commit only your files (`git add <paths>`), message "<BOOK> <unit> English: …",
then `git fetch origin && git rebase --autostash origin/main && git push`. Commit at least every ~half of the unit.

Vocab lists quote chapter sentences in `book.en` (data/<book>/vocab/chNN.js): when you change a quoted
translation, update the matching `book.en` there too (vocab-check fails otherwise); git add both files. Errors
vocab-check reports for other chapters belong to other agents — ignore them. Never use `git stash`, `git checkout
-- <file>` or `git reset` (other agents' uncommitted work lives in the same tree); rebase with `--autostash` only.

Report: counts (strings reviewed / changed), the 5–10 most significant fixes (mistranslations, wrong claims),
anything left unresolved.

## Second pass (N2, N1): critical cross-review

A first agent has already reviewed the unit. Review it again as a stricter second reader: a professional
Japanese→English literary translator checking a colleague's work, and a Japanese linguist checking every claim.
Assume errors remain. For each example sentence ask: would a careful bilingual reader sign off on this as both exact
and idiomatic? Does the English make the taught pattern's contribution visible (contrast, concession, emphasis,
regret, inevitability, hearsay…) without over- or under-translating it? Is the register right? Compare the examples of
one point with each other — they should show the range the book intends, not flatten into one gloss. For deepDive /
why: test each claim against your own knowledge and the book's examples; any ✗ example must be ungrammatical (not just
odd) or marked "?"; each contrast must be correct; remove what you can't defend. Same rules, validation and commit
procedure as the brief above.

## Units

N2 chapters: ch01 ch02 ch03 ch04 ch05 ch06 ch07 ch08 ch09 ch10 ch11 ch12 ch13 ch14 · compare
N1 chapters: ch01 ch02 ch03 ch04 ch05 ch06 ch07 ch08 ch09 ch10 · compare
Q1: l01 l02 l03 l04 l05 l06 · challenge · Q2: l07 l08 l09 l10 l11 l12 · challenge
Vocab examples: N2 vocab/ch01–14, N1 vocab/ch01–10, Quartet vocabNN (after the chapters)

Done: N2 ch01–ch12 ch14 · N1 ch01–ch09
In progress: N2 ch13 · N1 ch10 · Q1 l01–l04
Cleanup at the end: `see` refs the deepDive never discusses (N1 #15 → #120, N2 #103 → #39); N1 #37 ③ 言わる is the
book's own typo (p.60) — keep
