import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lumark — Local-First Markdown Note-Taking App</title>
        <meta name="description" content="A fast, cross-platform, local-first Markdown note-taking app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          {/* <!-- Hero --> */}
    <section id="hero" className="bg-primary text-white">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <div className="hero-logo-wrap d-inline-flex align-items-center justify-content-center mb-3">
              <img src="/logo.png" alt="Lumark logo" width="80" height="80" />
            </div>
            <h1 className="display-3 fw-bold">Lumark</h1>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start mb-3">
              <img src="https://img.shields.io/github/v/release/AlbertArakelyan/lumark?color=blue&style=flat-square" alt="GitHub release (latest by date)" />
              <img src="https://img.shields.io/badge/language-Rust | TypeScript-orange?style=flat-square" alt="Language" />
              <img src="https://img.shields.io/badge/platforms-Windows,%20Mac%20OS,%20Linux-green?style=flat-square" alt="Platforms" />
              <img src="https://img.shields.io/github/license/AlbertArakelyan/lumark?style=flat-square" alt="License" />
            </div>
            <p className="lead mb-4">A fast, cross-platform, local-first Markdown note-taking app.</p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
              <a href="https://github.com/AlbertArakelyan/Lumark" className="btn btn-light btn-lg d-inline-flex align-items-center gap-2" target="_blank" rel="noopener">
                <svg width="20" height="20" aria-hidden="true"><use href="/icons.svg#github-icon"/></svg>
                GitHub
              </a>
              <a href="https://github.com/AlbertArakelyan/Lumark/releases/latest" className="btn btn-outline-light btn-lg d-inline-flex align-items-center gap-2" target="_blank" rel="noopener">
                <i className="bi bi-download"></i>
                Download
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img src="/lumark-screenshot.gif" alt="Lumark app demo" className="hero-screenshot" />
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Wave: primary → white --> */}
    <div className="wave-divider" style={{background: '#fff'}}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="#158cba" d="M0,0 C360,100 1080,0 1440,80 L1440,0 L0,0 Z"/>
      </svg>
    </div>

    {/* <!-- Highlights --> */}
    <section id="highlights" className="bg-white py-5">
      <div className="container">
        <div className="highlight-block">
          <div className="row">
            <div className="col-lg-8">
              <h3><svg className="highlight-icon" width="28" height="28" aria-hidden="true"><use href="/icons.svg#sparkle-icon"/></svg> Amazing</h3>
              <p>Your notes are stored locally on your device with no data collection whatsoever. Work across Windows, macOS, and Linux with a powerful split editor that lets you write and preview side by side.</p>
            </div>
          </div>
        </div>
        <div className="highlight-block align-right">
          <div className="row justify-content-end">
            <div className="col-lg-8">
              <h3>Elegant <svg className="highlight-icon" width="28" height="28" aria-hidden="true"><use href="/icons.svg#feather-icon"/></svg></h3>
              <p>A minimalist two-column layout keeps everything you need within reach — your file tree on one side, your editor on the other — so you can write without distractions.</p>
            </div>
          </div>
        </div>
        <div className="highlight-block">
          <div className="row">
            <div className="col-lg-8">
              <h3><svg className="highlight-icon" width="28" height="28" aria-hidden="true"><use href="/icons.svg#bolt-icon"/></svg> Efficient</h3>
              <p>Built on Tauri instead of Electron, Lumark delivers noticeably faster startup times, lower memory usage, and a smaller install footprint.</p>
            </div>
          </div>
        </div>
        <div className="highlight-block align-right">
          <div className="row justify-content-end">
            <div className="col-lg-8">
              <h3>Simple <svg className="highlight-icon" width="28" height="28" aria-hidden="true"><use href="/icons.svg#circle-icon"/></svg></h3>
              <p>One tool, one purpose — taking notes in Markdown. No bloated feature lists, no unnecessary complexity. Just open it and start writing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Features --> */}
    <section id="features" className="bg-white py-5">
      <div className="container">
        <h2 className="text-center display-6 fw-bold mb-5">Why Lumark?</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="text-center p-4">
              <i className="bi bi-shield-lock feature-icon"></i>
              <h3 className="h5 fw-bold mt-3">Local-First</h3>
              <p className="text-muted">Notes live on your machine. No cloud, no accounts, complete privacy.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="text-center p-4">
              <i className="bi bi-laptop feature-icon"></i>
              <h3 className="h5 fw-bold mt-3">Cross-Platform</h3>
              <p className="text-muted">Available on Windows, macOS, and Linux.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="text-center p-4">
              <i className="bi bi-layout-sidebar feature-icon"></i>
              <h3 className="h5 fw-bold mt-3">Minimalist Design</h3>
              <p className="text-muted">Clean two-column interface — file tree + editor.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="text-center p-4">
              <i className="bi bi-lightning feature-icon"></i>
              <h3 className="h5 fw-bold mt-3">Fast &amp; Lightweight</h3>
              <p className="text-muted">Built with Tauri — small binary, low memory.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="text-center p-4">
              <i className="bi bi-layout-split feature-icon"></i>
              <h3 className="h5 fw-bold mt-3">Split Editor</h3>
              <p className="text-muted">Markdown on one side, live preview on the other.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="text-center p-4">
              <i className="bi bi-wifi-off feature-icon"></i>
              <h3 className="h5 fw-bold mt-3">Works Offline</h3>
              <p className="text-muted">No internet needed. Open and write, anytime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Wave: white → light --> */}
    <div className="wave-divider" style={{background: '#f6f6f6'}}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="#fff" d="M0,0 C480,100 960,20 1440,60 L1440,0 L0,0 Z"/>
      </svg>
    </div>

    {/* <!-- Contribution --> */}
    <section id="contribute" style={{background: '#f6f6f6'}} className="py-5">
      <div className="container text-center">
        <h2 className="display-6 fw-bold mb-3">Contribute to Lumark</h2>
        <p className="lead text-muted mb-4">Lumark is open source and MIT licensed. We welcome contributions of all kinds.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="https://github.com/AlbertArakelyan/Lumark/issues/new" className="btn btn-primary btn-lg" target="_blank" rel="noopener">Open an Issue</a>
          <a href="https://github.com/AlbertArakelyan/Lumark/fork" className="btn btn-outline-primary btn-lg" target="_blank" rel="noopener">Fork &amp; Contribute</a>
        </div>
      </div>
    </section>

    {/* <!-- Wave: light → primary --> */}
    <div className="wave-divider" style={{background: '#158cba'}}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="#f6f6f6" d="M0,0 C240,80 720,100 1440,20 L1440,0 L0,0 Z"/>
      </svg>
    </div>

    {/* <!-- Donation --> */}
    <section id="donate" className="bg-primary text-white py-5">
      <div className="container text-center">
        <h2 className="display-6 fw-bold mb-3">Support Lumark</h2>
        <p className="lead mb-4">If you find Lumark useful, consider sponsoring its development.<br />Your support helps keep the project alive and growing.</p>
        <a href="https://github.com/sponsors/AlbertArakelyan" className="btn btn-light btn-lg sponsor-btn d-inline-flex align-items-center gap-2" target="_blank" rel="noopener">
          <i className="bi bi-heart-fill text-danger"></i>
          Sponsor
        </a>
      </div>
    </section>

    {/* <!-- Wave: primary → dark --> */}
    <div className="wave-divider" style={{background: '#555'}}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="#158cba" d="M0,0 C600,100 900,0 1440,70 L1440,0 L0,0 Z"/>
      </svg>
    </div>

    {/* <!-- Footer --> */}
    <footer style={{background: '#555'}} className="text-white py-4">
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div className="d-flex align-items-center gap-2">
          <img src="/logo.png" alt="Lumark" width="24" height="24" />
          <span>&copy; 2026 Lumark. MIT License.</span>
        </div>
        <div className="d-flex gap-3 social-links">
          <a href="https://github.com/AlbertArakelyan/Lumark" target="_blank" rel="noopener" aria-label="GitHub">
            <svg width="22" height="22"><use href="/icons.svg#github-icon"/></svg>
          </a>
          <a href="https://x.com/AlbertArak25" target="_blank" rel="noopener" aria-label="X">
            <svg width="22" height="22"><use href="/icons.svg#x-icon"/></svg>
          </a>
        </div>
      </div>
    </footer>
        </main>
      </div>
    </>
  );
}
