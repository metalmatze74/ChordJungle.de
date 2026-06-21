# Prompt 142 — Website User Manual Integration from App Repo Manual

You are working in the ChordJungle website repository.

Use the existing website layout, styling, navigation, typography, colors, components, and responsive behavior.

The app manual source is located at:

`/Users/matthias/Documents/chordbook-app/docs/user-manual`

Save this prompt in the website repository as:

`docs/codex/142-website-user-manual-integration.md`

If the website repository does not yet have `docs/codex/`, create it.

## Goal

Integrate the German ChordJungle beta user manual into the website.

The app repository remains the source of truth for app-version-specific manual content. The website should provide a polished, readable, responsive presentation of that manual for beta testers and future users.

Do not modify the app repository.

Do not change app code.

Do not change app versioning, signing, build configuration, or dependencies.

## Context

The app repo already contains the German beta user manual foundation:

`/Users/matthias/Documents/chordbook-app/docs/user-manual`

It includes:

* manual chapters in Markdown
* screenshot plan
* website handoff notes
* safe synthetic demo imports
* screenshot index
* capture notes
* real, privacy-checked German iPad screenshots

Existing captured screenshots include, among others:

```text
docs/user-manual/screenshots/tablet/01-songs-overview.png
docs/user-manual/screenshots/tablet/02-create-song-choice.png
docs/user-manual/screenshots/tablet/03-import-file-entry.png
docs/user-manual/screenshots/tablet/04-demo-song-editor.png
docs/user-manual/screenshots/tablet/05-song-preview.png
docs/user-manual/screenshots/tablet/06-setlist-overview.png
docs/user-manual/screenshots/tablet/07-setlist-items.png
docs/user-manual/screenshots/tablet/10-stage-mode-tablet-landscape.png
docs/user-manual/screenshots/tablet/11-metronome-settings.png
docs/user-manual/screenshots/tablet/12-backup-restore.png
```

These screenshots are from:

* ChordJungle Docs iPad simulator
* iPad Pro 11-inch M4
* iOS 18.3
* German UI
* app build 0.2.0+4

The screenshots are privacy-checked and use synthetic demo data.

Still pending in the app manual:

* active-setlist state
* transfer
* detailed sync/restore dialogs
* diagnostics/local reset
* phone screenshots
* desktop screenshots

Do not invent or fake these missing screenshots.

## 1. Inspect the existing website

First inspect the website structure.

Identify:

* main entry page
* existing CSS/layout files
* asset folder
* navigation/header/footer
* existing sections/components
* privacy/imprint pages if present
* deployment/build process if documented

Do not redesign the whole website.

Use the current visual identity.

## 2. Create manual/help section

Add a German help/manual section to the website.

Choose the most appropriate structure for the current static website.

Recommended URL/page structure:

```text
/handbuch/
/handbuch/erste-schritte/
/handbuch/songs/
/handbuch/import/
/handbuch/setlisten/
/handbuch/aktive-setliste/
/handbuch/stage-mode/
/handbuch/metronom/
/handbuch/backup-restore/
/handbuch/local-transfer/
/handbuch/sync/
/handbuch/einstellungen/
/handbuch/fehlerbehebung/
/handbuch/feedback/
```

If the site is currently a single-page static site and multi-page routing is not established, use one of these safe alternatives:

```text
handbuch.html
```

or:

```text
docs.html
```

with internal anchor navigation.

Prefer the option that best fits the existing site architecture.

## 3. Adapt, do not blindly copy

Use the Markdown manual from the app repo as source content, but adapt it to the website.

Do:

* preserve factual meaning
* keep German language
* keep beta honesty
* simplify overly internal notes where needed
* make it readable for non-technical beta testers
* add website-friendly headings
* add callout boxes for important warnings
* use existing buttons/cards/sections where available
* include screenshot images where they exist
* include clear navigation between manual chapters

Do not:

* paste raw developer-only notes into public-facing pages
* mention Codex prompt numbers in public-facing website content
* expose internal package names, database names, or legacy identifiers
* include broken links
* include fake screenshots
* claim missing screenshots exist
* claim real-device tests are complete unless the source docs say so

## 4. Copy screenshots into website assets

Copy only existing, reviewed screenshots from the app repo.

Recommended website asset path:

```text
assets/img/manual/
```

or use the existing website asset convention if different.

Keep stable, descriptive filenames.

Example:

```text
assets/img/manual/tablet-01-songs-overview.png
assets/img/manual/tablet-02-create-song-choice.png
assets/img/manual/tablet-03-import-file-entry.png
assets/img/manual/tablet-04-demo-song-editor.png
assets/img/manual/tablet-05-song-preview.png
assets/img/manual/tablet-06-setlist-overview.png
assets/img/manual/tablet-07-setlist-items.png
assets/img/manual/tablet-10-stage-mode-landscape.png
assets/img/manual/tablet-11-metronome-settings.png
assets/img/manual/tablet-12-backup-restore.png
```

Do not copy pending/nonexistent images.

Do not include screenshots with private data.

Do not include copyrighted lyrics.

## 5. Manual landing page

Create a manual landing page with:

* short title: `ChordJungle Handbuch`
* subtitle for beta testers
* short explanation of what the manual covers
* quick-start checklist
* visual cards linking to main topics:

  * Erste Schritte
  * Songs
  * Import
  * Setlisten
  * Stage Mode
  * Metronom
  * Backup & Wiederherstellung
  * Synchronisation
  * Fehlerbehebung
  * Feedback
