# Botanical Cinema V3.0 – separater Design-Preview

Stand: 2026-11-21 · Status: Implementiert im Repository, Live-Deployment und visuelle Browserprüfung ausstehend.

## Umfang

- Eigenständige Vorschau: `docs/preview-v3/index.html`.
- Eigenständiges CSS/JS unter `docs/preview-v3/assets/`.
- Die bestehende V2 unter `docs/preview/` und die öffentliche Homepage `docs/index.html` wurden nicht verändert.
- 3D-Coverflow mit 10 unveränderten JPG-Originalen aus `docs/preview/screenshots/`; die Galerie verlinkt direkt auf die vorhandenen Bilddateien.
- Bedienung: Pfeile, Punkte, Swipe, Pause, automatischer Wechsel, Fokus- und Hover-Pause, reduzierte Bewegung.
- Mobil kompakte Feature-Kacheln, kurze Workflow-Elemente und responsive Hero-Bühne.
- System-/Hell-/Dunkelmodus, semantische Abschnitte und Preview-`noindex,nofollow`.

## Freigabegrenzen

- Nutzer hat Botanical Cinema V3.0 als Konzept und separate Preview freigegeben.
- Kein Merge in die öffentliche Homepage, kein APK-Build, keine Änderung an Android-Paket/Signatur.
- Exakte grafische Assets des ursprünglichen Konzeptbildes sind nicht verfügbar. Aktuelle botanische Symbole, Lichtkegel und 3D-Szene sind CSS-Interpretationen, **keine pixelgenaue Übernahme**.

## Qualitätssicherung

- Quellcode in GitHub geschrieben; CSS-/JS-Assets referenziert.
- **Offen:** tatsächliches GitHub-Pages-Deployment, mobile Browser-Sichtprüfung, Animationstest, Lighthouse/Core Web Vitals, Link-/Bildprüfung in der ausgelieferten Seite.
- Vor einer Freigabe für die öffentliche Homepage: Originalkonzept als Referenz abgleichen, Bildassets optimieren, Alt-Texte gegen tatsächliche Screenshots prüfen und responsiv auf Geräten testen.

## Verbindliche Produktionsreihenfolge und Screenshot-Regel (2026-11-21)

1. Grafische Assets des freigegebenen Botanical-Cinema-Konzepts reproduzieren bzw. nach Vorlage umsetzen; ohne zugängliches Original-Konzeptbild keine Behauptung pixelgenauer Übereinstimmung.
2. Echte SeedNest-Screenshots in sämtlichen Smartphone-Mockups einsetzen. Keine synthetischen App-Dashboards. Originalbilder unverändert lassen.
3. Responsive Layout und Animationen integrieren.
4. Sichtprüfung auf Smartphone/Desktop, Bild-/Linkprüfung, Performance- und Accessibility-Prüfung.
5. Erst nach Freigabe eine öffentliche Übernahme erwägen.

**Bereits korrigiert:** Hero-Phones verwenden `../preview/screenshots/1000139887.jpg` und `1000139888.jpg` statt nachgebauter UI. Die originale Grafikvorlage für die botanischen Elemente fehlt noch; daher ist die Grafikreproduktion weiterhin offen.
