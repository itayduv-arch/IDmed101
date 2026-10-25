'use strict';
// Regression test for the 2026-10-25 user-supplied fraction/percentage problem.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const w={};
vm.runInNewContext(fs.readFileSync(path.join(root,'percent_fractions_20261025.js'),'utf8'),{window:w});
const bank=w.PSYCHO101_PERCENT_FRACTIONS_20261025?.quantitative||[];
assert.equal(bank.length,12,'Expected one user-submitted question and 11 original variations');
const fixtures=[
  [23,14,46,7],[17,24,34,12],[31,18,62,9],
  [27,16,36,12],[35,18,70,9],[18,35,63,10],
  [12.5,64,40,20],[40,21,56,15],[7.5,24,18,10]
];
const correctDistribution=[0,0,0,0],unique=new Set();
for(const [i,q] of bank.entries()){
  assert(!unique.has(q.id),'Duplicate ID: '+q.id);
  unique.add(q.id);
  assert.equal(q.topic,'אחוזים');
  assert.equal(q.category,'כמותי');
  assert.equal(q.answers.length,4,q.id+': must have four options');
  assert.equal(new Set(q.answers).size,4,q.id+': options must be unique');
  assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4,q.id+': invalid answer');
  assert(Array.isArray(q.fastSteps)&&q.fastSteps.length>=2,q.id+': missing quick solution');
  assert(q.strategy&&q.trap&&q.explanation&&q.provenance,q.id+': missing educational metadata');
  correctDistribution[q.correct]++;
  for(const f of [q.prompt,q.explanation,...q.answers]){
    assert.equal((f.match(/<span/g)||[]).length,(f.match(/<[/]span>/g)||[]).length,q.id+': unbalanced nested math spans');
  }
  if(i<fixtures.length){
    const [percent,numer,denom,answer]=fixtures[i];
    assert(Math.abs(percent*numer/denom-answer)<1e-10,q.id+': arithmetic check failed');
    assert.equal(q.answers[q.correct],answer+'%',q.id+': wrong answer index');
    assert(q.prompt.includes('psy-fraction'),q.id+': stacked fraction missing');
  }
}
assert.deepEqual(correctDistribution,[3,3,3,3],'Answer positions must be balanced');
assert.equal(bank[0].provenance,'user-provided-question-2026-10-25');
assert.deepEqual(Array.from(bank[0].answers),['7%','8.5%','10%','12.5%']);
assert(Math.abs(7/(14/46)-23)<1e-10);
assert.equal(bank[9].answers[bank[9].correct],'23%');
assert(Math.abs(19*16/38-8)<1e-10);
assert(bank[10].answers[bank[10].correct].includes('psy-fraction'));
assert(Math.abs(11*15/33+5-10)<1e-10);
assert.equal(bank[11].answers[bank[11].correct],'10%');

const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const worker=fs.readFileSync(path.join(root,'..','sw.js'),'utf8');
assert(html.includes('<script src="./percent_fractions_20261025.js?v=20261025-52"></script>'),'Bank script not loaded');
assert(html.includes('questions.quantitative.push(...(window.PSYCHO101_PERCENT_FRACTIONS_20261025?.quantitative||[]));'),'Bank not assembled');
assert(html.indexOf('percent_fractions_20261025.js')<html.indexOf('const questions={'),'Bank loaded after app');
assert(html.includes('.psy-fraction>span:first-child'),'Missing fraction numerator divider CSS');
assert(worker.includes("'./psycho101/percent_fractions_20261025.js'"),'New bank not offline-cached');
const first=html.indexOf('function formatMathHtml(input){');
const last=html.indexOf('function localDateKey(',first);
assert(first>0&&last>first);
const {formatMathHtml}=new Function(html.slice(first,last)+'\nreturn {formatMathHtml};')();
for(const q of bank){
  const f=formatMathHtml(q.prompt);
  assert(f.includes('math-ltr'),q.id+': lost LTR isolation');
  assert.equal((f.match(/<span/g)||[]).length,(f.match(/<[/]span>/g)||[]).length,q.id+': formatter unbalanced tags');
}
console.log('PASS 12 fraction-percent questions: maths, four answers, short methods, RTL spans, app wiring, offline cache.');
