## Alpha.0.5.005 · 09.11.2026

- PDF-Schrift für Etiketten und Taschenpläne als Vektorkonturen ausgegeben, damit PDF-Viewer die Buchstabenabstände nicht verändern.
- Schriftmessung und Umbruch verwenden dieselbe Schrift; Etikettengrößen, Schnittlinien und QR-Codes bleiben erhalten.
- Bereits gespeicherte PDFs bitte neu erzeugen. Textkonturen sind druckscharf, aber nicht als Text markierbar oder durchsuchbar.

## Alpha.0.5.004 · 08.11.2026

- Mehr aufgeräumt: vier Schnellzugriffe und vier aufklappbare Bereiche, Updates direkt oben.
- Neuer Schwarz-Weiß-Grau-Darkmode für die gesamte Oberfläche; zusätzlich System folgen und gespeicherte Designauswahl.
- A4-Taschenplan mit Belegung aller Ebenen, Deckelnetz und Dosen ohne festen Platz als PDF speichern oder drucken.
- Dosenetiketten für Lagertaschen starten mit 60 × 30 mm und 24 Etiketten je A4-Seite: Sorte, Breeder, Behältercode, Auto/Photo und QR.
- Andere Etiketten für Sorten, einzelne Dosen und Lagerorte in Millimetern einstellen; eigene benannte Vorlagen speichern, auswählen und löschen.
- Lagerort-QR-Codes öffnen den passenden Bereich in der App.
- SeedNest unter Mehr freiwillig über PayPal.Me unterstützen.
- Unterstützung öffnet die externe PayPal-Seite; Betrag und Zahlung werden dort selbst gewählt.

## Alpha.0.5.003 · 08.11.2026

- Changelog zeigt direkt die Versionen und Änderungen, ohne Einleitung und doppelte Überschrift.

## Alpha.0.5.002 · 08.11.2026

- Changelog aufgeräumt und auf Änderungen der App konzentriert.

## Alpha.0.5.001 · 08.11.2026

- GitHub-basierte Updateprüfung mit einmaligem Hinweis beim ersten Start.
- Optionale tägliche Prüfung beim App-Start, manuelle Prüfung und Pop-up mit Änderungen, Später und Version überspringen.
- APK-Download mit Prüfung von Größe, SHA-256, App-Kennung, höherem Versionscode und identischer Signatur; Installation nach Android-Bestätigung.
- Offline-Changelog bis zum ersten dokumentierten Build direkt in der App unter Mehr → Updates & Changelog.
- Öffentliche Release-Dokumentation und Updateinformationen über SeedNest-Releases.

## 0.4.0 Alpha 20 · 08.11.2026

- Webrecherche wertet Produkt-Datentabellen und angefragte Felder gezielter aus. Eindeutige Tabellenangaben können ausgelassene KI-Felder in der Übernahmevorschau ergänzen.
- Indica-, Sativa- und Ruderalis-Anteile werden auch bei Autoflower-Sorten gemeinsam unterstützt, ohne fehlende Anteile zu erfinden.
- Blütephase und Gesamtdauer ab Keimung bleiben getrennt. Qualitative CBD-Angaben wie „Niedrig“ bleiben als solche erhalten.
- Neue Rechercheergebnisse richten sich nach der Systemsprache. Originalbelege bleiben nachvollziehbar; Zahlen, Spannen und Einheiten werden geprüft.
- Vorhandene fremdsprachige Sortenangaben lassen sich in einem eigenen Gemini-Lauf nach Vorschau übersetzen und ersetzen.
- Gemini-Recherche und Übersetzung können nach bewusstem Start im Hintergrund weiterlaufen. Fortschritt, Pause, gespeicherte Teilresultate und manuelles Fortsetzen werden unterstützt.
- Fertige Ergebnisse werden über eine Benachrichtigung beziehungsweise einen Dialog in der geöffneten App angeboten. Übernahme bleibt ausdrücklich bestätigt.
- Lokaler Gemini-Tageszähler kann nach Bestätigung zurückgesetzt werden. Googles Kontingent und Abrechnung bleiben davon unberührt.

## 0.4.0 Alpha 19 · 08.11.2026

- Einkaufsliste und Rechnungsimport sind oben unter „Mehr“ direkt erreichbar.
- Das Plus auf Start und Sorten öffnet die Auswahl: Sorte anlegen, Samen hinzufügen, Bestand buchen oder Rechnung importieren.
- Bestandsbuchung führt über eine durchsuchbare Behälterauswahl. Im Lager bleibt das Plus für neue Lagerplätze zuständig.

