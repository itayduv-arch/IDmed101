const CACHE_NAME='idmed101-flight-v1';
const CORE=[
  './',
  './index.html',
  './recon_2026a.js',
  './recon_2026b.js',
  './recon_2025b.js',
  './recon_2025_extra.js',
  './recon_2024a.js',
  './recon_2024b.js',
  './recon_2024c.js',
  './recon_2023.js',
  './recon_2022.js',
  './recon_2021_2019.js',
  './question_polish.js',
  './question_validation.js'
];

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
