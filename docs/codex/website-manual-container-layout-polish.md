# Website Manual Container Layout Polish

You are working in the ChordJungle website repository.

Save this prompt as:

`docs/codex/website-manual-container-layout-polish.md`

## Goal

Polish the layout of `httpdocs/handbuch.html` after the manual rebuild.

The page content is now much better structured, but the layout still feels inconsistent on desktop:

* the hero content appears indented differently than later sections
* sections such as Schnellstart and Inhalt start too far left
* the page uses the available desktop width unevenly
* the right side has too much empty space
* the cards feel slightly cramped/edge-aligned
* the manual needs a consistent content container

Do not rebuild the whole manual again. This is a focused layout polish.

Do not modify the app repository.

## Scope

Allowed changes:

```text
httpdocs/handbuch.html
httpdocs/**/*.css
docs/**
```

Do not change:

```text
app repository
app code
app docs
website legal text
deployment configuration
GitHub/netcup setup
```

## Main task

Create a consistent layout container system for the manual page.

All major manual sections should align consistently:

```text
Hero
Schnellstart
Inhalt / chapter navigation
chapter sections
feedback section
```

Recommended behavior:

```text
Desktop:
  content max-width around 1120px to 1200px
  centered with margin-inline auto
  consistent padding-left/right
  text blocks max-width around 720px to 820px where useful
  card grids use available container width cleanly

Tablet:
  same container with smaller side padding

Mobile:
  full width with comfortable padding
  no horizontal scrolling
```

## Suggested CSS direction

Use or introduce manual-specific classes such as:

```css
.manual-container {
  width: min(1120px, calc(100% - 2rem));
  margin-inline: auto;
}

.manual-narrow {
  max-width: 780px;
}

.manual-section {
  scroll-margin-top: 96px;
}
```

Adjust names and values to fit the existing CSS.

Important:

* Do not globally change all website containers if that would affect the homepage.
* Prefer manual-page-specific classes.
* Keep the current ChordJungle visual style.
* Do not redesign the homepage.

## Specific layout fixes

Check and fix:

### Hero

The hero should align with the same manual container as the rest of the page.

It should not start with a different left offset than the following sections.

### Schnellstart cards

The quickstart cards should sit inside the same container.

On desktop, they should look intentional and balanced.

If five cards are too narrow, use a responsive grid such as:

```css
grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
```

or use the existing site convention.

### Inhalt cards

The chapter navigation grid should align with the container.

Cards should not touch the left edge of the viewport.

### Manual screenshots

Re-check screenshot rendering.

Screenshots should remain:

```text
centered
not full raw-size
max-width around 720px to 920px
responsive
with caption
```

Do not remove screenshots.

Do not add fake screenshots.

## Mobile behavior

Check at around 390px width:

* no horizontal scrolling
* hero title wraps nicely
* cards stack or wrap cleanly
* navigation remains usable
* screenshots fit viewport
* feedback template does not overflow

## Checks

Run:

```bash
git diff --check
find httpdocs -type f | sort
```

Check for private or local references:

```bash
grep -R "/Users/\|localhost\|127.0.0.1" httpdocs -n || true
grep -R "password\|secret\|token\|credential" httpdocs docs -n || true
grep -R "ChordBook\|chordbook" httpdocs -n || true
```

Review results carefully.

If possible, run a local server:

```bash
cd httpdocs
python3 -m http.server 8080
```

Inspect:

```text
http://localhost:8080/handbuch.html
```

Browser QA checklist:

```text
desktop around 1440px
browser zoom 100%
browser zoom 50% only as overview check
tablet width around 1024px
mobile width around 390px
hero and sections align consistently
cards are not edge-aligned
screenshots are not oversized
no horizontal scrolling
anchors still work
homepage unchanged
```

If browser QA is blocked, document it honestly.

## Documentation

Create or update:

`docs/website-manual-container-layout-polish.md`

Document:

* what alignment/container issue was fixed
* CSS/classes changed
* browser QA status
* remaining visual issues, if any

## Non-goals

Do not do any of the following:

```text
Do not modify the app repo.
Do not change app code.
Do not rewrite all manual content.
Do not remove screenshots.
Do not add fake screenshots.
Do not add analytics.
Do not add dependencies.
Do not change legal pages.
Do not change deployment settings.
```

## Completion report

At the end, report:

```text
files changed
container/layout classes changed
hero alignment result
quickstart/card grid behavior
screenshot behavior
desktop/mobile QA status
checks run
confirmation that the app repo was not modified
```
