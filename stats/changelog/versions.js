"use strict";
(async()=>{
 const target=document.getElementById("version-list");
 if(!target)return;
 const repo="AstroManager-Dev/SeedNest-Releases";
 function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
 function date(s){const d=new Date(s);return Number.isNaN(d.getTime())?"Datum unbekannt":d.toLocaleDateString("de-DE",{day:"2-digit",month:"long",year:"numeric"});}
 function safeTag(tag){return /^[A-Za-z0-9][A-Za-z0-9._-]{0,79}$/.test(tag)}
 try{
   const res=await fetch("https://api.github.com/repos/"+repo+"/releases?per_page=50",{headers:{"Accept":"application/vnd.github+json"}});
   if(!res.ok)throw Error("GitHub gerade nicht erreichbar");
   const list=await res.json();
   if(!Array.isArray(list))throw Error("Unbekanntes Format");
   const releases=list.filter(r=>!r.draft&&typeof r.tag_name==="string"&&safeTag(r.tag_name)&&Array.isArray(r.assets)&&r.assets.some(a=>typeof a.name==="string"&&a.name.endsWith(".apk")));
   if(!releases.length)throw Error("Keine Releases");
   const fragment=document.createDocumentFragment();
   for(const [i,r] of releases.entries()){
     const article=el("article","version");
     const head=el("div","version-head");
     const title=el("div");
     title.append(el("span","release-chip",i===0?"Aktuell veröffentlichte Alpha":"Archiv"));
     title.append(el("h2","",r.tag_name));
     head.append(title,el("span","version-date",date(r.published_at)));
     article.append(head);
     const body=typeof r.body==="string"?r.body:"";
     const summary=body.split("\n").map(x=>x.trim()).filter(x=>x.startsWith("- ")).slice(0,3).map(x=>x.slice(2)).join(" · ");
     article.append(el("p","version-preview",summary||"Release Notes und signierte APK-Dateien auf GitHub verfügbar."));
     const actions=el("div","version-actions");
     const releaseUrl="https://github.com/"+repo+"/releases/tag/"+encodeURIComponent(r.tag_name);
     const more=el("a","","Release & Details ansehen ↗");more.href=releaseUrl;more.rel="noopener noreferrer";actions.append(more);
     const apk=r.assets.find(x=>x.name==="SeedNest-Native-"+r.tag_name+".apk");
     const expected="https://github.com/"+repo+"/releases/download/"+encodeURIComponent(r.tag_name)+"/SeedNest-Native-"+encodeURIComponent(r.tag_name)+".apk";
     if(apk&&apk.browser_download_url===expected){const download=el("a","","APK herunterladen ↓");download.href=expected;download.rel="noopener noreferrer";actions.prepend(download);}
     article.append(actions);
     if(body.trim()){
       const d=el("details"),s=el("summary","","Ausführliche Änderungen anzeigen");
       d.append(s,el("pre","",body));article.append(d);
     }
     fragment.append(article);
   }
   target.replaceChildren(fragment);
 }catch{ /* Accessible pre-rendered fallback retains a verified release link. */ }
})();