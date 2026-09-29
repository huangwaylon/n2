// Assembles data/<q1|q2>/challenge.js (ブラッシュアップ units) and front.js from agent fragments in /tmp/<q1|q2>parts:
//   u-*.json → [Unit…] (data/Q2-SCHEMA.md "Units"), front-*.json → [Section…] ("Front matter"); merged in file-name order.
// usage: node tools/q2/merge-units.js [q1|q2]      (default q2)
const fs = require("fs"), path = require("path");
const [B] = require("./lib").bookArg(process.argv.slice(2));
const dir = B.parts, out = B.dir;
const read = (re) => fs.readdirSync(dir).filter((f) => re.test(f)).sort().flatMap((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")));
const units = read(/^u-.*\.json$/), front = read(/^front-.*\.json$/);
// a book whose units or front matter are not transcribed yet keeps its file (or has none)
if (units.length) fs.writeFileSync(path.join(out, "challenge.js"), `// ${B.name} ブラッシュアップ: ${B.units}. data/Q2-SCHEMA.md "Units".\n// Assembled by tools/q2/merge-units.js; edit this file directly from now on.\nTRY.registerUnits(${JSON.stringify(units, null, 1)});\n`);
if (front.length) fs.writeFileSync(path.join(out, "front.js"), `// ${B.name} front matter (${B.front}). data/Q2-SCHEMA.md "Front matter".\n// Assembled by tools/q2/merge-units.js; edit this file directly from now on.\nTRY.registerFront(${JSON.stringify(front, null, 1)});\n`);
console.log(`challenge.js: ${units.map((u) => u.id).join(" ")} · front.js: ${front.map((s) => s.id).join(" ")}`);
