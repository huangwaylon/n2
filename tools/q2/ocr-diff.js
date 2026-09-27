// Quartet II transcription vs OCR (tools/q2/ocr/NNN.txt, PDF pages). Every book string (Japanese, and the book's
// English `en`) is fuzzy-matched against the OCR of the given PDF pages; strings scoring below the threshold are listed
// and must be checked on the scan by eye. OCR is empty for 縦書き pages — those are checked on the images only.
// usage: node tools/q2/ocr-diff.js data/q2/vocab07.js 289-293 [threshold 0.85]
const fs = require("fs"), path = require("path");
const { load, walkBook, root } = require("./lib");
const [file, range, thr = "0.85"] = process.argv.slice(2);
const pages = [];
for (const r of String(range).split(",")) { const [a, b] = r.split("-").map(Number); for (let p = a; p <= (b || a); p++) pages.push(p); }
const TRY = load([path.resolve(file)]);
const data = [...TRY.lessons, ...TRY.vocab, ...TRY.kanji, ...TRY.units, ...(TRY.front || [])];
const plain = (s) => String(s || "").replace(/\{\{|\}\}/g, "").replace(/\{([^{}|]+)\|[^{}]+\}/g, "$1").replace(/\[\[(.+?)\|[0-9a-z]*\]\]/g, "$1")
  .replace(/\*\*|~~|__|!!/g, "").replace(/\[#\d+\]|\[普\]/g, "").replace(/^[¶#@=]/, "");
const norm = (s) => plain(s).normalize("NFKC").replace(/[\s　「」『』（）()［］\[\]、。・，．,.!！?？:：;；~〜～…‥\-－ー—―/／"“”'’＿_＋+【】〈〉《》★☆*＊→↔◆◇○×△❶-❿①-⑳▶▸•]/g, "").toLowerCase();
const corpus = norm(pages.map((p) => { const f = path.join(root, "tools/q2/ocr", String(p).padStart(3, "0") + ".txt"); return fs.existsSync(f) ? fs.readFileSync(f, "utf8") : ""; })
  .join("\n").split("\n").filter((l) => !/^[ぁ-ゖー\s]{1,12}$/.test(l.trim())).join(""));
function editWindow(nd, hay) {
  let prev = new Array(hay.length + 1).fill(0);
  for (let i = 1; i <= nd.length; i++) { const cur = [i]; for (let j = 1; j <= hay.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (nd[i - 1] === hay[j - 1] ? 0 : 1)); prev = cur; }
  return Math.min(...prev);
}
function score(n) {
  if (!n || corpus.includes(n)) return 1;
  const cand = new Set();
  for (let i = 0; i + 3 <= n.length; i += 2) { let p = corpus.indexOf(n.slice(i, i + 3)), g = 0; while (p !== -1 && g++ < 40) { cand.add(Math.max(0, p - i)); p = corpus.indexOf(n.slice(i, i + 3), p + 1); } }
  let best = 0;
  for (const st of cand) { best = Math.max(best, 1 - editWindow(n, corpus.slice(Math.max(0, st - 4), st + n.length + 4)) / n.length); if (best === 1) break; }
  return best;
}
const out = [];
data.forEach((d) => walkBook(d, (s, p) => { const n = norm(s); if (n.length < 2) return; const sc = score(n); if (sc < +thr) out.push([sc, p, s]); }));
out.forEach(([sc, p, s]) => console.log(`${sc.toFixed(2)}  ${p}\n      ${s.slice(0, 120)}`));
console.log(`${out.length} strings below ${thr} (OCR pages ${range})`);
