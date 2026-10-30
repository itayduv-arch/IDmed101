'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const src=fs.readFileSync(path.join(root,'verbal_quality_20261030.js'),'utf8');
const worker=fs.readFileSync(path.join(root,'..','sw.js'),'utf8');
const version=JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version;
const context={window:{}};
vm.runInNewContext(src,context);
const bank=context.window.PSYCHO101_VERBAL_20261030?.verbal||[];
assert.equal(bank.length,3,'Exactly three original questions');
assert.deepEqual([...bank.map(q=>q.difficulty)].sort(),[2,3,4],'Balanced difficulty');
assert.equal(bank.filter(q=>q.topic==='אנלוגיות').length,2);
assert.equal(bank.filter(q=>q.topic==='פתגמים').length,1);
assert.equal(new Set(bank.map(q=>q.id)).size,3,'Unique IDs');
for(const q of bank){
 assert.equal(q.category,'מילולי');
 assert.equal(q.answers.length,4);
 assert.equal(new Set(q.answers).size,4);
 assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<4);
 assert(q.prompt&&q.explanation&&q.strategy&&q.trap);
 assert.equal(q.answerExplanations.length,4);
 assert(q.answerExplanations.every(s=>s.length>=35),'Every choice has a substantive explanation');
 if(q.topic==='אנלוגיות'){
  assert(q.relation&&q.relationRule);
  assert.equal(q.optionRelations.length,4);
  assert.equal(q.relationDifference.length,4);
  assert.equal(q.optionRelations[q.correct],q.relation);
 }
}
assert(html.includes('verbal_quality_20261030.js?v='+version),'Versioned script must be loaded');
assert(html.includes('questions.verbal.push(...(window.PSYCHO101_VERBAL_20261030?.verbal||[]));'),'Bank must be added to active verbal pool');
assert(html.includes('const PSYCHO101_BUILD_VERSION="'+version+'";'));
assert(worker.includes('./psycho101/verbal_quality_20261030.js'),'Offline worker must cache new bank');
const begin=html.indexOf('function adaptiveHash('),end=html.indexOf('function startQuickLesson(id){',begin);
assert(begin>=0&&end>begin);
const {preparePracticeChoices}=new Function('nowDate',html.slice(begin,end)+'\nreturn {preparePracticeChoices};')(()=> '2026-10-30');
const input=bank.map(q=>({...q,answers:[...q.answers],answerExplanations:[...q.answerExplanations]}));
const snapshot=JSON.stringify(input);
const shuffled=preparePracticeChoices(input,'verbal-quality-regression');
assert.equal(JSON.stringify(input),snapshot,'Canonical bank must remain unchanged');
for(const q of shuffled){
 const old=input.find(item=>item.id===q.id);
 assert.equal(q.answers[q.correct],old.answers[old.correct],'Answer key must follow shuffling');
 for(let i=0;i<4;i++){
  const j=old.answers.indexOf(q.answers[i]);
  assert.equal(q.answerExplanations[i],old.answerExplanations[j],'Explanation must follow answer');
  if(q.topic==='אנלוגיות'){
   assert.equal(q.optionRelations[i],old.optionRelations[j]);
   assert.equal(q.relationDifference[i],old.relationDifference[j]);
  }
 }
}
const group=Array.from({length:8},(_,i)=>({...input[i%3],id:'verbal-test-'+i}));
const rotated=preparePracticeChoices(group,'balanced-positions');
assert.deepEqual([0,1,2,3].map(i=>rotated.filter(q=>q.correct===i).length),[2,2,2,2]);
const start=html.indexOf('function answerSpecificFeedback(q){');
const stop=html.indexOf('function renderQuestion(){',start);
assert(start>=0&&stop>start);
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const feedback=new Function('escapeHtml',html.slice(start,stop)+'\nreturn answerSpecificFeedback;')(esc);
for(const q of shuffled){
 const rendered=feedback(q);
 assert(rendered.includes('ניתוח כל האפשרויות'));
 q.answerExplanations.forEach(x=>assert(rendered.includes(esc(x))));
}
assert.equal(feedback({}), '');
assert(html.includes('${answerSpecificFeedback(q)}${analogyTip}'),'Feedback must be visible after answering');
assert(html.includes('verbalStrategyTip(q)+verbalQuickStrategy(q)+quantitativeStrategyTip(q)'),'Quick verbal method must appear in feedback');
assert(html.includes('function verbalQuickStrategy(q){'),'Quick verbal strategy helper must exist');
console.log('PASS verbal_quality_20261030: 3 questions, difficulty 2/3/4, unique answers, full distractor feedback, stable shuffling, balanced positions, active bank, offline/version integration.');
