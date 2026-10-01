# Layout: how the site mirrors the books

Design reference: the books' visual language, tokens, furigana, responsive rules, each component with its book source (C1–C30 TRY chapter content, C31 the shared shell, C32 Quartet), QA and measurement tools. Page references in C1–C31 are N2 printed pages (= PDF pages); in C32 Quartet book pages. Data fields: `data/SCHEMA.md` (TRY), `data/Q2-SCHEMA.md` (Quartet). Exact CSS values live in the stylesheets.

| Concern | File |
|---|---|
| Data registry, theme before first paint | `assets/js/boot.js` (classic script) |
| Book meta, settings, progress, `$`/`$$`/`esc`, `ACT` registry, `TTS`, `WIDE` | `assets/js/core.js` |
| Furigana: `rubyMarkup()`, `rubyHtml()`, `fitRubies()` | `assets/js/ruby.js` |
| `fmt()`, badges, English layer (`en`, `bi`, `biInner`, `enSrc`, `enScopeBtn`), `pill`, `cdBadge`, `speakBtn`, `stars`, `marks`/`scenes`, `gpLink` | `assets/js/markup.js` |
| C1–C17 (`chapterView`, `bannerHtml`, `gpCard`, `formulaHtml`, `sampleHtml` …) | `assets/js/content.js`, `assets/css/content.css` |
| C18–C29 (`renderExercise`, `optGroup`, `fitOptionCols`, `checkHtml`, `reviewHtml`, grading) | `assets/js/exercises.js`, `assets/css/exercises.css` |
| Home and pages (`homeView`, `guideView`, `aboutView`, `indexView`, `compareView`, `canDoView`, `drillView`) | `assets/js/pages.js` |
| C30–C31: shell (`shellHtml`, `shelfHtml`, `sidebar`), router, drawer, settings, events, TRY adapter | `assets/js/main.js`, `assets/css/shell.css` |
| 単語 lists and drill; flashcards shared with Quartet | `assets/js/vocab.js`, `assets/js/flash.js` |
| C32: Quartet adapter and views · blocks · 別冊 lists, indexes, drill | `assets/js/q2/nav.js` · `blocks.js` · `lists.js`, `assets/css/q2.css` |
| Tokens (light, dark), reset, type, English layer, primitives | `assets/css/base.css` |

Which files each route loads is in CLAUDE.md ("Data loading"). `route()` calls `need(h)`, which loads the files the adapter's `needs(h)` names and are not yet loaded, then renders; a failed file is reported on the page. After every render `layout()` (main.js) runs `fitOptionCols()`, `fitRubies()`, `vtScrollInit()` and the adapter's layout pass. `fitOptionCols()`, `fitRubies()` and the adapter pass run again after `data-act` clicks, `<details>` toggles, font load and width changes (a height-only resize is skipped); `vtScrollInit()` again only on width changes.

## 0. Design language

### 0.1 What the books look like

- TRY: black and greys only. Structure comes from grey bands, dark rounded pill labels, thin rules, dashed frames, circled or boxed numerals; content is never in coloured cards.
- Gothic for the apparatus (headings, pills, どう使う？, ＊ and 📎 notes, instructions, answer numerals, English); Mincho for book text (見本文, examples ①②, exercise sentences, passages, options). Targets in 見本文 are bold Gothic.
- N2 prints its English under the Japanese in smaller grey Gothic. N1 (Chinese edition): all English is ours.
- Leading about 2.0, since nearly every line carries furigana.

### 0.2 Design tokens (`base.css`)

Components use tokens, never literal greys; literal `#fff` only as text on a fill that stays dark in both themes (banner, keigo header, picked numerals). Every token has a dark value.

| Token | Use |
|---|---|
| `--bg` `--panel` `--ink` `--ink-2` `--ink-3` `--line` | page, frames, text levels, hairlines; `--ink-3` ≥4.5:1 on `--bg`/`--panel` in both themes |
| `--goth` (= `--jp`), `--mincho` (= `--serif`) | Hiragino first, then the Noto webfonts (loaded non-blocking) |
| `--band`, `--band-edge`, `--banner` | grammar-point band, table header tint, active nav row; its thick left bar, keigo header; chapter opener |
| `--pill` `--pill-top` `--pill-ink` `--pill-shadow` | pill gradient, text, offset shadow |
| `--rule`, `--note-bg`, `--badge-bg`/`--badge-ink`, `--review-bg` | frames and rules, 📎 fill, POS badges, まとめの問題 tint |
| `--accent` | `**target**` highlighting and the playing 🔊 (`.speak`, `.btn.play`) |
| `--teal` / `--teal-on` | links, focus, primary buttons, picked answers / text on a teal fill |
| `--ok` `--ng` (+ `-soft`) | grading |
| `--en-book`, `--en` / `--en-soft` | book English; generated English, active EN buttons |
| `--bk-n2` `--bk-n1` `--bk-q1` `--bk-q2` / `--bk-on` | book hues, shell only (C31) |
| `--top` (56; 52 ≤600; 48 landscape phone), `--sbw` (260; 280 ≥1200) | topbar height, sidebar width |
| `--main-pad` (28; 20 ≤900; 14 ≤600; 12 ≤390) | main side padding; full bleed = `calc(-1 * var(--main-pad))` |

