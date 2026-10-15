# Lumark website & docs

Landing page and user documentation for [Lumark](https://github.com/AlbertArakelyan/Lumark), built with [Docusaurus](https://docusaurus.io/).

## Commands

```bash
yarn          # install dependencies
yarn start    # dev server with live reload
yarn build    # production build into build/
yarn serve    # serve the production build locally
```

## Structure

- `src/pages/index.js` - landing page (hero, highlights, features, contribute, support), with sections joined by SVG waves from `src/components/landing/Wave.js`
- `src/css/custom.css` - the Lumark palette (`--lm-*` tokens) and Infima overrides, defined for both light and dark themes
- `docs/` - user documentation; the sidebar order lives in `sidebars.js`
- `static/img/` - logo, favicon and the app demo GIF

## Writing docs

- Admonition titles use the bracket syntax: `:::info[Coming soon]`, not `:::info Coming soon`.
- `.md` files are parsed as MDX, so write `{`, `}` and `<` inside backticks or code blocks.
