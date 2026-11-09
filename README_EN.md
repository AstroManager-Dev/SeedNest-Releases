# SeedNest – Android Alpha Releases

**Language / Sprache:** [🇩🇪 Deutsch](README.md) | **🇬🇧 English**

![Status: Alpha](https://img.shields.io/badge/Status-Alpha-orange)
![Android: 8+](https://img.shields.io/badge/Android-8%2B-green)

**[Download APK](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) · [Installation](docs/INSTALLATION_EN.md) · [User manual (German)](docs/BENUTZERHANDBUCH.md) · [Testing guide](docs/TESTEN_EN.md) · [Changelog](CHANGELOG.md) · [Feedback](https://github.com/AstroManager-Dev/SeedNest-Releases/issues/new/choose)**

SeedNest is a native Android application for managing **private cannabis seed collections**. It helps organize strains, containers, quantities, inventory movements and storage locations. Additional features include package photo scanning, experimental invoice scanning, shopping lists, run planning, printable labels and optional Gemini research.

| Area | Features |
| --- | --- |
| Collection | Strains, breeders, autoflower/photoperiod, favorites, search, filters and different views |
| Details | Genetics, THC/CBD, Indica/Sativa/Ruderalis, flowering, yield and sources |
| Inventory | Seed containers, quantities, incoming/outgoing movements, history and visual bag layouts |
| Capture | Package photos, image selection and invoice import with review |
| Planning | Shopping list, Next Run and active Run with confirmed inventory deductions |
| Research | Optional Gemini with your own API key, source verification and translation |
| PDF and printing | Bag layout, 60 × 30 mm jar labels, custom sizes, PDF preview and selective reprints |
| Backup | ZIP backup, optional password-protected backup and restore preview |

**Alpha troubleshooting:** When something does not work, **check [Releases](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) or More → Updates in the app first**. Back up your collection, install the newer APK **over the existing app**, and test again before reporting a bug. If the app no longer opens, check Releases in a browser. Do not uninstall until you have verified a backup.

**Experimental features:** Invoice scanning/OCR and on-device AI remain experimental. Always review extracted products, quantities and AI-generated suggestions before saving.

## Documentation

- [**User manual – 20 chapters (German)**](docs/BENUTZERHANDBUCH.md)
- [**Roadmap: European StrainDB, EAN scanner and suppliers (English)**](docs/ROADMAP_STRAINDB_EN.md)
- [StrainDB roadmap (German)](docs/ROADMAP_STRAINDB.md)
- [Installation (English)](docs/INSTALLATION_EN.md)
- [Beta testing guide (English)](docs/TESTEN_EN.md)
- [Installation (German)](docs/INSTALLATION.md)
- [Testing guide (German)](docs/TESTEN.md)
- [Updates and release process (German)](docs/UPDATES.md)
- [FAQ (German)](docs/FAQ.md)
- [Privacy and data processing (German)](docs/DATENSCHUTZ.md)
- [Feedback and contributing (German)](CONTRIBUTING.md)

## Installation and updates

Download the current APK from [GitHub Releases](https://github.com/AstroManager-Dev/SeedNest-Releases/releases). For an existing installation, **install the APK on top of the current app, without uninstalling first**. Back up important data outside the application's private storage before testing or upgrading.

Since Alpha.0.5.001 the app introduces its updater on first launch. An optional once-per-day update check can run when the app starts. Under **More → Updates & Changelog** you can check manually, configure update checks and view release history offline.

Downloading and installation require explicit confirmation. Android may ask you to allow APK installation from the source app. SeedNest checks the package identity, increasing version code, file checksum and signature before launching installation. It does not upload inventory, images or API keys when checking for updates; GitHub receives ordinary connection metadata.

**Android 8 or newer is required.** This is an alpha build. Camera, recognition quality and background behavior may vary depending on the device. Verify results from OCR and AI before accepting them.

## Changelog and feedback

- [Version history](CHANGELOG.md) (primarily German)
- [Report an issue or request a feature](https://github.com/AstroManager-Dev/SeedNest-Releases/issues)

When reporting a bug, specify the app version, device model, Android version, reproduction steps, expected result and actual result. Never include API keys, private collection backups or unredacted invoices in public GitHub issues.

This repository hosts official APK downloads, release metadata and documentation. Update data is published as **latest.json**. No GitHub account is needed for downloads or update checks.

## Support SeedNest voluntarily

You can support continued development with a voluntary contribution of any amount.

**[Support via PayPal ❤️](https://paypal.me/Mmbaby2016)**

This link opens PayPal's external website. Since Alpha.0.5.004 it is also available in the app under **More → Support SeedNest**. SeedNest does not process payment details.

## What's new in Alpha.0.5.006

PDF label typography is covered by native rendering tests. Before saving a PDF you can preview pages, switch pages and zoom. Generated filenames include the bag, date, time and a unique identifier.

Under **Storage → Bag → PDF & Print**, select all labels, only new/changed/marked ones, or only items marked for reprinting. An individual strain or jar label can also be marked for reprinting. **Only confirm that the entire job was printed after it has physically finished.** Merely previewing, exporting, cancelling or partially printing a PDF must not mark labels as printed. Print status is stored locally on the device and is not included in collection backups.

The updater retries temporary connection errors up to three times and provides a browser fallback. For an HTTP 504 error on an older app version, open the APK download URL in a browser with the **?download=1** suffix, then update the existing installation.

**More → Report bug by email** does not require a GitHub account. Review the report and optional diagnostics first, then send it yourself using your email app to **m.nause79@gmail.com**. The report can also be copied if you have no email client.

## What's new in Alpha.0.5.007

Container numbers are now permanent: new numbers are automatically assigned, existing identifiers cannot be changed, moving a container preserves its number and deleting a container does not reset the counter. A restore rejects inconsistent numbering for the same container ID and keeps the higher counter.

For paper placed inside small round jars, **PDF & Print → Jar labels → Barcode format** supports a lengthwise **Code 128 barcode**. The bars run across the jar's curvature. QR codes remain selectable, and existing QR labels are still supported. Older numbers unsuitable for Code 128 fall back to QR.

After upgrading, print a new test sheet. The scanner handles both formats; rotate the phone if necessary and slightly turn the jar to reduce reflections. Test at least one physical label in the actual jar, because render tests cannot fully reproduce curved plastic, reflections and phone cameras.

---

*This English page translates the public release overview. Some detailed documentation is currently only available in German. The European StrainDB, supplier directory and EAN scanner described in the roadmap are development work and are **not available in a published APK yet**.*
