# SeedNest Website – Produktionsstand

Stand: 2026-11-21. Die öffentliche Website unter `docs/index.html` ist die einzige veröffentlichte Homepage. Auf ausdrücklichen Nutzerwunsch wurden die beiden Vorschau-Websites `docs/preview/` und `docs/preview-v3/` aus dem aktuellen Repository-Baum entfernt.

## Produktionsassets

- `docs/assets/botanical/botanical.css`, `botanical.js`, `botanical-hero.webp` – von der V3-Vorschau in den Live-Asset-Bereich übernommen.
- `docs/assets/screenshots/` – zehn Original-Screenshots, unverändert aus der früheren Vorschau übernommen.
- Die Homepage verweist ausschließlich auf Live-Asset-Pfade; Download und Changelog bleiben bestehen.
- Historische Vorschau-Dateien bleiben über die Git-Historie wiederherstellbar, sind aber nicht mehr im aktuellen Pages-Baum.

## Qualitätsstand

GitHub-Codeumstellung durchgeführt. Die GitHub-Pages-Auslieferung, Darstellung auf Endgeräten und 404-Antworten ehemaliger Vorschau-URLs müssen nach Deployment geprüft werden. Das vorhandene botanische WebP ist weiterhin sehr klein und kein hochauflösendes Premium-Asset.

## Freigabegrenze

Nur Website und Assets; keine Android-APK, keine Änderung an Signaturen, Paket-ID oder App-Daten.

## Botanical Cinema V4.5 · 2026-11-23

Die GitHub-Pages-Startseite übernimmt die freigegebene Sites-Version 7
(Quellcommit `5bd75e82d54994306c6174bb6544feec566bdd93`, WO-20261121-201).
Sie zeigt die botanische Kulisse, elf App-Ansichten und auf schmalen Displays
eine gestapelte Ablaufleiste. Der helle Modus nutzt durchgängig Salbeigrün.

Die Startseite lädt `botanical-v4.css` und `botanical-v4.js`. Die öffentliche
Pages-Fassung übernimmt Canonical, Sitemap-Verweis und Social-Metadaten der
bisherigen Startseite. Changelog, Installationshinweise, Downloadseite und
Impressum bleiben unter den bestehenden URLs erreichbar. Die beiden direkten
APK-Links auf der Startseite zeigen auf die bereits veröffentlichte Alpha.0.5.009.
