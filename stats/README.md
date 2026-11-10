# SeedNest Download Analytics

Die GitHub-Pages-Website liegt in `stats/index.html`. Der Workflow `.github/workflows/seednest-analytics.yml` erfasst täglich die APK-Downloads und speichert sie in `stats/data/history.json`.

GitHub Pages: **Settings → Pages → Build and deployment → GitHub Actions**.

Die Downloadzahlen sind keine eindeutigen Nutzerzahlen; die Tageshistorie beginnt ab dem ersten Snapshot.

## Dauerhafter APK-Download

Der Pfad `stats/download/index.html` wird als feste GitHub-Pages-Adresse `https://astromanager-dev.github.io/SeedNest-Releases/download/` ausgeliefert. Der Workflow kopiert nach lokaler Schema-Prüfung die Stammdatei `latest.json` unverändert nach `stats/latest.json` **nur in das bereitgestellte Pages-Artefakt**. Der Besucher wird anhand der Freigabe-Manifestdaten zur jeweils aktuellen signierten APK weitergeleitet; bei Fehlern bleibt die offizielle Releases-Seite erreichbar. Mit `?manual=1` lässt sich die aufgelöste Version ohne Weiterleitung prüfen. Ein neues Alpha-Release erhält die neue Ziel-APK erst nach Freigabe über `latest.json`.
