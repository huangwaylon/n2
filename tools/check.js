// usage: node /tmp/check.js data/chapters/chNN.js  -> validates structure
const f=process.argv[2]; let ch; global.N2={register:c=>ch=c,registerCompare:g=>ch=g}; global.window=global;
require(require('path').resolve(f));
const errs=[]; const E=(m)=>errs.push(m);
const chkEx=(ex,w)=>{ if(!ex||!ex.type) return E(w+': missing type');
 const T=ex.type;
 if(T==='choice'||T==='reading') (ex.items||[]).forEach((it,i)=>{ (it.parts||[it]).forEach((p,k)=>{ if(!p.options||!(p.answer>=0&&p.answer<p.options.length)) E(`${w} item${i} part${k}: bad answer`);});});
 if(T==='write') ex.items.forEach((it,i)=>{ if(!it.answer||!String(it.answer).length) E(`${w} item${i}: no answer`);});
 if(T==='match'){ if(ex.answer.every((a,i)=>a===i)) E(w+': match answers are identity (right column not shuffled)'); if(ex.answer.length!==ex.left.length) E(w+': answer len'); if(new Set(ex.answer).size!==ex.answer.length) E(w+': dup answer'); ex.answer.forEach(a=>{if(!(a>=0&&a<ex.right.length))E(w+': bad idx')});}
 if(T==='fill') ex.items.forEach((it,i)=>{ const a=[].concat(it.answer); a.forEach(x=>{ if(ex.bank.indexOf(x)<0) E(`${w} item${i}: answer ${x} not in bank`);}); const n=(it.q.match(/＿＿/g)||[]).length; const paired=!Array.isArray(it.answer)&&String(it.answer).split('・').length===n; if(n!==a.length&&!paired) E(`${w} item${i}: ${n} blanks but ${a.length} answers`);});
 if(T==='order') ex.items.forEach((it,i)=>{ if(it.pieces.length!==4||[...it.order].sort().join()!=='0,1,2,3'||!(it.star>=0&&it.star<4)) E(`${w} item${i}: bad order`); if(it.order.join()==='0,1,2,3') E(`${w} item${i}: pieces listed in the correct order (gives the answer away)`);});
 if(T==='passage'){ const txt=ex.text.join(''); ex.blanks.forEach((b,i)=>{ if(!txt.includes('['+(i+1)+']')) E(`${w}: blank ${i+1} missing in text`); if(!(b.answer>=0&&b.answer<b.options.length)) E(`${w}: blank ${i+1} bad answer`);});}
 if(T==='listening') { if(!['task','summary','gist','response'].includes(ex.mode)) E(`${w}: bad listening mode ${ex.mode}`); ex.items.forEach((it,i)=>{ if(i===0&&!it.script) E(w+': first item needs script'); if(ex.mode!=='response'&&!it.question) E(`${w} item${i}: ${ex.mode} item needs a question`); if(it.question&&!it.questionEn) E(`${w} item${i}: question needs questionEn`); if((it.script||[]).some(l=>l.sp==='質問')) E(`${w} item${i}: put the question in \`question\`, not a 質問 script line`); if(!(it.answer>=0&&it.answer<it.options.length)) E(`${w} item${i}: bad answer`);}); }
};
const nos=[];
if(Array.isArray(ch)){ console.log('compare groups',ch.length, ch.reduce((a,g)=>a+g.items.length,0),'items'); process.exit(0);}
ch.parts.forEach((p,pi)=>{ p.points.forEach(g=>{ nos.push(g.no); ['pattern','usage','forms','examples','deepDive'].forEach(k=>{if(!g[k])E(`gp${g.no}: missing ${k}`)}); (g.practice||[]).forEach((ex,j)=>chkEx(ex,`gp${g.no} practice${j}`)); (g.plus||[]).forEach((pl,k)=>(pl.practice||[]).forEach((ex,j)=>chkEx(ex,`gp${g.no} plus${k}`))); (g.notes||[]).forEach((n,k)=>(n.practice||[]).forEach((ex,j)=>chkEx(ex,`gp${g.no} note${k}`)));}); if(p.check) [].concat(p.check).forEach((c,k)=>chkEx(c,`part${pi} check${k}`)); if(!p.sample) E(`part${pi}: no sample`);});
(ch.review||[]).forEach((r,k)=>chkEx(r.ex,`review${k}`));
const strs=[]; (function walk(o){ if(typeof o==='string') strs.push(o); else if(o&&typeof o==='object') Object.values(o).forEach(walk); })(ch);
strs.forEach(s=>{ if(s.includes('\uFFFD')) E('corrupted character U+FFFD: '+s.slice(0,60)); const t=s.replace(/\{[^{}|]+\|[^{}|]+\}/g,''); if(/[{}]/.test(t)) E('bad ruby/braces: '+s.slice(0,80)); if(/\{[^{}|]*[ぁ-ん]+\|/.test(s)&&/\{[ぁ-ん]+\|/.test(s)) E('ruby base is kana: '+s.slice(0,60)); if((s.match(/\*\*/g)||[]).length%2) E('unbalanced **: '+s.slice(0,80)); });
console.log(`ch${ch.id}: points ${nos.join(',')} | review sections ${(ch.review||[]).length}`);
console.log(errs.length? 'ERRORS:\n'+errs.join('\n') : 'OK');
