// Entry point: loads the book's data files, builds the page shell (top bar, sidebar, footer), routes, wires events.
// The page (index.html = N2, n1/index.html = N1, q2/index.html = Quartet II) loads assets/js/boot.js and
// data/<book>/book.js first. What differs per book (page links, sidebar, routes, views) is an adapter: TRY_BOOK below
// for the TRY books, assets/js/q2/nav.js for Quartet II (book kind "quartet", loaded only on that page).
import { ACT, BOOK, BOOKS, SITE, TRY, TTS, $, $$, allPoints, chapterPoints, esc, findPoint, isWide, keepPlace, loadProgress, placeBack, placeRec, progress, resume, saveProgress, saveResume, saveSettings, settings, studiedIn, WIDE } from "./core.js";
import { plain } from "./markup.js";
import { fitRubies } from "./ruby.js";
import { chapterView, setVertical, vtScrollInit } from "./content.js";
import { fitOptionCols } from "./exercises.js";
import { aboutView, canDoView, compareView, drillView, guideView, homeView, indexView, notFound } from "./pages.js";
import { filterVocab, vocabView } from "./vocab.js";


// ---------- data ----------
// the book's data files are already loading (boot.js, TRY.ready); the rest load on the first visit to a route that
// shows them (A.needs(h) → file names): TRY books the vocabulary lists (data/<book>/vocab/chNN.js) on the vocab pages,
// Quartet its 別冊 lists and front matter (q2/nav.js). need → the pending load (the messages of failed files), or null
// once every file the route needs is there
const loads = new Map(), loaded = new Set();
function need(h) {
  const files = A.needs(h).filter((f) => !loaded.has(f));
  if (!files.length) return null;
  const one = (f) => loads.get(f) || loads.set(f, TRY.load([f]).then((failed) => (loaded.add(f), failed))).get(f);
  return Promise.all(files.map(one)).then((fs) => fs.flat());
}

// ---------- shell ----------
const bookHref = (o, h = "") => new URL(o.dir, SITE).pathname + (h ? `#/${h}` : "");
// the four books: code, name, what it is; progress and "continue" from n2.resume (the current book: live counts)
function bookCard(o, cls) {
  const cur = o.id === BOOK().id, r = resume()[o.id] || {}, st = cur ? stats() : r;
  const done = st.total ? st.done : studiedIn(o.id), total = st.total;
  const prog = total ? `<span class="bk-prog"><span class="bar"><span style="width:${(100 * done) / total}%"></span></span><span>${done} / ${total}</span></span>` : "";
  const go = r.h ? `<span class="bk-go">続きから <span class="en-inline">Continue</span> <b>${esc(r.t || r.h)}</b></span>`
    : `<span class="bk-go bk-go--new">${cur ? "この本 <span class=\"en-inline\">This book</span>" : "開く <span class=\"en-inline\">Open</span>"}</span>`;
  const body = `<span class="bk-code">${o.label}</span><span class="bk-b"><span class="bk-name">${esc(o.name)}</span><span class="bk-ja">${esc(o.ja)}</span>
    <span class="bk-about">${[o.about].concat(o.size.split(" · ")).map((x) => `<span>${esc(x)}</span>`).join(" · ")}</span><span class="bk-foot">${prog}${go}</span></span>`;
  // the current book without a saved place is this page: not a link
  return cur && !r.h ? `<div class="${cls}" data-bk="${o.id}" aria-current="page">${body}</div>`
    : `<a class="${cls}" data-bk="${o.id}" href="${cur ? "#/" + r.h : bookHref(o, r.h)}"${cur ? ' aria-current="page"' : ""}>${body}</a>`;
}
// every book's home opens with the shelf: which books there are, what each is for, where the reader left off (a
// labelled section, not a heading: it comes before the page's h1)
const shelfHtml = () => `<section class="shelf" aria-labelledby="shelf-h"><p class="shelf-h" id="shelf-h">教科書 <span class="en-inline">Textbooks · TRY! = JLPT grammar, chapter by chapter · Quartet = intermediate reading, writing, speaking and listening</span></p>
  <div class="shelf-grid">${BOOKS.map((o) => bookCard(o, "bk-card")).join("")}</div></section>`;
