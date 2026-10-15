---
title: FAQ & troubleshooting
description: Answers to common questions about Lumark.
---

# FAQ & troubleshooting

## Does Lumark collect any data?

No. Lumark has no account, no analytics and no network sync. Your notes never leave your computer unless you copy them somewhere yourself.

## Is there cloud sync?

Not built in. Because notes are plain files, you can put them under a tool you already trust, such as a synced folder or a Git repository. See [Where your notes live](./your-notes/where-notes-live.mdx) for the path.

## Where are my notes stored?

In a `notes` directory inside your app data folder, one sub-directory per Lumark folder. The exact path for each OS is on [Where your notes live](./your-notes/where-notes-live.mdx).

## I deleted a note or folder by mistake. Can I get it back?

Not from inside Lumark. Deletes are permanent and don't go through the system trash. If you keep backups of the `notes` directory, restore the file from there. This is a good reason to [set up a backup](./your-notes/where-notes-live.mdx#backing-up).

## I can't create a note or folder with a certain name

Names can't be empty, can't contain `/` or `\`, can't be `.` or `..`, and must be unique within their folder. See [Naming rules](./your-notes/folders-and-notes.md#naming-rules).

## I typed something and it isn't there after switching notes

Lumark saves about half a second after you stop typing. If you switch notes or close the app within that window, the last change may not be saved. See [Autosave](./your-notes/autosave.md).

## Can I add `.md` files to Lumark that I created elsewhere?

Yes. Copy them into one of the folder directories under `notes/`. Lumark lists every `.md` file in a folder the next time it loads that folder. Sub-directories inside a folder are ignored.

## Search doesn't find text inside my notes

Search currently matches note **names** in the selected folder only. Full-text and cross-folder search are planned.

## macOS says the app can't be opened

See the macOS tab of [Installation](/docs/getting-started/installation?os=macos).

## Windows shows "Windows protected your PC"

Click **More info**, then **Run anyway**. See [Installation](./getting-started/installation.mdx).

## Something else is wrong

[Open an issue](https://github.com/AlbertArakelyan/Lumark/issues/new) on GitHub with your OS, the Lumark version and the steps to reproduce.
