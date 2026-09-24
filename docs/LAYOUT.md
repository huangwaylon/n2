# Layout overhaul spec: match the book, work on phones

Status: design spec (no code changed yet). Owner goal: *"Match the textbook's layouts as closely as possible, improve formatting and positioning, and make the site mobile-responsive down to iPhone widths."*

Sources studied: book scan `n2.pdf` pp. 4–9 (the book's own legend), 18–30, 38, 62, 72, 101–103, 122–123, 148, 153, 160, 170, 188, 195–196, 205. Current site: `assets/app.js`, `assets/style.css`, `index.html`, `data/SCHEMA.md`, plus screenshots at 1280 / 390 / 375 px and DOM overflow probes (see §2.1 and Appendix A).

Page references below are **PDF page numbers**, which are also the printed page numbers (p.19 = printed 19).

Ownership tags: **[A]** shell & responsive layout, **[B]** chapter content components, **[C]** exercises & review. See §3.

---

## 0. Global design language

### 0.1 What the book looks like

- It is printed in two colours: black plus a range of greys. Structure comes from **grey bands, dark rounded "pill" labels, thin rules, dashed frames, and circled or boxed numerals**. Content is never put in coloured cards.
- It uses two typefaces:
  - **Gothic (sans)** for the apparatus: headings, pills, どう使う？ explanations, ＊ notes, 📎 notes, instructions, answer numerals, and the English lines.
  - **Mincho (serif)** for the *book text*: 見本文, example sentences ①②, exercise sentences, passages, and answer options.
- Grammar targets in 見本文 are set in **bold Gothic** inside the Mincho text.
- The English that the book itself prints (chapter titles, can-do, usage, notes, Plus usage, ＊ notes) sits directly under the Japanese in a smaller grey Gothic. It is always visible in the book.
- Leading is generous (about 2.0) because nearly every line carries furigana.

### 0.2 Design tokens (base.css, [A])

Keep the existing tokens. Add the book greys below, and use them for structure instead of teal or pink boxes. Keep `--accent` (pink) **only** for `**target**` highlighting and link hover. Stars become `--ink`, as in the book.

```css
:root {
  --goth: "Noto Sans JP", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", Meiryo, system-ui, sans-serif;
  --mincho: "Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", serif;
  --band: #e6e4e1;        /* grammar-point header band, table header tint */
  --band-edge: #6d7075;   /* thick left bar of the header band, chapter banner */
  --banner: #7f8388;      /* chapter opener band (white text on it) */
  --pill: #55585d;        /* できること / どう使う？ / やってみよう！ / 問題N pills */
  --pill-ink: #ffffff;
  --pill-shadow: #c3c3c3; /* offset shadow under pills */
  --rule: #9a9a9a;        /* 見本文 frame, passage dashed frame, table rules */
  --note-bg: #ececec;     /* 📎 clip note fill */
  --badge-bg: #d2d2d2; --badge-ink: #2b2b2b;   /* N / V / いA / Pl badges */
  --review-bg: #dcdcdc;   /* まとめの問題 page tint */
  --en-book: #6b6f75;     /* English printed in the book */
  /* existing --en (blue) stays for OUR supplementary translations */
}
@media (prefers-color-scheme: dark) {
  :root { --band:#2a2d31; --band-edge:#8b9097; --banner:#3a3e44; --pill:#c9ccd1; --pill-ink:#15171a;
          --pill-shadow:#000; --rule:#5a5f66; --note-bg:#24272b; --badge-bg:#4a4f56; --badge-ink:#f0f0f0;
          --review-bg:#101214; --en-book:#9aa0a8; }
}
```

- Load Noto Serif JP at **400**;500;700. Today only 500/700 are loaded, so Mincho body text would render too heavy. Change the Google Fonts URL in `index.html` [A].
- `.ja-book` (new utility, base.css [A]): `font-family: var(--mincho); line-height: 2.0;`. Apply it to all book-text containers listed in 0.1.

### 0.3 Typography scale

| Role | ≥901 px | ≤600 px | ≤390 px |
|---|---|---|---|
| UI / Gothic body (usage, notes, instructions) | 16px / 1.75 | 16px / 1.7 | 15.5px / 1.7 |
| Book text (Mincho: 見本文, examples, questions) | 17px / 2.0 | 16.5px / 2.0 | 16px / 1.95 |
| Book-printed English line (`.en--book`) | 13.5px / 1.5 | 13px | 13px |
| Our translations (`.en`) | 14.5px / 1.55 | 14px | 14px |
| Chapter title (banner) | 32px | 24px | 21px |
| Chapter numeral (banner) | 96px | 60px | 52px |
| Grammar-point title (header band) | 22px | 19px | 17.5px |
| Pills | 15px | 14px | 14px |
| Furigana `rt` | `max(.5em, 9px)` | same | same |

- Ruby CSS (base.css): `ruby { ruby-position: over; ruby-align: center; } rt { font-size: max(.5em, 9px); line-height: 1; font-weight: 400; }`.
  - `ruby-align: center` stops a wide reading from spreading the base kanji apart ("求　人" gaps in the 390-px shot). Browsers without support ignore it harmlessly.
- Any block that contains ruby must have line-height ≥ 1.9. Otherwise lines with furigana get taller than lines without, and the spacing looks uneven.
- Every `<input>` and `<select>` must be **≥16px** on mobile. Today `select` is 14.7px, which makes iOS Safari zoom in on focus.

### 0.4 Shared primitives (base.css + helpers in app.js, [A])

These are the building blocks B and C use. [A] creates them in Phase 0.

| Primitive | HTML (helper) | Book look | CSS |
|---|---|---|---|
| Pill label | `pill(html, cls)` → `<span class="pill ${cls}">…</span>` | Dark-grey rounded capsule, white bold Gothic, soft offset shadow below-left (pp.18, 19, 20, 27) | `display:inline-block; background:linear-gradient(#66696e,var(--pill)); color:var(--pill-ink); font:700 15px/1.3 var(--goth); padding:.28em 1em .22em; border-radius:999px; box-shadow:-2px 3px 0 var(--pill-shadow); letter-spacing:.04em` |
| Boxed number (review) | `<span class="qn qn--box">1</span>` | Wide thin rectangle, numeral centred in Mincho (pp.27–28) | `min-width:2.6em; height:1.5em; border:1px solid var(--ink-2); display:inline-grid; place-items:center; font:15px var(--mincho)` |
| Paren number (practice / Check) | `<span class="qn qn--paren">1）</span>` | "1）" plain Gothic, hanging (pp.19, 20, 26) | no box; `min-width:2.2em; font:15px var(--goth)` |
| Circled number (examples) | ①…⑮ (existing `CIRCLED`) | Mincho circled digits (p.19) | inherits Mincho |
| Answer numeral | `<span class="opt-n">1</span>` / `a.` / `a）` | Bold Gothic "1 2 3 4", "a." in practice, "a）" in matching (pp.19, 27) | `font:700 1em var(--goth)`; in grids it sits inside a 1.6em circle that fills when picked |
| POS badge | from `fmt()` | See C10 | See C10 |
| CD badge / play | `cdBadge(queue, label)` → `<button class="cd-badge" data-act="listen" data-q='…' aria-label="${label}"><span class="cd-badge__cd">CD</span><span class="cd-badge__play">▶</span></button>` | Headphone-shaped "CD 02" badge at the top-right of 見本文 and each listening item (pp.18, 29, 102) | 44×44 circle, 2px border `--ink`, small "CD" over ▶, ear-cups via `::before/::after` 6×14 rounded bars at left and right; `.speaking` inverts colours |
| Book-English line | `bi(o, tag, cls, {book:true})` → adds `en--book` | Small grey Gothic line directly under the Japanese | `color:var(--en-book); font:13.5px/1.5 var(--goth)`. Visibility follows the EN rules in 0.5 |

### 0.5 English, TTS and per-line buttons (placement rule)

Today every line gets a floated `EN` button (19 px tall) and many get a 🔊 (23 px). Floats narrow the text measure, and the 🔊 often drops onto its own line (390-px shots).

- **≥601 px:** `.bi` gets `position:relative; padding-right:2.4em`. `.en-btn` is `position:absolute; right:0; top:.35em` (a right gutter; no float). 🔊 buttons in examples also go in that gutter (grid column, see C12).
- **≤600 px:** hide per-line `.en-btn`. Each *container* renders one scoped button, `<button class="en-btn en-btn--scope" data-act="en-scope">EN</button>`, in its header row. Containers are: 見本文, usage block, examples list, clip note, Plus, each exercise.
  - The handler [A] toggles `.en-all` on `closest('[data-en-scope]')`.
  - Rule: `.en-all .en { display:block }`.
- Book-printed English (`.en--book`) follows the same toggle. This keeps the site's policy of hiding English by default.
  - **Exception:** chapter/genre English titles and part-banner English stay always visible, because the book prints them large in the banner.

---

## 1. Component catalogue

Each entry covers: **Book** (page refs and exact design), **Web** (renderer function and HTML), **CSS**, and **Responsive** at ≤600 / ≤390.

### C1 Chapter opener banner [B]

**Book (pp.18, 30, 62, 72, 103, 122, 148, 160, 188, 205):**
- Full-width mid-grey band across the top of the page, about 1/8 of the page height.
- At left, a huge white **Gothic** numeral ("1", "10", "14") spanning two text lines, with faint concentric arcs behind it.
- To its right:
  - Line 1: the genre in small bold white Gothic ("お知らせを読む") followed by the genre English in white regular ("Reading an Announcement").
  - Line 2: the title in large bold white Gothic with white furigana ("スタッフ募集のお知らせ"), followed on the same baseline by the English title in smaller white ("A Job Ad"). A long English title drops to its own line (p.30 "Addressing Co-workers …").
- In split chapters the title carries "（1）" / "（2）" and the English carries "(1)" / "(2)".

**Web (`chapterView` → new `bannerHtml(ch, part, pi)`):**
```html
<header class="ch-banner" id="ch1-top">
  <div class="ch-banner__num" aria-hidden="true">1</div>
  <div class="ch-banner__body">
    <p class="ch-banner__genre"><span class="ja">お知らせを読む</span> <span class="ch-banner__en">Reading an Announcement</span></p>
    <h1 class="ch-banner__title"><span class="ja">スタッフ募集のお知らせ<span class="ch-banner__part">（1）</span></span>
      <span class="ch-banner__en ch-banner__en--title">A Job Ad (1)</span></h1>
  </div>
  <span class="ch-tab ch-tab--inline">1〜8</span>   <!-- see C3 -->
</header>
```
- For split chapters, part 0's banner shows "（1）" and part 1 gets its own banner (C2). The part-1 banner replaces today's `.part-title` h2.

**CSS:**
- Band: `background: var(--banner)` plus a `radial-gradient` pair of thin white rings behind the numeral at 12% opacity. White text, `border-radius: 0 0 14px 14px`.
- Full-bleed to the main column: negative margins equal to the `main` padding. `display:grid; grid-template-columns:auto 1fr auto; gap:0 20px; align-items:center; padding:18px 28px`.
- Numeral: `font:900 96px/0.9 var(--goth)` (use 700 if 900 isn't loaded).
- Title: `font:700 32px/1.35 var(--goth)`, ruby white at 60% opacity.
- English: 18px 500.
- `text-wrap: balance` on the title.

**Responsive:**
- ≤600: numeral 60px; title 24px; the English title is `display:block` (own line); padding 14px 14px; margins bleed to the viewport edge.
- ≤390: numeral 52px, title 21px, genre English 11px.
- No orphaned single character: today "せ" wraps alone at 390 px; `text-wrap: balance` fixes this.

### C2 Part banner "(2)" [B]

**Book (p.38):** identical to C1 with "（2）", its own できること, and its own 見本文. On p.38 the 見本文 frame has **no binder holes** (see C6).

**Web:** `bannerHtml(ch, part, 1)` with the modifier `.ch-banner--part`: same design, top margin 56px, `border-radius:14px` (no page-top attachment). Remove `.part-title`.

### C3 Chapter side-tab "1〜8" [B]

**Book (pp.19, 21, 23, 25, 103, 123, 153, 205):**
- A rounded-rect thumb tab on the outer page edge: light grey fill, grey outline, rounded on the inner side.
- The text runs vertically in Gothic: "1 / ∫ / 8" (a vertical 〜).
- It holds the chapter's grammar-point range (1〜8, 60〜72, 73〜77, 92〜99, 132〜139). Its vertical position steps down chapter by chapter.

**Web:**
- `chapterView` renders `<a class="ch-tab" href="#/ch/1" data-act="toc" aria-label="この章の文法 1〜8">1〜8</a>` twice:
  - `.ch-tab--edge`: fixed, desktop only.
  - `.ch-tab--inline`: in the banner.
- The range is `first.no〜last.no` over all parts.

**CSS (.ch-tab--edge):**
- `position:fixed; right:0; top:calc(var(--top) + 90px + (var(--ch) - 1) * 26px)`, with `--ch` set inline. This mimics the book's stepping.
- `writing-mode:vertical-rl; text-orientation:mixed; padding:10px 6px; border:1.5px solid var(--rule); border-right:0; border-radius:10px 0 0 10px; background:var(--band); font:600 13px var(--goth)`.
- Clicking it scrolls to the mini-TOC (C5).

**Responsive:**
- `.ch-tab--edge` only at ≥1200 px and `(hover:hover)`.
- Below 1200 px it is hidden, and `.ch-tab--inline` shows as a small outlined chip at the banner's right (grid column 3). At ≤600 the chip moves under the title: `grid-column:2; justify-self:start`.

### C4 できること (can-do) [B]

**Book (pp.18, 30, 38):**
- The dark pill "できること" at the left margin.
- Below it, a list with **● black round bullets**. Each item: Japanese Gothic 15–16px, then the English on the next line in smaller grey, aligned with the Japanese text (not with the bullet).
- There is no box around the list.

**Web (`canDoHtml`):**
```html
<section class="cando" data-en-scope>
  <h2 class="cando__label">${pill("できること")}</h2>
  <ul class="cando__list"><li class="bi"><span class="ja">お知らせなどの文章が読める。</span><span class="en en--book">Read announcements…</span></li></ul>
</section>
```

**CSS:**
- Remove the teal background.
- `.cando__list{list-style:none; padding:0 0 0 1.6em; margin:.6em 0 0}`.
- `li{position:relative}`; `li::before{content:"●"; position:absolute; left:-1.2em; font-size:.8em; top:.35em}`.
- Margin 20px 0 28px.

**Responsive:** unchanged; padding-left 1.4em at ≤390.

### C5 Mini table of contents (web-only) [B]

The book has no equivalent; this is a web convenience.

- **≥601:** keep the wrapping chips (`.mt-gp`), restyled as outlined grey chips. Show the part labels "(1)" / "(2)" as small bold text. Chip height ≥ 32px (≥44px under `pointer:coarse`).
- **≤600:** wrap the chips in `<details class="mini-toc"><summary>この章の文法 1〜8（8）</summary>…</details>`. It is collapsed by default, and the chips wrap inside. Never make it a horizontal scroller.

### C6 見本文 frame (common to all kinds) [B]

**Book (pp.18, 30, 62, 72, 103, 122, 148, 153, 188, 205):**
- A white rectangle with a thin grey border and **square corners**.
- Along the top inside edge, a row of **14 binder-ring holes**: small circles with a grey ring and a light fill, evenly spaced.
- At the top-right, just after the last hole, the **CD badge** ("CD 02", headphone-shaped, black).
- The bottom-right corner has a **folded page curl** (a small triangle fold with a shadow).
- Illustrations float at the right or left (not reproduced).
- The frame carries no "見本文" label.
- Exceptions:
  - p.38 (ch2 part 2) and p.160 (article): no holes, CD badge only.
  - p.160: the article frame has a slightly heavier border and a plain corner.

**Web (`sampleHtml` → dispatches by kind):**
```html
<section class="sample sample--rings kind-notice" data-en-scope aria-labelledby="s1-0">
  <h2 id="s1-0" class="sr-only">見本文</h2>
  <div class="sample__tools">${cdBadge(queue, "見本文を聞く")}<button class="en-btn en-btn--scope" data-act="en-scope">EN</button></div>
  …kind-specific body…
</section>
```
- Rings default: every kind except `article`. Optional `sample.rings:false` to reproduce p.38 exactly (schema addition, §1 Data).

**CSS:**
- `.sample{position:relative; background:var(--panel); border:1px solid var(--rule); border-radius:0; padding:48px 40px 34px; margin:18px 0 40px}`.
- Rings: `.sample--rings::before{content:""; position:absolute; left:18px; right:64px; top:12px; height:16px; background:radial-gradient(circle at 8px 8px, var(--bg) 0 4.5px, var(--rule) 5px 6.5px, transparent 7px) left/22px 16px space;}`. `background-repeat: space` spreads whole circles evenly, so the count adapts to width. The `right:64px` leaves room for the CD badge.
- Page curl: `.sample::after{content:""; position:absolute; right:-1px; bottom:-1px; width:30px; height:30px; background:linear-gradient(135deg, var(--panel) 0 48%, #cfcfcf 50%, #eeeeee 100%); border-left:1px solid var(--rule); border-top:1px solid var(--rule); box-shadow:-2px -2px 3px rgba(0,0,0,.08); clip-path:polygon(0 0, 100% 0, 0 100%);}`. Pair it with `background: linear-gradient(315deg, var(--bg) 0 21px, transparent 21px)` on `.sample` so the corner looks cut.
- `.sample__tools{position:absolute; top:6px; right:8px; display:flex; gap:6px; align-items:center}`.

**Responsive:**
- ≤600: padding 40px 16px 26px; the frame may bleed to 8px from the viewport edges (`margin-inline:-6px`); ring gutter `left:12px; right:56px`, and `space` reduces the hole count automatically.
- ≤390: padding-inline 12px.

#### C6a notice (ch1, p.18) [B]

**Book:**
- The heading "サニー　店内スタッフ募集" is set as a big display Gothic (outlined, heavy) and centred.
- A centred lead line follows ("さいわい駅前店オープンにつき、人材を求めています").
- Then a two-column "form":
  - Bold keys with an arrow: "仕事▶", "資格▶", "給与▶", "交通費▶", "応募▶". Values follow in Mincho.
  - Continuation lines and "＊" notes are indented to the value column.
  - Pay lines are **tabular**: "時給 | 7時〜 9時 | 1,000円〜", with the next lines "9時〜22時 | 900円" aligned under the time and wage columns.
- A contact block at the bottom: "サニーグループ東京本部　☎03-1111-2222". The URL and E-mail lines are aligned under the ☎ column.

**Web (`noticeHtml(s)`).** Heuristics (each overridable per line with `line.style`, §1 Data):
1. First line without "▶" → `.nt-lead` (centred).
2. `/^(.{1,6}?)▶(.*)$/` → `<div class="nt-row"><span class="nt-key">仕事▶</span><div class="nt-val">…</div></div>`.
3. Lines starting "＊", or lines without "▶" that follow a row and come before the contact block → `.nt-row.nt-cont` (empty key cell).
4. Inside a value, split on the full-width space "　" when a value has ≥2 of them, or when the row is a continuation of such a row. Emit `<span class="nt-cells"><span>時給</span><span>7時〜 9時</span><span>1,000円〜</span></span>`. Continuation cells start at grid column 2 when the previous tabular row had one more cell.
5. From the first line containing ☎, `http`, or `E-mail` (plus the line immediately before it if it has no ▶) → `.nt-contact`, a 2-column grid. The line with ☎ splits into [org | ☎…]; later lines fill column 2 only.

**CSS:**
- `.nt-heading{font:700 30px/1.3 var(--goth); text-align:center; letter-spacing:.05em; text-shadow:1.5px 1.5px 0 var(--band); -webkit-text-stroke:.4px currentColor}`.
- `.nt-row{display:grid; grid-template-columns:5.2em 1fr; column-gap:.2em}`; `.nt-key{font:700 1em var(--goth); text-align:left}`; `.nt-val{font-family:var(--mincho)}`.
- `.nt-cells{display:grid; grid-template-columns:3.2em 8.5em auto; column-gap:1em}`.
- `.nt-contact{display:grid; grid-template-columns:max-content 1fr; column-gap:1.2em; margin-top:1.2em; font-family:var(--goth)}`.

**Responsive:**
- ≤600: `.nt-row` columns `4.6em 1fr`; `.nt-cells` columns `auto auto auto` with gap .7em.
- ≤390: `.nt-cells` becomes `display:flex; flex-wrap:wrap; gap:0 .8em` (alignment is relaxed, but nothing overflows); `.nt-contact` becomes 1 column (☎ on its own line); heading 22px.

#### C6b prose kinds: speech (pp.30, 38), news (p.62), essay horizontal (p.103), explanation [B]

**Book:** Mincho paragraphs, first-line indent 1 em, justified. Bold Gothic targets. No blank lines between paragraphs.

**Data gap:** many samples store one **sentence** per line (ch2 part 0 = 1 book paragraph over 5 lines; ch4 = 5 paragraphs over 10 lines; ch10 part 0 = 10 lines). Rendering each line as its own indented paragraph (today's behaviour) breaks the book's paragraphing. Add `line.cont: true` ("continues the previous paragraph"). Default false, so the paragraph-per-line data (ch13) stays valid.

**Web (`proseHtml(s)`):** group lines into paragraphs.
```html
<div class="prose ja-book">
  <p class="prose__p"><span class="sl" data-i="0">皆様、本日は、…</span><span class="sl" data-i="1">入社して**以来**…</span></p>
  <div class="en prose__en">(joined English of the paragraph's lines)</div>
</div>
```
- English is one block per paragraph (it reads better than sentence-by-sentence).

**CSS:** `.prose__p{text-indent:1em; margin:0; text-align:justify; text-justify:inter-character}`; `.prose__en{margin:.2em 0 .6em}`; `strong{font-family:var(--goth); font-weight:700; color:var(--accent)}`.

**Responsive:** same; `text-align:start` at ≤390 (justification makes gaps on narrow lines).

#### C6c dialogue (pp.72, 122) [B]

**Book:**
- Speaker names followed by a full-width colon "渡辺：" in Mincho.
- Names are **right-aligned so the colons line up** (p.122: "田中：" sits under "佐々木：").
- Each turn's text uses a **hanging indent**: wrapped lines align under the first character after the colon.
- Small vertical gap between turns.

**Web (`dialogueHtml(s)`):**
```html
<div class="dlg ja-book" style="--spw:3em">   <!-- --spw = max plain(sp).length em -->
  <div class="dlg__row bi"><span class="dlg__sp">佐々木</span><span class="dlg__colon">：</span><div class="dlg__body"><span class="ja">…</span><span class="en">…</span></div></div>
  <div class="dlg__row dlg__row--narr">…</div>   <!-- sp === "" -->
</div>
```

**CSS:** `.dlg__row{display:grid; grid-template-columns:var(--spw) 1em 1fr; margin:.15em 0}`; `.dlg__sp{text-align:right; white-space:nowrap}`; `.dlg__row--narr .dlg__body{grid-column:1/-1}`. Speaker colour `--ink` (not teal), weight 500.

**Responsive:** unchanged down to 375 (3 kanji ≈ 48px). If `--spw` > 4em, switch at ≤390 to a stacked name above the text (`grid-template-columns:1fr`, name bold 13px).

#### C6d article with heading and credit (ch11, p.160) [B]

**Book:**
- No binder holes; CD badge at the top-right.
- A centred bold Gothic headline with furigana, about 1.5× body size ("進化する日本食　ラーメンの魅力").
- Mincho paragraphs with a 1-em indent.
- The final credit "（文：週刊ABK編集部）" is right-aligned on the last paragraph's line.
- A photo caption at the bottom-right (not reproduced).

**Web:** `proseHtml` with `.sample--article` (no rings) and `<h3 class="sample__headline">` from `s.heading`.
- A line matching `/^（文：.*）$/` (or `style:"credit"`) renders as `<p class="credit">`.
- The paragraph grouping of C6b applies.

**CSS:** `.sample__headline{font:700 25px/1.4 var(--goth); text-align:center; margin:0 0 .8em}`; `.credit{text-align:right; text-indent:0; font-size:.92em; margin-top:.2em}`.

#### C6e vertical texts: essay ch10 (pp.148, 153), story ch13 (pp.188, 195), editorial ch14 (p.205) [B]

**Book:**
- Vertical Mincho (縦書き), columns flowing right to left, 1-em paragraph indent (at the top).
- Bold Gothic targets, furigana on the right of the kanji.
- Two-digit numbers upright side by side (tate-chū-yoko); ellipses and dashes rotated.
- The frame, holes and CD badge are the same as in C6.
- Editorial (p.205):
  - A masthead block at the right: "社説" set large in a small box ruled above and below.
  - The headline "問われる五輪招致の是非" in very large bold Mincho vertical.
  - The body is set in **two tiers** (段組).
- Story (p.188): scene breaks use a spacer; ch13 part 1 has a "〜〜〜〜" wavy separator.

**Data:** add `sample.vertical: true` to 10.0, 10.1, 13.0, 13.1, 14.0. For 14.0, split `heading` on the first full-width space into label "社説" and title.

**Web (`verticalHtml(s)`):**
```html
<section class="sample sample--rings sample--vertical kind-editorial" data-en-scope data-vmode="auto">
  <div class="sample__tools">
    <div class="seg" role="group" aria-label="表示"><button data-act="vmode" data-v="v" aria-pressed="true">縦</button><button data-act="vmode" data-v="h" aria-pressed="false">横</button></div>
    ${cdBadge(queue)} <button class="en-btn en-btn--scope" data-act="en-scope">EN</button>
  </div>
  <div class="vt-scroll" tabindex="0" role="region" aria-label="見本文（縦書き）">
    <div class="vt ja-book">
      <header class="vt-mast"><span class="vt-label">社説</span><h3 class="vt-title">問われる五輪招致の是非</h3></header>   <!-- editorial only -->
      <p>…<span class="tcy">50</span>歳…</p>
      <p class="vt-sep" aria-hidden="true">〜〜〜〜〜〜〜</p>
    </div>
  </div>
  <div class="vt-en en"><p>…English per paragraph…</p></div>
</section>
```

**CSS:**
- `.vt{writing-mode:vertical-rl; text-orientation:mixed; height:clamp(22em, 62vh, 28em); line-height:1.95; font-size:17px}`.
- `.vt p{margin:0; text-indent:1em}`.
- `.vt-scroll{overflow-x:auto; overflow-y:hidden; overscroll-behavior-x:contain; scrollbar-width:thin}`.
- Scroll-hint fades: `mask-image: linear-gradient(to left, #000 92%, transparent)`, applied only while scrollable (JS toggles `.has-more`).
- `.tcy{text-combine-upright:all}`.
- `.vt strong{font-family:var(--goth)}`.
- `.vt-mast{margin-left:1.2em; padding-left:1em; border-left:1px solid var(--rule)}`.
- `.vt-label{display:inline-block; font:700 1.6em var(--mincho); border-block:3px double var(--ink); padding:.3em .15em}` (in vertical-rl, the block borders render as the book's left and right rules).
- `.vt-title{font:700 2.1em/1.3 var(--mincho); margin:0}`.
- Two-tier editorial is optional (≥1200 only): `.kind-editorial .vt{column-count:2; column-gap:1.6em; column-rule:1px solid var(--rule)}` with `height:auto; width:max-content` inside the scroller. **Fall back to one tier if Safari renders it wrong.**
- Scroll start: Chrome and Safari open a vertical-rl scroller at its right edge (the start), so no JS is needed. Verify in the QA pass.

**Behaviour:**
- `settings.vertical` is `"auto" | "v" | "h"`, stored in LS by [A].
- `auto` means vertical at `(min-width: 901px)`, horizontal below.
- Horizontal mode adds `.is-h`: `.is-h .vt{writing-mode:horizontal-tb; height:auto}` and hides the masthead border (the label becomes an inline chip before the title).
- `fmt(s, {vertical:true})` [A] wraps standalone 1–2 digit runs, `/(?<![\d,.])\d{1,2}(?![\d,.])/`, in `.tcy`, outside tags and ruby.
- In vertical mode, per-line EN and 🔊 buttons are not rendered; English appears in `.vt-en` (horizontal) under the frame when EN is on.

**Responsive:** at ≤900 the default is horizontal (`auto`); the 縦/横 toggle stays so phone users can opt in. When vertical on a phone, height is `clamp(20em, 60vh, 24em)` and font 16px; swiping scrolls horizontally inside `.vt-scroll` only, never the page.

### C7 Grammar-point header band [B]

**Book (pp.19, 20, 21, 25, 30, 72, 123, 148):**
- A full-width light-grey band about 1.8 lines tall, with a slightly lighter gradient to the right.
- A **thick dark-grey vertical bar** (about 8px) at its left edge; a darker 2px rule along the bottom.
- Inside, left to right:
  - The **number** in heavy serif bold (Times-like numerals): "1", "16", "73".
  - Two em-spaces.
  - The **heading phrase taken from the 見本文**, in bold Gothic, with the grammar target heavier ("N2レベル以上の方**に限り**") and furigana over kanji.
  - At the far right: the **stars** in solid black ("★★", "★★★"). Only filled stars; no empty ones.
- The generic pattern ("〜につき") is **not** printed in the header.
- Points are not boxed: they flow on the page, separated by space.

**Web (`gpCard`):** remove the `.gp` card border, background and `overflow:hidden`. The band carries the structure.
```html
<article class="gp" id="gp-3" data-en-scope>
  <header class="gp-bar">
    <span class="gp-bar__no">3</span>
    <h3 class="gp-bar__title">N2レベル以上の方<strong>に限り</strong></h3>
    <span class="gp-bar__stars" role="img" aria-label="重要度 2/3">★★</span>
  </header>
  <p class="gp-pattern">〜に限り／〜に限る</p>   <!-- web-only, small muted, for scanning; omit if phrase is absent (then pattern is the title) -->
  …
</article>
```

**CSS:**
- `.gp{margin:0 0 56px}`.
- `.gp-bar{display:grid; grid-template-columns:auto minmax(0,1fr) auto; align-items:center; gap:0 1em; padding:8px 14px 8px 18px; background:linear-gradient(90deg, var(--band), color-mix(in srgb, var(--band) 55%, var(--bg))); border-left:8px solid var(--band-edge); border-bottom:2px solid var(--rule)}`.
- `.gp-bar__no{font:700 24px/1 "Times New Roman", var(--mincho)}`.
- `.gp-bar__title{margin:0; font:700 22px/1.45 var(--goth); min-width:0; overflow-wrap:anywhere}`; `.gp-bar__title strong{color:inherit; font-weight:900}` (fallback: `-webkit-text-stroke:.3px`).
- `.gp-bar__stars{white-space:nowrap; letter-spacing:.08em; color:var(--ink)}`.
- `.gp-pattern{margin:.3em 0 0; font-size:13px; color:var(--ink-3)}`.

**Responsive:**
- ≤600: border-left 6px; padding 7px 10px 7px 12px; number 20px; title 19px.
- ≤390: title 17.5px; stars 13px.
- The grid with `minmax(0,1fr)` fixes today's overflow at gp 73 (§2.1).

### C8 どう使う？ pill and usage-scene icon [B]

**Book (pp.19–25, 6):**
- The pill "どう使う？" at the left, under the band.
- On the **same row at the far right**, one or more **usage-scene icons**, each in a small rounded-square frame (about 1.6 lines, grey border, light fill). The five icons, from the legend on p.6:
  - casual: two faces chatting
  - formal: two faces crossed out with a diagonal
  - polite: a bowing figure
  - regret: a face with a sweat drop
  - praise: a face with radiating lines
- The icons have no text labels.

**Web:** `<div class="gp-use"><h4 class="gp-use__pill">${pill("どう使う？")}</h4><span class="scenes">${marks(g.marks)}</span></div>`.
- `marks()` [B] renders `<span class="scene scene--formal" role="img" aria-label="かたい表現 — Formal / written" title="…">${SVG}</span>`, with **no visible text**.
- The labels stay explained in #/guide (whose legend [A] uses the same `marks()`).
- The SVGs are simple 24×24 line icons (a `MARKS` table with an `svg` field). The emoji can remain as a fallback.

**CSS:** `.gp-use{display:flex; justify-content:space-between; align-items:center; margin:12px 0 6px}`; `.scene{width:36px; height:36px; display:inline-grid; place-items:center; border:2px solid var(--rule); border-radius:8px; background:var(--band); margin-left:4px}`.

**Responsive:** the same at all widths; the icon frame is 32px at ≤390.

### C9 Usage text and the book's English line [B]

**Book:** Japanese Gothic 15px medium; below it, the English printed in smaller grey Gothic (p.19 "This is used to state a reason…"). No box.

**Web:** `bi(g.usage, "p", "usage", {book:true})`.

**CSS:** `.usage .ja{font:500 16px/1.8 var(--goth); margin:.2em 0 0}`; `.en--book` per 0.4.

### C10 Connection formula [B]

**Book (pp.19–25, 30, 38, 148, 153, 196; legend pp.8–9):**
- POS badges, all grey fill with dark text:
  - **N**, **V**: a perfect **circle** (about 1.4 em) with a bold letter.
  - **いA**, **なA**: a short rounded pill.
  - **V-る**, **V-ない**, **V-ます**, **V-Pl**: a **rounded pill** with "V-" plus the form.
  - **Pl**, **Po**: a **square-cornered box**.
- Struck endings: the ending inside or after the badge has a **line through it** ("V-~~ます~~", "いA~~い~~く", "なA~~だ~~な", "~~N だ~~").
- "+" signs have generous spaces around them. Endings are in Gothic 18px medium.
- Subscripts N₁ / N₂ (p.38).
- **Alternatives are grouped with a thin bracket:**
  - Common left part: "N + [ に限り / に限る ]", "N + [ に応じ / に応じて / に応じた + N ]", "たとえ + [ V-ても / いA くても / なA でも / N でも ]". A **left bracket** (vertical line with short top and bottom ticks) stacks the tails.
  - Common right part: "[ N / V-る + V-ない ] + にかかわらず", "[ V-る／V-た / N の ] + 際（に）". The heads stack inside a **right bracket**, followed by "+ tail".
- Under the formula, sub-conditions appear as bracketed small lines: "［なA~~だ~~な　~~N だ~~］", "［現在形だけ］".
- There is no box or background: the formula sits in the flow, left-aligned.

**Web (`formsHtml` → new `formulaHtml(forms)`):** tokenise each form with `f.split(/\s*\+\s*/)` after stripping the `\n…` sub-lines.
1. One form → `<div class="fx"><span class="fx-t">[N]</span><span class="fx-plus">+</span><span class="fx-t">につき</span></div>`.
2. Several forms sharing the first *k* ≥ 1 tokens (each form longer than *k*) → prefix group:
   `<div class="fx fx--pre"><span class="fx-t">[N]</span><span class="fx-plus">+</span><span class="fx-br fx-br--l"><span class="fx-alt">に応じ</span><span class="fx-alt">に応じて</span><span class="fx-alt">に応じた + [N]</span></span></div>`
3. Otherwise, several forms sharing the last *k* ≥ 1 tokens → suffix group: `.fx--suf` with `.fx-br--r` holding the heads, then `+ tail`.
4. Otherwise → stacked `.fx` rows.
5. `\n` sub-lines → `<div class="fx-sub">［…］</div>` under the group.
6. Forms containing " → " → table component C16 (not a formula).

`fmt()` badge changes [A] (the contract B relies on):
- `BADGE_RE` must accept subscripts and digits: `/\[((?:N|V|いA|なA|A|Pl|Po)[₀-₉0-9]?(?:-[^\]\s]*)?|(?:N|V|いA|なA|A)~~[^\]]*~~)\]/g`. **Bug today:** `[N₁]` and `[いA₁]` don't match and render as literal "[N₁]" (gp 16, 98).
- Shape classes:
  - `b-round` for bare N / V / A / いA / なA (plus a subscript)
  - `b-pill` for anything with "-"
  - `b-sq` for Pl / Po
  - Keep the `b-n` / `b-v` … colour classes as hooks, but render the book greys by default.
- Strikes:
  - `.badge s{text-decoration:line-through; text-decoration-thickness:.12em}`.
  - For `~~[N]だ~~` (a strike wrapping a badge), text-decoration doesn't propagate into inline-blocks. Add `s .badge{background-image:linear-gradient(transparent 46%, currentColor 46% 56%, transparent 56%)}`.

**CSS:**
- `.badge{background:var(--badge-bg); color:var(--badge-ink); font:700 .82em/1 var(--goth); display:inline-grid; place-items:center; height:1.55em; vertical-align:.05em}`.
- `.b-round{min-width:1.55em; border-radius:999px; padding:0 .3em}`; `.b-pill{border-radius:999px; padding:0 .6em}`; `.b-sq{border-radius:2px; padding:0 .35em}`.
- `.fx{display:flex; flex-wrap:wrap; align-items:center; gap:.2em .5em; font:500 17px/1.6 var(--goth); margin:12px 0 4px}`.
- `.fx-plus{margin:0 .15em}`.
- `.fx-br{display:inline-flex; flex-direction:column; gap:.1em; position:relative; padding:.05em .2em .05em 1em}`.
- `.fx-br--l::before{content:""; position:absolute; left:.1em; top:.45em; bottom:.45em; width:.5em; border:1.5px solid var(--ink-2); border-right:0}`.
- `.fx-br--r{padding:.05em 1em .05em .2em}`; `.fx-br--r::after` mirrors it with `border-left:0; right:.1em`.
- `.fx-sub{font-size:.9em; margin:.1em 0 0}`.
- Remove today's teal `.forms` left border, background and the "接続 Connection" label: the book has none. Keep an sr-only "接続" heading for accessibility.

**Responsive:** ≤390: `.fx` 16px; bracket groups never exceed the width because each `.fx-alt` wraps internally (`min-width:0`).

### C11 ＊ notes on connection [B]

**Book (pp.19, 22, 38, 72):**
- Small Gothic (13px). "＊" followed by the text, with a hanging indent.
- The English on the next line, indented to the text start, smaller and grey.
- Directly under the formula, before the examples; about 1 line of space follows.

**Web:** `<p class="fnote bi"><span class="fnote__m">＊</span><span class="ja">…</span><span class="en en--book">…</span></p>`.
- **Bug today:** `formsHtml` prepends "＊" even when the data already starts with "＊1"/"＊2" (gp 73), producing "＊＊1". Prepend only when `!/^＊/.test(n.ja)`.

**CSS:** `.fnote{font:13.5px/1.65 var(--goth); padding-left:1em; text-indent:-1em; margin:.1em 0}`; `.fnote .en{text-indent:0}`.

### C12 Example sentences ①② [B]

**Book (pp.19–25, 123):**
- Mincho, about 1 line of air above the list.
- The circled numeral is flush left and the sentence follows immediately, with continuation lines **hanging-indented** under the text.
- No separators between items.
- Dialogue examples "A：… / B：…" put B on a new line aligned under A (p.123 ④⑤).
- An idiom is marked with a small chain-link glyph after the sentence (legend p.7).
- An illustration may sit to the right (not reproduced).

**Web (`examplesHtml`):**
```html
<ol class="exs ja-book" data-en-scope>
  <li class="exs__i bi"><span class="exs__n">①</span>
    <div class="exs__t"><span class="ja">…<span class="idiom" role="img" aria-label="慣用表現">🔗</span></span><span class="en">…</span></div>
    <span class="exs__tools">${speakBtn}${enToggle}</span></li>
</ol>
```
- If `e.ja` contains `\n` and lines match `/^[A-ZＡ-Ｚ]：/`, render `.exs__t` lines as `<span class="exs__turn"><span class="exs__who">A：</span><span>…</span></span>`: a grid `1.6em 1fr` per turn.

**CSS:** `.exs{list-style:none; padding:0; margin:14px 0}`; `.exs__i{display:grid; grid-template-columns:1.35em 1fr auto; column-gap:.15em; margin:.25em 0}`; `.exs__tools{display:flex; gap:2px; align-self:start}`. Remove the dashed separators.

**Responsive:**
- ≤600: `.exs__tools` shows only 🔊 (EN is scoped per 0.5), 32px, with a `::after{inset:-6px}` hit-area extension, giving ≥44px effective.
- ≤390: grid `1.25em 1fr 32px`.

### C13 📎 Clip note [B]

**Book (pp.20, 21, 7):**
- A light-grey rounded rectangle (radius about 10px) spanning the text width.
- A **paperclip glyph overlaps the top-left corner**, poking out above the box.
- Inside:
  - Japanese Gothic (medium); inline badges are allowed ("「N + に限って〜ない」").
  - The English line, small and grey.
  - Then examples ①② in Mincho.
- Any やってみよう！ for the note follows it, outside or inside the box.
- A ☞ line may follow it, right-aligned (p.21).

**Web (`notesHtml`):** `<aside class="clip" data-en-scope><svg class="clip__icon" aria-hidden="true">…paperclip…</svg><div class="clip__body">${bi(n,"p","",{book:true})}${examplesHtml}${practice}</div></aside>`.

**CSS:** `.clip{position:relative; background:var(--note-bg); border-radius:12px; padding:14px 18px 12px 38px; margin:18px 0 18px 6px}`; `.clip__icon{position:absolute; left:-4px; top:-12px; width:22px; height:40px; stroke:var(--ink); stroke-width:2.2; fill:none}`.

**Responsive:** ≤390: padding-left 30px; the icon is 18×34.

### C14 ＋Plus box [B]

**Book (pp.25, 7):**
- A rounded rectangle with a **thick grey border** (about 3px, radius 10px).
- A **"✚ Plus" tag sits on the top border at the left**: a bold black cross and "Plus" in bold Gothic, breaking the line.
- The heading row: the pattern "〜に際して" in large bold Gothic (22px) indented about 2em, with **stars and the scene icon at the right**, and a **dotted rule** underneath.
- Then the usage Japanese, the English line, and examples ①②.

**Web:**
```html
<section class="plus" data-en-scope>
  <span class="plus__tag"><span class="plus__cross" aria-hidden="true"></span>Plus</span>
  <header class="plus__head"><h4>〜に際して</h4><span class="gp-bar__stars">★★</span><span class="scenes">…</span></header>
  …usage (book EN), formula, examples, notes, practice…
</section>
```

**CSS:**
- `.plus{position:relative; border:3px solid var(--rule); border-radius:10px; padding:18px 20px 14px; margin:28px 0 22px}`.
- `.plus__tag{position:absolute; top:-.95em; left:-8px; background:var(--bg); padding:0 .4em 0 0; font:800 16px var(--goth); display:flex; align-items:center; gap:.2em}`.
- `.plus__cross{width:22px; height:22px; background:linear-gradient(var(--ink),var(--ink)) center/100% 7px no-repeat, linear-gradient(var(--ink),var(--ink)) center/7px 100% no-repeat}`.
- `.plus__head{display:grid; grid-template-columns:minmax(0,1fr) auto auto; align-items:center; gap:.5em; border-bottom:2px dotted var(--rule); padding:0 0 .2em 1.6em; margin-bottom:.6em}`.

**Responsive:** ≤600: padding 16px 12px 12px; `.plus__head` padding-left .4em; heading 19px.

### C15 ☞ cross-reference line [B]

**Book (pp.19, 21, 25, 7):** **right-aligned** at the end of a point's block: a pointing-hand glyph "☞", a page ("p.224"), then the pattern ("〜につき"). It points to the appendix of similar patterns.

**Web:** at the end of `gpCard` (before the web-only footer):
```html
<p class="xref"><span class="xref__hand" aria-hidden="true">☞</span>
  <a href="#/compare" class="xref__cmp">似ている文型</a> ${g.see.map(gpLink).join("")}</p>
```
- The compare link is shown only when some `N2.compare` group lists `no === g.no`.

**CSS:** `.xref{text-align:right; font:14px var(--goth); margin:10px 0 0}`; `.xref__hand{font-size:1.25em; margin-right:.3em}`; `.gp-link{margin-left:.6em; padding:.35em .2em; display:inline-block}` (text link, no chip).

**Responsive:** ≤600: `text-align:left; display:flex; flex-wrap:wrap; gap:.2em .8em`; each link ≥44px tall under `pointer:coarse` (padding .6em .2em).

### C16 Keigo and other tables (p.123) [B]

**Book (p.123, gp 73):**
- Two stacked two-column tables: 意味 | 尊敬語, then 意味 | 謙譲語.
- The header row is **dark-grey filled with white text**, centred; the header cell carries furigana.
- Body rows are separated by **horizontal rules only** (no vertical rules except the column divider). The left column is about 45%.
- A cell with alternatives lists them on separate lines ("お見えになる ＊1 / お越しになる ＊2").
- The ＊1–＊3 notes sit **to the right of the first table**, in small Gothic.

**Web:** when any form contains " → ", `formsHtml` delegates to `kvTableHtml(forms, formNotes)`. Rows starting "意味 →" start a new table and become its `<thead>`. Values split on "／" become `<br>`-separated lines. Trailing "＊n" becomes `<sup class="kv-ref">＊n</sup>`.
```html
<div class="kv-wrap"><div class="kv-tables"><table class="kv"><thead><tr><th>意味</th><th>尊敬語</th></tr></thead><tbody>…</tbody></table>…</div>
  <div class="kv-notes">${fnotes}</div></div>
```

**CSS:**
- `.kv-wrap{display:grid; grid-template-columns:minmax(0,26em) minmax(0,1fr); gap:0 24px}`.
- `.kv{width:100%; border-collapse:collapse; margin:0 0 16px; font:15px var(--mincho)}`.
- `.kv th{background:var(--band-edge); color:#fff; font:600 14px var(--goth); padding:4px 8px}`.
- `.kv td{border-bottom:1px solid var(--rule); padding:5px 8px; vertical-align:top}`; `.kv td+td{border-left:1px solid var(--rule)}`.

**Responsive:** ≤700: `.kv-wrap` becomes 1 column and the notes go below the tables. Two columns always fit at 375; there is no horizontal scroll.

### C17 Web-only extras in a point [B]

- The deep-dive `<details>` is kept. Restyle it as a quiet outlined row: summary ≥44px tall, 14px. Place it after the examples, as today.
- The footer `学習済み` checkbox is kept and right-aligned after the ☞ line. The checkbox is 22px, the label is the tap target, min-height 44px.

### C18 やってみよう！ header and answer reference [C]

**Book (pp.19–25):**
- The pill "やってみよう！" at the left.
- **Right-aligned on the same row**: "▶答え 別冊P. 1" in small Gothic (12px).
- Items follow directly, with **no frame**.

**Web (`renderExercise` header):** `<div class="ex-head"><h4>${pill(title)}</h4><span class="ex-ref">${scoreChip}</span></div>`.
- The right slot holds the score chip (after grading). If data ever gains `answerRef`, it holds "▶答え 別冊P.N" instead.
- `.exercise` inside `.gp`/`.clip`/`.plus`: **no border, no background, no padding** (the book has none). This also recovers about 32px of width on phones.
- The grade/reset actions stay at the bottom.

**CSS:** `.ex-head{display:flex; justify-content:space-between; align-items:center; margin:22px 0 8px}`; `.ex-ref{font:12px var(--goth); color:var(--ink-2)}`; `.ex-actions{margin-top:10px}`. Buttons min-height 40px (44px under coarse pointers).

### C19 Practice multiple choice, inline "(a. … b. … c. …)" [C]

**Book (pp.20, 21, 22, 24):**
- Items numbered "1）".
- The options are printed **inside the sentence's parentheses**: "国籍、職業（a. ばかりでなく　b. に対して　c. を問わず）どなたでも参加できます。" Letters are "a." with a full stop and an em-space between options.
- Lines wrap naturally; continuation lines hang under the text start.
- Multi-blank items have one parenthesised group per blank (ch data `parts` with tags a/b).

**Web (`choiceItem`):** when the labels are letters (`abc`/`ab`/`ABC`, or the automatic ≤3 options) **and** the item's `q` has exactly as many placeholders as option groups (placeholders: "（　）" for single; "（ a ）", "（ b ）" … for `parts`), use **inline mode**.
- Replace the k-th placeholder with `<span class="opts opts--inline" data-answer="${ans}">（<button class="opt opt--inl" data-act="pick" data-j="0"><span class="opt-n">a.</span>ばかりでなく</button>…）</span>`.
- Otherwise fall back to block mode.
- `grade()` keeps working unchanged: it iterates `.opts` inside `.q` and reads `.opt.picked`.

**CSS:**
- `.q--inline .q-text{line-height:2.35}`.
- `.opt--inl{display:inline; border:1px solid transparent; border-radius:6px; padding:.1em .35em; margin:0 .15em; background:none; font:inherit; position:relative}`.
- `.opt--inl::after{content:""; position:absolute; inset:-8px -2px}` (hit-area extension).
- `.opt--inl:hover{border-color:var(--rule)}`; `.opt--inl.picked{background:var(--teal-soft); border-color:var(--teal)}`. Right and wrong states as C29.
- `.q-line{display:grid; grid-template-columns:2.2em 1fr}` with `.qn--paren`.

**Responsive:** inline chips wrap with the text, so nothing overflows. Under `pointer:coarse`, line-height is 2.6 so the stacked hit areas don't overlap.

### C20 Matching halves "1）… ・ ・ a）…" [C]

**Book (pp.19, 23, 24, 25, 196):**
- Two columns:
  - Left: "1）text" with a **dot "・" at the right end** of the column.
  - Right: "・ a）text" with the dot at its left.
- About 4–6 em of empty gutter between the dot columns (the student draws lines there).
- Rows pair visually (left i beside right i). Long texts wrap inside their column with a hanging indent, and the dot stays on the first line.

**Web (`matchBody`):** replace the `<select>` with letter buttons, and make each left row a normal `choice-q`. That way grading reuses the choice logic and the special `match-q` branch in `grade()`/`resetEx()` can be removed.
```html
<div class="match">
  <div class="match__row">
    <div class="q choice-q match-q" data-i="0">
      <div class="q-line"><span class="qn qn--paren">1）</span><div class="q-text">10月20日は社員研修につき、</div><span class="match__dot">・</span></div>
      <div class="opts opts--letters" data-answer="3">[a][b][c][d] (buttons, .opt-n only)</div>
      <div class="feedback">…full sentence + en…</div>
    </div>
    <div class="match__r"><span class="match__dot">・</span><span class="opt-n">a）</span><span>階段をご利用ください。</span></div>
  </div> …
</div>
```

**CSS (≥701):**
- `.match__row{display:grid; grid-template-columns:minmax(0,1fr) 4.5em minmax(0,1fr); align-items:start}`; the left q is `grid-column:1`, `.match__r` is `grid-column:3`.
- `.match__dot{padding:0 .3em}`; `.q-line` inside a match gets a `1fr auto` tail for the dot.
- `.opts--letters{display:flex; gap:6px; margin:.2em 0 0 2.2em}`; `.opts--letters .opt{min-width:34px; min-height:34px; justify-content:center}`.
- When picked, echo the letter in the gutter: `.match__row .picked-echo` (JS sets `data-pick` on the row; `::after` renders it centred in column 2 in a small circle).

**Responsive:** ≤700 collapses:
- The right column renders first as a **reference list** in a thin-bordered box (`.match__ref`, a separate `<ol>` duplicate; dots hidden).
- Then each left item with its letter row below.
- The duplicated right rows inside `.match__row` are hidden (`display:none`).
- Letter buttons are 44×44 under coarse pointers.

### C21 Word-bank fill and the Check box [C]

**Book (p.26):**
- The **Check frame**: a heavy **dashed** border (about 3px, dash 8, gap 6), square corners.
- The wordmark **"Check" + a solid open-book icon** sits on the top border at the left (like the Plus tag).
- "▶答え 別冊P. 1" right-aligned inside the top.
- Items "1）" with a long underline blank (about 6 em) in the sentence.
- **After each group of 4 items comes its word bank**: a **solid thin-bordered box**, fitted to its content (not full width), with the words spaced about 2 em apart.
- Numbering **continues across groups** (5）… 8）). Both groups live in **one** frame.

**Web:** new `checkHtml(checks, idBase)` [C], called from `chapterView` [B] as `checkHtml(p.check, \`ch${id}-part${pi}-check\`)`. It renders one frame; inside, each exercise is rendered by `renderExercise(ex, id, null, {bare:true, numOffset})`: no frame, header only on the first group.
```html
<section class="check" data-en-scope>
  <span class="check__tag">Check<span class="check__book" aria-hidden="true"></span></span>
  <div class="exercise ex-fill ex--bare" data-ex="…">
    <div class="q fill-q">…<button class="blank" data-act="blank" data-answer="1" aria-label="空欄1">　</button>…</div> ×4
    <div class="bank" role="group" aria-label="語群"><button class="chip" data-act="bank" data-j="0">に限り</button>…</div>
    <div class="ex-actions">…</div>
  </div>
  <div class="exercise … ex--bare">(items numbered from 5)</div>
</section>
```

**Interaction (replaces `<select>`):**
- Tapping a blank makes it *active* (outlined).
- Tapping a bank chip fills the active blank, or the first empty blank if none is active.
- Tapping a filled blank clears it.
- Keyboard: blanks and chips are buttons, so Tab/Enter work.
- `grade()` for `fill-q` compares each `.blank`'s `data-v` with its `data-answer`.
- Paired answers ("やら・やら") keep today's logic: the first blank is interactive and the others mirror it.

**CSS:**
- `.check{position:relative; border:3px dashed var(--rule); padding:26px 22px 16px; margin:36px 0}`.
- `.check__tag{position:absolute; top:-.85em; left:12px; background:var(--bg); padding:0 .4em; font:800 22px var(--goth); display:flex; gap:.25em; align-items:center}`.
- `.check__book{width:26px; height:22px; background:var(--ink); clip-path:polygon(0 8%,46% 0,50% 10%,54% 0,100% 8%,100% 100%,54% 92%,50% 100%,46% 92%,0 100%)}`.
- `.blank{display:inline-block; min-width:6em; min-height:1.6em; border:0; border-bottom:1.5px solid var(--ink); background:none; font:inherit; vertical-align:baseline; padding:0 .3em}`.
- `.blank.active{box-shadow:0 0 0 2px var(--teal)}`; `.blank.filled{color:var(--teal)}`.
- `.bank{display:inline-flex; flex-wrap:wrap; gap:.4em 2em; border:1px solid var(--ink-2); padding:.5em 1.4em; margin:14px 0 6px 2.2em; width:fit-content; max-width:calc(100% - 2.2em)}`.
- `.chip{border:0; background:none; font:16px var(--mincho); padding:.3em .2em}`; `.chip.used{opacity:.4}`.

**Responsive:**
- ≤600: frame padding 22px 12px 12px; `.bank` margin-left 0, gap .3em 1.2em; blanks min-width 4.5em; chips 44px tall under coarse pointers.
- ≤390: `.check__tag` 19px.

Practice-level `fill` (4 instances) uses the same markup without `.check`.

### C22 Write-in (`type:"write"`) [C]

**Book:** an underline blank inside the sentence.

**Web:** `<input class="write">` becomes `border:0; border-bottom:1.5px solid var(--ink); font:16px var(--mincho); width:7em; min-height:1.8em`. At ≤390, width `min(7em, 40vw)`.

### C23 まとめの問題 header, 問題N headers, instructions [C]

**Book (pp.27–29, 101–102, 170):**
- The review pages are **tinted grey at the outer margin**, with the content on a **white rounded panel**.
- At the top of the panel, a full-width **dark-grey capsule**: "まとめの問題" huge (about 30px), bold white, centred, with "Review questions" in bold white 15px beside it.
- "▶答え 別冊P.10" right-aligned under the capsule.
- Each section starts with a pill "問題1" followed by the bold title "〈文法形式の判断〉" (with furigana), then a Gothic instruction line.
  - Instructions contain inline visuals: "（　　）", "＿★＿", and **boxed** "1" / "5" (問題3).
- 問題4 with two sub-parts shows the header **once**, then "1 この問題では…" and "2 この問題では…" as numbered instruction paragraphs, each followed by its items.

**Web:** new `reviewHtml(ch)` [C], moved out of `chapterView`, which calls it.
- Parse each `r.title.ja` with `/^(問題\d+)\s*(〈.+?〉)\s*(\d)?\s*$/`. When a section has the same 問題N as the previous one, omit its header and emit only `<p class="rv-sub"><span class="rv-sub__n">2</span>${prompt}</p>`.
```html
<section class="review" id="review-1">
  <div class="review__panel">
    <h2 class="review__title">まとめの問題 <span class="review__en">Review questions</span></h2>
    <section class="rv">
      <h3 class="rv__head">${pill("問題1")}<span class="rv__name">〈文法形式の判断〉</span></h3>
      <p class="rv__instr">…</p>
      …items…
    </section>
  </div>
</section>
```
- Instruction formatting: `fmtInstr(s)` runs `fmt()`, then turns `[n]` into `<span class="pblank">n</span>` and "＿★＿" / "__★__" into `<span class="star-blank">★</span>`.

**CSS:**
- `.review{background:var(--review-bg); margin:56px calc(-1 * var(--main-pad)) 0; padding:24px var(--main-pad)}`.
- `.review__panel{background:var(--panel); border-radius:18px; padding:26px 30px}`.
- `.review__title{background:linear-gradient(#66696e,var(--pill)); color:var(--pill-ink); border-radius:999px; text-align:center; font:800 30px/1.3 var(--goth); padding:.2em 1em; margin:0 0 6px; letter-spacing:.1em}`; `.review__en{font-size:15px; letter-spacing:0; margin-left:.6em}`.
- `.rv{margin:0 0 40px}`.
- `.rv__head{display:flex; align-items:flex-end; gap:.4em; font:700 17px var(--goth); margin:0 0 .6em}`.
- `.rv__instr{font:15px/1.8 var(--goth)}`.
- The review exercises render `{bare:true}`: no frame.

**Responsive:**
- ≤600: `.review` bleeds to the viewport edges; panel padding 16px 12px, radius 12px; title 22px; `.review__en` goes on its own line (`display:block`, 12px). Today the pill wraps the English awkwardly inside the capsule.
- ≤390: title 20px.

### C24 問題1 (文法形式の判断): choice with a 4-column option grid [C]

**Book (p.27):**
- Boxed number, then the Mincho sentence with "（　　）".
- On the next line, indented to the sentence start, **four options in four equal columns**: a bold Gothic numeral, about 1 em of space, then the option in Mincho.
- There are no borders around the options.

**Web (`choiceItem`, block mode with `labels:"123"` or 4 options):**
- `<div class="opts opts--grid" data-cols="4">`, each option `<button class="opt opt--grid"><span class="opt-n">1</span><span class="opt-t">に限って</span></button>`.
- The JS picks `data-cols` from the longest option's `plain()` length *L*:
  - 4 when L ≤ 7
  - 2 when L ≤ 16
  - 1 otherwise
- This mirrors the book's own switch to 2×2 (p.27 ★ item 1) and to one column (reading, p.102).

**CSS:**
- `.opts--grid{display:grid; grid-template-columns:repeat(var(--cols),minmax(0,1fr)); gap:.2em 1em; margin:.3em 0 0 3.2em}`, with `[data-cols="4"]{--cols:4}` etc.
- `.opt--grid{display:grid; grid-template-columns:1.7em 1fr; align-items:start; text-align:left; border:1px solid transparent; background:none; border-radius:8px; padding:.25em .3em; min-height:40px; font:16px var(--mincho)}`.
- `.opt--grid .opt-n{width:1.5em; height:1.5em; border-radius:50%; display:grid; place-items:center; font:700 15px var(--goth)}`.
- `.opt--grid.picked .opt-n{background:var(--teal); color:#fff}` (like marking an answer sheet).
- `.opt-t{min-width:0; overflow-wrap:anywhere}`. This, with `display:grid` instead of `inline-flex`, **fixes the overflow and ruby-gap bugs** (§2.1).
- `.qn--box` at the left: `.q-line{grid-template-columns:3.2em 1fr}`.

**Responsive:**
- ≤600: margin-left 0 (options span the full width under the number). The thresholds drop to 4 cols only when L ≤ 4 and 2 cols when L ≤ 9.
- ≤390: 2 cols when L ≤ 7, else 1.
- Under coarse pointers, min-height is 44px.

### C25 問題2 (文の組み立て): ★ ordering [C]

**Book (pp.27, 28, 101, 170):**
- Boxed number, then the sentence with **four underline blanks** (each about 3.5 em, 1px) separated by spaces.
- The **★ is printed centred on the star blank's line**.
- The sentence may start or end with blanks.
- Options below in the 4-column grid (or 2×2, as in C24), with bold numerals.
- The instruction reads "次の文の＿★＿に入る最もよいものを…".

**Web (`orderItem`):**
- Slots are `<button class="slot${star?' slot--star':''}" data-act="unslot" data-k="k" aria-label="空欄${k+1}${star?'（★）':''}">`. Each starts empty with a `::before` underline; the star slot shows ★ centred.
- Pieces render with the same `.opts--grid .opt--grid` markup as C24 (`data-act="piece"`).
- A filled slot shows the piece's numeral in a small circle plus its text, 14px.
- The star slot keeps a small ★ above the text: `::after` at top −1.05em, 11px.

**CSS:** `.order-line{line-height:2.8}`; `.slot{display:inline-flex; align-items:end; justify-content:center; min-width:3.8em; min-height:1.9em; border:0; border-bottom:1.5px solid var(--ink); background:none; margin:0 .25em; padding:0 .25em; font:14px var(--mincho); vertical-align:baseline; position:relative}`; `.slot--star:not(.filled)::before{content:"★"; font-size:15px}`.

**Responsive:** ≤390: slot min-width 3em. line-height 2.8 keeps wrapped slot rows apart. Each slot's hit area is ≥44px tall via line-height and `::after` inset.

### C26 問題3 (文章の文法): passage cloze [C]

**Book (pp.28, 101):**
- The instruction includes boxed "1" and "5".
- The passage sits in a **dotted/dashed rectangle** (1.5px dashed grey, square corners): Mincho, 1-em paragraph indent, generous leading. Blanks are **boxed numbers** (a wide rectangle, numeral centred) inline in the text.
- Below the frame, one row per blank: **boxed number, then "1 opt  2 opt  3 opt  4 opt" in four columns on the same row**.

**Web (`textBlock`, `passageBody`) [C]:**
- `<div class="passage ja-book" data-en-scope><div class="passage__tools">${speakBtn}${enScope}</div>${title?<h4 class="passage__title">:""}<div class="ja"><p>…<span class="pblank" data-b="1">1</span>…</p></div><div class="en">…</div></div>`.
- Then `<div class="pq">` rows: `<div class="q choice-q pq-row"><span class="qn qn--box">1</span><div class="opts opts--grid" data-cols="4">…</div><div class="feedback">…</div></div>`.
- Nice-to-have: after a pick, `pblank[data-b=n]` shows the number plus the chosen option in small type (JS on pick).

**CSS:**
- `.passage{position:relative; border:1.5px dashed var(--rule); padding:16px 20px 12px; margin:10px 0 16px}`.
- `.passage p{text-indent:1em; margin:0}`.
- `.passage__tools{position:absolute; top:4px; right:6px; display:flex; gap:4px}` (no longer floated into the text).
- `.pblank{display:inline-grid; place-items:center; min-width:2.6em; height:1.45em; border:1px solid var(--ink); font:600 .9em var(--goth); margin:0 .25em; text-indent:0; vertical-align:.05em}`.
- `.pq-row{display:grid; grid-template-columns:3.4em 1fr; align-items:start; padding:.35em 0}`; `.pq-row .opts--grid{margin:0}`; `.pq-row .feedback{grid-column:2}`.

**Responsive:**
- ≤600: frame padding 14px 12px, `.passage__tools` top 2px.
- ≤390: `.pq-row` becomes `2.9em 1fr`; the options follow the C24 thresholds (often 2 cols).

### C27 問題3 (読解): reading comprehension [C]

**Book (pp.101–102, 170):**
- The dashed passage frame as in C26.
- Questions: boxed number and question text (Mincho).
- Options **stacked vertically**: bold numeral 1–4, then text with a hanging indent. Generous row gap.

**Web (`readingBody`):** `textBlock` plus `choiceItem` with `data-cols="1"` forced (`.opts--list`).

**CSS:** `.opts--list{grid-template-columns:1fr; gap:.25em; margin-left:3.2em}` (0 at ≤600). This fixes the ch2 and ch6 reading overflow (§2.1).

### C28 問題4 (聴解): listening [C]

**Book (pp.29, 102):**
- Task and summary items: boxed number, then options (either a vertical list 1–4 in Mincho, p.29, or a **2×2 grid** with bold numerals, p.102), and a **CD badge at the far right of the item's first row**.
- The question itself is **not printed** (it is only heard).
- Response items: boxed number, then just "**1　2　3**" in bold Gothic, with the CD badge at the right.

**Web (`listeningBody`):**
```html
<div class="q choice-q listen-q" data-i="0">
  <div class="lq-row"><span class="qn qn--box">1</span>
    <div class="opts opts--grid" data-cols="2|1" data-answer="2">…</div>
    ${cdBadge(queue, "問題1を聞く")}</div>
  <details class="script"><summary>スクリプト</summary><div class="dlg">…(C6c dialogue grid)…</div></details>
  <div class="feedback">…</div>
</div>
```
- Response mode: `.opts--resp` with three 44px round numeral buttons "1 2 3" inline, gap 1.2em.
- Book-faithful default: **don't print `it.question`** in the row. Show it as the first line of the transcript ("質問：…") and in the feedback after grading. The TTS queue is unchanged.
- The column rule from C24 applies (the book itself uses 2×2 for short options and a list for long ones).

**CSS:** `.lq-row{display:grid; grid-template-columns:3.2em 1fr 48px; align-items:start; gap:0 .4em}`; `.script{margin:.3em 0 0 3.6em}`; `.script summary{min-height:44px; display:flex; align-items:center; font:13px var(--goth); color:var(--ink-2)}`.

**Responsive:** ≤390: `.lq-row` becomes `2.9em 1fr 44px`; `.script` margin-left 0; options follow the C24 thresholds.

### C29 Grading states and feedback (web-only) [C]

- Picked: teal-filled numeral circle (grids), or a teal outline (inline chips).
- Right: green fill `--ok-soft` plus a green numeral circle.
- Wrong: red numeral circle plus line-through on the text (not on the numeral).
- The item's `.qn` fills green or red after grading (keep).
- `.feedback`: 3px left rule, `--bg` fill, 14px Gothic, margin-left equal to the number column (0 at ≤600).
- The score chip goes in the `.ex-ref` slot (C18).

### C30 Chapter footer navigation [A]

**Book:** a running footer at the bottom-right, "1 スタッフ募集のお知らせ ●21".

**Web (`chapterView`, the pager markup is [A]-owned CSS):**
```html
<nav class="pager"><a class="pager__prev" href="#/ch/1"><span class="pager__dir">← 前の章</span><span class="pager__t">1 スタッフ募集のお知らせ</span></a>
  <a class="pager__next" href="#/ch/3"><span class="pager__dir">次の章 →</span><span class="pager__t">3 ホテルの仕事</span></a></nav>
```

**CSS:** two equal cards (`grid-template-columns:1fr 1fr; gap:12px`), each ≥56px tall, 1px `--rule` border, radius 10px; next is right-aligned. **≤390:** 1 column, next first.

### C31 Shell: topbar, sidebar, pages [A]

Covered in §2.3–2.4. Pages (#/about, #/guide, #/index, #/compare, #/cando, #/drill): tables use `.tbl`. At ≤600, `.tbl.cmp` and `.tbl.idx` become stacked cards (`display:block` rows, `td::before{content:attr(data-h)}` labels). No horizontal overflow.

### Data additions (SCHEMA.md and data/frag, owned by [B])

All are optional and backward-compatible. Document them in `data/SCHEMA.md` under "Sample layout hints".

| Field | Where | Meaning |
|---|---|---|
| `sample.vertical: true` | 10.0, 10.1, 13.0, 13.1, 14.0 | Book prints it in 縦書き (C6e) |
| `sample.rings: false` | 2.1 (p.38); `article` is ring-less by default | No binder holes |
| `line.cont: true` | sentence-split prose samples: 2.0, 2.1, 3.0, 4.0, 7.0, 7.1, 10.0, 10.1, 11.0, 14.0 (verify each against the scan) | This line continues the previous paragraph |
| `line.style` | any sample line | One of `lead`, `row`, `cont`, `contact`, `center`, `right`, `credit`, `sep`. Overrides the heuristics in C6a/C6d |

- Edit `data/frag/chNN-pK.js`, then run `node tools/merge.js N` and `node tools/check.js data/chapters/chNN.js`.
- **Caution:** `data/frag/ch12-p1.js` and `ch13-p0.js` currently have uncommitted edits from the verification work. Re-read them before editing and don't overwrite unrelated changes.

---

## 2. Responsive and mobile plan

### 2.1 Current overflow and clipping causes (measured)

Measured with true device emulation (`mobile:true`, viewport meta honoured) at 390 and 375 with English shown. Probe source is in Appendix A.

**Tooling note first:** `tools/shot.sh ROUTE 390` does **not** show a 390-px layout. Headless Chrome's window has a **500-px minimum width**: the page lays out at 500 px (`innerWidth` = 500) and the PNG is cropped to 390. That is why every 390-px shot from shot.sh looks cut off at the right. Use the CDP-based script (Appendix A) and replace shot.sh with it [A].

| # | Route / width | Element | Overflow | Root cause | Fix (owner) |
|---|---|---|---|---|---|
| O1 | #/ch/2 @390/375 (reading 問題3) | `button.opt` | Page widens to **439 px** (+21 to +80 px past the frame) | `.opt{display:inline-flex}`: each text run and each `<ruby>` becomes a separate unbreakable flex item, so a long option can't wrap. Also `.opts{margin-left:36px}` | C24/C27: grid option with `.opt-t{min-width:0}`; list mode for reading; margin 0 at ≤600 [C] |
| O2 | #/ch/2 @375 (gp practice) | `button.opt` "b 気候や地形に対する理解も必要" | +25 px past the exercise | same as O1 | same [C] |
| O3 | #/ch/6 @375 (reading) | `button.opt` | +5 px clipped | same as O1 | same [C] |
| O4 | #/ch/12 @375 (listening options) | `button.opt` | page 382 px (+7) | same as O1 | C28 [C] |
| O5 | #/ch/8 @390/375 (gp 73) | `.gp-meta` (★★★ 🙇 目上・初対面・客に) | +58 to +75 px, **invisible**, clipped by `.gp{overflow:hidden}` | `.gp-head` flex, where `.gp-titles` has no `min-width:0`, and the meta has a long nowrap label | C7 grid band; remove `overflow:hidden`; icon-only scenes [B] |
| O6 | #/compare @375 | `table.tbl.cmp` | page 391 px (+15) | table min-content width, `.cmp-pat{white-space:nowrap}` | stacked-card tables ≤600 [A] |
| O7 | all option buttons with ruby (e.g. review 問題1, "に 限 って") | `.opt` | visual gaps, not overflow | the same flex-item split plus `gap:6px` between the ruby and text items | C24 grid [C] |

Other mobile defects seen in the 390-px shots (not overflow):
- The topnav is `display:none` at ≤600, and the sidebar contains only chapters, so **About / Guide / Index / Compare / Can-do / Drill are unreachable on phones**.
- Both toggle switches lose their labels at ≤900 (`.sw-l{display:none}`), leaving two anonymous switches.
- The chapter title wraps a single orphan character ("せ").
- The review capsule wraps "composition" onto a second line inside the pill.
- Order slots are 5.5 em wide, so sentences break into 3–4 ragged lines.
- The per-line `EN` float and the 🔊 on its own line shrink the measure (only about 280 px of text inside the gp card, then the exercise card). Nested cards cost 54 px per side: main 16 + gp 22 + exercise 16.
- `select` is 14.7px, so iOS zooms on focus.
- The sidebar uses `height:calc(100vh - var(--top))`; iOS dynamic toolbars need `dvh`.

### 2.2 Breakpoints

All are max-width, except `hover`/`pointer`.

| Name | Query | Layout |
|---|---|---|
| wide | `min-width:1200px` | Sidebar 280px + centred content column max 800px + fixed side-tab (C3) |
| desktop | 901–1199 | Sidebar 260px + content fluid (max 800) |
| tablet | `max-width:900px` | Sidebar becomes an off-canvas drawer; topbar shows the hamburger; content full width, max 760 centred |
| phone | `max-width:600px` | Main padding 14px; full-bleed banners, 見本文 and review band; per-container EN buttons; tables stacked; grids per the C24 thresholds |
| small phone | `max-width:390px` | Main padding 12px; the smaller type steps in 0.3; 2- or 1-column option grids |
| touch | `(pointer:coarse)` | All interactive targets ≥44×44 (padding or `::after` hit extension) |
| hover | `(hover:hover)` | Hover styles only here (no sticky hover on iOS) |

- Content measure: `main{max-width:800px; margin-inline:auto}` inside the flex area (today it is left-aligned and 980 px wide). About 44 Japanese characters per line at 17px, close to the book's measure.
- Define `--main-pad` (28px / 20px / 14px / 12px) so full-bleed components can use `calc(-1*var(--main-pad))`.

### 2.3 Topbar [A]

- Height: 56px desktop, **52px at ≤600** (`--top` updated in the media query).
- Sticky, with `padding-top: env(safe-area-inset-top)`. Add `viewport-fit=cover` to the viewport meta.
- ≤900: `☰` button (44×44, `aria-expanded` synced), brand (compact "N2 文法"; `.brand-sub` hidden), a spacer, then the toggles.
  - The toggles keep **short visible labels**: "ふ" for furigana and "EN". The labels stay visible (don't hide `.sw-l`; shorten its text via `data-short`).
  - Each switch label is ≥44px tall (padding), and the track is 38×22.
  - `⚙` is 44×44; its popover is `position:fixed; right:8px; top:calc(var(--top)+6px); width:min(280px, calc(100vw - 16px))`.
- ≤600: the topnav is hidden **and** its links are rendered at the top of the drawer (see 2.4).

### 2.4 Sidebar and drawer [A]

- Desktop: sticky, `height:calc(100dvh - var(--top))`, own scroll, `overscroll-behavior:contain`.
- ≤900: `position:fixed; top:var(--top); bottom:0; width:min(86vw, 320px)`, slides in with transform.
  - `body.sb-open{overflow:hidden}` (scroll lock); a scrim closes it; `Esc` closes it; focus moves to the first link on open and back to ☰ on close.
- The drawer gets a new first block, `<nav class="sb-pages">`, with the six page links (この本について, 使い方, さくいん, 似ている文型, できること, 練習) as 44px rows. It shows at ≤600 only, when the topnav is hidden.
- Link rows: `.sb-ch-link` min-height 44px under `pointer:coarse` (today 36); `.sb-gps a` min-height 40px coarse (today 25), with padding `8px 14px 8px 48px`.
- The active point stays highlighted; the open chapter auto-scrolls into view in the drawer on open.

### 2.5 Font sizes and ruby

See the table in 0.3.
- Body is 16px at every width (today 15.5 at ≤600).
- `rt` is `max(.5em, 9px)`. At 16px, .5em = 8px, which is too small on retina iPhones for dense readings, hence the 9px floor.
- Sidebar and chip `rt` stay hidden (as today).
- Everything with furigana has line-height ≥ 1.9.

### 2.6 Touch targets (≥44 px, measured today at 390)

| Control | Today (h × w) | Target | How |
|---|---|---|---|
| `.sb-toggle` ☰ | 29×31 | 44×44 | explicit size [A] |
| `.switch` | 20 tall | 44 | label padding [A] |
| `.settings summary` ⚙ | 33×11 | 44×44 | [A] |
| `.en-btn` | 19×26 | 32 visual / 44 hit; per-container at ≤600 | 0.5 [A css, B/C markup] |
| `.speak` 🔊 | 23×26 | 32 visual / 44 hit | `::after{inset:-6px}` [A css] |
| `.mt-gp` chips | 30 | 44 coarse | C5 [B] |
| `.opt` | 37 | 44 coarse | C24 [C] |
| `.piece` | 35 | 44 coarse | C25 [C] |
| `.slot` | 29 | 44 hit | C25 [C] |
| `select` (match / fill) | 27 | removed; letter buttons and blanks ≥44 | C20/C21 [C] |
| `.studied input` | 18 | label row 44 | C17 [B] |
| `.btn` | 34 | 44 coarse | base [A] |
| `.gp-link` | 24 | 44 coarse | C15 [B] |
| `.pager a` | 29 | ≥56 | C30 [A] |
| `.sb-gps a` | 25 | 40–44 | 2.4 [A] |
| `.script summary` | 24 | 44 | C28 [C] |
| `.btn.play` / CD badge | 40 | 44 | 0.4 [A] |

### 2.7 No horizontal overflow, anywhere

- Global guard [A]: `html, body { overflow-x: clip; }`. This is **not** a substitute for fixing O1–O6; it only guards against regressions. Use `clip`, not `hidden`, so sticky elements keep working.
- Rules for all implementers:
  - Every flex or grid child that holds text gets `min-width:0`.
  - Never `display:inline-flex` on elements whose content mixes text and `<ruby>`. Wrap the text in a `<span>` child, or use grid/block.
  - No `white-space:nowrap` on content text (only on numerals, stars and badges).
  - Long ASCII runs (URLs, e-mails in C6a) get `overflow-wrap:anywhere`.
  - The only allowed horizontal scroller is `.vt-scroll` (C6e), and it must be `overscroll-behavior-x:contain`.

### 2.8 How two-column layouts collapse

| Component | ≥701 | ≤700 / ≤600 | ≤390 |
|---|---|---|---|
| C20 matching | 3-col grid (left · gutter · right) with ・ dots | right list first as a reference box, then left items with letter buttons; dots hidden | same |
| C24/C25/C26 options | 4 / 2 / 1 cols by length (≤7 / ≤16 / longer) | 4 only if ≤4 chars, 2 if ≤9, else 1; no left indent | 2 if ≤7, else 1 |
| C27 reading options | 1 col, indented 3.2em | 1 col, no indent | same |
| C28 listening | grid `3.2em 1fr 48px` | same | `2.9em 1fr 44px` |
| C16 keigo | tables left, notes right | notes below | same |
| C6a notice | key 5.2em plus 3-cell pay grid | key 4.6em, auto cells | cells wrap (flex); contact 1 col |
| C1 banner | numeral · text · tab chip | English title on its own line; tab chip under title | smaller type |
| Pager | 2 cols | 2 cols | 1 col |

### 2.9 Sticky elements

- Sticky: the topbar (all widths) and the sidebar (≥901).
- Keep `html{scroll-padding-top:calc(var(--top) + 12px)}` so anchor jumps (#/gp/N, review) clear the bar. Update it at ≤600 with `--top:52px`.
- Nothing else is sticky. In particular, no sticky exercise bars and no sticky banners: they would eat phone height.
- The side-tab (C3) is `position:fixed` at ≥1200 only.

---

## 3. Work split (3 implementers, non-overlapping)

### 3.0 Phase 0: [A] first (about 1–2 h, before B and C start)

1. **Split CSS verbatim** (no visual change) into `assets/css/base.css`, `shell.css`, `content.css` and `exercises.css`. Delete `assets/style.css` and link the four files in `index.html`, in that order. Mapping of today's sections:
   - `:root` / dark / reset / body / ruby / strong / `.en*` / `.bi` / `.btn` / `.speak` / `.badge*` → **base**
   - topbar / layout / sidebar / media 900 & 600 / home / pages / `.tbl` / compare / cando-page / front / `.site-foot` / `.pager` → **shell**
   - "chapter" and "grammar point card" sections (`.ch-head` … `.studied`) → **content**
   - the "exercises" section, plus `.check-wrap`, `.review*`, `select`, `input.write`, `.opt-tag` → **exercises**
2. **Mark ownership regions** in `app.js` with banner comments (`// ==== [A] … ====`, `// ==== [B] … ====`, `// ==== [C] … ====`). Move functions so each region is contiguous (pure moves).
3. **Action registry:** `const ACT = {}`. The click handler becomes `const f = ACT[act]; if (f) return f(t, e);`, with the existing branches rewritten as entries. `pick`, `piece`, `unslot`, `grade` and `reset` move into C's region; `en`, `speak`, `listen`, `sb`, `redrill`, `en-scope` and `vmode` stay in A's (vmode's DOM work is B's, via `ACT.vmode` registered in B's region). B and C then register new actions (`blank`, `bank`, `vmode`, `toc`) in their own regions.
4. **Helper contract** (A's region): `pill()`, `cdBadge()`, `bi(o, tag, cls, {book})`, `fmt(s, {vertical})` with the BADGE_RE fix and shape classes, `.en-all` scoping, `settings.vertical` default `"auto"`, plus the `.ja-book`, `.pill`, `.qn--box`, `.qn--paren` and `.badge` shapes in base.css.
5. **Tools:** add `tools/shot.mjs` (CDP screenshot with device emulation) and `tools/overflow.mjs` (the Appendix A probe). Retire or redirect `tools/shot.sh`.

### 3.1 Implementer A: shell and responsive layout

- **Files:** `index.html`, `assets/css/base.css`, `assets/css/shell.css`, `tools/shot.mjs`, `tools/overflow.mjs`.
- **app.js functions:** registry, `LS`/settings/progress, `$`/`$$`/`esc`, `fmt`, `plain`, `prose`, `en`, `enToggle`, `bi`, `speakBtn`, `pill`, `cdBadge`, `allPoints`, `findPoint`, `gpLink`, `TTS`, `sidebar`, `updateSidebarProgress`, `route`, `sameChapterJump`, `applySettings`, all `document.addEventListener` wiring and the `ACT` core entries, `homeView`, `guideView`, `aboutView`, `indexView`, `compareView`, `canDoView`, `drillView`, `notFound`, `N2.resetProgress`.
- **Components:** 0.2–0.5, C30 (pager CSS), C31, §2.2–2.7.
  - Covers: topbar and drawer (with the page links), toggles with labels, the settings popover, safe areas, `dvh`, the global overflow guard, touch sizes for shell controls, the compare/index/cando stacked tables at ≤600 (O6), and `.en-btn`/`.speak` gutter placement.
- **Must not edit:** `content.css`, `exercises.css`, or B/C regions.

### 3.2 Implementer B: chapter content components

- **Files:** `assets/css/content.css`, `data/SCHEMA.md` (layout hints section), `data/frag/*.js` (sample `vertical`/`rings`/`cont`/`style` only), then regenerate `data/chapters/*.js` via `tools/merge.js`.
- **app.js functions:** `stars`, `MARKS`, `marks`, `gpCard`, `formsHtml` plus new `formulaHtml` and `kvTableHtml`, `examplesHtml`, `notesHtml`, `sampleHtml` plus new `noticeHtml`, `proseHtml`, `dialogueHtml` and `verticalHtml`, `chapterView` (plus new `bannerHtml`; it calls C's `checkHtml` and `reviewHtml`), `canDoHtml`, and the `ACT.vmode` / `ACT.toc` handlers.
- **Components:** C1–C17, plus the O5 fix.
- **Must not edit:** base/shell/exercises CSS, or A/C regions. Needs from A: helpers in Phase 0, the `fmt({vertical})` tcy wrapping, `.en-all`.

### 3.3 Implementer C: exercises and review

- **Files:** `assets/css/exercises.css`.
- **app.js functions:** `EX`, `exSeq`, `renderExercise` (plus the `{bare, numOffset}` options), `whyHtml`, `optLabel`, `optGroup` (grid/inline/letters/resp modes plus the column heuristic), `choiceItem`, `matchBody`, `fillBody`, `normAns`, `writeItem`, `orderItem`, `textBlock`, `passageBody`, `readingBody`, `listeningBody`, `grade`, `resetEx`, `resetOrder`, new `checkHtml`, `reviewHtml` and `fmtInstr`, and the `ACT.pick` / `piece` / `unslot` / `grade` / `reset` / `blank` / `bank` handlers.
- **Components:** C18–C29, plus the O1–O4 and O7 fixes.
- **Must not edit:** base/shell/content CSS, or A/B regions. `drillView` (A) calls `renderExercise`; keep its signature backward-compatible.

### 3.4 Interfaces and conflict rules

- **Call boundaries:**
  - B → C: `checkHtml(checks, idBase)` and `reviewHtml(ch)` return HTML strings.
  - B and C → A: helpers only.
  - A → C: `renderExercise(ex, id, title, opts?)`.
- **Exercise IDs** (progress keys) must not change: `ch${id}-part${pi}-check[-k]`, `ch${id}-review-${k}`, `gp${no}-p${j}`, and so on. Saved scores depend on them.
- **Shared classes** are defined once, in base.css (A): `.bi`, `.ja`, `.en`, `.en--book`, `.pill`, `.qn*`, `.badge*`, `.btn`, `.speak`, `.cd-badge`. B and C may add *modifiers* in their own files but must not restyle base classes globally.
- **New tokens:** B or C asks A, or defines component-scoped custom properties in their own file (e.g. `.check{--dash: …}`).
- **Order:** Phase 0 (A) → then A, B and C in parallel. Each implementer runs the §4 checks for their own components before handing off, and A runs the full matrix last.
- **No git operations** unless the owner asks. When editing the same `app.js`, re-read the file before each edit (other regions may have moved) and use region-unique anchors in Edit calls.

---

## 4. QA checklist

**Tools:**
- `node tools/shot.mjs ROUTE WIDTH HEIGHT OUT [light|dark]` for screenshots.
- `node tools/overflow.mjs ROUTE WIDTH [en]` for overflow. It must print `docW == vw` and empty `vp`/`clip`.
- `node tools/check.js data/chapters/chNN.js` for every chapter after data edits.

**Widths:** 1280, 768, 390 (iPhone 14/15), 375 (iPhone SE/mini). **Modes:** light and dark; EN off and on; furigana on and off.

### 4.1 Global pass criteria (every route × width)

1. `documentElement.scrollWidth === clientWidth` (no horizontal scroll) with EN on and off; no element clipped by a component frame (probe `clip` empty).
2. At ≤900 with a coarse pointer, every interactive element's hit box is ≥44×44 (probe script variant in Appendix A).
3. Body text ≥16px (15.5 allowed at ≤390 for Gothic UI text), `rt` ≥9px, inputs ≥16px (no iOS focus zoom).
4. No console errors; `#/` → chapter → gp jump → review jump all land below the sticky topbar.
5. Dark mode: every book-grey token has a dark counterpart, with no white panels on dark (check the 見本文 curl, the Plus tag and Check tag backgrounds, and the review band).
6. Keyboard: Tab reaches every control in order; focus ring visible; the drawer traps focus while open, Esc closes it.

### 4.2 Route matrix

| Route | 1280 | 768 | 390 | 375 | Specific checks |
|---|---|---|---|---|---|
| `#/` | ✓ | ✓ | ✓ | ✓ | Card grid 1 col at ≤600; hero buttons wrap; drawer shows the page links |
| `#/ch/1` | ✓ | ✓ | ✓ | ✓ | C1 banner, C3 edge tab at 1280 only; C4 bullets; C6a notice (keys aligned, pay cells aligned under 7時〜 / 1,000円〜, contact block with URL under ☎); C7 band ★★ black; C8 icon-only formal scene; C10 bracket for gp 3/4/6 (prefix) and gp 5/7/8 (suffix); C12 hanging ①; C13 clip with overlapping paperclip (gp 2, 3); C14 Plus tag on the border (gp 7); C15 ☞ right-aligned; C19 inline "（a. … b. … c. …）"; C20 matching with ・ dots at ≥701 and a reference box at ≤700; C21 one dashed Check frame, banks **below** items, numbering 1–8 |
| `#/ch/1/review` | ✓ | ✓ | ✓ | ✓ | C23 capsule (no wrap inside the pill at ≤600, English on its own line); 問題1 4-col grid at 1280 and 2/1 col at 390; 問題2 slots with ★ on the line, 2×2 pieces for long ones; 問題3 dashed passage with boxed blanks, option rows beside boxed numbers; 問題4 summary items with the CD badge at the right; the question is not printed |
| `#/ch/2` | ✓ | ✓ | ✓ | ✓ | Split chapter: banner "（1）" plus a part banner "（2）"; speech prose paragraphs (1 paragraph in part 1 after `cont`); 2.1 frame without rings; reading options (O1/O2 fixed) |
| `#/ch/2/review` |  | ✓ | ✓ | ✓ | Reading C27 list options; 問題4 header shown **once** with sub-instructions "1" and "2"; response "1 2 3" buttons |
| `#/ch/4` | ✓ |  | ✓ | ✓ | News prose: 5 paragraphs, 1-em indent |
| `#/ch/5` | ✓ | ✓ | ✓ | ✓ | Dialogue: colons aligned, hanging indent (C6c) |
| `#/ch/6/review` | ✓ |  | ✓ | ✓ | Reading overflow O3 fixed; listening task 2×2 plus CD badge; response rows |
| `#/ch/8` and `#/gp/73` | ✓ | ✓ | ✓ | ✓ | Header band doesn't clip ★★★ or the icon (O5); keigo C16 tables with dark header rows, notes right at 1280 and below at ≤700; "＊1" not doubled |
| `#/ch/10` | ✓ | ✓ | ✓ | ✓ | Vertical essay: 縦 at 1280/768 (auto), 横 at 390/375 (auto); toggle persists; tcy digits; scroller starts at the right edge; page never scrolls sideways; `[Pl]` square badge; `［なA~~だ~~な　~~N だ~~］` strikes visible over badges |
| `#/ch/11` | ✓ |  | ✓ | ✓ | Article: no rings, centred headline, credit right-aligned |
| `#/ch/13` | ✓ | ✓ | ✓ | ✓ | Vertical story both parts; "〜〜〜" separator; EN panel below the vertical block |
| `#/ch/14` | ✓ | ✓ | ✓ | ✓ | Editorial masthead "社説" boxed plus a large vertical headline; optional 2-tier at 1280 (or clean single-tier fallback) |
| `#/ch/12` |  |  | ✓ | ✓ | Listening overflow O4 fixed |
| `#/guide` | ✓ |  | ✓ | ✓ | Legend uses the new badge shapes (circle N/V, pill V-x, square Pl) and icon-only scenes with text beside them |
| `#/about` | ✓ |  | ✓ |  | Front-matter tables fit |
| `#/index` | ✓ |  | ✓ | ✓ | Search input 16px; table stacked at ≤600 |
| `#/compare` | ✓ |  | ✓ | ✓ | O6 fixed (stacked cards at ≤600) |
| `#/cando` | ✓ |  | ✓ | ✓ | Table stacked at ≤600 |
| `#/drill` | ✓ |  | ✓ | ✓ | Options use the C24 grid; "New set" works |

### 4.3 Interaction checks (390 and 1280)

- **Grading:** every exercise type grades correctly and Reset clears it: choice inline, choice grid, parts (a)/(b), match letters, fill tap-to-fill (including paired "やら・やら"), write, order ★, passage, reading, listening task/summary/response. Scores are saved under the **same IDs** as before; existing localStorage progress still shows.
- **EN:** the global toggle and the E key show all English; per-line EN at ≥601 and per-container EN at ≤600 toggle only their scope.
- **TTS:** the CD badge plays the 見本文 (vertical too), listening items play, and the `.speaking` state is visible.
- **Drawer:** opens and closes; scroll locks while open; it closes on navigation.
- **Furigana off:** layouts don't jump (line-height stays), and the notice columns stay aligned.

---

## Appendix A: measurement helpers (currently in /tmp/lay; [A] moves them to tools/)

- `/tmp/lay/cdp.mjs ROUTE W H OUT [light|dark]` launches headless Chrome with `--remote-debugging-port`, then calls `Emulation.setDeviceMetricsOverride({width:W, height:H, deviceScaleFactor:1, mobile:W<700})` and `Emulation.setEmulatedMedia(prefers-color-scheme)`. It navigates to `http://localhost:8765/#/ROUTE`, waits 2.5 s, and saves `Page.captureScreenshot`. Node ≥22 is required (global `WebSocket`).
- `/tmp/lay/probe.mjs ROUTE W [en]` does the same setup and then evaluates `/tmp/lay/probe-fn.js`:

```js
(() => {
  const vw = document.documentElement.clientWidth, docW = document.documentElement.scrollWidth;
  const name = el => el.tagName.toLowerCase() + (el.classList.length ? "." + [...el.classList].join(".") : "");
  const txt = el => (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 24);
  const vp = [];   // outermost elements past the viewport's right edge
  document.querySelectorAll("body *").forEach(el => { const r = el.getBoundingClientRect();
    if (r.width && r.right > vw + 1) { const p = el.parentElement;
      if (p && p.getBoundingClientRect().right > vw + 1 && p.id !== "main" && p.tagName !== "BODY") return;
      vp.push(name(el) + " +" + Math.round(r.right - vw) + " " + txt(el)); } });
  const clip = []; // elements poking out of a component frame (hidden overflow counts too)
  document.querySelectorAll(".gp, .sample, .exercise, .cando, .plus, .clip, .passage, .check, .tbl, .gp-bar").forEach(box => {
    const br = box.getBoundingClientRect();
    box.querySelectorAll("*").forEach(el => { const r = el.getBoundingClientRect();
      if (r.width && r.right > br.right + 1) { const p = el.parentElement;
        if (p !== box && p.getBoundingClientRect().right > br.right + 1) return;
        clip.push(name(box) + " > " + name(el) + " +" + Math.round(r.right - br.right) + " " + txt(el)); } }); });
  return JSON.stringify({ vw, docW, vp: [...new Set(vp)].slice(0, 10), clip: [...new Set(clip)].slice(0, 12) });
})()
```

A touch-target variant iterates over `button, a, summary, label, input, select, [data-act]` and reports any visible element whose bounding box (plus a `::after` extension, if present) is under 44×44 at ≤900 with `mobile:true`.
