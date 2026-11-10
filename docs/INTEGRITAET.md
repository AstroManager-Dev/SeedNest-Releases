# APK-Integrität und sichere Updates

**Sprache / Language:** **🇩🇪 Deutsch** | [🇬🇧 English](INTEGRITY_EN.md)

SeedNest wird als signierte Android-APK über [GitHub Releases](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) verteilt. Lade nur die Dateien aus dem offiziellen Release des Projekts herunter.

## Welche Dateien gehören zu einem Release?

| Datei | Zweck |
|---|---|
| `SeedNest-Native-<VERSION>.apk` | Signierte Android-App |
| `SHA256SUMS.txt` | SHA-256-Prüfsumme(n) der veröffentlichten Release-Dateien |
| `latest.json` (Repository-Hauptverzeichnis) | Maschinell lesbarer Updatehinweis für die bestehende Android-App |

**Bei einer manuellen Installation:** zuerst [Installation](INSTALLATION.md) lesen. Vor jedem Update ein vollständiges Backup **außerhalb** der App erstellen und **über die vorhandene Installation** installieren, nicht deinstallieren.

## SHA-256 der APK überprüfen

1. Auf der [Releases-Seite](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) die APK **und** `SHA256SUMS.txt` **derselben Version** herunterladen.
2. Den Hash der heruntergeladenen APK auf deinem Rechner berechnen.
3. Den berechneten Wert mit der Zeile für genau diese APK in `SHA256SUMS.txt` vergleichen. Bei einer Abweichung die APK nicht installieren.

**Windows PowerShell:**

```powershell
Get-FileHash -Algorithm SHA256 .\SeedNest-Native-Alpha.0.5.007.apk
```

**Linux / macOS:** 

```sh
# Linux
sha256sum SeedNest-Native-Alpha.0.5.007.apk

# macOS
shasum -a 256 SeedNest-Native-Alpha.0.5.007.apk
```

Die Namen sind **Beispiele für Alpha.0.5.007**. Bei neueren Versionen jeweils den tatsächlichen Dateinamen verwenden.

**Hinweis:** Eine SHA256SUMS-Datei belegt die Integrität gegenüber der angegebenen Prüfsumme, ist aber selbst **keine digitale Signatur** und schützt nicht unabhängig gegen einen manipulierten Downloadkanal.

## Signatur- und Updateidentität

| Merkmal | Erwarteter Wert |
|---|---|
| Android-Paketname | `de.seednest.app` |
| Bestehender SHA-256-Zertifikatsfingerabdruck | `c2a386da16e824e47223fa9791bda874c2e33b364b083b7d5f206116235ced0e` |
| Mindestversion Android | Android 8.0 (API 26) |
| Update-Regel | Gleicher Paketname, kompatible bisherige Signatur und höherer Versionscode |

Die APK-Signatur lässt sich mit `apksigner` aus den offiziellen Android SDK Build Tools prüfen:

```sh
apksigner verify --verbose --print-certs SeedNest-Native-Alpha.0.5.007.apk
```

Den angezeigten **Signer-Zertifikats-SHA-256** mit dem Fingerabdruck oben vergleichen. Das Kommando benötigt die Android SDK Build Tools und wird normalerweise auf einem PC ausgeführt. Das Zertifikat allein bestätigt die fortlaufende Signaturidentität, nicht die Vertrauenswürdigkeit beliebiger heruntergeladener Inhalte.

Die eingebaute SeedNest-Updatefunktion kontrolliert laut dokumentiertem App-Verhalten Dateigröße, SHA-256, Paketkennung, Versionscode und Signatur, bevor sie den Android-Installationsdialog öffnet. Android verlangt anschließend eine Bestätigung.

## Wenn ein Update fehlschlägt

- **Signatur- oder Paketfehler:** nicht deinstallieren! Bisherige App-Version, neue APK-Version und Android-Fehlermeldung notieren und [Fehler melden](https://github.com/AstroManager-Dev/SeedNest-Releases/issues/new/choose).
- **Hash stimmt nicht:** APK löschen und den offiziellen Release erneut laden. Nicht installieren.
- **Downloadproblem:** [Releases im Browser](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) öffnen. Bei älteren App-Versionen kann der direkte Download mit `?download=1` helfen.
- **Neuer Build wird nicht angeboten:** prüfen, ob `latest.json` bereits auf dieselbe Version zeigt; manuelle Updateprüfung unter **Mehr → Updates & Changelog** verwenden.

## Vertrauensgrenzen

Der Quellcode und insbesondere **Private Keys, Keystore-Passwörter, Signaturdateien und Server-Tokens** sind **nicht** Teil dieses öffentlichen Repositories. Weder `latest.json` noch eine Issue-Antwort ist ein geeigneter Ort für Secrets. Sicherheitsprobleme bitte nicht mit Exploit-Daten oder geheimen Schlüsseln in öffentliche Issues stellen; siehe [Sicherheitshinweise](../SECURITY.md).

[← Zur Projektübersicht](../README.md) · [Updateprozess](UPDATES.md)