* note that screenshots are currently iPad/tablet examples and may differ slightly on phone/desktop

Keep it visually aligned with the existing homepage.

## 6. Core manual content

Integrate these chapters from the app repo manual:

```text
README.md
01-getting-started.md
02-songs.md
03-import.md
04-setlists.md
05-active-setlist.md
06-stage-mode.md
07-metronome.md
08-backup-restore.md
09-local-transfer.md
10-nextcloud-sync.md
11-settings.md
12-troubleshooting.md
13-beta-feedback.md
```

If the website should remain compact, combine related chapters:

```text
Songs + Import
Setlisten + Aktive Setliste
Backup + Sync + Transfer
Einstellungen + Fehlerbehebung
```

But keep anchor links for each major topic.

## 7. Important content requirements

### Import / SongSelect

The website must explain the manual SongSelect workflow carefully:

* open SongSelect in the browser
* download ChordPro file where available
* import the local file in ChordJungle
* ChordJungle does not connect directly to SongSelect
* no SongSelect login inside ChordJungle
* users are responsible for their SongSelect/CCLI license

Do not imply that ChordJungle bypasses SongSelect/CCLI licensing.

### Backup

Prominently explain:

* beta users should test backup/restore
* users should not rely on beta data without backup
* restore should be tested before live use

### Sync

Do not show or invent real server examples with credentials.

Use generic terms like:

```text
https://deine-cloud.example.com/remote.php/dav/files/...
```

Only if examples are needed, make them clearly fake and non-functional.

### Feedback

Include a copyable beta feedback template:

```text
Gerät:
Betriebssystem:
ChordJungle-Version:
Was wollte ich tun?
Was ist passiert?
Was hätte ich erwartet?
Kann ich es reproduzieren?
Screenshot/Video vorhanden?
Betrifft es Import, Sync, Backup, Stage Mode oder Transfer?
```

Warn users not to send passwords, sync credentials, or copyrighted song texts unless necessary and allowed.

## 8. Navigation

Add a visible way to reach the manual from the website.

Options:

* main navigation link: `Handbuch`
* footer link: `Handbuch`
* beta section CTA: `Zum Handbuch`
* help card on homepage

Use the approach that best matches the existing site.

Do not clutter the homepage.

## 9. Styling

Use existing website CSS conventions.

Make sure manual pages are:

* responsive
* readable on mobile
* readable on desktop
* accessible with sensible heading hierarchy
* image captions are clear
* screenshots do not overflow the layout
* links are visually identifiable
* code/file extensions are readable

If needed, add small, focused CSS for manual pages only.

Do not redesign unrelated homepage sections.

## 10. Screenshot captions

Every screenshot should have a short German caption.

Example:

```text
Songübersicht mit synthetischen Demo-Songs auf dem iPad.
```

Mention where useful:

```text
Die Darstellung kann auf Smartphones etwas abweichen.
```

Do not overstate that every platform looks identical.

## 11. SEO / metadata

If the website has metadata conventions, add appropriate page title/description for the manual.

Suggested German metadata:

```text
ChordJungle Handbuch – Hilfe für Songs, Setlisten, Import, Stage Mode, Backup und Sync.
```

Do not add tracking scripts.

Do not change privacy/imprint content unless a link needs to be added.

## 12. Links back to app/beta

If the website already has TestFlight/Play/beta links, link appropriately.

If there are no final public links yet, do not invent them.

Use existing labels and placeholders only if the website already uses them.

## 13. Build/checks

Run the website’s existing checks/build commands.

First inspect package/build files.

Possible commands depending on the site:

```bash
npm install
npm run build
npm run lint
```

or, for a plain static site:

```bash
find . -type f -name "*.html" -print
```

If no build system exists, run reasonable static sanity checks:

```bash
grep -R "ChordBook\\|chordbook" . -n || true
grep -R "password\\|secret\\|token\\|credential" . -n || true
find . -type f | sort
```

Review results carefully. Do not rename intentional technical strings unless they are visible on the website and wrong.

Also check for broken local image references as far as practical.

## 14. Documentation update in website repo

Update or create:

```text
docs/website-manual-integration.md
```

Document:

* source manual path used
* screenshots copied
* website pages created/updated
* pending screenshots/content
* how to refresh manual content from app repo later
* app build shown in screenshots
* privacy/copyright assumptions

## 15. Non-goals

Do not do any of the following:

* Do not modify the app repo.
* Do not change app code.
* Do not change app docs in this sprint.
* Do not add fake screenshots.
* Do not add copyrighted lyrics.
* Do not add real credentials or private URLs.
* Do not claim direct SongSelect integration.
* Do not change website legal pages except adding safe navigation links if needed.
* Do not add analytics/tracking.
* Do not redesign the full website.
* Do not replace existing branding.
* Do not add a complex CMS.
* Do not add large dependencies unless the website already uses them and they are clearly necessary.

## 16. Completion report

At the end, report:

* files changed
* manual pages created/updated
* screenshots copied
* navigation links added
* website layout/styling changes
* source app manual path used
* checks/build commands run
* pending manual/screenshot items
* confirmation that the app repo was not modified

```
```