function shellHtml() {
  const b = BOOK(), cur = BOOKS.find((o) => o.id === b.id);
  const pageLinks = [["", "ホーム", "Home"]].concat(A.pages).map(([id, ja, e]) => `<a href="#/${id}">${ja}<span class="en-inline"> ${e}</span></a>`).join("");
  const select = (id, opts) => `<select id="${id}">${opts.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select>`;
  return `<a class="skip" href="#main" data-act="skip">本文へ <span class="en-inline">Skip to content</span></a>
<header class="topbar">
  <button class="sb-toggle" data-act="sb" aria-label="目次 Contents" aria-expanded="false" aria-controls="sidebar"><span class="sb-bars" aria-hidden="true"></span></button>
  <a class="brand" href="#/" aria-label="${esc(cur.name)} ホーム Home"><span class="brand-t">日本語</span></a>
  <nav class="book-switch" aria-label="本 Books">${BOOKS.map((o) => `<a href="${bookHref(o)}" data-bk="${o.id}"${o.id === b.id ? ' aria-current="page"' : ""} title="${esc(o.name)} ${esc(o.ja)}"><span class="bs-code">${o.label}</span><span class="bs-name">${esc(o.name)}</span></a>`).join("")}</nav>
  <details class="book-menu pop"><summary data-bk="${b.id}" aria-label="本 Book: ${esc(cur.name)}"><span class="bs-code">${cur.label}</span><span class="bm-caret" aria-hidden="true"></span></summary>
    <nav class="book-pop" aria-label="本 Books"></nav></details>
  <div class="toggles">
    <label class="switch" title="Furigana (shortcut: F)"><input type="checkbox" role="switch" id="tg-furi"><span class="sw" aria-hidden="true"></span><span class="sw-l" data-short="ふ">ふりがな</span></label>
    <label class="switch" title="English supplement (shortcut: E)"><input type="checkbox" role="switch" id="tg-en"><span class="sw" aria-hidden="true"></span><span class="sw-l">EN</span></label>
    <details class="settings pop"><summary title="設定 Settings" aria-label="設定 Settings"><span aria-hidden="true">⚙</span></summary>
      <div class="settings-pop">
        <label class="set-row">画面の色 <span class="en-inline">Theme</span>
          ${select("theme-set", [["auto", "自動 Auto (system)"], ["light", "ライト Light"], ["dark", "ダーク Dark"]])}</label>
        <label class="set-row">音声の速さ <span class="en-inline">Speech rate</span> <span id="rate-v"></span><input type="range" id="rate" min="0.5" max="1.4" step="0.1"></label>
        <label class="set-row">縦書きの文章 <span class="en-inline">Vertical texts</span>
          ${select("vmode-set", [["auto", "自動 Auto"], ["v", "縦 Vertical"], ["h", "横 Horizontal"]])}</label>
        <p class="set-keys">キー <span class="en-inline">Keys</span>: <kbd>F</kbd> ふりがな · <kbd>E</kbd> English · <kbd>Esc</kbd> <span class="en-inline">close</span></p>
        <button class="btn small" data-act="reset-progress">進度をリセット <span class="en-inline">Reset progress (this book)</span></button>
      </div>
    </details>
  </div>
</header>
<div class="layout">
  <aside class="sidebar" id="sidebar" aria-label="目次 Contents">
    <nav class="sb-pages" aria-label="ページ Pages">${pageLinks}</nav>
    <div id="sb-nav"></div>
  </aside>
  <div class="sb-scrim" data-act="sb"></div>
  <main id="main" tabindex="-1"></main>
</div>
<footer class="site-foot"><p>${b.footer}</p></footer>`;
}

