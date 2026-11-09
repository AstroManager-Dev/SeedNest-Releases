# SeedNest – Roadmap: Europaweite StrainDB und Bezugsquellen

**Status: In Vorbereitung – noch kein öffentlich nutzbarer Cloud-Katalog.** Der bestehende private Sortenkatalog in SeedNest bleibt unabhängig und offline nutzbar.

## Ziel

Ein großer, europaweiter, **lizenzierter** Katalog mit Sorteninformationen von Seedbanks, Breedern und Datenbanken. Nutzer sollen Sorten direkt aus der Datenbank suchen, vergleichen und nach Kontrolle **ohne automatische Bestandsbuchung** in die eigene Sammlung übernehmen können.

## Geplante Funktionen

- [ ] Verifizierte Sorten- und Breeder-Datensätze, bevorzugt Deutsch; englische Originaldaten möglich.
- [ ] Nachvollziehbare Genetik, Varianten (Feminisiert/Regulär, Auto/Photo, Fast/F1), Indica/Sativa/Ruderalis, THC/CBD, Aroma/Terpene, Blütezeit, Ertrag und Quellen.
- [ ] **EAN/GTIN-/UPC-Erkennung beim Verpackungsscan**, alternativ Foto/OCR für unbekannte Produkte; Zuordnung über Sorte, Hersteller, Packungsvariante und Samenanzahl.
- [ ] **Bezugsquellen direkt im Sortenprofil:** Händlername, direkter Produktlink, Packungsgrößen, Varianten, SKU/EAN, optional Preis, Währung, Verfügbarkeit und Prüfdatum.
- [ ] Mehrere Produkt-EANs und Händlerangebote je Sorte unterstützen; eigene Bezugsquellen lokal anlegen.
- [ ] Datenschutzfreundliche Cloud-Suche und optionaler Offline-Cache; private Samenbestände, Lagerorte und Buchungen bleiben lokal.
- [ ] Europäische Seedbanks/Datenplattformen um **schriftliche Daten-, Bild-, Übersetzungs- und Weiterveröffentlichungsrechte** bitten.
- [ ] Qualitätssicherung, Herkunftskennzeichnung, Quellenkonflikte, Dubletten, Katalogupdates und Änderungsprotokoll.

## CloudBase-Schnittstelle

Im privaten Android-Quellcode ist eine **vorbereitete, lesende HTTPS-Katalogschnittstelle** mit einer manuellen Übernahme nach Prüfung vorgesehen. Noch nicht vorhanden sind eine produktiv betriebene CloudBase-Datenbank, lizenzierte Datensätze, ein aktiver öffentlicher API-Endpunkt und die fertige EAN-zu-Sorten-Suche.

Die CloudBase-Verbindung darf keine privaten Bestandsdaten automatisch übertragen und keine geheimen Server-Schlüssel in der APK enthalten.

## Weitere Informationen

- [SeedNest-Releases](https://github.com/AstroManager-Dev/SeedNest-Releases)
- [Benutzerhandbuch](BENUTZERHANDBUCH.md)
- [Entwicklungs-Pull-Request zur Cloud-StrainDB](https://github.com/AstroManager-Dev/SeedNest-Android/pull/9) (Quellcode-Repository privat)
