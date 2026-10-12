(function(){
  const VAPID_PUBLIC_KEY="BFW2pQsbHHYc5MftrCWGAm8DdYpPF1r6cerERW2icvDd_S1vnfFeirTnusp4-MPHeDaW1LLUa-1eCmAjkmCLoPQ";
  const STORAGE_KEY="id101-push-settings-v1";

  function settings(){
    try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}catch{return{}}
  }
  function saveSettings(all){localStorage.setItem(STORAGE_KEY,JSON.stringify(all))}
  function localTime(app){return settings()?.[app]?.time||"19:00"}
  function localEnabled(app){return !!settings()?.[app]?.enabled}
  function setLocal(app,patch){
    const all=settings();
    all[app]={...(all[app]||{}),...patch};
    saveSettings(all);
  }
  function isIos(){
    return /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      (navigator.platform==="MacIntel" && navigator.maxTouchPoints>1);
  }
  function standalone(){
    return window.matchMedia?.("(display-mode: standalone)")?.matches || navigator.standalone===true;
  }
  function supported(){
    return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window;
  }
  function b64ToBytes(base64String){
    const padding="=".repeat((4-base64String.length%4)%4);
    const base64=(base64String+padding).replace(/-/g,"+").replace(/_/g,"/");
    const raw=atob(base64);
    return Uint8Array.from([...raw].map(c=>c.charCodeAt(0)));
  }
  async function ensureSubscription(){
    if(!supported())throw new Error("הדפדפן הזה לא תומך בהתראות Push.");
    if(isIos()&&!standalone())throw new Error("באייפון צריך קודם להוסיף את האפליקציה למסך הבית, לפתוח אותה משם ואז להפעיל התראות.");
    let permission=Notification.permission;
    if(permission!=="granted")permission=await Notification.requestPermission();
    if(permission!=="granted")throw new Error("לא ניתנה הרשאה להתראות.");
    const reg=await navigator.serviceWorker.ready;
    let sub=await reg.pushManager.getSubscription();
    if(!sub){
      sub=await reg.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:b64ToBytes(VAPID_PUBLIC_KEY)
      });
    }
    return sub;
  }
  async function enable({app,userId,supabase,reminderTime}){
    if(!userId||!supabase)throw new Error("צריך להתחבר לחשבון כדי להפעיל תזכורות.");
    const sub=await ensureSubscription();
    const json=sub.toJSON();
    if(!json.keys?.p256dh||!json.keys?.auth)throw new Error("לא הצלחנו לקבל מפתחות Push מהמכשיר.");
    const timezone=Intl.DateTimeFormat().resolvedOptions().timeZone||"Asia/Jerusalem";
    const time=(reminderTime||"19:00").slice(0,5);
    const row={
      user_id:userId,
      app,
      endpoint:sub.endpoint,
      p256dh:json.keys.p256dh,
      auth:json.keys.auth,
      reminder_time:time+":00",
      timezone,
      enabled:true,
      updated_at:new Date().toISOString()
    };
    const {error}=await supabase.from("id101_push_subscriptions").upsert(row,{onConflict:"user_id,app,endpoint"});
    if(error)throw error;
    setLocal(app,{enabled:true,time});
    try{
      const reg=await navigator.serviceWorker.ready;
      await reg.showNotification(app==="psycho101"?"Psycho101 - התזכורות הופעלו":"IDmed101 - התזכורות הופעלו",{
        body:"נזכיר לך רק אם עדיין לא השלמת את היעד היומי.",
        tag:"id101-reminder-enabled-"+app,
        data:{url:location.href}
      });
    }catch{}
    return {enabled:true,time,timezone};
  }
  async function disable({app,userId,supabase}){
    if(!userId||!supabase)throw new Error("צריך להתחבר לחשבון.");
    const reg=await navigator.serviceWorker.ready;
    const sub=await reg.pushManager.getSubscription();
    let query=supabase.from("id101_push_subscriptions").delete().eq("user_id",userId).eq("app",app);
    if(sub)query=query.eq("endpoint",sub.endpoint);
    const {error}=await query;
    if(error)throw error;
    setLocal(app,{enabled:false});
    return {enabled:false};
  }
  async function refresh({app,userId,supabase}){
    if(!userId||!supabase)return {enabled:false,time:localTime(app)};
    const reg=await navigator.serviceWorker.ready;
    const sub=await reg.pushManager.getSubscription();
    if(!sub)return {enabled:false,time:localTime(app)};
    const {data,error}=await supabase.from("id101_push_subscriptions")
      .select("enabled,reminder_time,timezone")
      .eq("user_id",userId).eq("app",app).eq("endpoint",sub.endpoint).maybeSingle();
    if(error)throw error;
    const enabled=!!data?.enabled;
    const time=(data?.reminder_time||localTime(app)).slice(0,5);
    setLocal(app,{enabled,time});
    return {enabled,time,timezone:data?.timezone};
  }

  window.ID101Push={enable,disable,refresh,localTime,localEnabled,supported,isIos,standalone};
})();