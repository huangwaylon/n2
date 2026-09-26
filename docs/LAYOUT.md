# Layout: how the site mirrors the book

The site sets two JLPT grammar books (TRY! N2 and N1) the way they are printed, on phones, tablets and desktop. This document is the design reference: what the book looks like, the tokens and type scale, each component (C1–C31) with its book source, markup and responsive behaviour, and the rules and tools that keep the layout correct.

Page references (p.19 …) are **N2 PDF page numbers**, which are also the printed page numbers. Data fields are documented in `data/SCHEMA.md`.

**Where things live**

| Concern | File |
|---|---|
| Data registry, theme before first paint | `assets/js/boot.js` (classic script) |
| Book meta, settings, progress, `$`/`$$`/`esc`, `ACT` action registry, `TTS` | `assets/js/core.js` |
| Furigana: `rubyMarkup()`, `rubyHtml()`, `fitRubies()` | `assets/js/ruby.js` |
| Inline markup `fmt()`, badges, English layer (`en`, `bi`, `biInner`, `enScopeBtn`), `pill`, `cdBadge`, `speakBtn`, `stars`, `marks`/`scenes`, `gpLink` | `assets/js/markup.js` |
| Chapter content C1–C17 (`chapterView`, `bannerHtml`, `gpCard`, `formulaHtml`, `sampleHtml` …) | `assets/js/content.js` |
| Exercises, Check, review C18–C29 (`renderExercise`, `optGroup`, `fitOptionCols`, `checkHtml`, `reviewHtml`, grading) | `assets/js/exercises.js` |
| Home and pages (`homeView`, `guideView`, `aboutView`, `indexView`, `compareView`, `canDoView`, `drillView`) | `assets/js/pages.js` |
| Shell (`shellHtml`), sidebar, router, drawer, settings, event wiring | `assets/js/main.js` |
| Tokens (light and dark), reset, type, English layer, shared primitives | `assets/css/base.css` |
| Topbar, drawer, home, pages, tables, pager, footer | `assets/css/shell.css` |
| C1–C17 | `assets/css/content.css` |
| C18–C29 | `assets/css/exercises.css` |

Both pages (`index.html` for N2, `n1/index.html` for N1) load `boot.js`, `data/<book>/book.js`, then `main.js`, which builds the same shell for either book and loads `data/<book>/chNN.js`, `compare.js` and `front.js` in parallel.

---

## 0. Global design language

### 0.1 What the book looks like

- Printed in black plus a range of greys. Structure comes from **grey bands, dark rounded "pill" labels, thin rules, dashed frames, and circled or boxed numerals**. Content is never put in coloured cards.
- Two typefaces:
  - **Gothic (sans)** for the apparatus: headings, pills, どう使う？ explanations, ＊ notes, 📎 notes, instructions, answer numerals, and the English lines.
  - **Mincho (serif)** for the *book text*: 見本文, example sentences ①②, exercise sentences, passages, answer options.
- Grammar targets in 見本文 are set in **bold Gothic** inside the Mincho text.
- The English the N2 book prints (chapter titles, can-do, usage, notes, Plus usage, ＊ notes) sits directly under the Japanese in smaller grey Gothic. (The N1 book is the Chinese edition: its translations are not reproduced, so all N1 English is ours; see 0.6.)
- Leading is generous (about 2.0) because nearly every line carries furigana.

### 0.2 Design tokens (`base.css`)

Book greys carry the structure. `--accent` (pink) is used **only** for `**target**` highlighting; `--teal` for links, focus and picked answers; `--ok` / `--ng` for grading; `--en` (blue) for generated English. Stars are `--ink`.

| Token | Light | Use |
|---|---|---|
| `--bg` / `--panel` / `--ink` / `--ink-2` / `--ink-3` / `--line` | `#faf8f4` / `#fff` / … | page, frames, text levels, hairlines |
| `--goth` = `--jp` | Hiragino Sans → Hiragino Kaku Gothic ProN → Noto Sans JP → … | Gothic |
| `--mincho` = `--serif` | Hiragino Mincho ProN → Noto Serif JP → Yu Mincho | Mincho |
| `--band` | `#e6e4e1` | grammar-point band, table header tint, active nav row |
| `--band-edge` | `#6d7075` | thick left bar of the band, keigo table header |
| `--banner` | `#7f8388` | chapter opener band (white text) |
| `--pill` / `--pill-top` / `--pill-ink` / `--pill-shadow` | `#55585d` / `#66696e` / `#fff` / `#c3c3c3` | pill gradient, text, offset shadow |
| `--rule` | `#9a9a9a` | 見本文 frame, dashed frames, table rules |
| `--note-bg` | `#ececec` | 📎 clip note fill |
| `--badge-bg` / `--badge-ink` | `#d2d2d2` / `#2b2b2b` | POS badges |
| `--review-bg` | `#dcdcdc` | まとめの問題 page tint |
| `--en-book` | `#6b6f75` | English printed in the book |
| `--en` / `--en-soft` | `#2b5c9e` / `#eef4fc` | generated English, active EN buttons |
| `--top` | 56px (52px ≤600) | topbar height |
| `--sbw` | 260px (280px ≥1200) | sidebar width |
| `--main-pad` | 28 / 20 (≤900) / 14 (≤600) / 12 (≤390) px | main side padding; full-bleed = `calc(-1 * var(--main-pad))` |
| `--safe-l` / `--safe-r` | `env(safe-area-inset-*)` | landscape notch padding |

Every token has a dark value (0.5). Components use tokens, never literal greys; literal `#fff` appears only as text on a dark fill that stays dark in both themes (banner, keigo header, picked numerals).

### 0.3 Typography scale

| Role | ≥601 px | ≤600 px | ≤390 px |
|---|---|---|---|
| Gothic UI body (usage, notes, instructions) | 16px / 1.9 | 16px | 15.5px |
| Book text (Mincho: 見本文, examples, questions) | 17px / 2.0 | 16.5px / 2.0 | 16px / 1.95 |
| Book English `.en--book` | 13.5px / 1.5 | 13.5px | 13.5px |
| Generated English `.en--gen` | 14.5px / 1.55 | 14px | 14px |
| Chapter title (banner) | 32px | 24px | 21px |
| Chapter numeral (banner) | 96px | 60px | 52px |
| Grammar-point title (band) | 22px | 19px | 17.5px |
| Pills | 15px | 15px | 15px |
| Furigana `rt` | `.5em` | same | same |

- Fonts: Hiragino comes first in both stacks; the Noto webfonts (400/500/700) load non-blocking (`media="print"` swapped on load) and are only used where Hiragino is missing.
- `.ja-book` (base.css) = `font-family: var(--mincho); line-height: 2.0` on every book-text container.
- Body `line-break: strict` (no ュ / ッ / ー / closing punctuation at a line or column start). Book text is set ragged (`text-align: start`) at every width, horizontal and vertical: WebKit spreads a justified line around every `<ruby>` ("重要　な　課題"), and at 20–40 characters a line the ragged edge stays within a character or two.
- Headlines (`.sample__headline`, `.vt-title`, `.vt-label`, `.nt-heading`) break only at the book's spaces: `word-break: keep-all; overflow-wrap: anywhere`.
- Every `<input>` / `<select>` is ≥16px at ≤900 or under `pointer: coarse`, so iOS never zooms on focus.

### 0.4 Furigana (`ruby.js`, `base.css`)

