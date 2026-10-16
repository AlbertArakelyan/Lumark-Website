import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Icon from '@site/src/components/landing/Icon';
import Tooltip from '@site/src/components/Tooltip';
import Wave from '@site/src/components/landing/Wave';
import { DOWNLOADS, LATEST_VERSION, RELEASES_URL } from '@site/src/constants/release';
import styles from './index.module.css';
import downloadStyles from './download.module.css';

const DownloadCard = ({ download }) => (
  <div className={downloadStyles.card}>
    <div className={downloadStyles.cardIcon}>
      <Icon name={download.icon} size={40} />
    </div>
    <h2 className={downloadStyles.cardTitle}>{download.os}</h2>
    <div className={downloadStyles.options}>
      {download.options.map((option) => (
        <Tooltip key={option.label} content={option.tooltip} block>
          {option.url ? (
            <Link className={clsx(styles.btn, styles.btnPrimary, downloadStyles.cardButton)} href={option.url}>
              <Icon name="download" size={18} />
              {option.label}
            </Link>
          ) : (
            <button type="button" className={clsx(styles.btn, styles.btnPrimary, downloadStyles.cardButton)} disabled>
              {option.label}
            </button>
          )}
        </Tooltip>
      ))}
    </div>
  </div>
);

const Download = () => (
  <Layout title="Download" description={`Download Lumark ${LATEST_VERSION} for Windows, macOS and Linux.`}>
    <main className={styles.page}>
      <section className={clsx(styles.hero, downloadStyles.hero)}>
        <div className="container">
          <h1 className={styles.heroTitle}>Download Lumark</h1>
          <p className={clsx(styles.heroLead, downloadStyles.lead)}>
            Version {LATEST_VERSION}. Free and open source, for Windows, macOS and Linux.
          </p>
        </div>
      </section>
      <Wave from="--lm-ink" to="--lm-surface" path="M0,0 C360,100 1080,0 1440,80 L1440,0 L0,0 Z" />
      <section className={downloadStyles.downloads}>
        <div className="container">
          <div className={downloadStyles.grid}>
            {DOWNLOADS.map((download) => <DownloadCard key={download.fileName} download={download} />)}
          </div>
          <p className={downloadStyles.help}>
            Need help? Follow the <Link to="/docs/getting-started/installation">installation guide</Link>. Looking for
            an older version? See <Link href={RELEASES_URL}>all releases</Link>.
          </p>
        </div>
      </section>
      <Wave from="--lm-surface" to="--lm-ink" path="M0,0 C600,100 900,0 1440,70 L1440,0 L0,0 Z" />
    </main>
  </Layout>
);

export default Download;
