# Website-Handbuch-Integration

## Quelle und Stand

- Inhaltsquelle: `/Users/matthias/Documents/chordbook-app/docs/user-manual`
- Quellen bleiben appversionspezifisch und sind die maßgebliche Basis für spätere Aktualisierungen.
- Übernommener Screenshot-Stand: deutscher iPad-Simulator, iPad Pro 11-inch M4, iOS 18.3, App-Build `0.2.0+4`.

## Website-Umsetzung

- Neue öffentliche Einzelseite: `httpdocs/handbuch.html` mit Sprungnavigation für alle Hauptthemen.
- Navigation ergänzt: `Handbuch` in Startseiten- und Footer-Navigation.
- Neue, gezielte Handbuch-Stile in `httpdocs/styles.css`.
- Public-facing Text wurde für Beta-Tester gekürzt und angepasst; interne Hinweise, Kennungen und Zugangsdaten bleiben ausgeschlossen.

## Kopierte Bilder

Die zehn geprüften Tablet-Aufnahmen liegen in `httpdocs/assets/img/manual/`:

- `tablet-01-songs-overview.png` bis `tablet-07-setlist-items.png`
- `tablet-10-stage-mode-landscape.png`
- `tablet-11-metronome-settings.png`
- `tablet-12-backup-restore.png`

Die Bilder enthalten synthetische Demo-Daten. Es wurden keine Telefon- oder Desktop-Aufnahmen kopiert.

## Noch ausstehend

- Screenshot-Aufnahmen für aktive Setliste, lokale Übertragung, detaillierte Sync-/Restore-Dialoge und Diagnose/lokalen Reset.
- Telefon- und Desktop-Screenshots.

Diese Inhalte werden auf der Website nicht durch erfundene Bilder ersetzt.

## Aktualisierung

1. Änderungen zuerst im App-Repository unter `docs/user-manual` prüfen.
2. Öffentliche Texte in `httpdocs/handbuch.html` an den geprüften Funktionsstand anpassen.
3. Ausschließlich privacy-geprüfte, synthetische oder freigegebene Screenshots in `httpdocs/assets/img/manual/` übernehmen.
4. Bildunterschriften, Build-Angabe und diese Datei aktualisieren.
5. Lokale Bildreferenzen und die statische Seite prüfen.

## Datenschutz und Urheberrecht

Die Handbuchseite enthält keine privaten Serveradressen, Zugangsdaten oder echten Songtexte. SongSelect wird ausschließlich als manueller Browser-Download mit eigener Lizenzverantwortung beschrieben; es gibt keine direkte SongSelect-Integration.
