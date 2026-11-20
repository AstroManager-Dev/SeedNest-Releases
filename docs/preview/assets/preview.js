"use strict";
(() => {
 const root=document.documentElement, button=document.getElementById("theme-toggle"),label=document.getElementById("theme-label");
 const mq=window.matchMedia("(prefers-color-scheme: dark)");
 const modes=["system","light","dark"]; let mode="system";
 try {const saved=localStorage.getItem("seednest-preview-theme-v2");if(modes.includes(saved))mode=saved;}catch{}
 function render(){
  const dark=mode==="system"?mq.matches:mode==="dark";
  root.dataset.theme=dark?"green":"light";root.dataset.bsTheme=dark?"dark":"light";
  if(label)label.textContent=mode==="system"?"System":mode==="dark"?"Dunkel":"Hell";
  if(button)button.setAttribute("aria-label","Farbschema: "+(label?.textContent||mode)+". Tippen zum Wechseln");
 }
 button?.addEventListener("click",()=>{mode=modes[(modes.indexOf(mode)+1)%modes.length];try{localStorage.setItem("seednest-preview-theme-v2",mode);}catch{}render();});
 mq.addEventListener?.("change",()=>{if(mode==="system")render();});render();
 const notes=document.getElementById("release-notes");
 (async()=>{
  try{
   const res=await fetch("../latest.json",{cache:"no-store"});if(!res.ok)throw Error("Manifest");
   const m=await res.json();
   const prefix="https://github.com/AstroManager-Dev/SeedNest-Releases/releases/download/";
   if(m.schemaVersion!==1||m.applicationId!=="de.seednest.app"||!Number.isSafeInteger(m.versionCode)||m.versionCode<1||!Number.isSafeInteger(m.size)||m.size<1||typeof m.tag!=="string"||!/^[A-Za-z0-9][A-Za-z0-9._-]{0,79}$/.test(m.tag)||m.versionName!==m.tag||typeof m.sha256!=="string"||!/^[a-f0-9]{64}$/i.test(m.sha256)||m.apkUrl!==prefix+encodeURIComponent(m.tag)+"/SeedNest-Native-"+encodeURIComponent(m.tag)+".apk")throw Error("Ungültige Release-Metadaten");
   if(notes)notes.textContent="Öffentliche Version: "+m.tag+" · Android 8.0+ · Download ausschließlich über die offizielle Seite.";
  }catch{if(notes)notes.textContent="Release-Informationen derzeit nicht verifizierbar. Bitte die offizielle Downloadseite prüfen.";}
 })();
})();