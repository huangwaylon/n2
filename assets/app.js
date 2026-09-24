/* TRY! N2 grammar companion — single-page renderer. No build step. */
(function () {
  "use strict";

  // ============================================================================
  // ===== [A] core: registry, storage, helpers, TTS, action registry — owned by implementer A =====
  // ============================================================================

  // ---------- data registry (chapter/compare/front files call these) ----------
  const N2 = (window.N2 = window.N2 || {});
  N2.chapters = [];
  N2.compare = N2.compare || null;
  N2.register = (ch) => {
    N2.chapters.push(ch);
    N2.chapters.sort((a, b) => a.id - b.id);
  };
  N2.registerCompare = (groups) => (N2.compare = groups);
  N2.registerFront = (sections) => (N2.front = sections);

  // ---------- storage ----------
  const LS = {
    get(k, d) {
      try { const v = localStorage.getItem("n2." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; }
    },
    set(k, v) { try { localStorage.setItem("n2." + k, JSON.stringify(v)); } catch (e) {} },
  };
  // settings.vertical: "auto" | "v" | "h" — 縦書き for sample.vertical texts; auto = 縦 at ≥901 px, 横 below
  const settings = Object.assign({ furigana: true, english: false, rate: 0.9, vertical: "auto" }, LS.get("settings", {}));
  const progress = Object.assign({ studied: {}, scores: {} }, LS.get("progress", {}));
  const saveSettings = () => LS.set("settings", settings);
  const saveProgress = () => LS.set("progress", progress);

  // ---------- helpers ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const LETTERS = "abcdefghijklmnop";
  const CIRCLED = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮";

  // POS badge: [N] [V] [いA] [なA] [A] [Pl] [Po], optional subscript/digit ([N₁] [いA₂]), optional "-form" ([V-る] [V-Pl] [V-~~ます~~])
  const BADGE_RE = /\[((?:N|V|いA|なA|A|Pl|Po)[₀-₉0-9]?(?:-[^\]\s]*)?|(?:N|V|いA|なA|A)~~[^\]]*~~)\]/g;
  const TCY_RE = /(?<![\d,.])\d{1,2}(?![\d,.])/g;

  // inline markup → HTML.  opts.vertical: wrap standalone 1–2 digit runs in <span class="tcy"> (縦中横), outside tags and ruby
  // badge classes: colour hook b-n | b-i | b-na | b-pl | b-v, plus shape b-round (bare N/V/A) | b-pill (has "-") | b-sq (Pl/Po)
  function fmt(s, opts = {}) {
    if (s == null) return "";
    let t = esc(s);
    t = t.replace(BADGE_RE, (m, inner) => {
      const html = inner.replace(/~~(.+?)~~/g, "<s>$1</s>");
      const cls = /^N/.test(inner) ? "b-n" : /^いA/.test(inner) ? "b-i" : /^なA/.test(inner) ? "b-na" : /^P/.test(inner) ? "b-pl" : "b-v";
      const shape = /^P/.test(inner) ? "b-sq" : inner.includes("-") ? "b-pill" : "b-round";
      return `<span class="badge ${cls} ${shape}">${html}</span>`;
    });
    t = t.replace(/\{([^{}|]+)\|([^{}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
    t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/~~(.+?)~~/g, "<s>$1</s>");
    t = t.replace(/＿＿/g, '<span class="blank">　　　</span>');
    t = t.replace(/\n/g, "<br>");
    if (opts.vertical) {
      let inRuby = 0;
      t = t.split(/(<[^>]*>)/).map((seg) => {
        if (seg[0] === "<") { if (/^<ruby\b/.test(seg)) inRuby++; else if (seg === "</ruby>") inRuby--; return seg; }
        return inRuby ? seg : seg.replace(TCY_RE, '<span class="tcy">$&</span>');
      }).join("");
    }
    return t;
  }
  // plain text for TTS
  function plain(s) {
    return String(s || "")
      .replace(/\{([^{}|]+)\|([^{}]+)\}/g, "$1")
      .replace(/\*\*/g, "")
      .replace(/~~.+?~~/g, "")
      .replace(/＿＿|（　）/g, "、なになに、")
      .replace(/\[(\d+)\]/g, "、")
      .replace(/\[[^\]]+\]/g, "");
  }
  // English long-form: paragraphs + bullets
  function prose(s) {
    if (!s) return "";
    return String(s)
      .split(/\n\s*\n/)
      .map((block) => {
        const lines = block.split("\n");
        if (lines.every((l) => /^\s*- /.test(l))) return "<ul>" + lines.map((l) => "<li>" + fmt(l.replace(/^\s*- /, "")) + "</li>").join("") + "</ul>";
        return "<p>" + lines.map(fmt).join("<br>") + "</p>";
      })
      .join("");
  }
  const en = (s, tag = "div", cls = "") => (s ? `<${tag} class="en ${cls}">${fmt(s)}</${tag}>` : "");
  const enToggle = () => `<button class="en-btn" data-act="en" title="Show / hide English">EN</button>`;
  // bilingual line. o: string (Japanese only) or {ja, en}. opts.book: the English is printed in the book (.en--book, grey
  // Gothic) rather than our translation; opts.vertical is passed to fmt() for the Japanese.
  const bi = (o, tag = "p", cls = "", opts = {}) => {
    if (!o) return "";
    if (typeof o === "string") return `<${tag} class="${cls}">${fmt(o, opts)}</${tag}>`;
    return `<div class="bi ${cls}">${o.en ? enToggle() : ""}<${tag} class="ja">${fmt(o.ja, opts)}</${tag}>${en(o.en, "div", opts.book ? "en--book" : "")}</div>`;
  };
  // one EN button for a whole container: put data-en-scope on the container, this button in its header row
  const enScopeBtn = () => `<button class="en-btn en-btn--scope" data-act="en-scope" title="Show / hide English">EN</button>`;
  // dark rounded label (できること / どう使う？ / やってみよう！ / 問題N). html is inserted as-is (pass fmt() output if needed)
  const pill = (html, cls = "") => `<span class="pill ${cls}">${html}</span>`;
  // headphone "CD ▶" play button for a TTS queue [{text, v}] (v: "m" | "f"); same data-act="listen" as the ▶ buttons
  const cdBadge = (queue, label = "音声を聞く") =>
    `<button class="cd-badge" data-act="listen" data-q='${esc(JSON.stringify(queue)).replace(/'/g, "&#39;")}' aria-label="${esc(label)}" title="${esc(label)}"><span class="cd-badge__cd">CD</span><span class="cd-badge__play">▶</span></button>`;
  // 縦書き: effective mode for sample.vertical texts, and a setter that persists it (B's ACT.vmode calls setVertical)
  const verticalOn = () => settings.vertical === "v" || (settings.vertical !== "h" && matchMedia("(min-width: 901px)").matches);
  const setVertical = (mode) => { settings.vertical = mode; saveSettings(); };
  const speakBtn = (text, extra = "") => `<button class="speak" data-act="speak" data-text="${esc(plain(text))}" ${extra} title="Listen">🔊</button>`;
  function allPoints() {
    const out = [];
    N2.chapters.forEach((ch) => ch.parts.forEach((p, pi) => p.points.forEach((g) => out.push({ g, ch, pi }))));
    return out;
  }
  const findPoint = (no) => allPoints().find((x) => x.g.no === no);
  const gpLink = (no) => {
    const f = findPoint(no);
    return f ? `<a class="gp-link" href="#/gp/${no}">${no} ${fmt(f.g.pattern)}</a>` : `<span class="gp-link">${no}</span>`;
  };

  // ---------- TTS ----------
  const TTS = {
    voices: [],
    load() {
      if (!("speechSynthesis" in window)) return;
      const pick = () => (this.voices = speechSynthesis.getVoices().filter((v) => /^ja/i.test(v.lang)));
      pick();
      speechSynthesis.onvoiceschanged = pick;
    },
    voiceFor(g) {
      const vs = this.voices;
      if (!vs.length) return null;
      const male = vs.filter((v) => /otoya|ichiro|keita|hattori|male|男|daichi|takumi/i.test(v.name));
      const female = vs.filter((v) => /kyoko|haruka|ayumi|nanami|mizuki|o-ren|sayaka|female|女|google/i.test(v.name));
      if (g === "m") return male[0] || vs[0];
      return female[0] || vs[0];
    },
    stop() { if ("speechSynthesis" in window) speechSynthesis.cancel(); $$(".speaking").forEach((b) => b.classList.remove("speaking")); },
    // queue: [{text, v}]
    play(queue, btn) {
      if (!("speechSynthesis" in window)) { alert("Speech synthesis isn't available in this browser."); return; }
      const wasPlaying = btn && btn.classList.contains("speaking");
      this.stop();
      if (wasPlaying) return;
      if (btn) btn.classList.add("speaking");
      queue.forEach((item, i) => {
        const u = new SpeechSynthesisUtterance(item.text);
        u.lang = "ja-JP";
        u.rate = settings.rate;
        const voice = this.voiceFor(item.v);
        if (voice) u.voice = voice;
        const distinctVoices = this.voiceFor("m") !== this.voiceFor("f");
        if (!distinctVoices) u.pitch = item.v === "m" ? 0.75 : item.v === "f" ? 1.25 : 1;
        if (i === queue.length - 1) u.onend = () => btn && btn.classList.remove("speaking");
        speechSynthesis.speak(u);
      });
    },
  };

  // ---------- action registry ----------
  // Click handlers for [data-act] elements, keyed by the data-act value. Each owner registers its own
  // actions in its own region:  ACT.name = (el, event) => { ... };  where el is the closest [data-act]
  // element. The shared click listener (A, at the bottom) dispatches here; no need to edit it.
  const ACT = Object.create(null);
  N2.ACT = ACT;

  // ============================================================================
  // ===== [B] chapter content — owned by implementer B =====
  // ============================================================================

  // ---------- stars, usage-scene icons ----------
  // the book prints only filled stars, in black (C7)
  const stars = (n) => (!n ? "" : `<span class="stars gp-bar__stars" role="img" aria-label="重要度 ${n}/3" title="Importance ${n}/3">${"★".repeat(n)}</span>`);
  // [emoji fallback, English label, Japanese label, 24×24 line-icon SVG body] — indices 0–2 are read by the guide legend (A)
  const MARKS = {
    casual: ["💬", "Casual — used with friends & family", "くだけた会話",
      '<circle cx="8" cy="10" r="4.2"/><circle cx="16.5" cy="13.5" r="4.2"/><path d="M6.6 9.4h.01M9.4 9.4h.01M15.1 12.9h.01M17.9 12.9h.01"/><path d="M6.8 11.4q1.2 1 2.4 0M15.3 15q1.2 1 2.4 0"/>'],
    formal: ["📄", "Formal / written — not used chatting with friends", "かたい表現",
      '<circle cx="8" cy="10" r="4.2"/><circle cx="16.5" cy="13.5" r="4.2"/><path d="M6.6 9.4h.01M9.4 9.4h.01M15.1 12.9h.01M17.9 12.9h.01"/><path d="M3 21 21 3" stroke-width="2.4"/>'],
    polite: ["🙇", "Polite — to superiors, strangers, customers", "目上・初対面・客に",
      '<circle cx="12" cy="7.5" r="3.6"/><path d="M10.6 7h.01M13.4 7h.01M10.8 9q1.2.8 2.4 0"/><path d="M7 21v-6.5q0-3.3 5-3.3t5 3.3V21M9.6 12.3 12 16l2.4-3.7"/>'],
    regret: ["😣", "Regret, disappointment, or criticism", "後悔・残念・批判",
      '<circle cx="11" cy="13" r="7"/><path d="M8.3 11.6l1.6.8M13.7 11.6l-1.6.8M8.6 17q2.4-1.8 4.8 0"/><path d="M19.2 3.5q-1.9 2.6 0 3.6 1.9-1 0-3.6z"/>'],
    praise: ["🌟", "High evaluation / praise", "高い評価",
      '<circle cx="12" cy="13.5" r="5.8"/><path d="M9.8 12.6h.01M14.2 12.6h.01M9.6 15.2q2.4 1.8 4.8 0"/><path d="M12 2.5v2.6M4.4 5.6l1.8 1.8M19.6 5.6l-1.8 1.8M2 13h2.2M20 13h2.2"/>'],
  };
  const sceneSvg = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${MARKS[k][3]}</svg>`;
  // icon-only usage-scene marks (C8); the label is in aria-label / title. The trailing .mark-l label is hidden inside
  // chapter content (.scenes) and visible elsewhere (guide legend, about page)
  const marks = (arr) => (arr || []).map((m) => (MARKS[m] ? `<span class="scene scene--${m}" role="img" aria-label="${esc(MARKS[m][2] + " — " + MARKS[m][1])}" title="${esc(MARKS[m][2] + " — " + MARKS[m][1])}">${sceneSvg(m)}</span><span class="mark-l">${esc(MARKS[m][2])}</span>` : "")).join("");
  const scenes = (arr) => (arr && arr.length ? `<span class="scenes">${marks(arr)}</span>` : "");

  // ---------- small helpers ----------
  const CLIP_SVG = '<svg class="clip__icon" viewBox="0 0 22 40" aria-hidden="true" focusable="false"><path d="M15 12v17a5 5 0 0 1-10 0V8a3.5 3.5 0 0 1 7 0v19a1.8 1.8 0 0 1-3.6 0V11"/></svg>';
  const IDIOM_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M10 14a4 4 0 0 0 5.7 0l3.2-3.2a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3.2 3.2a4 4 0 0 0 5.7 5.7l1-1"/></svg>';
  // ☞ line (C15): the book's own reference (p.xxx 〜…) right-aligned, then our links (似ている文型, related points)
  function xrefHtml(book, see, no) {
    const inCompare = no != null && (N2.compare || []).some((gr) => (gr.items || []).some((it) => it.no === no));
    const links = (see || []).map(gpLink).join("");
    if (!book && !links && !inCompare) return "";
    const b = book ? `<span class="xref__book">${fmt(String(book).replace(/^☞\s*/, ""))}</span>` : "";
    const web = links || inCompare ? `<span class="xref__web">${inCompare ? `<a href="#/compare" class="gp-link xref__cmp">似ている文型</a>` : ""}${links}</span>` : "";
    return `<p class="xref"><span class="xref__hand" aria-hidden="true">☞</span>${b}${web}</p>`;
  }

  // ---------- grammar point (C7–C17) ----------
  function gpCard(g, ch) {
    const gid = `gp${g.no}`;
    const studied = progress.studied[g.no];
    const plusHtml = (g.plus || []).map((p, k) => `<section class="plus" data-en-scope>
        <span class="plus__tag"><span class="plus__cross" aria-hidden="true"></span>Plus</span>
        <header class="plus__head"><h4 class="plus__title">${fmt(p.pattern)}</h4>${stars(p.stars)}${scenes(p.marks)}${enScopeBtn()}</header>
        ${bi(p.usage, "p", "usage", { book: true })}
        ${formsHtml(p.forms, p.formNotes)}
        ${examplesHtml(p.examples)}
        ${notesHtml(p.notes, `${gid}-plus${k}`)}
        ${(p.practice || []).map((ex, j) => renderExercise(ex, `${gid}-plus${k}-p${j}`, "やってみよう！")).join("")}
        ${p.xref ? xrefHtml(p.xref) : ""}
      </section>`).join("");
    const title = g.phrase || g.pattern;
    return `<article class="gp" id="gp-${g.no}" data-en-scope>
      <header class="gp-bar">
        <span class="gp-bar__no">${g.no}</span>
        <h3 class="gp-bar__title">${fmt(title)}</h3>
        ${stars(g.stars)}
      </header>
      ${g.phrase ? `<p class="gp-pattern"><span class="sr-only">文型 </span>${fmt(g.pattern)}</p>` : ""}
      <div class="gp-use"><h4 class="gp-use__pill">${pill("どう使う？")}</h4><span class="gp-use__tools">${scenes(g.marks)}${enScopeBtn()}</span></div>
      ${bi(g.usage, "p", "usage", { book: true })}
      ${formsHtml(g.forms, g.formNotes)}
      ${examplesHtml(g.examples)}
      ${g.deepDive ? `<details class="deep"><summary>📘 English deep-dive <span class="dim">nuance · comparisons · pitfalls</span></summary><div class="deep-body">${prose(g.deepDive)}</div></details>` : ""}
      ${(g.practice || []).map((ex, j) => renderExercise(ex, `${gid}-p${j}`, "やってみよう！ <span class='en-inline'>Try it out</span>")).join("")}
      ${notesHtml(g.notes, gid)}
      ${plusHtml}
      ${xrefHtml(g.xref, g.see, g.no)}
      <footer class="gp-foot">
        <label class="studied"><input type="checkbox" data-act="studied" data-no="${g.no}" ${studied ? "checked" : ""}><span class="studied__box" aria-hidden="true"></span>学習済み <span class="en-inline">Studied</span></label>
      </footer>
    </article>`;
  }

  // ---------- connection formula (C10), ＊ notes (C11), keigo tables (C16) ----------
  const FX_ALTS = /^［(.+)］$/;
  // one formula token: "［A　B］" (alternatives printed stacked in the book) → bracket stack; otherwise inline
  function fxTok(t, side) {
    const m = t.match(FX_ALTS);
    if (m && m[1].includes("　")) return fxBr(m[1].split(/　+/), side);
    return `<span class="fx-t">${fmt(t)}</span>`;
  }
  const fxBr = (alts, side) => `<span class="fx-br fx-br--${side}">${alts.map((a) => `<span class="fx-alt">${a.split(/\s*\+\s*/).map((x) => `<span class="fx-t">${fmt(x)}</span>`).join('<span class="fx-plus">+</span>')}</span>`).join("")}</span>`;
  const fxJoin = (toks, lastSide = "l") => toks.map((t, i) => fxTok(t, i === toks.length - 1 && toks.length > 1 ? lastSide : "r")).join('<span class="fx-plus">+</span>');
  function formulaHtml(forms) {
    const main = [], subs = [];
    forms.forEach((f) => {
      const [head, ...rest] = String(f).split("\n");
      if (FX_ALTS.test(head.trim()) && !/\+/.test(head)) subs.push(head.trim()); else main.push(head);
      rest.forEach((r) => subs.push(r.trim()));
    });
    const T = main.map((f) => f.split(/\s*\+\s*/).map((x) => x.trim()));
    let body = "";
    if (T.length === 1) body = `<div class="fx">${fxJoin(T[0])}</div>`;
    else if (T.length > 1) {
      const n = T.length, minLen = Math.min(...T.map((t) => t.length));
      let pre = 0; while (pre < minLen - 1 && T.every((t) => t[pre] === T[0][pre])) pre++;
      let suf = 0; while (suf < minLen - 1 && T.every((t) => t[t.length - 1 - suf] === T[0][T[0].length - 1 - suf])) suf++;
      const heads = [...new Set(T.map((t) => t[0]))], tails = [...new Set(T.map((t) => t[1]))];
      const cross = T.every((t) => t.length === 2) && heads.length > 1 && tails.length > 1 && heads.length * tails.length === n &&
        heads.every((h) => tails.every((tl) => T.some((t) => t[0] === h && t[1] === tl)));
      const alt = (toks) => toks.join(" + ");
      if (cross) body = `<div class="fx fx--x">${fxBr(heads, "r")}<span class="fx-plus">+</span>${fxBr(tails, "l")}</div>`;
      else if (pre >= 1) body = `<div class="fx fx--pre">${fxJoin(T[0].slice(0, pre), "r")}<span class="fx-plus">+</span>${fxBr(T.map((t) => alt(t.slice(pre))), "l")}</div>`;
      else if (suf >= 1) body = `<div class="fx fx--suf">${fxBr(T.map((t) => alt(t.slice(0, t.length - suf))), "r")}<span class="fx-plus">+</span>${fxJoin(T[0].slice(T[0].length - suf))}</div>`;
      else body = T.map((t) => `<div class="fx">${fxJoin(t)}</div>`).join("");
    }
    return body + subs.map((s) => `<div class="fx-sub">${fmt(s)}</div>`).join("");
  }
  function fnotesHtml(notes) {
    return (notes || []).map((n) => {
      const o = typeof n === "string" ? { ja: n } : n;
      const m = String(o.ja).match(/^＊(\d*)/);
      const mark = m ? "＊" + m[1] : "＊", text = m ? o.ja.slice(m[0].length) : o.ja;
      return `<p class="fnote bi">${o.en ? enToggle() : ""}<span class="fnote__m">${mark}</span><span class="ja">${fmt(text)}</span>${o.en ? `<span class="en en--book">${fmt(o.en)}</span>` : ""}</p>`;
    }).join("");
  }
  function kvTableHtml(forms, notes) {
    const tables = [];
    forms.forEach((f) => {
      const [k, v] = String(f).split(/\s*→\s*/);
      if (!tables.length || /^意味$/.test(plain(k).trim())) tables.push({ head: [k, v], rows: [] });
      else tables[tables.length - 1].rows.push([k, v]);
    });
    const cell = (s) => String(s || "").split("／").map((x) => fmt(x.trim()).replace(/＊(\d)$/, '<sup class="kv-ref">＊$1</sup>')).join("<br>");
    return `<div class="kv-wrap"><div class="kv-tables">${tables.map((t) => `<table class="kv"><thead><tr><th scope="col">${fmt(t.head[0])}</th><th scope="col">${fmt(t.head[1])}</th></tr></thead>
      <tbody>${t.rows.map((r) => `<tr><td>${cell(r[0])}</td><td>${cell(r[1])}</td></tr>`).join("")}</tbody></table>`).join("")}</div>
      ${notes && notes.length ? `<div class="kv-notes">${fnotesHtml(notes)}</div>` : ""}</div>`;
  }
  function formsHtml(forms, notes) {
    if ((!forms || !forms.length) && (!notes || !notes.length)) return "";
    if (forms && forms.some((f) => / → /.test(f))) return `<div class="forms forms--kv"><h5 class="sr-only">接続</h5>${kvTableHtml(forms, notes)}</div>`;
    return `<div class="forms"><h5 class="sr-only">接続</h5>${formulaHtml(forms || [])}${fnotesHtml(notes)}</div>`;
  }

  // ---------- examples ①② (C12) ----------
  function exText(ja) {
    const lines = String(ja).split("\n");
    if (lines.length > 1 && lines.every((l) => /^[A-ZＡ-Ｚ]：/.test(l)))
      return lines.map((l) => `<span class="exs__turn"><span class="exs__who">${esc(l.slice(0, 2))}</span><span class="exs__say">${fmt(l.slice(2))}</span></span>`).join("");
    return fmt(ja);
  }
  function examplesHtml(exs) {
    if (!exs || !exs.length) return "";
    return `<ol class="exs ja-book">${exs
      .map((e, i) => `<li class="exs__i bi"><span class="exs__n" aria-hidden="true">${CIRCLED[i] || i + 1}</span>
        <div class="exs__t"><span class="ja">${exText(e.ja)}${e.idiom ? `<span class="idiom" role="img" aria-label="慣用表現 idiom" title="慣用表現 — idiomatic expression">${IDIOM_SVG}</span>` : ""}</span>${en(e.en)}</div>
        <span class="exs__tools">${speakBtn(e.ja, "data-small")}${e.en ? enToggle() : ""}</span></li>`)
      .join("")}</ol>`;
  }

  // ---------- 📎 clip note (C13) ----------
  function notesHtml(notes, base) {
    return (notes || [])
      .map((n, k) => `<aside class="clip" data-en-scope>${CLIP_SVG}<div class="clip__body">
        <div class="clip__tools">${enScopeBtn()}</div>
        ${bi({ ja: n.ja, en: n.en }, "p", "clip__text", { book: true })}
        ${examplesHtml(n.examples)}
        ${(n.practice || []).map((ex, j) => renderExercise(ex, `${base}-n${k}-p${j}`, "やってみよう！")).join("")}
      </div></aside>${n.xref ? xrefHtml(n.xref) : ""}`)
      .join("");
  }

  // ---------- 見本文 (C6) ----------
  const isSep = (l) => l.style === "sep" || /^[〜～]{3,}$/.test(plain(l.ja).trim());
  const isCredit = (l) => l.style === "credit" || /^（文：.*）$/.test(plain(l.ja).trim());
  // group sample lines into the book's paragraphs (line.cont = continues the previous paragraph)
  function paragraphs(lines) {
    const out = [];
    lines.forEach((l, i) => {
      if (isSep(l)) out.push({ sep: true, lines: [l] });
      else if (isCredit(l)) out.push({ credit: true, lines: [l] });
      else if (l.cont && out.length && !out[out.length - 1].sep && !out[out.length - 1].credit) out[out.length - 1].lines.push(l);
      else out.push({ lines: [l] });
    });
    return out;
  }
  const paraEn = (p) => p.lines.map((l) => l.en).filter(Boolean).join(" ");
  const quoteStart = (p) => /^「/.test(plain(p.lines[0].ja));
  function proseHtml(s) {
    const body = paragraphs(s.lines).map((p) => {
      if (p.sep) return `<p class="prose__sep" aria-hidden="true">${fmt(p.lines[0].ja)}</p>`;
      const e = paraEn(p), ja = p.lines.map((l) => fmt(l.ja)).join("");
      if (p.credit) return `<p class="credit">${ja}</p>`;
      return `<div class="prose__para bi">${e ? enToggle() : ""}<p class="ja prose__p${quoteStart(p) ? " prose__p--q" : ""}">${ja}</p>${e ? `<div class="en prose__en">${fmt(e)}</div>` : ""}</div>`;
    }).join("");
    return `<div class="prose ja-book">${body}</div>`;
  }
  function dialogueHtml(s) {
    const spw = Math.max(2, ...s.lines.map((l) => plain(l.sp || "").length));
    return `<div class="dlg ja-book${spw > 4 ? " dlg--wide" : ""}" style="--spw:${spw}em">${s.lines.map((l) => l.sp
      ? `<div class="dlg__row bi">${l.en ? enToggle() : ""}<span class="dlg__sp">${fmt(l.sp)}</span><span class="dlg__colon" aria-hidden="true">：</span><div class="dlg__body"><span class="ja">${fmt(l.ja)}</span>${en(l.en)}</div></div>`
      : `<div class="dlg__row dlg__row--narr bi">${l.en ? enToggle() : ""}<div class="dlg__body"><span class="ja">${fmt(l.ja)}</span>${en(l.en)}</div></div>`).join("")}</div>`;
  }
  // notice (C6a): lead line, key▶value rows, tabular pay cells, contact block
  function noticeHtml(s) {
    const L = s.lines;
    let contactFrom = L.findIndex((l) => l.style === "contact" || /☎|https?:|E-mail/.test(l.ja));
    if (contactFrom < 0) contactFrom = L.length;
    const rows = [];
    let seenRow = false, prevCells = 0;
    // pay table: a value with ≥2 full-width spaces becomes cells; following lines with a full-width space continue it,
    // right-aligned to the previous row's columns (時給 | 7時〜 9時 | 1,000円〜 / · | 9時〜22時 | 900円)
    const cells = (parts, start) => `<span class="nt-cells">${parts.map((p, i) => `<span${i === 0 && start > 1 ? ` style="grid-column-start:${start}"` : ""}>${fmt(p)}</span>`).join("")}</span>`;
    for (let i = 0; i < contactFrom; i++) {
      const l = L[i], st = l.style, m = l.ja.match(/^(.{1,12}?)▶(.*)$/);
      if (st === "center" || st === "lead" || (!st && !m && !seenRow)) { rows.push(`<p class="nt-lead">${fmt(l.ja)}</p>`); continue; }
      if (st === "right") { rows.push(`<p class="nt-right">${fmt(l.ja)}</p>`); continue; }
      const isRow = m && st !== "cont";
      const val = isRow ? m[2] : l.ja, parts = val.split(/　+/);
      let v;
      if (isRow && parts.length >= 3) { prevCells = parts.length; v = cells(parts, 1); }
      else if (!isRow && prevCells && parts.length >= 2 && parts.length <= prevCells) v = cells(parts, prevCells - parts.length + 1);
      else { prevCells = 0; v = fmt(val); }
      if (isRow) { seenRow = true; rows.push(`<div class="nt-row"><span class="nt-key">${fmt(m[1])}▶</span><div class="nt-val">${v}</div></div>`); }
      else rows.push(`<div class="nt-row nt-cont${/^＊/.test(l.ja) ? " nt-star" : ""}"><span class="nt-key"></span><div class="nt-val">${v}</div></div>`);
    }
    const contact = L.slice(contactFrom).map((l, i) => {
      const parts = l.ja.split(/　+/);
      if (i === 0 && parts.length > 1) return `<span class="nt-org">${fmt(parts[0])}</span><span class="nt-c">${fmt(parts.slice(1).join("　"))}</span>`;
      return `<span class="nt-org"></span><span class="nt-c">${fmt(l.ja).replace(/^(E-mail)　/, "$1 ")}</span>`;
    }).join("");
    const enAll = L.filter((l) => l.en).map((l) => `<p>${fmt(l.en)}</p>`).join("");
    return `<div class="notice">
      ${s.heading ? `<h3 class="nt-heading">${fmt(s.heading)}</h3>` : ""}
      <div class="nt-body ja-book">${rows.join("")}</div>
      ${contact ? `<div class="nt-contact">${contact}</div>` : ""}
      ${enAll ? `<div class="en sample__en">${enAll}</div>` : ""}
    </div>`;
  }
  // 縦書き texts (C6e): vertical at ≥901 (or when the reader chose 縦), horizontal otherwise
  function verticalHtml(s) {
    const v = verticalOn();
    let label = "", title = s.heading || "";
    if (s.kind === "editorial" && title.includes("　")) { const k = title.indexOf("　"); label = title.slice(0, k); title = title.slice(k + 1); }
    const mast = title ? `<header class="vt-mast">${label ? `<span class="vt-label">${fmt(label, { vertical: v })}</span>` : ""}<h3 class="vt-title">${fmt(title, { vertical: v })}</h3></header>` : "";
    const paras = paragraphs(s.lines);
    if (!v) return `<div class="vt vt--h">${mast}${proseHtml(s)}</div>`;
    const body = paras.map((p) => p.sep ? `<p class="vt-sep" aria-hidden="true">${fmt(p.lines[0].ja)}</p>`
      : `<p class="${quoteStart(p) ? "vt-q" : ""}">${p.lines.map((l) => fmt(l.ja, { vertical: true })).join("")}</p>`).join("");
    const enPs = paras.filter((p) => !p.sep).map(paraEn).filter(Boolean);
    return `<div class="vt-scroll" tabindex="0" role="region" aria-label="見本文（縦書き）"><div class="vt ja-book">${mast}${body}</div></div>
      ${enPs.length ? `<div class="vt-en en">${enPs.map((e) => `<p>${fmt(e)}</p>`).join("")}</div>` : ""}`;
  }
  function sampleHtml(s, chId, pi) {
    if (!s) return "";
    const queue = s.lines.filter((l) => !isSep(l)).map((l) => ({ text: plain(l.ja), v: l.v || "f" }));
    if (s.heading) queue.unshift({ text: plain(s.heading), v: "f" });
    const rings = s.rings !== false && s.kind !== "article";
    const vert = !!s.vertical, vOn = vert && verticalOn();
    let body;
    if (vert) body = verticalHtml(s);
    else if (s.kind === "notice") body = noticeHtml(s);
    else if (s.kind === "dialogue") body = dialogueHtml(s);
    else body = (s.heading ? `<h3 class="sample__headline">${fmt(s.heading)}</h3>` : "") + proseHtml(s);
    const seg = vert ? `<div class="seg" role="group" aria-label="縦書き・横書き">${[["v", "縦", "Vertical"], ["h", "横", "Horizontal"]].map(([m, j, e]) =>
      `<button type="button" class="seg__b" data-act="vmode" data-v="${m}" aria-pressed="${(m === "v") === vOn}" title="${e}">${j}</button>`).join("")}</div>` : "";
    return `<section class="sample${rings ? " sample--rings" : ""}${vert ? " sample--vertical" : ""}${vert && !vOn ? " is-h" : ""} kind-${esc(s.kind)}" data-en-scope data-ch="${chId}" data-pi="${pi}" aria-labelledby="s${chId}-${pi}">
      <h2 id="s${chId}-${pi}" class="sr-only">見本文</h2>
      <div class="sample__tools">${seg}${enScopeBtn()}${cdBadge(queue, "見本文を聞く")}</div>
      ${body}
    </section>`;
  }
  // 縦/横 toggle: persist, then rebuild every vertical 見本文 on the page in place
  function refreshVertical() {
    $$(".sample--vertical").forEach((sec) => {
      const ch = N2.chapters.find((c) => c.id === +sec.dataset.ch), p = ch && ch.parts[+sec.dataset.pi];
      if (!p) return;
      const en = sec.classList.contains("en-all");
      sec.outerHTML = sampleHtml(p.sample, ch.id, +sec.dataset.pi);
      if (en) $(`.sample--vertical[data-ch="${ch.id}"][data-pi="${sec.dataset.pi}"]`).classList.add("en-all");
    });
    const sel = $("#vmode-set"); if (sel) sel.value = settings.vertical;
    vtScrollInit();
  }
  ACT.vmode = (t) => {
    const want = t.dataset.v;
    // pressing the mode that "auto" already gives keeps auto; otherwise pin the choice
    const autoV = matchMedia("(min-width: 901px)").matches;
    setVertical((want === "v") === autoV ? "auto" : want);
    refreshVertical();
  };
  // scroll-hint fade on the vertical scroller while more text is hidden to the left
  function vtScrollInit() {
    $$(".vt-scroll").forEach((sc) => {
      const upd = () => sc.classList.toggle("has-more", sc.scrollWidth - sc.clientWidth + sc.scrollLeft > 4 && Math.abs(sc.scrollLeft) < sc.scrollWidth - sc.clientWidth - 4);
      if (!sc.dataset.hint) { sc.dataset.hint = 1; sc.addEventListener("scroll", upd, { passive: true }); }
      upd();
    });
  }
  window.addEventListener("DOMContentLoaded", () => {
    const main = $("#main");
    if (main) new MutationObserver(() => requestAnimationFrame(vtScrollInit)).observe(main, { childList: true });
    matchMedia("(min-width: 901px)").addEventListener("change", () => { if (settings.vertical === "auto" && $(".sample--vertical")) refreshVertical(); });
  });
  ACT.toc = (t, e) => {
    const toc = $(".mini-toc");
    if (!toc) return;
    e.preventDefault();
    if (toc.tagName === "DETAILS") toc.open = true;
    toc.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  // ---------- chapter (C1–C5) ----------
  const fwLabel = (label) => String(label || "").replace(/\(/g, "（").replace(/\)/g, "）");
  function bannerHtml(ch, part, pi, range) {
    const lab = part && part.label ? part.label : "";
    return `<header class="ch-banner${pi ? " ch-banner--part" : ""}"${pi ? "" : ` id="ch${ch.id}-top"`}>
      <div class="ch-banner__num" aria-hidden="true">${ch.id}</div>
      <div class="ch-banner__body">
        <p class="ch-banner__genre"><span class="ja">${fmt(ch.genre.ja)}</span> <span class="ch-banner__en">${esc(ch.genre.en)}</span></p>
        <${pi ? "h2" : "h1"} class="ch-banner__title"><span class="ja"><span class="sr-only">第${ch.id}章 </span>${fmt(ch.title.ja)}${lab ? `<span class="ch-banner__part">${esc(fwLabel(lab))}</span>` : ""}</span>
          <span class="ch-banner__en ch-banner__en--title">${esc(ch.title.en)}${lab ? " " + esc(lab) : ""}</span></${pi ? "h2" : "h1"}>
      </div>
      ${range ? `<a class="ch-tab ch-tab--inline" href="#/ch/${ch.id}" data-act="toc" aria-label="この章の文法 ${range}">${range}</a>` : ""}
    </header>`;
  }
  function chapterView(id) {
    const ch = N2.chapters.find((c) => c.id === id);
    if (!ch) return notFound();
    const idx = N2.chapters.indexOf(ch);
    const prev = N2.chapters[idx - 1], next = N2.chapters[idx + 1];
    const pts = ch.parts.flatMap((p) => p.points);
    const range = pts.length ? `${pts[0].no}〜${pts[pts.length - 1].no}` : "";
    const chips = ch.parts
      .map((p) => `${p.label && ch.parts.length > 1 ? `<span class="mt-part">${esc(p.label)}</span>` : ""}${p.points.map((g) => `<a href="#/gp/${g.no}" class="mt-gp"><span class="mt-gp__n">${g.no}</span><span class="mt-gp__t">${fmt(g.pattern)}</span></a>`).join("")}`)
      .join("") + (ch.review && ch.review.length ? `<a href="#/ch/${id}/review" class="mt-gp mt-review">まとめの問題</a>` : "");
    const wide = matchMedia("(min-width: 601px)").matches;
    const miniToc = `<details class="mini-toc"${wide ? " open" : ""}><summary class="mini-toc__sum">この章の文法 ${range}<span class="mini-toc__n">（${pts.length}）</span></summary><nav class="mini-toc__chips" aria-label="この章の文法">${chips}</nav></details>`;
    const parts = ch.parts
      .map((p, pi) => `<section class="part" id="ch${id}-part${pi}">
        ${pi ? bannerHtml(ch, p, pi) : ""}
        ${p.canDo && p.canDo.length ? canDoHtml(p.canDo) : ""}
        ${sampleHtml(p.sample, id, pi)}
        ${p.points.map((g) => gpCard(g, ch)).join("")}
        ${p.check ? checkHtml(p.check, `ch${id}-part${pi}-check`) : ""}
      </section>`)
      .join("");
    const pg = (c, dir, cls) => `<a class="${cls}" href="#/ch/${c.id}"><span class="pager__dir">${dir}</span><span class="pager__t">${c.id} ${fmt(c.title.ja)}</span></a>`;
    return `<div class="chapter" style="--ch:${id}">
      ${bannerHtml(ch, ch.parts[0], 0, range)}
      ${range ? `<a class="ch-tab ch-tab--edge" href="#/ch/${id}" data-act="toc" aria-label="この章の文法 ${range}">${range}</a>` : ""}
      ${ch.canDo && ch.canDo.length ? canDoHtml(ch.canDo) : ""}
      ${miniToc}
      ${parts}
      ${reviewHtml(ch)}
      <nav class="pager">${prev ? pg(prev, "← 前の章", "pager__prev") : "<span></span>"}${next ? pg(next, "次の章 →", "pager__next") : "<span></span>"}</nav>
    </div>`;
  }
  const canDoHtml = (list) => `<section class="cando" data-en-scope>
    <h2 class="cando__label">${pill("できること")}<span class="cando__tools">${enScopeBtn()}</span></h2>
    <ul class="cando__list">${list.map((c) => `<li class="bi">${c.en ? enToggle() : ""}<span class="ja">${fmt(c.ja)}</span>${c.en ? `<span class="en en--book">${fmt(c.en)}</span>` : ""}</li>`).join("")}</ul>
  </section>`;

  // ===== end [B] chapter content =====

  // ============================================================================
  // ===== [C] exercises & review — owned by implementer C =====
  // ============================================================================
  const EX = {};
  let exSeq = 0;

  // Exercise numbers: "1）" in practice / Check (paren), a boxed "1" in まとめの問題 (box), none for single listening items
  const qnHtml = (n, style) => style === "none" ? "" : style === "box" ? `<span class="qn qn--box">${n}</span>` : `<span class="qn qn--paren">${n}）</span>`;
  const plainLen = (s) => Array.from(plain(s).replace(/\s/g, "")).length;
  // option-grid columns by the longest option (docs/LAYOUT.md C24): desktop 4/2/1 at ≤7/≤16, phone ≤4/≤9, small phone 2 at ≤7
  function gridCols(options) {
    const L = Math.max(0, ...options.map(plainLen));
    return { d: L <= 7 ? 4 : L <= 16 ? 2 : 1, m: L <= 4 ? 4 : L <= 9 ? 2 : 1, s: L <= 7 ? 2 : 1 };
  }
  const exCount = (ex) => (ex.items || ex.blanks || ex.left || []).length;

  // title: HTML for the pill (null = no header). opts: { bare: no frame / header only if titled, numOffset: first item
  // number − 1 (Check groups continue numbering), review: boxed numbers, instruction rendered by reviewHtml }
  function renderExercise(ex, id, title, opts = {}) {
    if (!ex) return "";
    EX[id] = ex;
    const o = Object.assign({ bare: false, numOffset: 0, review: false }, opts);
    const sc = progress.scores[id];
    const score = sc ? `<span class="score-chip ${sc.c === sc.t ? "full" : ""}">${sc.c}/${sc.t}</span>` : `<span class="score-chip" hidden></span>`;
    const c = { id, labels: ex.labels, num: o.review ? "box" : "paren", off: o.numOffset };
    let body = "";
    switch (ex.type) {
      case "choice": body = ex.items.map((it, i) => choiceItem(it, i, c)).join(""); break;
      case "write": body = ex.items.map((it, i) => writeItem(it, i, c)).join(""); break;
      case "match": body = matchBody(ex, c); break;
      case "fill": body = fillBody(ex, c); break;
      case "order": body = ex.items.map((it, i) => orderItem(it, i, c)).join(""); break;
      case "passage": body = passageBody(ex, c); break;
      case "reading": body = readingBody(ex, c); break;
      case "listening": body = listeningBody(ex, c); break;
      default: body = `<p class="err">Unknown exercise type ${esc(ex.type)}</p>`;
    }
    const p = ex.prompt;
    const showPrompt = p && !o.review && (!o.bare || !o.numOffset || (typeof p === "string" ? p : p.ja));
    const head = title
      ? `<div class="ex-head"><h4 class="ex-title">${pill(title)}</h4><span class="ex-ref">${score}${enScopeBtn()}</span></div>`
      : "";
    return `<section class="exercise ex-${ex.type}${o.bare ? " ex--bare" : ""}${o.review ? " ex--review" : ""}" data-ex="${id}"${title ? " data-en-scope" : ""}>
      ${head}
      ${showPrompt ? promptHtml(p) : ""}
      <div class="ex-body">${body}</div>
      <div class="ex-actions"><button class="btn primary" data-act="grade">答え合わせ <span class="en-inline">Check answers</span></button>
      <button class="btn" data-act="reset">リセット <span class="en-inline">Reset</span></button><span class="ex-result" aria-live="polite"></span>${title ? "" : score}</div>
    </section>`;
  }

  // instruction line; its English is shown by the container's EN button (no per-line button)
  const promptHtml = (p) => typeof p === "string" ? `<div class="ex-prompt"><p class="ja">${fmt(p)}</p></div>`
    : `<div class="ex-prompt">${p.ja ? `<p class="ja">${fmt(p.ja)}</p>` : ""}${p.en ? `<div class="en">${fmt(p.en)}</div>` : ""}</div>`;
  const whyHtml = (w) => (w ? `<div class="why">${w.ja ? `<p>${fmt(w.ja)}</p>` : ""}${w.en ? `<p class="why-en">${fmt(w.en)}</p>` : ""}</div>` : "");

  // labels: "abc" | "ab" | "123" | "ABC" | undefined (auto: 4+ options → numbers, else letters)
  function optLabel(n, j, labels) {
    if (labels === "abc" || labels === "ab") return LETTERS[j];
    if (labels === "123") return j + 1;
    if (labels === "ABC") return LETTERS[j].toUpperCase();
    return n > 3 ? j + 1 : LETTERS[j];
  }
  const letterLabels = (n, labels) => /^(abc|ab|ABC)$/.test(labels || "") || (!labels && n <= 3);
  // mode: "inline" (a. … b. … inside the sentence's parentheses) | "grid" (4/2/1 columns by length) | "list" (1 column)
  function optGroup(options, answer, labels, mode = "grid", tag) {
    const n = options.length;
    if (mode === "inline") {
      return `<span class="opts opts--inline" data-answer="${answer}">（${options
        .map((o, j) => `<button class="opt opt--inl" data-act="pick" data-j="${j}"><span class="opt-n">${optLabel(n, j, labels)}.</span>${fmt(o)}</button>`)
        .join("<span class=\"opt-sep\">　</span>")}）</span>`;
    }
    // label-only choices (the options are just "A" / "B"): a row of round letter buttons
    if (options.every((o) => o === "")) {
      return `<div class="opts opts--letters" data-answer="${answer}">${tag ? `<span class="opt-tag">${fmt(tag)}</span>` : ""}${options
        .map((o, j) => `<button class="opt opt--let" data-act="pick" data-j="${j}"><span class="opt-n">${optLabel(n, j, labels)}</span></button>`).join("")}</div>`;
    }
    const k = mode === "list" ? { d: 1, m: 1, s: 1 } : gridCols(options);
    return `<div class="opts opts--grid${mode === "list" ? " opts--list" : ""}" data-cols="${k.d}" data-cols-m="${k.m}" data-cols-s="${k.s}" data-answer="${answer}">${tag ? `<span class="opt-tag">${fmt(tag)}</span>` : ""}${options
      .map((o, j) => `<button class="opt opt--grid" data-act="pick" data-j="${j}"><span class="opt-n">${optLabel(n, j, labels)}</span><span class="opt-t">${fmt(o)}</span></button>`)
      .join("")}</div>`;
  }
  const reEsc = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const PH_RE = /（[ 　]+）/g;
  // c: { labels, num, off, mode } — mode "list" forces one column (reading questions)
  function choiceItem(it, i, c) {
    const labels = c.labels;
    let qHtml = fmt(it.q || "");
    let groups = "", inline = false;
    const opts0 = it.parts ? it.parts[0].options : it.options;
    if (it.q && c.mode !== "list" && letterLabels(opts0.length, labels) && (it.parts || it.options).length) {
      if (it.parts) {
        const res = it.parts.map((p) => new RegExp(`（[ 　]*${reEsc(p.tag)}[ 　]*）`, "g"));
        if (it.parts.every((p, k) => p.options.every((x) => x !== "") && (qHtml.match(res[k]) || []).length === 1)) {
          it.parts.forEach((p, k) => (qHtml = qHtml.replace(res[k], () => optGroup(p.options, p.answer, labels, "inline"))));
          inline = true;
        }
      } else if ((qHtml.match(PH_RE) || []).length === 1 && it.options.every((x) => x !== "")) {
        qHtml = qHtml.replace(PH_RE, () => optGroup(it.options, it.answer, labels, "inline"));
        inline = true;
      }
    }
    if (!inline) {
      const mode = c.mode === "list" ? "list" : "grid";
      groups = it.parts ? it.parts.map((p, k) => optGroup(p.options, p.answer, labels, mode, p.tag || `(${k + 1})`)).join("") : optGroup(it.options, it.answer, labels, mode);
    }
    const n = c.off + i + 1;
    return `<div class="q choice-q${inline ? " q--inline" : ""}" data-i="${i}">
      ${it.q ? `<div class="q-line">${qnHtml(n, c.num)}<div class="q-text ja-book">${qHtml}</div>${speakBtn(it.q, "data-small")}</div>` : qnHtml(n, c.num)}
      ${groups}
      <div class="feedback">${it.en ? `<p class="en">${fmt(it.en)}</p>` : ""}${whyHtml(it.why)}</div>
    </div>`;
  }

  // matching halves (C20): left items are choice questions answered with letter buttons; the right column mirrors the book
  function matchBody(ex, c) {
    const L = (j) => (ex.labels === "ABC" ? LETTERS[j].toUpperCase() : LETTERS[j]);
    const ref = `<ol class="match__ref ja-book" aria-label="選択肢">${ex.right.map((r, j) => `<li><span class="opt-n">${L(j)}）</span><span class="match__rt">${fmt(r)}</span></li>`).join("")}</ol>`;
    const nRows = Math.max(ex.left.length, ex.right.length);
    const rows = Array.from({ length: nRows }, (_, i) => {
      const l = ex.left[i], r = ex.right[i];
      const left = l == null ? `<div></div>` : `<div class="q choice-q match-q" data-i="${i}">
          <div class="q-line">${qnHtml(c.off + i + 1, c.num)}<div class="q-text ja-book">${fmt(l)}</div><span class="match__dot" aria-hidden="true">・</span></div>
          <div class="opts opts--letters" data-answer="${ex.answer[i]}" role="group" aria-label="${c.off + i + 1}の答え">${ex.right
            .map((_, j) => `<button class="opt opt--let" data-act="pick" data-j="${j}"><span class="opt-n">${L(j)}</span></button>`).join("")}</div>
          <div class="feedback"><p class="full ja-book">${fmt(l)}${fmt(ex.right[ex.answer[i]])}</p>${ex.en && ex.en[i] ? `<p class="en">${fmt(ex.en[i])}</p>` : ""}</div>
        </div>`;
      const right = r == null ? "" : `<div class="match__r ja-book"><span class="match__dot" aria-hidden="true">・</span><span class="opt-n">${L(i)}）</span><span class="match__rt">${fmt(r)}</span></div>`;
      return `<div class="match__row">${left}<span class="match__gap" aria-hidden="true"></span>${right}</div>`;
    }).join("");
    return `<div class="match">${ref}${rows}</div>`;
  }

  // word bank (C21): tap a blank to make it active, tap a bank word to fill it; items first, the bank box below them
  function fillBody(ex, c) {
    const bank = `<div class="bank ja-book" role="group" aria-label="語群">${ex.bank.map((b, j) => `<button class="chip" data-act="bank" data-j="${j}">${fmt(b)}</button>`).join("")}</div>`;
    const items = ex.items
      .map((it, i) => {
        // answer: string (one ＿＿, or a paired bank entry like "やら・やら" covering several ＿＿) or array (one per ＿＿)
        const nBlanks = (it.q.match(/＿＿/g) || []).length;
        const paired = !Array.isArray(it.answer) && nBlanks > 1;
        const answers = Array.isArray(it.answer) ? it.answer : [it.answer];
        let k = 0, full = it.q;
        const q = fmt(it.q).replace(/<span class="blank">　　　<\/span>/g, () => {
          if (paired && k++ > 0) return '<span class="blank blank--mirror" aria-hidden="true"></span>';
          const n = paired ? 1 : ++k;
          return `<button class="blank" data-act="blank" data-answer="${ex.bank.indexOf(answers[paired ? 0 : n - 1])}" aria-label="空欄${nBlanks > 1 && !paired ? n : ""}"></button>`;
        });
        (paired ? it.answer.split("・") : answers).forEach((a) => (full = full.replace("＿＿", "**" + a + "**")));
        return `<div class="q fill-q" data-i="${i}"><div class="q-line">${qnHtml(c.off + i + 1, c.num)}<div class="q-text ja-book">${q}</div></div>
          <div class="feedback"><p class="full ja-book">${fmt(full)}</p>${it.en ? `<p class="en">${fmt(it.en)}</p>` : ""}${whyHtml(it.why)}</div></div>`;
      })
      .join("");
    return items + bank;
  }

  // free-text answer; it.answer = accepted strings
  const normAns = (s) => plain(s).replace(/[\s　、。・]/g, "");
  function writeItem(it, i, c) {
    const answers = Array.isArray(it.answer) ? it.answer : [it.answer];
    const inp = `<input class="write" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="答え">`;
    const q = fmt(it.q).replace(/<span class="blank">　　　<\/span>/g, inp);
    return `<div class="q write-q" data-i="${i}" data-accept="${esc(JSON.stringify(answers.map(normAns)))}"><div class="q-line">${qnHtml(c.off + i + 1, c.num)}<div class="q-text ja-book">${q.includes("<input") ? q : q + " " + inp}</div></div>
      <div class="feedback"><p class="full">答え：${answers.map(fmt).join(" ／ ")}</p>${it.en ? `<p class="en">${fmt(it.en)}</p>` : ""}${whyHtml(it.why)}</div></div>`;
  }

  // ★ ordering (C25): four underline slots in the sentence, pieces in the option grid
  function orderItem(it, i, c) {
    const slots = [0, 1, 2, 3].map((k) => `<button class="slot${k === it.star ? " slot--star" : ""}" data-act="unslot" data-k="${k}" aria-label="空欄${k + 1}${k === it.star ? "（★）" : ""}"></button>`).join("");
    const k = gridCols(it.pieces);
    const pieces = `<div class="opts opts--grid pieces" data-cols="${k.d}" data-cols-m="${k.m}" data-cols-s="${k.s}">${it.pieces
      .map((p, j) => `<button class="opt opt--grid piece" data-act="piece" data-j="${j}"><span class="opt-n">${j + 1}</span><span class="opt-t">${fmt(p)}</span></button>`).join("")}</div>`;
    const correct = it.order.map((j) => it.pieces[j]);
    const full = fmt(it.before) + correct.map((p, k) => (k === it.star ? `<strong class="star-ans">${fmt(p)}</strong>` : fmt(p))).join("") + fmt(it.after);
    return `<div class="q order-q" data-i="${i}" data-answer="${it.order[it.star]}">
      <div class="q-line">${qnHtml(c.off + i + 1, c.num)}<div class="q-text ja-book order-line">${fmt(it.before)}<span class="slots">${slots}</span>${fmt(it.after)}</div></div>
      ${pieces}
      <div class="feedback"><p class="full ja-book">${full}</p><p class="star-note">★ = ${it.order[it.star] + 1}（${fmt(it.pieces[it.order[it.star]])}）</p>${it.en ? `<p class="en">${fmt(it.en)}</p>` : ""}${whyHtml(it.why)}</div>
    </div>`;
  }

  // passage in a dashed frame (C26/C27); [n] blanks become boxed numbers
  function textBlock(title, paras, enParas, speakable = true) {
    const all = (paras || []).join("\n");
    return `<div class="passage ja-book" data-en-scope>
      <div class="passage__tools">${speakable ? speakBtn(all) : ""}${enParas ? enScopeBtn().replace('class="en-btn', 'class="passage__en en-btn') : ""}</div>
      ${title ? `<h4 class="passage__title">${fmt(title)}</h4>` : ""}
      <div class="ja">${paras.map((p) => `<p>${fmt(p).replace(/[\[［](\d+)[\]］]/g, '<span class="pblank" data-b="$1">$1</span>')}</p>`).join("")}</div>
      ${enParas ? `<div class="en">${enParas.map((p) => `<p>${fmt(p)}</p>`).join("")}</div>` : ""}</div>`;
  }

  function passageBody(ex, c) {
    const num = c.num === "paren" ? "box" : c.num;
    const rows = ex.blanks
      .map((b, i) => `<div class="q choice-q pq-row" data-i="${i}" data-b="${i + 1}">${qnHtml(c.off + i + 1, num)}${optGroup(b.options, b.answer, ex.labels, "grid")}
        <div class="feedback">${b.en ? `<p class="en">${fmt(b.en)}</p>` : ""}${whyHtml(b.why)}</div></div>`)
      .join("");
    return textBlock(ex.title, ex.text, ex.en) + `<div class="pq">${rows}</div>`;
  }
  function readingBody(ex, c) {
    return textBlock(ex.title, ex.text, ex.en) + ex.items.map((it, i) => choiceItem(it, i, Object.assign({}, c, { mode: "list" }))).join("");
  }
  // listening (C28): the question isn't printed (it's heard); it opens the transcript and shows in the feedback
  function listeningBody(ex, c) {
    let lastScript = [], lastEn = [];
    const resp = ex.mode === "response";
    const num = ex.items.length === 1 && resp ? "none" : c.num === "paren" ? "box" : c.num;
    return ex.items
      .map((it0, i) => {
        // an item without its own script reuses the previous one (one talk → several questions)
        const it = Object.assign({}, it0, { script: it0.script || lastScript, en: it0.script ? it0.en : it0.en || lastEn });
        lastScript = it.script; lastEn = it.en || [];
        const queue = [];
        // "summary" (概要理解): the question is heard only after the talk
        const summary = ex.mode === "summary";
        if (it.question && !summary) queue.push({ text: plain(it.question), v: "f" });
        // don't re-speak a script line that just repeats the question (it's spoken before/after already)
        const qPlain = it.question ? plain(it.question).replace(/\s/g, "") : null;
        it.script.forEach((l) => { if (!(qPlain && !resp && plain(l.ja).replace(/\s/g, "") === qPlain)) queue.push({ text: plain(l.ja), v: l.v }); });
        if (resp) it.options.forEach((o, j) => queue.push({ text: `${j + 1}、${plain(o)}`, v: it.script[0] && it.script[0].v === "m" ? "f" : "m" }));
        if (it.question && !resp) queue.push({ text: (summary ? "しつもん。" : "") + plain(it.question), v: "f" });
        const script = it.script
          .map((l, k) => `<div class="sline">${l.sp ? `<span class="sp">${fmt(l.sp)}：</span>` : "<span></span>"}<span>${fmt(l.ja)}${it.en && it.en[k] ? `<span class="en">${fmt(it.en[k])}</span>` : ""}</span></div>`)
          .join("");
        const qLine = it.question && !resp ? `<div class="sline sline--q"><span class="sp">質問：</span><span>${fmt(it.question)}</span></div>` : "";
        // en entries beyond the script lines translate the spoken reply choices
        const optEn = (it.en || []).slice(it.script.length);
        const optsForScript = resp ? `<div class="sline resp"><span></span><div>${it.options.map((o, j) => `<div>${j + 1}. ${fmt(o)}${optEn[j] ? `<span class="en">${fmt(optEn[j])}</span>` : ""}</div>`).join("")}</div></div>` : "";
        const opts = resp
          ? `<div class="opts opts--resp" data-answer="${it.answer}">${it.options.map((_, j) => `<button class="opt opt--resp" data-act="pick" data-i="${i}" data-j="${j}" aria-label="${j + 1}"><span class="opt-n">${j + 1}</span></button>`).join("")}</div>`
          : optGroup(it.options, it.answer, "123", "grid");
        return `<div class="q choice-q listen-q${resp ? " listen-q--resp" : ""}" data-i="${i}">
          <div class="lq-row${num === "none" ? " lq-row--nonum" : ""}">${qnHtml(c.off + i + 1, num) || "<span></span>"}${opts}${cdBadge(queue, `問題${c.off + i + 1}を聞く`)}</div>
          <details class="script"><summary>スクリプト <span class="en-inline">Transcript</span></summary><div class="dlg ja-book">${summary ? "" : qLine}${script}${summary ? qLine : ""}${optsForScript}</div></details>
          <div class="feedback">${it.question && !resp ? `<p class="lq-q">質問：${fmt(it.question)}</p>` : ""}${whyHtml(it.why)}</div>
        </div>`;
      })
      .join("");
  }

  // Check frame (C21): one dashed frame; each exercise inside is bare, numbering continues across the groups.
  // Called from chapterView [B]: checkHtml(p.check, `ch${id}-part${pi}-check`) — ids ch…-check, ch…-check-1, … (unchanged)
  function checkHtml(checks, idBase) {
    const list = [].concat(checks || []).filter(Boolean);
    if (!list.length) return "";
    let off = 0;
    const inner = list.map((ex, k) => { const h = renderExercise(ex, `${idBase}${k ? "-" + k : ""}`, null, { bare: true, numOffset: off }); off += exCount(ex); return h; }).join("");
    return `<section class="check" data-en-scope>
      <span class="check__tag">Check<span class="check__book" aria-hidden="true"></span></span>
      <div class="check__tools">${enScopeBtn()}</div>
      ${inner}
    </section>`;
  }

  // review instruction: fmt() plus the book's inline visuals — boxed [1] and the ＿★＿ blank
  const fmtInstr = (s) => fmt(s).replace(/[\[［](\d+)[\]］]/g, '<span class="pblank">$1</span>').replace(/(?:＿|__)★(?:＿|__)/g, '<span class="star-blank">★</span>');
  function instrHtml(p) {
    if (!p) return "";
    const o = typeof p === "string" ? { ja: p } : p;
    if (!o.ja && !o.en) return "";
    return `<div class="rv__instr">${o.ja ? `<p class="ja">${fmtInstr(o.ja)}</p>` : ""}${o.en ? `<div class="en">${fmt(o.en)}</div>` : ""}</div>`;
  }
  // まとめの問題 (C23). Called from chapterView [B]: reviewHtml(ch). Sections repeating the same 問題N ("問題4 〈聴解〉 1/2")
  // share one header and get numbered sub-instructions. Exercise ids ch{id}-review-{k} are unchanged.
  function reviewHtml(ch) {
    if (!ch.review || !ch.review.length) return "";
    const secs = [];
    let cur = null;
    ch.review.forEach((r, k) => {
      const t = (r.title && r.title.ja) || "";
      const m = t.match(/^(問題\d+)\s*(〈.+?〉)\s*(\d)?\s*$/);
      const n = m ? m[1] : t, sub = m && m[3];
      const tEn = (r.title && r.title.en) || "";
      if (!cur || !m || cur.n !== n) {
        cur = { n, body: [], head: `<h3 class="rv__head">${pill(fmt(n))}<span class="rv__name">${fmt(m ? m[2] : "")}</span>${tEn ? `<span class="rv__en en-inline">${esc(sub ? tEn.replace(/\s*(—|\().*$/, "") : tEn)}</span>` : ""}<span class="rv__tools">${enScopeBtn()}</span></h3>` };
        secs.push(cur);
      }
      const exHtml = renderExercise(r.ex, `ch${ch.id}-review-${k}`, null, { bare: true, review: true });
      const instr = instrHtml(r.ex.prompt);
      cur.body.push(sub
        ? `<div class="rv-sub"><div class="rv-sub__line"><span class="rv-sub__n">${sub}</span>${instr}</div>${exHtml}</div>`
        : instr + exHtml);
    });
    return `<section class="review" id="review-${ch.id}">
      <div class="review__panel">
        <h2 class="review__title">まとめの問題 <span class="review__en">Review questions</span></h2>
        ${secs.map((s) => `<section class="rv" data-en-scope>${s.head}${s.body.join("")}</section>`).join("")}
      </div>
    </section>`;
  }

  function grade(sec) {
    const id = sec.dataset.ex;
    const qs = $$(".q", sec);
    let c = 0;
    qs.forEach((q) => {
      let ok = false;
      if (q.classList.contains("choice-q")) {
        ok = $$(".opts", q).every((g) => {
          const ans = g.dataset.answer, p = $(".opt.picked", g);
          $$(".opt", g).forEach((o) => {
            o.classList.toggle("right", o.dataset.j === ans);
            o.classList.toggle("wrong", o.classList.contains("picked") && o.dataset.j !== ans);
          });
          return !!p && p.dataset.j === ans;
        });
      } else if (q.classList.contains("fill-q")) {
        ok = $$("button.blank", q).every((b) => b.dataset.v === b.dataset.answer);
        $$("button.blank", q).forEach((b) => { b.classList.toggle("right", b.dataset.v === b.dataset.answer); b.classList.toggle("wrong", b.dataset.v !== b.dataset.answer); });
      } else if (q.classList.contains("write-q")) {
        const acc = JSON.parse(q.dataset.accept);
        ok = $$("input.write", q).map((x) => normAns(x.value)).join("／") === acc[0] || acc.includes($$("input.write", q).map((x) => normAns(x.value)).join(""));
      } else if (q.classList.contains("order-q")) {
        const star = $(".slot--star", q);
        ok = star.dataset.j != null && star.dataset.j === String(q.dataset.answer);
      }
      if (ok) c++;
      q.classList.remove("ok", "ng");
      q.classList.add(ok ? "ok" : "ng", "graded");
    });
    $$("button.blank.active", sec).forEach((b) => b.classList.remove("active"));
    progress.scores[id] = { c, t: qs.length };
    saveProgress();
    const res = $(".ex-result", sec);
    res.textContent = `${c} / ${qs.length}` + (c === qs.length ? " 🎉" : "");
    res.className = "ex-result " + (c === qs.length ? "full" : "");
    const chip = $(".score-chip", sec);
    if (chip) { chip.hidden = false; chip.textContent = `${c}/${qs.length}`; chip.classList.toggle("full", c === qs.length); }
    updateSidebarProgress();
  }
  function resetEx(sec) {
    $$(".q", sec).forEach((q) => q.classList.remove("ok", "ng", "graded"));
    $$(".opt", sec).forEach((o) => o.classList.remove("picked", "right", "wrong"));
    $$("input.write", sec).forEach((s) => (s.value = ""));
    $$("button.blank, .blank--mirror", sec).forEach(clearBlank);
    $$(".chip", sec).forEach((ch) => ch.classList.remove("used"));
    $$(".match__row", sec).forEach((r) => { const g = $(".match__gap", r); if (g) g.textContent = ""; });
    $$(".pblank[data-b]", sec).forEach((b) => { b.textContent = b.dataset.b; b.classList.remove("filled"); });
    $$(".order-q", sec).forEach(resetOrder);
    $(".ex-result", sec).textContent = "";
  }
  function resetOrder(q) {
    $$(".slot", q).forEach((s) => {
      delete s.dataset.j;
      s.innerHTML = "";
      s.classList.remove("filled");
    });
    $$(".piece", q).forEach((p) => (p.disabled = false));
  }
  function clearBlank(b) {
    delete b.dataset.v;
    b.innerHTML = "";
    b.classList.remove("filled", "active", "right", "wrong");
  }
  // mark bank words that are in use (a word can still be used again)
  function syncChips(sec) {
    const used = new Set($$("button.blank[data-v]", sec).map((b) => b.dataset.v));
    $$(".chip", sec).forEach((ch) => ch.classList.toggle("used", used.has(ch.dataset.j)));
  }

  ACT.pick = (t) => {
    const q = t.closest(".q");
    if (q.classList.contains("graded")) return;
    $$(".opt", t.closest(".opts")).forEach((o) => o.classList.toggle("picked", o === t));
    // echo the choice where the book leaves room for it: matching gutter, passage blank
    const row = q.closest(".match__row");
    if (row) { const g = $(".match__gap", row); if (g) g.textContent = $(".opt-n", t).textContent; }
    if (q.dataset.b) {
      const pb = $(`.pblank[data-b="${q.dataset.b}"]`, q.closest(".exercise"));
      const txt = $(".opt-t", t);
      if (pb && txt) { pb.innerHTML = `${q.dataset.b}<span class="pblank__t">${txt.innerHTML}</span>`; pb.classList.add("filled"); }
    }
  };
  ACT.piece = (t) => {
    const q = t.closest(".q");
    if (q.classList.contains("graded")) return;
    const slot = $$(".slot", q).find((s) => s.dataset.j == null);
    if (!slot) return;
    slot.dataset.j = t.dataset.j;
    slot.innerHTML = `<span class="opt-n">${+t.dataset.j + 1}</span><span class="slot__t">${$(".opt-t", t).innerHTML}</span>`;
    slot.classList.add("filled");
    t.disabled = true;
  };
  ACT.unslot = (t) => {
    const q = t.closest(".q");
    if (q.classList.contains("graded") || t.dataset.j == null) return;
    $(`.piece[data-j="${t.dataset.j}"]`, q).disabled = false;
    delete t.dataset.j;
    t.innerHTML = "";
    t.classList.remove("filled");
  };
  ACT.blank = (t) => {
    const sec = t.closest(".exercise");
    if (t.closest(".q").classList.contains("graded")) return;
    if (t.dataset.v != null) {
      clearBlank(t);
      $$(".blank--mirror", t.closest(".q")).forEach(clearBlank);
      syncChips(sec);
      return;
    }
    const was = t.classList.contains("active");
    $$("button.blank.active", sec).forEach((b) => b.classList.remove("active"));
    if (!was) t.classList.add("active");
  };
  ACT.bank = (t) => {
    const sec = t.closest(".exercise");
    const open = $$("button.blank", sec).filter((b) => !b.closest(".q").classList.contains("graded"));
    const target = open.find((b) => b.classList.contains("active")) || open.find((b) => b.dataset.v == null);
    if (!target) return;
    const q = target.closest(".q");
    const mirrors = $$(".blank--mirror", q);
    const parts = t.innerHTML.split("・");
    target.dataset.v = t.dataset.j;
    // a paired entry ("やら・やら") fills the interactive blank and its mirrors part by part
    if (mirrors.length && parts.length === mirrors.length + 1) {
      target.innerHTML = parts[0];
      mirrors.forEach((m, k) => { m.innerHTML = parts[k + 1]; m.classList.add("filled"); });
    } else target.innerHTML = t.innerHTML;
    target.classList.add("filled");
    target.classList.remove("active");
    syncChips(sec);
  };
  ACT.grade = (t) => grade(t.closest(".exercise"));
  ACT.reset = (t) => resetEx(t.closest(".exercise"));

  // ===== end [C] exercises & review =====

  // ============================================================================
  // ===== [A] shell: pages, sidebar, router, events, init — owned by implementer A =====
  // ============================================================================

  // ---------- pages ----------
  function homeView() {
    const total = allPoints().length;
    const done = Object.keys(progress.studied).filter((k) => progress.studied[k]).length;
    const cards = N2.chapters
      .map((ch) => {
        const pts = ch.parts.flatMap((p) => p.points);
        const d = pts.filter((g) => progress.studied[g.no]).length;
        const range = pts.length ? `${pts[0].no}–${pts[pts.length - 1].no}` : "";
        return `<a class="ch-card" href="#/ch/${ch.id}"><div class="cc-num">${ch.id}</div><div class="cc-body">
          <div class="cc-genre">${fmt(ch.genre.ja)}</div><div class="cc-title">${fmt(ch.title.ja)}</div><div class="cc-en">${esc(ch.title.en)}</div>
          <div class="cc-foot"><span>文法 ${range}</span><span class="bar"><span style="width:${pts.length ? (100 * d) / pts.length : 0}%"></span></span></div></div></a>`;
      })
      .join("");
    return `<div class="home">
      <section class="hero">
        <h1>JLPT N2 文法 <span class="hero-sub">Interactive Grammar Textbook</span></h1>
        <p class="lead">An interactive edition of <em>TRY! 日本語能力試験 N2</em> (ABK / ASK): all 14 chapters and ${total || 139} grammar points with the book’s sample texts, explanations, examples, practice and review questions, plus listening via text-to-speech.</p>
        <div class="bi hero-bi" data-en-scope>${enToggle()}${enScopeBtn()}<p class="ja">日本語で読むことに慣れるため、説明は日本語が中心です。英語の説明・訳は最初は隠れています。右上の「EN」で表示できます。</p>
        <div class="en">To get you used to reading Japanese, explanations are primarily in Japanese. English translations and detailed English explanations are hidden by default — use the <b>EN</b> switch at the top (or the small EN button next to any line) to reveal them.</div></div>
        <div class="stats"><div><b>${done}</b> / ${total} studied</div><div class="bar big"><span style="width:${total ? (100 * done) / total : 0}%"></span></div></div>
        <div class="hero-links"><a class="btn primary" href="#/ch/1">第1章から始める <span class="en-inline">Start Chapter 1</span></a><a class="btn" href="#/guide">使い方 <span class="en-inline">How to use</span></a><a class="btn" href="#/drill">ランダム練習 <span class="en-inline">Random drill</span></a></div>
      </section>
      <section class="ch-grid">${cards}</section>
    </div>`;
  }

  // the guide's hand-written tables use {漢字|かな} too: render that ruby markup (without re-escaping the HTML)
  const rubyOnly = (html) => html.replace(/\{([^{}|<>]+)\|([^{}<>]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
  function guideView() {
    return rubyOnly(`<div class="page guide" data-en-scope>
      ${pageHead("この教材の使い方 <span class=\"en-inline\">How to use this site</span>")}
      ${bi({ ja: "各章は「できること → 見本文 → 文法項目 → Check → まとめの問題」の順に進みます。まず見本文を読んで（聞いて）、太字の文法が実際にどう使われているかを確認しましょう。", en: "Each chapter goes: Can-do goals → Sample text → Grammar points → Check → Review questions. Start by reading (and listening to) the sample text to see how the bold grammar is used in context." })}
      <h2>各文法項目の中身 <span class="en-inline">Inside a grammar point</span></h2>
      <ul class="legend">
        <li>${stars(3)} ${bi({ ja: "★が多いほど重要な項目です。", en: "More stars = more important / more likely on the test." }, "span")}</li>
        ${Object.keys(MARKS).map((k) => `<li class="legend-mark">${marks([k])} ${esc(MARKS[k][1])}</li>`).join("")}
        <li><b>どう使う？</b> — ${bi({ ja: "どんな場面・気持ちで使うか", en: "When and with what feeling the pattern is used" }, "span")}</li>
        <li><b>接続</b> — ${bi({ ja: "どの品詞のどの形につながるか", en: "Which part of speech / conjugated form it attaches to" }, "span")}</li>
        <li><b>📎</b> — ${bi({ ja: "ほかの言葉との違い・追加の使い方", en: "Differences from similar words, extra uses" }, "span")}</li>
        <li><b>＋Plus</b> — ${bi({ ja: "同じような意味で使われる別の表現", en: "Other expressions with a similar meaning" }, "span")}</li>
        <li><b>📘 English deep-dive</b> — detailed English explanation: nuance, comparisons, common mistakes, test tips.</li>
        <li><b>やってみよう！ / Check / まとめの問題</b> — ${bi({ ja: "練習問題。「答え合わせ」を押すと採点されます。結果はブラウザに保存されます。", en: "Practice. Press “Check answers” to grade; scores are saved in your browser." }, "span")}</li>
        <li><b>🔊 / ▶</b> — ${bi({ ja: "ブラウザの音声合成で読み上げます（聴解問題も）。", en: "Read aloud with your browser's Japanese text-to-speech (also used for the listening questions). Adjust speed in the settings." }, "span")}</li>
      </ul>
      <h2>品詞と活用形のマーク <span class="en-inline">Part-of-speech & conjugation marks</span></h2>
      <table class="tbl">
        <tr><th>マーク</th><th>意味</th><th>例</th></tr>
        <tr><td>${fmt("[N]")}</td><td>名詞 <span class="en-inline">noun</span></td><td>{雨|あめ}、{会議|かいぎ}</td></tr>
        <tr><td>${fmt("[いA]")}</td><td>い形容詞 <span class="en-inline">i-adjective</span></td><td>{高|たか}い、おいしい</td></tr>
        <tr><td>${fmt("[なA]")}</td><td>な形容詞 <span class="en-inline">na-adjective</span></td><td>{静|しず}か、{便利|べんり}</td></tr>
        <tr><td>${fmt("[V]")}</td><td>動詞 <span class="en-inline">verb</span></td><td>{書|か}く、{食|た}べる、する</td></tr>
        <tr><td>${fmt("[V-ます]")} / ${fmt("[V-~~ます~~]")}</td><td>ます形 / ます形の語幹 <span class="en-inline">masu form / masu stem</span></td><td>{書|か}きます / {書|か}き</td></tr>
        <tr><td>${fmt("[V-る]")}</td><td>辞書形 <span class="en-inline">dictionary form</span></td><td>{書|か}く</td></tr>
        <tr><td>${fmt("[V-て]")}</td><td>て形</td><td>{書|か}いて</td></tr>
        <tr><td>${fmt("[V-た]")}</td><td>た形</td><td>{書|か}いた</td></tr>
        <tr><td>${fmt("[V-ない]")} / ${fmt("[V-~~ない~~]")}</td><td>ない形 / ない形の語幹</td><td>{書|か}かない / {書|か}か</td></tr>
        <tr><td>${fmt("[V-できる]")}</td><td>可能形 <span class="en-inline">potential</span></td><td>{書|か}ける</td></tr>
        <tr><td>${fmt("[V-られる]")}</td><td>受身形 <span class="en-inline">passive</span></td><td>{書|か}かれる</td></tr>
        <tr><td>${fmt("[V-させる]")}</td><td>使役形 <span class="en-inline">causative</span></td><td>{書|か}かせる</td></tr>
        <tr><td>${fmt("[V-よう]")}</td><td>意向形 <span class="en-inline">volitional</span></td><td>{書|か}こう</td></tr>
        <tr><td>${fmt("[V-ば]")}</td><td>条件形 <span class="en-inline">conditional</span></td><td>{書|か}けば</td></tr>
        <tr><td>${fmt("[Pl]")}</td><td>普通形 <span class="en-inline">plain form (all four: non-past/past × aff./neg.)</span></td><td>{書|か}く・{書|か}かない・{書|か}いた・{書|か}かなかった</td></tr>
        <tr><td>${fmt("[いA~~い~~]")} ${fmt("[なA~~な~~]")} ${fmt("[N~~だ~~]")}</td><td>語尾を取る <span class="en-inline">drop the ending</span></td><td>{高|たか}(い)、{静|しず}か(な)</td></tr>
      </table>
      <h3>普通形 <span class="en-inline">Plain forms</span></h3>
      <table class="tbl">
        <tr><th></th><th>{非過去|ひかこ} {肯定|こうてい}</th><th>{非過去|ひかこ} {否定|ひてい}</th><th>{過去|かこ} {肯定|こうてい}</th><th>{過去|かこ} {否定|ひてい}</th></tr>
        <tr><td>V</td><td>{読|よ}む</td><td>{読|よ}まない</td><td>{読|よ}んだ</td><td>{読|よ}まなかった</td></tr>
        <tr><td>いA</td><td>{寒|さむ}い</td><td>{寒|さむ}くない</td><td>{寒|さむ}かった</td><td>{寒|さむ}くなかった</td></tr>
        <tr><td>なA</td><td>{静|しず}かだ</td><td>{静|しず}かじゃない</td><td>{静|しず}かだった</td><td>{静|しず}かじゃなかった</td></tr>
        <tr><td>N</td><td>{雨|あめ}だ</td><td>{雨|あめ}じゃない</td><td>{雨|あめ}だった</td><td>{雨|あめ}じゃなかった</td></tr>
      </table>
      ${bi({ ja: "「[Pl] + 〜 [なAだ→な　Nだ→な]」のような書き方は、普通形につながるが、な形容詞と名詞の「だ」は「な」になる、という意味です。論文など硬い文章では「じゃ」の代わりに「では」を使います。", en: "A note like “[Pl] + … (なAだ→な, Nだ→な)” means the pattern attaches to plain forms, except that the non-past だ of na-adjectives/nouns changes to な (e.g. {静|しず}かなんです, {病気|びょうき}なんです). In formal writing, では replaces じゃ." }, "p", "tbl-note")}
    </div>`);
  }

  // front matter of the book (はじめに / この本をお使いになる皆さんへ / 先生方へ)
  function aboutView() {
    const secs = N2.front || [];
    const block = (b) => {
      if (b.h) return `<h3 class="bi">${b.h.en ? enToggle() : ""}<span class="ja">${fmt(b.h.ja)}</span> <span class="en-inline">${fmt(b.h.en || "")}</span></h3>`;
      if (b.table) return `<table class="tbl">${b.table.head ? `<tr>${b.table.head.map((c) => `<th>${fmt(c)}</th>`).join("")}</tr>` : ""}${b.table.rows.map((r) => `<tr>${r.map((c) => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</table>`;
      if (b.list) return `<ul class="front-list">${b.list.map((x) => `<li class="bi">${x.en ? enToggle() : ""}<span class="ja">${fmt(x.ja)}</span>${en(x.en)}</li>`).join("")}</ul>`;
      if (b.mark) return `<div class="front-mark">${marks([b.mark])} ${bi(b.p)}</div>`;
      if (b.p) return bi(b.p, "p", "front-p");
      return "";
    };
    return `<div class="page about" data-en-scope><div class="page-tools">${enScopeBtn()}</div>${secs.length ? secs.map((sec) => `<section class="front-sec" id="front-${esc(sec.id)}"><h1>${fmt(sec.title.ja)} <span class="en-inline">${fmt(sec.title.en || "")}</span></h1>${(sec.blocks || []).map(block).join("")}</section>`).join("") : "<p>data/front.js not found.</p>"}</div>`;
  }

  function indexView() {
    const rows = [];
    allPoints().forEach(({ g, ch }) => {
      const forms = [g.pattern].concat(g.index || []);
      (g.plus || []).forEach((p) => forms.push(p.pattern));
      Array.from(new Set(forms)).forEach((f) => rows.push({ f, g, ch }));
    });
    const key = (s) => plain(s).replace(/^[〜～\s]+/, "").replace(/^[NVAいな]+/, "");
    rows.sort((a, b) => key(a.f).localeCompare(key(b.f), "ja"));
    return `<div class="page index-page">
      <h1>さくいん <span class="en-inline">Index</span></h1>
      <input class="search" id="idx-search" type="search" enterkeyhint="search" aria-label="検索 Search" placeholder="検索 Search: 〜につき, regardless, 限り …">
      <table class="tbl idx stack"><thead><tr><th>文型</th><th>番号</th><th>章</th><th class="en-col">Meaning</th></tr></thead><tbody>
      ${rows.map((r) => `<tr data-s="${esc((plain(r.f) + " " + plain(r.g.pattern) + " " + (r.g.usage && r.g.usage.en) + " " + (r.g.index || []).join(" ")).toLowerCase())}">
        <td><a href="#/gp/${r.g.no}">${fmt(r.f)}</a></td><td data-h="番号">${r.g.no}</td><td data-h="章"><a href="#/ch/${r.ch.id}">${r.ch.id}</a></td><td class="en-col">${fmt(r.g.usage && r.g.usage.en)}</td></tr>`).join("")}
      </tbody></table></div>`;
  }

  function compareView() {
    const groups = N2.compare || [];
    return `<div class="page compare" data-en-scope>
      ${pageHead(`${fmt("{似|に}ている{文型|ぶんけい}リスト")} <span class="en-inline">Similar sentence patterns</span>`)}
      ${bi({ ja: "形が似ている文型を、N4・N3の文型も含めて並べました。違いに注意しましょう。", en: "Patterns that look alike — including related N4/N3 patterns you should already know — side by side. Pay attention to how they differ." })}
      ${groups.map((gr) => `<section class="cmp-group"><h2>${fmt(gr.key)}</h2>${gr.intro ? bi(gr.intro) : ""}<table class="tbl cmp stack">
        <thead><tr><th>文型</th><th>例文</th><th>レベル</th><th>番号</th></tr></thead><tbody>
        ${gr.items.map((it) => `<tr><td class="cmp-pat">${fmt(it.pattern)}</td><td class="bi">${it.ex && it.ex.en ? enToggle() : ""}<span class="ja">${fmt(it.ex && it.ex.ja)}</span>${en(it.ex && it.ex.en)}${it.note ? `<div class="en cmp-note">${fmt(it.note)}</div>` : ""}</td>
          <td><span class="lvl lvl-${esc(it.level)}">${esc(it.level)}</span></td><td ${it.no ? 'data-h="番号"' : ""}>${it.no ? `<a href="#/gp/${it.no}">${it.no}</a>` : ""}</td></tr>`).join("")}
        </tbody></table></section>`).join("")}
    </div>`;
  }

  function canDoView() {
    return `<div class="page cando-page" data-en-scope>${pageHead("「できること」リスト <span class=\"en-inline\">Can-do list</span>")}
      <table class="tbl cando-tbl stack"><thead><tr><th>章</th><th>できること</th><th>文法項目</th></tr></thead><tbody>
      ${N2.chapters.map((ch) => {
        const cds = (ch.canDo || []).concat(ch.parts.flatMap((p) => p.canDo || []));
        return `<tr><td><a href="#/ch/${ch.id}" class="cd-ch"><span class="cd-ch-n">${ch.id}</span></a><div class="small">${fmt(ch.genre.ja)}</div><b class="cd-ch-t">${fmt(ch.title.ja)}</b></td>
        <td>${cds.map((c) => `<div class="bi">${c.en ? enToggle() : ""}<span class="ja">● ${fmt(c.ja)}</span>${en(c.en)}</div>`).join("")}</td>
        <td class="small">${ch.parts.flatMap((p) => p.points).map((g) => `<a class="cd-gp" href="#/gp/${g.no}"><b>${g.no}</b>${fmt(g.phrase || g.pattern)}</a>`).join("")}</td></tr>`;
      }).join("")}</tbody></table></div>`;
  }

  function drillView() {
    const pool = [];
    allPoints().forEach(({ g, ch }) => {
      const exs = (g.practice || []).concat((g.plus || []).flatMap((p) => p.practice || []), (g.notes || []).flatMap((n) => n.practice || []));
      exs.forEach((ex) => ex.type === "choice" && ex.items.forEach((it) => pool.push({ it, g, ch })));
    });
    N2.chapters.forEach((ch) => (ch.review || []).forEach((r) => r.ex.type === "choice" && r.ex.items.forEach((it) => pool.push({ it, ch }))));
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    const picked = pool.slice(0, 10);
    const ex = { type: "choice", items: picked.map((p) => Object.assign({}, p.it, { why: Object.assign({}, p.it.why || {}, { ja: ((p.it.why && p.it.why.ja) || "") + (p.g ? ` ☞ [#${p.g.no}]` : ` ☞ 第${p.ch.id}章`) }) })) };
    const html = renderExercise(ex, "drill-" + ++exSeq, "ランダム10問 <span class='en-inline'>10 random questions</span>").replace(/☞ \[#(\d+)\]/g, (m, n) => "☞ " + gpLink(+n));
    delete progress.scores["drill-" + exSeq];
    return `<div class="page drill" data-en-scope>${pageHead("ランダム練習 <span class=\"en-inline\">Random drill</span>")}
      ${bi({ ja: "全章の選択問題からランダムに10問出題します。", en: "Ten multiple-choice questions drawn at random from every chapter." })}
      ${pool.length ? html : "<p>No questions yet.</p>"}<p><a class="btn" href="#/drill" data-act="redrill">もう一度 <span class="en-inline">New set</span></a></p></div>`;
  }

  // page title row with one container-scoped EN button (per-line EN buttons are hidden at ≤600)
  const pageHead = (h1) => `<div class="page-head"><h1>${h1}</h1>${enScopeBtn()}</div>`;
  const notFound = () => `<div class="page"><h1>Not found</h1><p><a href="#/">Home</a></p></div>`;

  // ---------- sidebar ----------
  function sidebar() {
    const nav = N2.chapters
      .map((ch) => `<li class="sb-ch" data-ch="${ch.id}"><a href="#/ch/${ch.id}" class="sb-ch-link"><span class="sb-num">${ch.id}</span><span class="sb-t">${fmt(ch.title.ja)}</span><span class="sb-prog" data-prog="${ch.id}"></span></a>
        <ul class="sb-gps">${ch.parts.flatMap((p) => p.points).map((g) => `<li><a href="#/gp/${g.no}" data-gp="${g.no}"><span class="sb-gpn">${g.no}</span>${fmt(g.pattern)}</a></li>`).join("")}
        ${ch.review && ch.review.length ? `<li><a href="#/ch/${ch.id}/review" class="sb-review">まとめの問題</a></li>` : ""}</ul></li>`)
      .join("");
    $("#sb-nav").innerHTML = `<ul class="sb-list">${nav}</ul>`;
    updateSidebarProgress();
  }
  function updateSidebarProgress() {
    N2.chapters.forEach((ch) => {
      const pts = ch.parts.flatMap((p) => p.points);
      const d = pts.filter((g) => progress.studied[g.no]).length;
      const el = $(`[data-prog="${ch.id}"]`);
      if (el) { el.textContent = d ? `${d}/${pts.length}` : ""; el.classList.toggle("done", d === pts.length && d > 0); }
      pts.forEach((g) => { const a = $(`[data-gp="${g.no}"]`); if (a) a.classList.toggle("done", !!progress.studied[g.no]); });
    });
  }

  // ---------- router ----------
  function route() {
    TTS.stop();
    const h = location.hash.replace(/^#\/?/, "");
    const parts = h.split("/");
    let html, scrollTo = null, activeCh = null;
    if (!h) html = homeView();
    else if (parts[0] === "ch") {
      activeCh = +parts[1];
      html = chapterView(activeCh);
      if (parts[2] === "review") scrollTo = `#review-${activeCh}`;
    } else if (parts[0] === "gp") {
      const f = findPoint(+parts[1]);
      if (f) { activeCh = f.ch.id; html = chapterView(f.ch.id); scrollTo = `#gp-${parts[1]}`; } else html = notFound();
    } else if (parts[0] === "guide") html = guideView();
    else if (parts[0] === "about") html = aboutView();
    else if (parts[0] === "index") html = indexView();
    else if (parts[0] === "compare") html = compareView();
    else if (parts[0] === "cando") html = canDoView();
    else if (parts[0] === "drill") html = drillView();
    else html = notFound();
    const main = $("#main");
    if (main.dataset.view !== h || parts[0] === "drill") {
      main.innerHTML = html;
      main.dataset.view = h;
      main.dataset.ch = activeCh || "";
    }
    $$(".sb-ch").forEach((li) => li.classList.toggle("open", +li.dataset.ch === activeCh));
    $$(".sb-list a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#/" + h));
    $$(".topnav a, .sb-pages a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#/" + parts[0]));
    setDrawer(false, false);
    if (scrollTo) {
      const el = $(scrollTo);
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "instant", block: "start" }));
    } else window.scrollTo(0, 0);
    const ch = N2.chapters.find((c) => c.id === activeCh);
    document.title = (ch ? `${ch.id}. ${plain(ch.title.ja)} – ` : "") + "TRY! N2 文法 Interactive";
  }
  // keep the same chapter DOM when jumping between its grammar points
  function sameChapterJump() {
    const h = location.hash.replace(/^#\/?/, "");
    const p = h.split("/");
    const main = $("#main");
    if (p[0] === "gp" && main.dataset.ch) {
      const f = findPoint(+p[1]);
      if (f && String(f.ch.id) === main.dataset.ch) {
        const el = $(`#gp-${p[1]}`);
        if (el) { el.scrollIntoView({ block: "start" }); $$(".sb-list a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#/" + h)); return true; }
      }
    }
    if (p[0] === "ch" && p[2] === "review" && main.dataset.ch === p[1]) {
      const el = $(`#review-${p[1]}`);
      if (el) { el.scrollIntoView({ block: "start" }); return true; }
    }
    return false;
  }

  // ---------- drawer (≤900 the sidebar slides in over the page) ----------
  const drawerMode = () => matchMedia("(max-width: 900px)").matches;
  const isDrawerOpen = () => document.body.classList.contains("sb-open");
  function setDrawer(open, moveFocus = true) {
    const was = isDrawerOpen();
    document.body.classList.toggle("sb-open", open);
    $(".sb-toggle").setAttribute("aria-expanded", String(open));
    if (open && !was) {
      const cur = $(".sb-ch.open") || $(".sb-list a.active");
      if (cur) cur.scrollIntoView({ block: "nearest" });
      if (moveFocus) requestAnimationFrame(() => { const f = $(".sb-list a.active") || $$(".sidebar a").find((x) => x.offsetParent); if (f) f.focus({ preventScroll: true }); });
    } else if (!open && was && moveFocus) $(".sb-toggle").focus();
  }
  // keep Tab inside the open drawer (plus the ☰ button that closes it)
  function trapDrawerFocus(e) {
    const els = [$(".sb-toggle")].concat($$(".sidebar a, .sidebar button").filter((x) => x.offsetParent));
    const i = els.indexOf(document.activeElement), n = els.length;
    e.preventDefault();
    els[i === -1 ? 0 : (i + (e.shiftKey ? n - 1 : 1)) % n].focus();
  }
  // re-render the current view in place (used when a setting changes how chapter content is built)
  function rerender() {
    const y = scrollY, main = $("#main");
    delete main.dataset.view;
    route();
    window.scrollTo(0, y);
  }

  // ---------- events ----------
  function applySettings() {
    document.body.classList.toggle("no-furi", !settings.furigana);
    document.body.classList.toggle("show-en", settings.english);
    $("#tg-furi").checked = settings.furigana;
    $("#tg-en").checked = settings.english;
    $("#rate").value = settings.rate;
    $("#rate-v").textContent = settings.rate.toFixed(1) + "×";
    $("#vmode-set").value = settings.vertical;
  }

  ACT.en = (t) => t.closest(".bi").classList.toggle("en-open");
  ACT.speak = (t) => TTS.play([{ text: t.dataset.text }], t);
  ACT.listen = (t) => TTS.play(JSON.parse(t.dataset.q), t);
  ACT.redrill = (t, e) => { e.preventDefault(); route(); };
  ACT.sb = () => setDrawer(!isDrawerOpen());
  ACT["en-scope"] = (t) => { const box = t.closest("[data-en-scope]"); if (box) box.classList.toggle("en-all"); };

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-act]");
    if (!t) return;
    const f = ACT[t.dataset.act];
    if (f) return f(t, e);
  });
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.act === "studied") {
      progress.studied[t.dataset.no] = t.checked;
      saveProgress();
      updateSidebarProgress();
    } else if (t.id === "tg-furi") { settings.furigana = t.checked; saveSettings(); applySettings(); }
    else if (t.id === "tg-en") { settings.english = t.checked; saveSettings(); applySettings(); }
    else if (t.id === "vmode-set") { setVertical(t.value); rerender(); }
    else if (t.id === "reset-progress") {}
  });
  document.addEventListener("input", (e) => {
    if (e.target.id === "rate") { settings.rate = +e.target.value; saveSettings(); applySettings(); }
    if (e.target.id === "idx-search") {
      const q = e.target.value.trim().toLowerCase();
      $$(".idx tbody tr").forEach((tr) => (tr.style.display = !q || tr.dataset.s.includes(q) ? "" : "none"));
    }
  });
  // close the ⚙ popover on any click outside it
  document.addEventListener("click", (e) => {
    const st = $(".settings");
    if (st && st.open && !st.contains(e.target)) st.open = false;
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const st = $(".settings");
      if (st && st.open) { st.open = false; $("summary", st).focus(); return; }
      if (isDrawerOpen()) { setDrawer(false); return; }
    }
    if (e.key === "Tab" && isDrawerOpen() && drawerMode()) trapDrawerFocus(e);
    if (e.key === "e" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) && !e.metaKey && !e.ctrlKey) {
      settings.english = !settings.english; saveSettings(); applySettings();
    }
  });

  N2.resetProgress = () => { if (confirm("Reset all saved progress and scores?")) { progress.studied = {}; progress.scores = {}; saveProgress(); location.reload(); } };

  window.addEventListener("hashchange", () => { if (!sameChapterJump()) route(); else setDrawer(false, false); });
  // leaving drawer mode (rotate / resize wider) must not leave the page scroll-locked
  matchMedia("(max-width: 900px)").addEventListener("change", (m) => { if (!m.matches) setDrawer(false, false); });
  window.addEventListener("DOMContentLoaded", () => {
    TTS.load();
    applySettings();
    sidebar();
    route();
  });
})();