// ---------- progress and "continue" (n2.resume) ----------
let Q = null; // the Quartet module (q2/nav.js), for its notes
// studied / total: TRY grammar points; Quartet grammar notes (keys n<lesson>-<no>, as q2/nav.js counts them)
function stats() {
  if (!TRY.book || (Q && !TRY.lessons.length) || (!Q && !TRY.chapters.length)) return {};
  const keys = Q ? Q.allNotes().map((x) => `n${x.l.id}-${x.b.no}`) : allPoints().map((x) => x.g.no);
  return { done: keys.filter((k) => progress.studied[k]).length, total: keys.length };
}
const txt = (el) => { if (!el) return ""; const c = el.cloneNode(true); c.querySelectorAll("rt, .sr-only, .en, .en-btn").forEach((x) => x.remove()); return c.textContent.replace(/\s+/g, " ").trim(); };
// the section the reader is in: the last grammar point / note / strategy / review whose top is in the upper third
const ANCHORS = '[id^="gp-"], [id^="gn-"], [id^="st-"], [id^="review-"]';
function place(main) {
  const lim = innerHeight / 3;
  return $$(ANCHORS, main).filter((el) => el.getBoundingClientRect().top <= lim).pop() || null;
}
function trackResume() {
  const main = $("#main"), h = main.dataset.view;
  if (h == null) return;
  const rec = stats();
  // chapters, lessons, units and vocabulary lists are places to come back to; home and the other pages are not
  if (main.dataset.ch || /^vocab\/\d/.test(h)) {
    const a = place(main), ch = main.dataset.ch, id = a ? a.id : "", n = id.replace(/^\w+-/, "");
    rec.h = /^gp-/.test(id) ? `gp/${n}` : /^review-/.test(id) ? `ch/${n}/review` : /^gn-/.test(id) ? `gn/${ch}-${n}` : /^st-/.test(id) ? `st/${n}`
      : /^gp\//.test(h) ? `ch/${ch}` : h;
    const pre = A.docTitle(main).split(" – "), h1 = txt($("h1 .ja", main) || $("h1", main));
    let t = pre.length > 1 ? pre[0] : h1;
    if (h1 && !t.includes(h1)) t += " · " + h1;
    if (a) t += /^review-/.test(id) ? " · まとめの問題" : ` · ${n} ${txt($("h3", a))}`;
    rec.t = t;
  }
  saveResume(rec);
}
let resumeT = 0;
const queueResume = () => { clearTimeout(resumeT); resumeT = setTimeout(trackResume, 400); };
ACT.skip = (t, e) => { e.preventDefault(); $("#main").focus(); };

// ---------- TRY books (n2, n1): pages, sidebar, routes ----------
const TRY_PAGES = [["about", "この本について", "About"], ["guide", "使い方", "Guide"], ["index", "さくいん", "Index"],
  ["compare", "似ている文型", "Compare"], ["cando", "できること", "Can-do"], ["drill", "練習", "Drill"], ["vocab", "単語", "Vocab"]];
function sidebar() {
  $("#sb-nav").innerHTML = `<ul class="sb-list">${TRY.chapters.map((ch) => `<li class="sb-ch" data-ch="${ch.id}"><a href="#/ch/${ch.id}" class="sb-ch-link"><span class="sb-num">${ch.id}</span><span class="sb-t">${esc(plain(ch.title.ja))}</span><span class="sb-prog" data-prog="${ch.id}"></span></a>
        <ul class="sb-gps">${chapterPoints(ch).map((g) => `<li><a href="#/gp/${g.no}" data-gp="${g.no}"><span class="sb-gpn">${g.no}</span><span class="sb-gpt">${esc(plain(g.pattern))}</span></a></li>`).join("")}
        ${ch.review && ch.review.length ? `<li><a href="#/ch/${ch.id}/review" class="sb-review">まとめの問題</a></li>` : ""}</ul></li>`).join("")}</ul>`;
  updateSidebarProgress();
}
function updateSidebarProgress() {
  TRY.chapters.forEach((ch) => {
    const pts = chapterPoints(ch), d = pts.filter((g) => progress.studied[g.no]).length;
    const el = $(`[data-prog="${ch.id}"]`);
    if (el) { el.textContent = d ? `${d}/${pts.length}` : ""; el.classList.toggle("done", d === pts.length && d > 0); }
    pts.forEach((g) => { const a = $(`[data-gp="${g.no}"]`); if (a) a.classList.toggle("done", !!progress.studied[g.no]); });
  });
}
// routes are hashes: "" home · ch/N · ch/N/review · gp/N · compare[/group] · about · guide · index · cando · drill ·
// vocab[/N[/i]] · vocab/drill
const VIEWS = { guide: guideView, about: aboutView, index: indexView, compare: compareView, cando: canDoView, drill: drillView, vocab: vocabView };
// the chapter a route shows and the element to scroll to
function target(h) {
  const [p0, p1, p2] = h.split("/");
  if (p0 === "ch") return { ch: +p1, scrollTo: p2 === "review" ? `#review-${+p1}` : null };
  if (p0 === "gp") { const f = findPoint(+p1); return f ? { ch: f.ch.id, scrollTo: `#gp-${+p1}` } : {}; }
  if (p0 === "compare" && p1) return { scrollTo: `#cmp-${+p1}` };
  if (p0 === "vocab" && /^\d+$/.test(p2 || "")) return { scrollTo: `#vc-${+p1}-${+p2}` };
  return {};
}
function viewHtml(h, t) {
  if (!h) return homeView();
  if (t.ch) return chapterView(t.ch);
  const v = VIEWS[h.split("/")[0]];
  return v ? v(h) : null;
}
const docTitle = (main) => {
  const ch = main.dataset.ch && TRY.chapters.find((c) => String(c.id) === main.dataset.ch);
  return (ch ? `${ch.id}. ${plain(ch.title.ja)} – ` : "") + `TRY! ${BOOK().level} 文法 Interactive`;
};
// target(h) → { ch, scrollTo }: the chapter a route shows (its sidebar entry opens; jumps inside it keep the DOM)
const needs = (h) => (/^vocab/.test(h) ? TRY.chapterFiles("vocab/") : []);
const TRY_BOOK = { pages: TRY_PAGES, sidebar, updateProgress: updateSidebarProgress, target, viewHtml, docTitle, layout: filterVocab, needs };
let A = TRY_BOOK;

