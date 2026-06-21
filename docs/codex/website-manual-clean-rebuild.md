# Website Manual Clean Rebuild / Layout Foundation

You are working in the ChordJungle website repository.

Save this prompt as:

`docs/codex/website-manual-clean-rebuild.md`

If `docs/codex/` does not exist, create it.

## Goal

Rebuild the German ChordJungle manual page cleanly inside the existing website layout.

The previous `handbuch.html` integration exists, but the screenshot layout is currently not acceptable: screenshots are rendered much too large and dominate the page.

Do not just patch random CSS. Start from a clean website-manual structure and create a polished, responsive manual page that fits the existing ChordJungle website.

Do not modify the app repository.

## Context

The app manual source is:

`/Users/matthias/Documents/chordbook-app/docs/user-manual`

The website currently has a manual page at:

`httpdocs/handbuch.html`

Manual screenshots were copied to:

`httpdocs/assets/img/manual/`

The website repo previously integrated:

* German beta manual page
* homepage navigation/CTA/footer links
* sitemap entry
* manual styles
* copyable feedback template
* 10 reviewed iPad screenshots

However, the current visual result is not good enough. The screenshots are far too large on desktop.

## Scope

Allowed changes:

```text
httpdocs/handbuch.html
httpdocs/index.html
httpdocs/**/*.css
httpdocs/assets/img/manual/**
httpdocs/sitemap.xml
httpdocs/robots.txt, only if already present and safe
docs/**
```

Do not modify:

```text
/Users/matthias/Documents/chordbook-app/**
app repository
app code
app docs
app screenshots
website legal text content except safe navigation/footer links
deployment configuration unless existing manual links require a safe path correction
```

Do not add analytics or tracking.

Do not add a CMS.

Do not introduce a build system.

Do not add new dependencies.

## Main instruction

Treat this as a clean rebuild of the website manual page, not as a small CSS patch.

You may replace the current `handbuch.html` implementation if that results in a cleaner, more maintainable page.

Preserve useful content, screenshots, and navigation ideas from the previous integration, but improve the structure and visual quality.

## Visual goals

The manual should look like a polished part of the ChordJungle website.

It should have:

* clear hero section
* short beta/manual intro
* compact table of contents
* section cards or anchored chapters
* readable line length
* well-sized screenshots
* consistent typography
* responsive layout
* no horizontal scrolling
* no giant screenshots
* no broken anchors
* no broken image paths

Screenshots should look like product screenshots, not page backgrounds.

Recommended screenshot rendering:

```text
Desktop:
  screenshot max-width: 720px to 900px
  centered
  height auto
  max-height: around 70vh
  object-fit: contain
  border radius
  subtle shadow or frame

Mobile:
  width: 100%
  max-width: 100%
  max-height: none
  readable captions
```

Do not display iPad screenshots at full raw image size.

## Suggested page structure

Create or rebuild `httpdocs/handbuch.html` with a structure similar to:

```text
Hero:
  ChordJungle Handbuch
  Kurze Hilfe für Beta-Tester

Quick start:
  4–6 short steps

Manual navigation:
  Erste Schritte
  Songs
  Import
  Setlisten
  Stage Mode
  Metronom
  Backup & Wiederherstellung
  Sync & Transfer
  Einstellungen
  Fehlerbehebung
  Feedback

Chapters:
  Each chapter with concise website-friendly text
  Use screenshots only where useful
  Use callout boxes for important beta warnings

Feedback:
  Copyable feedback template
```

Use the app manual as content source, but do not paste raw developer notes into the public website.

## Content source

Use the app manual source as reference:

```text
/Users/matthias/Documents/chordbook-app/docs/user-manual/README.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/01-getting-started.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/02-songs.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/03-import.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/04-setlists.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/05-active-setlist.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/06-stage-mode.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/07-metronome.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/08-backup-restore.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/09-local-transfer.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/10-nextcloud-sync.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/11-settings.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/12-troubleshooting.md
/Users/matthias/Documents/chordbook-app/docs/user-manual/13-beta-feedback.md
```

Adapt the content to the website.

Keep it German.

Keep it concise and friendly.

Do not mention Codex prompts in public website content.

## Screenshots

Use only existing reviewed screenshots.

