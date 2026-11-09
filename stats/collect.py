#!/usr/bin/env python3
"""SeedNest: GitHub-APK-Downloadzähler täglich speichern.

Wird ausschließlich durch GitHub Actions im öffentlichen Release-Repository genutzt.
Keine zusätzlichen Python-Abhängigkeiten, keine privaten Daten.
"""
import datetime as dt
import json
import os
from pathlib import Path
import urllib.error
import urllib.request

REPO = "AstroManager-Dev/SeedNest-Releases"
OUT = Path(__file__).resolve().parent / "data" / "history.json"
TODAY = dt.datetime.now(dt.timezone.utc).date().isoformat()


def fetch_releases():
    releases = []
    token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
    headers = {"Accept": "application/vnd.github+json", "User-Agent": "SeedNest-Analytics/1.0", "X-GitHub-Api-Version": "2022-11-28"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    for page in range(1, 21):
        url = f"https://api.github.com/repos/{REPO}/releases?per_page=100&page={page}"
        with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=20) as response:
            chunk = json.load(response)
        if not isinstance(chunk, list):
            raise RuntimeError("Unerwartete Antwort der GitHub API")
        releases.extend(chunk)
        if len(chunk) < 100:
            break
    else:
        raise RuntimeError("Mehr als 2.000 Releases: Pagination-Limit erhöhen")
    return releases


def make_snapshot(releases):
    versions = []
    for release in releases:
        if release.get("draft"):
            continue
        apks = [a for a in (release.get("assets") or []) if str(a.get("name", "")).lower().endswith(".apk")]
        if not apks:
            continue
        versions.append({
            "tag": str(release.get("tag_name") or release.get("name") or "unbekannt"),
            "published": str(release.get("published_at") or ""),
            "count": sum(max(0, int(a.get("download_count") or 0)) for a in apks),
        })
    versions.sort(key=lambda x: x["published"], reverse=True)
    return {
        "date": TODAY,
        "collected_at": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z"),
        "total": sum(v["count"] for v in versions),
        "releases": versions,
    }


def main():
    try:
        entries = json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else []
    except (json.JSONDecodeError, UnicodeError) as exc:
        raise RuntimeError("Historie ist beschädigt – nichts überschrieben") from exc
    if not isinstance(entries, list):
        raise RuntimeError("Historie hat ein unerwartetes Format")
    snapshot = make_snapshot(fetch_releases())
    # Bei mehreren Ausführungen am selben Tag: letzten Tagesstand ersetzen.
    entries = [e for e in entries if isinstance(e, dict) and e.get("date") != TODAY]
    entries.append(snapshot)
    entries.sort(key=lambda e: e["date"])
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(entries, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{TODAY}: {snapshot['total']} APK-Downloads, {len(snapshot['releases'])} Versionsstände")

if __name__ == "__main__":
    main()
