'use strict';
/* Regression: powers comparison question uploaded 2026-11-08 + 11 original variants. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const window={};
vm.runInNewContext(fs.readFileSync(path.join(root,'powers_compare_20261108.js'),'utf8'),{window});
const questions=window.PSYCHO101_POWERS_COMPARE_20261108?.quantitative||[];
assert.equal(questions.length,12,'Expect one uploaded question + eleven new variants');
const input=[
  [2,36,3,24],[4,15,8,10],[2,40,5,16],[3,20,9,11],
  [16,7,8,9],[7,12,49,6],[2,42,3,28],[5,18,25,9],
  [8,12,4,19],[9,12,27,8],[10,12,5,16],[4,18,8,13]
];
const fmt=(base,exp)=>'<span class="math-ltr" dir="ltr">'+base+'<sup>'+exp+'</sup></span>';
const distribution=[0,0,0,0],ids=new Set();
for(const [i,q] of questions.entries()){
  const [a,m,b,n]=input[i];
  assert(!ids.has(q.id),'Duplicate ID '+q.id); ids.add(q.id);
  assert.equal(q.category,'כמותי');
  assert.equal(q.topic,'חזקות ושורשים');
  assert.equal(q.answers.length,4);
  assert.equal(new Set(q.answers).size,4,'Answers not unique at '+q.id);
  assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<=3);
  distribution[q.correct]++;
  const diff=BigInt(a)**BigInt(m)-BigInt(b)**BigInt(n);
  const expected=diff>0n?fmt(a,m):diff<0n?fmt(b,n):'שניהם שווים';
  assert.equal(q.answers[q.correct],expected,'Incorrect answer at '+q.id);
  assert(q.prompt.includes(fmt(a,m))&&q.prompt.includes(fmt(b,n)),q.id+' prompt formatting');
  for(const field of ['explanation','strategy','whenToUse','trap','skill','provenance'])assert(q[field]?.length,q.id+' missing '+field);
  assert(q.difficulty>=2&&q.difficulty<=4,q.id+' difficulty range');
  assert(Array.isArray(q.fastSteps)&&q.fastSteps.length>=2,q.id+' quick steps');
  for(const s of [q.prompt,...q.answers])assert.equal((s.match(/<span/g)||[]).length,s.split('</span>').length-1,q.id+' broken RTL markup');
}
assert.deepEqual(distribution,[3,3,3,3],'Correct answer placements should be balanced');
assert.equal(questions[0].provenance,'user-provided-image-2026-11-08');
assert.deepEqual(Array.from(questions[0].answers),[
  fmt(2,36),fmt(3,24),'שניהם שווים','אין לי שמץ, צריך מחשבון'
]);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('./powers_compare_20261108.js?v=20261108-62'));
assert(html.includes('window.PSYCHO101_POWERS_COMPARE_20261108?.quantitative'));
assert(html.indexOf('powers_compare_20261108.js')<html.indexOf('const questions={'));
const rootSw=fs.readFileSync(path.join(root,'..','sw.js'),'utf8');
const localSw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
assert(rootSw.includes("'./psycho101/powers_compare_20261108.js'"));
assert(localSw.includes("'./powers_compare_20261108.js'"));
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version,'20261110-67');
console.log('PASS: power comparisons, balanced options, arithmetic, Hebrew RTL, integration and offline cache');
