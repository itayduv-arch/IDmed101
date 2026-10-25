const CACHE_NAME='id101-flight-v24';
const SHELL=[
  './',
  './index.html',
  './manifest.webmanifest',
  './push-reminders.js',
  './idmed101/manifest.webmanifest',
  './psycho101/index.html',
  './psycho101/manifest.webmanifest',
  './psycho101/version.json',
  './idmed101/index.html'
];
const CORE=[
  ...SHELL,
  './psycho101/',
  './psycho101/official_quant_expansion.js',
  './psycho101/daily_expansion_20260918.js',
  './psycho101/advanced_expansion_20260922.js',
  './psycho101/daily_expansion_20260930.js',
  './psycho101/daily_expansion_20260930b.js',
  './psycho101/daily_expansion_20261001.js',
  './psycho101/daily_expansion_20261003.js',
  './psycho101/daily_expansion_20261004.js',
  './psycho101/daily_expansion_20261005.js',
  './psycho101/daily_expansion_20261007.js',
  './psycho101/daily_expansion_20261010_quality.js',
  './psycho101/daily_expansion_20261011.js',
  './psycho101/daily_expansion_20261013.js',
  './psycho101/powers_expansion_20261014.js',
  './psycho101/timed_shortcuts_20261021.js',
  './psycho101/short_method_annotations_20261021.js',
  './psycho101/powers_sum_20261022.js',
  './psycho101/percent_fractions_20261025.js',
  './idmed101/',
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
    if(response.ok){
      await cache.put(url,response.clone());
      return {url,ok:true};
    }
    return {url,ok:false,status:response.status};
  }catch(e){
    return {url,ok:false,error:String(e)};
  }
}

async function cacheSequential(urls){
  const cache=await caches.open(CACHE_NAME);
  const results=[];
  for(const url of urls)results.push(await cacheOne(cache,url));
  return results;
}

async function verifyAll(){
  const cache=await caches.open(CACHE_NAME);
  const results=[];
  for(const url of CORE){
    const hit=await cache.match(url,{ignoreSearch:true});
    results.push({url,ok:!!hit});
  }
  return {
    ok:results.filter(x=>x.ok).length,
    total:results.length,
    failed:results.filter(x=>!x.ok).map(x=>x.url),
    ready:results.every(x=>x.ok)
  };
}

async function prepareAll(){
  await cacheSequential(CORE);
  return verifyAll();
}

self.addEventListener('install',event=>{
  event.waitUntil(cacheSequential(SHELL).then(()=>self.skipWaiting()));
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
    event.waitUntil(prepareAll().then(result=>event.ports?.[0]?.postMessage(result)));
  }
  if(event.data?.type==='VERIFY_OFFLINE'){
    event.waitUntil(verifyAll().then(result=>event.ports?.[0]?.postMessage(result)));
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
          const key=url.pathname.includes('/psycho101/')?'./psycho101/index.html':url.pathname.includes('/idmed101/')?'./idmed101/index.html':'./index.html';
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


self.addEventListener('push',event=>{
  let data={};
  try{data=event.data?event.data.json():{}}catch(e){
    try{data={body:event.data?.text?.()||''}}catch{}
  }
  const title=data.title||'ID101';
  const options={
    body:data.body||'הגיע הזמן לתרגול היומי',
    tag:'id101-daily-'+(data.app||'app'),
    renotify:false,
    data:{url:data.url||'./'}
  };
  event.waitUntil(self.registration.showNotification(title,options));
});

self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const target=event.notification.data?.url||'./';
  event.waitUntil((async()=>{
    const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    for(const client of windows){
      try{
        const u=new URL(client.url);
        const t=new URL(target,self.location.origin);
        if(u.origin===t.origin && ((t.pathname.includes('/psycho101/')&&u.pathname.includes('/psycho101/'))||(t.pathname.includes('/idmed101/')&&u.pathname.includes('/idmed101/')))){
          if('navigate' in client)await client.navigate(t.href);
          return client.focus();
        }
      }catch{}
    }
    return self.clients.openWindow(target);
  })());
});