// ---------- router ----------
const hashRoute = () => location.hash.replace(/^#\/?/, "");
const markActive = (h) => {
  const p0 = h.split("/")[0], links = $$(".sb-list a");
  // a Quartet note or strategy (gn/8-3, st/11) has no row of its own: its section's row is marked (the section tab on the page)
  let cur = "#/" + h;
  if (!links.some((a) => a.getAttribute("href") === cur)) { const tab = $("#main .sk-tabs a[aria-current]"); if (tab) cur = tab.getAttribute("href"); }
  links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === cur));
  $$(".sb-pages a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#/" + p0));
};
// layout pass after a render: option columns, vertical scrollers, furigana overhang. The scrollers first: their height
// sets the column breaks, and a reading fitted before them could end up centred at the top of a column, its overhang cut
// off by the scroller (飲料 N1 ch1, 同僚 ch4 at 1024/1280, whenever no later full fit happened to follow)
const layout = (root) => { fitOptionCols(root); vtScrollInit(true); fitRubies(root, true); vtScrollInit(); A.layout(root, true); };
// rec: the place saved on the history entry (back / forward, reload: enter() below)
function route(force, rec) {
  TTS.stop();
  if (!force) snap = null; // a new page: the last place read belongs to the old one
  const h = hashRoute(), main = $("#main"), t = A.target(h);
  const loading = need(h);
  if (loading) return loading.then((failed) => { route(true, rec); showErrors(failed); });
  if (force || main.dataset.view !== h || /(^|\/)drill$/.test(h)) {
    const html = A.viewHtml(h, t);
    main.innerHTML = (h ? "" : shelfHtml()) + (html || notFound());
    layout(main);
    main.dataset.view = h;
    main.dataset.ch = html && t.ch ? t.ch : "";
  }
  $$(".sb-ch").forEach((li) => li.classList.toggle("open", String(li.dataset.ch) === main.dataset.ch));
  markActive(h);
  setDrawer(false, false);
  const el = t.scrollTo && $(t.scrollTo);
  if (!placeAgain(h, rec)) {
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "instant", block: "start" }));
    else window.scrollTo(0, 0);
  }
  document.title = A.docTitle(main);
  queueResume();
}
// jumping between the grammar points (or to the review) of the chapter on screen keeps its DOM
function sameChapterJump(rec) {
  const h = hashRoute(), t = A.target(h);
  const el = t.ch && t.scrollTo && String(t.ch) === $("#main").dataset.ch && $(t.scrollTo);
  if (!el) return false;
  if (!placeAgain(h, rec)) el.scrollIntoView({ block: "start" });
  markActive(h);
  queueResume();
  return true;
}
// the place last read on each history entry, for back / forward and reload (they went to the top of the page or the
// grammar point: the page renders after load, so the browser's own scroll restoration had nothing to restore). An entry
// gets an id once (history.state); its place is saved in sessionStorage when the reader leaves it (hashchange, page
// hidden), not while scrolling: iOS browsers built on WKWebView (Brave, Chrome) hear every history.replaceState
history.scrollRestoration = "manual";
const places = () => { try { return JSON.parse(sessionStorage.getItem("n2.places")) || {}; } catch (e) { return {}; } };
let entry = "", entryH = "";
function savePlace() {
  if (!entry || $("#main").dataset.view == null) return;
  const m = places();
  delete m[entry]; // the newest last: the oldest of 50 go
  const ks = Object.keys(m);
  if (ks.length >= 50) delete m[ks[0]];
  m[entry] = { h: entryH, y: scrollY, p: placeRec() };
  try { sessionStorage.setItem("n2.places", JSON.stringify(m)); } catch (e) {}
}
// the entry now shown (a link followed: a new one) → its saved place, if any
function enter() {
  const st = history.state;
  entryH = hashRoute();
  if (st && st.n2) return (entry = st.n2), places()[entry];
  entry = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  try { history.replaceState(Object.assign({}, st, { n2: entry }), ""); } catch (e) {}
  return null;
}
function placeAgain(h, rec) {
  if (!rec || rec.h !== h) return false;
  scrollTo(0, rec.y);
  placeBack(rec.p);
  return true;
}
// re-render the current view in place (a setting changed how content is built)
function rerender() {
  const y = scrollY;
  route(true);
  window.scrollTo(0, y);
}

