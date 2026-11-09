# Datenverarbeitung – technischer Überblick

Dieser Überblick beschreibt die Funktionen der Testversion und ersetzt keine rechtliche Prüfung oder Zusage über die Infrastruktur externer Anbieter.

## Lokale Daten

Bestände, Lagerplätze, Buchungen, Fotos und Entwürfe werden von SeedNest lokal verarbeitet. Vollständige Backups enthalten persönliche Sammlungsdaten; bewahre sie geschützt auf. Der schnelle Verpackungsscan und die Rechnungsverarbeitung verwenden lokale Texterkennung. Optionale lokale KI-Modelle bleiben experimentell.

## Gemini und Webrecherche

Gemini ist optional und benötigt einen eigenen API-Schlüssel sowie Zustimmung. Ausdrücklich gestartete Bildauswertungen senden das ausgewählte Bild, OCR-Text und Breeder-Hinweise an Google; alles Sichtbare auf dem Bild ist Teil des Uploads. Recherche sendet ausgewählte öffentliche Quellenauszüge und Sortenidentität. Übersetzung sendet ausgewählte vorhandene Sortenangaben einschließlich Beschreibung, Name und Breeder.

Die Bestandsdatenbank mit Mengen, Lagerorten und privaten Notizfeldern wird dafür nicht vollständig angehängt. Prüfe aber selbst eingegebene Sortenbeschreibungen und Bilder auf persönliche Inhalte. Für Google gelten dessen aktuelle Bedingungen und gegebenenfalls Kosten. Der Schlüssel wird lokal mit Android-Keystore-Schutz gespeichert und nicht in Bestandsbackups aufgenommen.

Bei Websuche und Seitenabruf erhalten die jeweiligen Anbieter Such-/Abrufdaten und die IP-Adresse. Zugriffssperren werden nicht umgangen.

## GitHub-Updates

Die Updateprüfung ruft öffentliche Versionsinformationen ab. Beim Download wird die APK von GitHub geladen. GitHub erhält dabei die Verbindungsdaten; Bestände, Fotos und API-Schlüssel werden nicht angehängt. Automatische Prüfung kann deaktiviert werden.

## Fehlerberichte

Berichte werden bewusst über die E-Mail-App oder öffentliche GitHub-Issues erstellt. Prüfe Anhänge vor dem Senden. Diagnose und Screenshots sind freiwillig. Öffentliche Issues sind öffentlich lesbar: keine Schlüssel, privaten Backups oder ungeschwärzten Rechnungen anhängen.

Der direkte E-Mail-Bericht enthält App-Version, Android und Gerätemodell sowie deine eingegebenen Angaben. Nur auf Wunsch wird eine zuvor angezeigte Diagnose-JSON mit lokalen Betriebsmetadaten beigefügt. Bestandsdaten, Bilder und API-Schlüssel werden nicht automatisch angehängt. Diagnoseanhänge liegen vorübergehend im App-Cache; beim Erstellen weiterer Anhänge werden Dateien über sieben Tage entfernt, Android kann Cache-Dateien früher entfernen. Du bestätigst den Versand in deiner eigenen E-Mail-App. Ein GitHub-Konto wird dafür nicht benötigt.

PDFs enthalten die bewusst ausgewählten Lager- und Etikettenangaben. Vorschau und Druckstatus bleiben lokal; erst beim selbst gestarteten Speichern, Drucken oder Teilen werden diese Daten an das gewählte Ziel übergeben. Druckstatus ist nicht in der Bestands-Sicherung enthalten.

## Freiwillige Unterstützung

Der Unterstützungslink öffnet die externe PayPal-Seite `https://paypal.me/Mmbaby2016`. SeedNest hängt keine Bestandsdaten, Fotos oder API-Schlüssel an. Auf der PayPal-Seite gelten die Bedingungen und Datenverarbeitung des Anbieters. SeedNest erfasst keine Kontodaten, Beträge oder Zahlungsbestätigungen und zeigt keinen selbst ermittelten Zahlungsstatus an.
