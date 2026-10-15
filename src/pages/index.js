import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Icon from '@site/src/components/landing/Icon';
import Wave from '@site/src/components/landing/Wave';
import styles from './index.module.css';

const GITHUB_URL = 'https://github.com/AlbertArakelyan/Lumark';

const BADGES = [
  { src: 'https://img.shields.io/github/v/release/AlbertArakelyan/lumark?color=4b45a8&style=flat-square', alt: 'Latest release' },
  { src: 'https://img.shields.io/badge/language-Rust%20%7C%20TypeScript-8a76d9?style=flat-square', alt: 'Languages' },
  { src: 'https://img.shields.io/badge/platforms-Windows%2C%20macOS%2C%20Linux-3d8f76?style=flat-square', alt: 'Platforms' },
  { src: 'https://img.shields.io/github/license/AlbertArakelyan/lumark?color=b58a45&style=flat-square', alt: 'License' },
];

const HIGHLIGHTS = [
  {
    title: 'Amazing',
    icon: 'sparkle',
    text: 'Your notes are stored locally on your device with no data collection whatsoever. Work across Windows, macOS and Linux with a split editor that lets you write and preview side by side.',
  },
  {
    title: 'Elegant',
    icon: 'feather',
    text: 'A minimalist layout keeps everything within reach: your folders, your notes and the editor, side by side. Hide the side panels when you just want to write.',
  },
  {
    title: 'Efficient',
    icon: 'bolt',
    text: 'Built on Tauri instead of Electron, Lumark starts faster, uses less memory and installs with a much smaller footprint.',
  },
  {
    title: 'Simple',
    icon: 'circle',
    text: 'One tool, one purpose: taking notes in Markdown. No bloated feature list, no accounts, no setup. Open it and start writing.',
  },
];

const FEATURES = [
  { icon: 'shieldLock', title: 'Local-First', text: 'Notes live on your machine as plain .md files. No cloud, no accounts, complete privacy.' },
  { icon: 'laptop', title: 'Cross-Platform', text: 'Available on Windows, macOS and Linux.' },
  { icon: 'panels', title: 'Minimalist Design', text: 'Folders, notes and editor in one calm, uncluttered window.' },
  { icon: 'zap', title: 'Fast & Lightweight', text: 'Built with Tauri: small binary, low memory.' },
  { icon: 'split', title: 'Split Editor', text: 'Markdown on one side, live preview on the other.' },
  { icon: 'wifiOff', title: 'Works Offline', text: 'No internet needed. Open and write, anytime.' },
];

const Hero = () => (
  <section className={styles.hero}>
    <div className="container">
      <div className="row row--align-center">
        <div className={clsx('col col--6', styles.heroText)}>
          <div className={styles.logoTile}>
            <img src={useBaseUrl('/img/logo.png')} alt="Lumark logo" width="80" height="80" />
          </div>
          <h1 className={styles.heroTitle}>Lumark</h1>
          <div className={styles.badges}>
            {BADGES.map((badge) => <img key={badge.alt} src={badge.src} alt={badge.alt} />)}
          </div>
          <p className={styles.heroLead}>A fast, cross-platform, local-first Markdown note-taking app.</p>
          <div className={styles.actions}>
            <Link className={clsx(styles.btn, styles.btnLight)} href={`${GITHUB_URL}/releases/latest`}>
              <Icon name="download" size={18} />
              Download
            </Link>
            <Link className={clsx(styles.btn, styles.btnOutlineLight)} href={GITHUB_URL}>
              <Icon name="github" size={18} />
              GitHub
            </Link>
          </div>
          <Link className={styles.docsLink} to="/docs/intro">
            Read the documentation &rarr;
          </Link>
        </div>
        <div className="col col--6">
          <div className="lm-frame">
            <img src={useBaseUrl('/img/lumark-screenshot.gif')} alt="Lumark app demo" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Highlights = () => (
  <section className={styles.highlights}>
    <div className="container">
      {HIGHLIGHTS.map((highlight, index) => {
        const isRight = index % 2 === 1;

        return (
          <div key={highlight.title} className={clsx(styles.highlight, isRight && styles.highlightRight)}>
            <h3>
              {!isRight && <Icon name={highlight.icon} size={26} className={styles.highlightIcon} />}
              {highlight.title}
              {isRight && <Icon name={highlight.icon} size={26} className={styles.highlightIcon} />}
            </h3>
            <p>{highlight.text}</p>
          </div>
        );
      })}
    </div>
  </section>
);

const Features = () => (
  <section className={styles.features}>
    <div className="container">
      <h2 className={styles.sectionTitle}>Why Lumark?</h2>
      <div className={styles.featureGrid}>
        {FEATURES.map((feature) => (
          <div key={feature.title} className={styles.feature}>
            <div className={styles.featureIcon}>
              <Icon name={feature.icon} size={26} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contribute = () => (
  <section className={styles.contribute}>
    <div className="container">
      <h2 className={styles.sectionTitle}>Contribute to Lumark</h2>
      <p className={styles.sectionLead}>Lumark is open source and MIT licensed. Contributions of all kinds are welcome.</p>
      <div className={clsx(styles.actions, styles.actionsCenter)}>
        <Link className={clsx(styles.btn, styles.btnPrimary)} href={`${GITHUB_URL}/issues/new`}>
          Open an Issue
        </Link>
        <Link className={clsx(styles.btn, styles.btnOutline)} to="/docs/contributing">
          Contributing guide
        </Link>
      </div>
    </div>
  </section>
);

const Support = () => (
  <section className={styles.support}>
    <div className="container">
      <h2 className={styles.sectionTitle}>Support Lumark</h2>
      <p className={styles.sectionLead}>
        If you find Lumark useful, consider sponsoring its development.
        <br />
        Your support helps keep the project alive and growing.
      </p>
      <div className={clsx(styles.actions, styles.actionsCenter)}>
        <Link className={clsx(styles.btn, styles.btnLight)} href="https://github.com/sponsors/AlbertArakelyan">
          <Icon name="heart" size={18} className={styles.heart} />
          Sponsor
        </Link>
      </div>
    </div>
  </section>
);

const Home = () => (
  <Layout
    title="Local-first Markdown note-taking app"
    description="Lumark is a fast, cross-platform, local-first Markdown note-taking app built with Tauri."
  >
    <main className={styles.page}>
      <Hero />
      <Wave from="--lm-ink" to="--lm-surface" path="M0,0 C360,100 1080,0 1440,80 L1440,0 L0,0 Z" />
      <Highlights />
      <Features />
      <Wave from="--lm-surface" to="--lm-surface-muted" path="M0,0 C480,100 960,20 1440,60 L1440,0 L0,0 Z" />
      <Contribute />
      <Wave from="--lm-surface-muted" to="--lm-band" path="M0,0 C240,80 720,100 1440,20 L1440,0 L0,0 Z" />
      <Support />
      <Wave from="--lm-band" to="--lm-ink" path="M0,0 C600,100 900,0 1440,70 L1440,0 L0,0 Z" />
    </main>
  </Layout>
);

export default Home;
