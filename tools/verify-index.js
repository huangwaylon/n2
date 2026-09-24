// Asserts that every form in the book's index (tools/index-manifest.txt) is represented
// under the right grammar-point number, and that points 1–139 sit in the right chapters.
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "..");
const chapters = [];
global.window = global;
global.N2 = { register: (c) => chapters.push(c), registerCompare: () => {} };
for (let i = 1; i <= 14; i++) {
  const f = path.join(root, "data/chapters", `ch${String(i).padStart(2, "0")}.js`);
  if (fs.existsSync(f)) require(f);
}
const TOC = { 1: [1, 8], 2: [9, 21], 3: [22, 29], 4: [30, 36], 5: [37, 47], 6: [48, 59], 7: [60, 72], 8: [73, 77], 9: [78, 91], 10: [92, 99], 11: [100, 106], 12: [107, 118], 13: [119, 131], 14: [132, 139] };
const PARTS = { 2: 16, 5: 43, 6: 53, 7: 66, 9: 85, 10: 96, 12: 113, 13: 125 }; // first point of part (2)
const plain = (s) => String(s || "").replace(/\{([^{}|]+)\|[^{}]+\}/g, "$1").replace(/\[[^\]]*\]/g, "").replace(/\*\*/g, "");
const norm = (s) => plain(s).replace(/（[^）]*）|\([^)]*\)/g, "").replace(/[〜～A-Za-z①②③。…+＋\s・、／/「」]/g, "");
const errs = [], seen = {};
chapters.forEach((ch) => {
  const [a, b] = TOC[ch.id];
  const nos = ch.parts.flatMap((p) => p.points.map((g) => g.no));
  const want = Array.from({ length: b - a + 1 }, (_, i) => a + i);
  if (nos.join() !== want.join()) errs.push(`ch${ch.id}: points ${nos.join()} ≠ expected ${want.join()}`);
  if (PARTS[ch.id]) {
    if (ch.parts.length !== 2) errs.push(`ch${ch.id}: expected 2 parts`);
    else if (ch.parts[1].points[0].no !== PARTS[ch.id]) errs.push(`ch${ch.id}: part (2) should start at ${PARTS[ch.id]}`);
  } else if (ch.parts.length !== 1) errs.push(`ch${ch.id}: expected 1 part`);
  ch.parts.forEach((p) => p.points.forEach((g) => {
    const blob = [g.pattern, g.phrase, ...(g.index || []), ...(g.forms || []),
      ...(g.plus || []).flatMap((x) => [x.pattern, ...(x.forms || [])]),
      ...(g.notes || []).map((n) => n.ja), ...(g.formNotes || []).map((n) => n.ja)].map(norm).join("|");
    seen[g.no] = blob;
  }));
});
const present = new Set(chapters.map((c) => c.id));
const lines = fs.readFileSync(path.join(__dirname, "index-manifest.txt"), "utf8").split("\n").filter((l) => l && !l.startsWith("#"));
let checked = 0;
lines.forEach((l) => {
  const [form, noS] = l.split("\t"); const no = +noS;
  const chId = +Object.keys(TOC).find((k) => no >= TOC[k][0] && no <= TOC[k][1]);
  if (!present.has(chId)) return;
  checked++;
  const core = norm(form);
  if (!seen[no]) errs.push(`#${no} missing entirely (index form ${form})`);
  else if (!seen[no].includes(core)) errs.push(`#${no}: index form 「${form}」 (core 「${core}」) not found in pattern/index/forms/plus/notes`);
});
console.log(`chapters loaded: ${[...present].sort((a, b) => a - b).join(",")} | index forms checked: ${checked}/${lines.length}`);
console.log(errs.length ? "MISMATCHES:\n" + errs.join("\n") : "OK — all index forms and chapter assignments match");
process.exit(errs.length ? 1 : 0);
