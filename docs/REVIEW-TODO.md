# Site-wide review (2026-09-30) — tracker

Third independent pass over all four books. Removed when every item is done; open items then move to
`docs/LAYOUT.md` §6.

## Round 1 — content (Japanese vs the scan, generated English quality)

- [ ] N2 ch1–7 (PDF pp.18–~120 and their 別冊 answers/scripts)
- [ ] N2 ch8–11 (first agent overflowed after pronoun fixes in ch8–10; restarted)
- [ ] N2 ch12–14 (first agent overflowed after pronoun fixes in ch12–13; restarted)
- [x] N1 ch1–5
- [x] N1 ch6–8
- [ ] N1 ch9–10, front.js (first agent overflowed; restarted)
- [x] Q1 lessons 1–6, 初級文法チェック, 漢字チャレンジ, 別冊 lists (English only; Japanese matched)
- [x] Q2 lessons 7–12, ブラッシュアップ, 別冊 lists (all 縦書き pages on the scan; one byline space)

## Round 2 — cross-cutting

- [ ] Cross-book links (data/links.js) and deep-dive contrasts: related points across chapters and books
- [ ] Compare pages, guide, home, about (UI English)
- [ ] Layout at 320 / 390 / 820 (iPad) / 1280, light and dark, with and without EN, furigana probe
- [ ] Performance (tools/perf.mjs at 4× CPU, slow network) and code/docs organisation

## Findings

- Main English defect across all books: invented he/she for people the Japanese leaves unspecified (社長, 上司,
  先輩, 〜さん …). Fixed per chapter; rule added to docs/ENGLISH.md.
- Book prints, kept as printed: N1 p.16 樽開け/樽明け, p.60 言わる; Q1 p.129 インターシップ; Q2 p.056 見つりました,
  p.093 使っちゃたし.
- Open: Q2 p.168 (PDF 195) profile after L12 読み物2 has a printed "100" beside it — `numbers: false` now; L9/L11
  profiles continue the numbering. Decide from the scan.
- Closed: deep-dive references to numbered examples follow each book's printed marker (Q1 boxed numbers → "(example
  N)", Q2 ①② → "(②)").
- Link suggestions (round 2): q2 10-10 たところ ↔ N1 たところで; q2 12-4 分（だけ） ↔ N1 だけに / N2 だけあって;
  q2 9-7 ということは ↔ N2 というものだ; q2 7-5 むしろ ↔ q2 8-7 かえって; Q1 L6-6 まま ↔ N2 #37 きり; Q1 L4-5
  たばかり ↔ N2 #79 たて; Q1 L3-10 のに ↔ N2 #14 上で; N1 #20 しまつだ, #29 わ〜わ, #47 のをいいことに, #53 NがNだけに
  unlinked. Q2 notes without a link: 8-7, 8-10, 9-2, 9-5, 9-7, 10-1, 10-3, 10-4, 10-5, 10-8, 10-10, 11-4, 11-11, 12-4.
- Layout: Q2 L7-6 formula clipped 70px at 320 (fixed, b88670d). Tools: headless Chrome orphans and sandboxed
  launches (cdp.mjs kills its Chrome on exit and reports Chrome's stderr).
- Performance: chapter render at 4× CPU is dominated by the first layout of a ~4 900-node DOM (fitOptionCols is only
  where it is forced; batching its reads and writes changed nothing).
