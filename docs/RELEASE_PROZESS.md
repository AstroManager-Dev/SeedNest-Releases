# Veröffentlichungsprozess für SeedNest

**Sprache / Language:** **🇩🇪 Deutsch** | [🇬🇧 English](RELEASE_PROCESS_EN.md)

[← Projektübersicht](../README.md) · [Versionen & Changelog](VERSIONEN.md) · [Updates](UPDATES.md)

Dieses öffentliche Repository enthält APK-Dateien, Prüfsummen, das Versionsmanifest `latest.json` und Dokumentation. **Der private Quellcode und die produktiven Signaturschlüssel werden hier nicht abgelegt.** Die folgenden Schritte beschreiben die Freigabeprüfung, nicht die Aktivierung einer automatischen Veröffentlichung.

## Vor Veröffentlichung

1. **Quellcode auf dem privaten Entwicklungsstand prüfen:** Java-/Kotlin-Tests, Lint, Secret-Audit und Android-Build erfolgreich.
2. **Release-Version festlegen:** höherer `versionCode`, konsistenter `versionName` und Tag. Paketname muss `de.seednest.app` bleiben.
3. **Mit dem vorhandenen Schlüssel signieren**; keine Schlüsselersetzung. Die Signatur mit `apksigner verify --print-certs` und dem bekannten Zertifikatsfingerabdruck prüfen.
4. **APK und SHA-256 prüfen:** signiertes Release-Artefakt, korrekte Dateigröße, Prüfsumme, Version und Signatur. Geräteabnahme und ihre Grenzen ehrlich dokumentieren.
5. **Schriftliche Rechteprüfung:** keine unlizenzierte StrainDB-Daten, Texte oder Bilder mitliefern.

## Veröffentlichung

1. Einen **GitHub Release** mit demselben Tag wie dem signierten Build anlegen.
2. Die signierte APK und `SHA256SUMS.txt` zum Release hinzufügen; Dateinamen, Größe, Hash und Download überprüfen.
3. **Release Notes** erstellen (was neu, geändert, behoben, noch offen ist); Alpha weiterhin als **Prerelease** kennzeichnen.
4. Den detaillierten [CHANGELOG](../CHANGELOG.md) und die gesonderte [Versionsübersicht](VERSIONEN.md) aktualisieren. Historische Texte nicht ohne Grund verändern.
5. Erst **nach dem verifizierten GitHub Release** die Stammdatei `latest.json` auf den neuen Tag umstellen. Die bereits installierte App liest dieses Format; **Schema und Schlüsselnamen nicht ändern**.
6. Den öffentlichen Feed laden, die Download-URL aufrufen und die Hash-/Größenangaben erneut mit der veröffentlichten APK abgleichen.
7. Release, Update-Feed, Dokumentationslinks und Downloadstatistik prüfen.

### Vertrag für `latest.json` (Schema 1)

| Pflichtfeld | Bedeutung |
|---|---|
| `schemaVersion` | `1` – bestehende Formatversion |
| `applicationId` | `de.seednest.app` |
| `versionCode` | Ganzzahl, beim nächsten Release steigend |
| `versionName` | Versionsname, z. B. `Alpha.0.5.007` |
| `tag` | Exakter veröffentlichter Release-Tag |
| `notes` | Kurztext für den Update-Dialog, ohne Markdown-/HTML-Abhängigkeit |
| `apkUrl` | HTTPS-URL zur genau passenden Release-APK |
| `sha256` | SHA-256 der veröffentlichten APK |
| `size` | Tatsächliche Dateigröße in Bytes |

Das Manifest ist **kein Werbetext**, sondern ein sicherheitsrelevanter Vertrag mit bereits installierten App-Versionen.

## Fehler und Rückfall

- **Release noch nicht verifiziert:** `latest.json` nicht aktualisieren.
- **Falsche Signatur oder falscher Hash:** Asset zurückziehen/ersetzen und **vorher keinen Feed umstellen**; Ursachen prüfen.
- **Fehler nach Veröffentlichung:** erst korrigierten, höher versionierten Release bereitstellen, dann Feed umstellen. Eine alte APK nicht stillschweigend mit anderem Inhalt überschreiben.
- **CI-/Docs-Fehler:** Pull Request offen lassen. Keine automatisierte Produktion-Signierung durch dieses öffentliche Repository.

## Repository-Aufteilung

| Bereich | Inhalt |
|---|---|
| [README](../README.md) | Klare Startseite, Funktionen, Download und Sicherheitshinweis – **kein ausführlicher Changelog** |
| [Versionen & Changelog](VERSIONEN.md) | Eigene übersichtliche Versionsseite mit Release-Links |
| [CHANGELOG.md](../CHANGELOG.md) | Vollständiges chronologisches Änderungsarchiv |
| [GitHub Releases](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) | Signierte APKs, SHA-256-Dateien und eigentliche Release Notes |
| [latest.json](../latest.json) | Maschinenlesbarer Android-Update-Feed |
| [docs/](.) | Installation, Datenschutz, Testen, FAQ und Integrität |
| [stats/](../stats/) | Downloadstatistik; Abrufe sind keine eindeutigen Installationen oder Personen |
| [SECURITY.md](../SECURITY.md) | Verfahren für Sicherheitsmeldungen |

**Hinweis:** Der bestehende Workflow für die Download-Statistik bleibt unverändert. Die Publikation einer signierten APK wird durch die Dokumentationsmodernisierung nicht automatisiert.
