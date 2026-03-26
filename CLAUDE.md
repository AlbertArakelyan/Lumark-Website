# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Overview

Landing page for [Lumark](https://github.com/AlbertArakelyan/Lumark) — an open-source, local-first, cross-platform Markdown note-taking app built with Tauri.

## Tech Stack

- **Framework:** Next.js 16 (Pages Router) with TypeScript
- **Styling:** Bootstrap (vendored Bootswatch theme in `styles/bootstrap.min.css`) + Bootstrap Icons + custom CSS (`styles/style.css`)
- **Package manager:** Yarn

## Commands

```bash
yarn dev      # Start dev server (localhost:3000)
yarn build    # Production build
yarn start    # Start production server
yarn lint     # Run ESLint
```

## Architecture

Single-page marketing site using the Next.js Pages Router:

- `pages/index.tsx` — entire landing page (hero, highlights, features, contribute, donate, footer sections separated by SVG wave dividers)
- `pages/_app.tsx` — imports global stylesheets (Bootstrap, Bootstrap Icons, custom CSS)
- `pages/_document.tsx` — HTML document wrapper
- `styles/style.css` — custom styles with CSS variables (`--primary`, `--light`, `--dark`) and dark mode via `@media (prefers-color-scheme: dark)`
- `public/icons.svg` — SVG sprite sheet; icons referenced via `<use href="/icons.svg#icon-name"/>`

## Conventions

- **Do not edit** `styles/bootstrap.min.css` — it is a vendored Bootswatch Bootstrap theme.
- Custom styles go in `styles/style.css`.
- Layout uses Bootstrap utility classes (grid, flexbox, spacing). Custom CSS handles component-specific styling (hero, wave dividers, highlight blocks, sponsor button animation).
- SVG icons are stored as `<symbol>` elements in `public/icons.svg` and referenced via `<use>`.
- Path alias `@/*` maps to the project root.