// ---------- drawer (≤900 the sidebar slides in over the page) ----------
const isDrawerOpen = () => document.body.classList.contains("sb-open");
function setDrawer(open, moveFocus = true) {
  const was = isDrawerOpen();
  document.body.classList.toggle("sb-open", open);
  // ☰ says whether the contents show: the drawer below 901, the sidebar (settings.sidebar) above
  $(".sb-toggle").setAttribute("aria-expanded", String(isWide() ? settings.sidebar : open));
  if (open && !was) {
    const cur = $(".sb-ch.open") || $(".sb-list a.active");
    if (cur) cur.scrollIntoView({ block: "nearest" });
    if (moveFocus) requestAnimationFrame(() => { const f = $(".sb-list a.active") || $$(".sidebar a").find((x) => x.offsetParent); if (f) f.focus({ preventScroll: true }); });
  } else if (!open && was && moveFocus) $(".sb-toggle").focus({ preventScroll: true });
}
// keep Tab inside the open drawer (plus the ☰ button that closes it)
function trapDrawerFocus(e) {
  const els = [$(".sb-toggle")].concat($$(".sidebar a, .sidebar button").filter((x) => x.offsetParent));
  const i = els.indexOf(document.activeElement), n = els.length;
  e.preventDefault();
  els[i === -1 ? 0 : (i + (e.shiftKey ? n - 1 : 1)) % n].focus();
}

// ---------- settings ----------
function applySettings() {
  document.body.classList.toggle("sb-hidden", !settings.sidebar);
  if (isWide()) $(".sb-toggle").setAttribute("aria-expanded", String(settings.sidebar));
  document.body.classList.toggle("no-furi", !settings.furigana);
  document.body.classList.toggle("show-en", settings.english);
  $("#tg-furi").checked = settings.furigana;
  $("#tg-en").checked = settings.english;
  $("#rate").value = settings.rate;
  $("#rate-v").textContent = settings.rate.toFixed(1) + "×";
  $("#vmode-set").value = settings.vertical;
  $("#theme-set").value = settings.theme;
  TRY.themePref = settings.theme;
  TRY.applyTheme(settings.theme);
}
const setSetting = (k, v) => { settings[k] = v; saveSettings(); applySettings(); };
// English shown or hidden above the line being read moved it (scroll anchoring keeps an element higher up in place)
const setEnglish = (on) => { const back = keepPlace(); setSetting("english", on); back(); };

