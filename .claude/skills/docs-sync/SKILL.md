---
name: docs-sync
description: Use when the docs need to catch up with the Lumark app, either after a feature ships or a release, or when the user says "update the docs for X", "sync docs with Lumark", "document the new feature", "a roadmap item is done", "what changed in 0.x". Reads the sibling ../Lumark project (code, git history and all its .md files) as the source of truth and updates the affected doc pages.
---

# Docs sync

`../Lumark` is the main project. The docs describe it, so every claim must trace back to something in that repo. Never document a feature from memory or from the request alone.

## 1. Find out what changed

- If the user names a feature, issue or version, start there. Otherwise run `git -C ../Lumark log --oneline -30` and look for `feat(...)` / `fix(...)` commits since the docs were last touched (`git log -1 --format=%cd -- docs` here, if this is a git repo).
- `git -C ../Lumark show <sha> --stat` to see which files a change touched, then read those files.
- Check `../Lumark/src-tauri/tauri.conf.json` for the current version.

## 2. Read the sources

Always read:

- `../Lumark/README.md`: features and **Roadmap** checkboxes
- `../Lumark/CLAUDE.md` and the nested `CLAUDE.md` files near the changed code (`src-tauri/`, `src/contexts/`, `src/components/Editor/`, `src/components/UI/`)

Read when relevant:

- `../Lumark/resources/*.md` (installation, Markdown guide), `CONTRIBUTING.md`, `DEV_README.md`
- The code itself for exact behaviour: labels and buttons in `src/components/Layouts/`, editor extensions in `src/components/Editor/Editor.tsx`, storage and validation in `src-tauri/src/lib.rs`, autosave, search and theme in `src/contexts/AppProvider.tsx`

## 3. Map the change to pages

| Area of change | Doc pages |
| --- | --- |
| Installers, bundling, signing | `getting-started/installation.mdx`, `faq.md` |
| Folders, notes, rename, delete, search | `your-notes/folders-and-notes.md`, `faq.md` |
| Saving | `your-notes/autosave.md` |
| Storage path, migrations, `identifier` | `your-notes/where-notes-live.mdx` |
| Editor modes, CodeMirror extensions | `editor/editor-modes.md`, `keyboard-shortcuts.mdx` |
| Preview plugins (remark/rehype) | `editor/markdown-syntax.md` |
| Theme | `appearance/dark-mode.md` |
| Keymaps, Tab support | `keyboard-shortcuts.mdx` (remove or shrink the Coming soon callout) |
| Architecture, contributor workflow | `contributing/index.md`, `contributing/architecture.md` |
| A headline feature | also `intro.md` and the landing page `FEATURES`/`HIGHLIGHTS` in `src/pages/index.js` |

A brand-new area gets a new page. Use the `doc-page-creator` skill for that.

## 4. Edit

- Describe what the user sees and does, using the app's real labels.
- Move items out of `:::info[Coming soon]` callouts once they ship. Add a callout for newly announced roadmap items only if a page already covers that area.
- Keep limitations honest (permanent deletes, folder-scoped search, and so on).
- Follow the writing rules in `CLAUDE.md`.

## 5. Verify

Run the `site-check` skill. Then report which pages changed and which Lumark files or commits each change is based on.
