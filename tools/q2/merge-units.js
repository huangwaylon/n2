// Assembles data/q2/challenge.js (ブラッシュアップ units) and data/q2/front.js from agent fragments in /tmp/q2parts:
//   u-*.json → [Unit…] (data/Q2-SCHEMA.md "Units"), front-*.json → [Section…] ("Front matter"); merged in file-name order.
// usage: node tools/q2/merge-units.js
const fs = require("fs"), path = require("path");
const dir = process.env.Q2PARTS || "/tmp/q2parts", out = path.resolve(__dirname, "../../data/q2");
const read = (re) => fs.readdirSync(dir).filter((f) => re.test(f)).sort().flatMap((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
const units = read(/^u-.*\.json$/), front = read(/^front-.*\.json$/);
fs.writeFileSync(path.join(out, "challenge.js"), `// Quartet II ブラッシュアップ: 上級へのチャレンジ ①–⑧ (pp.200–225), 漢字チャレンジ ⑬–㉔ (pp.226–237). data/Q2-SCHEMA.md "Units".\n// Assembled by tools/q2/merge-units.js; edit this file directly from now on.\nTRY.registerUnits(${JSON.stringify(units, null, 1)});\n`);
fs.writeFileSync(path.join(out, "front.js"), `// Quartet II front matter (pp.[03]–[20]). data/Q2-SCHEMA.md "Front matter".\n// Assembled by tools/q2/merge-units.js; edit this file directly from now on.\nTRY.registerFront(${JSON.stringify(front, null, 1)});\n`);
console.log(`challenge.js: ${units.map((u) => u.id).join(" ")} · front.js: ${front.map((s) => s.id).join(" ")}`);
