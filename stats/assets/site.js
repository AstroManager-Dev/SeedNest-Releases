"use strict";
(function(){
  const root = document.documentElement;
  const themes = new Set(["green","purple","light"]);
  let theme = "green";
  try { const cached = window.localStorage.getItem("seednest-site-theme"); if (themes.has(cached)) theme = cached; } catch {}
  function setTheme(next) {
    if (!themes.has(next)) return;
    root.dataset.theme = next;
    for (const button of document.querySelectorAll("[data-set-theme]")) {
      button.setAttribute("aria-pressed", String(button.dataset.setTheme === next));
    }
    try { window.localStorage.setItem("seednest-site-theme", next); } catch {}
  }
  document.querySelectorAll("[data-set-theme]").forEach(b => b.addEventListener("click",()=>setTheme(b.dataset.setTheme)));
  setTheme(theme);
  const menu = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-nav");
  if (menu && nav) {
    menu.addEventListener("click",() => {
      const opened = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(opened));
      menu.setAttribute("aria-label", opened ? "Menü schließen" : "Menü öffnen");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded","false");
    }));
  }
  const release = document.getElementById("release-name");
  if (!release) return;
  const prefix = "https://github.com/AstroManager-Dev/SeedNest-Releases/releases/download/";
  (async () => {
    try {
      const response = await fetch("./latest.json", {cache:"no-store"});
      if (!response.ok) throw Error("Manifest nicht erreichbar");
      const m = await response.json();
      if (m.schemaVersion !== 1 || m.applicationId !== "de.seednest.app" ||
          !Number.isSafeInteger(m.versionCode) || m.versionCode < 1 ||
          !Number.isSafeInteger(m.size) || m.size < 1 ||
          typeof m.tag !== "string" || !/^[A-Za-z0-9][A-Za-z0-9._-]{0,79}$/.test(m.tag) ||
          m.tag !== m.versionName || typeof m.sha256 !== "string" || !/^[a-f0-9]{64}$/i.test(m.sha256)) throw Error("Manifest ungültig");
      const official = prefix + encodeURIComponent(m.tag) + "/SeedNest-Native-" + encodeURIComponent(m.tag) + ".apk";
      if (m.apkUrl !== official) throw Error("Unbekannte Downloadquelle");
      release.textContent = m.versionName;
      const size = document.getElementById("release-size");
      if (size) size.textContent = (m.size / 1000000).toFixed(1).replace(".", ",") + " MB";
      for (const id of ["download-primary","download-bottom"]) {
        const link = document.getElementById(id);
        if (link) { link.href = official; link.rel = "noopener noreferrer"; }
      }
      const notes = document.getElementById("release-notes");
      if (notes) notes.textContent = "Aktuelle Veröffentlichung: " + m.tag + " · " + (m.size / 1000000).toFixed(1) + " MB · Prüfsumme verfügbar.";
    } catch {
      const notes = document.getElementById("release-notes");
      if (notes) notes.textContent = "Bei Problemen bitte die offizielle GitHub-Releases-Seite verwenden.";
    }
  })();
})();