# Manual screenshot layout

## Change

Manual screenshot sizing is controlled by the existing manual figure selectors in `httpdocs/styles.css`:

- `.manual-layout figure`
- `.wide-shot`
- `.inline-shot`

On desktop, each screenshot is centered, limited to a `640px` container and capped at `76vh` with `object-fit: contain`. This keeps portrait iPad captures readable without turning them into page-height content blocks. Captions are centered beneath the image.

At the `560px` mobile breakpoint, screenshots use the full available width, retain automatic height, and remove the viewport-height cap so no content is clipped or causes horizontal overflow.

## Assets

The existing ten privacy-checked screenshots were not altered or recompressed. They total roughly 1.7 MB, so CSS sizing is sufficient for this adjustment; optional image-format optimization can be assessed separately if page-weight measurements later warrant it.

## QA

Static image-reference and diff checks were run. Rendered desktop/tablet/mobile QA remains blocked because the workspace browser policy disallows the local test address; no fallback browser was used.
