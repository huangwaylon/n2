// Entry point: loads the book's data files, builds the page shell (top bar, sidebar, footer), routes, wires events.
// The page (index.html = N2, n1/index.html = N1) loads assets/js/boot.js and data/<book>/book.js first.
import { ACT, BOOK, TRY, TTS, $, $$, chapterPoints, esc, findPoint, isWide, loadProgress, progress, saveProgress, saveSettings, settings, WIDE } from "./core.js";
import { plain } from "./markup.js";
import { fitRubies } from "./ruby.js";
import { chapterView, setVertical, vtScrollInit } from "./content.js";
import { fitOptionCols } from "./exercises.js";
import { aboutView, canDoView, compareView, drillView, guideView, homeView, indexView, notFound } from "./pages.js";

const SITE = new URL("../../", import.meta.url); // site root
const BOOKS = [{ id: "n2", label: "N2", dir: "" }, { id: "n1", label: "N1", dir: "n1/" }];
const PAGES = [["about", "この本について", "About"], ["guide", "使い方", "Guide"], ["index", "さくいん", "Index"],
  ["compare", "似ている文型", "Compare"], ["cando", "できること", "Can-do"], ["drill", "練習", "Drill"]];

// ---------- data ----------
const loadScript = (src) => new Promise((ok, fail) => {
  const s = document.createElement("script");
  s.src = src; s.onload = ok; s.onerror = () => fail(new Error("could not load " + src));
  document.head.append(s);
});
// every file registers itself (TRY.registerChapter sorts), so they load in parallel
const loadData = () => {
  const dir = new URL(`data/${BOOK().id}/`, SITE);
  const files = Array.from({ length: BOOK().chapters }, (_, i) => `ch${String(i + 1).padStart(2, "0")}.js`).concat("compare.js", "front.js");
  return Promise.all(files.map((f) => loadScript(new URL(f, dir))));
};

// ---------- shell ----------
function shellHtml() {
  const b = BOOK();
  const pageLinks = PAGES.map(([id, ja, e]) => `<a href="#/${id}">${ja}<span class="en-inline"> ${e}</span></a>`).join("");
  const select = (id, opts) => `<select id="${id}">${opts.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select>`;
  return `<header class="topbar">
  <button class="sb-toggle" data-act="sb" aria-label="メニュー Menu" aria-expanded="false" aria-controls="sidebar"><span class="sb-bars" aria-hidden="true"></span></button>
  <a class="brand" href="#/" aria-label="${b.level} 文法 ホーム Home"><span class="brand-mark">${b.level}</span><span class="brand-t">文法</span><span class="brand-sub">TRY! companion</span></a>
  <nav class="book-switch" aria-label="本 Book">${BOOKS.map((o) => `<a href="${new URL(o.dir, SITE).pathname}"${o.id === b.id ? ' aria-current="page"' : ""} title="TRY! ${o.label} 文法">${o.label}</a>`).join("")}</nav>
  <nav class="topnav" aria-label="ページ Pages">${pageLinks}</nav>
  <div class="toggles">
    <label class="switch" title="Furigana"><input type="checkbox" id="tg-furi"><span class="sw" aria-hidden="true"></span><span class="sw-l" data-short="ふ">ふりがな</span></label>
    <label class="switch" title="English supplement (shortcut: E)"><input type="checkbox" id="tg-en"><span class="sw" aria-hidden="true"></span><span class="sw-l">EN</span></label>
    <details class="settings"><summary title="設定 Settings" aria-label="設定 Settings"><span aria-hidden="true">⚙</span></summary>
      <div class="settings-pop">
        <label class="set-row">画面の色 <span class="en-inline">Theme</span>
          ${select("theme-set", [["auto", "自動 Auto (system)"], ["light", "ライト Light"], ["dark", "ダーク Dark"]])}</label>
        <label class="set-row">音声の速さ <span class="en-inline">Speech rate</span> <span id="rate-v"></span><input type="range" id="rate" min="0.5" max="1.4" step="0.1"></label>
        <label class="set-row">縦書きの文章 <span class="en-inline">Vertical texts</span>
          ${select("vmode-set", [["auto", "自動 Auto"], ["v", "縦 Vertical"], ["h", "横 Horizontal"]])}</label>
        <button class="btn small" data-act="reset-progress">進度をリセット <span class="en-inline">Reset progress</span></button>
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
  <main id="main"></main>
</div>
<footer class="site-foot"><p>${b.footer}</p></footer>`;
}

// ---------- sidebar ----------
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
document.addEventListener("try:progress", updateSidebarProgress);