### 0.3 Type

| Role | ≥601 | ≤600 | ≤390 |
|---|---|---|---|
| Gothic UI body | 16px / 1.9 | 16px | 15.5px |
| Book text (Mincho, `.ja-book`, line-height 2.0) | 17px | 16.5px | 16px / 1.95 |
| Book / generated English | 13.5 / 14.5px | 13.5 / 14px | same |
| Banner title / numeral | 32 / 96px | 24 / 60px | 21 / 52px |
| Grammar-point title | 22px | 19px | 17.5px |

- Body `line-break: strict`. Book text is ragged (`text-align: start`) at every width, horizontal and vertical: WebKit spreads a justified line around every `<ruby>`.
- Headlines (`.sample__headline`, `.vt-title`, `.vt-label`, `.nt-heading`) break only at the book's spaces (`word-break: keep-all; overflow-wrap: anywhere`).
- Every `<input>`/`<select>` is ≥16px at ≤900 or under `pointer: coarse` (no iOS zoom on focus).

### 0.4 Shared primitives

| Primitive | Markup | Book look |
|---|---|---|
| Pill | `pill(html)` → `span.pill` | dark rounded capsule, white bold Gothic, shadow below-left (pp.18–20, 27) |
| Boxed / paren number | `span.qn.qn--box` / `.qn--paren` "1）" | thin wide rectangle, Mincho (pp.27–28) / plain, hanging (pp.19, 26) |
| Answer numeral | `.opt-n` | bold Gothic 1–4; "a." in practice, "a）" in matching |
| CD badge | `cdBadge(queue, label)` → `button.cd-badge[data-act=listen]` | headphone "CD" top-right of 見本文 and listening items (pp.18, 29, 102); `.speaking` inverts |
| 🔊 | `speakBtn(text)` → `button.speak[data-act=speak]` | web only; negative block margin so it never grows the line |
| Bilingual line | `bi(o, tag, cls, {book})` → `div.bi > .ja + .en` | English under the Japanese |
| Stars, circled numbers | `stars(n)`, `CIRCLED` | solid black stars; Mincho ①… |

`fmt()` markup is listed in `data/SCHEMA.md`; `fmt(s, {vertical: true})` also wraps standalone 1–2 digit runs in `.tcy` (縦中横). `plain()` strips all markup (speech, search, titles).

### 0.5 English layer and EN buttons (`markup.js`, `base.css`)

Which English is the book's is defined in CLAUDE.md; `enSrc(o, book)` returns `book` only when `bookLang` is `"en"` and the object has no `gen: true`. Book English: `.en.en--book`, grey Gothic. Generated: `.en.en--gen`, blue with an outlined "generated" tag (`::after`; `.gen-tag` on deep-dive summaries and generated table headers). UI text: untagged `.en` or `.en-inline`.

- Always visible, as in print: the chapter banner's genre/title English and the review capsule's "Review questions".
- All other English is hidden until shown by the topbar EN switch (key E, `body.show-en`); a per-line `.en-btn` (`data-act=en`, `.en-open` on its `.bi`) in a right gutter at ≥601 (absolutely placed, never floated; hidden ≤600); or a scoped `.en-btn--scope` (`data-act=en-scope`, `.en-all` on `closest("[data-en-scope]")`) on 見本文, point, clip note, Plus, can-do, exercise, Check, review section, passage and pages. Where per-line buttons exist the scoped one shows only at ≤600.
- Feedback and transcript English appear only after grading / with the transcript open.

### 0.6 Theme

`settings.theme` = `auto | light | dark` (in `n2.settings`). `boot.js` sets `<html data-theme>` before first paint; `auto` follows `prefers-color-scheme` live; `applySettings()` calls `TRY.applyTheme()` on change. Dark tokens sit in `:root[data-theme="dark"]`; components never use `prefers-color-scheme` directly. Dark check-points: the 見本文 curl, Plus and Check tags (they paint `--bg` over their frame line), the review band, pills.

## 1. Furigana (`ruby.js`, `base.css`)

Data `{漢字|かな}` → `rubyMarkup()` → native `<ruby>base<rt>reading</rt></ruby>`, horizontal and vertical. `rt` is `.5em` (`RT_K = 0.5` in ruby.js must match). TRY sets readings over the text; both Quartet books under it (q2.css).

- Line-height ≥1.9 on any block with ruby (2.0 for book text) so readings sit in the leading. With Noto's tall ascent WebKit makes ruby lines ~4px taller, hence Hiragino first.
- Overhang (JIS X 4051): a reading wider than its base may overhang a kana or punctuation neighbour, never a kanji or another reading, by up to .5em (.375em when that kana also takes another overhang). `rubyHtml()` writes `data-e`, `data-ol`/`data-or` and first-guess margins; `fitRubies()` measures against the neighbouring glyph on the same line and corrects them in px, since engines differ. Only glyphs in the same inline formatting context count.
- Start-aligned `ruby.r-s` right after another reading and for the first ruby on a line (`data-ls`, set by `fitRubies()`): the reading starts at its base and overhangs to the right.
- Group reading (熟語ルビ): adjacent readings where one is wider than its kanji merge into one ruby over the compound.
- `ruby { white-space: nowrap }`: Blink would otherwise split a base across lines with a slice of the reading each.
- Furigana off (`body.no-furi`): `rt { visibility: hidden }`, so nothing reflows.
- Never emulate ruby with inline-block spans (taller lines, unbreakable multi-kanji boxes, kana pushed apart).
- Sidebar, mini-TOC chips, pager and `.gp-pattern` hide `rt`.

