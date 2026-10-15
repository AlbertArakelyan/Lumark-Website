---
title: Contributing
description: How to set up Lumark locally and contribute a change.
---

# Contributing

Thanks for your interest in contributing! Lumark is open source under the MIT license, and contributions of every size are welcome, from a typo fix to a new feature.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/)
- [Rust](https://www.rust-lang.org/tools/install)
- The [Tauri v2 prerequisites](https://v2.tauri.app/start/prerequisites/) for your OS

## Getting started

1. Fork [the repository](https://github.com/AlbertArakelyan/Lumark) and clone your fork.
2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the app in development mode:

   ```bash
   yarn tauri dev
   ```

The dev server uses port `1420`. If it fails to start, check that no other process is holding that port.

## Useful commands

| Command | What it does |
| --- | --- |
| `yarn tauri dev` | Run the full desktop app with hot reload |
| `yarn build` | Type-check and build the frontend |
| `yarn tauri build` | Build installers for your OS |
| `yarn lint` | Run ESLint |
| `yarn lint:fix` | Run ESLint and fix what it can |

## Working on an issue

1. Pick an issue. Ones labelled `good first issue` are a good start.
2. On the issue page, click **Create a branch**. This gives you a branch name like `47-add-delete-buttons-to-files`.
3. Check out that branch locally in your fork:

   ```bash
   git checkout -b <branch-name>
   ```

4. Make your changes and run `yarn lint:fix`.
5. Open a pull request against `main`.

## Commit messages

Commits follow `<type>(<issue#>): <subject>`, where the issue number comes from the branch name:

```text
feat(47): added delete functionality for files
fix(47): moved stopPropagation to the top of handleDeleteClick
doc(51): add CLAUDE.md with project architecture
```

Common types are `feat`, `fix`, `chore` and `doc`.

## Need help?

Ask in the issue thread. Happy to help!

Before diving into the code, read the [architecture overview](./architecture.md).
