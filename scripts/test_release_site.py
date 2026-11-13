import json
from pathlib import Path
import shutil
import tempfile
import unittest
from render_release_site import render

ROOT=Path(__file__).resolve().parents[1]


class ReleaseSiteTest(unittest.TestCase):
    def test_next_release_updates_all_offline_fallbacks_and_links(self):
        with tempfile.TemporaryDirectory() as folder:
            root=Path(folder);shutil.copytree(ROOT/'stats',root/'stats')
            m=json.loads((ROOT/'latest.json').read_text())
            m.update(versionCode=999,versionName='Alpha.9.9.999',tag='Alpha.9.9.999',size=123400000,
                     notes='Test <script> & notes',apkUrl='https://github.com/AstroManager-Dev/SeedNest-Releases/releases/download/Alpha.9.9.999/SeedNest-Native-Alpha.9.9.999.apk')
            (root/'latest.json').write_text(json.dumps(m))
            render(root)
            pages=['index.html','changelog/index.html','download/index.html']
            first={p:(root/'stats'/p).read_text() for p in pages}
            for p,s in first.items():
                self.assertIn(m['versionName'],s,p);self.assertIn(m['apkUrl'],s,p)
                self.assertNotIn('Alpha.0.5.007',s,p)
            self.assertIn('123,4 MB',first['index.html'])
            self.assertIn('123,4 MB',first['download/index.html'])
            self.assertIn('&lt;script&gt; &amp; notes',first['changelog/index.html'])
            self.assertIn('site.js?v=999',first['index.html'])
            self.assertEqual(json.loads((root/'stats/latest.json').read_text()),m)
            render(root)
            self.assertEqual(first,{p:(root/'stats'/p).read_text() for p in pages})


if __name__=='__main__':unittest.main()
