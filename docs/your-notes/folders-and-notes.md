---
title: Folders and notes
description: How Lumark organises notes into folders, and how to create, rename, search and delete them.
---

# Folders and notes

Lumark's window has three columns:

1. **Folders** on the far left.
2. **Notes** in the selected folder.
3. **The editor** for the selected note.

You can hide the two side panels with the panel button in the top-left corner of the toolbar, and bring them back with the same button.

## Folders

Folders are one level deep: a folder contains notes, but not other folders.

- **Create** a folder with the **+** button at the top of the folders panel. Type a name and press <kbd>Enter</kbd>, or <kbd>Esc</kbd> to cancel.
- **Rename** a folder by hovering over it and clicking the pencil icon.
- **Delete** a folder by hovering over it and clicking the trash icon. Lumark asks for confirmation first.

:::danger[Deleting a folder deletes its notes]
Deleting a folder permanently removes it **and every note inside it** from disk. They do not go to the system trash. Back up anything you want to keep first.
:::

The **general** folder is created on first launch. It's an ordinary folder: you can rename or delete it like any other.

## Notes

- **Create** a note with the **+** button next to the search box. Type a name and press <kbd>Enter</kbd>.
- **Open** a note by clicking it. The editor shows *"No file is selected"* until you do.
- **Rename** a note by hovering over it and clicking the pencil icon.
- **Delete** a note with the trash icon. Lumark asks for confirmation first, and deleted notes don't go to the system trash.

Names are used as file names on disk, so you don't type the `.md` extension; Lumark adds it.

### Naming rules

A folder or note name:

- can't be empty,
- can't contain `/` or `\`,
- can't be just `.` or `..`,
- must be unique within its parent. Two notes in the same folder can't share a name, but notes in different folders can.

## Search

The search box filters notes in the **currently selected folder** by name. It does not search inside note contents or across folders yet.
