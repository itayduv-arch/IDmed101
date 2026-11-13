'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const sw=fs.readFileSync(path.join(root,'..','sw.js'),'utf8');
const version=JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version;
const ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'verbal_quality_20261113.js'),'utf8'),ctx);
const bank=ctx.window.PSYCHO101_VERBAL_20261113.verbal;
assert.equal(bank.length,3);
assert.equal(new Set(bank.map(q=>q.id)).size,3);
assert.equal(bank.filter(q=>q.topic==='פתגמים').length,2);
assert.equal(bank.filter(q=>q.topic==='אנלוגיות').length,1);
assert.equal([...bank.map(q=>q.correct)].sort().join(','),'0,2,3');
assert.equal([...bank.map(q=>q.difficulty)].sort().join(','),'2,3,4');
for(const q of bank){
 assert.equal(q.category,'מילולי');
 assert.equal(q.answers.length,4);
 assert.equal(new Set(q.answers).size,4);
 assert(q.correct>=0&&q.correct<4);
 assert.equal(q.answerExplanations.length,4);
 assert(q.answerExplanations.every(s=>s.length>=35));
 assert(q.strategy&&q.trap&&q.explanation);
 if(q.topic==='אנלוגיות'){
  assert(q.relation&&q.relationRule);
  assert.equal(q.optionRelations.length,4);
  assert.equal(q.relationDifference.length,4);
  assert.equal(q.optionRelations[q.correct],q.relation);
 }
}
assert(html.includes('verbal_quality_20261113.js?v='+version));
assert(html.includes('questions.verbal.push(...(window.PSYCHO101_VERBAL_20261113?.verbal||[]));'));
assert(html.includes('const PSYCHO101_BUILD_VERSION="'+version+'";'));
assert(sw.includes("'./psycho101/verbal_quality_20261113.js'"));
const begin=html.indexOf('function adaptiveHash('),end=html.indexOf('function startQuickLesson(id){',begin);
assert(begin>=0&&end>begin);
const {preparePracticeChoices}=new Function('nowDate',html.slice(begin,end)+'\nreturn {preparePracticeChoices};')(()=> '2026-11-13');
const input=bank.map(q=>({...q,answers:[...q.answers],answerExplanations:[...q.answerExplanations]}));
const original=JSON.stringify(input);
const shuffled=preparePracticeChoices(input,'verbal-20261113');
assert.equal(JSON.stringify(input),original);
for(const q of shuffled){
 const old=input.find(x=>x.id===q.id);
 assert.equal(q.answers[q.correct],old.answers[old.correct]);
 for(let i=0;i<4;i++){
  const oldIndex=old.answers.indexOf(q.answers[i]);
  assert.equal(q.answerExplanations[i],old.answerExplanations[oldIndex]);
  if(q.topic==='אנלוגיות'){
   assert.equal(q.optionRelations[i],old.optionRelations[oldIndex]);
   assert.equal(q.relationDifference[i],old.relationDifference[oldIndex]);
  }
 }
}
console.log('PASS 20261113 verbal batch structural, version, offline and shuffle tests');
