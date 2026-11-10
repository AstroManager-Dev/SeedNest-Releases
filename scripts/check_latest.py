#!/usr/bin/env python3
"""Validate the public update manifest without changing its schema or publishing anything.

This script validates metadata only. Signed APK content, actual download SHA-256,
release presence, and signing identity must be verified separately before publishing.
"""
import json
import re
import sys
from pathlib import Path
from urllib.parse import quote

REPO = "AstroManager-Dev/SeedNest-Releases"
PACKAGE = "de.seednest.app"
TAG = re.compile(r"[A-Za-z0-9][A-Za-z0-9._-]{0,79}\Z")
SHA256 = re.compile(r"[0-9a-fA-F]{64}\Z")
REQUIRED = {
    "schemaVersion", "applicationId", "versionCode", "versionName",
    "tag", "notes", "apkUrl", "sha256", "size",
}


def validate(path: Path) -> None:
    manifest = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(manifest, dict):
        raise ValueError("latest.json must be a JSON object")
    missing = REQUIRED - manifest.keys()
    if missing:
        raise ValueError(f"Missing required update fields: {sorted(missing)}")
    if type(manifest["schemaVersion"]) is not int or manifest["schemaVersion"] != 1:
        raise ValueError("Unsupported update schemaVersion")
    if manifest["applicationId"] != PACKAGE:
        raise ValueError("Unexpected Android applicationId")
    if type(manifest["versionCode"]) is not int or manifest["versionCode"] <= 0:
        raise ValueError("versionCode must be a positive integer")
    if type(manifest["size"]) is not int or manifest["size"] <= 0:
        raise ValueError("APK size must be a positive integer")
    tag = manifest["tag"]
    if not isinstance(tag, str) or not TAG.fullmatch(tag):
        raise ValueError("Release tag is invalid")
    if manifest["versionName"] != tag:
        raise ValueError("versionName and release tag differ")
    if not isinstance(manifest["notes"], str) or not manifest["notes"].strip():
        raise ValueError("Release notes must not be blank")
    if not isinstance(manifest["sha256"], str) or not SHA256.fullmatch(manifest["sha256"]):
        raise ValueError("Invalid APK SHA-256")
    expected_url = (
        f"https://github.com/{REPO}/releases/download/{quote(tag, safe='')}/"
        f"SeedNest-Native-{quote(tag, safe='')}.apk"
    )
    if manifest["apkUrl"] != expected_url:
        raise ValueError("APK URL must point to the matching official tagged release asset")
    print(f"Valid release metadata: {tag} (versionCode {manifest['versionCode']})")


if __name__ == "__main__":
    try:
        validate(Path(sys.argv[1]) if len(sys.argv) > 1 else Path("latest.json"))
    except (OSError, json.JSONDecodeError, ValueError) as exc:
        print(f"Invalid release metadata: {exc}", file=sys.stderr)
        sys.exit(1)
