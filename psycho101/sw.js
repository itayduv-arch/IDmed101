const CACHE_NAME='idpsycho101-v29';
const CORE=['./','./index.html','./version.json','./manifest.webmanifest','./official_quant_expansion.js','./daily_expansion_20260918.js','./advanced_expansion_20260922.js'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;

  if(event.request.mode==='navigate'){
    event.respondWith(
      fetch(event.request,{cache:'no-store'})
        .then(response=>{
          if(response.ok)caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',response.clone()));
          return response;
        })
        .catch(()=>caches.match('./index.html',{ignoreSearch:true}))
    );
    return;
  }

  event.respondWith(
    fetch(event.request,{cache:'no-store'})
      .then(response=>{
        if(response.ok)caches.open(CACHE_NAME).then(cache=>cache.put(event.request,response.clone()));
        return response;
      })
      .catch(()=>caches.match(event.request,{ignoreSearch:true}))
  );
});
