'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const game=fs.readFileSync(path.join(root,'time_attack_20261110.js'),'utf8');
const version=JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version;
const extract=(begin,end)=>{const i=html.indexOf(begin),j=html.indexOf(end,i+begin.length);assert(i>=0&&j>i,'Missing source block '+begin);return html.slice(i,j)};
let today='2026-11-12', writes=0;const saved=new Map();
const ctx={Date,Math,Set,Object,Number,Array,String,JSON,
 nowDate:()=>today,daysBetween:()=>0,STORAGE_KEY:'warmup-test',
 localStorage:{setItem:(key,value)=>{saved.set(key,value);writes++},getItem:key=>saved.get(key)||null},
 registerStudyDay:()=>{},saveLocal:()=>{ctx.localStorage.setItem(ctx.STORAGE_KEY,JSON.stringify(ctx.state))},
 dailyWarmupPlan:()=>{if(!ctx.state.dailyWarmup||ctx.state.dailyWarmup.date!==today)
   ctx.state.dailyWarmup={date:today,ids:Array.from({length:20},(_,i)=>'w'+i),answers:{},bonusClaimed:false};
   return ctx.state.dailyWarmup},
 preparePracticeChoices:list=>list,render:()=>{},view:'home',practice:null,lastChoice:null,
 questions:{quantitative:[],verbal:[]}
};
vm.createContext(ctx);
vm.runInContext(extract('function defaultState(){','function loadState()')+
 extract('function ensureDailyState(){','function updateStreak()')+
 extract('function warmupPlanAnswerCount(','function makeWarmupPlan()'),ctx);
ctx.state=ctx.defaultState();ctx.state.dailyDate=today;ctx.state.dailyCreditVersion=1;
assert.equal(ctx.warmupAnsweredCount(null),0);
assert.equal(ctx.creditAndSaveDailyAnswer('exam:q1',true),true);
assert.equal(ctx.creditAndSaveDailyAnswer('exam:q1',true),false,'Duplicate credit');
assert.equal(ctx.creditAndSaveDailyAnswer('exam:q2',false),true);
assert.equal(ctx.warmupAnsweredCount(null),2,'Two partial questions should count');
assert.equal(ctx.state.todayCorrect,1);
assert(writes>0,'Partial answers not persisted');
ctx.state={...ctx.defaultState(),...JSON.parse(saved.get('warmup-test'))};
assert.equal(ctx.warmupAnsweredCount(null),2,'Reload lost two answers');
// Warmup continuation only serves questions missing from 20-credit goal.
ctx.questions.quantitative=Array.from({length:20},(_,i)=>({id:'w'+i}));
vm.runInContext(extract('function startQuickLesson(id){','const RECENT_QUESTION_KEY='),ctx);
ctx.startQuickLesson('warmup');
assert.equal(ctx.practice.list.length,18,'Warmup restarted at 20 instead of 18');
assert.equal(ctx.practice.warmupStart,2);
// Repeated question in dedicated warmup cannot earn a second daily credit.
assert.equal(ctx.creditAndSaveDailyAnswer('exam:w0',true),true);
assert.equal(ctx.creditAndSaveDailyAnswer('exam:w0',false),false);
assert.equal(ctx.warmupAnsweredCount(ctx.state.dailyWarmup),3);
// Reaching the goal from mixed practice earns the bonus only once.
for(let i=3;i<20;i++)ctx.creditAndSaveDailyAnswer('exam:extra'+i,true);
assert.equal(ctx.warmupAnsweredCount(ctx.state.dailyWarmup),20);
assert.equal(ctx.state.dailyWarmup.bonusClaimed,true);
assert.equal(ctx.state.xp,20);
ctx.creditAndSaveDailyAnswer('exam:another',true);
assert.equal(ctx.state.xp,20,'Daily bonus awarded twice');
// Old progress from the current day is migrated instead of cleared.
ctx.state={...ctx.defaultState(),dailyDate:today,todayAnswered:2,dailyCreditVersion:0,
 dailyTopicStats:{topic:{answered:2,correct:1}},
 dailyWarmup:{date:today,ids:['old'],answers:{old:true},bonusClaimed:false}};
