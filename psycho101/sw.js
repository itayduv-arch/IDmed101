const CACHE_NAME='idpsycho101-v21';
const CORE=['./','./index.html','./version.json','./manifest.webmanifest'];
const FIX_VERSION=3;

const DAILY_PREFLIGHT=`<script data-id101-daily-preflight>(function(){try{var k='psycho101-state-v3',s=JSON.parse(localStorage.getItem(k)||'{}'),d=new Date(),p=n=>String(n).padStart(2,'0'),today=d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate()),migrate=(s.dailyResetFixVersion||0)<3;if(migrate||s.dailyDate!==today){s.todayAnswered=0;s.dailyDate=today;s.dailyResetFixVersion=3;localStorage.setItem(k,JSON.stringify(s));}}catch(e){}})();<\/script>`;

const DAILY_RUNTIME=`<script data-id101-daily-runtime>(function(){
  function localDay(){const d=new Date(),p=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+p(d.getMonth()+1)+'-'+p(d.getDate())}
  function ensureDaily(){const today=localDay(),migrate=(state.dailyResetFixVersion||0)<3;if(!migrate&&state.dailyDate===today)return false;state.todayAnswered=0;state.dailyDate=today;state.dailyResetFixVersion=3;localStorage.setItem(STORAGE_KEY,JSON.stringify(state));return true}
  nowDate=localDay;
  const originalUpdateStreak=updateStreak;
  updateStreak=function(){ensureDaily();return originalUpdateStreak()};
  const originalAnswerQuestion=answerQuestion;
  answerQuestion=function(choice){ensureDaily();return originalAnswerQuestion(choice)};
  const originalMergeStates=mergeStates;
  mergeStates=function(local,remote){
    const out=originalMergeStates(local,remote);const today=localDay();
    const localTrusted=(local?.dailyResetFixVersion||0)>=3&&local?.dailyDate===today;
    const remoteTrusted=(remote?.dailyResetFixVersion||0)>=3&&remote?.dailyDate===today;
    out.dailyDate=today;out.dailyResetFixVersion=3;
    if(localTrusted&&remoteTrusted)out.todayAnswered=Math.max(local.todayAnswered||0,remote.todayAnswered||0);
    else if(localTrusted)out.todayAnswered=local.todayAnswered||0;
    else if(remoteTrusted)out.todayAnswered=remote.todayAnswered||0;
    else out.todayAnswered=0;
    return out;
  };
  const changed=ensureDaily();
  if(changed&&typeof render==='function')setTimeout(()=>render(),0);
  function resume(){if(ensureDaily()&&typeof render==='function')render()}
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)resume()});
  window.addEventListener('focus',resume);
  window.addEventListener('pageshow',resume);
})();<\/script>`;

function injectDailyFix(html){
  html=html.replace(/<script data-id101-daily-preflight>[\s\S]*?<\/script>/g,'').replace(/<script data-id101-daily-runtime>[\s\S]*?<\/script>/g,'');
  html=html.replace(/<body([^>]*)>/i,'<body$1>'+DAILY_PREFLIGHT);
  return html.replace(/<\/body>/i,DAILY_RUNTIME+'</body>');
}
function cleanHeaders(headers){const h=new Headers(headers);h.delete('content-length');h.delete('content-encoding');h.set('cache-control','no-store, no-cache, must-revalidate');return h}

self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);if(url.origin!==self.location.origin)return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(async response=>{
      if(!response.ok)return response;const html=injectDailyFix(await response.text());
      const fixed=new Response(html,{status:response.status,statusText:response.statusText,headers:cleanHeaders(response.headers)});
      caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',fixed.clone()));return fixed;
    }).catch(async()=>{const cached=await caches.match('./index.html');if(!cached)return Response.error();const html=injectDailyFix(await cached.text());return new Response(html,{status:cached.status,statusText:cached.statusText,headers:cleanHeaders(cached.headers)})}));return;
  }
  event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request)));
});