## 2. Screens

### 2.1 Targets

320 px phones to desktop, light and dark, EN on and off, furigana on and off; no horizontal overflow; touch targets ≥44 px under `pointer: coarse` (§3).

### 2.2 Breakpoints

| Query | Layout |
|---|---|
| ≥1200 | sidebar 280px; fixed side-tab (with `hover: hover`) |
| ≥901 (`WIDE`) | desktop: sticky sidebar; 縦書き in auto mode |
| ≤1100 | Quartet page markers hidden, note ★ inline |
| ≥740 / 430–739 / ≤429 | book switcher: names / codes / the current code opening the book menu |
| ≤900 | drawer + ☰, short switch labels |
| ≤700 | matching and keigo tables one column |
| ≤600 | full-bleed banner, 見本文 and review band; scoped EN; stacked tables; mini-TOC collapsed |
| ≤480 | brand hidden |
| ≤390 | smaller type steps (0.3) |
| `max-height: 500px` landscape | `--top` 48 (controls stay 44) |
| `prefers-reduced-motion` / `hover: hover` | no transitions / hover styles only here |

## 3. Overflow, sticky, touch

### 3.1 No horizontal overflow

- `html, body { overflow-x: clip }` (clip keeps sticky working). It hides regressions; the probe (§5) must stay clean.
- Every flex/grid child holding text gets `min-width: 0`.
- Never `display: inline-flex` on content mixing text and `<ruby>` (each run becomes an unbreakable item); wrap the text in a child (`.opt-t`) and use grid or block.
- `white-space: nowrap` only on numerals, stars, badges, labels. URLs and e-mails get `overflow-wrap: anywhere`.
- The only horizontal scroller is `.vt-scroll` (`overscroll-behavior-x: contain`).

### 3.2 Sticky and fixed

Sticky: topbar (all widths), sidebar (≥901); nothing else, since sticky bars eat phone height. `scroll-margin-top` on `main *` lands `#/gp/N` and review jumps below the bar; jumps within the chapter on screen keep the DOM (`sameChapterJump()`). Fixed: side-tab (≥1200, hover), drawer and scrim (≤900), ⚙ popover (≤900). `viewport-fit=cover`; topbar, main, drawer and footer pad with `env(safe-area-inset-*)`.

### 3.3 Touch targets (≥44px under `pointer: coarse`)

Inline boxes in running text never enlarge the line box: blanks and inputs are 1.4–1.45em tall with `vertical-align: text-bottom`, badges 1.45em; the tap area comes from transparent `::after` or padding.

| Control | Hit area |
|---|---|
| ☰, ⚙, `.switch`, book switcher, `.cd-badge`, `.btn`, sidebar rows, `.mt-gp`, `.seg__b`, `.opt--grid` `.opt--let` `.opt--resp` `.chip`, `.script`/`.deep` summaries | 44 box |
| `.en-btn` (36×32), `.speak` (32) | `::after` 44 |
| `.opt--inl` | vertical padding with `background-clip: content-box`; centred 44px `::after` for one-kana options |
| `.slot`, `button.blank` | `::after` inset −10px (blank ≥44 tall) |
| `input.write` | padding cancelled by negative margins; the rule is a content-box background |
| `.studied` | transparent native checkbox over a 22px drawn box |
| `.gp-link`, table links | padding; table links inline-block (never inline-flex) so ruby keeps its overhang |
| `.pager a`, `.bk-card` | ≥56 / ≥60 |

## 4. Components

Each entry: book (pages) → web → responsive.

**C1 Chapter opener banner** (pp.18, 30, 62, 72, 103, 122, 148, 160, 188, 205). Full-width mid-grey band: huge white numeral with faint concentric arcs; genre + English on line 1; title with white furigana and the English title on the same baseline (a long one drops to its own line); split chapters carry "（1）". Web: `bannerHtml()` → `header.ch-banner` (numeral · body · inline tab chip C3); the arcs are two `radial-gradient` rings; bleeds to the column edge; `text-wrap: pretty` on the title. ≤600 square corners, bleeds to the viewport, chip under the title.

**C2 Part banner "(2)"** (p.38). As C1, `.ch-banner--part` (`h2`), with its own できること and 見本文.

**C3 Side-tab "1〜8"** (pp.19, 21, 103, 153, 205). Rounded thumb tab on the outer edge with the chapter's point range in vertical text, stepping down by chapter. Web: `tocTab()` renders `.ch-tab--edge` (fixed, offset by `--ch`) at `(min-width:1200px) and (hover:hover)`, else `.ch-tab--inline` in the banner; `ACT.toc` opens the mini-TOC.

**C4 できること** (pp.18, 30, 38). Pill, then a list with ● bullets, Gothic, English aligned with the text, no box. `canDoHtml` → `section.cando[data-en-scope]`.

