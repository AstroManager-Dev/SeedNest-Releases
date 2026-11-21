# SEO-Optimierung – SeedNest Website

Datum: 2026-11-21 · Status: Code auf main implementiert; Search-Engine-Indexierung und Live-Rendering nicht verifiziert.

## Verifizierte Codeänderungen

- `docs/index.html`: Keyword-orientierter Title und Meta Description; Canonical; deutsche OpenGraph- und Twitter-Metadaten; OG-Bild mit unverändertem Original-Screenshot; JSON-LD `SoftwareApplication` ohne erfundene Ratings, Preise oder Downloads; semantisch passende Hero-Beschreibung.
- `docs/changelog/index.html`: Canonical, Indexierungs- und Social-Metadaten.
- `docs/sitemap.xml`: nur indexierbare Homepage und Changelog; `docs/download/index.html` hat ausdrücklich `noindex` und bleibt deshalb ausgeschlossen.
- `docs/robots.txt`: Projektpfad-Hinweise und Sitemap-URL. **Wichtig:** Bei GitHub Pages unter `/SeedNest-Releases/` ist diese Datei nicht das hostweite `https://astromanager-dev.github.io/robots.txt`; Suchmaschinen werten normalerweise nur die robots.txt am Hostroot aus. Die tatsächliche Preview-Sperre beruht auf `noindex` in den Preview-HTML-Dateien. Nicht als hostweite robots-Regel ausgeben.

## Noch offen

1. GitHub Pages Deployment und live ausgelieferte Metadaten nachprüfen.
2. Rich Results Test, Google Search Console und Bing Webmaster Tools (erfordern Website-Verifizierung durch Eigentümer).
3. Sitemap in Search Console anmelden, Indexierung und Core Web Vitals beobachten.
4. OpenGraph-Bild auf tatsächliche Social-Preview-Darstellung testen.
5. Die hochauflösende Botanical-Cinema-Grafik optimiert einbinden; die derzeitige niedrig aufgelöste Version ist ein visueller Qualitätsmangel.
6. Kein Anspruch auf garantierte Rankings oder Indexierung.

SEO-Zielgruppe: deutschsprachige Nutzer einer nativen Android-App für private Cannabis-Samensammlungen. Keine unbelegten Funktions-, Sicherheits- oder Bewertungsversprechen.
