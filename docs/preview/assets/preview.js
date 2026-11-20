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
// SeedNest 3D cover-flow gallery. The original images are never modified.
(() => {
 const carousel=document.getElementById("app-gallery"),track=document.getElementById("gallery-track");
 if(!carousel||!track)return;
 const slides=[...track.querySelectorAll(".screenshot-card")],count=slides.length;
 const prev=document.getElementById("gallery-prev"),next=document.getElementById("gallery-next"),pause=document.getElementById("gallery-pause"),current=document.getElementById("gallery-current"),dots=document.getElementById("gallery-dots");
 if(!count)return;
 carousel.classList.add("coverflow");
 let index=0,paused=false,hover=false,focus=false,visible=true,touchX=null;
 const reduced=window.matchMedia("(prefers-reduced-motion: reduce)");
 const dotButtons=slides.map((_,i)=>{const b=document.createElement("button");b.className="gallery-dot";b.type="button";b.setAttribute("aria-label","Screenshot "+(i+1)+" anzeigen");b.addEventListener("click",()=>go(i));dots?.append(b);return b;});
 function go(i){
  index=(i+count)%count;
  const compact=window.innerWidth<650,step=compact?112:190;
  slides.forEach((slide,n)=>{
   let d=n-index;if(d>count/2)d-=count;if(d< -count/2)d+=count;
   const a=Math.abs(d),show=a<=2;
   slide.style.setProperty("--slide-x",(d*step)+"px");
   slide.style.setProperty("--slide-rotate",(d===0?0:d<0?48:-48)+"deg");
   slide.style.setProperty("--slide-scale",String(a===0?1:a===1?.78:.59));
   slide.style.setProperty("--slide-z",String(a===0?0:a===1?-95:-180)+"px");
   slide.style.setProperty("--slide-opacity",show?"1":"0");
   slide.style.zIndex=String(20-a);
   slide.classList.toggle("is-active",d===0);
   slide.setAttribute("aria-hidden",String(!show));
   const link=slide.querySelector("a");if(link)link.tabIndex=show?0:-1;
  });
  if(current)current.textContent=String(index+1).padStart(2,"0");
  dotButtons.forEach((b,n)=>b.setAttribute("aria-current",String(n===index)));
 }
 prev?.addEventListener("click",()=>go(index-1));next?.addEventListener("click",()=>go(index+1));
 pause?.addEventListener("click",()=>{paused=!paused;pause.textContent=paused?"Fortsetzen":"Pause";pause.setAttribute("aria-pressed",String(paused));});
 carousel.addEventListener("mouseenter",()=>hover=true);carousel.addEventListener("mouseleave",()=>hover=false);
 carousel.addEventListener("focusin",()=>focus=true);carousel.addEventListener("focusout",e=>{if(!carousel.contains(e.relatedTarget))focus=false;});
 carousel.addEventListener("keydown",e=>{if(e.key==="ArrowLeft"){e.preventDefault();go(index-1);}else if(e.key==="ArrowRight"){e.preventDefault();go(index+1);}});
 carousel.addEventListener("touchstart",e=>{touchX=e.changedTouches[0]?.clientX??null;},{passive:true});
 carousel.addEventListener("touchend",e=>{if(touchX===null)return;const dx=(e.changedTouches[0]?.clientX??touchX)-touchX;if(Math.abs(dx)>35)go(index+(dx<0?1:-1));touchX=null;},{passive:true});
 if("IntersectionObserver" in window)new IntersectionObserver(es=>visible=es[0]?.isIntersecting??false,{threshold:.15}).observe(carousel);
 window.addEventListener("resize",()=>go(index));go(0);
 setInterval(()=>{if(!paused&&!hover&&!focus&&visible&&!document.hidden&&!reduced.matches)go(index+1);},5000);
})();
