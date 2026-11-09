'use strict';
/* Regression: user-supplied squared-interval question 16 and 11 original variants (2026-11-09). */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const window={};
vm.runInNewContext(fs.readFileSync(path.join(root,'squared_intervals_20261109.js'),'utf8'),{window});
const questions=window.PSYCHO101_SQUARED_INTERVALS_20261109?.quantitative||[];
assert.equal(questions.length,12,'Original image question plus 11 variants');
const cases=[
  [-2,4,false,false,'0 ≤ x² < 16',2],
  [1,5,false,false,'1 < x² < 25',0],
  [-5,-2,false,false,'4 < x² < 25',1],
  [-3,2,false,false,'0 ≤ x² < 9',3],
  [-4,1,true,true,'0 ≤ x² ≤ 16',0],
  [-4,1,false,true,'0 ≤ x² < 16',1],
  [-2,3,true,true,'0 ≤ x² ≤ 9',2],
  [-3,-1,false,false,'1 < x² < 9',3],
  [0,6,false,false,'0 < x² < 36',0],
  [-4,-2,true,false,'4 < x² ≤ 16',1],
  [-1,4,false,true,'0 ≤ x² ≤ 16',2],
  [2,5,true,false,'4 ≤ x² < 25',3]
];
const fmt=s=>'<span class="math-ltr" dir="ltr">'+s.replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('x²','x<sup>2</sup>')+'</span>';
const freq=[0,0,0,0];
const ids=new Set();
for(let i=0;i<questions.length;i++){
  const q=questions[i], [a,b,leftClosed,rightClosed,expected,correct]=cases[i];
  assert(!ids.has(q.id),'Duplicate ID '+q.id);ids.add(q.id);
  assert.equal(q.category,'כמותי');
  assert.equal(q.topic,'אלגברה');
  assert.equal(q.correct,correct,'Incorrect option index '+q.id);
  assert.equal(q.answers.length,4,'Option count '+q.id);
  assert.equal(new Set(q.answers).size,4,'Duplicate options '+q.id);
  assert.equal(q.answers[q.correct],fmt(expected),'Incorrect range '+q.id);
  freq[q.correct]++;
  assert(q.prompt.includes(fmt('x²')),'Missing LTR squared expression '+q.id);
  const hasZero=(a<0&&b>0)||(a===0&&leftClosed)||(b===0&&rightClosed);
  let lo, loClosed;
  if(hasZero){lo=0;loClosed=true;}
  else if(b<=0){lo=b*b;loClosed=rightClosed;}
  else {lo=a*a;loClosed=leftClosed;}
  let hi,hiClosed;
  if(Math.abs(a)>Math.abs(b)){hi=a*a;hiClosed=leftClosed;}
  else if(Math.abs(b)>Math.abs(a)){hi=b*b;hiClosed=rightClosed;}
  else {hi=a*a;hiClosed=leftClosed||rightClosed;}
  const independentlyComputed=lo+' '+(loClosed?'≤':'<')+' x² '+(hiClosed?'≤':'<')+' '+hi;
  assert.equal(expected,independentlyComputed,'Mathematical boundary check '+q.id);
  for(let j=1;j<=100;j++){
    const x=a+(b-a)*j/101, y=x*x;
    assert(y>=lo-1e-9 && y<=hi+1e-9,'Sampled x² is out of range for '+q.id);
  }
  for(const field of ['explanation','strategy','trap','whenToUse','provenance','skill']){
    assert(q[field]&&q[field].length>15,'Missing '+field+' in '+q.id);
  }
  assert(q.difficulty>=2&&q.difficulty<=4,'Difficulty '+q.id);
  assert(q.fastSteps?.length>=2,'Fast steps '+q.id);
  for(const option of q.answers){
    assert(option.startsWith('<span class="math-ltr" dir="ltr">')&&option.endsWith('</span>'),'RTL option '+q.id);
    assert.equal((option.match(/<span/g)||[]).length,option.split('</span>').length-1,'Broken LTR span '+q.id);
  }
}
assert.deepEqual(freq,[3,3,3,3],'Balanced answer distribution');
assert.equal(questions[0].provenance,'user-provided-image-2026-11-09');
assert.deepEqual(Array.from(questions[0].answers),[
  fmt('4 < x² < 16'),fmt('x² < 16'),fmt('0 ≤ x² < 16'),fmt('0 ≤ x² ≤ 4')
]);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert(html.includes('./squared_intervals_20261109.js?v=20261109-63'));
assert(html.includes('window.PSYCHO101_SQUARED_INTERVALS_20261109?.quantitative'));
assert(html.indexOf('squared_intervals_20261109.js')<html.indexOf('const questions={'));
const rootSw=fs.readFileSync(path.join(root,'..','sw.js'),'utf8');
const localSw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
assert(rootSw.includes("'./psycho101/squared_intervals_20261109.js'"));
assert(localSw.includes("'./squared_intervals_20261109.js'"));
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version,'20261109-63');
console.log('PASS: 12 interval-squaring questions, endpoints, options, RTL, integration and offline cache');
