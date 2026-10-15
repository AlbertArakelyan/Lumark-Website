// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      items: ['getting-started/installation'],
    },
    {
      type: 'category',
      label: 'Your notes',
      collapsed: false,
      items: ['your-notes/folders-and-notes', 'your-notes/autosave', 'your-notes/where-notes-live'],
    },
    {
      type: 'category',
      label: 'Editor',
      collapsed: false,
      items: ['editor/editor-modes', 'editor/markdown-syntax'],
    },
    {
      type: 'category',
      label: 'Appearance',
      collapsed: false,
      items: ['appearance/dark-mode'],
    },
    'keyboard-shortcuts',
    'faq',
    {
      type: 'category',
      label: 'Contributing',
      link: { type: 'doc', id: 'contributing/index' },
      items: ['contributing/architecture'],
    },
  ],
};

export default sidebars;
