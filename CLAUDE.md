# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

The landing page and user documentation for **Lumark**, a local-first Markdown note-taking desktop app. Built with **Docusaurus 3** (classic preset, plain JS, React 19). Package manager is **Yarn**.

## The sibling project: `../Lumark` is the source of truth

This site documents the app in **`../Lumark`** (Tauri 2 + React). That repo is the main project and the authority on what the app does and how it looks. Before writing or updating docs, read it rather than guessing:

- **Features and behaviour** come from the app's code and its Markdown files, not from memory or from this site's existing pages. When a doc and the app disagree, the app wins; fix the doc.
- **Read every relevant `.md` file in `../Lumark`**, not only the root `CLAUDE.md`. In particular:
  - `README.md`: feature list and the **Roadmap** (what's done, what's "coming soon")
  - `CLAUDE.md` plus the nested ones in `src-tauri/`, `src/contexts/`, `src/components/Editor/`, `src/components/UI/`: architecture, storage layout, naming rules, invariants
  - `DEV_README.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`: contributor-facing facts (`docs/contributing/` mirrors these)
  - `resources/INSTALLATION.md`, `resources/MARKDOWN_SYNTAX_GUIDE.md`: the originals of `docs/getting-started/installation.mdx` and `docs/editor/markdown-syntax.md`
  - `.claude/rules/*.md` and `.claude/skills/release-notes/SKILL.md`: conventions and the writing-style rules
- **Verify claims in code.** Useful places: `src-tauri/src/lib.rs` (storage, validation, delete semantics), `src-tauri/tauri.conf.json` (version, `identifier` used in the data-dir paths), `src/contexts/AppProvider.tsx` (autosave delay, search scope, theme), `src/components/Editor/Editor.tsx` (CodeMirror extensions and preview plugins, which decide what Markdown renders and what shortcuts exist), `src/components/Layouts/` (UI labels and buttons).
- **Design guidelines:** the brand comes from Lumark's logo (originals in `../Lumark/public/lumark-logo*-original.png` and `../Lumark/src-tauri/icons/`; the site uses `static/img/logo.png`). The app demo GIF is `../Lumark/public/lumark-screenshot.gif`. Re-copy it into `static/img/` when it changes. The app's own theme tokens live in `../Lumark/src/assets/css/base.css`. This site deliberately uses its own calmer, logo-derived palette (below), so take tone and feature-level UI facts from the app, not its exact hex values.
- `git -C ../Lumark log` shows what changed recently and is the fastest way to spot docs that need updating.

## Commands

```bash
yarn start    # dev server with live reload
yarn build    # production build into build/ (also the link checker: onBrokenLinks is 'throw')
yarn serve    # serve the production build
yarn clear    # clear the .docusaurus cache when builds behave strangely
```

There is no linter or test runner. `yarn build` is the verification step.

## Architecture

### Landing page
`src/pages/index.js` is the whole landing page: Hero → Highlights → Features ("Why Lumark?") → Contribute → Support, joined by SVG waves. It mirrors the old Next.js site in `../Lumark-Website` (structure and waves only; that site's Bootstrap styling and animated buttons are intentionally not carried over).

- `src/components/landing/Wave.js` takes `from`/`to` as **CSS variable names** (for example `from="--lm-ink" to="--lm-surface"`), so waves follow the theme. When you reorder or recolour sections, update the adjacent waves so `from` matches the section above and `to` the section below. The last wave goes into the footer, which is `--lm-ink`.
- `src/components/landing/Icon.js` holds inline SVG icons (lucide-style strokes plus a few filled ones). Add icons there; don't add an icon library.
- Page styles live in `src/pages/index.module.css`.

### Design system (`src/css/custom.css`)
- `--lm-*` tokens are the palette, derived from the logo (navy `#202169`, indigo `#4033ba`, violet `#9b7bff`, cyan `#3aceff`) and softened for a calm, luxurious look. Roles: `ink`, `primary`, `accent`, `band`, `surface(-muted)`, `border`, `text(-muted)`, `on-dark(-muted)`, `on-primary`, and feedback `success`/`warning`/`danger`/`info`.
- **Every theme-dependent token must be defined in both `:root` and `[data-theme='dark']`.** Infima variables (`--ifm-color-*`, including the admonition `*-contrast-*` colours) are mapped from these tokens in the same file.
- **Flat design**: no box shadows, no gradients, no hover lifts or pulsing animations. Hairline borders (`--lm-border`) and a colour change on hover only. Buttons are solid or outlined, 8px radius.
- Keep shades muted. Avoid bright or saturated colours.
- `.footer--dark` overrides `--ifm-footer-background-color` itself, because Infima sets it on that class rather than on `:root`.

### Docs
- `docs/` holds the user docs. **The sidebar is manual** (`sidebars.js`), so a new page must be added there or it won't appear. Doc ids are path-based (`your-notes/autosave`, `contributing/index`).
- Sections: Introduction, Getting started, Your notes, Editor, Appearance, Keyboard shortcuts, FAQ, Contributing.
- Not-yet-shipped features get a `:::info[Coming soon]` callout that links to the Lumark README roadmap, rather than describing them as available.
- The blog plugin is disabled (`blog: false`).

## Authoring gotchas

- **Admonition titles must use brackets**: `:::info[Coming soon]`. The space form (`:::info Coming soon`) silently renders as literal text on this Docusaurus version. A hook in `.claude/hooks/` flags this.
- **`.md` files are parsed as MDX.** Keep `{`, `}` and `<` in prose inside backticks or code blocks. Use `.mdx` when a page imports components (`Tabs`, `TabItem`).
- OS-specific steps use `<Tabs groupId="os" queryString>` with values `windows` / `macos` / `linux`, so a choice persists across pages and can be deep-linked (`?os=macos`).
- Link between docs with relative file paths (`./your-notes/autosave.md`), which the build validates. Only use URL paths when a query string is needed.
- Use `<kbd>` for keys. It is styled in `custom.css`.

## Writing style

Plain, user-facing, second person. Follow the writing rules in `../Lumark/.claude/skills/release-notes/SKILL.md`: no em dashes, no AI filler words ("seamlessly", "robust", "powerful", ...), no rule-of-three padding. State real limitations plainly (for example, deletes are permanent and skip the trash).

## Claude Code framework (`.claude/`)

- **Skills:**
  - `docs-sync`: update docs from changes in `../Lumark`
  - `doc-page-creator`: add a page plus its sidebar entry
  - `landing-designer`: landing page and design-system changes
  - `site-check`: build and scan for silent breakage
- **Agent:** `docs-auditor` is a read-only drift audit of every page against `../Lumark`.
- **Hook:** `hooks/check-doc.mjs` runs after edits to `docs/**/*.md(x)`. It rejects space-titled admonitions and doc pages missing from `sidebars.js`.
- **Settings:** `settings.json` adds `../Lumark` as an additional directory, so it can be read without prompts.

## Config notes

- `docusaurus.config.js`: `url` is `https://www.lumark.app`, and the `organizationName`/`projectName` deploy settings are placeholders until hosting is decided.
- Fonts (Geist, Geist Mono) are loaded from Google Fonts via `stylesheets`.
