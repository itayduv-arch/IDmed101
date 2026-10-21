'use strict';
// Validates the real connected question banks, not synthetic examples.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const scriptRe=/<script\s+src="\.\/([^"]+\.js)(?:\?[^"]*)?"\s*><\/script>/g;
const window={};
let file,loaded=0;
while((file=scriptRe.exec(html))!==null){
  const loc=path.join(root,file[1]);
  assert(fs.existsSync(loc),'Missing question bank: '+file[1]);
  vm.runInNewContext(fs.readFileSync(loc,'utf8'),{window,console}, {filename:file[1]});
  loaded++;
}
assert(loaded>=12,'All active bank scripts should load');
const qStart=html.indexOf('const questions={'),qEnd=html.indexOf('function defaultState()',qStart);
assert(qStart>=0&&qEnd>qStart,'Find live application question assembly');
const questions=new Function('window',html.slice(qStart,qEnd)+'\nreturn questions;')(window);
const qualityStart=html.indexOf('function isExamQuestion(');
const qualityEnd=html.indexOf('function startQuickLesson(id){',qualityStart);
const testState={skillRatings:{},questionPerformance:{},topicStats:{},dailyWarmup:null};
const api=new Function('state','questions','nowDate','saveLocal','questionPerformance','recentQuestionIds','DAY',
  html.slice(qualityStart,qualityEnd)+'\nreturn {isExamQuestion,auditedExamPool,dailyWarmupPlan,makeWarmupPlan};');
let activeDate='2026-10-21',saves=0;
const engine=api(testState,questions,()=>activeDate,()=>saves++,()=>testState.questionPerformance,()=>[],86400000);
const quant=engine.auditedExamPool('quantitative'),verbal=engine.auditedExamPool('verbal');
assert(quant.length>=15,'Enough exam-style quantitative questions after quality screening');
assert(verbal.length>=15,'Enough exam-style verbal questions after quality screening');
assert(verbal.filter(q=>q.topic==='אנלוגיות').length>=4,'Analogy bank available');
assert(quant.filter(q=>q.topic==='אחוזים').length>=2,'Percent question bank available');
assert(quant.filter(q=>q.topic==='חזקות ושורשים').length>=2,'Powers bank available');
assert(!engine.isExamQuestion({id:'qg101',category:'כמותי',topic:'גאומטריה',prompt:'שטח מלבן',answers:['1','2','3','4'],correct:0,explanation:'נוסחה'}));
assert(!engine.isExamQuestion({id:'cq500',category:'כמותי',topic:'מערכת צירים',prompt:'שינוי ב x',answers:['1','2','3','4'],correct:0,explanation:'חיסור'}));
assert(!engine.isExamQuestion({id:'vg100',category:'מילולי',topic:'אנלוגיות',prompt:'כלי פעולה',answers:['a','b','c','d'],correct:0,explanation:'הסבר'}));
assert(!engine.isExamQuestion({id:'word-x',category:'מילים',topic:'פירושי מילים',prompt:'מה פירוש',answers:['a','b','c','d'],correct:0,explanation:'הסבר'}));
assert(!engine.isExamQuestion({id:'malformed',category:'מילולי',topic:'אנלוגיות',prompt:'זוג',answers:['a','a','b','c'],correct:0,explanation:'הסבר'}));
for(const q of [...quant,...verbal]){
  assert.equal(new Set(q.answers).size,4,'Distinct distractors on '+q.id);
  assert(q.explanation&&q.prompt,'Question and explanation on '+q.id);
}
const warmup=engine.dailyWarmupPlan(),ids=warmup.ids;
assert.equal(ids.length,20,'20 daily questions');
assert.equal(new Set(ids).size,20,'No repeated IDs');
assert.equal(ids.filter(id=>quant.some(q=>q.id===id)).length,10,'Exactly 10 quantitative');
assert.equal(ids.filter(id=>verbal.some(q=>q.id===id)).length,10,'Exactly 10 verbal');
assert.equal(engine.dailyWarmupPlan(),warmup,'A same-day plan is reused');
assert(!ids.some(id=>id.startsWith('qg')||id.startsWith('vg')||id.startsWith('cq')),'Foundational templates absent from exam warmup');
activeDate='2026-10-22';
assert.equal(engine.dailyWarmupPlan().ids.length,20,'Next-day warmup remains complete');
const mathStart=html.indexOf('function quickNumericQuestion(');
const mathEnd=html.indexOf('// Quality boundary:',mathStart);
assert(mathStart>=0&&mathEnd>mathStart);
const math=new Function('shuffle',html.slice(mathStart,mathEnd)+'\nreturn {mentalDivide,intuitivePercentSteps,intuitiveReversePercentSteps,percentTipForQuestion,buildPercentQuick};')(a=>a);
assert.match(math.mentalDivide(36,25),/1\.44/,'Division by 25 must explain 1.44');
assert.match(math.intuitivePercentSteps(12,36),/4\.32/,'12% of 36 must show the result');
assert.match(math.intuitivePercentSteps(7.5,400),/30/,'7.5% of 400 must show result');
assert.match(math.intuitiveReversePercentSteps(12,36),/300/,'Reverse percentages must show 300');
const quick=math.buildPercentQuick(24);
for(const q of quick){
  assert(q.intuitiveTip&&q.intuitiveTip.length>25,'Human-readable full steps '+q.id);
  assert(q.answers.includes(String(q.answers[q.correct])),'Correct answer exists '+q.id);
  assert(q.explanation.includes('לכן')||q.explanation.includes('הכמות')||q.explanation.includes('10%')||q.explanation.includes('חצי'),'Explanation has reasoning '+q.id);
}
console.log('PASS real-question quality / foundations separation; '+quant.length+' quant, '+verbal.length+' verbal eligible; '+loaded+' banks; mental arithmetic examples verified.');
