// Core: book data access, settings and progress, DOM helpers, the click-action registry, speech synthesis.
export const TRY = window.TRY;

// book meta (data/<book>/book.js). bookLang: language of the translations the book prints — "en" (N2: the English on
// usage, notes, can-do and titles is the book's) or "ja" (N1: the Chinese edition; its Chinese is not reproduced and
// every English string is ours)
const BOOK_DEFAULTS = { bookLang: "en", notesFirst: false };
export const BOOK = () => Object.assign({}, BOOK_DEFAULTS, TRY.book);
export const bookEnglish = () => BOOK().bookLang === "en";
// the books of the site: id, top-bar code, page directory under the site root, name, Japanese title, what the book is
// (kind, en) and its size (shown until the book has been opened; then the saved counts), for the switcher and the shelf
export const SITE = new URL("../../", import.meta.url); // site root
export const BOOKS = [
  { id: "n2", label: "N2", dir: "", name: "TRY! N2", title: "TRY! N2 文法", ja: "日本語能力試験 N2 文法", kind: "try", about: "JLPT N2 grammar", size: "14 chapters · 139 points" },
  { id: "n1", label: "N1", dir: "n1/", name: "TRY! N1", title: "TRY! N1 文法", ja: "日本語能力試験 N1 文法", kind: "try", about: "JLPT N1 grammar", size: "10 chapters · 123 points" },
  { id: "q1", label: "Q1", dir: "q1/", name: "Quartet I", title: "Quartet I 中級日本語カルテット", ja: "中級日本語カルテット\u00a0I", kind: "quartet", about: "Intermediate, four skills", size: "Lessons 1–6" },
  { id: "q2", label: "Q2", dir: "q2/", name: "Quartet II", title: "Quartet II 中級日本語カルテット", ja: "中級日本語カルテット\u00a0II", kind: "quartet", about: "Intermediate, four skills", size: "Lessons 7–12" }];

