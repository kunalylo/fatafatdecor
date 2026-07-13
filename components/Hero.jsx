import BeforeAfterDemo from './BeforeAfterDemo';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid-overlay"></div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <div className="hero-badge-dot"></div>
            India&apos;s First AI-Powered Decor Service
          </div>
          <h1 className="hero-title">
            <span>See Your Space</span>
            <span className="gradient-text">Decorated</span>
            <span>Before You Book</span>
          </h1>
          <p className="hero-sub">
            Choose your occasion, upload your room photo, and see your décor preview instantly.
            Once you like the look, our<strong>Fatafat Decor</strong>, team arrives to recreate it
            beautifully at your location. From birthdays to surprise party -{' '}
            <strong>From your phone to your room.</strong>
          </p>
          <div className="hero-info-strip">
            <div className="hero-info-item">
              <span className="hero-info-label">Service Area</span>
              <span className="hero-info-value">Ranchi and nearby locations</span>
            </div>
            <div className="hero-info-item">
              <span className="hero-info-label">Best For</span>
              <span className="hero-info-value">Home, hotel, and surprise room setups</span>
            </div>
            <div className="hero-info-item">
              <span className="hero-info-label">Quick Booking</span>
              <span className="hero-info-value">Fast support on WhatsApp and Decor AI</span>
            </div>
          </div>
          <div className="hero-actions">
            <a
              href="https://fatafatdecor.ylo.co.in"
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener"
            >
              ✨ Try Fatafat Decor AI
            </a>
            <a
              href="https://wa.me/916204711205"
              className="btn btn-secondary btn-lg"
              target="_blank"
              rel="noopener"
            >
              Connect With Us
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-number">2 hrs</div>
              <div className="stat-label">Decor in Under 2 Hours</div>
            </div>
            <div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Occasion Types</div>
            </div>
            <div>
              <div className="stat-number">AI</div>
              <div className="stat-label">Preview Before You Book</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div style={{ position: 'relative', padding: 20 }}>
            <div className="hero-visual-card">
              <div className="hero-visual-header">
                <div className="dot dot-r"></div>
                <div className="dot dot-y"></div>
                <div className="dot dot-g"></div>
                <div className="ai-label">✦ INSTANT DECOR AI</div>
              </div>
              <div className="hero-visual-body">
                <BeforeAfterDemo />
                <div className="ai-processing">
                  <span>AI Generating Preview</span>
                  <div className="ai-bar"><div className="ai-bar-fill"></div></div>
                  <span className="ai-pct">78%</span>
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div
              className="hero-float-badges"
              style={{ inset: 0, position: 'absolute', pointerEvents: 'none' }}
            >
              <div className="float-badge fb-1">
                <span className="fb-emoji">🎂</span>
                Birthday Setup · 45 min
              </div>
              <div className="float-badge fb-2">
                <span className="fb-emoji">⭐</span>
                4.9 Rating · 500+ Setups
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
