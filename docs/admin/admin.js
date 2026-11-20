"use strict";
(()=>{
  const SUPABASE="https://vckdiflgdmxurxfmdyyq.supabase.co";
  const PUBLIC_KEY="sb_publishable_BaXTWJdR0gwXUJsJCyeZXA_s6G4vwN1";
  const API=SUPABASE+"/functions/v1/seednest-release-analytics/v1/analytics";
  const PKCE_KEY="seednest_analytics_pkce_v1";
  const PKCE_TIME="seednest_analytics_pkce_created_v1";
  const $=id=>document.getElementById(id);
  let token=null;
  let expiresAt=0;
  const now=()=>Date.now();
  function setStatus(msg){$("auth-status").textContent=msg;}
  function dataStatus(msg){$("data-status").textContent=msg;}
  function toBase64Url(bytes){let s="";for(const b of bytes)s+=String.fromCharCode(b);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"");}
  function keyClear(){try{sessionStorage.removeItem(PKCE_KEY);sessionStorage.removeItem(PKCE_TIME);}catch{}}
  async function startLogin(){
    try{
      if(!crypto.subtle || !crypto.getRandomValues)throw Error("HTTPS benötigt");
      $("login").disabled=true;
      const bytes=crypto.getRandomValues(new Uint8Array(48));
      const verifier=toBase64Url(bytes);
      const challenge=toBase64Url(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(verifier))));
      sessionStorage.setItem(PKCE_KEY,verifier);
      sessionStorage.setItem(PKCE_TIME,String(now()));
      const url=new URL(SUPABASE+"/auth/v1/authorize");
      url.searchParams.set("provider","github");
      url.searchParams.set("redirect_to",location.origin+location.pathname);
      url.searchParams.set("code_challenge",challenge);
      url.searchParams.set("code_challenge_method","s256");
      setStatus("Weiterleitung zu GitHub …");
      location.assign(url.href);
    }catch(e){$("login").disabled=false;setStatus("Anmeldung konnte nicht gestartet werden. "+(e?.message||""));}
  }
  async function finishLogin(code){
    const verifier=sessionStorage.getItem(PKCE_KEY);
    const started=Number(sessionStorage.getItem(PKCE_TIME));
    keyClear();
    if(!verifier || !started || now()-started>300000 || now()<started){
      throw Error("Anmeldung abgelaufen oder auf einem anderen Tab gestartet. Bitte erneut anmelden.");
    }
    if(code.length<5||code.length>2048)throw Error("Ungültiger OAuth-Rücksprung.");
    const response=await fetch(SUPABASE+"/auth/v1/token?grant_type=pkce",{
      method:"POST",headers:{"apikey":PUBLIC_KEY,"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify({auth_code:code,code_verifier:verifier}),cache:"no-store"
    });
    if(!response.ok)throw Error("GitHub-Anmeldung nicht abgeschlossen. OAuth-Einstellungen prüfen.");
    const info=await response.json();
    if(typeof info.access_token!=="string"||info.access_token.length<40)throw Error("Keine gültige Sitzung erhalten.");
    token=info.access_token;
    expiresAt=now()+Math.min(3600000,Math.max(1,Number(info.expires_in)||3600)*1000);
    setStatus("Identität bestätigt. Admin-Berechtigung wird serverseitig geprüft …");
    await refresh();
  }
  async function request(path="",options={}){
    if(!token||now()>expiresAt-5000)throw Error("Sitzung abgelaufen. Bitte erneut anmelden.");
    const response=await fetch(API+path,{
      ...options,cache:"no-store",headers:{"Authorization":"Bearer "+token,"apikey":PUBLIC_KEY,"Accept":"application/json",...(options.headers||{})}
    });
    const data=await response.json().catch(()=>({}));
    if(response.status===401||response.status===403){
      token=null;$("protected").classList.add("hidden");$("gate").classList.remove("hidden");
      throw Error(response.status===403?"Dieses GitHub-Konto ist nicht als SeedNest-Admin freigegeben.":"Die Anmeldung ist abgelaufen. Bitte erneut anmelden.");
    }
    if(!response.ok)throw Error(typeof data.error==="string"?data.error:"Serverabfrage fehlgeschlagen");
    return data;
  }
  function count(n){return Number(n||0).toLocaleString("de-DE");}
  function text(id,value){const e=$(id);if(e)e.textContent=String(value);}
  function elem(t,cls,value){const e=document.createElement(t);if(cls)e.className=cls;if(value!==undefined)e.textContent=String(value);return e;}
  function renderBars(releases){
    const root=$("release-bars");root.replaceChildren();
    if(!Array.isArray(releases)||!releases.length){root.append(elem("p","","Keine aktuellen Versionsdaten verfügbar."));return;}
    const max=Math.max(1,...releases.map(x=>Number(x.count)||0));
    for(const release of releases){
      const row=elem("div","bar-row"),name=elem("div","bar-label",release.tag);
      const bar=elem("div","bar-track"),fill=elem("div","bar-fill");
      fill.style.width=Math.max(0,Math.min(100,(Number(release.count)||0)*100/max))+"%";
      bar.append(fill);
      row.append(name,bar,elem("div","bar-value",count(release.count)));root.append(row);
    }
  }
  function svg(tag,props){const e=document.createElementNS("http://www.w3.org/2000/svg",tag);for(const [k,v] of Object.entries(props||{}))e.setAttribute(k,String(v));return e;}
  function renderChart(history){
    const root=$("history-chart");root.replaceChildren();
    if(!Array.isArray(history)||history.length<2){root.append(elem("p","","Mindestens zwei Tagesstände sind nötig, um einen Verlauf zu zeichnen."));return;}
    const list=history.slice(-60),values=list.map(x=>Math.max(0,Number(x.total)||0));
    const width=850,height=245,pad={l:52,r:20,t:20,b:40};
    const lo=Math.max(0,Math.min(...values)-Math.max(3,Math.ceil((Math.max(...values)-Math.min(...values))*.6)));
    const hi=Math.max(lo+2,Math.max(...values)+Math.max(3,Math.ceil((Math.max(...values)-lo)*.15)));
    const x=i=>pad.l+(width-pad.l-pad.r)*i/(list.length-1);
    const y=v=>pad.t+(height-pad.t-pad.b)*(hi-v)/(hi-lo);
    const chart=svg("svg",{viewBox:"0 0 "+width+" "+height,role:"img","aria-label":"Downloadverlauf der letzten "+list.length+" gespeicherten Tage"});
    for(let i=0;i<=4;i++){
      const v=lo+(hi-lo)*i/4,yy=y(v);
      chart.append(svg("line",{x1:pad.l,y1:yy,x2:width-pad.r,y2:yy,stroke:"var(--line)","stroke-width":"1"}));
      const lbl=svg("text",{x:pad.l-11,y:yy+4,"text-anchor":"end"});lbl.textContent=String(Math.round(v));chart.append(lbl);
    }
    const pts=list.map((s,i)=>[x(i),y(values[i])]);
    const d=pts.map(([xx,yy],i)=>(i?"L":"M")+xx.toFixed(1)+","+yy.toFixed(1)).join(" ");
    const area=d+" L"+pts[pts.length-1][0]+","+(height-pad.b)+" L"+pts[0][0]+","+(height-pad.b)+" Z";
    chart.append(svg("path",{d:area,fill:"var(--accent)",opacity:".12"}));
    chart.append(svg("path",{d,fill:"none",stroke:"var(--accent)","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}));
    for(const i of [0,list.length-1]){
      const label=svg("text",{x:x(i),y:height-8,"text-anchor":i===0?"start":"end"});
      label.textContent=String(list[i].date).slice(5);chart.append(label);
    }
    root.append(chart);
  }
  async function refresh(){
    $("refresh").disabled=true;
    try{
      const data=await request();
      $("gate").classList.add("hidden");$("protected").classList.remove("hidden");
      text("admin-welcome","Angemeldet: "+data.admin);
      const past=Array.isArray(data.history)?data.history:[];
      const releases=data.live?.releases||past.at(-1)?.releases||[];
      const total=data.live?.total??past.at(-1)?.total??0;
      text("total",count(total));
      text("current",count(releases[0]?.count||0));
      text("current-tag",releases[0]?.tag||"Noch keine Veröffentlichung");
      text("releases",count(releases.length));
      text("days",count(past.length));
      dataStatus(data.warning||"Live-Stand erfolgreich geladen · "+new Date().toLocaleString("de-DE"));
      renderChart(past);
      renderBars(releases);
    }catch(e){if(token){dataStatus(e.message||"Fehler");}else{setStatus(e.message||"Kein Zugriff");}}
    finally{$("refresh").disabled=false;}
  }
  async function snapshot(){
    $("snapshot").disabled=true;
    dataStatus("Tagesstand wird in der privaten Datenbank gesichert …");
    try{const res=await request("/snapshot",{method:"POST"});dataStatus("Tagesstand "+res.date+" gesichert.");await refresh();}
    catch(e){dataStatus(e.message||"Speichern fehlgeschlagen");}
    finally{$("snapshot").disabled=false;}
  }
  async function logout(){
    const old=token;token=null;expiresAt=0;keyClear();
    $("protected").classList.add("hidden");$("gate").classList.remove("hidden");
    setStatus("Abgemeldet.");
    if(old)fetch(SUPABASE+"/auth/v1/logout",{method:"POST",headers:{"apikey":PUBLIC_KEY,"Authorization":"Bearer "+old}}).catch(()=>{});
  }
  $("login").addEventListener("click",startLogin);
  $("refresh").addEventListener("click",refresh);
  $("snapshot").addEventListener("click",snapshot);
  $("logout").addEventListener("click",logout);
  (async function boot(){
    const url=new URL(location.href);
    const code=url.searchParams.get("code");
    const error=url.searchParams.get("error_description")||url.searchParams.get("error");
    if(!code&&!error)return;
    history.replaceState({},"",url.pathname);
    if(error){keyClear();setStatus("GitHub-Anmeldung abgebrochen oder fehlgeschlagen. Bitte erneut versuchen.");return;}
    try{setStatus("GitHub-Anmeldung wird abgeschlossen …");await finishLogin(code);}
    catch(e){token=null;setStatus(e.message||"Anmeldung fehlgeschlagen");}
  })();
})();