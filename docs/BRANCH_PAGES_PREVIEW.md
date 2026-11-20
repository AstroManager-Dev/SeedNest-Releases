# SeedNest Pages – Branch-Publishing vorbereitet (2026-11-20)

**Status:** Dateisatz im `main/docs/` vorbereitet und in GitHub verifiziert. **Noch kein bestätigtes Deployment.**

## Warum
Die bisherige GitHub-Pages-Site wurde per Workflow aus `stats/` deployed. Der Nutzer hat GitHub Actions deaktiviert. Die neue `stats/preview/` ist dadurch nicht öffentlich erreichbar (404). GitHub Pages Branch-Publishing bietet nur `/(root)` und `/docs`, nicht `/stats`.

## Bereitgestellter Dateisatz
- `docs/index.html` plus `docs/assets/` – bisherige öffentliche Startseite unverändert übernommen
- `docs/download/`, `docs/changelog/`, `docs/admin/` – bestehende Unterseiten und Skripte
- `docs/latest.json` – Kopie des öffentlichen Release-Manifests aus Repo-Root
- `docs/preview/` – isolierte Bootstrap-5-Vorschau mit eigenen CSS-/JS-Dateien
- `docs/.nojekyll` – keine Jekyll-Verarbeitung

Die Preview zeigt ein deutliches Banner, ist mit `noindex,nofollow` gekennzeichnet, hat deaktivierte APK-Buttons und enthält keine neuen privaten Nutzerdaten. Keine APKs, Keystores, Paketkennungen oder Release-Workflows verändert.

## Noch erforderlich (GitHub Settings → Pages)
1. Source: **Deploy from a branch**
2. Branch: **main**
3. Folder: **/docs**
4. Save und anschließend den tatsächlichen Deploy-Status sowie `/preview/` im Browser kontrollieren.

**WICHTIG:** GitHub Pages Branch-Publishing verwendet weiterhin GitHub Actions für den internen Pages-Build. Solange GitHub Actions im Repository vollständig deaktiviert ist, kann auch diese Variante scheitern. In diesem Fall ist die Veröffentlichung **blockiert**, bis Actions gezielt wieder aktiviert oder ein anderer Hosting-/Deployweg verwendet wird. Keine Actions-Freigabe ohne ausdrückliche Zustimmung.

## Pflege / Drift
`docs/` ist derzeit eine statische Kopie von `stats/` und `latest.json`. Bei jedem künftigen freigegebenen Release muss insbesondere `docs/latest.json` synchronisiert werden, sonst kann die Website veraltete APK-Metadaten anzeigen. Vor produktiver Umstellung einen Synchronisationsprozess definieren und prüfen.

## Prüfgrenzen
GitHub-Dateien existieren; ein Live-Deployment wurde nicht bestätigt. Browser-, Navigations-, Manifest- und mobile Darstellungstests sind noch ausstehend. Preview ist öffentlich erreichbar, sobald Pages erfolgreich deployed; `noindex` ist keine Zugriffssperre.
