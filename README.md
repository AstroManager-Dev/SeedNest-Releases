# SeedNest – Android-Testversionen

![Status: Alpha](https://img.shields.io/badge/Status-Alpha-orange)
![Android: 8+](https://img.shields.io/badge/Android-8%2B-green)

**[APK herunterladen](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) · [Installation](docs/INSTALLATION.md) · [Testanleitung](docs/TESTEN.md) · [Changelog](CHANGELOG.md) · [Feedback](https://github.com/AstroManager-Dev/SeedNest-Releases/issues/new/choose)**

SeedNest verwaltet Sorten, Samenbestände, Behälter und Lagerplätze. Dazu kommen Verpackungsscan, Rechnungsimport, Einkaufslisten, Run-Planung und optionale Gemini-Recherche.

| Bereich | Funktionen |
| --- | --- |
| Sammlung | Sorten, Breeder, Auto/Photo, Favoriten, Suche und unterschiedliche Ansichten |
| Angaben | Genetik, THC/CBD, Indica/Sativa/Ruderalis, Blütezeit, Ertrag und Quellen |
| Bestand | Behälter, Mengen, Zu-/Abgänge, Verlauf und grafische Taschenplätze |
| Erfassung | Verpackungsfoto, Bildauswahl und Rechnungsimport mit Vorschau |
| Planung | Einkaufsliste, Next Run und aktueller Run mit bestätigtem Start |
| Recherche | Optional Gemini mit eigenem Schlüssel, Quellenprüfung und Übersetzung |
| PDF & Druck | Taschenplan, 60 × 30-mm-Dosenetiketten, eigene Größen, Vorschau und gezielter Neudruck |
| Sicherung | ZIP-Backup, optional verschlüsselte Sicherung und Wiederherstellungsvorschau |

## Dokumentation

- [Installation](docs/INSTALLATION.md)
- [Updates und Veröffentlichungsablauf](docs/UPDATES.md)
- [Kurze Anleitung für Tester](docs/TESTEN.md)
- [Häufige Fragen](docs/FAQ.md)
- [Datenverarbeitung](docs/DATENSCHUTZ.md)
- [Feedback und Mitwirkung](CONTRIBUTING.md)

## Installation und Updates

Die aktuelle APK findest du unter [Releases](https://github.com/AstroManager-Dev/SeedNest-Releases/releases). Auf einem vorhandenen SeedNest als Update installieren, **nicht vorher deinstallieren**. Vor Tests mit wichtigen Daten eine vollständige Sicherung außerhalb der App aufbewahren.

Ab Alpha.0.5.001 informiert die App beim ersten Start über die Updatefunktion. Optional prüft sie beim Start einmal täglich nach neuen Versionen. Unter **Mehr → Updates & Changelog** kannst du jederzeit manuell prüfen, die automatische Prüfung ändern und die Änderungshistorie offline lesen.

Download und Installation werden bewusst gestartet; Android verlangt eine Bestätigung und gegebenenfalls die Freigabe zur Installation aus dieser Quelle. Prüfsumme, App-Kennung, höhere Versionsnummer und Signatur werden vor dem Installationsaufruf kontrolliert. Bei der Prüfung werden keine Bestände, Bilder oder API-Schlüssel hochgeladen. GitHub erhält die üblichen Verbindungsdaten.

Android 8 oder neuer. Die Alpha-Version dient zum Testen; Kamera, Erkennungsqualität und Hintergrundverhalten können sich je nach Gerät unterscheiden. KI- und Scan-Vorschläge vor Übernahme prüfen.

## Änderungen und Rückmeldungen

- [Rückwirkender Changelog](CHANGELOG.md)
- [Fehler oder Verbesserungsvorschlag melden](https://github.com/AstroManager-Dev/SeedNest-Releases/issues)

Bei Fehlern bitte App-Version, Handymodell, Android-Version, Schritte und erwartetes/tatsächliches Ergebnis nennen. API-Schlüssel, private Bestandsbackups und ungeschwärzte Rechnungen gehören nicht in öffentliche Issues.

Dieses Repository dient der Veröffentlichung von Downloads, Versionsinformationen und Anleitungen. Die öffentliche Updateinformation liegt in `latest.json`. Ein GitHub-Konto ist für Download und Updateprüfung nicht erforderlich.

## SeedNest freiwillig unterstützen

Wenn dir SeedNest gefällt, kannst du die Weiterentwicklung mit einem freiwilligen Beitrag unterstützen. Den Betrag bestimmst du selbst.

**[Mit PayPal unterstützen ❤️](https://paypal.me/Mmbaby2016)**

Der Link öffnet die externe PayPal-Seite. Ab Alpha.0.5.004 findest du ihn auch in der App unter **Mehr → SeedNest unterstützen**. Die Entscheidung über eine Zahlung erfolgt auf PayPal; SeedNest verarbeitet keine Zahlungsdaten.

## Neu in Alpha.0.5.006

PDF-Schrift mit nativen Grafiktests abgesichert. Vor dem Speichern kannst du die PDF in SeedNest mit Seitenwechsel und Zoom prüfen. Dateinamen enthalten Tasche, Datum, Uhrzeit und eine eindeutige Kennung.

Unter Lager → Tasche → PDF & Drucken lassen sich alle, nur neue/geänderte/vorgemerkte oder nur vorgemerkte Etiketten auswählen. In der einzelnen Sorte oder Dose kannst du einen Neudruck vormerken. Nach dem tatsächlichen Druck **alle Etiketten dieses Auftrags ausdrücklich bestätigen**. Bei Vorschau, Export, Abbruch oder nur teilweise gedruckten Seiten nicht bestätigen. Druckstatus bleibt lokal auf diesem Gerät und ist nicht Teil der Bestands-Sicherung.

Updates versuchen vorübergehende Verbindungsfehler bis zu dreimal erneut; ein Browser-Link dient als Ausweichweg. Bei HTTP 504 in älteren App-Versionen den APK-Link im Browser mit `?download=1` öffnen und über die bestehende App installieren.

Unter **Mehr → Fehler per E-Mail melden** ist kein GitHub-Konto nötig. Bericht und freiwilligen Diagnoseanhang vorher prüfen; anschließend selbst in der E-Mail-App an **m.nause79@gmail.com** versenden. Ohne Mail-App kannst du den Bericht kopieren.
