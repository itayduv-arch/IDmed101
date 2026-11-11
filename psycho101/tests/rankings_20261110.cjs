'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const app=fs.readFileSync(path.join(root,'index.html'),'utf8');
const game=fs.readFileSync(path.join(root,'time_attack_20261110.js'),'utf8');
const server=fs.readFileSync(path.join(root,'ranked_time_attack_20261110.ts'),'utf8');
function extract(source,signature){
  const a=source.indexOf(signature);
  assert(a>=0,'Missing function '+signature);
  const brace=source.indexOf('{',a);
  let depth=0;
  for(let i=brace;i<source.length;i++){
    if(source[i]==='{')depth++;
    else if(source[i]==='}'&&!--depth)return source.slice(a,i+1);
  }
  throw new Error('Unbalanced function '+signature);
}
const context={Date,Intl,Math,Number,String,Array,Object,Set};
vm.runInNewContext(extract(server,'function weekStart(')+'\n'+extract(server,'function numeric(')+'\nthis.logic={weekStart,numeric};',context);
assert.equal(context.logic.weekStart(new Date('2026-11-10T09:00:00Z')),'2026-11-08');
assert.equal(context.logic.weekStart(new Date('2026-11-07T22:30:00Z')),'2026-11-08','Israel Sunday rollover');
assert.equal(context.logic.weekStart(new Date('2026-11-07T17:30:00Z')),'2026-11-01','Saturday uses prior week');
assert.equal(context.logic.numeric('١٢,٥'),12.5);
assert.equal(context.logic.numeric(' −2.50 '),-2.5);
assert.equal(context.logic.numeric('1/2'),null);
assert.equal(context.logic.numeric(''),null);
assert(server.includes('authClient.auth.getUser(token)'),'User JWT not checked');
assert(server.includes('session-not-found'),'Missing ownership check');
assert(server.includes('.eq("user_id",user.id).is("completed_at",null)'),'Replay protection missing');
assert(server.includes('const weekly=game.mode==="mixed"&&game.duration===60'),'Nonstandard weekly runs allowed');
assert(server.includes('new Map((items||[]).map(q=>[q.id,Number(q.answer)]))'),'No independent answer lookup');
assert(server.includes('score+=10+Math.min(streak-1,5)*2'),'Server score formula changed');
assert(server.includes('const score=')===false,'Direct client score accepted');
assert(app.includes("const PSYCHO_RANK_MODES="));
assert(app.includes("selectLeaderboardTab('weekly')")===false||app.includes("leaderboardTab='weekly'"));
assert(app.includes(".order('best_score',{ascending:false}).order('best_correct',{ascending:false}).limit(100)"));
assert(app.includes(".order('xp',{ascending:false}).limit(100)"));
assert(app.includes("weekStartIsrael()"));
assert(app.includes('rank-my-position'));
assert(app.includes('היעד הבא'));
assert(app.includes('psychoAchievementView()'));
assert(app.includes('achievementsUnlocked'));
assert(app.includes('out.achievementsUnlocked='));
assert(app.includes('window.PSYCHO101_TIME_ATTACK.render'));
assert(app.includes("beginRanked:async(mode,duration)"));
assert(app.includes("finishRanked:async(sessionId,answers)"));
assert(game.includes('async function startRanked()'));
assert(game.includes('finished.validation=res'));
assert(game.includes('g.submissions.push({i:g.answered-1,id:g.current.id'));
for(const f of ['sw.js','psycho101/sw.js']){
  const worker=fs.readFileSync(path.resolve(root,'..',f),'utf8');
  assert(worker.includes('leaderboard_20261110.css'),f+' missing offline style');
}
assert.equal(JSON.parse(fs.readFileSync(path.join(root,'version.json'),'utf8')).version,'20261111-68');
console.log('PASS: Israel Sunday reset, numeric input, authenticated server scoring, result replay controls, 3 ranking tabs, achievements, offline caches');