// ---------- router ----------
// routes are hashes: "" home · ch/N · ch/N/review · gp/N · compare[/group] · about · guide · index · cando · drill
const hashRoute = () => location.hash.replace(/^#\/?/, "");
const VIEWS = { guide: guideView, about: aboutView, index: indexView, compare: compareView, cando: canDoView, drill: drillView };
// the chapter a route shows and the element to scroll to
function target(h) {
  const [p0, p1, p2] = h.split("/");
  if (p0 === "ch") return { ch: +p1, scrollTo: p2 === "review" ? `#review-${+p1}` : null };
  if (p0 === "gp") { const f = findPoint(+p1); return f ? { ch: f.ch.id, scrollTo: `#gp-${+p1}` } : {}; }
  if (p0 === "compare" && p1) return { scrollTo: `#cmp-${+p1}` };
  return {};
}
function viewHtml(h, t) {
  if (!h) return homeView();
  if (t.ch) return chapterView(t.ch);
  const v = VIEWS[h.split("/")[0]];
  return v ? v() : null;
}
const markActive = (h) => {
  const p0 = h.split("/")[0];
  $$(".sb-list a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#/" + h));
  $$(".topnav a, .sb-pages a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#/" + p0));
};
// layout pass after a render: option columns, furigana overhang, vertical scrollers
const layout = (root) => { fitOptionCols(root); fitRubies(root, true); vtScrollInit(true); };
function route(force) {
  TTS.stop();
  const h = hashRoute(), main = $("#main"), t = target(h);
  if (force || main.dataset.view !== h || h === "drill") {
    const html = viewHtml(h, t);
    main.innerHTML = html || notFound();
    layout(main);
    main.dataset.view = h;
    main.dataset.ch = html && t.ch ? t.ch : "";
  }
  $$(".sb-ch").forEach((li) => li.classList.toggle("open", String(li.dataset.ch) === main.dataset.ch));
  markActive(h);
  setDrawer(false, false);
  const el = t.scrollTo && $(t.scrollTo);
  if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "instant", block: "start" }));
  else window.scrollTo(0, 0);
  const ch = main.dataset.ch && TRY.chapters.find((c) => String(c.id) === main.dataset.ch);
  document.title = (ch ? `${ch.id}. ${plain(ch.title.ja)} – ` : "") + `TRY! ${BOOK().level} 文法 Interactive`;
}
// jumping between the grammar points (or to the review) of the chapter on screen keeps its DOM
function sameChapterJump() {
  const h = hashRoute(), t = target(h);
  const el = t.ch && t.scrollTo && String(t.ch) === $("#main").dataset.ch && $(t.scrollTo);
  if (!el) return false;
  el.scrollIntoView({ block: "start" });
  markActive(h);
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

// ---------- settings ----------
function applySettings() {
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

// ---------- events ----------
let fitQueued = 0;
// readings that appear later (details opened, feedback shown, EN) are fitted once they have a layout
const queueFit = (all) => { if (fitQueued) return; fitQueued = requestAnimationFrame(() => { fitQueued = 0; fitOptionCols($("#main")); fitRubies($("#main"), all); }); };

ACT.en = (t) => t.closest(".bi").classList.toggle("en-open");
ACT["en-scope"] = (t) => { const box = t.closest("[data-en-scope]"); if (box) box.classList.toggle("en-all"); };
ACT.speak = (t) => TTS.play([{ text: t.dataset.text }], t);
ACT.listen = (t) => TTS.play(JSON.parse(t.dataset.q), t);
ACT.redrill = (t, e) => { e.preventDefault(); route(); };
ACT.sb = () => setDrawer(!isDrawerOpen());
ACT["reset-progress"] = () => {
  if (!confirm("Reset all saved progress and scores?")) return;
  progress.studied = {}; progress.scores = {};
  saveProgress();
  rerender();
};

function wireEvents() {
  document.addEventListener("click", (e) => {
    // close the ⚙ popover on any click outside it
    const st = $(".settings");
    if (st && st.open && !st.contains(e.target)) st.open = false;
    const t = e.target.closest("[data-act]");
    const f = t && ACT[t.dataset.act];
    if (f) { const r = f(t, e); queueFit(); return r; }
  });
  document.addEventListener("toggle", () => queueFit(), true);
  window.addEventListener("resize", () => { clearTimeout(queueFit.t); queueFit.t = setTimeout(() => { vtScrollInit(true); queueFit(true); }, 150); });
  if (document.fonts) document.fonts.ready.then(() => queueFit(true));
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.act === "studied") { progress.studied[t.dataset.no] = t.checked; saveProgress(); }
    else if (t.id === "tg-furi") { setSetting("furigana", t.checked); queueFit(true); }
    else if (t.id === "tg-en") setSetting("english", t.checked);
    else if (t.id === "theme-set") setSetting("theme", t.value);
    else if (t.id === "vmode-set") { setVertical(t.value); queueFit(true); }
  });
  document.addEventListener("input", (e) => {
    if (e.target.id === "rate") setSetting("rate", +e.target.value);
    if (e.target.id === "idx-search") {
      const q = e.target.value.trim().toLowerCase();
      $$(".idx tbody tr").forEach((tr) => (tr.style.display = !q || tr.dataset.s.includes(q) ? "" : "none"));
    }
  });
  document.addEventListener("keydown", (e) => {
    // span[role=button] controls (inline options) answer to Enter / Space like buttons
    const rb = e.target.closest && e.target.closest('[role="button"][data-act]');
    if (rb && rb.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); rb.click(); return; }
    if (e.key === "Escape") {
      const st = $(".settings");
      if (st && st.open) { st.open = false; $("summary", st).focus(); return; }
      if (isDrawerOpen()) { setDrawer(false); return; }
    }
    if (e.key === "Tab" && isDrawerOpen() && !isWide()) trapDrawerFocus(e);
    if (e.key === "e" && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) && !e.metaKey && !e.ctrlKey) setSetting("english", !settings.english);
  });
  window.addEventListener("hashchange", () => { if (sameChapterJump()) setDrawer(false, false); else route(); });
  // leaving drawer mode (rotate / resize wider) must not leave the page scroll-locked
  matchMedia(WIDE).addEventListener("change", (m) => { if (m.matches) setDrawer(false, false); });
}

async function init() {
  document.body.dataset.book = BOOK().id;
  document.body.innerHTML = shellHtml();
  loadProgress();
  TTS.load();
  applySettings();
  wireEvents();
  try { await loadData(); } catch (err) { $("#main").innerHTML = `<p class="err">${esc(err.message)}</p>`; return; }
  sidebar();
  route();
}
init();
