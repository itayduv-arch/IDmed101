'use strict';
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const begin=html.indexOf('function adaptiveHash(');
const end=html.indexOf('function startQuickLesson(id){',begin);
assert(begin>=0&&end>begin,'Answer shuffling engine must exist');
const fn=new Function('nowDate',html.slice(begin,end)+'\nreturn {preparePracticeChoices};');
const {preparePracticeChoices}=fn(()=> '2026-10-20');
const base=Array.from({length:8},(_,i)=>({
  id:'test-analogy-'+i,category:'מילולי',topic:'אנלוגיות',
  prompt:'מקור : קשר',answers:['נכון '+i,'מסיח א '+i,'מסיח ב '+i,'מסיח ג '+i],correct:0,
  relation:'קשר מקור',relationRule:'משפט קשר',explanation:'בדוק יחס וכיוון',
  optionRelations:['הקשר הנכון','שיבוש כיוון','הכללה','חלק-שלם'],
  relationDifference:['','כיוון הפוך','רחב מדי','קשר מסוג אחר'],
  distractorRelations:['נכון','לא נכון-1','לא נכון-2','לא נכון-3']
}));
const saved=JSON.stringify(base);
const result=preparePracticeChoices(base,'test-balanced');
assert.equal(result.length,8);
assert.deepEqual([0,1,2,3].map(pos=>result.filter(q=>q.correct===pos).length),[2,2,2,2],
  'Eight analogies must balance correct positions exactly');
assert.notEqual(result.every(q=>q.correct===0),true,'The first choice must not be always correct');
for(const q of result){
  const original=base.find(x=>x.id===q.id);
  assert.equal(q.answers[q.correct],original.answers[original.correct],'Correct answer text must stay correct');
  for(let i=0;i<4;i++){
    const oldIndex=original.answers.indexOf(q.answers[i]);
    assert(oldIndex>=0);
    assert.equal(q.optionRelations[i],original.optionRelations[oldIndex],'Option relation must follow choice');
    assert.equal(q.relationDifference[i],original.relationDifference[oldIndex],'Mistake difference must follow choice');
    assert.equal(q.distractorRelations[i],original.distractorRelations[oldIndex],'Distractor explanation must follow choice');
  }
  assert.equal(q.id,original.id,'Question identity retained for streaks and spaced review');
}
assert.equal(JSON.stringify(base),saved,'Never mutate original question bank');
assert.deepEqual(preparePracticeChoices(base,'test-balanced'),result,'Stable salt yields same order after reopening');
const distinct=preparePracticeChoices(base,'another-session');
assert.notDeepEqual(result.map(q=>q.answers),distinct.map(q=>q.answers),'A new session should be able to change answer positions');
const mixed=[...base.slice(0,4),...Array.from({length:8},(_,i)=>({
  id:'test-quant-'+i,category:'כמותי',topic:'אחוזים',
  answers:['1','2','3','4'],correct:i%4
}))];
const mixedResult=preparePracticeChoices(mixed,'mixed');
assert.deepEqual([0,1,2,3].map(n=>mixedResult.filter(q=>q.correct===n).length),[3,3,3,3],
  'All positions should be balanced in a mixed session');
const withoutMetadata=preparePracticeChoices([{id:'old',topic:'אנלוגיות',answers:['a','b','c','d'],correct:0}],'old');
assert.equal(withoutMetadata[0].answers[withoutMetadata[0].correct],'a','Older analogies without metadata still work');
for(const entry of [
  "list=preparePracticeChoices(list,'warmup|'+plan.date)",
  'list=preparePracticeChoices(list);',
  'list=preparePracticeChoices(adaptivePick(list,8',
  'function startMixed(){const list=preparePracticeChoices(',
  'function startPsychoSimulation(){clearInterval(psychoTimer);const list=preparePracticeChoices(',
  'function startErrorPractice(){const list=preparePracticeChoices('
])assert(html.includes(entry),'Question-answer shuffling must cover all practice entry points: '+entry);
console.log('PASS answer_shuffle: balanced positions, option metadata, no mutation, stable day seed, fresh practice, all entry points.');
