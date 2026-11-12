// Psycho101 ranked Time Attack. Server recomputes scores from answers;
// public question bank means this validates results, not bot-proof anti-cheat.
import {createClient} from "npm:@supabase/supabase-js@2.57.0";
const cors={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST,OPTIONS","Access-Control-Allow-Headers":"authorization,apikey,x-client-info,content-type","Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store"};
const send=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:cors});
const fail=(reason,status=400)=>send({error:reason},status);
const url=Deno.env.get("SUPABASE_URL")||"",anon=Deno.env.get("SUPABASE_ANON_KEY")||"",service=Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")||"";
const admin=createClient(url,service,{auth:{persistSession:false,autoRefreshToken:false}});
const authClient=createClient(url,anon,{auth:{persistSession:false,autoRefreshToken:false}});
const modes=new Set(["mixed","mul","powers","fractions","mental","words_core","words_advanced"]),durations=new Set([45,60,90]);
const scramble=input=>{const a=input.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function idsFor(rows,mode){
  if(mode!=="mixed")return scramble(rows.filter(r=>r.group_name===mode)).slice(0,90).map(r=>r.id);
  const groups=["mul","powers","fractions","mental"].map(x=>scramble(rows.filter(r=>r.group_name===x)));
  const ids=[];
  while(ids.length<90&&groups.some(x=>x.length))for(const k of scramble([0,1,2,3]))if(ids.length<90&&groups[k].length)ids.push(groups[k].pop().id);
  return ids;
}
function weekStart(date=new Date()){
  const parts=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Jerusalem",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(date);
  const get=x=>Number(parts.find(p=>p.type===x)?.value);
  const day=new Date(Date.UTC(get("year"),get("month")-1,get("day")));
  day.setUTCDate(day.getUTCDate()-day.getUTCDay());
  return day.toISOString().slice(0,10);
}
function normalizeHebrew(value){
  if(value===null||value===undefined)return "";
  return String(value).normalize("NFKC").replace(/[\u0591-\u05C7]/g,"")
    .replace(/["'״׳.,!?;:()[\]{}–—־]/g," ")
    .replace(/\s+/g," ").trim().toLowerCase().slice(0,120);
}
function verbalCorrect(value,choices,correctMeaning){
  return typeof value==="string"&&Array.isArray(choices)&&choices.length===4&&
    choices.includes(value)&&value===correctMeaning;
}
function numeric(v){
  if(v===null||v===undefined)return null;
  const s=String(v).trim().replace(/[−–]/g,"-").replace(/[٠-٩]/g,c=>String(c.charCodeAt(0)-0x660)).replace(/[۰-۹]/g,c=>String(c.charCodeAt(0)-0x6f0)).replace(/[\u066B,]/g,".").replace(/\s/g,"");
  if(s.length>24||!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(s))return null;
  const n=Number(s);return Number.isFinite(n)?n:null;
}
const normName=s=>{const n=String(s||"").trim().slice(0,24);return n.length>=2?n:null};
async function nameFor(user){
  const {data,error}=await admin.from("psycho101_leaderboard").select("display_name").eq("user_id",user.id).maybeSingle();
  if(error)throw error;
  return normName(data?.display_name)||normName(user.user_metadata?.display_name);
}
async function start(user,p){
  const mode=p.mode,duration=Number(p.duration);
  if(!modes.has(mode)||!durations.has(duration))return fail("invalid-mode-or-duration");
  if(!await nameFor(user))return fail("set-profile-name-first",409);
  const since=new Date(Date.now()-3600000).toISOString();
  const {count,error:countError}=await admin.from("psycho101_ta_sessions").select("id",{count:"exact",head:true}).eq("user_id",user.id).gte("started_at",since);
  if(countError)throw countError;
  if((count||0)>=30)return fail("too-many-rounds-this-hour",429);
  const {data:bank,error}=await admin.from("psycho101_ta_questions").select("id,group_name").order("id");
  if(error)throw error;
  const ids=idsFor(bank||[],mode);
  if(ids.length<50)return fail("question-bank-not-ready",503);
  const time=Date.now();
  const {data:row,error:insertError}=await admin.from("psycho101_ta_sessions").insert({
    user_id:user.id,mode,duration,question_ids:ids,started_at:new Date(time).toISOString(),expires_at:new Date(time+duration*1000).toISOString()
  }).select("id").single();
  if(insertError)throw insertError;
  return send({ranked:true,session_id:row.id,question_ids:ids,remaining_ms:Math.max(0,time+duration*1000-Date.now()),mode,duration});
}
const better=(score,correct,old)=>!old||score>old.best_score||(score===old.best_score&&correct>old.best_correct);
async function finish(user,p){
  const sid=String(p.session_id||"");
  if(!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(sid))return fail("invalid-session");
  const {data:game,error}=await admin.from("psycho101_ta_sessions").select("*").eq("id",sid).eq("user_id",user.id).maybeSingle();
  if(error)throw error;
  if(!game)return fail("session-not-found",404);
  if(game.completed_at)return fail("already-submitted",409);
  const elapsed=Date.now()-new Date(game.started_at).getTime();
  if(elapsed<game.duration*1000-2500)return fail("round-still-running",409);
  if(elapsed>game.duration*1000+45000)return fail("round-expired",410);
  const answers=p.answers,ids=game.question_ids;
  if(!Array.isArray(answers)||!Array.isArray(ids)||answers.length>ids.length)return fail("invalid-answers");
  const {data:items,error:lookupError}=await admin.from("psycho101_ta_questions").select("id,group_name,answer,accepted_answers,answer_label,choices").in("id",ids);
  if(lookupError)throw lookupError;
  const bank=new Map((items||[]).map(q=>[q.id,q]));
  if(bank.size!==new Set(ids).size)return fail("question-bank-mismatch",503);
  let score=0,correct=0,streak=0,previous=-1000;
  for(let i=0;i<answers.length;i++){
    const x=answers[i];
    if(!x||!Number.isInteger(x.i)||x.i!==i||x.id!==ids[i]||!Number.isInteger(x.elapsedMs))return fail("answer-order-mismatch");
    if(x.elapsedMs<previous+200||x.elapsedMs<0||x.elapsedMs>game.duration*1000+1000)return fail("invalid-answer-timing");
    previous=x.elapsedMs;
    const question=bank.get(ids[i]);
    const good=question.group_name==="words_core"||question.group_name==="words_advanced"?
      verbalCorrect(x.value,question.choices,question.answer_label):
      (numeric(x.value)!==null&&Math.abs(numeric(x.value)-Number(question.answer))<1e-8);
    if(good){correct++;streak++;score+=10+Math.min(streak-1,5)*2;}
    else streak=0;
  }
  const now=new Date().toISOString();
  const {data:completed,error:updateError}=await admin.from("psycho101_ta_sessions").update({
    completed_at:now,score,correct,attempted:answers.length
  }).eq("id",sid).eq("user_id",user.id).is("completed_at",null).select("id");
  if(updateError)throw updateError;
  if(completed?.length!==1)return fail("already-submitted",409);
  const name=await nameFor(user);
  if(!name)return send({ranked:false,score,correct,attempted:answers.length,reason:"set-profile-name-first"});
  const {data:best,error:bestError}=await admin.from("psycho101_ta_bests").select("best_score,best_correct").eq("user_id",user.id).eq("mode",game.mode).eq("duration",game.duration).maybeSingle();
  if(bestError)throw bestError;
  if(better(score,correct,best)){
    const {error:writeError}=await admin.from("psycho101_ta_bests").upsert({
      user_id:user.id,mode:game.mode,duration:game.duration,display_name:name,best_score:score,best_correct:correct,updated_at:now
    },{onConflict:"user_id,mode,duration"});
    if(writeError)throw writeError;
  }
  const weekly=game.duration===60;
  if(weekly){
    const week_start=weekStart();
    const {data:old,error:weekError}=await admin.from("psycho101_ta_weekly").select("best_score,best_correct").eq("user_id",user.id).eq("week_start",week_start).eq("mode",game.mode).maybeSingle();
    if(weekError)throw weekError;
    if(better(score,correct,old)){
      const {error:writeError}=await admin.from("psycho101_ta_weekly").upsert({
        week_start,user_id:user.id,display_name:name,best_score:score,best_correct:correct,mode:game.mode,duration:game.duration,updated_at:now
      },{onConflict:"week_start,user_id,mode"});
      if(writeError)throw writeError;
    }
  }
  return send({ranked:true,score,correct,attempted:answers.length,weekly,mode:game.mode,duration:game.duration});
}
Deno.serve(async(req)=>{
  if(req.method==="OPTIONS")return new Response("ok",{headers:cors});
  if(req.method!=="POST")return fail("method-not-allowed",405);
  if(!url||!anon||!service)return fail("server-not-configured",503);
  const token=req.headers.get("Authorization")?.match(/^Bearer\s+(.+)$/i)?.[1];
  if(!token)return fail("sign-in-required",401);
  try{
    const {data,error}=await authClient.auth.getUser(token);
    if(error||!data?.user)return fail("invalid-login",401);
    let body;try{body=await req.json()}catch{return fail("invalid-json")}
    if(body?.action==="start")return await start(data.user,body);
    if(body?.action==="finish")return await finish(data.user,body);
    return fail("unknown-action");
  }catch(e){console.error("Psycho101 ranked score error",String(e));return fail("ranked-service-error",500)}
});
