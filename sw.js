const CACHE_NAME='id101-flight-v4';
const CORE=[
  './',
  './index.html',
  './manifest.webmanifest',
  './psycho101/',
  './psycho101/index.html',
  './psycho101/manifest.webmanifest',
  './psycho101/version.json',
  './psycho101/official_quant_expansion.js',
  './psycho101/daily_expansion_20260918.js',
  './psycho101/advanced_expansion_20260922.js',
  './idmed101/',
  './idmed101/index.html',
  './idmed101/recon_2026a.js',
  './idmed101/recon_2026b.js',
  './idmed101/recon_2025b.js',
  './idmed101/recon_2025_extra.js',
  './idmed101/recon_2024a.js',
  './idmed101/recon_2024b.js',
  './idmed101/recon_2024c.js',
  './idmed101/recon_2023.js',
  './idmed101/recon_2022.js',
  './idmed101/recon_2021_2019.js',
  './idmed101/question_polish.js',
  './idmed101/question_validation.js'
];

async function cacheOne(cache,url){
  try{
    const response=await fetch(url,{cache:'reload'});
    if(response.ok){await cache.put(url,response.clone());return {url,ok:true};}
    return {url,ok:false,status:response.status};
  }catch(e){return {url,ok:false,error:String(e)}}
}
async function prepareAll(){
  const cache=await caches.open(CACHE_NAME);
  const results=await Promise.all(CORE.map(url=>cacheOne(cache,url)));
  return {ok:results.filter(x=>x.ok).length,total:results.length,failed:results.filter(x=>!x.ok).map(x=>x.url)};
}

self.addEventListener('install',event=>{
  event.waitUntil(prepareAll().then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME&&(k.startsWith('id101-flight-')||k.startsWith('idpsycho101-')||k.startsWith('idmed101-'))).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('message',event=>{
  if(event.data?.type==='PREPARE_OFFLINE'){
    event.waitUntil(
      prepareAll().then(result=>{
        if(event.ports?.[0])event.ports[0].postMessage(result);
      })
    );
  }
});
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  const rootPath=new URL('./',self.location.href).pathname;
  if(!url.pathname.startsWith(rootPath))return;

  if(event.request.mode==='navigate'){
    event.respondWith((async()=>{
      try{
        const response=await fetch(event.request,{cache:'no-store'});
        if(response.ok){
          const cache=await caches.open(CACHE_NAME);
          const path=url.pathname;
          const key=path.includes('/psycho101/')?'./psycho101/index.html':path.includes('/idmed101/')?'./idmed101/index.html':'./index.html';
          await cache.put(key,response.clone());
        }
        return response;
      }catch(e){
        const cache=await caches.open(CACHE_NAME);
        if(url.pathname.includes('/psycho101/'))return (await cache.match('./psycho101/index.html',{ignoreSearch:true}))||(await cache.match('./psycho101/',{ignoreSearch:true}));
        if(url.pathname.includes('/idmed101/'))return (await cache.match('./idmed101/index.html',{ignoreSearch:true}))||(await cache.match('./idmed101/',{ignoreSearch:true}));
        return (await cache.match('./index.html',{ignoreSearch:true}))||(await cache.match('./',{ignoreSearch:true}));
      }
    })());
    return;
  }

  event.respondWith((async()=>{
    try{
      const response=await fetch(event.request,{cache:'no-store'});
      if(response.ok){
        const cache=await caches.open(CACHE_NAME);
        await cache.put(event.request,response.clone());
      }
      return response;
    }catch(e){
      const cache=await caches.open(CACHE_NAME);
      return cache.match(event.request,{ignoreSearch:true});
    }
  })());
});
