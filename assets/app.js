/* TRY! N2 grammar companion — single-page renderer. No build step. */
(function () {
  "use strict";

  // ---------- registry ----------
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
  const settings = Object.assign({ furigana: true, english: false, rate: 0.9 }, LS.get("settings", {}));
  const progress = Object.assign({ studied: {}, scores: {} }, LS.get("progress", {}));
  const saveSettings = () => LS.set("settings", settings);
  const saveProgress = () => LS.set("progress", progress);

  // ---------- helpers ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const LETTERS = "abcdefghijklmnop";
  const CIRCLED = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮";

  const BADGE_RE = /\[((?:N|V|いA|なA|A|Pl|Po)(?:-[^\]\s]*)?|(?:N|V|いA|なA|A)~~[^\]]*~~)\]/g;

  // inline markup → HTML
  function fmt(s) {
    if (s == null) return "";
    let t = esc(s);
    t = t.replace(BADGE_RE, (m, inner) => {
      const html = inner.replace(/~~(.+?)~~/g, "<s>$1</s>");
      const cls = /^N/.test(inner) ? "b-n" : /^いA/.test(inner) ? "b-i" : /^なA/.test(inner) ? "b-na" : /^P/.test(inner) ? "b-pl" : "b-v";
      return `<span class="badge ${cls}">${html}</span>`;
    });
    t = t.replace(/\{([^{}|]+)\|([^{}]+)\}/g, "<ruby>$1<rt>$2</rt></ruby>");
    t = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/~~(.+?)~~/g, "<s>$1</s>");
    t = t.replace(/＿＿/g, '<span class="blank">　　　</span>');
    t = t.replace(/\n/g, "<br>");
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
  const bi = (o, tag = "p", cls = "") => {
    if (!o) return "";
    if (typeof o === "string") return `<${tag} class="${cls}">${fmt(o)}</${tag}>`;
    return `<div class="bi ${cls}">${o.en ? enToggle() : ""}<${tag} class="ja">${fmt(o.ja)}</${tag}>${en(o.en)}</div>`;
  };
  const speakBtn = (text, extra = "") => `<button class="speak" data-act="speak" data-text="${esc(plain(text))}" ${extra} title="Listen">🔊</button>`;
  const stars = (n) => !n ? "" : `<span class="stars" title="Importance ${n}/3">${"★".repeat(n || 0)}<span class="dim">${"★".repeat(3 - (n || 0))}</span></span>`;
  const MARKS = {
    casual: ["💬", "Casual — used with friends & family", "くだけた会話"],
    formal: ["📄", "Formal / written — not used chatting with friends", "かたい表現"],
    polite: ["🙇", "Polite — to superiors, strangers, customers", "目上・初対面・客に"],
    regret: ["😣", "Regret, disappointment, or criticism", "後悔・残念・批判"],
    praise: ["🌟", "High evaluation / praise", "高い評価"],
  };
  const marks = (arr) => (arr || []).map((m) => (MARKS[m] ? `<span class="mark" title="${esc(MARKS[m][1])}">${MARKS[m][0]} <span class="mark-l">${MARKS[m][2]}</span></span>` : "")).join("");

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

  // ---------- exercises ----------
  const EX = {};
  let exSeq = 0;

  function renderExercise(ex, id, title) {
    if (!ex) return "";
    EX[id] = ex;
    const sc = progress.scores[id];
    const score = sc ? `<span class="score-chip ${sc.c === sc.t ? "full" : ""}">${sc.c}/${sc.t}</span>` : "";
    let body = "";
    switch (ex.type) {
      case "choice": body = ex.items.map((it, i) => choiceItem(it, i, id, ex.labels)).join(""); break;
      case "write": body = ex.items.map((it, i) => writeItem(it, i)).join(""); break;
      case "match": body = matchBody(ex, id); break;
      case "fill": body = fillBody(ex, id); break;
      case "order": body = ex.items.map((it, i) => orderItem(it, i, id)).join(""); break;
      case "passage": body = passageBody(ex, id); break;
      case "reading": body = readingBody(ex, id); break;
      case "listening": body = listeningBody(ex, id); break;
      default: body = `<p class="err">Unknown exercise type ${esc(ex.type)}</p>`;
    }
    return `<section class="exercise ex-${ex.type}" data-ex="${id}">
      <div class="ex-head">${title ? `<span class="ex-title">${title}</span>` : ""}${score}</div>
      ${ex.prompt ? bi(ex.prompt, "p", "ex-prompt") : ""}
      <div class="ex-body">${body}</div>
      <div class="ex-actions"><button class="btn primary" data-act="grade">答え合わせ <span class="en-inline">Check answers</span></button>
      <button class="btn" data-act="reset">リセット <span class="en-inline">Reset</span></button><span class="ex-result"></span></div>
    </section>`;
  }

  const whyHtml = (w) => (w ? `<div class="why">${w.ja ? `<p>${fmt(w.ja)}</p>` : ""}${w.en ? `<p class="why-en">${fmt(w.en)}</p>` : ""}</div>` : "");

  // labels: "abc" | "123" | undefined (auto: 4+ options → numbers, else letters)
  function optLabel(n, j, labels) {
    if (labels === "abc") return LETTERS[j];
    if (labels === "123") return j + 1;
    if (labels === "ABC") return LETTERS[j].toUpperCase();
    return n > 3 ? j + 1 : LETTERS[j];
  }
  function optGroup(options, answer, labels, tag) {
    return `<div class="opts" data-answer="${answer}">${tag ? `<span class="opt-tag">${fmt(tag)}</span>` : ""}${options
      .map((o, j) => `<button class="opt" data-act="pick" data-j="${j}"><span class="opt-n">${optLabel(options.length, j, labels)}</span>${fmt(o)}</button>`)
      .join("")}</div>`;
  }
  function choiceItem(it, i, id, labels, numLabel) {
    // it.parts = [{options, answer, tag}] for sentences with several (a/b) blanks
    const groups = it.parts ? it.parts.map((p, k) => optGroup(p.options, p.answer, labels, p.tag || `(${k + 1})`)).join("") : optGroup(it.options, it.answer, labels);
    return `<div class="q choice-q" data-i="${i}">
      <div class="q-line"><span class="qn">${numLabel === "none" ? "" : i + 1}</span><div class="q-text">${fmt(it.q)}${it.q ? speakBtn(it.q, "data-small") : ""}</div></div>
      ${groups}
      <div class="feedback">${it.en ? `<p class="en">${fmt(it.en)}</p>` : ""}${whyHtml(it.why)}</div>
    </div>`;
  }

  function matchBody(ex) {
    const rights = ex.right.map((r, j) => `<li><span class="opt-n">${LETTERS[j]}</span>${fmt(r)}</li>`).join("");
    const lefts = ex.left
      .map((l, i) => {
        const sel = `<select data-i="${i}"><option value="">—</option>${ex.right.map((_, j) => `<option value="${j}">${LETTERS[j]}</option>`).join("")}</select>`;
        return `<div class="q match-q" data-i="${i}" data-answer="${ex.answer[i]}"><div class="q-line"><span class="qn">${i + 1}</span><div class="q-text">${fmt(l)} ${sel}</div></div>
          <div class="feedback"><p class="full">${fmt(l)}${fmt(ex.right[ex.answer[i]])}</p>${ex.en && ex.en[i] ? `<p class="en">${fmt(ex.en[i])}</p>` : ""}</div></div>`;
      })
      .join("");
    return `<div class="match-wrap"><div class="match-left">${lefts}</div><ol class="match-right">${rights}</ol></div>`;
  }

  function fillBody(ex) {
    const bank = `<div class="bank">${ex.bank.map((b) => `<span class="chip">${fmt(b)}</span>`).join("")}</div>`;
    const opts = ex.bank.map((b, j) => `<option value="${j}">${esc(plain(b))}</option>`).join("");
    const items = ex.items
      .map((it, i) => {
        // answer may be a string (one ＿＿) or an array (several ＿＿ in one item)
        const answers = Array.isArray(it.answer) ? it.answer : [it.answer];
        let k = 0, full = it.q;
        const q = fmt(it.q).replace(/<span class="blank">　　　<\/span>/g, () => `<select data-answer="${ex.bank.indexOf(answers[k++])}"><option value="">——</option>${opts}</select>`);
        answers.forEach((a) => (full = full.replace("＿＿", "**" + a + "**")));
        return `<div class="q fill-q" data-i="${i}"><div class="q-line"><span class="qn">${i + 1}</span><div class="q-text">${q}</div></div>
          <div class="feedback"><p class="full">${fmt(full)}</p>${it.en ? `<p class="en">${fmt(it.en)}</p>` : ""}${whyHtml(it.why)}</div></div>`;
      })
      .join("");
    return bank + items;
  }

  // free-text answer; it.answer = accepted strings
  const normAns = (s) => plain(s).replace(/[\s　、。・]/g, "");
  function writeItem(it, i) {
    const answers = Array.isArray(it.answer) ? it.answer : [it.answer];
    const q = fmt(it.q).replace(/<span class="blank">　　　<\/span>/g, `<input class="write" type="text" autocomplete="off">`);
    return `<div class="q write-q" data-i="${i}" data-accept="${esc(JSON.stringify(answers.map(normAns)))}"><div class="q-line"><span class="qn">${i + 1}</span><div class="q-text">${q.includes("<input") ? q : q + ' <input class="write" type="text" autocomplete="off">'}</div></div>
      <div class="feedback"><p class="full">答え：${answers.map(fmt).join(" ／ ")}</p>${it.en ? `<p class="en">${fmt(it.en)}</p>` : ""}${whyHtml(it.why)}</div></div>`;
  }

  function orderItem(it, i) {
    const slots = [0, 1, 2, 3].map((k) => `<span class="slot ${k === it.star ? "star" : ""}" data-act="unslot" data-k="${k}">${k === it.star ? "★" : ""}</span>`).join("");
    const pieces = it.pieces.map((p, j) => `<button class="piece" data-act="piece" data-j="${j}"><span class="opt-n">${j + 1}</span>${fmt(p)}</button>`).join("");
    const correct = it.order.map((j) => it.pieces[j]);
    const full = fmt(it.before) + correct.map((p, k) => (k === it.star ? `<strong class="star-ans">${fmt(p)}</strong>` : fmt(p))).join("") + fmt(it.after);
    return `<div class="q order-q" data-i="${i}" data-answer="${it.order[it.star]}">
      <div class="q-line"><span class="qn">${i + 1}</span><div class="q-text order-line">${fmt(it.before)} ${slots} ${fmt(it.after)}</div></div>
      <div class="pieces">${pieces}</div>
      <div class="feedback"><p class="full">${full}</p><p class="star-note">★ = ${it.order[it.star] + 1}（${fmt(it.pieces[it.order[it.star]])}）</p>${it.en ? `<p class="en">${fmt(it.en)}</p>` : ""}${whyHtml(it.why)}</div>
    </div>`;
  }

  function textBlock(title, paras, enParas, speakable = true) {
    const all = (paras || []).join("\n");
    return `<div class="bi passage-text">${enParas ? enToggle() : ""}${speakable ? speakBtn(all) : ""}
      ${title ? `<h4 class="passage-title">${fmt(title)}</h4>` : ""}
      <div class="ja">${paras.map((p) => `<p>${fmt(p).replace(/\[(\d+)\]/g, '<span class="pblank">$1</span>')}</p>`).join("")}</div>
      ${enParas ? `<div class="en">${enParas.map((p) => `<p>${fmt(p)}</p>`).join("")}</div>` : ""}</div>`;
  }

  function passageBody(ex, id) {
    const items = ex.blanks.map((b, i) => choiceItem({ q: "", options: b.options, answer: b.answer, why: b.why, en: b.en }, i, id, ex.labels)).join("");
    return textBlock(ex.title, ex.text, ex.en) + `<div class="passage-qs">${items}</div>`;
  }
  function readingBody(ex, id) {
    return textBlock(ex.title, ex.text, ex.en) + ex.items.map((it, i) => choiceItem(it, i, id, ex.labels)).join("");
  }
  function listeningBody(ex, id) {
    let lastScript = [], lastEn = [];
    return ex.items
      .map((it0, i) => {
        // an item without its own script reuses the previous one (one talk → several questions)
        const it = Object.assign({}, it0, { script: it0.script || lastScript, en: it0.script ? it0.en : it0.en || lastEn });
        lastScript = it.script; lastEn = it.en || [];
        const queue = [];
        // "summary" (概要理解): the question is heard only after the talk and isn't printed
        const summary = ex.mode === "summary";
        if (it.question && !summary) queue.push({ text: plain(it.question), v: "f" });
        // don't re-speak a script line that just repeats the question (it's spoken before/after already)
        const qPlain = it.question ? plain(it.question).replace(/\s/g, "") : null;
        it.script.forEach((l) => { if (!(qPlain && ex.mode !== "response" && plain(l.ja).replace(/\s/g, "") === qPlain)) queue.push({ text: plain(l.ja), v: l.v }); });
        if (ex.mode === "response") it.options.forEach((o, j) => queue.push({ text: `${j + 1}、${plain(o)}`, v: it.script[0] && it.script[0].v === "m" ? "f" : "m" }));
        if (it.question && ex.mode !== "response") queue.push({ text: (summary ? "しつもん。" : "") + plain(it.question), v: "f" });
        const script = it.script
          .map((l, k) => `<div class="sline">${l.sp ? `<span class="sp">${fmt(l.sp)}：</span>` : ""}<span>${fmt(l.ja)}${it.en && it.en[k] ? `<span class="en">${fmt(it.en[k])}</span>` : ""}</span></div>`)
          .join("");
        const qForScript = summary && it.question ? `<div class="sline"><span class="sp">質問：</span><span>${fmt(it.question)}</span></div>` : "";
        // en entries beyond the script lines translate the spoken reply choices
        const optEn = (it.en || []).slice(it.script.length);
        const optsForScript = ex.mode === "response" ? `<div class="sline resp">${it.options.map((o, j) => `<div>${j + 1}. ${fmt(o)}${optEn[j] ? `<span class="en">${fmt(optEn[j])}</span>` : ""}</div>`).join("")}</div>` : "";
        const displayOpts = ex.mode === "response" ? it.options.map((_, j) => String(j + 1)) : it.options;
        const opts = displayOpts.map((o, j) => `<button class="opt" data-act="pick" data-i="${i}" data-j="${j}"><span class="opt-n">${j + 1}</span>${ex.mode === "response" ? "" : fmt(o)}</button>`).join("");
        return `<div class="q choice-q listen-q" data-i="${i}">
          <div class="q-line"><span class="qn">${i + 1}</span><div class="q-text">
            <button class="btn play" data-act="listen" data-q='${esc(JSON.stringify(queue))}'>▶ ${ex.mode === "response" ? "再生" : "問題を聞く"} <span class="en-inline">Play</span></button>
            ${it.question && ex.mode !== "response" && !summary ? `<span class="lq">${fmt(it.question)}</span>` : ""}</div></div>
          <div class="opts ${ex.mode === "response" ? "opts-inline" : ""}" data-answer="${it.answer}">${opts}</div>
          <details class="script"><summary>スクリプト <span class="en-inline">Transcript</span></summary>${script}${qForScript}${optsForScript}</details>
          <div class="feedback">${whyHtml(it.why)}</div>
        </div>`;
      })
      .join("");
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
      } else if (q.classList.contains("match-q")) {
        ok = $("select", q).value === String(q.dataset.answer);
      } else if (q.classList.contains("fill-q")) {
        ok = $$("select", q).every((s) => s.value === s.dataset.answer);
      } else if (q.classList.contains("write-q")) {
        const acc = JSON.parse(q.dataset.accept);
        ok = $$("input.write", q).map((x) => normAns(x.value)).join("／") === acc[0] || acc.includes($$("input.write", q).map((x) => normAns(x.value)).join(""));
      } else if (q.classList.contains("order-q")) {
        const star = $(".slot.star", q);
        ok = star.dataset.j != null && star.dataset.j === String(q.dataset.answer);
      }
      if (ok) c++;
      q.classList.remove("ok", "ng");
      q.classList.add(ok ? "ok" : "ng", "graded");
    });
    progress.scores[id] = { c, t: qs.length };
    saveProgress();
    const res = $(".ex-result", sec);
    res.textContent = `${c} / ${qs.length}` + (c === qs.length ? " 🎉" : "");
    res.className = "ex-result " + (c === qs.length ? "full" : "");
    updateSidebarProgress();
  }
  function resetEx(sec) {
    $$(".q", sec).forEach((q) => q.classList.remove("ok", "ng", "graded"));
    $$(".opt", sec).forEach((o) => o.classList.remove("picked", "right", "wrong"));
    $$("select", sec).forEach((s) => (s.value = ""));
    $$("input.write", sec).forEach((s) => (s.value = ""));
    $$(".order-q", sec).forEach(resetOrder);
    $(".ex-result", sec).textContent = "";
  }
  function resetOrder(q) {
    $$(".slot", q).forEach((s) => {
      delete s.dataset.j;
      s.innerHTML = s.classList.contains("star") ? "★" : "";
      s.classList.remove("filled");
    });
    $$(".piece", q).forEach((p) => (p.disabled = false));
  }

  // ---------- views ----------
  function gpCard(g, ch) {
    const gid = `gp${g.no}`;
    const studied = progress.studied[g.no];
    const plusHtml = (g.plus || []).map((p, k) => `<div class="plus">
        <div class="plus-head"><span class="plus-tag">＋Plus</span><h4>${fmt(p.pattern)}</h4>${stars(p.stars)}${marks(p.marks)}</div>
        ${bi(p.usage)}
        ${formsHtml(p.forms, p.formNotes)}
        ${examplesHtml(p.examples)}
        ${notesHtml(p.notes, `${gid}-plus${k}`)}
        ${(p.practice || []).map((ex, j) => renderExercise(ex, `${gid}-plus${k}-p${j}`, "やってみよう！")).join("")}
      </div>`).join("");
    return `<article class="gp" id="gp-${g.no}">
      <header class="gp-head">
        <span class="gp-no">${g.no}</span>
        <div class="gp-titles"><h3>${fmt(g.pattern)}</h3>${g.phrase ? `<div class="gp-phrase">${fmt(g.phrase)}</div>` : ""}</div>
        <div class="gp-meta">${stars(g.stars)}${marks(g.marks)}</div>
      </header>
      <div class="sec-label">どう使う？ <span class="en-inline">How to use</span></div>
      ${bi(g.usage, "p", "usage")}
      ${formsHtml(g.forms, g.formNotes)}
      ${examplesHtml(g.examples)}
      ${g.deepDive ? `<details class="deep"><summary>📘 English deep-dive <span class="dim">nuance · comparisons · pitfalls</span></summary><div class="deep-body">${prose(g.deepDive)}</div></details>` : ""}
      ${(g.practice || []).map((ex, j) => renderExercise(ex, `${gid}-p${j}`, "やってみよう！ <span class='en-inline'>Try it out</span>")).join("")}
      ${notesHtml(g.notes, gid)}
      ${plusHtml}
      <footer class="gp-foot">
        ${g.see && g.see.length ? `<div class="see">☞ ${g.see.map(gpLink).join(" ")}</div>` : "<div></div>"}
        <label class="studied"><input type="checkbox" data-act="studied" data-no="${g.no}" ${studied ? "checked" : ""}> 学習済み <span class="en-inline">Studied</span></label>
      </footer>
    </article>`;
  }
  function formsHtml(forms, notes) {
    if (!forms || !forms.length) return "";
    return `<div class="forms"><div class="forms-label">接続 <span class="en-inline">Connection</span></div>${forms.map((f) => `<div class="form">${fmt(f)}</div>`).join("")}
      ${(notes || []).map((n) => `<div class="form-note bi">${n.en ? enToggle() : ""}<span class="ja">＊${fmt(n.ja)}</span>${en(n.en)}</div>`).join("")}</div>`;
  }
  function examplesHtml(exs) {
    if (!exs || !exs.length) return "";
    return `<ol class="examples">${exs
      .map((e, i) => `<li class="bi">${e.en ? enToggle() : ""}<span class="exn">${CIRCLED[i] || i + 1}</span><div><span class="ja">${fmt(e.ja)}${e.idiom ? ' <span class="idiom" title="Idiomatic expression">慣用</span>' : ""}</span>${speakBtn(e.ja, "data-small")}${en(e.en)}</div></li>`)
      .join("")}</ol>`;
  }
  function notesHtml(notes, base) {
    return (notes || [])
      .map((n, k) => `<aside class="note"><div class="note-icon">📎</div><div class="note-body">
        ${bi({ ja: n.ja, en: n.en })}
        ${examplesHtml(n.examples)}
        ${(n.practice || []).map((ex, j) => renderExercise(ex, `${base}-n${k}-p${j}`, "やってみよう！")).join("")}
      </div></aside>`)
      .join("");
  }
  function sampleHtml(s, chId, pi) {
    if (!s) return "";
    const queue = s.lines.map((l) => ({ text: plain(l.ja), v: l.v || (s.kind === "dialogue" ? "f" : "f") }));
    const lines = s.lines
      .map((l) => `<div class="sline bi">${l.en ? enToggle() : ""}${l.sp ? `<span class="sp">${fmt(l.sp)}</span>` : ""}<div class="sl-body"><div class="ja">${fmt(l.ja)}</div>${en(l.en)}</div></div>`)
      .join("");
    return `<section class="sample kind-${esc(s.kind)}">
      <div class="sample-head"><span class="sample-label">見本文 <span class="en-inline">Sample text</span></span>
        <button class="btn play" data-act="listen" data-q='${esc(JSON.stringify(queue))}'>▶ 聞く <span class="en-inline">Listen</span></button></div>
      ${s.heading ? `<h3 class="sample-heading">${fmt(s.heading)}</h3>` : ""}
      <div class="sample-body ${s.kind === "dialogue" ? "dialogue" : ""}">${lines}</div>
    </section>`;
  }

  function chapterView(id) {
    const ch = N2.chapters.find((c) => c.id === id);
    if (!ch) return notFound();
    const idx = N2.chapters.indexOf(ch);
    const prev = N2.chapters[idx - 1], next = N2.chapters[idx + 1];
    const miniToc = ch.parts
      .map((p, pi) => `${p.label ? `<span class="mt-part">${esc(p.label)}</span>` : ""}${p.points.map((g) => `<a href="#/gp/${g.no}" class="mt-gp">${g.no} ${fmt(g.pattern)}</a>`).join("")}`)
      .join("") + (ch.review && ch.review.length ? `<a href="#/ch/${id}/review" class="mt-gp mt-review">まとめの問題</a>` : "");
    const parts = ch.parts
      .map((p, pi) => `<section class="part" id="ch${id}-part${pi}">
        ${p.label ? `<h2 class="part-title">${fmt(ch.title.ja)} ${esc(p.label)}</h2>` : ""}
        ${p.canDo && p.canDo.length ? canDoHtml(p.canDo) : ""}
        ${sampleHtml(p.sample, id, pi)}
        ${p.points.map((g) => gpCard(g, ch)).join("")}
        ${p.check ? `<div class="check-wrap">${[].concat(p.check).map((c, k) => renderExercise(c, `ch${id}-part${pi}-check${k ? "-" + k : ""}`, "📖 Check" + (Array.isArray(p.check) && p.check.length > 1 ? " " + (k + 1) : ""))).join("")}</div>` : ""}
      </section>`)
      .join("");
    const review = ch.review && ch.review.length
      ? `<section class="review" id="review-${id}"><h2 class="review-title">まとめの問題 <span class="en-inline">Review questions</span></h2>
        ${ch.review.map((r, k) => renderExercise(r.ex, `ch${id}-review-${k}`, `${fmt(r.title.ja)} ${r.title.en ? `<span class="en-inline">${esc(r.title.en)}</span>` : ""}`)).join("")}</section>`
      : "";
    return `<div class="chapter">
      <header class="ch-head">
        <div class="ch-num">${id}</div>
        <div><div class="ch-genre">${fmt(ch.genre.ja)} <span class="en-inline">${esc(ch.genre.en)}</span></div>
        <h1>${fmt(ch.title.ja)}</h1><div class="ch-en">${esc(ch.title.en)}</div></div>
      </header>
      ${ch.canDo && ch.canDo.length ? canDoHtml(ch.canDo) : ""}
      <nav class="mini-toc">${miniToc}</nav>
      ${parts}
      ${review}
      <nav class="pager">${prev ? `<a href="#/ch/${prev.id}">← ${prev.id}. ${fmt(prev.title.ja)}</a>` : "<span></span>"}${next ? `<a href="#/ch/${next.id}">${next.id}. ${fmt(next.title.ja)} →</a>` : "<span></span>"}</nav>
    </div>`;
  }
  const canDoHtml = (list) => `<div class="cando"><div class="cando-label">できること <span class="en-inline">Can do</span></div><ul>${list.map((c) => `<li class="bi">${c.en ? enToggle() : ""}<span class="ja">${fmt(c.ja)}</span>${en(c.en)}</li>`).join("")}</ul></div>`;

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
        <div class="bi hero-bi">${enToggle()}<p class="ja">日本語で読むことに慣れるため、説明は日本語が中心です。英語の説明・訳は最初は隠れています。右上の「EN」で表示できます。</p>
        <div class="en">To get you used to reading Japanese, explanations are primarily in Japanese. English translations and detailed English explanations are hidden by default — use the <b>EN</b> switch at the top (or the small EN button next to any line) to reveal them.</div></div>
        <div class="stats"><div><b>${done}</b> / ${total} studied</div><div class="bar big"><span style="width:${total ? (100 * done) / total : 0}%"></span></div></div>
        <div class="hero-links"><a class="btn primary" href="#/ch/1">第1章から始める <span class="en-inline">Start Chapter 1</span></a><a class="btn" href="#/guide">使い方 <span class="en-inline">How to use</span></a><a class="btn" href="#/drill">ランダム練習 <span class="en-inline">Random drill</span></a></div>
      </section>
      <section class="ch-grid">${cards}</section>
    </div>`;
  }

  function guideView() {
    return `<div class="page guide">
      <h1>この教材の使い方 <span class="en-inline">How to use this site</span></h1>
      ${bi({ ja: "各章は「できること → 見本文 → 文法項目 → Check → まとめの問題」の順に進みます。まず見本文を読んで（聞いて）、太字の文法が実際にどう使われているかを確認しましょう。", en: "Each chapter goes: Can-do goals → Sample text → Grammar points → Check → Review questions. Start by reading (and listening to) the sample text to see how the bold grammar is used in context." })}
      <h2>各文法項目の中身 <span class="en-inline">Inside a grammar point</span></h2>
      <ul class="legend">
        <li>${stars(3)} ${bi({ ja: "★が多いほど重要な項目です。", en: "More stars = more important / more likely on the test." }, "span")}</li>
        ${Object.keys(MARKS).map((k) => `<li><span class="mark">${MARKS[k][0]} <span class="mark-l">${MARKS[k][2]}</span></span> ${esc(MARKS[k][1])}</li>`).join("")}
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
    </div>`;
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
    return `<div class="page about">${secs.length ? secs.map((sec) => `<section class="front-sec" id="front-${esc(sec.id)}"><h1>${fmt(sec.title.ja)} <span class="en-inline">${fmt(sec.title.en || "")}</span></h1>${(sec.blocks || []).map(block).join("")}</section>`).join("") : "<p>data/front.js not found.</p>"}</div>`;
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
      <input class="search" id="idx-search" placeholder="検索 Search: 〜につき, regardless, 限り …" autofocus>
      <table class="tbl idx"><thead><tr><th>文型</th><th>番号</th><th>章</th><th class="en-col">Meaning</th></tr></thead><tbody>
      ${rows.map((r) => `<tr data-s="${esc((plain(r.f) + " " + plain(r.g.pattern) + " " + (r.g.usage && r.g.usage.en) + " " + (r.g.index || []).join(" ")).toLowerCase())}">
        <td><a href="#/gp/${r.g.no}">${fmt(r.f)}</a></td><td>${r.g.no}</td><td><a href="#/ch/${r.ch.id}">${r.ch.id}</a></td><td class="en-col">${fmt(r.g.usage && r.g.usage.en)}</td></tr>`).join("")}
      </tbody></table></div>`;
  }

  function compareView() {
    const groups = N2.compare || [];
    return `<div class="page compare">
      <h1>{似|に}ている{文型|ぶんけい}リスト <span class="en-inline">Similar sentence patterns</span></h1>
      ${bi({ ja: "形が似ている文型を、N4・N3の文型も含めて並べました。違いに注意しましょう。", en: "Patterns that look alike — including related N4/N3 patterns you should already know — side by side. Pay attention to how they differ." })}
      ${groups.map((gr) => `<section class="cmp-group"><h2>${fmt(gr.key)}</h2>${gr.intro ? bi(gr.intro) : ""}<table class="tbl cmp">
        <thead><tr><th>文型</th><th>例文</th><th>レベル</th><th>番号</th></tr></thead><tbody>
        ${gr.items.map((it) => `<tr><td class="cmp-pat">${fmt(it.pattern)}</td><td class="bi">${it.ex && it.ex.en ? enToggle() : ""}<span class="ja">${fmt(it.ex && it.ex.ja)}</span>${en(it.ex && it.ex.en)}${it.note ? `<div class="en cmp-note">${fmt(it.note)}</div>` : ""}</td>
          <td><span class="lvl lvl-${esc(it.level)}">${esc(it.level)}</span></td><td>${it.no ? `<a href="#/gp/${it.no}">${it.no}</a>` : ""}</td></tr>`).join("")}
        </tbody></table></section>`).join("")}
    </div>`;
  }

  function canDoView() {
    return `<div class="page cando-page"><h1>「できること」リスト <span class="en-inline">Can-do list</span></h1>
      <table class="tbl"><thead><tr><th>章</th><th>できること</th><th>文法項目</th></tr></thead><tbody>
      ${N2.chapters.map((ch) => {
        const cds = (ch.canDo || []).concat(ch.parts.flatMap((p) => p.canDo || []));
        return `<tr><td><a href="#/ch/${ch.id}">${ch.id}</a><div class="small">${fmt(ch.genre.ja)}</div><b>${fmt(ch.title.ja)}</b></td>
        <td>${cds.map((c) => `<div class="bi">${c.en ? enToggle() : ""}<span class="ja">● ${fmt(c.ja)}</span>${en(c.en)}</div>`).join("")}</td>
        <td class="small">${ch.parts.flatMap((p) => p.points).map((g) => `<div><a href="#/gp/${g.no}">${g.no}</a> ${fmt(g.phrase || g.pattern)}</div>`).join("")}</td></tr>`;
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
    return `<div class="page drill"><h1>ランダム練習 <span class="en-inline">Random drill</span></h1>
      ${bi({ ja: "全章の選択問題からランダムに10問出題します。", en: "Ten multiple-choice questions drawn at random from every chapter." })}
      ${pool.length ? html : "<p>No questions yet.</p>"}<p><a class="btn" href="#/drill" data-act="redrill">もう一度 <span class="en-inline">New set</span></a></p></div>`;
  }

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
    $$(".topnav a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#/" + parts[0]));
    document.body.classList.remove("sb-open");
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

  // ---------- events ----------
  function applySettings() {
    document.body.classList.toggle("no-furi", !settings.furigana);
    document.body.classList.toggle("show-en", settings.english);
    $("#tg-furi").checked = settings.furigana;
    $("#tg-en").checked = settings.english;
    $("#rate").value = settings.rate;
    $("#rate-v").textContent = settings.rate.toFixed(1) + "×";
  }

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-act]");
    if (!t) return;
    const act = t.dataset.act;
    if (act === "en") { t.closest(".bi").classList.toggle("en-open"); }
    else if (act === "speak") { TTS.play([{ text: t.dataset.text }], t); }
    else if (act === "listen") { TTS.play(JSON.parse(t.dataset.q), t); }
    else if (act === "pick") {
      const q = t.closest(".q");
      if (q.classList.contains("graded")) return;
      $$(".opt", t.closest(".opts")).forEach((o) => o.classList.toggle("picked", o === t));
    } else if (act === "piece") {
      const q = t.closest(".q");
      if (q.classList.contains("graded")) return;
      const slot = $$(".slot", q).find((s) => s.dataset.j == null);
      if (!slot) return;
      slot.dataset.j = t.dataset.j;
      slot.innerHTML = t.innerHTML;
      slot.classList.add("filled");
      t.disabled = true;
    } else if (act === "unslot") {
      const q = t.closest(".q");
      if (q.classList.contains("graded") || t.dataset.j == null) return;
      $(`.piece[data-j="${t.dataset.j}"]`, q).disabled = false;
      delete t.dataset.j;
      t.innerHTML = t.classList.contains("star") ? "★" : "";
      t.classList.remove("filled");
    } else if (act === "grade") grade(t.closest(".exercise"));
    else if (act === "reset") resetEx(t.closest(".exercise"));
    else if (act === "redrill") { e.preventDefault(); route(); }
    else if (act === "sb") document.body.classList.toggle("sb-open");
  });
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.act === "studied") {
      progress.studied[t.dataset.no] = t.checked;
      saveProgress();
      updateSidebarProgress();
    } else if (t.id === "tg-furi") { settings.furigana = t.checked; saveSettings(); applySettings(); }
    else if (t.id === "tg-en") { settings.english = t.checked; saveSettings(); applySettings(); }
    else if (t.id === "reset-progress") {}
  });
  document.addEventListener("input", (e) => {
    if (e.target.id === "rate") { settings.rate = +e.target.value; saveSettings(); applySettings(); }
    if (e.target.id === "idx-search") {
      const q = e.target.value.trim().toLowerCase();
      $$(".idx tbody tr").forEach((tr) => (tr.style.display = !q || tr.dataset.s.includes(q) ? "" : "none"));
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "e" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) && !e.metaKey && !e.ctrlKey) {
      settings.english = !settings.english; saveSettings(); applySettings();
    }
  });

  N2.resetProgress = () => { if (confirm("Reset all saved progress and scores?")) { progress.studied = {}; progress.scores = {}; saveProgress(); location.reload(); } };

  window.addEventListener("hashchange", () => { if (!sameChapterJump()) route(); });
  window.addEventListener("DOMContentLoaded", () => {
    TTS.load();
    applySettings();
    sidebar();
    route();
  });
})();
