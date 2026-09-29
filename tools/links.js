// Cross-book links check (data/links.js): every "book:id pattern" must name an existing grammar point (n2, n1; "N+i"
// = the i-th Plus under point N) or Quartet II note ("q2:lesson-no") with its pattern exactly as in the data, every
// group must span at least two books, and no id may appear in two groups. Prints groups and links per book.
//   node tools/links.js
const fs = require("fs"), path = require("path");
const { BOOKS, root, loadBook } = require("./lib/books.js");
const q2 = require("./q2/lib.js");

// id → pattern for every point, Plus and Quartet note
const pats = new Map();
for (const id of ["n2", "n1"]) {
  const T = loadBook(BOOKS[id]);
  for (const ch of T.chapters.filter(Boolean)) for (const p of ch.parts) for (const g of p.points) {
    pats.set(`${id}:${g.no}`, g.pattern);
    (g.plus || []).forEach((x, i) => pats.set(`${id}:${g.no}+${i + 1}`, x.pattern));
  }
}
const Q = q2.load(fs.readdirSync(q2.dir).filter((f) => /^l\d\d\.js$/.test(f)).map((f) => path.join(q2.dir, f)));
for (const l of Q.lessons) (function walk(o) {
  if (Array.isArray(o)) return o.forEach(walk);
  if (!o || typeof o !== "object") return;
  if (o.t === "note") pats.set(`q2:${l.id}-${o.no}`, o.pattern);
  for (const v of Object.values(o)) if (v && typeof v === "object") walk(v);
})(l);

// links.js through a registry of its own
let groups = null;
delete globalThis.TRY;
globalThis.TRY = { registerLinks: (g) => (groups = g) };
const file = path.join(root, "data/links.js");
delete require.cache[require.resolve(file)];
require(file);

const errs = [];
const seen = new Map();
const perBook = { n2: 0, n1: 0, q2: 0 };
if (!Array.isArray(groups)) errs.push("data/links.js: TRY.registerLinks([...]) not called with an array");
(groups || []).forEach((gr, i) => {
  const w = `[${i}] ${gr && gr.k}`;
  if (!gr || !gr.k) errs.push(`${w}: no k`);
  if (!gr || !gr.en) errs.push(`${w}: no en`);
  else if (gr.en.split(/\s+/).length > 25) errs.push(`${w}: en over 25 words`);
  const books = new Set();
  for (const s of (gr && gr.ids) || []) {
    const m = String(s).match(/^(n2|n1|q2):(\S+) (.+)$/);
    if (!m) { errs.push(`${w}: bad id "${s}"`); continue; }
    const [, b, n, pattern] = m, id = `${b}:${n}`;
    if (!pats.has(id)) errs.push(`${w}: ${id} does not exist`);
    else if (pats.get(id) !== pattern) errs.push(`${w}: ${id} pattern "${pattern}" ≠ data "${pats.get(id)}"`);
    if (seen.has(id)) errs.push(`${w}: ${id} is also in ${seen.get(id)}`);
    seen.set(id, w);
    books.add(b);
    perBook[b]++;
  }
  if (books.size < 2) errs.push(`${w}: spans ${books.size} book(s), needs 2`);
});

for (const e of errs) console.log("ERR " + e);
console.log(`links: ${(groups || []).length} groups, ${seen.size} links (n2 ${perBook.n2}, n1 ${perBook.n1}, q2 ${perBook.q2}), ${errs.length} errors`);
process.exit(errs.length ? 1 : 0);
