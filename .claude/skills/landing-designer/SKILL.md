---
name: landing-designer
description: Use when changing the landing page or the site's look, for example "add a section to the landing", "change the hero", "tweak the colours", "add a new colour token", "restyle the buttons", "update the features grid", "dark mode looks off". Enforces the flat, calm, logo-derived design system and the wave-divider wiring.
---

# Landing designer

## Design rules (non-negotiable)

- **Flat.**
  - No `box-shadow`, no gradients, no `transform` hover lifts, no pulsing or glowing animations.
  - Separate elements with hairline `1px solid var(--lm-border)` borders and background tints.
  - Hover states change colour only (`transition` on colour properties, about 0.15s).
- **Calm luxury.** Use muted, deep shades from the palette. Never introduce bright or saturated colours. Accents are used sparingly: icons, small highlights.
- **Logo-derived palette.** New colours must come from the logo family (navy `#202169`, indigo `#4033ba`, violet `#9b7bff`, cyan `#3aceff`), desaturated to fit, or be one of the feedback tones.
- **Tokens only.** Components use `var(--lm-*)` (or Infima variables mapped from them). No raw hex in components, except the fixed white logo tile and the fixed sponsor-heart colour.
- **Both themes.**
  - Each new token is defined in `:root` **and** `[data-theme='dark']` in `src/css/custom.css`.
  - A dark-mode `--lm-primary` is light, so text on it uses `--lm-on-primary`.
  - Dark sections (`--lm-ink`, `--lm-band`) use `--lm-on-dark` / `--lm-on-dark-muted` for text.

## Structure

- `src/pages/index.js`: sections are small components (`Hero`, `Highlights`, `Features`, `Contribute`, `Support`). Content lives in the `BADGES` / `HIGHLIGHTS` / `FEATURES` arrays at the top. Edit the data before touching markup.
- **Waves:**
  - `<Wave from="--lm-x" to="--lm-y" path="..." />` sits between sections whose backgrounds differ.
  - `from` is the background of the section above, and `to` the section below.
  - The final wave's `to` is `--lm-ink` (the footer).
  - Adding, removing or reordering a section means re-checking the waves on both sides of it.
  - Vary the `path` curve between neighbouring waves.
- **Buttons:**
  - Use the existing classes: `btn` plus `btnPrimary`, `btnOutline`, `btnLight` or `btnOutlineLight` (use the light ones on dark sections).
  - Use `@docusaurus/Link` with `to` for internal links and `href` for external.
- **Icons:** add the SVG to `src/components/landing/Icon.js`. Lucide-style strokes go in `STROKE_ICONS`, solid shapes in `FILL_ICONS`. No icon packages.
- **Responsive:** check the breakpoints at 996px (hero stacks and centres, grid goes to 2 columns) and 600px (1 column).

## Content

Feature claims must match the app in `../Lumark` (read its `README.md` and code). Keep copy short and plain, following the writing rules in `CLAUDE.md`. The original landing in `../Lumark-Website/pages/index.tsx` is a reference for structure only.

## Verify

1. Run `yarn build`.
2. If a browser tool is available, `yarn serve` and look at `/` in both light and dark, at desktop and about 390px wide.
3. Check that every wave blends into its neighbours with no visible seam or colour mismatch.
