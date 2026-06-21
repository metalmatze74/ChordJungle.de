# Website manual clean rebuild

## Rebuilt page

`httpdocs/handbuch.html` was rebuilt into a single, maintainable manual page with page-scoped components for the hero, quick start, table of contents, chapters, callouts, screenshots, troubleshooting and feedback template.

The content source remains `/Users/matthias/Documents/chordbook-app/docs/user-manual`. The public copy is concise, German and beta-appropriate; the app repository was not modified.

## Screenshot layout

The reviewed iPad screenshots in `httpdocs/assets/img/manual/` remain unchanged. Used screenshots are the overview, editor, import, two setlist views, Stage Mode, metronome settings and backup/restore.

`styles.css` now uses:

- `.manual-page`, `.manual-hero`, `.manual-toc`, `.manual-section`
- `.manual-card-grid`, `.manual-callout`, `.manual-screenshot`
- `.manual-feedback-template`

`.manual-screenshot` caps a desktop image at `520px` wide and `68vh` high with `object-fit: contain`; at `560px` and below it becomes full-width with natural height. This keeps portrait captures from dominating desktop reading flow without clipping them on mobile.

## Pending material

There are still no reviewed screenshots for active setlist, local transfer, detailed sync/restore dialogs, diagnostics/local reset, phone or desktop layouts. The page does not invent replacements.

## Future updates

Update version-specific help in the app manual first, then adapt the relevant chapter text on the website, copy only privacy-checked screenshots and rerun the local-reference/diff checks.

## QA

Static checks were run. Rendered browser QA is blocked by the workspace policy that disallows the local test address; no fallback browser was used.