## 0.4.0 Alpha 18 · 08.11.2026

- Schneller Fotoscan erkennt zusätzliche OCR-Schreibweisen bei THC/CBD, etwa `THC: 24- 27%I CBD:<1%`.
- THC-Spannen bleiben vollständig erhalten; im Beispiel ergibt sich der Vergleichswert 25,5 %, CBD bleibt unter 1 %.
- Scan-Vorschau zeigt fehlende THC-/CBD-Angaben ausdrücklich. Werte bleiben im Formular bearbeitbar.
- THC und CBD stehen direkt in der Profilübersicht.
- Verpackung kann beim Bearbeiten einer Sorte erneut gescannt werden, ohne dadurch Bestand zu buchen.
- Optionale Bild-KI kann sichtbar gekennzeichnete, durch OCR noch nicht bestätigte Vorschläge liefern.

## 0.4.0 Alpha 17 · 08.11.2026

- Sorten können über das Profilmenü gelöscht werden. Vorher zeigt eine Vorschau die betroffenen Bestände, Behälter, Buchungen, Run- und Einkaufspositionen.
- Bestätigter Start eines aktuellen Runs bucht offene Mengen automatisch ab. Neue Einträge in einem aktiven Run werden ebenfalls abgebucht.
- Fehlbestand verhindert einen teilweise gebuchten Start; bereits verwendete Mengen werden nicht doppelt entnommen.
- Sorten bleiben im Katalog und erhalten eine Markierung mit aktueller Run-Menge. Beenden oder Abbrechen erstattet verwendete Samen nicht.
- Verpackungsscan übernimmt weitere aufgedruckte Sortenangaben: THC/CBD, Verhältnis, Genetik, Blütezeit, Ertrag und passende Aromazeilen – nach Prüfung und Speichern.

## 0.4.0 Alpha 16 · 08.11.2026

- Gemini-Sammelrecherche für alle oder ausgewählte Sorten: fehlende Angaben ergänzen oder bestehende Werte nach Vorschau ersetzen.
- Quellen, Konflikte sowie bisherige und neue Werte können vor der gemeinsamen Übernahme geprüft werden.
- Einkaufsliste mit gewünschter Menge, Notiz und Status Geplant/Bestellt/Gekauft; bearbeiten, entfernen und als Text kopieren.
- Aktueller Run mit Sorten, Mengen, Startdatum und Status; starten, abschließen oder abbrechen. Ein aktiver Run gleichzeitig.
- Damals blieb die Bestandsentnahme separat bestätigt; dieses Verhalten wurde mit Alpha 17 geändert.

## 0.4.0 Alpha 15 · 08.11.2026

- Gemini-Verbindungstest zeigt einen sichtbaren Ergebnisdialog statt eines kommentarlos endenden Ladebalkens.
- Klarere Behandlung von ungespeicherten Schlüsseln, Speicherfehlern, Abbruch und Zeitlimit.
- Verbindungstest prüft Modellmetadaten; er bestätigt keine erfolgreiche inhaltliche Auswertung oder kostenlose Nutzung.

## 0.4.0 Alpha 14 · 08.11.2026

- Optionales Gemini für Verpackungsbilder und öffentliche Quellenauszüge integriert, mit eigenem API-Schlüssel und Einrichtungshilfe.
- Schlüssel wird lokal über Android Keystore geschützt gespeichert. Eigene zusätzliche Tagesgrenze und verständlichere API-Fehler ergänzt.
- Auswahl und Zustimmung zur Cloud-Auswertung bleiben ausdrücklich; kein automatischer Wechsel zu Gemini.
- Schneller OCR-Scan und Rechnungsverarbeitung bleiben lokal.
- Pi-Synchronisation aus der aktiven App und dem neuen Projekt entfernt. Bestehende externe Pi-Dienste wurden dabei nicht verändert.

## 0.4.0 Alpha 13 · 08.11.2026

- Persistente Eingabeentwürfe und Bildausschnitt für Verpackungsscans ergänzt.
- Bestätigte Breeder-Zuordnungen und Alias-Korrekturen unterstützt.
- Gezielte Recherche mit Feldauswahl und gespeicherten, fortsetzbaren Zwischenständen erweitert.
- Virtuelle Reservierungen für Run-Pläne ergänzt.
- Rechnungsimport aus PDF/Bild mit editierbaren Positionen, Mengen, Preisen, Datum, Variantenabgleich und Dublettenwarnung umgesetzt. Übernahme erfolgt bestätigt und atomar.
- Optional passwortgeschützte Sicherungen ergänzt.
- Testerbereich mit Testanleitung und freiwilligem Fehlerbericht über die E-Mail-App ergänzt.

