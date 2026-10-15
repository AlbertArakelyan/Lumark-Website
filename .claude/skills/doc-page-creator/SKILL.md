---
name: doc-page-creator
description: Use when adding a new page or section to the docs, for example "add a docs page for export to PDF", "create an Images section", "new FAQ category". Covers the file format, frontmatter, the manual sidebar entry, admonitions, OS tabs and linking conventions.
---

# Doc page creator

## Steps

1. **Confirm the facts first.** The page documents `../Lumark`, so read the relevant code and `.md` files there (see the `docs-sync` skill for where to look). If the feature hasn't shipped, the page is a short overview plus a `:::info[Coming soon]` callout linking to `https://github.com/AlbertArakelyan/Lumark#roadmap`.
2. **Pick the location.** Put the page in the existing section folder that fits (`getting-started/`, `your-notes/`, `editor/`, `appearance/`, `contributing/`). Create a new folder only for a genuinely new area.
3. **Pick the extension.**
   - `.md` by default.
   - `.mdx` when the page imports components such as `Tabs` / `TabItem`.
   - Either way the file is parsed as MDX, so keep `{`, `}` and `<` in prose inside backticks.
4. **Write the frontmatter.**

   ```md
   ---
   title: Short title
   description: One sentence for search results and link previews.
   ---

   # Short title
   ```

5. **Add it to `sidebars.js`.** The sidebar is manual. The doc id is the path without its extension (`editor/export-pdf`). New top-level sections are `type: 'category'` entries with `collapsed: false`, matching the existing ones. The PostToolUse hook warns if you forget.
6. **Link it in.** Add it to the "Where to go next" table in `docs/intro.md` if it's something a new user looks for, and to the footer `Docs` links in `docusaurus.config.js` only if it's a top destination.
7. Run the `site-check` skill.

## Conventions

- **Admonitions:**
  - Use `:::tip`, `:::info`, `:::note`, `:::warning`, `:::danger`, with titles in brackets: `:::danger[Deleting is permanent]`. Never write `:::danger Deleting is permanent`.
  - Use `danger` only for data loss.
  - Use `info[Coming soon]` for unshipped features.
- **OS-specific content:**

  ```mdx
  import Tabs from '@theme/Tabs';
  import TabItem from '@theme/TabItem';

  <Tabs groupId="os" queryString>
    <TabItem value="windows" label="Windows" default>

  ...

    </TabItem>
    <TabItem value="macos" label="macOS">...</TabItem>
    <TabItem value="linux" label="Linux">...</TabItem>
  </Tabs>
  ```

  Keep blank lines around Markdown inside a `TabItem`.
- **Keys:** `<kbd>Ctrl</kbd> + <kbd>B</kbd>`, and note that macOS uses `Cmd`.
- **Links:**
  - Link to other docs with relative file paths (`../your-notes/autosave.md`) so the build checks them.
  - Link to GitHub releases with `https://github.com/AlbertArakelyan/Lumark/releases/latest`.
- **UI labels:** bold, exactly as the app shows them (**Split**, **Edit**, **Preview**).
- **Images:** go in `static/img/` and are referenced as `/img/<name>`.
