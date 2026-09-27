// Quartet II tool helpers: load data/q2 files through the page's registry, walk every string with its path, and tell
// book text (Japanese, the book's English `en`) from ours (`tr`, figure descriptions). See data/Q2-SCHEMA.md.
const fs = require("fs"), path = require("path");
const root = path.resolve(__dirname, "../..");
const dir = path.join(root, "data/q2");
function load(files) {
  delete globalThis.TRY;
  const boot = path.join(root, "assets/js/boot.js");
  for (const f of [boot, path.join(dir, "book.js"), ...files]) { delete require.cache[require.resolve(f)]; require(f); }
  return globalThis.TRY;
}
const allFiles = () => {
  delete globalThis.TRY; require(path.join(root, "assets/js/boot.js")); delete require.cache[require.resolve(path.join(dir, "book.js"))]; require(path.join(dir, "book.js"));
  return globalThis.TRY.book.files.map((f) => path.join(dir, f)).filter((f) => fs.existsSync(f));
};
// keys whose strings are ours (generated English) or not text at all
const OURS = new Set(["tr", "titleTr", "desc"]);
const META = new Set(["t", "style", "id", "icon", "audio", "v", "mark", "side", "kind", "skill", "sec", "k", "m", "hl", "page", "pages", "no", "n", "ln", "lesson", "star", "strokes", "numbers", "vertical", "from", "to", "answer", "cols", "colspan", "rowspan", "tag", "unit", "start", "min", "max", "nopage"]);
// visit(str, path, key, parent) for every string that is book text
function walkBook(o, visit, p = "", key = "", parent = null) {
  if (typeof o === "string") { if (!OURS.has(key)) visit(o, p, key, parent); return; }
  if (Array.isArray(o)) { o.forEach((v, i) => walkBook(v, visit, `${p}.${i}`, key, parent)); return; }
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) {
    if (OURS.has(k) || (META.has(k) && k !== "answer")) continue;
    walkBook(v, visit, p ? `${p}.${k}` : k, k, o);
  }
}
module.exports = { root, dir, load, allFiles, walkBook, OURS, META };