## 0.4.0 Alpha 12 · 08.11.2026

- „Mehr“ in thematische, aufklappbare Gruppen gegliedert: Sammlung & Lager, Sicherung & Austausch, KI & Recherche, Darstellung sowie Hilfe & Wissen.
- Direkte Zugriffe auf Next Run, Recherche und QR-Scan.
- Lange Hilfetexte aus der Hauptübersicht verlagert; Bedienung und Zugänglichkeit der Gruppen verbessert.

## 0.4.0 Alpha 11 · 07.11.2026

- Standard-Fotoscan auf schnelle lokale Texterkennung und Breeder-Abgleich umgestellt. Große lokale KI-Modelle laufen nicht mehr automatisch nach jedem Foto.
- Erweiterte Bild-KI bleibt optional auf eigener Schaltfläche.
- Eindeutig erkannte Packungsgröße wird als bearbeitbarer Vorschlag in das Mengenfeld übernommen. Restbestand muss weiterhin geprüft werden.
- Kamera und Galerie benötigen für den schnellen Scan keinen zusätzlichen KI-Modelldownload.

## 0.4.0 Alpha 10 · 07.11.2026

- Prozessanbindung der lokalen KI während einer aktiven Auswertung angepasst, um unnötig niedrige Prozesspriorität zu vermeiden.
- Diagnose um Prozess-ID, Priorität, CPU-Zeit und Laufzeit ergänzt.
- Bewusster Abbruch wird klarer von einem neuen Verarbeitungsfehler unterschieden.
- Lokale Modelle bleiben experimentell; keine pauschale Behebung aller Geräteabbrüche zugesagt.

## 0.4.0 Alpha 9 · 07.11.2026

- Suche nach Sorte und Breeder präzisiert; bekannte Anbieter und passende Produktseiten stärker priorisiert.
- Unpassende Marktplatztreffer, fremde Produktnamen und falsche Auto/Photo-Varianten früher ausgefiltert.
- Quellenprüfung bei generischen Namen wie „Seed Supplier“ verbessert.
- Mehr relevante Quellenkandidaten und bis zu drei verschiedene Websites pro Lauf berücksichtigt. Zugriffssperren werden respektiert.

## 0.4.0 Alpha 8 · 07.11.2026

- Verpackungsbild kann fotografiert oder als JPEG/PNG ausgewählt werden.
- Dublettenprüfung berücksichtigt den Blühtyp: gleichnamige Auto- und Photo-Varianten werden getrennt behandelt.
- Lokale KI auf synchronen Modellaufruf im Hintergrundthread umgestellt; Fehlerdiagnose und Initialisierung der Texterkennung verbessert.
- Rechnungsimport zunächst als Roadmap-Punkt aufgenommen, noch nicht eingebaut.

## 0.4.0 Alpha 7 · 07.11.2026

- Lokale KI und Texterkennung in einen separaten App-Prozess ausgelagert, um die Oberfläche bei Fehlern besser zu schützen.
- Behandlung von Prozessabbruch, Verbindungsverlust und Zeitlimit sowie begrenzte lokale Diagnose ergänzt.
- Prüfungen für Bilddateien und verfügbare Speicherressourcen verschärft.
- Seitliches Wischen zwischen Sortenprofilen ergänzt; aktuelle Filter und Sortierung bestimmen die Reihenfolge.

## 0.4.0 Alpha 6 · 07.11.2026

- Zusätzliche Suchwege und Suche nach aktuellen Produktlinks auf Anbieter-Websites ergänzt.
- Mehrquellenrecherche sammelt belegte Angaben mit Quellen je Feld.
- Abweichende Werte werden als Konflikt zur Auswahl angeboten statt stillschweigend überschrieben.
- Verständlichere Meldungen bei blockierter Suche, fehlenden Treffern und nicht unterstützten Quellen.

## 0.4.0 Alpha 5 · 07.11.2026

- Experimentelle lokale Bild- und Text-KI sowie direkte Webrecherche in der App eingeführt.
- Einstellungen mit Hinweisen und Download für die optionalen Modelle ergänzt.
- Verpackungszuordnung, Breeder-Abgleich und Schutz gegen unbelegte Modellangaben erweitert.
- Quellenabruf beschränkt sich auf unterstützte öffentliche HTTPS-Seiten; Datenübernahme erfolgt nach Vorschau.

