// Fuzzy matching of transcribed strings against page OCR (tools/ocr-diff.js, tools/q2/ocr-diff.js).

// "18-29,31,40-42" → [18, …, 29, 31, 40, 41, 42]
const pageList = (range) => [...new Set(String(range).split(",").flatMap((r) => { const [a, b] = r.split("-").map(Number); return Array.from({ length: (b || a) - a + 1 }, (_, i) => a + i); }))];

// the OCR of some pages as one normalized string; OCR puts furigana on short all-kana lines of their own, dropped here so
// the kanji lines join up
const ocrCorpus = (texts, norm) => norm(texts.join("\n").split("\n").filter((l) => !/^[ぁ-ゖー\s]{1,12}$/.test(l.trim())).join(""));

// min edit distance of nd vs any substring of hay (semi-global alignment)
function editWindow(nd, hay) {
  let prev = new Array(hay.length + 1).fill(0);
  for (let i = 1; i <= nd.length; i++) {
    const cur = [i];
    for (let j = 1; j <= hay.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (nd[i - 1] === hay[j - 1] ? 0 : 1));
    prev = cur;
  }
  return Math.min(...prev);
}
// best similarity (0–1) of a normalized needle against any window of the corpus; candidate windows from 3-gram hits
function bestScore(needle, corpus) {
  if (!needle || corpus.includes(needle)) return 1;
  const n = needle.length, cand = new Set();
  for (let i = 0; i + 3 <= n; i += 2) {
    const g = needle.slice(i, i + 3);
    for (let pos = corpus.indexOf(g), guard = 0; pos !== -1 && guard++ < 40; pos = corpus.indexOf(g, pos + 1)) cand.add(Math.max(0, pos - i));
  }
  let best = 0;
  for (const st of cand) {
    best = Math.max(best, 1 - editWindow(needle, corpus.slice(Math.max(0, st - 4), st + n + 4)) / n);
    if (best === 1) break;
  }
  return best;
}
module.exports = { pageList, ocrCorpus, bestScore };
