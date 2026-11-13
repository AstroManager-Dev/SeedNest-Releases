#!/usr/bin/env python3
"""Render current release metadata into every public download entry point."""
import html
import json
from pathlib import Path
import re
import sys
from check_latest import validate


def render(root):
    validate(root/'latest.json')
    m=json.loads((root/'latest.json').read_text())
    name=html.escape(m['versionName']);url=html.escape(m['apkUrl'],quote=True)
    size=f"{m['size']/1000000:.1f}".replace('.',',')+' MB'
    note=html.escape(m['notes'])
    def update(path,changes):
        p=root/'stats'/path;s=p.read_text()
        for pattern,value in changes:
            s,count=re.subn(pattern,lambda match:value,s,flags=re.S)
            if count!=1:raise ValueError(f'{path}: expected one match for {pattern}, found {count}')
        s=re.sub(r'(src="(?:\./|\.\./)assets/site\.js)(?:\?v=\d+)?(" )',rf'\g<1>?v={m["versionCode"]}\2',s)
        p.write_text(s)
    update('index.html',[
        (r'(<strong id="release-name">).*?</strong>',f'<strong id="release-name">{name}</strong>'),
        (r'<span id="release-size">.*?</span>',f'<span id="release-size">{size}</span>'),
        (r'<a class="button" href="[^"]*" id="download-primary">',f'<a class="button" href="{url}" id="download-primary">'),
        (r'<a class="button" href="[^"]*" id="download-bottom">',f'<a class="button" href="{url}" id="download-bottom">'),
        (r'<p class="micro" id="release-notes">.*?</p>',f'<p class="micro" id="release-notes">{name} · {size} · {note}</p>')])
    card=f'<article class="version"><span class="release-chip">Zuletzt veröffentlicht</span><h2>{name}</h2><p class="version-preview">{note}</p><div class="version-actions"><a href="{url}">APK herunterladen</a> · <a href="https://github.com/AstroManager-Dev/SeedNest-Releases/releases/tag/{name}">Release Notes öffnen</a></div></article>'
    update('changelog/index.html',[(r'(?<=aria-live="polite">)\s*<article.*?</article>\s*(?=</section>)','\n'+card+'\n')])
    update('download/index.html',[
        (r'<div id="status".*?</div>',f'<div id="status" class="download-state" role="status" aria-live="polite">Freigegeben: {name} · {size} · Download über GitHub</div>'),
        (r'<a id="download".*?</a>',f'<a id="download" class="button" href="{url}">SeedNest {name} herunterladen ↗</a>')])
    (root/'stats/latest.json').write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
    print(f'Rendered release pages: {m["versionName"]} / {size}')


if __name__=='__main__':render(Path(sys.argv[1]) if len(sys.argv)>1 else Path('.'))