## 0.4.0 Alpha 4 · 07.11.2026

- Einseitiger Verpackungs-Fotoscan mit lokaler Texterkennung eingeführt.
- Erkannten Rohtext korrigieren, Vorschläge ins Formular übernehmen und Foto optional speichern.
- Tatsächlichen Bestand vor dem Speichern separat bestätigen.
- Offline-Ratgeber zur Samenlagerung mit Quellen ergänzt.

## 0.4.0 Alpha 3

- Next-Run-Pläne können gelöscht werden, ohne andere Pläne oder Inventar unbeabsichtigt zu verändern.
- Bereits gebuchte Entnahmen bleiben nachvollziehbar; Planlöschung bucht sie nicht zurück.
- Quellenfelder für Blütezeit und Ertrag ergänzt, einschließlich ursprünglicher Spannen und Einheiten.

## 0.4.0 Alpha 2

- Dublettenwarnungen und zentrale Datenprüfung erweitert.
- Erste freie Lagerposition und Belegung auch bei leeren Behältern genauer behandelt.
- Rücknahme ausgewählter Metadatenänderungen und Umräumvorgänge ergänzt.
- Sortenvergleich mit Zeitangaben, Einheiten und unbekannten Werten verbessert.
- Filterbedienung und Fotoansicht erweitert.

## 0.4.0 Alpha 1

- Next-Run-Planung mit Sorten, Mengen, Behälteraufteilung, Fehlmengen und ausdrücklich bestätigter Entnahme ausgebaut.
- Auto-/Photo-Symbole mit Erklärung für die verschiedenen Sortenansichten ergänzt.
- Kennzeichnungen, Mehrfach-Umräumen, Protokollierung und Backup-Erinnerung erweitert.
- Damals optionale Pi-Synchronisation eingeführt; diese ist seit Alpha 14 wieder aus der App entfernt.

## Frühere native Reihe 0.3.0

Die Bezeichnungen Alpha 1–11 gehören hier zur Reihe **0.3.0** und sind nicht mit der später neu begonnenen Reihe **0.4.0** gleichzusetzen.

### 0.3.0 Alpha 11

- Kopf der Sortenübersicht verkleinert: Filter, Sortierung und Ansichten in ein aufrufbares Panel verlagert.
- Suchfeld mit Löschkreuz ergänzt und doppelte Hinzufügen-Aktionen reduziert.

### 0.3.0 Alpha 10

- Sortenprofil mit Reitern für Übersicht, Bestand und Quellen übersichtlicher gegliedert.
- Genauen Lagerplatz grafisch mit Tasche, Ebene und Rasterposition darstellen; Deckelnetz separat behandeln.
- Buchungsaktionen und Rückkehr aus Behälteransichten verbessert.

### 0.3.0 Alpha 9

- Indica/Sativa-Verhältnis kompakt als Einzeiler statt langer Quellentexte dargestellt.
- THC-Anzeige und Kartenaufbau gestrafft.

### 0.3.0 Alpha 8 · 07.11.2026

- THC-Vergleichswert eingeführt: Mitte einer Spanne, bei Einzelwert oder „bis zu“ die genannte Zahl.
- Sortierung nach THC auf- und absteigend; unbekannte Angaben am Ende.

### 0.3.0 Alpha 7

- Favoriten, kombinierte Filter, Sortierungen sowie Listen-, Kompakt- und Kachelansicht ergänzt.
- Suche und Listenposition bei der Rückkehr aus einem Sortenprofil erhalten.
- Einzelne Sorte erneut recherchieren und vorhandene Angaben nach Änderungsvergleich ersetzen.

### 0.3.0 Alpha 6 · 06.11.2026

- Quellenlinks im Browser öffnen.
- Eigene Fotos für Sorten und Lagerplätze, einschließlich vollständiger Sicherung.

### 0.3.0 Alpha 5 – historischer Zwischenstand

- Ein Projektordner dieses Namens ist erhalten. Seine Dokumentation bezeichnet den Inhalt jedoch weiterhin als Alpha 4 und beschreibt dieselbe ZIP-Exportkorrektur.
- Eine eigenständige zusätzliche Funktion oder separat neu gebaute Alpha-5-APK ist aus diesen Unterlagen nicht eindeutig belegt. Daher wird hier keine Änderung erfunden.

### 0.3.0 Alpha 4 · 06.11.2026