**C5 Mini-TOC** (web only). `details.mini-toc` "この章の文法 1〜8（8）" with wrapping chips `.mt-gp`, `.mt-part`, `.mt-review`; open at ≥601, collapsed ≤600; never a horizontal scroller.

**C6 見本文 frame** (pp.18, 30, 62, 72, 103, 122, 148, 153, 188, 205). White rectangle, thin grey border, square corners, binder-ring holes along the top, CD badge top-right after the last hole, folded curl bottom-right, no label. Some frames have no holes (p.38; `sample.rings: false`); the article (p.160) has a heavier border and no curl (`kind-article`). Web: `sampleHtml()` → `section.sample.kind-<kind>[data-en-scope]` with sr-only `h2` "見本文" and `.sample__tools` (縦/横, scoped EN, CD badge queuing heading and lines with their voices). Rings: `.sample--rings::before`, one hole tiled with `background-repeat: space` (count adapts to width); curl `.sample::after`. Dispatch: `vertical` → C6e, `notice` → C6a, `dialogue` → C6c, else headline C6d + prose C6b.

- **C6a notice** (ch1, p.18). Outlined heavy Gothic heading, centred lead, form rows "仕事▶" with Mincho values, continuation and ＊ lines indented to the value column, pay lines tabulated under the time and wage columns, contact block aligned under ☎. `noticeHtml` heuristics (override with `line.style`): lines before the first ▶ row → `.nt-lead`; `/^(.{1,12}?)▶(.*)$/` → `.nt-row` key/value; other lines → `.nt-cont` (`.nt-star` hangs ＊); a value with ≥2 full-width spaces → `.nt-cells`, later lines with fewer cells start at the matching column; from the first ☎ / http / E-mail line → `.nt-contact`.
- **C6b prose** (pp.30, 38, 62, 103). Mincho paragraphs, 1em indent, no blank lines. `paragraphs()` groups the data's one-sentence lines (`cont`), separators (`〜〜〜` / `style: sep`) and credits (`（文：…）` / `style: credit`); one English block per paragraph; a paragraph opening with 「 is not indented (`.prose__p--q`); `style: note` → small ※ line.
- **C6c dialogue** (pp.72, 122). Names right-aligned so the full-width colons line up; turns hang after the colon. `.dlg` grid name · colon · body, `--spw` = longest name (min 2em); narration rows span; `.dlg--wide` (names >4em) stacks at ≤390.
- **C6d article** (p.160). Centred bold headline (`text-wrap: balance`), prose as C6b, credit right-aligned.
- **C6e vertical** (essay pp.148, 153; story pp.188, 195; editorial p.205; N1 ch1, 3, 4, 5 (drama), 8). 縦書き Mincho, right to left, furigana right, 2-digit numbers upright; editorial masthead "社説" ruled above and below with a large vertical headline; story "〜〜〜〜" scene breaks. Web (`verticalHtml`, `sample.vertical`): vertical when `verticalOn()` (`settings.vertical` "v", or "auto" at ≥901), else horizontal (`.vt--h`, `.is-h`; C6b/C6c, masthead as a centred row). `div.vt-scroll > div.vt.ja-book` in `vertical-rl`; the editorial heading splits at the first full-width space into `.vt-label` and `h3.vt-title` (`header.vt-mast`) and is set in one tier (multi-column in `vertical-rl` is unreliable). Drama: `.vt-dlg > .vt-sp + .vt-say`, lines without a speaker `.vt-dir`. English is one horizontal `.vt-en` block below (no per-line EN/🔊). `.vt-scroll` opens at its right edge without JS; `vtScrollInit()` grows the columns in 2em steps (to 80vh / 44em) when the text is a little too wide, and sets `.has-more` (left-edge fade). The 縦/横 control (`.seg__b[data-act=vmode]`) and ⚙ → 縦書きの文章 call `setVertical()`, which persists and rebuilds in place (keeping `.en-all`); in auto, crossing 901 rebuilds. Place: `keepPlace()` (core.js) puts the clicked text, else the block being read, back where it was on screen after the rebuild and after the fit pass; a resize restores the block recorded when scrolling last stopped (main.js `snap`), since the browser has already relaid the page when resize fires. Quartet (C32) the same, re-rendering the view; a 縦書き text read 横 reflows to the box width.

**C7 Grammar-point band** (pp.19–25, 30, 72, 123, 148). Light-grey band, lighter to the right, thick dark left bar, darker bottom rule; number in heavy serif, the heading phrase from the 見本文 in bold Gothic with furigana, solid stars at the right. The generic pattern is not printed; points are not boxed. `gpCard` → `article.gp#gp-N > header.gp-bar` (number · `h3` `g.phrase || g.pattern` · stars), web-only `.gp-pattern` under it when a phrase is shown; `minmax(0,1fr)` + `overflow-wrap: anywhere` keep the stars in place.

**C8 どう使う？ and scene icons** (pp.6, 19–25). Pill at the left; at the far right usage-scene icons in rounded squares, no text: casual, formal (crossed out), polite, regret, praise. `.gp-use` = pill + `scenes(g.marks)` + scoped EN; `span.scene.scene--<m>[role=img]` with an SVG from `MARKS`; its `.mark-l` label is hidden in `.scenes`, shown in the guide legend and about page.

