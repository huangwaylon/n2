// Assembles data/q2/lNN.js from the chunk fragments written by transcription agents (/tmp/q2parts/lNN-*.json, see
// docs/Q2-TRANSCRIPTION.md "Team workflow"). Fragments are merged in file-name order; each is
//   { "part": "read" | "write" | "speak" | "listen", "blocks": [ … ] }
// and the first chunk also carries "pages", "opener" and "sections" ([{ skill, title, page }], the four section titles).
// usage: node tools/q2/merge-lesson.js 7        (writes data/q2/l07.js; missing chunks are listed, the rest merged)
const fs = require("fs"), path = require("path");
const L = +process.argv[2], LL = String(L).padStart(2, "0"), dir = process.env.Q2PARTS || "/tmp/q2parts";
const frags = fs.readdirSync(dir).filter((f) => new RegExp(`^l${LL}-.*\\.json$`).test(f)).sort()
  .map((f) => ({ f, d: JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) }));
const head = frags.find((x) => x.d.sections);
if (!head) { console.error(`no fragment with "sections" for lesson ${L}`); process.exit(1); }
const lesson = { id: L, pages: head.d.pages, opener: head.d.opener, sections: head.d.sections.map((s) => ({ skill: s.skill, title: s.title, page: s.page, blocks: [] })) };
// a continuation chunk ({ "continue": "<reading id>", "lines": […], "tr": […], "blocks": […] }) appends the rest of a long
// reading (split between two agents) to that reading block, then adds its own blocks
const findId = (bs, id) => { for (const b of bs || []) { if (b.id === id) return b; const x = findId(b.blocks, id); if (x) return x; } return null; };
for (const { f, d } of frags) {
  const sec = lesson.sections.find((s) => s.skill === d.part);
  if (!sec) { console.error(`${f}: unknown part ${d.part}`); process.exit(1); }
  if (d.continue) {
    const r = findId(sec.blocks, d.continue);
    if (!r) { console.error(`${f}: reading ${d.continue} to continue not found (yet)`); continue; }
    r.lines.push(...(d.lines || [])); r.tr = (r.tr || []).concat(d.tr || []); if (d.credit) r.credit = d.credit;
  }
  sec.blocks.push(...(d.blocks || []));
}
const out = `// Quartet II 第${L}課 (book pp.${lesson.pages ? lesson.pages.join("–") : "?"}; answers/scripts pp.238–245). data/Q2-SCHEMA.md.\n` +
  `// Assembled by tools/q2/merge-lesson.js from the transcription chunks; edit this file directly from now on.\n` +
  `TRY.registerLesson(${JSON.stringify(lesson, null, 1)});\n`;
fs.writeFileSync(path.resolve(__dirname, `../../data/q2/l${LL}.js`), out);
console.log(`l${LL}.js ← ${frags.map((x) => x.f).join(" ")}`);
