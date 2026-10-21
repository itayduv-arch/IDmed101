'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const begin=html.indexOf('function startTimedQuant(){'),end=html.indexOf('function startPsychoSimulation(){',begin);
assert(begin>=0&&end>begin,'Timed quantitative practice must be registered');
const code=html.slice(begin,end);
const fixture=Array.from({length:30},(_,i)=>({id:'fixture-'+i,category:'כמותי',topic:i%2?'חזקות ושורשים':'אחוזים',difficulty:3,answers:['1','2','3','4'],correct:i%4}));
const wrapped=[
"let practice=null,view='home',lastChoice=3,psychoTimer=null,renders=0;",
"const clearInterval=()=>{};",
"const setInterval=()=>({type:'fake-interval'});",
"const formatPsychoTime=s=>String(s);",
"const document={getElementById:()=>null};",
"const alert=message=>{throw Error('Unexpected alert: '+message)};",
"const auditedExamPool=type=>{if(type!=='quantitative')throw Error('Wrong pool');return fixture};",
"const adaptivePick=(pool,count)=>pool.slice(0,count);",
"const preparePracticeChoices=list=>list;",
"const render=()=>{renders++};",
"const finishPractice=()=>{};",
code,
"return {startTimedQuant,get:()=>({practice,view,lastChoice,renders})};"
].join('\n');
const sandbox=new Function('fixture',wrapped)(fixture);
sandbox.startTimedQuant();
const state=sandbox.get();
assert.equal(state.practice.kind,'quant-timed');
assert.equal(state.practice.list.length,20);
assert.equal(state.practice.timeLeft,1200);
assert.equal(state.practice.timed,true);
assert.equal(state.practice.results.length,0);
assert.equal(state.view,'question');
assert.equal(state.lastChoice,null);
assert.equal(state.renders,1);
assert(html.includes("if(practice?.kind==='quant-timed'){\n    practice.results.push"),'Answered choices must be retained for debrief');
assert(html.includes("nextQuestion();return;\n  }\n  renderQuestion()"),'No feedback until after timed question');
assert(html.includes('onclick="openTimedReview()"'),'Post-session review button');
assert(html.includes('function timedReview(){'),'Debrief screen exists');
assert(html.includes('function openTimedReview(){'),'Debrief action exists');
assert(html.includes("else if(view==='timed-review')app.innerHTML=timedReview()"),'Debrief route exists');
console.log('PASS timed quantitative practice: 20 tasks, 20 minutes, delayed explanations and post-session method review.');
