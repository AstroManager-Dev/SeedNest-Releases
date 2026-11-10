# SeedNest
### Your collection. Rooted.

**Native Android app for organising private cannabis seed collections** – keep strain information, seed quantities, containers, storage locations and printable labels in one place.

[![Project status: Alpha](https://img.shields.io/badge/Status-public%20alpha-F59E0B?style=flat-square)](https://github.com/AstroManager-Dev/SeedNest-Releases/releases)
[![Android 8+](https://img.shields.io/badge/Android-8.0%2B-3DDC84?style=flat-square&logo=android&logoColor=white)](docs/INSTALLATION_EN.md)
[![Downloads](https://img.shields.io/github/downloads/AstroManager-Dev/SeedNest-Releases/total?style=flat-square&label=APK-downloads)](https://github.com/AstroManager-Dev/SeedNest-Releases/releases)
[![Feedback](https://img.shields.io/github/issues/AstroManager-Dev/SeedNest-Releases?style=flat-square&label=Feedback)](https://github.com/AstroManager-Dev/SeedNest-Releases/issues)

[🇩🇪 Deutsch](README.md) · **🇬🇧 English**

---

## Download and get started

| | |
|---|---|
| **Download the Android app** | **[Official GitHub Releases – APK & SHA-256](https://github.com/AstroManager-Dev/SeedNest-Releases/releases)** |
| **Last verified published build** | [Alpha.0.5.007](https://github.com/AstroManager-Dev/SeedNest-Releases/releases/tag/Alpha.0.5.007) · Android 8+ · Alpha |
| **Current update manifest** | [latest.json](latest.json) · Consumed by the in-app updater |
| **Before installing** | [Installation guide](docs/INSTALLATION_EN.md) · [Checksums and integrity](docs/INTEGRITAET.md) (German) |

> [!IMPORTANT]
> **Back up your complete collection outside the app before updating.** Install the downloaded APK **on top of the existing installation** – **do not uninstall SeedNest first**. If Android rejects the signature or package, stop and report the issue rather than risking local data through uninstallation.

**Quick start:** ① Open **Releases** and download the APK. ② Confirm installation in Android. ③ Set up your collection and storage locations. ④ Make an external backup before major tests.  
[Step-by-step installation](docs/INSTALLATION_EN.md) · [Beta testing guide](docs/TESTEN_EN.md)

## What SeedNest offers today

| Area | Features |
|---|---|
| **Strain collection** | Breeders, genetics, autoflower/photoperiod, THC/CBD, aromas, favourites, filters and sources |
| **Inventory and storage** | Seed quantities, movement history, containers, nested storage locations and visual bag layouts |
| **QR and barcode** | QR labels for storage and containers; Code 128 for suitable jar labels |
| **PDF and printing** | Bag plans, jar labels, custom dimensions, PDF previews and selective reprints |
| **Planning** | Shopping list, Next Run and confirmed inventory movements when starting an active run |
| **Capture and research** | Package photos, local OCR/invoice import and optional Gemini research using your own key |
| **Privacy and backups** | Locally stored collection data, ZIP backups and optional encrypted backups |
| **Updates** | In-app update checks, APK identity/hash/signature validation and an offline changelog |

**Alpha disclaimer:** Scanning, printing, local AI and device-specific behaviour still require real-device testing. Always review OCR and AI suggestions before saving them.

## Project status and roadmap

| Available in public APK releases | Planned / under development |
|---|---|
| Local, offline collection and inventory management | Centralised, licensed StrainDB catalogue |
| QR labels, Code 128 jar labels and PDF printing | Enhanced EAN and product variant links to the cloud catalogue |
| Optional research, backups and app updates | Google accounts, Pro/Contributor roles and integrated Admin/Owner access |

**Important:** StrainDB cloud catalogue, cloud roles and additional GitHub Owner verification are **not included in the public APK**. Third-party strain information will only be used within documented permissions. See the [StrainDB roadmap (English)](docs/ROADMAP_STRAINDB_EN.md).

## Documentation

| For users | For testers and contributors |
|---|---|
| [Installation (English)](docs/INSTALLATION_EN.md) | [Beta testing (English)](docs/TESTEN_EN.md) |
| [User manual – 20 chapters (German)](docs/BENUTZERHANDBUCH.md) | [Changelog (German)](CHANGELOG.md) |
| [FAQ (German)](docs/FAQ.md) | [StrainDB roadmap (English)](docs/ROADMAP_STRAINDB_EN.md) |
| [App updates (German)](docs/UPDATES.md) | [Release process (English)](docs/RELEASE_PROCESS_EN.md) |
| [Data processing (German)](docs/DATENSCHUTZ.md) | [Checksums and APK integrity (English)](docs/INTEGRITY_EN.md) |

## Bug reports and suggestions

**Check for a newer release first**, then make a backup, upgrade and see whether the problem persists.

**[Report a bug or suggest a feature](https://github.com/AstroManager-Dev/SeedNest-Releases/issues/new/choose)** · [Open issues](https://github.com/AstroManager-Dev/SeedNest-Releases/issues) · [Contributing guide](CONTRIBUTING.md) (German)

Include the **SeedNest version, Android version, device model, reproducible steps, expected and actual results**. GitHub issues are public: **never post collection backups, API keys, signing keys, personal data or unredacted invoices**. There is also an optional in-app email bug report under **More → Report bug by email**.

## Releases and project organisation

- **This public repository:** official APK releases, SHA-256 checksums, `latest.json`, public documentation, beta feedback and [download analytics](stats/).
- **Source code:** maintained separately and not included in this public release repository. Public APK distribution does not grant an open-source licence for the underlying code.
- **Update safety:** Publish and verify the signed APK and checksum first; only then update `latest.json`. Signing keys and server secrets never belong in this repository.
- **No account required** for downloading the app or using the existing local collection.

## Support SeedNest

Development can be [**supported voluntarily through PayPal**](https://paypal.me/Mmbaby2016). Payment is handled by PayPal and SeedNest does not process card or account details.

---

<sub>SeedNest is an independent Android alpha project for personal collection management. Please comply with applicable local laws. Some detailed documentation is currently available only in German.</sub>
