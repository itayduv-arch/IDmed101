'use strict';
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const begin=html.indexOf('// Personal adaptive engine (2026-10-20)');
const end=html.indexOf('function startQuickLesson(id){',begin);
assert(begin>=0&&end>begin,'Adaptive engine must exist in Psycho101');
const source=html.slice(begin,end);
const factory=new Function('state','questions','nowDate','saveLocal','questionPerformance','recentQuestionIds','DAY',source+'\nreturn {dailyWarmupPlan,warmupAnsweredCount,adaptivePick,recordAdaptiveAnswer,adaptiveLevel};');

function fixtures(){
  const make=(topic,n,category,prefix)=>Array.from({length:n},(_,i)=>({
    id:prefix+topic+'-'+i,topic,category,difficulty:(i%5)+1,
    prompt:'Fixture '+i,answers:['a','b','c','d'],correct:0,explanation:'Fixture explanation'
  }));
  const qt=['חזקות ושורשים','אחוזים','שברים ויחסים','גאומטריה','הסתברות','דרך','הספק'];
  const vt=['אנלוגיות','אוצר מילים בהקשר','הסקה','היגיון','השלמת משפטים','הבנת הנקרא','ניסוח מחדש'];
  return {quantitative:qt.flatMap(t=>make(t,15,'כמותי','q-')),verbal:vt.flatMap(t=>make(t,15,'מילולי','v-'))};
}
const state={xp:900,streak:12,answered:63,topicStats:{},skillRatings:{},questionPerformance:{},dailyWarmup:null};
const questions=fixtures();
let localDate='2026-10-20',saved=0;
const engine=factory(state,questions,()=>localDate,()=>{saved++},()=>state.questionPerformance,()=>[],24*60*60*1000);
const today=engine.dailyWarmupPlan();
assert.equal(today.ids.length,20,'Daily warmup must have 20 questions');
assert.equal(new Set(today.ids).size,20,'No duplicates within daily warmup');
assert.equal(today.ids.filter(id=>id.startsWith('q-')).length,10,'Exactly 10 quantitative questions');
assert.equal(today.ids.filter(id=>id.startsWith('v-')).length,10,'Exactly 10 verbal questions');
assert.equal(today.ids.every((id,i)=>id.startsWith(i%2?'v-':'q-')),true,'Mix both chapters throughout the warmup');
assert.deepEqual(engine.dailyWarmupPlan().ids,today.ids,'Same local day must reuse the same questions');
today.answers[today.ids[0]]=true;
assert.equal(engine.warmupAnsweredCount(today),1,'Daily warmup completion must survive a reopened session');
assert.equal(state.xp,900,'Choosing a daily set cannot reset earned XP');
assert.equal(state.streak,12,'Choosing a daily set cannot reset streak');
const q=questions.quantitative[0];
const before=engine.adaptiveLevel(q);
engine.recordAdaptiveAnswer(q,true);
assert(engine.adaptiveLevel(q)>before,'Correct answers should increase personal topic level');
engine.recordAdaptiveAnswer(q,false);
assert(engine.adaptiveLevel(q)<state.skillRatings['כמותי|חזקות ושורשים'].level+1,'Incorrect answers must be registered');
const demo=[
  {id:'easy',category:'כמותי',topic:'אחוזים',difficulty:2,answers:['1','2','3','4'],correct:0},
  {id:'hard',category:'כמותי',topic:'אחוזים',difficulty:4,answers:['1','2','3','4'],correct:0}
];
state.skillRatings['כמותי|אחוזים']={level:2,answered:30,correct:12};
assert.equal(engine.adaptivePick(demo,1,'focused')[0].id,'easy','Struggling learners should get easier practice');
state.skillRatings['כמותי|אחוזים']={level:4,answered:30,correct:28};
assert.equal(engine.adaptivePick(demo,1,'focused')[0].id,'hard','Stronger learners should get harder practice');
localDate='2026-10-21';
const tomorrow=engine.dailyWarmupPlan();
assert.equal(tomorrow.ids.length,20,'New local date must generate a complete set');
assert.notDeepEqual(tomorrow.ids,today.ids,'Tomorrow should rotate the question selection');
assert.equal(engine.warmupAnsweredCount(tomorrow),0,'The new day starts uncompleted without deleting cumulative achievements');
assert(saved>=2,'The daily plan should be saved for sync');
console.log('PASS: adaptive warmup 20 questions, 10+10, alternation, daily rotation, resume, rating, and progress preservation.');
