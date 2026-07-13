export default function DownloadApp() {
  return (
    <section id="download">
      <div className="download-inner">
        <div className="download-left">
          <span className="section-tag">Get the App</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)' }}>
            Your Celebration <span className="gradient-text">Starts Here</span>
          </h2>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginTop: 10,
              maxWidth: 380,
            }}
          >
            Download the Fatafat Decor app to explore themes, preview décor with AI, and book
            professional decorators instantly.
          </p>
        </div>
        <div className="download-right">
          <a href="https://apps.apple.com/us/app/fatafatdecor/id6763261185" className="store-btn">
            <span className="store-icon">🍎</span>
            <div>
              <div className="store-label">DOWNLOAD ON THE</div>
              <div className="store-name">App Store</div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=in.co.ylo.fatafatdecor.twa"
            className="store-btn"
          >
            <span className="store-icon">▶️</span>
            <div>
              <div className="store-label">GET IT ON</div>
              <div className="store-name">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
