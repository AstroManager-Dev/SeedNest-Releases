# Updates

Ab Alpha.0.5.001 prüft SeedNest optional beim App-Start einmal innerhalb von 24 Stunden auf eine neue Version. Kein GitHub-Konto erforderlich. Unter **Mehr → Updates & Changelog** stehen manuelle Prüfung, automatische Prüfung und die Offline-Historie bis Version 0.1.0 bereit.

Beim ersten Start erscheint einmalig ein Hinweis, in dem die automatische Prüfung abgewählt werden kann. Auf offenen Eingabeformularen wird kein Updateangebot darübergelegt.

## Wenn ein Update angeboten wird

1. Änderungen lesen und bei wichtigen Daten ein Backup erstellen.
2. **Herunterladen** wählen. Größe, SHA-256, App-Kennung, höhere Versionsnummer und identisches Signaturzertifikat werden kontrolliert.
3. **Installieren** wählen. Gegebenenfalls in Android die Installation aus SeedNest erlauben und die Installation bestätigen.

**Später** verschiebt das Angebot. **Diese Version überspringen** blendet die betreffende Version bei automatischen Prüfungen aus. Manuelle Prüfungen zeigen auch übersprungene neuere Versionen an.

Offline funktioniert die Bestandsverwaltung weiterhin. Ein Downloadabbruch oder eine Prozessbeendigung kann erneutes Herunterladen erforderlich machen. Die App installiert keine Updates stillschweigend.

## Release-Ablauf

1. Android-versionCode erhöhen und Versionsname setzen; mit dem bisherigen Zertifikat signieren.
2. Tests, Build, Lint, Paketkennung und Signatur prüfen.
3. APK und SHA256SUMS als GitHub-Release hochladen und veröffentlichen.
4. Dokumentation aktualisieren.
5. **Erst danach** `latest.json` im Branch main aktualisieren.
6. Öffentliche Versionsdatei und Download samt Hash prüfen.

Die Versionsdatei enthält schemaVersion, applicationId, versionCode, versionName, notes, apkUrl, sha256 und size. Öffentlich verteilt werden APK, Prüfsummen und Dokumentation. GitHub-Token und Signaturschlüssel gehören weder ins Repository noch in die App.
