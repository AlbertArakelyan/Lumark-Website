// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

const GITHUB_URL = 'https://github.com/AlbertArakelyan/Lumark';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lumark',
  tagline: 'A fast, cross-platform, local-first Markdown note-taking app.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://www.lumark.app',
  baseUrl: '/',

  organizationName: 'AlbertArakelyan',
  projectName: 'lumark-website-docs',

  onBrokenLinks: 'throw',

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap',
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Lumark',
        logo: {
          alt: 'Lumark logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/download',
            label: 'Download',
            position: 'right',
          },
          {
            href: GITHUB_URL,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Introduction', to: '/docs/intro' },
              { label: 'Installation', to: '/docs/getting-started/installation' },
              { label: 'Markdown syntax', to: '/docs/editor/markdown-syntax' },
              { label: 'FAQ', to: '/docs/faq' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Issues', href: `${GITHUB_URL}/issues` },
              { label: 'Contributing', to: '/docs/contributing' },
              { label: 'X', href: 'https://x.com/AlbertArak25' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Releases', href: `${GITHUB_URL}/releases` },
              { label: 'GitHub', href: GITHUB_URL },
              { label: 'Sponsor', href: 'https://github.com/sponsors/AlbertArakelyan' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Lumark. MIT License.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;