Data writes `{漢字|かな}`; `fmt()` → `rubyMarkup()` emits native `<ruby>base<rt>reading</rt></ruby>` in horizontal and vertical text alike. `ruby { ruby-position: over; ruby-align: center }`, `rt { font-size: .5em; line-height: 1 }` (`RT_K = 0.5` in ruby.js must match).

- **Line-height:** any block with ruby needs ≥1.9 (2.0 for book text), so the reading sits in the leading and never reaches the line above. With Hiragino (and in Chrome with either font) the pitch is then even; with Noto's tall ascent WebKit makes every ruby line ~4px taller, which is why Hiragino comes first.
- **Overhang (JIS X 4051):** a reading wider than its base may overhang a kana or punctuation neighbour (never a kanji or another reading) by up to one furigana character (.5em; .375em when that kana also takes another reading's overhang, "軽傷者で救急"), so "集客が" is not set as "集　客　が". `rubyHtml()` writes `data-e` (excess, em), `data-ol` / `data-or` (room per side) and a first-guess `margin-inline`. `fitRubies()` then **measures** each such ruby against the neighbouring glyph on the same line and corrects the margins in px. It runs after every render (`layout()` in main.js), on resize, after any `data-act` click, `<details>` toggle, and font load. Measuring is needed because engines differ (WebKit skips a kana that touches another reading; `ruby-align: start` overhangs fully in WebKit but not Blink). Neighbours are only glyphs in the same inline formatting context, not grid items, labels or badges.
- **Start-aligned readings (`ruby.r-s`):** right after another reading ("ご観覧誠に"), and for the first ruby on a line (set by `fitRubies()`, marked `data-ls`), the reading starts at its base and overhangs the kana on the right instead of leaving a gap or an indent.
- **Group readings (熟語ルビ):** a run of adjacent readings where one is wider than its kanji ("{国際|こくさい}{交流|こうりゅう}{会|かい}") is merged into one ruby over the whole compound instead of spacing the kanji apart.
- **Unbreakable ruby:** `body:not(.no-furi) ruby { white-space: nowrap }`. Blink would otherwise split a base across lines and give each line a proportional slice of the reading ("運動" under "うんどうの").
- **Furigana off** (`body.no-furi`): `rt` hidden, overhang margins zeroed; line-height stays, so nothing jumps.
- **Don't** emulate ruby with inline-block `.rb`/`.rt` spans: a reserved top margin makes ruby lines taller than plain lines, a multi-kanji base becomes one unbreakable box (justification then stretches whole lines), and computed side margins push kana apart.
- Sidebar, mini-TOC chips, pager and `.gp-pattern` hide `rt`.

### 0.5 Theme: Auto / Light / Dark

- ⚙ → 画面の色 Theme: `settings.theme` = `"auto" | "light" | "dark"` (stored with the other settings in `localStorage["n2.settings"]`, shared by both books).
- `boot.js` (a classic script in `<head>`) reads the setting and sets `<html data-theme="light|dark">` **before first paint**, so the page never flashes the wrong theme. `data-theme` always holds the effective theme; `auto` follows `prefers-color-scheme` and a `change` listener keeps it in sync. `TRY.applyTheme(pref)` is called again by `applySettings()` when the reader changes the select.
- CSS: `:root[data-theme="dark"] { color-scheme: dark; …every token… }` in base.css. Components never use `@media (prefers-color-scheme)` directly.
- Dark check-points: the 見本文 corner curl, Plus and Check tags (they paint `--bg` over their frame line), the review band, the pill gradient (`--pill-top` → `--pill`, light pills with dark ink in dark mode).

### 0.6 English layer (`markup.js`, `base.css`)

Three kinds of English, told apart by class:

| Kind | Class | Look | Where |
|---|---|---|---|
| Book English (what the book prints) | `.en.en--book` | grey (`--en-book`) Gothic 13.5px | N2 usage, ＊ notes, 📎 notes, can-do, Plus usage, front matter |
| Generated English (ours) | `.en.en--gen` | blue (`--en`) system sans 14.5px, plus a small outlined **"generated"** tag (`::after`) | translations of examples, 見本文, exercises, feedback (`.why-en`), all N1 English; `.gen-tag` span on the deep-dive summary and generated table headers |
| UI text | `.en` (untagged) or `.en-inline` | plain | guide, home, labels in buttons and headings |

- `enSrc(o, book)`: a book field is `book` only when the book prints English (`bookLang: "en"`, i.e. N2) and the object isn't flagged `gen: true`; everything else is `gen`.
- Chapter banner English (genre, title) and the review capsule's "Review questions" are always visible, as in print.
- All other English is hidden by default and shown by:
  - the global **EN** switch in the topbar (shortcut **E**) → `body.show-en`;
  - a per-line `.en-btn` (`data-act="en"`, toggles `.en-open` on its `.bi`) in a right gutter of the line at ≥601 (`.bi:has(> .en-btn) { padding-right: 2.4em }`, button absolutely placed; never floated);
  - a per-container `.en-btn--scope` (`data-act="en-scope"`, toggles `.en-all` on `closest("[data-en-scope]")`). Containers: 見本文, grammar point, clip note, Plus, can-do, exercise, Check, review section, passage, pages. Where per-line buttons exist, the scoped button shows only at ≤600 (per-line buttons are hidden there).
- Feedback and transcript English show only after grading / when the transcript is open.

---

## 1. Shared primitives

| Primitive | Helper / markup | Book look | CSS essentials |
|---|---|---|---|
| Pill label | `pill(html)` → `span.pill` | dark rounded capsule, white bold Gothic, offset shadow below-left (pp.18–20, 27) | gradient `--pill-top`→`--pill`, `700 15px/1.3`, `padding .28em 1em .22em`, `box-shadow: -2px 3px 0 var(--pill-shadow)` |
| Boxed number | `span.qn.qn--box` | wide thin rectangle, Mincho numeral (pp.27–28) | `min-width 2.6em; height 1.5em; 1px border` |
| Paren number | `span.qn.qn--paren` "1）" | plain Gothic, hanging (pp.19, 26) | `min-width 2.2em`, no box |
| Circled number | `CIRCLED` ①…⑮ | Mincho circled digits | inherits Mincho |
| Answer numeral | `.opt-n` | bold Gothic 1 2 3 4, "a." in practice, "a）" in matching | 1.6em circle in grids, fills when picked |
| POS badge | `fmt()` `[N]` `[V-る]` `[Pl]` … | C10 | C10 |
| CD badge | `cdBadge(queue, label)` → `button.cd-badge[data-act=listen]` | headphone "CD 02" at the top-right of 見本文 and each listening item (pp.18, 29, 102) | 44×44 circle, 2px `--ink` border, "CD" over ▶, ear-cups via `::before/::after`; `.speaking` inverts |
| 🔊 | `speakBtn(text)` → `button.speak[data-act=speak]` | web-only | 32px visual, 44px hit (`::after`), negative block margin so it never grows the line |
| Bilingual line | `bi(o, tag, cls, {book})` → `div.bi > .ja + .en` | Japanese, English under it | 0.6 |
| Stars | `stars(n)` | filled black stars only | `--ink`, nowrap |
| Usage scene | `scenes(marks)` | C8 | C8 |

`fmt()` inline markup: `{base|reading}`, `**target**` (strong, `--accent`), `__underline__`, `~~strike~~`, `＿＿` blank, `[N]`-style badges, `\n` → `<br>`; `fmt(s, {vertical: true})` also wraps standalone 1–2 digit runs in `.tcy` (縦中横), outside tags and ruby. `plain()` strips all of it (speech, search, titles).

---

## 2. Component catalogue

Each entry: **Book** (page refs, exact design) → **Web** (renderer and markup) → **Responsive**.

### C1 Chapter opener banner

**Book (pp.18, 30, 62, 72, 103, 122, 148, 160, 188, 205):** full-width mid-grey band about 1/8 of the page tall. At left a huge white Gothic numeral with faint concentric arcs behind it. To its right, line 1: genre in small bold white ("お知らせを読む") plus genre English; line 2: the title in large bold white with white furigana, the English title after it on the same baseline (a long one drops to its own line). Split chapters carry "（1）" / "(1)".

**Web (`bannerHtml(ch, part, pi, range)`):** `header.ch-banner` grid `auto minmax(0,1fr) auto`: `.ch-banner__num` · `.ch-banner__body` (`.ch-banner__genre`, `h1.ch-banner__title` with `.ch-banner__part` and `.ch-banner__en--title`) · inline side-tab chip (C3). Background: two `radial-gradient` rings at 10–12% white behind the numeral over a `--banner` gradient; bleeds to the main column edge (`margin: -28px var(--bleed)`), radius `0 0 14px 14px`. `text-wrap: pretty` on the title prevents an orphaned last character.

**Responsive:** ≤600: square corners, bleeds to the viewport, numeral 60px, title 24px, English title `display:block` 15px, the tab chip moves under the title (`grid-column: 2`). ≤390: numeral 52px, title 21px, genre English 11px.

### C2 Part banner "(2)"

**Book (p.38):** identical to C1 with "（2）", its own できること and 見本文.

**Web:** `bannerHtml(ch, part, 1)` with `.ch-banner--part` (`h2`), top margin 64px, full radius. ≤600: bleeds, 56px top.

### C3 Chapter side-tab "1〜8"

**Book (pp.19, 21, 103, 153, 205):** a rounded thumb tab on the outer page edge, light grey fill, grey outline, text vertical ("1 / ∫ / 8"), holding the chapter's point range; it steps down chapter by chapter.

**Web:** `tocTab()` renders `a.ch-tab[data-act=toc]` twice: `.ch-tab--edge` (fixed, `writing-mode: vertical-rl`, `top: calc(var(--top) + 90px + (var(--ch) - 1) * 26px)` with `--ch` on `.chapter`) and `.ch-tab--inline` (outlined chip in the banner). `ACT.toc` opens and scrolls to the mini-TOC (C5).

**Responsive:** the edge tab only at `(min-width:1200px) and (hover:hover)`; otherwise the inline chip (44px min).

### C4 できること (can-do)

**Book (pp.18, 30, 38):** the pill at the left margin; below it a list with **● black round bullets**, Japanese Gothic, English on the next line aligned with the text, no box.

**Web (`canDoHtml`):** `section.cando[data-en-scope] > h2.cando__label (pill + scoped EN) + ul.cando__list > li.bi`. Bullet via `li::before{content:"●"}` hanging at −1.25em. The book English is hidden until toggled.

**Responsive:** scoped EN button only ≤600; list indent 1.4em at ≤390.

### C5 Mini table of contents (web-only)

`details.mini-toc` with summary "この章の文法 1〜8（8）" and wrapping outlined chips `.mt-gp` (number + pattern, `rt` hidden), part labels `.mt-part` "(1)" / "(2)", and a `.mt-review` chip. Rendered **open at ≥601** and collapsed at ≤600. Chips 32px (44px under coarse pointers). Never a horizontal scroller.

### C6 見本文 frame (all kinds)

**Book (pp.18, 30, 62, 72, 103, 122, 148, 153, 188, 205):** white rectangle, thin grey border, **square corners**; a row of **binder-ring holes** along the top inside edge; the **CD badge** at the top-right after the last hole; a **folded page curl** at the bottom-right. No "見本文" label. Some frames have no holes (p.38 and others; `sample.rings: false`), and the article (p.160) has a heavier border and a plain corner.

**Web (`sampleHtml(s, chId, pi)`):** `section.sample.sample--rings.kind-<kind>[data-en-scope]` with an sr-only `h2` "見本文" and `.sample__tools` (縦/横 toggle for vertical texts, scoped EN, CD badge whose queue is the heading plus every line with its voice) at the top-right. Dispatch: `vertical` → C6e, `notice` → C6a, `dialogue` → C6c, else headline (C6d) + prose (C6b).

- Rings: `.sample--rings::before`, a `radial-gradient` hole tiled with `background-repeat: space` (whole holes evenly spread, count adapts to width), `right: 170px` leaves room for the tools.
- Curl: `.sample::after` triangle with a gradient fold and shadow, plus a 315° `--bg` gradient on `.sample` so the corner reads as cut. `.kind-article` drops it and uses a 1.5px border.
- Targets inside: `strong { font-family: var(--goth); color: var(--accent) }`.

**Responsive:** padding `56px 40px 34px` → ≤600 `60px 16px 26px` with `margin-inline: -6px`, holes 24px apart and ring gutter `right: 150px` → ≤390 padding-inline 12px.

#### C6a notice (N2 ch1, p.18)

**Book:** display heading ("サニー　店内スタッフ募集") in heavy outlined Gothic, centred; a centred lead line; a two-column form with bold keys and an arrow ("仕事▶", "給与▶") and Mincho values; continuation and "＊" lines indented to the value column; **tabular** pay lines ("時給 | 7時〜 9時 | 1,000円〜", next line "9時〜22時 | 900円" aligned under the time and wage columns); a contact block with URL / E-mail aligned under the ☎ column.

**Web (`noticeHtml`)**, heuristics (overridable per line with `line.style`):
1. Lines before the first ▶ row (or `style: lead|center`) → `.nt-lead` (centred); `style: right` → `.nt-right`.
2. `/^(.{1,12}?)▶(.*)$/` → `.nt-row > .nt-key + .nt-val`, grid `5.2em minmax(0,1fr)`.
3. Other lines → `.nt-row.nt-cont` (empty key; `.nt-star` hangs a leading ＊).
4. A value with ≥2 full-width spaces → `.nt-cells` grid `3.2em 8.5em auto`; following lines with fewer cells start at the matching column (`grid-column-start`).
5. From the first line with ☎, `http`, `E-mail` (or `style: contact`) → `.nt-contact`, grid `max-content 1fr`; the ☎ line splits into org | contact, later lines fill column 2.

Heading: `.nt-heading` 900 32px, white fill with a 1.6px dark stroke (`paint-order: stroke fill`) and an offset shadow.

**Responsive:** ≤600: keys 4.6em, cells `auto auto auto`, heading 26px. ≤390: cells wrap as flex (alignment relaxed, nothing overflows), contact one column, heading 22px.

#### C6b prose: speech, news, essay, explanation

**Book (pp.30, 38, 62, 103):** Mincho paragraphs, 1em first-line indent, bold Gothic targets, no blank lines between paragraphs.

**Web (`proseHtml`):** `paragraphs()` groups lines (data stores one sentence per line; `line.cont: true` continues the previous paragraph; `〜〜〜` lines or `style: sep` are separators; `（文：…）` or `style: credit` is a credit). Each paragraph is `div.prose__para.bi > p.ja.prose__p + .en.prose__en` (one English block per paragraph). A paragraph that opens with 「 is not indented (`.prose__p--q`); `style: note` → small ※ line.

#### C6c dialogue (pp.72, 122)

**Book:** speaker names with a full-width colon, **right-aligned so the colons line up**; each turn hangs under the first character after the colon.

**Web (`dialogueHtml`):** `.dlg[style="--spw:Nem"]` (N = longest name, min 2) with rows `.dlg__row` grid `var(--spw) 1em minmax(0,1fr)`: `.dlg__sp` (right-aligned) · `.dlg__colon` · `.dlg__body`. Narration rows (`sp` empty) span all columns.

**Responsive:** names over 4em (`.dlg--wide`) stack above the text at ≤390 (bold 13px, colon hidden).

#### C6d article (ch11, p.160)

No holes, heavier border. `h3.sample__headline` centred bold Gothic 25px (21px ≤600, `text-wrap: balance`); prose as C6b; the credit "（文：週刊ABK編集部）" is `p.credit` right-aligned.

#### C6e vertical texts: essay ch10 (pp.148, 153), story ch13 (pp.188, 195), editorial ch14 (p.205); N1 ch4, drama ch5

**Book:** 縦書き Mincho, columns right to left, 1em indent at the top, bold Gothic targets, furigana to the right; two-digit numbers upright (縦中横). Editorial: a masthead "社説" in a box ruled above and below, a very large bold vertical headline, body in two tiers. Story: "〜〜〜〜" scene separator.

**Web (`verticalHtml`), for `sample.vertical: true`:** vertical when `verticalOn()` — `settings.vertical === "v"`, or `"auto"` at ≥901 px; otherwise horizontal (`.vt--h`, section `.is-h`).

- Vertical: `div.vt-scroll[tabindex=0][role=region] > div.vt.ja-book` (`writing-mode: vertical-rl`, `line-height: 1.95`, `height: clamp(22em, 62vh, 28em)`), paragraphs with `fmt(…, {vertical:true})` (`.tcy`). Editorial heading splits at the first full-width space into `.vt-label` (double rules via `border-block`) and `h3.vt-title`, inside `header.vt-mast`. Drama (`kind: dialogue`, N1 ch5): `p.vt-dlg > .vt-sp (4.5em) + .vt-say`; lines without a speaker are `.vt-dir`. English is one horizontal `.vt-en` block below the scroller (per-line EN/🔊 are not rendered).
- The editorial is set in **one tier**: multi-column inside `vertical-rl` is unreliable.
- `.vt-scroll` is the only allowed horizontal scroller: `overflow-x: auto; overscroll-behavior-x: contain`; it opens at its right edge (the start) with no JS. `vtScrollInit()` first grows the columns in 2em steps (up to 80vh / 44em) when the text is only a little wider than the frame, then toggles `.has-more`, which fades the left edge (`mask-image`) while more text is hidden.
- Horizontal fallback: prose / dialogue as C6b/C6c; the masthead becomes a centred inline row (label with side rules).

**Behaviour:** the 縦/横 segmented control (`.seg__b[data-act=vmode]`) and ⚙ → 縦書きの文章 both call `setVertical()`, which persists the mode and rebuilds every vertical 見本文 in place (keeping its `.en-all`). Pressing the mode `auto` already gives stores `auto`. In `auto`, crossing 901 px rebuilds.

**Responsive:** ≤600 scroller `clamp(20em, 60vh, 24em)`, 16px; swiping scrolls inside the scroller only.

### C7 Grammar-point header band

**Book (pp.19–25, 30, 72, 123, 148):** full-width light-grey band about 1.8 lines tall, lighter to the right; a **thick dark bar** (~8px) at the left, a darker 2px rule along the bottom. Inside: the **number** in heavy serif (Times-like), the **heading phrase taken from the 見本文** in bold Gothic with the target heavier and furigana, and at the far right **solid black stars**. The generic pattern isn't printed. Points are not boxed.

**Web (`gpCard`):** `article.gp#gp-N[data-en-scope] > header.gp-bar` grid `auto minmax(0,1fr) auto`: `.gp-bar__no` (700 24px Times New Roman) · `h3.gp-bar__title` (`g.phrase || g.pattern`; `strong` 900, ink colour) · `stars()`. Below it a web-only `.gp-pattern` (13px, `--ink-3`, `rt` hidden) when a phrase is shown. No card border.

**Responsive:** ≤600 bar 6px, number 20px, title 19px; ≤390 title 17.5px, stars 13px. `minmax(0,1fr)` + `overflow-wrap: anywhere` keep long titles from pushing the stars out.

### C8 どう使う？ pill and usage-scene icons

**Book (pp.6, 19–25):** the pill at the left; on the same row at the far right one or more **usage-scene icons** in small rounded-square frames, no text: casual (two faces chatting), formal (the same, crossed out), polite (bowing figure), regret (face with a sweat drop), praise (face with radiating lines).

**Web:** `.gp-use` (flex, space-between) = `h4.gp-use__pill` + `.gp-use__tools` (`scenes(g.marks)` + scoped EN). `marks()` renders `span.scene.scene--<m>[role=img][aria-label="かたい表現 — Formal / written"]` with an inline 24×24 line SVG from `MARKS`, followed by a `.mark-l` text label that is hidden inside `.scenes` and visible in the guide legend and about page. Frame 36px (32px ≤390), 2px `--rule` border, `--band` fill.

### C9 Usage text

**Book:** Japanese Gothic medium; the book's English below in smaller grey. No box. **Web:** `bi(g.usage, "p", "usage", {book: true})`; `.usage > .ja` 500 16px/1.8 Gothic.

### C10 Connection formula

**Book (pp.19–25, 30, 38, 148, 153, 196; legend pp.8–9):**
- POS badges, grey fill, dark text: **N**, **V** a circle; **いA**, **なA** a short pill; **V-る / V-ない / V-Pl** a rounded pill; **Pl**, **Po** a square-cornered box. Subscripts N₁ / N₂.
- Struck endings: "V-~~ます~~", "いA~~い~~く", "~~N だ~~".
- "+" with generous space; endings in Gothic medium.
- **Alternatives grouped with a thin bracket:** common head ("N + [ に限り / に限る ]") → a left bracket stacks the tails; common tail ("[ N / V-る + V-ない ] + にかかわらず") → the heads stack inside a right bracket.
- Sub-conditions in small bracketed lines under the formula ("［現在形だけ］"), or under each badge.
- No box, no background.

**Web (`formsHtml` → `formulaHtml`):** forms split on "+" with `splitTop()` (only outside ［…］ and （…）, so a bracketed alternative may contain "+"); a token `［A　B］` becomes a bracket stack `.fx-br`.
1. One form → `div.fx` (`.fx-t` tokens joined by `.fx-plus`).
2. Every head × every tail (N1 p.17) → `.fx--x`: two stacks.
3. Shared first tokens → `.fx--pre`: head `+` `.fx-br--l` of tails.
4. Shared last tokens → `.fx--suf`: `.fx-br--r` of heads `+` tail.
5. Otherwise stacked `.fx` rows.
6. Sub-lines (`\n…` or a whole-bracket form) → `.fx-sub`; when a single formula has one ［…］ group per badge, each group is printed in small type under its badge (`.fx--under`, `.fx-col`, `.fx-u`; `.fx-col--hang` lets it run under the following "+").
7. Forms with " → " → keigo table C16.

Badges (`badgeHtml()` in markup.js, `BADGE_RE` accepts N V いA なA A Pl Po 文 数, a subscript/digit, `-form`, and a struck ending): shape classes `b-round` / `b-pill` / `b-sq`; colour hooks `b-n b-v b-i b-na b-pl b-s` stay unstyled. `.badge` 700 .82em Gothic, 1.45em tall. Strikes: `.badge s` line-through; a strike wrapping a badge (`s .badge`) draws the line with a background gradient, since text-decoration doesn't reach inline-blocks. An sr-only `h5` "接続" labels the block. `.fx` 500 17px/1.6 (16px ≤390); bracket alternatives wrap internally (`min-width: 0`).

### C11 ＊ notes on connection

**Book (pp.19, 22, 38, 72):** small Gothic, "＊" hanging, English below, directly under the formula. **Web (`fnotesHtml`):** `p.fnote.bi > .fnote__m + .ja + .en`; a note already starting "＊1" keeps its own mark (never "＊＊1"). 13.5px/2 Gothic, 1em hanging indent.

### C12 Example sentences ①②

**Book (pp.19–25, 123):** Mincho, circled numeral flush left, continuation lines hanging under the text, no separators; dialogue examples "A：… / B：…" align B under A; an idiom gets a small chain-link glyph (legend p.7).

**Web (`examplesHtml`):** `ol.exs.ja-book > li.exs__i.bi` grid `1.1em minmax(0,1fr) auto`: `.exs__n` · `.exs__t` (`.ja`, optional `.idiom` SVG, `.exs__foot` small right-aligned ※ footnote, `.en`) · `.exs__tools` (🔊, EN). Lines matching `A：` become `.exs__turn` grids `1.75em 1fr`. `nonum: true` drops the numeral column.

**Responsive:** ≤600 the per-line EN is hidden (the point's scoped EN takes over); ≤390 grid `1.25em 1fr 32px`.

### C13 📎 Clip note

**Book (pp.7, 20, 21, 122):** light-grey rounded rectangle; a **paperclip overlaps the top-left corner**; Gothic explanation (badges allowed), English, then examples; its やってみよう！ follows; a ☞ line may sit inside.

**Web (`notesHtml`):** `aside.clip[data-en-scope]` with `svg.clip__icon` (absolute, `left:-4px; top:-12px`) and `.clip__body`: `.clip__tools` (stars, scoped EN; floated right), `bi(n, "p", "clip__text", {book:true})`, the note's ☞ (`xrefHtml(n.xref)`) before its examples, examples, practice. Radius 12px, padding `14px 18px 12px 38px`. Order relative to やってみよう: N2 after, N1 before (`book.notesFirst`, per point `g.notesFirst`).

**Responsive:** ≤600 padding-right 12px; ≤390 padding-left 30px, icon 18×34.

### C14 ＋Plus box

**Book (pp.7, 25):** rounded rectangle with a thick grey border; a **"✚ Plus" tag breaks the top border at the left**; heading row with the pattern in large bold Gothic, stars and scene icon at the right, a **dotted rule** below; then usage, English, examples.

**Web (`gpCard`, `g.plus[]`):** `section.plus[data-en-scope]` → `span.plus__tag` (`.plus__cross` drawn with two gradients, `--bg` behind it) + `header.plus__head` grid `minmax(0,1fr) auto auto auto` (title · stars · scenes · scoped EN) + usage, formula, examples, notes, practice, ☞. Border 3px `--rule`, radius 10px.

**Responsive:** ≤600 padding `18px 12px 12px`, head indent .4em, title 19px.

### C15 ☞ cross-reference and related links

**Book (pp.7, 19, 21, 25):** **right-aligned** at the end of a block: "☞", a page, a pattern ("☞ p.224 〜につき").

**Web (`xrefHtml(book, see, no)`):** only the book's own reference is printed as `p.xref` (right-aligned, `.xref__hand` + `.xref__book`). Our links — `g.see` points and the similar-pattern group (`#/compare/<group index>`, "似ている文型〜次第") — go on a separate small grey line `p.gp-rel` "関連 Related …" so they can't be taken for book text. `.gp-link` is a text link (13px, 44px tall under coarse pointers). ≤600: both lines left-aligned.

### C16 Keigo and other tables (p.123)

**Book (gp 73):** two stacked two-column tables (意味 | 尊敬語, 意味 | 謙譲語); header row dark grey with white text, centred, with furigana; body rows separated by horizontal rules plus the column divider; alternatives on separate lines; ＊1–＊3 notes to the right of the tables.

**Web (`kvTableHtml`):** any form with " → " switches the block to tables; a row whose key is 意味 starts a new table and becomes its `thead`; values split on "／" → `<br>`; a trailing "＊n" → `sup.kv-ref`. `.kv-wrap` grid `minmax(0,26em) minmax(0,1fr)` (tables · `.kv-notes`). `.kv th` `--band-edge` fill, white 600 14px.

**Responsive:** ≤700 one column, notes below. Two columns always fit at 375px; no horizontal scroll.

### C17 Web-only extras in a point

- Deep-dive: `details.deep` (outlined row, summary ≥44px, "📘 English deep-dive" + `.gen-tag`) after the examples.
- Footer `.gp-foot` right-aligned: `label.studied` with a transparent 44×44 native checkbox over a drawn 22px box (`.studied__box`), `data-act="studied"` saves `progress.studied`.

### C18 やってみよう！ header

**Book (pp.19–25):** the pill at the left, "▶答え 別冊P. 1" right-aligned on the same row, items with **no frame**.

**Web (`renderExercise(ex, id, title, {bare, numOffset, review})`):** `section.exercise.ex-<type>[data-ex=id]`; `.ex-head` = `h4.ex-title` (pill) + `.ex-ref` (score chip, scoped EN) on the right; optional `.ex-prompt`; `.ex-body`; `.ex-actions` (答え合わせ / リセット buttons, `.ex-result`). No border or background (only the drill page frames them). Buttons 40px (44px coarse). Exercise ids are progress keys and must stay stable: `gpN-pJ`, `gpN-nK-pJ`, `gpN-plusK-pJ`, `chN-partP-check[-k]`, `chN-review-K`.

### C19 Practice multiple choice, inline "（a. … b. … c. …）"

**Book (pp.20–24):** items "1）"; options printed **inside the sentence's parentheses** with "a." and an em-space between them; lines wrap naturally, hanging under the text. Multi-blank items have one group per blank.

**Web (`choiceItem` → `optGroup(…, "inline")`):** used when the labels are letters and the question has exactly one "（　）" per option group (or "（ a ）" … for `parts`). Options are `span.opt.opt--inl[role=button][tabindex=0]` (Enter/Space handled by the global keydown), not `<button>`: a button is an atomic inline-block, so each option would wrap as one box and break the sentence's line spacing. They keep the sentence's 2.0 line-height; vertical padding (`.8em`, `background-clip: content-box`) gives a ~44px tap area without growing the line box or painting over the furigana above; a word joiner keeps "b." with its text. Picked: teal tint + underline; right/wrong per C29. Otherwise options fall back to the grid (C24).

### C20 Matching halves "1）… ・　・ a）…"

**Book (pp.19, 23–25, 196):** two columns: "1）text ・" and "・ a）text", 4–6em of empty gutter between the dots, rows paired, long texts hanging inside their column.

**Web (`matchBody`):** `.match__row` grid `minmax(0,1fr) 4.5em minmax(0,1fr)`: a left `choice-q.match-q` (text + dot + a row of round letter buttons `.opts--letters`) · `.match__gap` (echoes the picked letter in a circle) · `.match__r` (dot, "a）", text). A hidden `ol.match__ref` duplicates the right column.

**Responsive:** ≤700 the right column shows first as the reference box `.match__ref` (thin border, dots hidden), then the left items with their letter buttons; the in-row right cells and gutter are hidden. Letter buttons 36px (44px coarse).

### C21 Check box, word bank, tap-to-fill

**Book (p.26):** a heavy **dashed** frame, square corners; the wordmark **"Check" + a solid open-book icon** on the top border at the left; items "1）" with a long underline blank; **after each group of items its word bank** in a thin solid box fitted to its content, words ~2em apart; numbering continues across groups inside **one** frame.

**Web (`checkHtml(checks, idBase)`):** `section.check[data-en-scope]` → `.check__tag` (`--bg` behind it; the book icon is a `clip-path` polygon) + `.check__tools` (scoped EN, also on the frame line) + each exercise rendered bare with `numOffset`. Fill items (`fillBody`): `button.blank[data-act=blank]` in the sentence (1.4em tall, `vertical-align: text-bottom`, `::after` hit extension); `.bank` of `button.chip[data-act=bank]` below the items. Tap a blank to make it active, tap a chip to fill the active (or first empty) blank, tap a filled blank to clear it. Paired answers ("やら・やら") mirror into `.blank--mirror`. A `write` exercise with `bank` gets a static `.bank--static`.

**Responsive:** ≤600 frame padding `24px 12px 10px`, bank flush left with gap `.2em 1.2em`, blanks 4.5em; ≤390 tag 19px.

### C22 Write-in

`input.write` in the sentence: bottom border only, Mincho `max(16px, 1em)`, 7em wide (`min(7em, 40vw)` ≤390), 1.45em tall, `vertical-align: text-bottom` so it never pushes into the next line's furigana.

### C23 まとめの問題 header, 問題N headers, instructions

**Book (pp.27–29, 101–102, 170):** pages tinted grey with the content on a **white rounded panel**; at the top a full-width **dark capsule** "まとめの問題" (~30px bold white, centred) with "Review questions"; each section starts with a pill "問題1" and a bold title "〈文法形式の判断〉", then a Gothic instruction containing "（　　）", "＿★＿" and boxed numbers. A 問題4 with two sub-parts shows its header **once**, then "1 この問題では…", "2 …" each followed by items.

**Web (`reviewHtml(ch)`):** `section.review#review-N` (full-bleed `--review-bg`) > `.review__panel` (radius 18px) > `h2.review__title` (pill gradient capsule, `.review__en` inline) and one `section.rv[data-en-scope]` per 問題N: `h3.rv__head` (pill, `.rv__name`, `.rv__en`, scoped EN) + `.rv__instr` (`fmtInstr()`: `[n]` → `.pblank`, "＿★＿" → `.star-blank`) + bare review exercises (`.ex--review`, boxed numbers). Titles matching the previous 問題N become `.rv-sub` blocks with a numbered instruction.

**Responsive:** ≤600 band padding `14px 8px`, panel `16px 12px` radius 12px, title 22px with the English on its own line (12px); ≤390 title 20px.

### C24 問題1: choice with a 4 / 2 / 1-column option grid

**Book (p.27):** boxed number, Mincho sentence with "（　　）"; on the next line, indented to the sentence, **four options in four equal columns** (bold Gothic numeral, space, Mincho option), no borders. Long options go 2×2 or one per line.

**Web (`optGroup(…, "grid")`):** `.opts.opts--grid[data-w]` grid `repeat(var(--cols), minmax(0,1fr))`, each `button.opt.opt--grid` grid `1.75em minmax(0,1fr)` = `.opt-n` (1.6em circle, 700 15px Gothic; letters print "a." without a circle) + `.opt-t` (`min-width: 0; overflow-wrap: anywhere`). `data-w` = widest option in em (`optW()` via `cw()`); `fitOptionCols()` (on render, resize, after clicks) picks 4, then 2, then 1 columns so that `cols × (w·font + label overhead) + gaps` fits the grid's real width — a short option never breaks inside a word ("にあるまじ／き"). Indent 2.2em (3.2em in review). Grid options must stay grid, never `inline-flex` (C31 rules).

**Responsive:** ≤600 review options span the full width under the number (practice options keep 2.2em); column gap .6em; 44px min height under coarse pointers.

### C25 問題2: ★ ordering

**Book (pp.27–28, 101, 170):** boxed number, sentence with **four underline blanks**, the **★ centred on the star blank**, options below in the grid.

**Web (`orderItem`):** `.q-text.order-line` (line-height 2.8) with four `button.slot[data-act=unslot]` (`.slot--star` shows ★; once filled a small ★ sits above), pieces as `.opts--grid.pieces` of `button.piece[data-act= piece]`. A filled slot shows the piece's numeral in a small circle plus its text at 14px. Slots 3.8em (≥44px ≤390), `::after` extends the hit area.

### C26 問題3 文章の文法: passage cloze

**Book (pp.28, 56, 101):** a **dashed rectangle** around the passage (Mincho, 1em indent; a paragraph opening with 「 or 『 is not indented); blanks are **boxed numbers** inline; below, one row per blank: boxed number, then four options on the same row.

**Web (`textBlock`, `passageBody`):** `div.passage.ja-book[data-en-scope]` (1.5px dashed `--rule`) with `.passage__tools` floated top-right (🔊, scoped EN), optional `h4.passage__title`, paragraphs (`p.p--q` unindented), `[n]` → `span.pblank` (kept with trailing punctuation by `.nobr`), generated English below. Rows `.pq-row` grid `3.4em minmax(0,1fr)` (2.9em ≤390): boxed number + option grid + feedback. A picked option fills its `.pblank`.

### C27 問題3 読解: reading comprehension

**Book (pp.57, 101–102, 170):** the dashed passage; questions with boxed numbers; options stacked with hanging indent, or in columns when short (N1 p.57).

**Web (`readingBody`):** `textBlock` + `choiceItem` with `mode: "noinline"`: options never go into the sentence but use the width-fitted grid, so short ones sit in columns and long ones one per line.

### C28 問題4 聴解: listening

**Book (pp.29, 102):** boxed number, options (a vertical list or a 2×2 grid) and a **CD badge at the far right of the first row**; the question is **not printed**. Response items print only "1　2　3". Gist items print nothing.

**Web (`listeningBody`):** `.lq-row` grid `3.2em minmax(0,1fr) 52px` (`2.9em … 48px` ≤390): number · options · CD badge. Modes: task (question before and after the talk), summary (after), gist (question and choices spoken after the talk), response (three spoken replies; `.opts--resp` of 44px round numeral buttons). The question opens the `details.script` transcript ("質問：…", after the talk for summary/gist) and shows in the feedback after grading. `.script` summary ≥44px; transcript uses `.dlg .sline` rows.

### C29 Grading states and feedback (web-only)

- Picked: teal-filled numeral circle (grids, letters, response) or teal tint + underline (inline).
- Right: `--ok` circle and `--ok-soft` fill. Wrong: `--ng` circle and line-through on the text, not the numeral.
- After grading the item's `.qn` fills green or red; `.feedback` appears (3px left rule in ok/ng, `--bg` fill, 14px Gothic, indented to the text column; flush left ≤600) with the full sentence, our English and the why-note.
- Score chip `.score-chip` in `.ex-ref` (or the actions row when there's no header); scores saved per exercise id.

### C30 Chapter footer navigation

**Book:** running footer "1 スタッフ募集のお知らせ ●21". **Web (`chapterView`):** `nav.pager` two equal cards (`.pager__dir` + `.pager__t`), ≥56px, 1px `--rule`, radius 10px, next right-aligned. ≤390: one column, next first.

### C31 Shell and pages

- **Topbar** (`shellHtml`, sticky, `height: calc(var(--top) + safe-area-top)`, translucent `--panel` with blur): ☰ (≤900) · brand "文法" (+ "TRY! companion" hidden ≤1100; brand hidden ≤374) · **N2 | N1** book switcher (`.book-switch`, current = pill colours) · `.topnav` six page links (English labels hidden ≤1100, whole nav hidden ≤900) · toggles ふりがな / EN (short labels "ふ" / "EN" via `data-short` at ≤900; labels always visible) · ⚙ popover (theme, speech rate, vertical texts, reset progress; `position: fixed` below the bar at ≤900, closes on outside click and Esc). All controls 44×44.
- **Sidebar** (`sidebar()`): chapter rows `.sb-ch-link` (number chip, title, progress "3/8" / ✓), the open chapter expands its points `.sb-gps` and review link; the active point is highlighted with a `--band-edge` inset bar. Desktop: sticky, `height: calc(100dvh - var(--top))`, own scroll, `overscroll-behavior: contain`.
- **Drawer (≤900):** fixed, `width: min(86vw, 320px)`, slides in (`body.sb-open`), scrim closes it, page scroll locked, focus moves in and is trapped (`trapDrawerFocus`), Esc and navigation close it, crossing to ≥901 closes it. Its first block `.sb-pages` holds the six page links as 44px rows in two columns.
- **Pages:** `.tbl` tables; at ≤600 `.tbl.stack` (index, compare, can-do) become stacked cards with `td[data-h]::before` labels. Front matter rows carry an English row `.tbl-en` shown with EN. Index search is a 16px, 44px-tall input.
- `main`: 800px measure (`max-width: calc(800px + 2 * var(--main-pad))`), centred right of the sidebar; about 44 Japanese characters a line at 17px, close to the book's measure.

---

## 3. Responsive rules

### 3.1 Breakpoints

| Name | Query | Layout |
|---|---|---|
| wide | `min-width: 1200px` | sidebar 280px, fixed side-tab (with `hover: hover`) |
| desktop | 901–1199 | sidebar 260px, 縦書き in auto mode (`WIDE` in core.js) |
| — | `max-width: 1100px` | topnav and brand drop their English/sub labels |
| tablet | `max-width: 900px` | drawer + ☰, topnav hidden, short switch labels, `--main-pad` 20 |
| — | `max-width: 700px` | matching and keigo tables collapse to one column |
| phone | `max-width: 600px` | `--top` 52, `--main-pad` 14; full-bleed banner, 見本文 and review band; scoped EN buttons; stacked tables; mini-TOC collapsed |
| small phone | `max-width: 390px` | `--main-pad` 12, body 15.5px, the smaller type steps in 0.3 |
| tiny | `max-width: 374px` | brand hidden, tighter topbar |
| touch | `pointer: coarse` | every target ≥44×44 (padding or `::after` hit extension) |
| hover | `hover: hover` | hover styles only here (no sticky hover on iOS) |

### 3.2 How multi-column layouts collapse

| Component | ≥701 | ≤700 / ≤600 | ≤390 |
|---|---|---|---|
| C1 banner | numeral · text · tab chip | ≤600 English title on its own line, chip under title | smaller type |
| C6a notice | key 5.2em, 3-cell pay grid | ≤600 key 4.6em, auto cells | cells wrap, contact one column |
| C6c dialogue | name · colon · text | same | names >4em stack |
| C6e vertical | 縦 at ≥901 (auto) | 横 (auto), 縦 on request | same |
| C16 keigo | tables · notes | notes below | same |
| C20 matching | left · gutter · right with dots | reference box, then left items with letter buttons | same |
| C24–C27 options | 4 / 2 / 1 columns fitted to width | same, less indent in review | same |
| C28 listening | `3.2em 1fr 52px` | same | `2.9em 1fr 48px`, transcript flush left |
| Pager | 2 columns | 2 columns | 1 column, next first |

### 3.3 Touch targets (≥44px under `pointer: coarse`)

| Control | Visual | Hit area |
|---|---|---|
| ☰ `.sb-toggle`, ⚙ summary, `.switch` label, book switcher | 44 | 44 |
| `.en-btn` | 36×32 | 44 (`::after`) |
| `.speak` 🔊 | 32 | 44 (`::after`) |
| `.cd-badge` | 44 | 44 |
| `.mt-gp` chips, `.mini-toc` summary, `.seg__b` 縦/横 | 44 | 44 |
| `.opt--grid`, `.opt--let`, `.opt--resp`, `.chip` | 44 | 44 |
| `.opt--inl` (inline option) | text | ~44 (vertical padding, no line growth) |
| `.slot`, `button.blank` | text line | `::after` inset −10px |
| `.studied` | 22 box | 44 (native checkbox overlay) |
| `.gp-link`, table links | text | 44 (padding) |
| `.btn`, `.ex-actions .btn` | 44 | 44 |
| `.pager a` | ≥56 | ≥56 |
| `.sb-ch-link`, `.sb-gps a`, `.sb-pages a` | 44 | 44 |
| `.script summary`, `.deep summary` | 44 | 44 |

Inline boxes in running text sit on the text and never enlarge the line box: blanks and write-in inputs are 1.4–1.45em tall with `vertical-align: text-bottom`, badges 1.45em, tap areas come from transparent `::after` / padding.

### 3.4 No horizontal overflow

- Guard: `html, body { overflow-x: clip }` (clip, not hidden, so sticky keeps working). It hides regressions, it doesn't fix them: the probe (§5) must stay clean.
- Every flex or grid child that holds text gets `min-width: 0`.
- Never `display: inline-flex` on an element whose content mixes text and `<ruby>`: every text run and ruby becomes an unbreakable flex item. Wrap the text in a child (`.opt-t`) and use grid or block.
- `white-space: nowrap` only on numerals, stars, badges, labels — never on content text.
- Long ASCII runs (URLs, e-mails) get `overflow-wrap: anywhere`.
- The only horizontal scroller is `.vt-scroll`, with `overscroll-behavior-x: contain`.

### 3.5 Sticky and fixed elements

- Sticky: the topbar (all widths) and the sidebar (≥901). Nothing else — no sticky exercise bars or banners; they eat phone height.
- `html { scroll-padding-top: calc(var(--top) + safe-area-top + 12px) }` so `#/gp/N` and review jumps land below the bar. Jumps within the chapter on screen keep the DOM (`sameChapterJump()`).
- Fixed: the side-tab (≥1200, hover), the drawer and scrim (≤900), the ⚙ popover (≤900).
- Safe areas: `viewport-fit=cover`; topbar, main, drawer and footer pad with `env(safe-area-inset-*)`.

---

## 4. QA checklist

**Widths:** 1280, 768, 390 (iPhone 14/15), 375 (iPhone SE/mini), 320. **Modes:** light and dark; EN off and on; furigana on and off; both books (N1 routes take the `n1:` prefix in the tools).

### 4.1 Pass criteria (every route × width)

1. `scrollWidth === clientWidth` with EN on and off; probe `vp` and `clip` empty.
2. At ≤900 with a coarse pointer, every interactive element's hit box is ≥44×44 (`--touch`).
3. Body text ≥16px (15.5 allowed ≤390 for Gothic UI), inputs ≥16px.
4. Furigana probe clean: no reading off-centre, covering text or a box, clipped, or uneven line pitch (`--furi`, and in real iOS Safari via `wkshot.mjs --probe`).
5. No console errors; home → chapter → `#/gp/N` → review jump all land below the topbar.
6. Dark: no white panels; tags, curl, band and pills use dark tokens; theme switch applies without reload and survives reload without a flash.
7. Keyboard: Tab reaches every control in order, focus ring visible, the drawer traps focus, Esc closes popover then drawer, Enter/Space work on inline options.

### 4.2 Route matrix

| Route | 1280 | 768 | 390 | 375 | Checks |
|---|---|---|---|---|---|
| `#/` | ✓ | ✓ | ✓ | ✓ | card grid 1 column ≤600; drawer shows the page links |
| `#/ch/1` | ✓ | ✓ | ✓ | ✓ | C1 banner; C3 edge tab at 1280 only; C4 bullets; C6a notice (keys aligned, pay cells under 7時〜 / 1,000円〜, URL under ☎); C7 black stars; C8 icon-only scene; C10 prefix brackets (gp 3/4/6) and suffix brackets (gp 5/7/8); C12 hanging ①; C13 paperclip; C14 Plus tag on the border (gp 7); C15 ☞ right, 関連 line separate; C19 inline options; C20 dots ≥701 / reference box ≤700; C21 one dashed Check frame, banks below the items, numbering 1–8 |
| `#/ch/1/review` | ✓ | ✓ | ✓ | ✓ | C23 capsule (English on its own line ≤600); 問題1 4 columns at 1280, fewer at 390; 問題2 slots with ★; 問題3 dashed passage, boxed blanks, option rows; 問題4 CD badge right, question not printed |
| `#/ch/2` | ✓ | ✓ | ✓ | ✓ | split chapter: "（1）" banner + "（2）" part banner; speech paragraphs grouped by `cont`; ring-less frame in part 2; reading options fit |
| `#/ch/2/review` |  | ✓ | ✓ | ✓ | 問題4 header once with sub-instructions 1 and 2; response "1 2 3" buttons |
| `#/ch/4` | ✓ |  | ✓ | ✓ | news prose paragraphs, 1em indent |
| `#/ch/5` | ✓ | ✓ | ✓ | ✓ | dialogue: colons aligned, hanging text |
| `#/ch/8`, `#/gp/73` | ✓ | ✓ | ✓ | ✓ | band keeps ★★★ and icon visible; keigo tables with dark headers, notes right ≥701 / below ≤700; "＊1" not doubled |
| `#/ch/10` | ✓ | ✓ | ✓ | ✓ | 縦 at 1280 (auto), 横 at 768/390/375; 縦/横 toggle and ⚙ setting persist; tcy digits; scroller starts at the right edge, page never scrolls sideways; square `[Pl]`; strikes visible over badges |
| `#/ch/11` | ✓ |  | ✓ | ✓ | article: no rings, centred headline, credit right |
| `#/ch/13` | ✓ | ✓ | ✓ | ✓ | vertical story both parts; "〜〜〜" separator; English block below the scroller |
| `#/ch/14` | ✓ | ✓ | ✓ | ✓ | editorial masthead "社説" boxed + large vertical headline, single tier |
| `#/ch/12` |  |  | ✓ | ✓ | listening grids fit |
| `n1:ch/4`, `n1:ch/5` | ✓ |  | ✓ |  | tall vertical text grows its columns before scrolling; drama script with speaker heads; N1 English all "generated", clip notes before やってみよう |
| `#/guide` | ✓ |  | ✓ | ✓ | legend badge shapes (circle N/V, pill V-x, square Pl), scene icons with labels |
| `#/about` | ✓ |  | ✓ |  | front-matter tables fit; book English grey, generated English tagged |
| `#/index` | ✓ |  | ✓ | ✓ | search 16px; stacked table ≤600 |
| `#/compare` | ✓ |  | ✓ | ✓ | stacked cards ≤600 |
| `#/cando` | ✓ |  | ✓ | ✓ | stacked table ≤600 |
| `#/drill` | ✓ |  | ✓ | ✓ | framed exercises, width-fitted grids, "New set" works |

### 4.3 Interaction checks (390 and 1280)

- **Grading:** every type grades and resets: inline choice, grid choice, parts (a)/(b), match letters, tap-to-fill (incl. paired "やら・やら"), write, ★ order, passage, reading, listening task / summary / gist / response. Scores keep their exercise ids.
- **EN:** the switch and **E** show all English; per-line EN (≥601) and scoped EN (≤600) toggle only their scope; generated English carries its tag, book English doesn't.
- **Theme:** Auto follows the system live; Light/Dark override it; no flash on reload.
- **TTS:** CD badges play 見本文 (vertical too) and listening items; `.speaking` visible; pressing again stops.
- **Drawer:** opens and closes, locks scroll, closes on navigation and when widening past 900.
- **Furigana off:** nothing jumps; notice columns stay aligned.

---

## 5. Measurement tools

All need the site served on `:8765` (`python3 -m http.server 8765`) and Node ≥22; routes are hashes without `#/` (`""`, `ch/1`, `ch/2/review`, `gp/73`), prefixed `n1:` for N1.

| Tool | Use |
|---|---|
| `node tools/shot.mjs ROUTE [W=1280] [H=900] [OUT] [light\|dark] [--full] [--en] [--touch] [--dpr=N] [--y=PX] [--drawer]` | screenshot with true device emulation (`mobile` below 700px, so 320–499px widths are real, unlike a plain `--window-size`) |
| `node tools/overflow.mjs ROUTE [W=390] [--en] [--touch] [--dark] [--furi]` | prints `{vw, docW, vp, clip}`: `docW > vw` = sideways scroll; `vp` = outermost elements past the viewport; `clip` = elements poking out of a component frame (`.gp .sample .exercise .check .tbl …`), even when hidden. `--touch` lists tap targets under 44×44; `--furi` adds the furigana probe |
| `node tools/lib/wkshot.mjs DEVICE ROUTE[,ROUTE…] [OUTDIR] [--pages=N] [--probe] [--en] [--nofuri] [--sel=CSS] [--dark]` | real iOS Safari (simulator, via safaridriver / `tools/lib/wd.mjs`) screenshots and furigana probe: Chrome emulation does not reproduce WebKit ruby and line-box behaviour |
| `tools/simshot.sh DEVICE ROUTE [OUT]` | quick viewport screenshot in simulator Safari |
| `tools/lib/furi-probe.mjs` | the in-page furigana probe shared by overflow.mjs and wkshot.mjs (off / hit / clip / uneven) |
| `node tools/render-dump.mjs n1\|n2 [--html] > /tmp/x.txt` | dump the rendered text (or normalised markup) of every route; diff before and after a renderer or layout change to prove nothing was added, dropped or reordered |
| `node tools/text-snapshot.js [n1\|n2] \| diff tools/<book>/text-baseline.txt -` | proves no book text changed in the data (layout-only fields ignored) |
| `node tools/check.js [n1\|n2] [CHAPTER…]` | structural validation of `data/<book>/chNN.js` after data edits (layout hints included) |
| `tools/zoom.sh [n1\|n2] PAGE [STRIP]` | 300-dpi strips of a book page, for reading the scan's layout and small furigana |

`tools/lib/cdp.mjs` is the shared headless-Chrome helper (`open({route, width, height, scheme, wait, mobile, touch})`); `tools/lib/books.js` is the shared Node loader for the data files.
