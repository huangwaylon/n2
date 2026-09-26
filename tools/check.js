// Structural validator for a book's data: answers in range, well-formed markup, English present where required.
// usage: node tools/check.js [n1|n2] [CHAPTER…]      (book default n2; chapters default: all)
const { bookArg, loadBook } = require("./lib/books");
const [book, args] = bookArg(process.argv.slice(2));
const TRY = loadBook(book);
const want = args.map(Number);
const inRange = (a, list) => a >= 0 && a < list.length;

function checkExercise(ex, w, E) {
  if (!ex || !ex.type) return E(`${w}: missing type`);
  const T = ex.type, items = ex.items || [];
  if (T === "choice" || T === "reading") items.forEach((it, i) => (it.parts || [it]).forEach((p, k) => { if (!p.options || !inRange(p.answer, p.options)) E(`${w} item${i} part${k}: bad answer`); }));
  if (T === "write") items.forEach((it, i) => { if (!it.answer || !String(it.answer).length) E(`${w} item${i}: no answer`); });
  if (T === "match") {
    if (ex.answer.every((a, i) => a === i)) E(`${w}: match answers are identity (right column not shuffled)`);
    if (ex.answer.length !== ex.left.length) E(`${w}: answer length`);
    if (new Set(ex.answer).size !== ex.answer.length) E(`${w}: duplicate answer`);
    ex.answer.forEach((a) => { if (!inRange(a, ex.right)) E(`${w}: bad index ${a}`); });
  }
  if (T === "fill") items.forEach((it, i) => {
    const a = [].concat(it.answer), n = (it.q.match(/＿＿/g) || []).length;
    a.forEach((x) => { if (!ex.bank.includes(x)) E(`${w} item${i}: answer ${x} not in bank`); });
    const paired = !Array.isArray(it.answer) && String(it.answer).split("・").length === n;
    if (n !== a.length && !paired) E(`${w} item${i}: ${n} blanks but ${a.length} answers`);
  });
  if (T === "order") items.forEach((it, i) => {
    if (it.pieces.length !== 4 || [...it.order].sort().join() !== "0,1,2,3" || !inRange(it.star, it.pieces)) E(`${w} item${i}: bad order`);
    if (it.order.join() === "0,1,2,3") E(`${w} item${i}: pieces listed in the correct order (gives the answer away)`);
  });
  if (T === "passage") {
    const txt = ex.text.join("");
    ex.blanks.forEach((b, i) => {
      if (!txt.includes(`[${i + 1}]`)) E(`${w}: blank ${i + 1} missing in text`);
      if (!inRange(b.answer, b.options)) E(`${w}: blank ${i + 1} bad answer`);
    });
  }
  if (T === "listening") {
    if (!["task", "summary", "gist", "response"].includes(ex.mode)) E(`${w}: bad listening mode ${ex.mode}`);
    items.forEach((it, i) => {
      if (i === 0 && !it.script) E(`${w}: first item needs a script`);
      if (ex.mode !== "response" && !it.question) E(`${w} item${i}: ${ex.mode} item needs a question`);
      if (it.question && !it.questionEn) E(`${w} item${i}: question needs questionEn`);
      if ((it.script || []).some((l) => l.sp === "質問")) E(`${w} item${i}: put the question in \`question\`, not a 質問 script line`);
      if (!inRange(it.answer, it.options)) E(`${w} item${i}: bad answer`);
    });
  }
}

// every string: no broken characters, balanced markup, ruby on kanji
function checkStrings(o, E) {
  const strs = [];
  (function walk(v) { if (typeof v === "string") strs.push(v); else if (v && typeof v === "object") Object.values(v).forEach(walk); })(o);
  strs.forEach((s) => {
    if (s.includes("�")) E("corrupted character U+FFFD: " + s.slice(0, 60));
    if (/[{}]/.test(s.replace(/\{[^{}|]+\|[^{}|]+\}/g, ""))) E("bad ruby/braces: " + s.slice(0, 80));
    if (/\{[ぁ-ん]+\|/.test(s)) E("ruby base is kana: " + s.slice(0, 60));
    if ((s.match(/\*\*/g) || []).length % 2) E("unbalanced **: " + s.slice(0, 80));
  });
}

// English: the translations the book doesn't print are ours and required everywhere; no Chinese (zh) anywhere
function checkEnglish(ch, E) {
  const need = (o, w) => { if (o && o.ja && !o.en) E(`${w}: no English`); };
  [].concat(ch.canDo || [], ...ch.parts.map((p) => p.canDo || [])).forEach((c, k) => need(c, `canDo${k}`));
  ch.parts.forEach((p, pi) => {
    (p.sample ? p.sample.lines : []).forEach((l, k) => { if (!/^[〜～]+$/.test(l.ja)) need(l, `part${pi} sample line${k}`); });
    p.points.forEach((g) => [g, ...(g.plus || [])].forEach((x, k) => {
      const w = `gp${g.no}${k ? ` plus${k - 1}` : ""}`;
      need(x.usage, `${w} usage`);
      (x.notes || []).forEach((n, j) => need(n, `${w} note${j}`));
      (x.examples || []).forEach((e, j) => need(e, `${w} example${j + 1}`));
    }));
  });
  (function walk(o) { if (o && typeof o === "object") Object.entries(o).forEach(([k, v]) => { if (k === "zh") E("zh field (Chinese is not reproduced): " + JSON.stringify(v).slice(0, 50)); walk(v); }); })(ch);
}

let failed = 0;
for (const ch of TRY.chapters.filter((c) => !want.length || want.includes(c.id))) {
  const errs = [], E = (m) => errs.push(m);
  ch.parts.forEach((p, pi) => {
    if (!p.sample) E(`part${pi}: no sample`);
    p.points.forEach((g) => {
      ["pattern", "usage", "forms", "examples", "deepDive"].forEach((k) => { if (!g[k]) E(`gp${g.no}: missing ${k}`); });
      (g.practice || []).forEach((ex, j) => checkExercise(ex, `gp${g.no} practice${j}`, E));
      (g.plus || []).forEach((pl, k) => (pl.practice || []).forEach((ex) => checkExercise(ex, `gp${g.no} plus${k}`, E)));
      (g.notes || []).forEach((n, k) => (n.practice || []).forEach((ex) => checkExercise(ex, `gp${g.no} note${k}`, E)));
    });
    [].concat(p.check || []).forEach((c, k) => checkExercise(c, `part${pi} check${k}`, E));
  });
  (ch.review || []).forEach((r, k) => checkExercise(r.ex, `review${k}`, E));
  checkEnglish(ch, E);
  checkStrings(ch, E);
  console.log(`${book.id} ch${ch.id}: points ${ch.parts.flatMap((p) => p.points.map((g) => g.no)).join(",")} | review sections ${(ch.review || []).length}`);
  console.log(errs.length ? "ERRORS:\n" + errs.join("\n") : "OK");
  if (errs.length) failed++;
}
if (!want.length) {
  const errs = [];
  checkStrings([TRY.compare, TRY.front], (m) => errs.push(m));
  console.log(`${book.id} compare: ${TRY.compare.length} groups, ${TRY.compare.reduce((a, g) => a + g.items.length, 0)} items; front: ${TRY.front.length} sections`);
  console.log(errs.length ? "ERRORS:\n" + errs.join("\n") : "OK");
  if (errs.length) failed++;
}
process.exit(failed ? 1 : 0);
