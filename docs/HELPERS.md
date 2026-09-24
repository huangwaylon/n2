# Shared helper contract (owned by implementer A — core region of assets/app.js)

B and C use these; do not redefine them. Modifiers go in your own CSS file; don't restyle the base classes.

- `fmt(s, opts = {})` → HTML. Badges, `{漢字|かな}` ruby, `**bold**`, `~~strike~~`, `＿＿`, `\n`.
  `opts.vertical: true` wraps standalone 1–2 digit numbers in `<span class="tcy">` (upright in 縦書き).
  Badges accept subscripts/digits (`[N₁]`, `[いA₂]`, `[V-る₁]`, `[V-Pl]`) and render
  `<span class="badge {b-n|b-i|b-na|b-pl|b-v} {b-round|b-pill|b-sq}">` (round = bare N/V/A/いA/なA, pill = with "-", square = Pl/Po).
  e.g. `fmt("{50|ごじゅう}歳の12人", { vertical: true })`
- `bi(o, tag = "p", cls = "", opts = {})` → HTML for `{ja, en}` (or a string). `opts.book: true` marks English the book prints
  (`en--book`, small grey Gothic, still hidden until EN on). `opts.vertical` is passed to fmt.
  e.g. `bi(g.usage, "p", "usage", { book: true })`
- `pill(html, cls = "")` → `<span class="pill ${cls}">…</span>` (dark rounded label; html inserted raw — pass fmt() output).
  e.g. `pill("どう使う？ <span class='en-inline'>How to use</span>")`
- `cdBadge(queue, label = "音声を聞く")` → headphone "CD ▶" play button (`data-act="listen"`, `.speaking` while playing);
  queue = `[{ text, v }]`, v = "m"|"f".  e.g. `cdBadge(s.lines.map(l => ({ text: plain(l.ja), v: l.v || "f" })), "見本文を聞く")`
- `enScopeBtn()` → EN button that toggles `.en-all` on the nearest `[data-en-scope]` container (shows all `.en` inside; exercise
  feedback English still waits for grading).
- `settings.vertical` ("auto" | "v" | "h", persisted), `verticalOn()` (true for "v", or "auto" at ≥901 px), `setVertical(mode)`.
  B registers `ACT.vmode = (t) => { setVertical(t.dataset.v); … }` in its own region.
- Action registry: `ACT[name] = (el, event) => {…}` in your own region; markup `data-act="name"`. Unknown actions no-op.
- Base CSS (base.css): `.pill`, `.qn.qn--box` (boxed review number), `.qn.qn--paren` (`<span class="qn qn--paren">1）</span>`),
  `.ja-book` (Mincho, line-height 2.0), `.en--book`, `.en-all`, `.tcy`, `.cd-badge` (44×44), `.b-round/.b-pill/.b-sq`,
  tokens `--goth --mincho --band --band-edge --banner --pill --pill-ink --pill-shadow --rule --note-bg --badge-bg --badge-ink --review-bg --en-book` (+dark).
