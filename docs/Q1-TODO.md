# Quartet I — work tracker

Working checklist for adding Quartet I (`Quartet1.pdf`, not in git) and the site-wide review started 2026-09-29.
Page map and conventions: `docs/Q1-TRANSCRIPTION.md`. Remove this file when every box is ticked.

## 0. Site-wide review (N2, N1, Q2)

- [x] Cross-book links: 76 groups / 182 links, 10 `see:` contrasts, N1 #23 xref cue (b63be1b, 9dd57d0)
- [x] English QA: Q2 vocab 07/08/11/12, N2/N1 vocab sample, UI text, exercise/script/まとめ sample, deep-dive sample
- [ ] Layout sweep all routes × 320/390/820/1024/1280/1440, light/dark, iOS simulator (agent running)
- [ ] Performance: measure + optimize load/route changes (agent running; first commit cb7d400)

## 1. Setup

- [x] `.gitignore` Quartet1.pdf (cece29b)
- [x] `tools/zoom.sh q1` (f34a5e6)
- [x] OCR of all 352 pages → `tools/q1/ocr/` (e31aee0)
- [x] Survey: book = PDF − 26, 別冊 = PDF − 288, lessons 1–6, 初級文法チェック ①–⑦, 漢字チャレンジ ①–⑫
- [ ] Infrastructure (agent running): `q1/index.html`, `data/q1/book.js`, BOOKS entry, renderer book-agnostic
      (titles, `q1:` link ids, unit kind "grammar", ①–⑫), pink accent tokens, tools take q1|q2,
      `docs/Q1-TRANSCRIPTION.md`, CLAUDE.md, Q2-SCHEMA note

## 2. Transcription → review (workflow q1-transcribe; fragments in /tmp/q1parts)

Each chunk: transcribed by one agent, reviewed line by line against the scan by another.

| Chunk | PDF pages | Transcribed | Reviewed | Merged + validated | Committed |
|---|---|---|---|---|---|
| L1 read / notes / write+会話1 / 会話2+聞く | 27–56, 268 | [ ] | [ ] | [ ] | [ ] |
| L2 | 57–92, 269 | [ ] | [ ] | [ ] | [ ] |
| L3 | 93–124, 270–271 | [ ] | [ ] | [ ] | [ ] |
| L4 | 125–158, 271–272 | [ ] | [ ] | [ ] | [ ] |
| L5 | 159–194, 272–273 | [ ] | [ ] | [ ] | [ ] |
| L6 | 195–230, 273–274 | [ ] | [ ] | [ ] | [ ] |
| 初級文法チェック ①–⑦ | 231–255 | [ ] | [ ] | [ ] | [ ] |
| 漢字チャレンジ ①–⑫ | 256–267 | [ ] | [ ] | [ ] | [ ] |
| Front matter | 9, 14–26 | [ ] | [ ] | [ ] | [ ] |
| 別冊 単語リスト L1–6 | 289–314 | [ ] | [ ] | [ ] | [ ] |
| 別冊 漢字リスト L1–6 + チャレンジ | 315–351 | [ ] | [ ] | [ ] | [ ] |

## 3. After merge

- [ ] `node tools/q2/check.js q1`, `verify.js` (vs さくいん PDF 275–284), `ocr-diff.js` per file; fix < 0.85 on the scan
- [ ] `tools/q1/text-baseline.txt` generated from the verified data
- [ ] Deep-dives on every 文型・表現ノート (nuance, register, contrasts; as Q2 L7–12)
- [ ] Cross-book links: Q1 notes into `data/links.js` (Q2, N2, N1), `see:`-style relations
- [ ] Second English pass per lesson (translations of readings, dialogues, scripts, exercises vs answers)
- [ ] Layout: `overflow.mjs` + screenshots for q1 routes at 320/390/820/1280, light/dark, `--en`, `--furi`
- [ ] Performance: `tools/perf.mjs` on q1 routes
- [ ] Docs final: CLAUDE.md, Q1-TRANSCRIPTION.md, README; remove this file
