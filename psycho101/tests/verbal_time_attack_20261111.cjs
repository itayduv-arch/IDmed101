'use strict';
/* Regression for curated Hebrew typing, secure topic leagues and offline assets. */
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const data=fs.readFileSync(path.join(root,'time_attack_words_20261111.js'),'utf8');
const game=fs.readFileSync(path.join(root,'time_attack_20261110.js'),'utf8');
const server=fs.readFileSync(path.join(root,'ranked_time_attack_20261110.ts'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
let now=1000000;
class Time extends Date{static now(){return now;}}
const window={};
const doc={hidden:false,handlers:{},elements:{},activeElement:null,addEventListener(type,fn){this.handlers[type]=fn},getElementById(id){return this.elements[id]||null},querySelector(){return null}};
vm.runInNewContext(data,{window});
const words=window.PSYCHO101_TIME_ATTACK_WORDS;
assert.equal(words.length,189);
assert.equal(words.filter(w=>w.group==='words_core').length,115);
assert.equal(words.filter(w=>w.group==='words_advanced').length,74);
assert.equal(new Set(words.map(w=>w.id)).size,189);
assert.equal(new Set(words.map(w=>w.word)).size,189);
assert(words.every(w=>w.level>=2&&Array.isArray(w.accepted)&&w.accepted.length&&w.tip));
assert(words.filter(w=>w.group==='words_advanced').every(w=>w.level>=3));
const checkStart=server.indexOf('function verbalCorrect(value,choices,correctMeaning){');
const checkEnd=server.indexOf('function numeric(v){',checkStart);
assert(checkStart>=0&&checkEnd>checkStart);
const check=vm.runInNewContext(server.slice(checkStart,checkEnd)+'\n({verbalCorrect})',{String,Array});
assert(check.verbalCorrect('ברור',['ברור','עצוב','חזק','נמוך'],'ברור'));
assert(!check.verbalCorrect('עצוב',['ברור','עצוב','חזק','נמוך'],'ברור'));
assert(!check.verbalCorrect('אחר',['ברור','עצוב','חזק','נמוך'],'ברור'));
vm.runInNewContext(game,{window,document:doc,navigator:{},Date:Time,Math,Number,Set,Object,String,Array,
 setTimeout,clearTimeout,requestAnimationFrame:()=>1,cancelAnimationFrame:()=>{}});
const app=window.PSYCHO101_TIME_ATTACK,all=app.allCards();
assert.equal(all.length,514+189);
assert.equal(app.buildDeck('words_core').length,115);
assert.equal(app.buildDeck('words_advanced').length,74);
assert.equal(app.buildDeck('mixed').length,514,'Quantitative mixed must not contain verbal words');
for(const w of words){
 const q=all.find(x=>x.id===w.id);
 assert(q&&q.group===w.group&&q.choices.length===4);
 assert.equal(new Set(q.choices).size,4);
 assert(q.choices.includes(q.answer));
 assert(app.correctAnswer(q.answer,q));
 assert(check.verbalCorrect(q.answer,q.choices,q.answer));
 for(const wrong of q.choices.filter(x=>x!==q.answer)){
  assert(!app.correctAnswer(wrong,q));
  assert(!check.verbalCorrect(wrong,q.choices,q.answer));
 }
}
const input={value:'',focus(){}};
doc.elements['ta-input']=input;
doc.elements['ta-form']={addEventListener(){}};
doc.elements['ta-skip']={addEventListener(){}};
doc.elements['ta-score']={textContent:'',classList:{remove(){},add(){}},offsetWidth:1};
const host={innerHTML:'',querySelector(){return null}};
let records={};
app.render(host,{topbar:()=>'',nav:()=>'',getRecords:()=>records,saveRecords:x=>{records=x},celebrate:()=>{}});
assert(host.innerHTML.includes('מילים חשובות')&&host.innerHTML.includes('מילים קשות'));
app.setMode('words_advanced');
app.start();
assert(host.innerHTML.includes('ta-verbal-question'),'Not RTL word question');
assert(host.innerHTML.includes('id="ta-choices"'),'Meaning choices missing');
assert(!host.innerHTML.includes('id="ta-input"'),'Verbal typing still shown');
const match=host.innerHTML.match(/class="ta-question ta-flip ta-verbal-question"[^>]*>([^<]+)<\\/div>/);
assert(match,'Word not rendered');
const q=words.find(w=>w.word===match[1]);
assert(q,'Rendered word not in bank');
const wordChoices=app.allCards().find(w=>w.word===q.word).choices;
app.choose(wordChoices.indexOf(q.definition));
assert.equal(doc.elements['ta-score'].textContent,10);
now+=61000;doc.handlers.visibilitychange();
assert.equal(records['words_advanced-60'].bestScore,10);
assert(html.indexOf('time_attack_words_20261111.js')<html.indexOf('time_attack_20261110.js'),'Word script loads after game');
assert(html.includes("['words_core','מילים חשובות']")&&html.includes("['words_advanced','מילים קשות']"));
assert(html.includes(".eq('week_start',weekStartIsrael()).eq('mode',leaderboardRankMode)"));
assert(html.includes("if(!['bests','weekly'].includes(leaderboardTab))"));
assert(server.includes('const weekly=game.duration===60'));
assert(server.includes('onConflict:"week_start,user_id,mode"'));
assert(server.includes('verbalCorrect(x.value,question.choices,question.answer_label)'));
assert(server.includes('const bank=new Map((items||[]).map(q=>[q.id,q]))'));
for(const f of ['sw.js','psycho101/sw.js']){
 const src=fs.readFileSync(path.resolve(root,'..',f),'utf8');
 assert(src.includes('time_attack_words_20261111.js'),'Offline vocab bank missing: '+f);
}
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version,'20261112-69');
console.log('PASS: 189 Hebrew meaning questions, four unambiguous choices, answer verification and per-topic rankings');