// ---------- events ----------
let fitQueued = 0;
// readings that appear later (details opened, feedback shown, EN) are fitted once they have a layout
const queueFit = (all) => { if (fitQueued) return; fitQueued = requestAnimationFrame(() => { fitQueued = 0; fitOptionCols($("#main")); fitRubies($("#main"), all); A.layout($("#main"), all); takeSnap(); }); };
// the block being read, taken when scrolling stops and after each fit pass: a resize (a tablet turned, a window dragged)
// re-fits every text and may re-render the readings, then puts it back. Not taken while a resize settles — the
// browser has already laid the page out at the new width by the time resize or a media-query change fires
let snap = null, snapT = 0, resizing = 0;
const takeSnap = () => { if (!resizing) snap = keepPlace(); };

ACT.en = (t) => t.closest(".bi").classList.toggle("en-open");
ACT["en-scope"] = (t) => { const box = t.closest("[data-en-scope]"); if (box) box.classList.toggle("en-all"); };
ACT.speak = (t) => TTS.play([{ text: t.dataset.text }], t);
ACT.listen = (t) => TTS.play(JSON.parse(t.dataset.q), t);
ACT.redrill = (t, e) => { e.preventDefault(); route(); };
// ☰: on wide screens it shows / hides the sidebar (remembered); below 901 it opens the drawer
ACT.sb = () => (isWide() ? setSetting("sidebar", !settings.sidebar) : setDrawer(!isDrawerOpen()));
ACT["reset-progress"] = () => {
  // progress = studied marks, scores and flashcards learned; texts the reader wrote (Quartet 書く, progress.texts) stay
  if (!confirm("この本の進度をリセットしますか？\nReset this book's progress: studied marks, exercise scores and learned flashcards? Texts you wrote are kept.")) return;
  progress.studied = {}; progress.scores = {}; progress.known = {};
  saveProgress();
  rerender();
};