**C9 Usage.** Gothic medium, book English below, no box: `bi(g.usage, "p", "usage", {book: true})`.

**C10 Connection formula** (pp.19–25, 30, 38, 148, 153, 196; legend pp.8–9). Grey badges: N, V circles; いA, なA short pills; V-る/V-ない/V-Pl rounded pills; Pl, Po square boxes; subscripts N₁; struck endings ("V-~~ます~~"); "+" with space. Alternatives in a thin bracket: common head → a left bracket stacks the tails; common tail → the heads stack in a right bracket. Sub-conditions in small bracketed lines under the formula or under each badge. No box. Web (`formsHtml` → `formulaHtml`): forms split on "+" by `splitTop()` (outside ［…］ and （…））; `［A　B］` → bracket stack `.fx-br`. Cases: one form `.fx`; every head × every tail `.fx--x` (N1 p.17); shared head `.fx--pre`; shared tail `.fx--suf`; else stacked rows; sub-lines `.fx-sub`, or per badge `.fx--under`/`.fx-col`/`.fx-u` (`.fx-col--hang` runs under the next "+"); forms with " → " → C16. `badgeHtml()` / `BADGE_RE` (N V いA なA A Pl Po 文 数, subscript, `-form`, struck ending) → `b-round` / `b-pill` / `b-sq`. A strike around a badge is a background gradient (text-decoration does not reach inline-blocks).

**C11 ＊ notes** (pp.19, 22, 38, 72). Small Gothic, hanging ＊, English below. `fnotesHtml` → `p.fnote.bi`; a note already starting "＊1" keeps its own mark.

**C12 Examples ①②** (pp.19–25, 123). Mincho, circled numeral flush left, hanging continuation; "A：/B：" turns align; an idiom gets a chain-link glyph (legend p.7). `examplesHtml` → `ol.exs.ja-book > li.exs__i.bi` (numeral · text with `.idiom`, `.exs__foot` ※ footnote, English · tools); `A：` lines → `.exs__turn`; `nonum` drops the numeral.

**C13 📎 Clip note** (pp.7, 20, 21, 122). Light-grey rounded box, paperclip over the top-left corner, Gothic text, English, examples, its やってみよう, a ☞ line inside. `notesHtml` → `aside.clip[data-en-scope]` with `svg.clip__icon`. Order against やってみよう: N2 after, N1 before (`book.notesFirst`; per point `g.notesFirst`).

**C14 ＋Plus box** (pp.7, 25). Thick grey border, "✚ Plus" tag breaking the top border at the left, heading row (pattern, stars, scene) over a dotted rule, then usage, English, examples. `section.plus` with `span.plus__tag` (`--bg` behind it).

**C15 ☞ and related links** (pp.7, 19, 21, 25). The book's ☞ is right-aligned at the end of a block ("☞ p.224 〜につき"). `xrefHtml()` prints only the book's reference as `p.xref`; our links (`g.see`, the compare group) go on a separate small grey `p.gp-rel` "関連 Related" line so they can't be taken for book text. ≤600 both left-aligned.

**C16 Keigo tables** (p.123, gp 73). Two stacked two-column tables (意味 | 尊敬語, 意味 | 謙譲語), dark header with white text and furigana, ruled rows, alternatives on separate lines, ＊1–＊3 notes to the right. `kvTableHtml`: a form with " → " switches to tables; a row keyed 意味 starts a table as its `thead`; "／" → line break; trailing "＊n" → `sup.kv-ref`; ≤700 notes below; fits 375 without scrolling.

**C17 Web-only extras.** `details.deep` "📘 English deep-dive" + `.gen-tag` after the examples; `.gp-foot` with `label.studied` (`data-act=studied`, saves `progress.studied`).

**C18 やってみよう！ header** (pp.19–25). Pill left, "▶答え 別冊P. 1" right, items unframed. `renderExercise()` → `section.exercise.ex-<type>[data-ex=id]`: `.ex-head` (pill; `.ex-ref` score chip + scoped EN), `.ex-prompt`, `.ex-body`, `.ex-actions`; framed only on the drill page. Exercise ids are progress keys and must stay stable: `gpN-pJ`, `gpN-nK-pJ`, `gpN-plusK-pJ`, `chN-partP-check[-k]`, `chN-review-K`.

**C19 Inline choice "（a. … b. …）"** (pp.20–24). Options printed inside the sentence's parentheses, wrapping naturally. `optGroup(…, "inline")` when labels are letters and there is exactly one "（　）" per option group (or "（ a ）" for `parts`), else the grid (C24). Options are `span.opt.opt--inl[role=button][tabindex=0]`, not `<button>` (an atomic inline-block would break the sentence's lines), and keep the 2.0 line-height; a word joiner keeps "b." with its text.

**C20 Matching "1）… ・　・ a）…"** (pp.19, 23–25, 196). Two columns with dots and a 4–6em gutter. `matchBody` → `.match__row`: left `choice-q` with letter buttons · `.match__gap` (echoes the pick) · `.match__r`. ≤700 the right column shows first as `.match__ref`, then the left items.

