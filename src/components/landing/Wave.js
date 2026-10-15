import styles from './Wave.module.css';

// `from` is the colour of the section above, `to` the section below. Both are
// CSS variables so the wave follows the light/dark theme.
const Wave = ({ from, to, path }) => (
  <div className={styles.wave} style={{ background: `var(${to})` }} aria-hidden="true">
    <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
      <path style={{ fill: `var(${from})` }} d={path} />
    </svg>
  </div>
);

export default Wave;
