---
name: site-check
description: Use to verify the site after any change, or when the user says "check the site", "does it build", "verify the docs", "run the checks". Builds the site (which also checks links) and scans the output for silently broken Markdown.
---

# Site check

1. Run `yarn build`.
   - Broken internal links and anchors fail the build (`onBrokenLinks: 'throw'`). Report each with its source page.
   - On odd cache errors, run `yarn clear` once and rebuild.
2. Scan the built HTML for problems the build doesn't catch:
   - A literal `:::` in `build/docs/**/index.html` means an admonition didn't parse, usually a space-separated title. Fix it to `:::type[Title]`.
   - Doc files under `docs/` whose ids are missing from `sidebars.js` exist but aren't reachable from navigation.
3. Optionally, if a browser tool is available, `yarn serve` and spot-check changed pages in light and dark mode. Stop the server afterwards.
4. Delete `build/` when done unless the user wants it kept.

Report a short pass/fail summary. Fix problems only when the user asked for fixes or the check is part of a task you're already doing.
