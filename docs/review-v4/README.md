# SeedNest Botanical Cinema V4 – Design-to-Code Review

**Stand:** 2026-11-21. **Status:** implementiert in separatem Review-Unterordner; visuelle Browserprüfung und Designabnahme noch offen. Keine Änderungen an der öffentlichen Homepage `docs/index.html`.

## Designreferenz und Auftrag

Nutzerbild vom 21.11.2026: horizontale, sehr kompakte Premium-Landingpage mit dunkelgrünem botanischem Hintergrund, limettengrünen Lichtakzenten, fünf Smartphone-Ansichten, sechs Funktionskarten, durchgehender 3-Schritte-Leiste, Header-Navigation und kompaktem Footer. Der Nutzer hat die Umsetzung mit allen Elementen in einem separaten Review-Unterordner angefordert.

## Implementiert

- Eigenständige Reviewseite `docs/review-v4/index.html` mit `review.css` und `review.js`.
- Hero, Markenlogo, Navigation, Lichtkreis, 5er-Smartphone-Fächer, Galerie mit 10 echten Screenshots, Vor-/Zurück, Punkte, Autoplay, Touch-Swipe und Reduced-Motion-Rücksicht.
- Sechs Feature-Karten, dreistufige horizontale Workflow-Leiste, FAQ, Download-CTA, GitHub-Link, Impressum und MPN-Development-Copyright.
- Responsive Regeln für Desktop, Tablet und Smartphone; Vorschau `noindex,nofollow`.
- Bestehende originale Screenshot-Dateien aus `docs/assets/screenshots/` eingebunden, ohne Änderung der dargestellten Sammlungsdaten. Keine erfundenen App-UI-Ansichten.

## Abweichungen vom visuellen Entwurf

- Die fünf im Referenzbild gezeichneten Smartphone-UI-Ansichten sind nicht nachweislich echte SeedNest-App-Screenshots. Sie werden daher durch fünf unveränderte Originalansichten ersetzt (verbindliche Nutzerregel).
- Die botanische Hintergrundgrafik wird aus dem vorhandenen Produktionsasset übernommen, dessen Auflösung nur 320×180 Pixel beträgt. Hochauflösende Blätter, Tropfen und Mosszene des Referenzbildes sind deshalb noch nicht originalgetreu reproduziert.
- Die Originalvorlage enthält englische Labels und den alten Branding-Untertext. Diese werden gemäß jüngsten Nutzerentscheidungen durch deutsche Labels und `CANNABIS-SAMENVERWALTUNG` ersetzt.
- Die Referenzgrafik ist ein flaches Bild, keine exakte Layout-/Schrift-/Asset-Spezifikation. Abstände und Interaktionen sind angenähert, nicht pixelgenau geprüft.

## Qualitätsprüfung und Freigabe

Quellcode erstellt und GitHub-Commits vorhanden. **Nicht verifiziert:** GitHub-Pages-Deployment, Browser-Rendering, Desktop-/Tablet-/Mobile-Screenshots, echte visuelle Differenz, WCAG- und Performance-Tests. **Keine Designabnahme** und keine Übernahme in Live ohne weitere Nutzerfreigabe.

## Nächste Schritte

1. Review-URL im Browser auf Desktop und Smartphone öffnen und mit der hochgeladenen Bildreferenz vergleichen.
2. Rendering- und Interaktionsprobleme beheben; hochwertige Hintergrundgrafik und Icon-Fidelity verbessern.
3. Erst nach ausdrücklicher Freigabe auf Live übertragen.

## Korrekturdurchgang 2026-11-21 (V4.1)

- Referenzbild und echte Nutzer-Browser-Screenshots verglichen: Überlagerung der Hero-Texte durch Smartphone-Galerie, mobile Überbreite, schwache Bildkulisse, nicht referenzkonforme FAQ und GitHub-Ersatzzeichen festgestellt.
- Responsive Hero-Raster überarbeitet, Hero-Text höher priorisiert, mittlere Breiten auf gestapelte Darstellung umgestellt, mobile Abstände und Telefonmaße angepasst.
- FAQ in der Review ausgeblendet, GitHub-Symbol durch SVG ersetzt, CSS-Cache auf v2.
- **Weiter offen:** Referenzbild verlangt hochauflösende fotorealistische Cannabisblätter, Tropfen, Moos und leuchtende Reflexe; vorhandenes 320×180-WebP erfüllt dies nicht. Eine 1:1-Fidelity kann daher nicht behauptet werden. Echte Browser-Screenshots und visuelle QA nach diesem Commit noch ausstehend.
- Live-Dateien außerhalb `docs/review-v4/` unverändert.

## Fidelity-Durchgang V4.3 – 2026-11-21

- Visuelle Referenz des Nutzers erneut als Maßstab: kompakter Hero mit Text links und fünf Smartphone-Ansichten rechts, sechs flache Funktionskarten, durchgehende Workflow-Leiste, Footer mit Download-CTA.
- Desktop-Hero-Proportionen, Überschriftenmaß, Galeriehöhe und Feature-Kartenhöhe enger an Referenz angepasst.
- Footer mit visuell hervorgehobenem Download-CTA ergänzt; Changelog und Impressum bleiben zugänglich.
- Smartphone-Galerie berechnet Abstände anhand ihrer tatsächlichen Containerbreite, um Überlauf bei schmalen Viewports zu reduzieren.
- Mobile Funktionskarten und Footer-Layout verdichtet; originalgetreue App-Screenshots und hochgeladene botanische Assets unverändert.
- Commits: `45897e7`, `a791893`, `bf9a44a`.
- **QA:** Quellcodeänderungen committed. Browser-Rendering und Pixelvergleich nach diesem Durchgang noch nicht verifiziert. Freigabestatus: Korrektur-/Review-Phase, nicht live.
