# SeedNest release process

**Language / Sprache:** [🇩🇪 Deutsch](RELEASE_PROZESS.md) | **🇬🇧 English**

[← Project overview](../README_EN.md) · [Versions & Changelog](VERSIONS_EN.md) · [Update instructions (German)](UPDATES.md)

This public repository hosts APKs, checksums, the `latest.json` update manifest and documentation. **Private source code and production signing keys are never stored here.** These instructions document release controls; they do not activate automatic publication.

## Before publishing

1. Validate the private source commit: tests, lint, secret audit and Android build must succeed.
2. Set a new higher `versionCode`, the corresponding `versionName` and release tag; package ID stays `de.seednest.app`.
3. Sign using the **existing signing key**, never a replacement. Verify the signing certificate with `apksigner`.
4. Verify the signed APK's version, SHA-256, exact size and identity. Describe any outstanding real-device tests.
5. Verify third-party catalogue, text and image rights before including data.

## Publishing

1. Create a GitHub Release for the corresponding tag.
2. Upload the signed APK and `SHA256SUMS.txt`, then check size, checksum and download URLs.
3. Add clear release notes: changes, fixes, limitations and test status. Alpha builds remain flagged as prereleases.
4. Update the detailed [changelog](../CHANGELOG.md) and independent [version index](VERSIONS_EN.md).
5. **Only after** the release assets are available and verified, update the root `latest.json`. **Do not change its existing schema or field names.**
6. Fetch the public manifest and asset; compare its hash and size to the signed APK.
7. Check release links, documentation and download statistics.

## Current update manifest: schema 1

Required keys: `schemaVersion` = 1, `applicationId` = `de.seednest.app`, `versionCode` (integer), `versionName`, `tag`, `notes`, `apkUrl` (matching HTTPS release URL), `sha256` (hex hash) and `size` (bytes).

The manifest is a **compatibility and security contract** with existing app installations, not a presentation page.

## When something fails

- If the release is not verified, **do not update `latest.json`**.
- If an APK hash or signature is wrong, correct the release before updating the feed.
- If a shipped build is faulty, publish a corrected **new version with a higher version code** and only then update the feed. Do not silently replace old APK binaries.
- Documentation and analytics CI must not receive production signing keys.

## Navigation

[Home](../README_EN.md) · [Independent version history](VERSIONS_EN.md) · [Complete changelog](../CHANGELOG.md) · [Official releases](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) · [Checksums and signatures](INTEGRITY_EN.md) · [Security](../SECURITY.md)
