# SeedNest – Benutzerhandbuch

**Version 1.0 · Stand: 09.11.2026 · dokumentierter Entwicklungsstand: Alpha.0.5.007 (Android, VersionCode 46)**

SeedNest ist eine native Android-App zur **privaten Verwaltung einer Samensammlung**. Sie organisiert Sorten, einzelne Samenbehälter, Bestandsbewegungen und Lagerplätze. Dazu kommen Recherchewerkzeuge, Druckfunktionen und eine Run-Planung.

**Wichtig zum Entwicklungsstand:** SeedNest ist eine Alpha-Version. Das Handbuch beschreibt Funktionen, die im Quellcode von Alpha.0.5.007 vorhanden sind. Einzelne Funktionen können auf unterschiedlichen Android-Geräten abweichen. Die im Download-Repository veröffentlichte APK kann einen anderen Versionsstand haben.

**Bei Problemen immer zuerst die aktuelle Version prüfen:** Öffne **Mehr → Updates** oder die [offiziellen GitHub-Releases](https://github.com/AstroManager-Dev/SeedNest-Releases/releases). Ist eine neuere Version verfügbar, sichere wichtige Bestände und installiere das Update **über die vorhandene App**. Prüfe danach, ob der Fehler weiterhin auftritt. **Erst dann** einen Fehlerbericht erstellen. Wenn die App nicht startet, überprüfe die Releases im Browser und melde den Fehler mit der installierten Version. **Nicht deinstallieren**, solange du keine verifizierte Sicherung hast.

**Kennzeichnungen:**
- **Regulär:** Bestandteil der aktuellen App; Fehler sind während der Alpha-Phase trotzdem möglich.
- **Optional:** Nur bei Bedarf nutzen; gegebenenfalls sind Internet, zusätzliche Apps oder Einstellungen notwendig.
- **Experimentell:** Besonders sorgfältig prüfen; nicht für unbeaufsichtigte Abläufe verwenden.
- **Geplant:** Noch keine verlässlich nutzbare Funktion. Solche Funktionen werden nicht als vorhandene Bedienoption beschrieben.

## 1. Installation und sicherer Einstieg

1. Lade die aktuelle signierte APK von https://github.com/AstroManager-Dev/SeedNest-Releases/releases herunter.
2. Öffne die APK auf deinem Android-Gerät. Android kann zunächst die Freigabe für die Installation aus dieser Quelle verlangen.
3. Wenn SeedNest bereits installiert ist, **installiere die neue APK als Update über die bestehende App**. Nicht vorher deinstallieren.
4. Starte SeedNest. Die Hauptnavigation erscheint unten mit **Start**, **Sorten**, **Lager** und **Mehr**.
5. Lege vor umfangreichen Änderungen unter **Mehr → Sicherung & Import → Backup speichern** eine Sicherung an und bewahre sie außerhalb der App auf.

SeedNest benötigt Android 8 oder neuer. Eine Deinstallation kann die lokal gespeicherten Daten entfernen. Bei Signaturfehlern nicht zur Problemlösung deinstallieren, sondern zuerst eine Datensicherung und Fehlermeldung vorsehen.

## 2. Orientierung in SeedNest

Die vier Bereiche der unteren Navigationsleiste sind:
- **Start:** Überblick über deine Sammlung, Bestände und Schnellzugriffe.
- **Sorten:** Sortenkatalog, Suche, Ansichten, Favoriten und Sortenprofile.
- **Lager:** Lagerorte, Hierarchien, Taschen, Plätze und enthaltene Behälter.
- **Mehr:** Buchungen, Run-Planung, Einkaufsliste, KI & Recherche, Sicherungen, Druckhilfen, Updates und Einstellungen.

Über das **Plus-Symbol** kannst du je nach aktuellem Bereich Sorten, Samenbehälter oder Lagerorte anlegen. Die obere Leiste bietet außerdem den **QR-/Strichcode-Scanner** oder im Sortenkatalog die Ansichts- und Filteroptionen.

**Tipp:** Die Sorten- und die Bestandsverwaltung sind getrennt. Eine Sorte bezeichnet den Katalogeintrag; ein Behälter enthält eine konkrete Menge dieser Sorte.

## 3. Sorten anlegen und bearbeiten

1. Öffne **Sorten** und tippe auf **+ → Sorte anlegen**.
2. Trage den **Sortennamen** ein und ergänze nach Möglichkeit den **Breeder/Züchter**.
3. Wähle die vorhandenen Eigenschaften wie **Samenart** und **Blühtyp** passend zum tatsächlichen Produkt.
4. Ergänze optional Angaben wie Genetik, Indica-/Sativa-/Ruderalis-Verhältnis, THC/CBD, Blüte- oder Ernteangaben, Aroma, Ertrag und Beschreibung.
5. Füge bei recherchierten Angaben nach Möglichkeit eine **Quellen-URL** samt Abrufdatum hinzu.
6. Speichere den Eintrag. Ein Samenbestand wird dadurch noch nicht angelegt.

Die App warnt vor möglichen Dubletten anhand von Name, Breeder und Blühtyp. Eine bewusst getrennte Sorte kannst du nach Bestätigung trotzdem anlegen. Kennzeichnungen/Tags lassen sich komma­getrennt erfassen; sie unterstützen spätere Suche und Filterung.

Über das **Sortenprofil** kannst du Angaben bearbeiten, Favoriten setzen, Behälter hinzufügen, eine Recherche starten, die Sorte auf die Einkaufsliste setzen oder für einen Run vorsehen.

**Wichtig:** THC-, CBD- und andere Züchterangaben können je nach Quelle variieren. Unbestätigte Werte lieber frei lassen als schätzen.

## 4. Sorten suchen, filtern und vergleichen

1. Öffne **Sorten** und nutze die Suchfunktion.
2. Öffne das Menü für **Filter, Sortierung und Ansicht** in der oberen Leiste.
3. Wähle beispielsweise Favoriten, eine bestimmte Kennzeichnung, Sortentyp oder Blühtyp.
4. Sortiere nach **Name A–Z**, **Name Z–A**, **Breeder**, **meisten/wenigsten Samen**, **Favoriten** oder **THC auf-/absteigend**.
5. Öffne ein Sortenprofil. Innerhalb der gefilterten Auswahl kannst du zu benachbarten Profilen wischen.

Unter **Mehr → Sammlung & Lager → Sorten vergleichen** stehen direkte Vergleiche von vorhandenen Angaben zur Verfügung. Unter **Datenprüfung** lassen sich fehlende Angaben und mögliche Dubletten erkennen.

Ein THC-Vergleichswert dient nur zum Sortieren. Er ersetzt nicht die vollständige Originalangabe der Quelle.

## 5. Samenbehälter und feste Behälternummern

Eine Sorte kann mehrere getrennte Behälter besitzen, zum Beispiel Packungen mit unterschiedlichem Kaufdatum oder Lagerplatz.

1. Öffne das **Sortenprofil** und wähle **Samen hinzufügen** beziehungsweise einen neuen Behälter.
2. Wähle eine vorhandene Sorte oder lege bei Bedarf gleichzeitig eine neue Sorte an.
3. Trage die **tatsächlich vorhandene Samenanzahl** ein – bei angebrochenen Packungen nicht automatisch den Verpackungsaufdruck.
4. Ergänze optional **Kaufdatum**, **private Notizen**, **Foto** und **Lagerort**.
5. Speichere den Behälter.

SeedNest vergibt eine **feste Behälternummer** automatisch. Diese Nummer bleibt beim Umräumen bestehen und wird nicht frei neu vergeben, wenn ein Behälter gelöscht wird. Sie ist nach dem Anlegen nicht manuell änderbar.

Du findest den Behälter über die jeweilige Sorte, über Lagerorte oder über **Alle Behälter**.

## 6. Bestand buchen: Zugang und Entnahme

Die Behältermenge wird über nachvollziehbare Buchungen verändert, statt die Anzahl eines bestehenden Behälters frei zu überschreiben.

1. Öffne **Mehr → Sammlung & Lager → Bestand buchen** oder einen konkreten Behälter.
2. Wähle den passenden Behälter.
3. Entscheide zwischen **Zugang** und **Entnahme**.
4. Gib die Menge und bei Bedarf einen Grund ein.
5. Prüfe die Angaben und bestätige die Buchung.

**Zugang** erhöht, **Entnahme** verringert den vorhandenen Bestand. Die App prüft ungültige Mengen und verhindert unzulässige negative Bestände. Im Behälter lassen sich die vorhandene Menge und zugehörige Vorgänge nachvollziehen.

**Änderung rückgängig** unter **Mehr → Sammlung & Lager** ist für bestimmte zuletzt vorgenommene Angaben- oder Lageränderungen vorgesehen; es ist kein Ersatz für ein Backup.

## 7. Lagerorte und Taschen anlegen

Unter **Lager** verwaltest du eine Hierarchie wie **Schrank → Tasche → Ebene → Platz**.

1. Öffne **Lager** und tippe auf **+**.
2. Wähle den passenden Lagerorttyp, beispielsweise **Schrank**, **Tasche** oder einen anderen angebotenen Lagerort.
3. Vergib einen Namen und optional eine Beschreibung oder ein Foto.
4. Wähle gegebenenfalls den übergeordneten Lagerort.
5. Bei einer **Tasche** legst du die Ebenen, die Anzahl der Plätze je Ebene und die Spalten fest.
6. Aktiviere optional **Deckelnetz vorhanden**, wenn die tatsächliche Tasche das besitzt.
7. Speichere den Lagerort.

Öffne eine Tasche, um ihr grafisches Raster und die belegten bzw. freien Plätze zu sehen. Ein Platz soll nicht doppelt belegt werden. Behälter ohne festen Platz oder im Deckelnetz werden gesondert behandelt.

Unter **Mehr → Sammlung & Lager → Behälter umräumen** können mehrere Behälter in einem Vorgang verschoben werden.

## 8. QR-Codes, Strichcodes und Scanner

SeedNest kann QR-Etiketten für Sorten, Behälter und Lagerorte erzeugen. Die aktuelle Version unterstützt bei geeigneten Behälternummern auch **Code 128** für Dosenetiketten. Bereits erstellte QR-Codes sollen weiterhin lesbar bleiben.

1. Öffne eine Sorte, einen Behälter oder einen Lagerort.
2. Wähle die entsprechende **QR-/Etikett-Funktion**.
3. Nutze den Scanner oben in der App oder unter **Mehr → Code scannen**.
4. Richte die Kamera auf einen zu SeedNest gehörenden Code.
5. Falls die Kamera nicht nutzbar ist, gehe zu **Mehr → App & Hilfe → Code manuell eingeben**.

**Tipp bei runden Dosen:** Einen längs platzierten Strichcode bei Bedarf mit gedrehtem Handy erfassen und Reflexionen durch leichtes Drehen der Dose verringern. Alte oder ungeeignete Nummern bleiben als QR-Code gekennzeichnet.

## 9. Etiketten, Taschenpläne und PDF-Druck

Das ist eine **Druckfunktion der App** und nicht das Format dieses Handbuchs.

- **Tasche:** **Lager → Tasche öffnen → PDF & Drucken**; dort **A4-Taschenplan** oder **Dosenetiketten** wählen.
- **Sorte:** **Sortenprofil → Drei Punkte → Etiketten als PDF / drucken**.
- **Behälter:** Behälter öffnen und dessen Etikettenoption auswählen.
- **Andere Lagerorte:** Lagerort öffnen und **Etikett als PDF / drucken** verwenden.

Die Standardgröße für Dosenetiketten einer Lagertasche ist **60 × 30 mm**. Weitere Größen und eigene Vorlagen sind möglich. Die App kann die PDF vor dem Speichern anzeigen und ermöglicht Drucken über Android.

**Wichtig für korrekte Maße:** Beim Druck **A4** und **100 % / tatsächliche Größe** einstellen. Nicht an die Seite anpassen. Das Kontrollmaß im Taschenplan soll 20 mm betragen.

Bei Dosenetiketten kannst du unter anderem **alle**, **nur neue oder geänderte** beziehungsweise **zum Neudruck vorgemerkte** Etiketten auswählen.

**Druckstatus:** Erst nach tatsächlich vollständig erfolgtem Druck ausdrücklich bestätigen. Nur eine Vorschau, das Speichern einer PDF, ein abgebrochener Druck oder einzelne gedruckte Seiten dürfen **nicht** als vollständig gedruckt markiert werden. Der Druckstatus ist lokal auf dem jeweiligen Gerät gespeichert und gehört nicht zum Bestandsbackup.

## 10. Verpackungsfoto und Fotoscan

Beim Anlegen von Samen kann der Verpackungsaufdruck per **Kamera** oder über ein **JPEG-/PNG-Bild** erfasst werden.

1. Starte den Verpackungsscan im Behälterformular.
2. Fotografiere möglichst eine gut lesbare Seite oder wähle ein Bild.
3. Kontrolliere den Bildausschnitt und den erkannten Text; du kannst den Text korrigieren.
4. Prüfe vorgeschlagenen **Sortennamen**, **Breeder**, **Samenart**, **Blühtyp** und weitere Informationen.
5. Übernimm die Vorschläge in das Formular und kontrolliere dort besonders die **aktuell vorhandene Samenanzahl**.
6. Speichere erst danach den gesamten Eintrag.

Der grundlegende Fotoscan verwendet lokale Texterkennung. Eine zusätzliche KI-Bildauswertung ist optional. Das System kann Schrift, Zahlen oder die Zuordnung zum Breeder falsch interpretieren. Fehlende Werte bleiben besser leer.

Wenn du ausdrücklich **Gemini** für eine Foto-Auswertung auswählst, können Bild und erkannter Text an Google übertragen werden. Diese Option nicht mit rein lokaler Texterkennung verwechseln.

## 11. Rechnungs-Scan und Rechnungsimport – EXPERIMENTELL

**Status: Experimentell.** Die Rechnungserkennung ist noch nicht für unbeaufsichtigte Bestandsübernahmen geeignet. Es können Positionen, Packungsgrößen, Preise oder Mengen falsch erkannt werden.

1. Öffne **Mehr → Rechnung importieren**.
2. Wähle ein **PDF mit bis zu 10 Seiten** oder ein **JPEG-/PNG-Bild**, maximal **20 MB**.
3. Warte auf die lokale Texterkennung. Bearbeite bei Bedarf den erkannten Rechnungstext.
4. Lass dir Positionen vorschlagen oder füge fehlende Positionen manuell hinzu.
5. Prüfe je Position: **Sorte**, **Breeder**, **Anzahl Packungen**, **Samen je Packung**, **aktuellen Restbestand**, **Preis** und **Kaufdatum**.
6. Wähle nur die Positionen aus, die übernommen werden sollen.
7. Aktiviere die Bestätigung, dass alles kontrolliert wurde, und tippe erst dann auf **Positionen als Bestand übernehmen**.

**Beispiel:** Zwei Packungen mit je drei Samen ergeben sechs Samen. Bei einer angebrochenen Packung muss die **tatsächlich vorhandene Menge** abweichend eingetragen werden.

Bei möglicherweise bereits importierten Rechnungen erscheint eine zusätzliche Warnung. Die App bucht nicht automatisch direkt nach dem Scan. Trotzdem: zunächst nur mit **Testdaten** verwenden und vorher ein Backup anlegen.

## 12. KI-Recherche über Gemini – OPTIONAL

Die optionale Gemini-Anbindung kann fehlende oder bestehende Sortenangaben anhand von Webquellen untersuchen.

1. Öffne **Mehr → KI & Recherche → KI-Einstellungen** und richte Gemini bei Bedarf mit einem eigenen API-Schlüssel ein.
2. Starte **Sorte recherchieren** oder **Mehrere Sorten recherchieren**.
3. Wähle die gewünschten Sorten und Angaben; prüfe die Hinweise zu Tagesgrenze, Quoten und möglichen Kosten beim Anbieter.
4. Begutachte die gefundenen Werte zusammen mit den **Quellen** und vorhandenen Angaben.
5. Bei widersprüchlichen Quellen musst du eine passende Quelle wählen oder das Feld abwählen.
6. Übernimm nur die ausgewählten und bestätigten Ergebnisse.

Sammelläufe können unter bestimmten Bedingungen pausiert und fortgesetzt werden. Ergebnisse werden nicht ungefragt in den Bestand übernommen.

**Wichtig:** KI-Resultate können trotz Quellenangabe falsch sein. Auto/Photoperiodisch, Regular/Feminisiert, Genetik und Prozentangaben vor dem Übernehmen kontrollieren. Bestandsmengen und Lagerplätze dürfen von einer Recherche nicht verändert werden.

## 13. Recherche-ZIP mit einer anderen KI austauschen

Du kannst Sorteninformationen auch ohne fest in SeedNest integrierte externe KI bearbeiten lassen.

1. Öffne **Mehr → KI & Recherche → Recherche-ZIP exportieren**.
2. Lade die ZIP mit der enthaltenen JSON-Datei in eine KI deiner Wahl hoch, die Quellen recherchieren kann.
3. Bitte um Ergänzung fehlender Felder **mit verifizierbaren Quellen** und um Erhaltung der IDs und Datenstruktur.
4. Speichere das Ergebnis als passendes ZIP oder JSON.
5. Gehe zu **Mehr → KI & Recherche → Recherche importieren**.
6. Prüfe die Importvorschau und bestätige nur die korrekten Angaben.

Der Rechercheexport enthält **keine privaten Mengen, Lagerplätze, Fotos oder Notizen**. Er ist kein vollständiges Backup. Nicht mit **Mehr → Sicherung & Import → Backup speichern** verwechseln.

## 14. Lokale KI – EXPERIMENTELL

**Status: Experimentell.** Die lokale KI ist besonders abhängig von Gerät, RAM, verfügbarem Speicher, Modellkompatibilität und Android-Laufzeit.

1. Öffne **Mehr → KI & Recherche → KI-Einstellungen**.
2. Wähle bei Bedarf den lokalen Modus statt Gemini.
3. Das optionale Paket enthält ein Bild- und ein Textmodell (**SmolVLM2-500M** und **Qwen3-0.6B**) und benötigt einen Download von ungefähr **708 MB**, zusätzlich Speicher für den Cache.
4. Starte den Download nur bei ausreichendem freiem Speicher und stabiler Verbindung.
5. Kontrolliere jedes Auswertungsergebnis. Bei Problemen die **KI-Abbruchdiagnose** nutzen oder zum normalen manuellen Verfahren zurückkehren.

Die App prüft Geräte- bzw. Laufzeitvoraussetzungen. Selbst bei erfolgreicher Installation können Modellstart, Geschwindigkeit oder Bildinterpretation fehlschlagen.

**Datenschutz:** Nur im tatsächlich ausgewählten lokalen KI-Modus bleibt die KI-Auswertung lokal. Eine separat gestartete Webrecherche nutzt weiterhin Internetverbindungen; bei ausdrücklich ausgewähltem Gemini gelten dessen Cloud-Hinweise.

## 15. Einkaufsliste

Die Einkaufsliste hält geplante Käufe getrennt vom vorhandenen Bestand.

1. Öffne **Mehr → Einkaufsliste** oder den entsprechenden Eintrag im Sortenprofil.
2. Füge eine Sorte und die gewünschte Samenanzahl hinzu.
3. Ergänze optional Notizen und den gewünschten Anbieter.
4. Markiere Einträge je nach Fortschritt, etwa als bestellt oder gekauft.
5. Nach dem tatsächlichen Erwerb nutze **Gekaufte Samen als Bestand erfassen**, um einen Behälter anzulegen.

**Wichtig:** Änderungen an der Einkaufsliste buchen **keine Samen**. Auch der Status **Gekauft** erzeugt nicht automatisch einen Lagerbestand.

## 16. Next Run und aktueller Run

**Next Run** dient zur Planung zukünftiger Samenentnahmen. Planeinträge reservieren Mengen, buchen sie aber zunächst nicht ab.

1. Öffne **Mehr → Next Run**.
2. Wähle **Neuer Plan** und vergib Bezeichnung, optional Termin und Notiz.
3. Füge Sorten und geplante Samenmengen hinzu. Eine Zuordnung zu bestimmten Behältern ist optional.
4. Kontrolliere den Lagerbestand und die **Reservierungen anderer Pläne**. Bei Konflikten oder Fehlmengen zeigt SeedNest Warnungen.
5. Starte den Plan über **Als aktuellen Run starten**, wenn er durchgeführt werden soll.
6. Vor einer tatsächlichen Entnahme zeigt die App eine Bestätigung mit den betroffenen Behältern und Mengen.

**Wichtig:** Beim Start des Runs oder beim Hinzufügen zu einem laufenden Run können tatsächlich verwendete Mengen **abgebucht** werden. Einen geplanten Run zu löschen verändert dagegen keine Bestandsbuchung. Bereits gebuchte Entnahmen werden durch Abbrechen oder Löschen eines Runs **nicht automatisch zurückgebucht**.

Prüfe die angezeigten Mengen besonders aufmerksam, wenn mehrere Runs dieselben Behälter reservieren.

## 17. Sicherung, Wiederherstellung und Export

### Normales ZIP-Backup

1. Öffne **Mehr → Sicherung & Import → Backup speichern**.
2. Wähle einen sicheren Speicherort, zum Beispiel einen Ordner außerhalb des App-Datenbereichs.
3. Prüfe, ob die ZIP-Datei tatsächlich gespeichert wurde.
4. Wiederhole die Sicherung regelmäßig und vor größeren Änderungen.

### Passwortgeschütztes Backup

1. Öffne **Mehr → Sicherung & Import → Geschütztes Backup**.
2. Gib ein Passwort mit mindestens **10 Zeichen** ein und wiederhole es.
3. Speichere die verschlüsselte **.seednest-Datei**.
4. Bewahre das Passwort unabhängig von der Datei sicher auf.

Das Passwort wird nicht gespeichert. **Ohne das Passwort kann die verschlüsselte Sicherung nicht wiederhergestellt werden.**

### Wiederherstellen

1. Öffne **Mehr → Sicherung & Import → Datei importieren** beziehungsweise die Wiederherstellungsoption der verschlüsselten Sicherung.
2. Wähle die passende Datei aus und gib gegebenenfalls das Passwort ein.
3. Prüfe die Vorschau mit den enthaltenen Sorten und Bestandsdaten.
4. Bestätige die Wiederherstellung nur, wenn du den vorhandenen Bestand entsprechend ersetzen möchtest.

**Wichtig:** Eine Wiederherstellung ist keine Zusammenführung beliebiger Datenbestände. Ein Recherche-ZIP ist kein Bestandsbackup. Speichere Backups nicht ausschließlich im internen App-Speicher.

## 18. Darstellung, Updates und Fehler melden

### Darstellung

Unter **Mehr → App & Hilfe → Darstellung & Darkmode** stehen **System folgen**, **Schwarz/Weiß/Grau-Darkmode**, **Dark Green**, **Purple Haze** und **Clean Light** zur Auswahl. Die Wahl wird auf dem Gerät gespeichert.

### Updates

**Alpha-Regel für jeden Fehler:** Immer zuerst unter **Mehr → Updates** nach einer neueren Version suchen, bevor du den Fehler meldest. Ein Fehler kann in einer späteren Alpha bereits behoben sein. Alternativ die [aktuell verfügbaren APKs auf GitHub](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) prüfen. Vor dem Update wichtige Daten sichern; die neue APK über die bestehende Installation installieren, **nicht deinstallieren**. Danach den ursprünglichen Fehler erneut prüfen. Wenn er weiterhin auftritt, mit App-Version und Schritten melden.

Ein Update wird bewusst gestartet; Android kann bei der Installation eine weitere Bestätigung verlangen.

### Fehlerbericht

**Vor dem Melden:** Zuerst **Mehr → Updates** prüfen, gegebenenfalls die neuere Alpha installieren und testen, ob der Fehler noch vorhanden ist. Falls SeedNest nicht startet, im Browser die [offiziellen Releases](https://github.com/AstroManager-Dev/SeedNest-Releases/releases) vergleichen. Niemals ungeprüft deinstallieren, um ein Update zu erzwingen.

1. Öffne **Mehr → Fehler per E-Mail melden** oder **Mehr → App & Hilfe → Testanleitung & Fehlerbericht**.
2. Trage einen kurzen Titel, die Schritte zum Fehler, das erwartete und das tatsächliche Verhalten ein.
3. Prüfe die Vorschau. Diagnosedaten können optional hinzugefügt werden.
4. Öffne die E-Mail-App und versende den Bericht selbst.

Die App versendet keine E-Mail ungefragt. Private Bestandsdateien, ungeschwärzte Rechnungen und API-Schlüssel nicht öffentlich weitergeben.

## 19. Häufige Fragen und Fehlerbehebung

**Erste Maßnahme bei jedem Problem:** Prüfe **Mehr → Updates** beziehungsweise die offiziellen GitHub-Releases und installiere bei Bedarf ein neueres Alpha-Update, nachdem du ein Backup angelegt hast. Bleibt das Problem bestehen, nutze die folgenden Hinweise und melde den Fehler. Bei einer nicht startenden App den Versionsvergleich im Browser durchführen.

### Die Kamera erkennt meinen Code nicht.

Prüfe Kameraberechtigung, Licht, Abstand und Reflexionen. Bei einer runden Dose das Handy drehen oder die Dose leicht bewegen. Alternativ **Mehr → App & Hilfe → Code manuell eingeben** nutzen.

### Der Fotoscan erkennt falsche Sorte oder Samenanzahl.

Den erkannten Text und die Vorschläge korrigieren. Den **tatsächlichen Restbestand** manuell eingeben. Der Scan speichert nicht automatisch, sondern liefert Formulardaten zur Prüfung.

### Eine Sorte erscheint doppelt.

Prüfe Name, Breeder und Blühtyp. Unter **Mehr → Sammlung & Lager → Datenprüfung** lassen sich Dubletten kontrollieren. Nicht versehentlich Behälter über getrennte Sorteneinträge verteilen.

### Warum sind Samen in zwei Next-Run-Plänen verplant?

Die Planung zeigt konkurrierende Reservierungen an. Passe die Mengen oder Behälterzuordnung an, bevor du den Run startest. Eine Planung allein verringert den Lagerbestand nicht.

### Wieso zeigt der Druckstatus „nicht gedruckt“?

Der Druckstatus wird nur nach ausdrücklicher Bestätigung eines vollständig erfolgten Drucks gesetzt. Das Öffnen oder Speichern einer PDF genügt nicht. Er wird nicht über das Bestandsbackup mitgenommen.

### Die lokale KI funktioniert nicht.

**Experimentelle Funktion:** Verfügbaren Speicher, Gerätekompatibilität und Modellpaket prüfen. Eine KI-Abbruchdiagnose ist verfügbar. Die manuelle Sortenerfassung und der reguläre Fotoscan bleiben Alternativen.

### Der Rechnungsimport hat falsche Positionen vorgeschlagen.

**Experimentelle Funktion:** Rechnungs­text und jede einzelne Position bearbeiten. Besonders Packungen × Samen und aktueller Restbestand kontrollieren. Nichts bestätigen, solange die Vorschau falsch ist.

### Das Update lässt sich nicht installieren.

Prüfe, ob die APK aus dem offiziellen Release-Repository stammt und eine höhere Version besitzt. Bei Signaturfehlern **nicht** die bestehende App deinstallieren, bevor die Daten gesichert und der Fehler geklärt sind.

### Können andere meine Sammlung sehen?

Die normale Sammlung wird lokal gespeichert. Optionale Web-/Gemini-Funktionen und bewusst exportierte Dateien sind gesondert zu betrachten. Eine zentrale Community-StrainDB und Cloud-Freigaben aus Entwicklungsplänen sind **nicht automatisch** Bestandteil dieser Alpha-App.

## 20. Datenschutz, Grenzen und Versionshinweise

SeedNest speichert seine grundlegenden Sammlungsdaten lokal auf dem Android-Gerät. Die App nutzt unter anderem eine SQLite-Datenbank. Ein Backup darf sensible Angaben enthalten und sollte entsprechend geschützt werden.

Optionale Internetfunktionen wie Gemini-Recherche, Webseitenabrufe und GitHub-Updateprüfung stellen Netzwerkverbindungen her. Die experimentelle lokale KI ist davon zu unterscheiden. Die Android-App besitzt je nach Funktion Berechtigungen für Kamera, Internet, Benachrichtigungen und Installation von Updates.

**Bekannte Grenzen:** Für Rechnungs-Scan und lokale KI besteht noch keine verlässliche Geräteabnahme; insbesondere Bilderkennung und Modelllaufzeit können Fehler verursachen. Druckmaße, Barcode-Lesbarkeit und Android-Installationsverhalten sollten auf realen Geräten geprüft werden.

**Handbuchpflege:** Dieses Dokument bezieht sich auf die Codebasis **Alpha.0.5.007**. Bei neuen Versionen müssen Bedienelemente und Formulierungen gegen den tatsächlichen Quellcode und den veröffentlichten APK-Stand geprüft werden.

**Offizielle Links:**
- Releases: https://github.com/AstroManager-Dev/SeedNest-Releases/releases
- Dokumentation: https://github.com/AstroManager-Dev/SeedNest-Releases/tree/main/docs
- Fehler und Anregungen: https://github.com/AstroManager-Dev/SeedNest-Releases/issues
