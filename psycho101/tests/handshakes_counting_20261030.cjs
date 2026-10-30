'use strict';
/* Regression tests for the 30 Oct 2026 handshake-counting question bank. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..');
const window={};
vm.runInNewContext(fs.readFileSync(path.join(root,'handshakes_counting_20261030.js'),'utf8'),{window});
const questions=window.PSYCHO101_HANDSHAKES_20261030?.quantitative||[];
assert.equal(questions.length,12,'Original plus eleven variants expected');
const C2=n=>n*(n-1)/2;
const results=[C2(10),C2(8),C2(12),C2(7),C2(10)-5,6*4,C2(8)+8,C2(8),(10*3)/2,C2(6)-1,C2(3)+C2(5),(6*2)/2];
const positions=[0,0,0,0];
const ids=new Set();
for(const [i,q] of questions.entries()){
  assert(!ids.has(q.id),'Repeated ID');ids.add(q.id);
  assert.equal(q.category,'כמותי',q.id);
  assert.equal(q.topic,'קומבינטוריקה',q.id);
  assert.equal(q.answers.length,4,q.id);
  assert.equal(new Set(q.answers).size,4,q.id);
  assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<=3,q.id);
  assert.equal(q.answers[q.correct],String(results[i]),q.id+' wrong answer');
  positions[q.correct]++;
  for(const field of ['prompt','explanation','strategy','whenToUse','trap','provenance'])assert(q[field]?.length,q.id+' missing '+field);
  assert(Array.isArray(q.fastSteps)&&q.fastSteps.length>=2,q.id+' missing quick solution');
  assert(q.difficulty>=2&&q.difficulty<=4,q.id+' invalid difficulty');
  assert.equal((q.explanation.match(/<span/g)||[]).length,(q.explanation.match(/<\/span>/g)||[]).length,q.id+' invalid HTML');
}
assert.deepEqual(positions,[3,3,3,3],'Keep the correct position balanced');
assert.equal(questions[0].provenance,'user-provided-question-2026-10-30');
assert(questions[0].answers[3].includes('10!'),'Original distractor missing');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const sw=fs.readFileSync(path.join(root,'..','sw.js'),'utf8');
assert(html.includes('./handshakes_counting_20261030.js?v=20261030-58'),'Missing script load');
assert(html.includes('window.PSYCHO101_HANDSHAKES_20261030?.quantitative'),'Questions not integrated');
assert(html.indexOf('handshakes_counting_20261030.js')<html.indexOf('const questions={'),'Script order invalid');
assert(sw.includes("'./psycho101/handshakes_counting_20261030.js'"),'Missing offline cache');
console.log('PASS: 12 questions, arithmetic, answer positions, strategy metadata, integration and offline cache');
