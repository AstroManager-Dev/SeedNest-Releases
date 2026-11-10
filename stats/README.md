# SeedNest Website auf GitHub Pages

**Startseite:** https://astromanager-dev.github.io/SeedNest-Releases/  
**Dauerhafter APK-Download:** https://astromanager-dev.github.io/SeedNest-Releases/download/  
**Eigene Versionsgeschichte:** https://astromanager-dev.github.io/SeedNest-Releases/changelog/  
**Admin-Statistik:** https://astromanager-dev.github.io/SeedNest-Releases/admin/

## Struktur

- `index.html` – öffentliches SeedNest-Branding, Features, Android-Vorschau, Download und FAQ.
- `assets/site.css`, `assets/site.js` und `assets/favicon.svg` – CI, responsives Layout, Dark Green / Purple Haze / Clean Light.
- `changelog/` – eigenständige Website-Version der GitHub-Release-Notes; keine langen Versionsblöcke auf der Hauptseite.
- `download/` – stabiler Link zur gerade freigegebenen APK. Für Direktlinks auf anderen Seiten geeignet.
- `admin/` – geschützte Statistikansicht. Frontend-HTML ist öffentlich abrufbar; **nur der nach GitHub-ID serverseitig geprüfte API-Zugriff schützt interne Inhalte.**
- `../latest.json` – bestehender Update-Feed. GitHub Pages kopiert ihn nach Schema-Validierung als `stats/latest.json`.

## Sicherheit und Privatsphäre

Die frühere öffentliche Statistik-Startseite und `stats/data/history.json` werden **nicht mehr in GitHub Pages veröffentlicht**. Die vorhandenen Tagesstände (09./10.11.2026) liegen zusätzlich in der privaten Supabase-Tabelle `strain_test.release_download_snapshots`; zukünftige Einträge werden nur dort gespeichert, wenn ein berechtigter Admin „Tagesstand sichern“ auswählt. **Eine automatische tägliche Erfassung ist derzeit noch nicht aktiv.**

Wichtig: Öffentlich gehostete GitHub-Releases zeigen ihre Asset-Downloadzähler weiterhin öffentlich. Auch alte Commits dieses öffentlichen Repositories bleiben in der Git-Historie auffindbar. **Alte öffentliche Zähler können nicht nachträglich geheim gemacht werden.** Schutz gilt für neue interne Auswertungen und den direkten Zugriff auf den privaten Snapshot-Speicher.

Die Supabase Edge Function `seednest-release-analytics` überprüft ein Supabase-Auth-JWT mit `auth.getUser` und die verifizierte GitHub-Provider-ID anhand von `strain_test.admin_allowlist`. Unautorisierte Nutzer erhalten HTTP 401/403. Die Website enthält nur den **öffentlichen** Supabase-Publishable-Key, niemals Service-Role-Zugang oder den GitHub-Client-Secret. Eine reine JavaScript-Einblendung ist keine Zugangssicherung.

## OAuth-Einrichtung (für produktiven Admin-Login noch zu prüfen)

1. Supabase-Projekt `vckdiflgdmxurxfmdyyq` → Authentication → Providers: GitHub OAuth mit Client-ID/Secret **serverseitig** einrichten (GitHub Callback: `https://vckdiflgdmxurxfmdyyq.supabase.co/auth/v1/callback`).
2. Supabase → Authentication → URL Configuration → **Additional Redirect URLs** die exakte Seite `https://astromanager-dev.github.io/SeedNest-Releases/admin/` erlauben.
3. Das Konto muss in `strain_test.admin_allowlist` über seine unveränderliche verifizierte GitHub-ID aktiv freigegeben sein.
4. Login auf echtem Gerät oder Desktop durchspielen; anschließend testen: ohne Bearer-Token HTTP 401, mit nicht freigegebenem Token HTTP 403 und nur mit freigegebenem GitHub-Token Statistikdaten.
5. Bei einer eigenen Domain Auth-Redirect und CORS-Allowlist **kontrolliert** umstellen. Nicht pauschal alle Origins erlauben.
6. Weitere Details zur Backend-Verwaltung stehen ausschließlich im privaten SeedNest-Android-Repository (`docs/RELEASE_ANALYTICS_BACKEND.md`).

## Veröffentlichungsablauf

Der Workflow `.github/workflows/seednest-analytics.yml` veröffentlicht nur die Website und die freigegebene Versionsdatei. Eine tägliche öffentliche Statistik-Sammlung und Git-Pushes im Workflow wurden entfernt.

[Website](https://astromanager-dev.github.io/SeedNest-Releases/) · [Release-Quellen](../README.md) · [Sicherheitsrichtlinie](../SECURITY.md)
