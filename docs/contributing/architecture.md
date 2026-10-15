---
title: Architecture
description: How Lumark is put together, for contributors.
---

# Architecture

Lumark is a [Tauri 2](https://v2.tauri.app/) app: a Rust backend and a React 19 + TypeScript frontend built with Vite.

## Two processes

```text
┌──────────────────────────┐   invoke('command', args)   ┌──────────────────────────┐
│ Frontend (src/)          │ ──────────────────────────▶ │ Rust backend             │
│ React, CodeMirror,       │                             │ (src-tauri/src/lib.rs)   │
│ react-markdown           │ ◀────────────────────────── │ all file I/O happens here│
└──────────────────────────┘     Result<T, String>       └──────────────────────────┘
```

- The **frontend** never touches the filesystem. It calls Rust through `invoke(...)` from `@tauri-apps/api/core`.
- The **backend** defines every `#[tauri::command]` in `src-tauri/src/lib.rs` and is the only place notes are read or written.

Adding a feature that reads or writes notes takes three steps:

1. Write a `#[tauri::command]` function in `lib.rs`.
2. Register it in the `invoke_handler!` list at the bottom of `lib.rs`. Forgetting this only fails at runtime.
3. Call it from the frontend, usually through the app context.

## Storage

Notes live at `<app_data_dir>/notes/<folder>/<note>.md`, exactly one folder deep. The frontend identifies a note by **folder name + base name, without `.md`**. The Rust path helpers append the extension, so passing `foo.md` from JavaScript would produce `foo.md.md`.

Path resolution goes through shared helpers (`notes_dir`, `folder_dir`, `notes_file_path` and friends). They all run the same `validate_name` check, which rejects path separators, `.`, `..` and NUL.

## Frontend state

There is one React context, `src/contexts/AppProvider.tsx`, which owns all app state: folders, files, the selected note, the editor buffer, the editor mode and the theme. Components read it with `useAppContext()`. There is no Redux or similar library.

The provider wires data flow with a few effects:

1. On mount, load folders and select `general` (or the first folder).
2. When the selected folder changes, load its notes.
3. When the selected note changes, load its content.
4. When the content changes, save it after a 500 ms debounce.

A ref holding the current `folder/note` key makes sure a pending save can never be written into a different note after a switch.

## Editor

`src/components/Editor/Editor.tsx` renders two views of the same content:

- **Edit pane:** a CodeMirror 6 editor, created once and kept alive across mode switches.
- **Preview pane:** `react-markdown` with `remark-gfm`, `rehype-raw` and `rehype-highlight`, styled with `github-markdown-css`.

Modes only hide one pane or the other with CSS. Neither is unmounted, so the editor keeps its cursor and history.

## UI and styling

- Reusable UI primitives live in `src/components/UI/` (Button, Input, Modal, ...). Check there before adding new markup.
- Styling is Tailwind v4 utility classes with semantic colour tokens defined in `src/assets/css/base.css` and `tailwind.config.js`, each with a light and a dark value.
- Icons come from `lucide-react`.

## More detail

The repository's `CLAUDE.md` files go deeper into each area, including the invariants that are easy to break. Read the one closest to the code you're changing.
