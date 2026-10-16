// Bump LATEST_VERSION after every Lumark release. The download URLs are built from it.
export const LATEST_VERSION = '0.9.0';

export const GITHUB_URL = 'https://github.com/AlbertArakelyan/Lumark';
export const RELEASES_URL = `${GITHUB_URL}/releases`;

const asset = (fileName) => ({
  fileName,
  url: `${RELEASES_URL}/download/v${LATEST_VERSION}/${fileName}`,
});

// One entry per installer. Add new ones here (for example an Apple Silicon .dmg or an .AppImage).
export const DOWNLOADS = [
  { os: 'Windows', icon: 'windows', arch: 'x64', format: '.exe installer', ...asset(`Lumark_${LATEST_VERSION}_x64-setup.exe`) },
  {
    os: 'macOS',
    icon: 'apple',
    arch: 'Intel x64',
    format: '.dmg disk image',
    note: 'Apple Silicon: coming soon',
    ...asset(`Lumark_${LATEST_VERSION}_x64.dmg`),
  },
  { os: 'Linux', icon: 'linux', arch: 'amd64', format: '.deb package', ...asset(`Lumark_${LATEST_VERSION}_amd64.deb`) },
];