// Quartet readings switch 縦/横 by re-rendering the view (blocks.js ACT.q2vmode)
// the drills redraw themselves after every card or option change (flash.js)
document.addEventListener("try:rerender", () => rerender());
// detail: the clicked switch, or { late: true } when a tablet was turned
document.addEventListener("try:setting-vertical", (e) => {
  const d = e.detail, back = (d && d.late && snap) || keepPlace(d instanceof Element ? d : null);
  saveSettings(); applySettings(); rerender(); back(d && d.late);
});
function wireEvents() {
  document.addEventListener("click", (e) => {
    // close the ⚙ / book popovers on any click outside them
    $$("details.pop[open]").forEach((d) => { if (!d.contains(e.target)) d.open = false; });
    const t = e.target.closest("[data-act]");
    const f = t && ACT[t.dataset.act];
    if (f) { const r = f(t, e); queueFit(); return r; }
  });
  document.addEventListener("toggle", (e) => {
    // the book menu (phones) is filled when it opens, so its counts and places are current
    if (e.target.classList && e.target.classList.contains("book-menu") && e.target.open) $(".book-pop").innerHTML = BOOKS.map((o) => bookCard(o, "bk-row")).join("");
    queueFit();
  }, true);
  addEventListener("scroll", () => { queueResume(); clearTimeout(snapT); snapT = setTimeout(takeSnap, 150); }, { passive: true });
  // a height-only resize is an iOS toolbar sliding in or out while scrolling (or the keyboard): nothing to re-fit
  let lastW = innerWidth;
  window.addEventListener("resize", () => {
    if (innerWidth === lastW) return;
    lastW = innerWidth;
    clearTimeout(resizing); resizing = setTimeout(() => (resizing = 0), 1200);
    // the line read before the turn: at once (the browser has reflowed the page; a long grammar point moved it by
    // 100–300 px for the 150 ms until the re-fit), and again after the re-fit
    if (snap) snap();
    clearTimeout(queueFit.t); queueFit.t = setTimeout(() => { vtScrollInit(true); queueFit(true); if (snap) snap(true); }, 150);
  });
  if (document.fonts) document.fonts.ready.then(() => { vtScrollInit(true); queueFit(true); });
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.act === "studied") { progress.studied[t.dataset.no] = t.checked; saveProgress(); }
    else if (t.id === "tg-furi") { setSetting("furigana", t.checked); queueFit(true); }
    else if (t.id === "tg-en") setEnglish(t.checked);
    else if (t.id === "theme-set") setSetting("theme", t.value);
    else if (t.id === "vmode-set") {
      const back = keepPlace();
      setVertical(t.value);
      if ($("#main .rd--tate")) document.dispatchEvent(new Event("try:setting-vertical")); else { queueFit(true); back(); }
    }
  });
  document.addEventListener("input", (e) => {
    if (e.target.id === "rate") setSetting("rate", +e.target.value);
    if (e.target.id === "idx-search") {
      const q = e.target.value.trim().toLowerCase();
      $$(".idx tbody tr").forEach((tr) => (tr.style.display = !q || tr.dataset.s.includes(q) ? "" : "none"));
      // a table with no match goes (header and all, Quartet's heading too); nothing anywhere says so
      let any = 0;
      $$("table.idx").forEach((t) => { const n = $$("tbody tr", t).some((tr) => !tr.style.display); any |= n;
        t.style.display = n ? "" : "none"; const h = t.previousElementSibling; if (h && h.tagName === "H2") h.style.display = t.style.display; });
      let none = $("#idx-none");
      if (!none) { e.target.insertAdjacentHTML("afterend", `<p class="dim" id="idx-none" role="status"></p>`); none = $("#idx-none"); }
      none.textContent = "見つかりません No matches"; none.hidden = !!any;
    }
  });
  document.addEventListener("keydown", (e) => {
    // span[role=button] controls (inline options) answer to Enter / Space like buttons
    const rb = e.target.closest && e.target.closest('[role="button"][data-act]');
    if (rb && rb.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); rb.click(); return; }
    if (e.key === "Escape") {
      const st = $("details.pop[open]");
      if (st) { st.open = false; $("summary", st).focus(); return; }
      if (isDrawerOpen()) { setDrawer(false); return; }
    }
    if (e.key === "Tab" && isDrawerOpen() && !isWide()) trapDrawerFocus(e);
    // single-key shortcuts, except while typing (text fields, selects) or with a modifier
    const ae = document.activeElement, typing = e.metaKey || e.ctrlKey || e.altKey || ae.isContentEditable
      || /SELECT|TEXTAREA/.test(ae.tagName) || (ae.tagName === "INPUT" && !/^(checkbox|radio|range)$/.test(ae.type));
    if (e.key === "e" && !typing) setEnglish(!settings.english);
    if (e.key === "f" && !typing) { setSetting("furigana", !settings.furigana); queueFit(true); }
  });
  window.addEventListener("hashchange", () => { savePlace(); const rec = enter(); if (sameChapterJump(rec)) setDrawer(false, false); else route(false, rec); });
  // once the page is left, nothing more is saved: Safari scrolls a page it keeps in its page cache to the top and fires
  // visibilitychange again, which saved that top as the place
  let left = false;
  addEventListener("pagehide", () => { savePlace(); left = true; });
  document.addEventListener("visibilitychange", () => { if (document.hidden && !left) savePlace(); });
  // back to the page from another book: restored from the page cache without its scroll (restoration is manual)
  addEventListener("pageshow", (e) => { left = false; if (e.persisted) placeAgain(hashRoute(), places()[entry]); });
  // leaving drawer mode (rotate / resize wider) must not leave the page scroll-locked
  // crossing 901px (a tablet turned): Quartet readings in auto mode switch 縦/横 like the TRY 見本文 (content.js)
  matchMedia(WIDE).addEventListener("change", (m) => {
    setDrawer(false, false);
    applySettings();
    if (settings.vertical === "auto" && $("#main .rd--tate")) document.dispatchEvent(new CustomEvent("try:setting-vertical", { detail: { late: true } }));
  });
}

async function init() {
  if (BOOK().kind === "quartet") { Q = await import("./q2/nav.js"); A = Q.QUARTET; }
  // a list page opened directly: its files load alongside the book's data
  need(hashRoute());
  document.body.dataset.book = BOOK().id;
  document.body.innerHTML = shellHtml();
  loadProgress();
  TTS.load();
  applySettings();
  wireEvents();
  const failed = await TRY.ready;
  A.sidebar();
  document.addEventListener("try:progress", () => { A.updateProgress(); queueResume(); });
  route(false, enter());
  showErrors(failed);
}
// data files that did not load are reported on the page (the rest of the book still renders)
const showErrors = (failed) => { if (failed.length) $("#main").insertAdjacentHTML("afterbegin", `<p class="err">${failed.map(esc).join("<br>")}</p>`); };
init();