Preferred website asset path:

```text
httpdocs/assets/img/manual/
```

Use these if present:

```text
tablet-01-songs-overview.png
tablet-02-create-song-choice.png
tablet-03-import-file-entry.png
tablet-04-demo-song-editor.png
tablet-05-song-preview.png
tablet-06-setlist-overview.png
tablet-07-setlist-items.png
tablet-10-stage-mode-landscape.png
tablet-11-metronome-settings.png
tablet-12-backup-restore.png
```

If filenames differ, inspect `httpdocs/assets/img/manual/` and use the actual files.

Do not use missing screenshots.

Do not add fake screenshots.

Do not include private data.

Do not include copyrighted lyrics.

Each screenshot should have:

* meaningful German `alt` text
* short German caption
* responsive layout
* `loading="lazy"` if below the fold
* width and height if safely known

## Manual CSS

Either use an existing CSS file or add a focused manual section to the existing stylesheet.

Avoid global CSS that breaks the homepage.

Recommended class names:

```text
.manual-page
.manual-hero
.manual-toc
.manual-section
.manual-card-grid
.manual-callout
.manual-screenshot
.manual-feedback-template
```

The CSS should be specific enough to affect the manual page only.

Do not redesign the entire website.

## Homepage links

Keep or add a clean path to the manual:

* navigation link: `Handbuch`
* homepage CTA if appropriate
* footer link
* sitemap entry

Do not clutter the homepage.

If previous manual links already exist, verify and correct them.

## Metadata

Add clean metadata for `handbuch.html`:

```text
Title:
ChordJungle Handbuch – Hilfe zu Songs, Setlisten, Import, Stage Mode und Backup

Description:
Das deutsche ChordJungle Handbuch erklärt Songs, Import, Setlisten, Stage Mode, Metronom, Backup, Sync, Local Transfer und Beta-Feedback Schritt für Schritt.
```

If the existing site has Open Graph metadata patterns, follow them.

Do not overdo SEO in this sprint. The primary goal is layout and structure. SEO can be a separate follow-up sprint.

## Feedback template

Keep a copyable beta feedback template.

Template:

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

Warn users not to send:

* passwords
* sync credentials
* private URLs
* copyrighted song texts unless necessary and allowed

## Validation

Run static checks.

At minimum:

```bash
git diff --check
find httpdocs -type f | sort
```

Check local references:

```bash
grep -R "/Users/\|localhost\|127.0.0.1" httpdocs -n || true
grep -R "password\|secret\|token\|credential" httpdocs docs -n || true
grep -R "ChordBook\|chordbook" httpdocs -n || true
```

Review all grep results carefully. Do not remove intentional documentation words blindly, but public website output should not expose local paths, secrets, or old branding.

Validate:

* all local image `src` targets exist
* all local CSS/JS references exist
* all manual anchor links work
* sitemap references existing public pages only
* no broken screenshot paths
* no oversized screenshot rendering in CSS

If possible, open locally and inspect:

```text
homepage desktop
homepage mobile width
handbuch.html desktop
handbuch.html mobile width
screenshots sizing
navigation
footer
feedback template
```

If browser QA is blocked by workspace policy, document it honestly.

## Documentation

Create or update:

```text
docs/website-manual-clean-rebuild.md
```

Document:

* what was rebuilt
* source manual path used
* screenshots used
* CSS classes used
* known pending screenshots
* rendered QA status
* how to update the website manual later from the app manual

## Non-goals

Do not do any of the following:

* Do not modify the app repository.
* Do not change app code.
* Do not change app docs.
* Do not add fake screenshots.
* Do not add copyrighted lyrics.
* Do not expose private data.
* Do not add analytics or tracking.
* Do not redesign the full website.
* Do not change legal text content.
* Do not add a CMS.
* Do not add dependencies.
* Do not do broad SEO optimization in this sprint.
* Do not change GitHub/netcup deployment settings.

## Completion report

At the end, report:

* files changed
* whether `handbuch.html` was rebuilt or refactored
* CSS/classes added or changed
* screenshot rendering behavior
* screenshots used
* homepage/nav/footer/sitemap updates
* checks run
* browser QA status
* pending items
* confirmation that the app repo was not modified
