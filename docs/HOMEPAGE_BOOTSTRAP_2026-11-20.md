# Bootstrap-5-Homepage – Implementierungsstand (2026-11-20)

Status: **Entwicklungsbranch, nicht veröffentlicht**.

## Umsetzung
- Bestehende GitHub-Pages-Struktur unter `stats/` und die vorhandenen Download-/Changelog-/Admin-Pfade bleiben erhalten.
- Startseite lädt Bootstrap 5.3.3 CSS; vorhandenes SeedNest-Stylesheet überschreibt Design-Tokens. Das Layout der Screenshot-Galerie verwendet Bootstrap-Grid.
- Neues `system`-Theme folgt `prefers-color-scheme`, reagiert auf Änderungen und setzt `data-bs-theme`. Die bisherigen Theme-Optionen Dark Green, Purple Haze und Clean Light bleiben erhalten.
- Screenshots sind **noch nicht bereitgestellt**: Statt erfundener App-Bilder erscheinen eindeutig gekennzeichnete Platzhalter. Echte Aufnahmen erst nach visueller Freigabe und Datenschutzprüfung einsetzen.
- Manifestfehler deaktivieren die APK-Schaltflächen auf der Startseite; kein stiller Fallback auf fest eincodierte APKs. Der bestehende separate Downloadbereich prüft `latest.json` bereits gegen Paket-ID, Hash, Versionscode und festes GitHub-URL-Muster.
- Weder `latest.json` noch APKs, Signaturdateien oder Workflows geändert.

## Offene Prüfungen vor Merge
1. GitHub-PR-CI einschließlich `scripts/check_latest.py`, JavaScript-Syntax, HTML-Link- und Seitentests.
2. Browserprüfung Android Chrome / Desktop, Hell-/Dunkelmodus, Systemwechsel, Navigation, Responsivität und Tastaturbedienung.
3. Verifizierte echte Screenshots mit Freigabe nachreichen und für Mobilgeräte optimieren.
4. Keine öffentliche Veröffentlichung ohne ausdrückliche Freigabe.

## Release-Grenze
`de.seednest.app`, Signaturidentität und steigender `versionCode` werden ausschließlich im bestehenden privaten Build-/Releaseprozess geprüft. Die Website darf weder signieren noch eine ungeprüfte APK als Update anbieten.