ctx.ensureDailyState();
assert.equal(ctx.state.todayAnswered,2);
assert.equal(ctx.state.dailyCreditBase,1);
assert(ctx.state.dailyCreditIds.includes('exam:old'));
assert.equal(ctx.creditAndSaveDailyAnswer('exam:old',true),false);
assert.equal(ctx.state.todayAnswered,2);
ctx.creditAndSaveDailyAnswer('exam:new',false);
assert.equal(ctx.state.todayAnswered,3);
// Daily rollover removes yesterday's credits.
today='2026-11-13';ctx.ensureDailyState();
assert.equal(ctx.warmupAnsweredCount(ctx.state.dailyWarmup),0);
assert.equal(ctx.state.todayCorrect,0);
assert.equal(ctx.state.dailyCreditIds.length,0);
// Distinct question IDs from two synced devices reconcile without dropping either.
today='2026-11-12';
ctx.state={...ctx.defaultState(),dailyDate:today,dailyCreditVersion:1};
vm.runInContext(extract('function mergeStates(','async function syncNow('),ctx);
const left={...ctx.defaultState(),dailyDate:today,dailyCreditVersion:1,todayAnswered:2,todayCorrect:1,dailyCreditIds:['exam:a','exam:b']};
const right={...ctx.defaultState(),dailyDate:today,dailyCreditVersion:1,todayAnswered:2,todayCorrect:1,dailyCreditIds:['exam:b','time-attack:11']};
const merged=ctx.mergeStates(left,right);
assert.equal(merged.todayAnswered,3,'Cross-device merge lost distinct answers');
assert.equal(merged.dailyCreditIds.length,3);
// Time Attack credits each genuine answer immediately (not only on round completion).
ctx.state={...ctx.defaultState(),dailyDate:today,dailyCreditVersion:1};
let now=2000000;
class FakeDate extends Date{static now(){return now}}
const input={value:'0',focus(){}};
const nodes={'ta-input':input,'ta-form':{addEventListener(){}},'ta-skip':{addEventListener(){}}};
const doc={hidden:false,handlers:{},activeElement:null,addEventListener(k,fn){this.handlers[k]=fn},
 getElementById(id){return nodes[id]||null;}};
const browser={window:{},document:doc,navigator:{},Date:FakeDate,Math,Number,Array,Set,Object,String,
 setTimeout,clearTimeout,requestAnimationFrame:()=>1,cancelAnimationFrame:()=>{}};
vm.runInNewContext(game,browser);
const engine=browser.window.PSYCHO101_TIME_ATTACK;
const host={innerHTML:'',querySelector(){return null}};
engine.render(host,{topbar:()=>'',nav:()=>'',getRecords:()=>({}),saveRecords:()=>{},
 onAnswer:(question,correct,skipped)=>{if(!skipped)ctx.creditAndSaveDailyAnswer('time-attack:'+question.id,correct)}});
engine.setMode('mul');engine.start();
engine.submit({preventDefault(){}});
assert.equal(ctx.warmupAnsweredCount(null),1,'Time Attack short session not counted');
engine.leave();
assert.equal(JSON.parse(saved.get('warmup-test')).todayAnswered,1,'Exit lost Time Attack progress');
assert(html.includes('creditAndSaveDailyAnswer(\'exam:\'+q.id,good)'), 'Ordinary practice not hooked');
assert(html.includes('onAnswer:(q,good,skipped)'), 'Time Attack not hooked');
assert.equal(version,'20261112-70');
console.log('PASS: two early answers persist; deduplication; 18 remaining; 20-question bonus once; legacy migration; midnight reset; cloud merge; short Time Attack counts');
