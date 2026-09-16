const CACHE_NAME='idpsycho101-v18';
const CORE=['./','./index.html','./version.json','./manifest.webmanifest'];

const DAILY_PREFLIGHT=`<script data-id101-daily-preflight>(function(){try{var k='psycho101-state-v3',s=JSON.parse(localStorage.getItem(k)||'{}'),d=new Date(),p=n=>String(n).padStart(2,'0'),today=d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate()),stored=s.dailyDate||s.lastStudyDate||null;if(stored!==today){s.todayAnswered=0;s.dailyDate=today;localStorage.setItem(k,JSON.stringify(s));}else if(!s.dailyDate){s.dailyDate=today;localStorage.setItem(k,JSON.stringify(s));}}catch(e){}})();<\/script>`;

const DAILY_RUNTIME=`<script data-id101-daily-runtime>(function(){
  function localDay(){const d=new Date(),p=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())}
  function stateDay(s){return s?.dailyDate||s?.lastStudyDate||null}
  function ensureDaily(){const today=localDay();if(state.dailyDate===today)return false;state.todayAnswered=0;state.dailyDate=today;localStorage.setItem(STORAGE_KEY,JSON.stringify(state));return true}
  nowDate=localDay;
  const originalUpdateStreak=updateStreak;
  updateStreak=function(){ensureDaily();return originalUpdateStreak()};
  const originalAnswerQuestion=answerQuestion;
  answerQuestion=function(choice){ensureDaily();return originalAnswerQuestion(choice)};
  const originalMergeStates=mergeStates;
  mergeStates=function(local,remote){
    const out=originalMergeStates(local,remote);if(!remote)return out;
    const today=localDay(),ld=stateDay(local),rd=stateDay(remote);
    out.dailyDate=today;
    if(ld===today&&rd===today)out.todayAnswered=Math.max(local.todayAnswered||0,remote.todayAnswered||0);
    else if(ld===today)out.todayAnswered=local.todayAnswered||0;
    else if(rd===today)out.todayAnswered=remote.todayAnswered||0;
    else out.todayAnswered=0;
    return out;
  };
  ensureDaily();
  function resume(){if(ensureDaily()&&typeof render==='function')render()}
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)resume()});
  window.addEventListener('focus',resume);
})();<\/script>`;

function injectDailyFix(html){
  if(html.includes('data-id101-daily-preflight'))return html;
  html=html.replace(/<body([^>]*)>/i,'<body$1>'+DAILY_PREFLIGHT);
  return html.replace(/<\/body>/i,DAILY_RUNTIME+'</body>');
}

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(async response=>{
      if(!response.ok)return response;
      const html=injectDailyFix(await response.text());
      const fixed=new Response(html,{status:response.status,statusText:response.statusText,headers:response.headers});
      caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',fixed.clone()));
      return fixed;
    }).catch(async()=>{
      const cached=await caches.match('./index.html');if(!cached)return Response.error();
      const html=injectDailyFix(await cached.text());return new Response(html,{status:cached.status,statusText:cached.statusText,headers:cached.headers});
    }));return;
  }
  event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request)));
});