- Backup und Rechercheexport auf ZIP mit enthaltener JSON umgestellt.
- Import erkennt ZIP und ältere rohe JSON-Dateien; Archive werden vor Übernahme geprüft.

### 0.3.0 Alpha 3 · 06.11.2026

- Exportdaten vor der Android-Dateiauswahl dauerhaft zwischengespeichert, damit eine Activity-Neuerstellung nicht zu einem verlorenen Exportinhalt führt.
- Erfolg erst nach abgeschlossenem Schreiben und Schließen der Datei melden; Wiederholung nach Schreibfehler ermöglichen.

### 0.3.0 Alpha 2

- Native Android-App gebaut und mit dem bisherigen Zertifikat signiert.
- Behälterbearbeitung, Fotos, Quellen, Breeder-Auswahl, grafische Taschen und Lager-Detailnavigation vervollständigt.
- Ersten Samen gemeinsam mit einer neuen Sorte in einem Formular anlegen.

### 0.3.0 Alpha 1 · 05.11.2026 – nativer Quellstand

- Wechsel von WebView zu Kotlin und Jetpack Compose vorbereitet: Start, Sorten, Lager und Mehr mit drei Designs.
- Bestehendes Datenformat, IDs, Bestandsbuchungen, Taschen sowie Rechercheaustausch und QR-Funktionen in die native Architektur übernommen.
- Dieser ursprüngliche Stand war laut damaligem Prüfbericht noch nicht als Android-APK gebaut; der belegte native Build folgte mit Alpha 2.

## Frühe WebView-Versionen

### 0.2.4 – Quellstand

- Hierarchische Lagerorte, beispielsweise Schrank → Regal → Tasche, ergänzt.
- Schutz gegen zyklische oder ungültige Elternzuordnungen; Lagerpfade in Suche und Summen berücksichtigen.
- Keine neue APK für diesen Stand in den erhaltenen Unterlagen belegt.

### 0.2.3 – Quellstand

- Typisierte Lagerorte und verständlichere Schritte für den KI-Rechercheaustausch.
- Lokale QR-Etiketten für Sorten und Behälter sowie manuelle Codeeingabe.
- Kamera-QR-Erkennung war von der WebView-Unterstützung abhängig und nicht am Endgerät abgenommen.

### 0.2.2 – Quellstand

- Recherche-JSON um deutsch/englische Arbeitsanweisungen und fehlende Felder je Sorte erweitert.
- Recherche weiterhin über Dateiaustausch mit einer externen KI, ohne automatische Webrecherche in der App.

### 0.2.1 – Quellstand

- Sammlungsübersicht mit Kennzahlen, Lagerortsuche, noch nicht zugeordneten Behältern und letzten Buchungen weiterentwickelt.
- Änderungen waren als Quellcode vorhanden; die enthaltene installierbare APK blieb 0.2.0.

### 0.2.0

- Flexible grafische Taschen mit mehreren Ebenen, konfigurierbaren Plätzen und Spalten sowie optionalem Deckelnetz.
- Plätze antippen, Belegung anzeigen, Behälter öffnen und umräumen; belegte Bereiche vor Verkleinerung schützen.
- Bereits verwendete Breeder zur Auswahl anbieten.

### 0.1.3

- Abstände zu Statusleiste, Bildschirmrändern und Tastatur in der damaligen WebView-Oberfläche korrigiert.

### 0.1.2

- Behältercodes automatisch als SN-0001, SN-0002 usw. vergeben; vorhandene Codes nicht verändern.

### 0.1.1

- „Samen hinzufügen“ öffnet direkt die Erfassung.
- Lagerort optional später zuordnen oder im selben Formular neu anlegen.

### 0.1.0 – erster dokumentierter installierbarer Build

- Lokale Android-Samenverwaltung mit Sorten, Breedern, getrennten Saatgut-/Blühtypen und mehreren Behältern je Sorte.
- Zugang, Entnahme, nachvollziehbare Rückbuchung, Suche und Bestandsfilter.
- Lagerorte, Kaufdatum, Notizen und Behälterfoto.
- Sortenangaben einschließlich Genetik, THC/CBD, Aroma, Terpenen und Quellen.
- Vollständige JSON-Sicherung und separater Rechercheaustausch ohne private Bestandsangaben.
- Etikettenvorschau und Android-Druckdialog/PDF.
- Lokale WebView-Oberfläche in einer Android-Hülle; private SQLite-Speicherung, keine Registrierung oder Internetberechtigung.
