# Lumark Website

Landing page / marketing site for [Lumark](https://github.com/AlbertArakelyan/Lumark) — a local-first, cross-platform Markdown note-taking app built with Tauri.

## Tech Stack

- **Bundler:** Vite 8 (vanilla JS — no framework)
- **Styling:** Bootstrap (Bootswatch template, minified CSS in `src/bootstrap.min.css`) + custom CSS (`src/style.css`)
- **Package manager:** Yarn
- **Language:** Plain JavaScript (ES modules)

## Project Structure

```
index.html          # Single-page entry point (mounts into #app)
src/
  main.js           # JS entry — imports stylesheets only (no app logic yet)
  style.css         # Custom styles, CSS variables, light/dark theme
  bootstrap.min.css # Bootswatch Bootstrap theme (minified, do not edit)
public/
  favicon.svg       # Site favicon
  icons.svg         # SVG sprite (GitHub, X, Bluesky, Discord, docs, social icons)
```

## Commands

```bash
yarn dev      # Start Vite dev server
yarn build    # Production build → dist/
yarn preview  # Preview production build locally
```

## Conventions

- **Do not edit** `src/bootstrap.min.css` — it is a vendored Bootswatch Bootstrap theme.
- Custom styles go in `src/style.css`. The file uses CSS custom properties (variables) defined in `:root` for theming.
- Dark mode is handled via `@media (prefers-color-scheme: dark)` in `style.css`.
- SVG icons are stored as `<symbol>` elements in `public/icons.svg` and referenced via `<use>`.
- The site is a static page with no routing, no build-time frameworks, and no TypeScript.
