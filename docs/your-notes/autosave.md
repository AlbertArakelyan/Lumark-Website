---
title: Autosave
description: How and when Lumark saves your notes.
---

# Autosave

Lumark has no Save button. Your note is written to disk automatically about **half a second after you stop typing**.

## How it behaves

- Each keystroke restarts a short timer. When you pause, the note is saved.
- Saving happens in the background and doesn't interrupt typing.
- The file on disk is a plain Markdown file, so what you see in the editor is exactly what gets stored.

:::tip
Before switching to another note or folder, or closing the app, pause for a moment after your last edit. A change made in the final split second before switching can be lost, because the save timer hasn't fired yet.
:::

## Editing outside Lumark

Because notes are regular `.md` files, you can also edit them in any other editor. See [Where your notes live](./where-notes-live.mdx) for their location. Avoid editing the same note in two apps at once: whichever saves last wins.
