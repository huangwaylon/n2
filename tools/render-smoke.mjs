#!/usr/bin/env node
// Smoke test of the renderer without a browser: every route's view of a book is rendered in Node (DOM-free stubs for
// window, localStorage, matchMedia, document) and checked for throws and for "undefined", "NaN", "[object Object]" or
// class="err" in the markup. Covers the routes render-dump.mjs skips: drill, vocab, vocab/N, vocab/drill.
// usage: node tools/render-smoke.mjs [n2 n1 q1 q2]      (default all four; one Node process per book)
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
const require = createRequire(import.meta.url);
const books = process.argv.slice(2);

if (books.length !== 1) {
  // the modules keep the book they were loaded with (core.js reads window.TRY once): a process per book
  let fail = 0;
  for (const b of books.length ? books : ["n2", "n1", "q1", "q2"]) {
    try { process.stdout.write(execFileSync(process.execPath, [fileURLToPath(import.meta.url), b], { encoding: "utf8" })); }
    catch (e) { process.stdout.write(e.stdout || String(e)); fail = 1; }
  }
  process.exit(fail);
}

const book = books[0];
Object.assign(globalThis, { window: globalThis, innerWidth: 1280, innerHeight: 900 });
globalThis.localStorage = { getItem: () => null, setItem() {} };
globalThis.matchMedia = () => ({ matches: true, addEventListener() {} });
const L = require("./lib/books.js");
if (/^q/.test(book)) { const q = require("./q2/lib.js"); q.load(q.allFiles(q.BOOKS[book]).concat(L.root + "/data/links.js"), q.BOOKS[book]); }
else {
  const d = L.dataDir(L.BOOKS[book]), ch = (dir) => readdirSync(dir).filter((f) => /^ch\d\d\.js$/.test(f)).sort().map((f) => `${dir}/${f}`);
  L.load([`${d}/book.js`, `${d}/compare.js`, `${d}/front.js`, ...ch(d), ...ch(`${d}/vocab`), L.root + "/data/links.js"]);
}
globalThis.document = { addEventListener() {}, dispatchEvent() {}, documentElement: { dataset: {} } };
const T = globalThis.TRY, errs = [];
const check = (r, f) => {
  try {
    const h = f();
    if (!h) return errs.push(`${r}: no view`);
    const m = String(h).match(/.{0,50}(undefined|NaN|\[object Object\]|class="err").{0,30}/g);
    if (m) errs.push(`${r}: ${m.slice(0, 3).join(" … ")}`);
  } catch (e) { errs.push(`${r}: throws ${e.stack.split("\n").slice(0, 2).join(" ")}`); }
};
let routes;
if (/^q/.test(book)) {
  const { QUARTET: A } = await import("../assets/js/q2/nav.js");
  routes = ["", "guide", "about", "index", "kanji", "drill"].concat(T.lessons.flatMap((l) => ["l/" + l.id, ...l.sections.map((s) => `l/${l.id}/${s.skill}`), `l/${l.id}/vocab`, `l/${l.id}/kanji`]), T.units.map((u) => "u/" + u.id));
  routes.forEach((r) => check(r, () => A.viewHtml(r, A.target(r))));
} else {
  const c = await import("../assets/js/content.js"), p = await import("../assets/js/pages.js"), v = await import("../assets/js/vocab.js");
  const V = { "": p.homeView, guide: p.guideView, about: p.aboutView, index: p.indexView, compare: p.compareView, cando: p.canDoView, drill: p.drillView };
  routes = Object.keys(V).concat(T.chapters.map((x) => "ch/" + x.id), "vocab", "vocab/drill", T.chapters.map((x) => "vocab/" + x.id));
  for (const r of routes) check(r, () => (V[r] ? V[r](r) : /^ch\//.test(r) ? c.chapterView(+r.slice(3)) : v.vocabView(r)));
}
errs.forEach((e) => console.log("ERR " + book + " " + e));
console.log(`${book}: ${routes.length} routes rendered, ${errs.length} errors`);
process.exit(errs.length ? 1 : 0);
