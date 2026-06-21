# Manual Screenshot Layout Fix / Responsive Image Sizing

You are working in the ChordJungle website repository.

Save this prompt as:

`docs/codex/manual-screenshot-layout-fix.md`

If `docs/codex/` does not exist, create it.

## Goal

Fix the layout of screenshots on the German manual page.

Currently, screenshots on `handbuch.html` are displayed much too large on desktop. They dominate the page and make the manual hard to read.

This is a website layout/CSS issue. Do not modify the app repository.

## Context

The website recently integrated the German beta manual into:

`httpdocs/handbuch.html`

Screenshots were copied to:

`httpdocs/assets/img/manual/`

The screenshots are real, privacy-checked iPad screenshots. They should remain available, but their rendered size on the website must be controlled.

## Scope

Allowed changes:

```text
httpdocs/handbuch.html
httpdocs/**/*.css
httpdocs/assets/**/*.css
docs/**
```

Do not change:

```text
app repository
app code
screenshot source content unless simple web optimization is explicitly needed
website branding
homepage design beyond screenshot/manual-specific styling
```

Do not replace screenshots with fake images.

Do not remove screenshots.

## Desired screenshot behavior

Manual screenshots should be:

```text
centered
responsive
readable
visually integrated into the manual
not full-width giant images on desktop
not horizontally overflowing on mobile
not taller than the visible page area in a disruptive way
```

Recommended behavior:

```text
Desktop:
  max screenshot width: 720px to 960px
  image centered
  height auto
  max-height around 70vh to 80vh
  object-fit: contain

Mobile:
  width: 100%
  max-width: 100%
  height auto
```

Screenshots should look like product screenshots, not page backgrounds.

## CSS fix

Find the current manual image/screenshot CSS.

If there is already a manual-specific class, use it.

If not, add focused manual-specific classes, for example:

```html
<figure class="manual-screenshot">
  <img src="assets/img/manual/..." alt="...">
  <figcaption>...</figcaption>
</figure>
```

Recommended CSS direction:

```css
.manual-screenshot {
  margin: 2rem auto;
  max-width: 960px;
}

.manual-screenshot img {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 76vh;
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

Adjust values to fit the existing website style.

Do not blindly paste this if the site already has better conventions. Integrate cleanly.

## Existing image references

Review all manual screenshot references in `handbuch.html`.

Ensure every screenshot image is wrapped consistently.

Ensure all images have:

```text
meaningful German alt text
loading="lazy" unless above the fold
width and height if safely known
no broken paths
```

Do not add lazy loading to critical above-the-fold branding images if that would harm perceived loading.

## Optional web optimization

If screenshot files are very large, inspect file sizes.

If simple resizing is easy and safe, create web-optimized copies only if this fits the existing asset workflow.

Preferred for now:

```text
CSS sizing first
document image optimization as pending if needed
```

Do not add new image processing dependencies.

Do not degrade screenshot readability.

## Manual page visual QA

Open or inspect the page locally if possible.

Check:

```text
desktop width around 1440px
tablet width around 1024px
mobile width around 390px
screenshots do not dominate the page
no horizontal scrolling
captions remain readable
navigation/header is not affected
homepage layout is not affected
```

If rendered browser QA is blocked by workspace policy, document it honestly.

## Checks

Run available static checks.

At minimum:

```bash
git diff --check
```

Also verify local references:

```bash
find httpdocs -type f | sort
```

Check that image paths still exist and no local/private paths leaked:

```bash
grep -R "/Users/\|localhost\|127.0.0.1" httpdocs -n || true
grep -R "password\|secret\|token\|credential" httpdocs docs -n || true
```

Review results carefully.

## Documentation update

Update or create a short note under `docs/`, for example:

`docs/manual-screenshot-layout.md`

Document:

```text
what was changed
which CSS/classes control manual screenshot sizing
any pending image optimization
whether rendered QA was completed or blocked
```

## Non-goals

Do not do any of the following:

```text
Do not modify the app repository.
Do not change app code.
Do not redesign the full website.
Do not remove screenshots.
Do not add fake screenshots.
Do not change legal pages.
Do not add analytics or tracking.
Do not add new dependencies.
Do not change GitHub/netcup deployment configuration.
```

## Completion report

At the end, report:

```text
files changed
CSS/classes changed
screenshots affected
desktop/mobile behavior after the fix
whether any images were optimized or only CSS was changed
checks run
rendered browser QA status
confirmation that the app repo was not modified
```
