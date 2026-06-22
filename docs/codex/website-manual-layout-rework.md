# Website Manual Layout Rework

You are working in the ChordJungle website repository.

Save this prompt as:

`docs/codex/website-manual-layout-rework.md`

## Goal

Rework the visual layout of `httpdocs/handbuch.html`.

The current page content is mostly useful, but the screenshots are rendered much too large and are not visually integrated well enough. The manual should look like a polished product help page, not like raw content with oversized images.

Do not modify the app repository.

Do not change app code.

Do not add analytics, tracking, CMS, or new dependencies.

## Current live page

Current public page:

`https://chordjungle.de/handbuch.html`

Known issue:

* screenshots are far too large on desktop
* screenshots dominate the page
* screenshot/caption layout feels too raw
* text and images need clearer visual grouping
* manual should be easier to scan

## Scope

Allowed changes:

```text
httpdocs/handbuch.html
httpdocs/index.html, only for safe link/CTA corrections
httpdocs/**/*.css
httpdocs/sitemap.xml, only if needed
docs/**
```

Do not change:

```text
app repository
app code
app docs
website legal text content
deployment configuration
GitHub/netcup setup
```

## Main task

Refactor `handbuch.html` and the related CSS so the manual page has a clean, responsive layout.

Keep the existing content where useful, but improve presentation.

The page should have:

* clean hero section
* compact quickstart section
* clear chapter navigation
* readable chapter cards/sections
* consistent screenshot components
* controlled screenshot size
* captions under screenshots
* no giant images
* no horizontal scrolling
* good mobile layout
* good desktop layout

## Screenshot layout requirements

Screenshots must be displayed as product screenshots.

Use a dedicated component/class, for example:

```html
<figure class="manual-screenshot">
  <img src="assets/img/manual/tablet-01-songs-overview.png" alt="Songübersicht mit Demo-Songs auf dem iPad" loading="lazy">
  <figcaption>Songübersicht mit synthetischen Demo-Songs auf dem iPad.</figcaption>
</figure>
```

Recommended CSS behavior:

```css
.manual-screenshot {
  margin: 2rem auto;
  max-width: min(920px, 100%);
}

.manual-screenshot img {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 72vh;
  height: auto;
  margin: 0 auto;
  border-radius: 18px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28);
}

.manual-screenshot figcaption {
  margin-top: 0.75rem;
  text-align: center;
  font-size: 0.95rem;
  opacity: 0.85;
}

@media (max-width: 720px) {
  .manual-screenshot {
    margin: 1.5rem auto;
  }

  .manual-screenshot img {
    width: 100%;
    max-height: none;
    border-radius: 14px;
  }
}
```

Adjust values to the existing website style.

Do not simply paste if existing CSS has better conventions. Integrate cleanly.

## Content layout requirements

Improve scanability.

Recommended structure:

```text
Hero
Schnellstart
Kapitelübersicht
Kapitel sections:
  01 Erste Schritte
  02 Songs
  03 Import
  04 Setlisten
  05 Stage Mode
  06 Metronom
  07 Backup & Wiederherstellung
  08 Sync & Transfer
  09 Einstellungen
  10 Fehlerbehebung
  11 Beta-Feedback
```

Each chapter should be visually separated.

Use cards, panels, or sections consistent with the homepage.

Avoid very long full-width text lines.

Recommended readable content width:

```text
main content max width: around 1100px to 1200px
text blocks max width: around 720px to 820px
screenshots max width: around 720px to 920px
```

## Header / anchor behavior

Check sticky header behavior.

When clicking chapter links, headings should not be hidden under the sticky header.

If needed, add scroll margin:

```css
.manual-section {
  scroll-margin-top: 96px;
}
```

Adjust to the actual header height.

## Image requirements

For all manual screenshots:

* meaningful German `alt`
* short `figcaption`
* `loading="lazy"` unless above the fold
* no broken paths
* no private/local file paths
* no full raw-size rendering

Do not remove reviewed screenshots.

Do not add fake screenshots.

## Mobile requirements

At mobile width:

* header/navigation remains usable
* no horizontal scroll
* screenshots fit the viewport
* text is readable
* chapter navigation wraps cleanly
* CTA buttons do not overflow
* feedback template remains usable

## Homepage integration

Keep the homepage links to the manual.

Verify:

* main nav link if present
* CTA link if present
* footer link
* sitemap entry

Do not clutter or redesign the homepage.

## Checks

Run:

```bash
git diff --check
find httpdocs -type f | sort
```

Check for broken/private references:

```bash
grep -R "/Users/\|localhost\|127.0.0.1" httpdocs -n || true
grep -R "password\|secret\|token\|credential" httpdocs docs -n || true
grep -R "ChordBook\|chordbook" httpdocs -n || true
```

Review results carefully.

If possible, run a simple local server and manually inspect:

```bash
cd httpdocs
python3 -m http.server 8080
```

Then check:

```text
http://localhost:8080/
http://localhost:8080/handbuch.html
```

Browser QA checklist:

```text
desktop width around 1440px
tablet width around 1024px
mobile width around 390px
screenshots not oversized
no horizontal scrolling
chapter anchors work
header does not cover headings
feedback template still works
homepage still looks unchanged
```

If browser QA cannot be run in the workspace, document it honestly.

## Documentation

Create or update:

`docs/website-manual-layout-rework.md`

Document:

* what layout was changed
* screenshot component/classes used
* screenshots affected
* browser QA status
* pending items

## Non-goals

Do not do any of the following:

* Do not modify the app repo.
* Do not change app code.
* Do not change app docs.
* Do not remove reviewed screenshots.
* Do not add fake screenshots.
* Do not add analytics.
* Do not add new dependencies.
* Do not redesign the whole website.
* Do not change legal text.
* Do not change deployment configuration.

## Completion report

At the end, report:

* files changed
* whether `handbuch.html` was refactored or rebuilt
* CSS/classes added or changed
* screenshot rendering behavior on desktop/mobile
* screenshots used
* homepage/nav/footer/sitemap status
* checks run
* browser QA status
* confirmation that the app repo was not modified
