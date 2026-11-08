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