// ---------- storage ----------
// settings are shared by all books ("n2.settings"); progress is per book ("n2.progress" / "n2.progress.n1" / ".q1" / ".q2")
const LS = {
  get(k, d) { try { const v = localStorage.getItem("n2." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("n2." + k, JSON.stringify(v)); } catch (e) {} },
};
// vertical: "auto" | "v" | "h" — 縦書き for sample.vertical texts (auto = 縦 at ≥901 px); theme: "auto" | "light" | "dark"
// sidebar: the table of contents shown beside the page at ≥901 (☰ hides it; below 901 it is a drawer either way)
export const settings = Object.assign({ furigana: false, english: false, rate: 0.9, vertical: "auto", theme: "auto", sidebar: true }, LS.get("settings", {}));
export const saveSettings = () => LS.set("settings", settings);
const progressKey = () => (BOOK().id === "n2" ? "progress" : `progress.${BOOK().id}`);
export const progress = { studied: {}, scores: {} };
export const loadProgress = () => Object.assign(progress, { studied: {}, scores: {} }, LS.get(progressKey(), {}));
// listeners (the sidebar) hear about every change through the "try:progress" event
export const saveProgress = () => { LS.set(progressKey(), progress); document.dispatchEvent(new Event("try:progress")); };
// where the reader was in each book, for "continue" on every book's home: "n2.resume" = { n2: { h: route, t: label,
// done, total }, n1: …, q1: …, q2: … } (written by main.js on route changes and while scrolling)
export const resume = () => LS.get("resume", {});
export const saveResume = (rec) => { const r = resume(); r[BOOK().id] = Object.assign(r[BOOK().id] || {}, rec); LS.set("resume", r); };
// studied count of another book (its progress key), shown on the shelf when that book has never saved a total
export const studiedIn = (id) => Object.values(LS.get(id === "n2" ? "progress" : `progress.${id}`, {}).studied || {}).filter(Boolean).length;

// ---------- helpers ----------
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
export const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
export const LETTERS = "abcdefghijklmnop";
export const CIRCLED = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮";
export const WIDE = "(min-width: 901px)"; // desktop layout; the sidebar is a drawer below it
export const isWide = () => matchMedia(WIDE).matches;
// the view height for sizing text boxes: iOS browsers change innerHeight (and fire resize) while scrolling, as their
// toolbars slide in and out; boxes sized from it then changed height under the reader. Taken again when the width changes
let vw = innerWidth, vh = innerHeight;
export const viewH = () => { if (innerWidth !== vw) { vw = innerWidth; vh = innerHeight; } return vh; };

// keep a block where it is on screen while a setting rebuilds the page (縦/横: every vertical text above it changes
// height, and the fit passes after the re-render change it again): the clicked block, else the one being read (across
// the top of the view), else the first one below. Returns the restore step: now, and again after the fit pass.
const PLACE = ".rd, .sample--vertical, .gp, .exercise, .gn, .strat, .qbox, .hd";
export function keepPlace(el) {
  const all = $$(PLACE, $("#main"));
  // the innermost block across the top of the view, if it fills a third of it (not the last line of the block before)
  const over = all.filter((b) => { const r = b.getBoundingClientRect(); return r.top < 0 && r.bottom > innerHeight / 3; }).pop();
  el = (el && el.closest(PLACE)) || over || all.find((b) => b.getBoundingClientRect().top >= 0);
  const i = all.indexOf(el);
  if (i < 0) return () => {};
  const top = el.getBoundingClientRect().top;
  // a block that now ends above the view (the reader was inside a long 横 text that became a short 縦 scroller) is shown
  // from its top instead
  const back = () => {
    const b = $$(PLACE, $("#main"))[i];
    if (!b) return;
    scrollBy(0, b.getBoundingClientRect().top - top);
    if (b.getBoundingClientRect().bottom < innerHeight / 3) b.scrollIntoView({ block: "start" });
  };
  // late: once more after the resize pass (main.js, 150 ms debounce) when a turned tablet re-fits every text, unless
  // the reader has scrolled or touched the page since
  return (late) => {
    back();
    requestAnimationFrame(() => requestAnimationFrame(back));
    if (!late) return;
    const t = setTimeout(() => { stop(); back(); }, 500), ev = ["wheel", "touchstart", "keydown", "mousedown"];
    const stop = () => { clearTimeout(t); ev.forEach((e) => removeEventListener(e, stop)); };
    ev.forEach((e) => addEventListener(e, stop, { passive: true }));
  };
}
export const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

export const chapterPoints = (ch) => ch.parts.flatMap((p) => p.points);
export const pointRange = (pts, sep = "〜") => (pts.length ? `${pts[0].no}${sep}${pts[pts.length - 1].no}` : "");
export const allPoints = () => TRY.chapters.flatMap((ch) => ch.parts.flatMap((p, pi) => p.points.map((g) => ({ g, ch, pi }))));
export const findPoint = (no) => allPoints().find((x) => x.g.no === no);
export const findChapter = (id) => TRY.chapters.find((c) => c.id === id);

// ---------- action registry ----------
// Click handlers for [data-act] elements, keyed by the data-act value: ACT.name = (el, event) => { … }, where el is the
// closest [data-act] element. The one click listener in main.js dispatches here.
export const ACT = Object.create(null);

// ---------- speech synthesis ----------
const MALE = /otoya|ichiro|keita|hattori|male|男|daichi|takumi/i;
const FEMALE = /kyoko|haruka|ayumi|nanami|mizuki|o-ren|sayaka|female|女|google/i;
export const TTS = {
  voices: [],
  load() {
    if (!("speechSynthesis" in window)) return;
    const pick = () => (this.voices = speechSynthesis.getVoices().filter((v) => /^ja/i.test(v.lang)));
    pick();
    speechSynthesis.onvoiceschanged = pick;
  },
  // v: "m" | "f"
  voiceFor(v) {
    const vs = this.voices;
    return vs.find((x) => (v === "m" ? MALE : FEMALE).test(x.name)) || vs[0] || null;
  },
  stop() {
    clearTimeout(this.timer);
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    $$(".speaking").forEach((b) => b.classList.remove("speaking"));
  },
  // queue: [{ text, v }]; pressing a playing button stops it
  play(queue, btn) {
    if (!("speechSynthesis" in window)) { alert("Speech synthesis isn't available in this browser."); return; }
    const wasPlaying = btn && btn.classList.contains("speaking");
    const busy = speechSynthesis.speaking || speechSynthesis.pending;
    this.stop();
    if (wasPlaying) return;
    if (btn) btn.classList.add("speaking");
    if (!this.voices.length) this.load();
    // with a single Japanese voice, pitch tells the speakers apart
    const oneVoice = this.voiceFor("m") === this.voiceFor("f");
    const done = () => btn && btn.classList.remove("speaking");
    // kept on the object: Chrome garbage-collects unreferenced utterances (they stop and never fire "end")
    this.utts = queue.map((item, i) => {
      const u = new SpeechSynthesisUtterance(item.text);
      u.lang = "ja-JP";
      u.rate = settings.rate;
      const voice = this.voiceFor(item.v);
      if (voice) u.voice = voice;
      if (oneVoice) u.pitch = item.v === "m" ? 0.75 : item.v === "f" ? 1.25 : 1;
      if (i === queue.length - 1) u.onend = done;
      u.onerror = (e) => { if (e.error !== "interrupted" && e.error !== "canceled") { console.warn("speech:", e.error); done(); } };
      return u;
    });
    // a synthesizer left paused (the tab was hidden mid-speech) stays silent until resume(). WebKit and Blink drop an
    // utterance queued in the same task as cancel(), so after cancelling speech speak on a later tick; otherwise speak
    // right away, inside the tap (iOS Safari only lets a user gesture start speech)
    const go = () => { speechSynthesis.resume(); this.utts.forEach((u) => speechSynthesis.speak(u)); };
    if (busy) this.timer = setTimeout(go, 80); else go();
  },
};
