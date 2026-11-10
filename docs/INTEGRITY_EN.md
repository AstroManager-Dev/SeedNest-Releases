# APK integrity and safe updates

**Language / Sprache:** [🇩🇪 Deutsch](INTEGRITAET.md) | **🇬🇧 English**

Official signed APKs are available from [SeedNest GitHub Releases](https://github.com/AstroManager-Dev/SeedNest-Releases/releases). Download only files published in this project's official releases.

## Files in a release

| File | Purpose |
|---|---|
| `SeedNest-Native-<VERSION>.apk` | Signed Android application |
| `SHA256SUMS.txt` | SHA-256 checksums for the published release assets |
| `latest.json` (repository root) | Machine-readable metadata used by the in-app updater |

**Before upgrading:** Back up your full collection **outside the app**. Install the APK **over your existing installation**; do not uninstall the previous version.

## Verify an APK checksum

1. Download the APK and `SHA256SUMS.txt` from the **same version's release**.
2. Calculate the APK's SHA-256 hash locally.
3. Compare the result with the corresponding line in the checksum file. **Do not install if the hashes differ.**

**Windows PowerShell:**

```powershell
Get-FileHash -Algorithm SHA256 .\SeedNest-Native-Alpha.0.5.007.apk
```

**Linux:**

```sh
sha256sum SeedNest-Native-Alpha.0.5.007.apk
```

**macOS:**

```sh
shasum -a 256 SeedNest-Native-Alpha.0.5.007.apk
```

The filename above is an **example**. Use the actual APK filename for your release.

**Limit:** A checksum helps detect mismatches, but a checksum file delivered from the same source is **not an independently authenticated digital signature**.

## Signing identity

| Property | Expected value |
|---|---|
| Android package ID | `de.seednest.app` |
| Existing signing certificate SHA-256 | `c2a386da16e824e47223fa9791bda874c2e33b364b083b7d5f206116235ced0e` |
| Minimum Android version | Android 8.0 (API 26) |
| Upgrade requirement | Same package ID, compatible signing identity and a higher version code |

If you have the official Android SDK Build Tools installed, inspect the APK signature:

```sh
apksigner verify --verbose --print-certs SeedNest-Native-Alpha.0.5.007.apk
```

Compare the displayed signing certificate SHA-256 fingerprint with the one above.

According to the app's documented updater, SeedNest checks the APK size, SHA-256 hash, package identity, version code and signing certificate before opening Android's installation confirmation screen. Android does not silently install an update.

## If an update fails

- **Signature or package error:** **do not uninstall**. Record both app versions and the error, then [report it](https://github.com/AstroManager-Dev/SeedNest-Releases/issues/new/choose).
- **Hash mismatch:** Delete the downloaded file and download again from the original release. Do not install.
- **Network failure:** Use the official [Releases page](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) in a browser. Some older versions may require the `?download=1` download fallback.
- **No update offered:** Check `latest.json` or use **More → Updates & Changelog** for a manual check.

## Security boundaries

Private signing keys, passwords and backend tokens are **never** distributed in this public repository. For sensitive vulnerabilities avoid posting exploit information or credentials in public issues; see [Security](../SECURITY.md).

[← English project overview](../README_EN.md) · [Versions & Changelog](VERSIONS_EN.md)
