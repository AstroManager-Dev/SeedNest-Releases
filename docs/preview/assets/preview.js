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
// Rotating gallery: accessible manual controls, automatic pause for reduced motion and interaction.
(() => {
 const carousel=document.getElementById("app-gallery"),track=document.getElementById("gallery-track");
 if(!carousel||!track)return;
 const slides=[...track.querySelectorAll(".screenshot-card")],count=slides.length;
 const prev=document.getElementById("gallery-prev"),next=document.getElementById("gallery-next"),pause=document.getElementById("gallery-pause"),current=document.getElementById("gallery-current"),dots=document.getElementById("gallery-dots");
 if(!count)return;
 let index=0,paused=false,hover=false,focus=false,visible=true;
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
 const dotsButtons=slides.map((slide,i)=>{const b=document.createElement("button");b.className="gallery-dot";b.type="button";b.setAttribute("aria-label","Screenshot "+(i+1)+" anzeigen");b.addEventListener("click",()=>go(i));dots.append(b);return b;});
 function perView(){return window.innerWidth<=390?1:window.innerWidth<=700?2:window.innerWidth<=1050?3:4;}
 function go(i){index=(i+count)%count;const shown=Math.min(index,Math.max(0,count-perView()));const target=slides[shown];track.style.transform="translateX(-"+target.offsetLeft+"px)";if(current)current.textContent=String(index+1).padStart(2,"0");dotsButtons.forEach((b,n)=>b.setAttribute("aria-current",String(n===index)));}
 prev?.addEventListener("click",()=>go(index-1));next?.addEventListener("click",()=>go(index+1));
 pause?.addEventListener("click",()=>{paused=!paused;pause.textContent=paused?"Fortsetzen":"Pause";pause.setAttribute("aria-pressed",String(paused));});
 carousel.addEventListener("mouseenter",()=>hover=true);carousel.addEventListener("mouseleave",()=>hover=false);
 carousel.addEventListener("focusin",()=>focus=true);carousel.addEventListener("focusout",e=>{if(!carousel.contains(e.relatedTarget))focus=false;});
 carousel.addEventListener("keydown",e=>{if(e.key==="ArrowLeft"){e.preventDefault();go(index-1);}if(e.key==="ArrowRight"){e.preventDefault();go(index+1);}});
 let touchX=null;carousel.addEventListener("touchstart",e=>{touchX=e.changedTouches[0]?.clientX??null;},{passive:true});carousel.addEventListener("touchend",e=>{if(touchX===null)return;const delta=(e.changedTouches[0]?.clientX??touchX)-touchX;if(Math.abs(delta)>45)go(index+(delta<0?1:-1));touchX=null;},{passive:true});
 if("IntersectionObserver" in window){const observer=new IntersectionObserver(entries=>{visible=entries[0]?.isIntersecting??false;},{threshold:.2});observer.observe(carousel);}
 window.addEventListener("resize",()=>go(index));window.addEventListener("load",()=>go(index));go(0);
 setInterval(()=>{if(!paused&&!hover&&!focus&&visible&&!document.hidden&&!reduced.matches)go(index+1);},4500);
})();