**C21 Check, word bank, tap-to-fill** (p.26). Heavy dashed frame, "Check" + open-book icon on the top border, items with long blanks, each group's word bank in a thin box after it, numbering continuing in one frame. `checkHtml()` → `section.check` with `.check__tag`. `fillBody`: `button.blank[data-act=blank]` and a `.bank` of `button.chip[data-act=bank]`; tap a blank to make it active, a chip fills the active or first empty blank, tapping a filled blank clears it; paired answers ("やら・やら") mirror into `.blank--mirror`; `write` with `bank` shows `.bank--static`.

**C22 Write-in.** `input.write`: bottom border only, Mincho `max(16px, 1em)`, `vertical-align: text-bottom`.

**C23 まとめの問題 headers** (pp.27–29, 101–102, 170). Grey-tinted page, content on a white rounded panel, dark capsule "まとめの問題" + "Review questions"; each section a pill "問題1" + bold "〈…〉" title and a Gothic instruction with "（　　）", "＿★＿", boxed numbers; a two-part 問題4 prints its header once, then "1 …", "2 …". `reviewHtml()` → `section.review` (full-bleed `--review-bg`) > `.review__panel` > capsule and one `section.rv` per 問題N; `fmtInstr()` turns `[n]` into `.pblank`, "＿★＿" into `.star-blank`; a title repeating the previous 問題N becomes `.rv-sub`.

**C24 問題1 option grid** (p.27). Four options in four equal columns under the sentence; long ones 2×2 or one per line. `.opts--grid[data-w]` of `button.opt--grid` (`.opt-n` + `.opt-t`); `data-w` = widest option (`optW()`); `fitOptionCols()` picks 4, 2 or 1 columns so no short option breaks inside a word. Grid options stay grid (§3.1).

**C25 問題2 ★ ordering** (pp.27–28, 101, 170). Four underline blanks, ★ centred on the star blank, options below. `orderItem`: `.order-line` with `button.slot` (`.slot--star`), pieces `button.piece`.

**C26 問題3 passage cloze** (pp.28, 56, 101). Dashed rectangle around the passage (1em indent; 「 or 『 openings unindented), boxed-number blanks, one option row per blank. `textBlock` + `passageBody`: `div.passage`, `[n]` → `.pblank` (kept with punctuation by `.nobr`), `.pq-row` rows; a pick fills its blank.

**C27 問題3 reading** (pp.57, 101–102, 170). Dashed passage; options stacked, or in columns when short (N1 p.57). `readingBody`: `choiceItem` with `mode: "noinline"` (always the fitted grid).

**C28 問題4 listening** (pp.29, 102). Boxed number, options (list or 2×2), CD badge at the right of the first row; the question is not printed; response items print only "1　2　3", gist items nothing. `listeningBody` → `.lq-row` number · options · CD; response uses `.opts--resp` round numeral buttons. The question opens the `details.script` transcript and shows in the feedback after grading.

**C29 Grading** (web only). Picked: teal numeral fill (grids) or teal tint + underline (inline). Right `--ok`; wrong `--ng` with the text struck, not the numeral. After grading `.qn` fills green or red and `.feedback` shows the full sentence, our English and `why`. `.score-chip` in `.ex-ref`; scores saved per exercise id.

**C30 Pager.** The book's running footer becomes `nav.pager`: two equal cards, next right-aligned; ≤390 one column, next first.

### C31 Shell and pages

One shell for all four books; the per-book part is an adapter (TRY in `main.js`, Quartet in `q2/nav.js`).

