// Merges per-list fragments written by transcription agents into data/q2/vocabNN.js.
// usage: node tools/q2/merge-vocab.js 8      reads /tmp/q2parts/vocab08-r1.json, vocab08-r2.json (a missing part is skipped)
// Each fragment is one list object of data/Q2-SCHEMA.md "Vocab" ({ sec, title, page, rows, targets }).
const fs = require("fs"), path = require("path");
const L = +process.argv[2], LL = String(L).padStart(2, "0");
const lists = ["r1", "r2"].map((r) => `/tmp/q2parts/vocab${LL}-${r}.json`).filter(fs.existsSync).map((f) => JSON.parse(fs.readFileSync(f, "utf8")));
const out = `// Quartet II 別冊 単語リスト・覚える単語と例文 — 第${L}課. data/Q2-SCHEMA.md "Vocab".\nTRY.registerVocab(${JSON.stringify({ lesson: L, lists }, null, 1)});\n`;
fs.writeFileSync(path.resolve(__dirname, `../../data/q2/vocab${LL}.js`), out);
console.log(`vocab${LL}.js: ${lists.map((x) => `${x.sec} ${x.rows.length} rows`).join(", ")}`);
