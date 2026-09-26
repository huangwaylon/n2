// Core: book data access, settings and progress, DOM helpers, the click-action registry, speech synthesis.
export const TRY = window.TRY;

// book meta (data/<book>/book.js). bookLang: language of the translations the book prints — "en" (N2: the English on
// usage, notes, can-do and titles is the book's) or "ja" (N1: the Chinese edition; its Chinese is not reproduced and
// every English string is ours)
const BOOK_DEFAULTS = { bookLang: "en", notesFirst: false };
export const BOOK = () => Object.assign({}, BOOK_DEFAULTS, TRY.book);
export const bookEnglish = () => BOOK().bookLang === "en";

// ---------- storage ----------
// settings are shared by both books ("n2.settings"); progress is per book ("n2.progress" / "n2.progress.n1")
const LS = {
  get(k, d) { try { const v = localStorage.getItem("n2." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem("n2." + k, JSON.stringify(v)); } catch (e) {} },
};
// vertical: "auto" | "v" | "h" — 縦書き for sample.vertical texts (auto = 縦 at ≥901 px); theme: "auto" | "light" | "dark"
export const settings = Object.assign({ furigana: true, english: false, rate: 0.9, vertical: "auto", theme: "auto" }, LS.get("settings", {}));
export const saveSettings = () => LS.set("settings", settings);
const progressKey = () => (BOOK().id === "n2" ? "progress" : `progress.${BOOK().id}`);
export const progress = { studied: {}, scores: {} };
export const loadProgress = () => Object.assign(progress, { studied: {}, scores: {} }, LS.get(progressKey(), {}));
// listeners (the sidebar) hear about every change through the "try:progress" event
export const saveProgress = () => { LS.set(progressKey(), progress); document.dispatchEvent(new Event("try:progress")); };

// ---------- helpers ----------
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
export const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
export const LETTERS = "abcdefghijklmnop";
export const CIRCLED = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮";
export const WIDE = "(min-width: 901px)"; // desktop layout; the sidebar is a drawer below it
export const isWide = () => matchMedia(WIDE).matches;

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
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    $$(".speaking").forEach((b) => b.classList.remove("speaking"));
  },
  // queue: [{ text, v }]; pressing a playing button stops it
  play(queue, btn) {
    if (!("speechSynthesis" in window)) { alert("Speech synthesis isn't available in this browser."); return; }
    const wasPlaying = btn && btn.classList.contains("speaking");
    this.stop();
    if (wasPlaying) return;
    if (btn) btn.classList.add("speaking");
    // with a single Japanese voice, pitch tells the speakers apart
    const oneVoice = this.voiceFor("m") === this.voiceFor("f");
    queue.forEach((item, i) => {
      const u = new SpeechSynthesisUtterance(item.text);
      u.lang = "ja-JP";
      u.rate = settings.rate;
      const voice = this.voiceFor(item.v);
      if (voice) u.voice = voice;
      if (oneVoice) u.pitch = item.v === "m" ? 0.75 : item.v === "f" ? 1.25 : 1;
      if (i === queue.length - 1) u.onend = () => btn && btn.classList.remove("speaking");
      speechSynthesis.speak(u);
    });
  },
};