- Book hues (`--bk-*`: N2 amber, N1 violet, Q1 magenta, Q2 blue; Q1/Q2 follow the books' accents) mark the current book in the switcher, book menu and shelf only, never in TRY content.
- Shelf (`shelfHtml`, top of each home): the four books with code, name, Japanese title, description, progress and 続きから Continue. A card opens its book where the reader left off (home if never opened); the current book's card without a saved place is not a link. Phones: two compact cards a row. A labelled `section` with a `p` title, since it precedes the page's h1.
- Continue: `n2.resume` = `{ n2: { h, t, done, total }, … }`, written by `trackResume()` 400 ms after a route change, scroll or progress change. `h` = the point / note / strategy / review whose top is in the upper third of the screen (`gp/24`, `gn/8-3`, `st/11`, `ch/3/review`), else the chapter / lesson / list route; `t` its label. Home and pages are not saved. `done/total` let other books' cards show progress without loading their data.
- Topbar (`shellHtml`, sticky, translucent): skip link · ☰ · brand · book switcher (≤429 a `details.pop` opening `.book-pop` with `.bk-row` rows, filled on open) · ふりがな / EN switches (`role=switch`, keys F and E) · ⚙ popover (theme, speech rate, vertical texts, keys, reset). Popovers close on outside click and Esc (focus returns to the summary). `.topnav` is in the markup but hidden (`body.nav-sb`).
- Page links `.sb-pages` (every book, `body.nav-sb`): ホーム then the book's pages, two columns at the top of the sidebar / drawer.
- Sidebar (`sidebar()`): chapter rows `.sb-ch-link` with progress; the open chapter lists its points `.sb-gps` and review; the active point has a `--band-edge` inset bar; own scroll at ≥901.
- Drawer (≤900): `width: min(86vw, 320px)`, `body.sb-open`, scrim, page scroll locked, focus trapped (`trapDrawerFocus`), closes on Esc, navigation and widening past 900.
- Pages: `.tbl`; ≤600 `.tbl.stack` (index, compare, can-do) become cards with `td[data-h]::before` labels; front-matter English rows `.tbl-en` show with EN.
- 単語 (`vocab.js`, web only): chapter and level chips `.vc-seg` wrap; 全部 lists light rows `.vc-row` (word · reading · level · first sense · chapter) linking to cards `vocab/N/i` (all cards at once would be ~50 000 nodes). A card `.vc` always shows the kana reading and the definition `.vc__def` (generated colour and tag), our examples and the book sentence `.vc-ex--book` with a ☞ link. Drill: flashcards (`flash.js`) or a 4択 set built as a choice exercise (reading/meaning questions `mute`).
- `main`: 800px measure, about 44 characters at 17px, close to the book's.

### C32 Quartet (`assets/js/q2/`, `q2.css`; both books)

Most Quartet rules are commented next to the CSS in `q2.css`. These are easy to break:

- Accent `--q` for text and rules, `--q-fill` (≥4.5:1) under white text, `--q-on` as text on accent fills (dark in the dark theme). Q1 magenta via `body[data-book="q1"]`, Q2 blue.
- Numbered underlines `.ref-n`: number below the rule at the underline's start; `placeRefNos` (layout pass) moves it under the first line when the underline wraps; 縦書き: right of the rule's top.
- Headings with a number or step tag keep the title beside the tag when wrapping (`.hd-t { flex: 1 1 0 }`). A practice dialogue in a grey box has no panel of its own (`.qbox--gray > .qdlg`).
- Q1 part badges `[#パートA]` (filled) / `[#パートB]` (outlined): inline in ☛ lines; a box titled with one is the book's band; in a flowchart the phase tab takes the badge's fill.
- ❶–❿ step marks are followed by a word joiner; `.bk-en` keeps quoted Japanese on one line (`keep-all`); indexes use auto column widths.
- Reading style `email` (Q1 pp.034–035): 差出人／宛先／件名／添付 on a grey header band, framed Gothic body, no indent. モデル作文 in 縦書き: the grey panel runs across all columns, role brackets below.
- Tables: `align` / `headAlign` per table or column (Q1 head rows centred); grey row labels `c--gray` never break inside a word (p.049); `stripe` greys every second row (p.107).
- フローチャート `hd--flow`: same icon + accent title in 会話1 and 会話2; a step with `labels` prints several label-only steps in one bubble (Q1 p.027).
- Connection formulas: dropped ending grey under a double accent strike; stack lines never wrap, a join wraps only between phrases; bullets float round the formula box (Q1 p.010, Q2 p.009); with `side: true` each bullet is its own formatting context (Q1 p.142).
- A dialogue under a heading with the same track has no CD button of its own (one per モデル会話).
- Blanks keep following punctuation on their line (`.nobr`); lesson and section titles set readings at .42em.
- 座談会: `speakers: "right"` right-aligns names (p.102); `indent: false` sets paragraphs flush (p.116).
- ｛alt1\nalt2｝ in a sentence: inline brace with stacked lines (`.ibr`, p.085), wrapping as one unit.
- Sidebar lesson rows: 第N課 and the titles on one line with an ellipsis.
- ≤600: flowchart bubbles drop the printed line breaks; lead+stack leads wrap; ≥8- / ≥11-column tables tighten to fit 320.

## 5. QA and tools

Server on :8765, Node ≥22, Google Chrome. Routes are hashes without `#/` (`""`, `ch/1`, `gp/73`), prefixed `n1:`, `q1:`, `q2:` (`q2:l/7/read`).

| Tool | Use |
|---|---|
| `node tools/shot.mjs ROUTE [W] [H] [OUT] [light\|dark] [--full] [--en] [--touch] [--dpr=N] [--y=PX] [--drawer] [--click=CSS] [--sel=CSS] [--wait=MS] [--nofuri]` | screenshot with device emulation (`mobile` below 700px) |
| `node tools/overflow.mjs ROUTE [W] [--en] [--touch] [--dark] [--furi] [--nofuri]` | `{vw, docW, vp, clip}`: `docW > vw` = sideways scroll; `vp` elements past the viewport; `clip` elements poking out of a component frame; `--touch` targets under 44; `--furi` furigana probe |
| `node tools/lib/wkshot.mjs DEVICE ROUTE[,…] [OUTDIR] [--pages=N] [--probe] [--en] [--nofuri] [--sel=CSS] [--dark]` | real iOS Safari (simulator, safaridriver via `tools/lib/wd.mjs`); Chrome does not reproduce WebKit ruby and line boxes |
| `tools/simshot.sh DEVICE ROUTE [OUT]` | simulator Safari screenshot (N2 and N1 routes only) |
| `node tools/render-dump.mjs n2\|n1\|q1\|q2 [--html]` | rendered text (or markup) of every route; diff before and after renderer changes |
| `node tools/perf.mjs [--cpu=4] [--net=RTT,KBPS] [--width=390] [--runs=3] [--files] [ROUTE…]` | cold load and route-change timings, requests, DOM size, CPU in the measuring passes |
| `tools/zoom.sh BOOK PAGE [1\|2\|3\|page]` | 300-dpi strips or the whole page of the scan |

`tools/lib/furi-probe.mjs` is the furigana probe (off / hit / clip / uneven) shared by overflow.mjs and wkshot.mjs; `tools/lib/cdp.mjs` the headless-Chrome helper. The screenshot and probe tools turn furigana on unless `--nofuri` is given (the site default is off).

### 5.1 Pass criteria (every route × width)

Widths 1280, 768, 390, 375, 320; light and dark; EN on/off; furigana on/off; all four books (for Quartet every lesson section, list and unit; `render-dump.mjs q1` enumerates them).

1. `scrollWidth === clientWidth` with EN on and off; `vp` and `clip` empty.
2. ≤900 with a coarse pointer: every hit box ≥44×44 (`--touch`).
3. Body text ≥16px (15.5 Gothic UI ≤390), inputs ≥16px.
4. Furigana probe clean (`--furi`; real iOS via `wkshot.mjs --probe`).
5. No console errors; home → chapter → `#/gp/N` → review jump land below the topbar.
6. Dark: no white panels; the theme switch applies live and survives reload without a flash.
7. Keyboard: Tab order, visible focus, drawer traps focus, Esc closes popover then drawer, Enter/Space on inline options.

### 5.2 TRY route matrix

| Route | Checks |
|---|---|
| `ch/1` | C1; C3 edge tab at 1280 only; C4; C6a (keys aligned, pay cells under 7時〜 / 1,000円〜, URL under ☎); C7; C8; C10 prefix (gp 3/4/6) and suffix (gp 5/7/8) brackets; C12; C13; C14 tag (gp 7); C15; C19; C20; C21 one frame, numbering 1–8 |
| `ch/1/review` | C23; 問題1 4 columns at 1280, fewer at 390; 問題2 ★ slots; 問題3 passage; 問題4 CD right, question not printed |
| `ch/2`, `ch/2/review` | "（1）" + "（2）" banners; `cont` paragraphs; ring-less part 2; 問題4 header once with sub-instructions; response buttons |
| `ch/4`, `ch/5` | news paragraphs indented; dialogue colons aligned |
| `ch/8`, `gp/73` | band keeps ★★★ and icon; keigo tables, notes right ≥701 / below ≤700; "＊1" not doubled |
| `ch/10` | 縦 at 1280, 横 below 901; toggle and ⚙ persist; tcy digits; scroller starts right; `[Pl]` square; strikes over badges |
| `ch/11` | article: no rings, centred headline, credit right |
| `ch/13`, `ch/14` | vertical story, "〜〜〜" separator, English below; editorial masthead, single tier |
| `ch/12` | listening grids fit |
| `n1:ch/4`, `n1:ch/5` | columns grow before scrolling; drama speaker heads; all English generated; clip notes before やってみよう |
| `guide`, `about` | badge shapes, scene icons with labels; front-matter tables fit; book vs generated English |
| `index`, `compare`, `cando`, `drill` | 16px search; stacked tables ≤600; framed drill, "New set" |

### 5.3 Interaction checks (390 and 1280)

- Every exercise type grades and resets (inline, grid, parts, match, fill incl. paired, write, order, passage, reading, listening task / summary / gist / response); scores keep their ids.
- The EN switch and E show all English; per-line (≥601) and scoped (≤600) buttons toggle only their scope.
- Theme Auto follows the system live; CD badges play and stop (`.speaking`); the drawer locks scroll and closes on navigation and widening; furigana off moves nothing.

## 6. Known limitations

- Real iOS Safari unchecked for the four-book shell and the Quartet layout: this machine has no simulator (`xcrun simctl` missing). Run `wkshot.mjs --probe` on Quartet routes and a TRY chapter when one is available.
- `content-visibility: auto` not used: it would cut a chapter render at 4× CPU from ~140 to ~75 ms, but `fitRubies()` and `fitOptionCols()` measure every point after render, and `#/gp/N` jumps would land on estimated heights.
- Quartet body text at 15px: a reading wider than its word (ちゅうごくじん over 中国人) leaves a small gap; titles (.42em readings) do not.
- Q2 漢字チャレンジ k20: the job-ad labels printed white on dark are plain boxed cells (`frame`).
- Decorative tiles (ornaments without text) are not marked or reproduced.
- Quartet `challenge.js` and every `lNN.js` load up front: the sidebar and openers need the unit titles (lazy loading would need a unit index split out), and sidebar, progress and prev/next need every lesson.
- TRY 単語 全部 renders all ~1 100 rows (N1 ~900; ~7 700 DOM nodes) at once; chunked rendering would need a vocab.js change.
- Five-column Quartet tables with English on (Q1 L6 聴解 garbage table) scroll sideways inside `.qtbl-wrap` at 320: English
  words set the column minimum and cannot hyphenate, because English spans inherit `lang="ja"` (a `lang="en"` span would
  draw the Japanese words inside English lines with Chinese glyph forms on some systems).
- `overflow.mjs --furi --en` reports uneven line pitch wherever English lines sit between Japanese lines (Quartet
  dialogues, notes); the Japanese lines themselves are even.
