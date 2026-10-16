import { useId } from 'react';

const STROKE_ICONS = {
  shieldLock: (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <rect x="9" y="11" width="6" height="5" rx="1" />
      <path d="M10 11V9.5a2 2 0 0 1 4 0V11" />
    </>
  ),
  laptop: (
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
  ),
  panels: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M8 3v18M13 3v18" />
    </>
  ),
  zap: (
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  ),
  split: (
    <>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M12 3v18" />
    </>
  ),
  wifiOff: (
    <>
      <path d="M12 20h.01M8.5 16.43a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 4.17-2.65M10.66 5c4.01-.36 8.14.9 11.34 3.76M16.85 11.25a10 10 0 0 1 2.22 1.68M5 13a10 10 0 0 1 5.24-2.76M2 2l20 20" />
    </>
  ),
  download: (
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  feather: (
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8 2 22M17.5 15H9" />
  ),
  book: (
    <path d="M12 7v14M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
  ),
};

const FILL_ICONS = {
  windows: { viewBox: '0 0 24 24', path: 'M3 5.6 10.4 4.6v6.9H3zM11.4 4.45 21 3.1v8.4h-9.6zM3 12.5h7.4v6.9L3 18.4zM11.4 12.5H21v8.4l-9.6-1.35z' },
  apple: {
    viewBox: '0 0 24 24',
    path: 'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701',
  },
  sparkle: { viewBox: '0 0 24 24', path: 'M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z' },
  bolt: { viewBox: '0 0 24 24', path: 'M13 2L4 14h7l-1 8 9-12h-7z' },
  github: {
    viewBox: '0 0 19 19',
    path: 'M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844',
  },
};

// Tux: a filled silhouette with the belly and eyes cut out by a mask, so it stays one colour.
const Tux = ({ size, className }) => {
  const maskId = `tux-${useId()}`;

  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <mask id={maskId}>
        <rect width="24" height="24" fill="#fff" />
        <ellipse cx="12" cy="15.6" rx="3.9" ry="4.9" fill="#000" />
        <ellipse cx="10.5" cy="6.4" rx="1.15" ry="1.4" fill="#000" />
        <ellipse cx="13.5" cy="6.4" rx="1.15" ry="1.4" fill="#000" />
      </mask>
      <g mask={`url(#${maskId})`}>
        <circle cx="12" cy="7" r="4.6" />
        <ellipse cx="12" cy="14.6" rx="6.3" ry="7" />
        <ellipse cx="5.6" cy="15" rx="1.6" ry="4" transform="rotate(18 5.6 15)" />
        <ellipse cx="18.4" cy="15" rx="1.6" ry="4" transform="rotate(-18 18.4 15)" />
      </g>
      <circle cx="10.75" cy="6.7" r="0.55" />
      <circle cx="13.25" cy="6.7" r="0.55" />
      <path d="M10.6 8.6 12 7.9l1.4.7L12 9.9z" />
      <ellipse cx="8.4" cy="21.6" rx="3" ry="1.3" />
      <ellipse cx="15.6" cy="21.6" rx="3" ry="1.3" />
    </svg>
  );
};

const Icon = ({ name, size = 24, className }) => {
  const fillIcon = FILL_ICONS[name];

  if (name === 'linux') {
    return <Tux size={size} className={className} />;
  }

  if (fillIcon) {
    return (
      <svg className={className} width={size} height={size} viewBox={fillIcon.viewBox} fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d={fillIcon.path} />
      </svg>
    );
  }

  if (name === 'circle') {
    return (
      <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <circle fill="none" stroke="currentColor" strokeWidth="2" cx="12" cy="12" r="10" />
        <circle fill="currentColor" cx="12" cy="12" r="4" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {STROKE_ICONS[name]}
    </svg>
  );
};

export default Icon;
