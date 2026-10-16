// Bump LATEST_VERSION after every Lumark release. The download URLs are built from it.
export const LATEST_VERSION = '0.9.0';

export const GITHUB_URL = 'https://github.com/AlbertArakelyan/Lumark';
export const RELEASES_URL = `${GITHUB_URL}/releases`;

const assetUrl = (fileName) => `${RELEASES_URL}/download/v${LATEST_VERSION}/${fileName}`;

// One card per platform, one button per installer. A button without a `url` renders disabled ("coming soon").
// `tooltip` is optional and shows on hover.
export const DOWNLOADS = [
  {
    os: 'Windows',
    icon: 'windows',
    options: [{ label: 'Download .exe installer', url: assetUrl(`Lumark_${LATEST_VERSION}_x64-setup.exe`) }],
  },
  {
    os: 'macOS',
    icon: 'apple',
    options: [
      {
        label: 'Download for Intel',
        tooltip: 'For Macs with an Intel processor',
        url: assetUrl(`Lumark_${LATEST_VERSION}_x64.dmg`),
      },
      {
        label: 'Download for Apple Silicon (coming soon)',
        tooltip: 'For Macs with an M1, M2, M3 or newer chip',
      },
    ],
  },
  {
    os: 'Linux',
    icon: 'linux',
    options: [{ label: 'Download .deb package', url: assetUrl(`Lumark_${LATEST_VERSION}_amd64.deb`) }],
  },
];
