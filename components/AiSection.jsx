export default function AiSection() {
  return (
    <section id="ai-section">
      <div className="ai-layout">
        <div className="ai-left">
          <span className="section-tag">The Future of Décor</span>
          <h2 className="section-title">
            Try Our <span className="gradient-text">Fatafat Decor AI</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            Upload a photo of your space and watch it transform instantly. Our{' '}
            <strong>Instant Decor AI</strong> visualizes how your room can look with stunning décor
            designs — before the actual setup.
          </p>
          <div className="ai-examples">
            <div className="ai-example fade-up">
              <span className="ae-icon">🎂</span>
              <div>
                <div className="ae-title">Birthday Decoration</div>
                <div className="ae-desc">
                  Balloon arch, Happy Birthday LED neon sign, balloon bunches, decorative table —
                  see it all before we arrive.
                </div>
              </div>
            </div>
            <div className="ai-example fade-up fade-up-delay-1">
              <span className="ae-icon">🌹</span>
              <div>
                <div className="ae-title">Romantic Surprise</div>
                <div className="ae-desc">
                  Heart-shaped rose petals, candle pathway, fairy lights, romantic backdrop —
                  previewed instantly.
                </div>
              </div>
            </div>
            <div className="ai-example fade-up fade-up-delay-2">
              <span className="ae-icon">✨</span>
              <div>
                <div className="ae-title">Anniversary &amp; More</div>
                <div className="ae-desc">
                  Gold balloon backdrops, neon signs, table décor, photo memory string lights — all
                  previewed via AI.
                </div>
              </div>
            </div>
          </div>
          <div className="ai-cta-group fade-up fade-up-delay-3">
            <a
              href="https://fatafatdecor.ylo.co.in"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              ✨ Try Instant Decor AI
            </a>
            <a
              href="https://wa.me/916204711205"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener"
            >
              Connect With Us
            </a>
          </div>
          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginTop: 14,
              fontStyle: 'italic',
            }}
          >
            First of its kind — combining artificial intelligence with real décor experts.
          </p>
        </div>
        <div className="ai-right fade-up" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="ai-phone-mock">
            <div className="phone-notch"></div>
            <div className="phone-screen-content">
              <div className="phone-header">✦ INSTANT DECOR AI</div>
              <div className="phone-ai-area">
                <div className="phone-upload-btn">
                  <span>📷</span>
                  Upload Your Room Photo
                </div>
                <div className="phone-theme-chips">
                  <div className="chip active">🎂 Birthday</div>
                  <div className="chip">🌹 Romantic</div>
                  <div className="chip">✨ Anniversary</div>
                  <div className="chip">🎊 Party</div>
                </div>
                <div className="phone-ai-result">
                  <strong style={{ color: 'var(--pink-light)' }}>✦ AI Preview Ready!</strong>
                  <br />
                  • Balloon arch behind sofa
                  <br />
                  • LED neon &quot;Happy Birthday&quot;
                  <br />
                  • Corner balloon bunches
                  <br />• Decorative table setup
                </div>
                <div className="phone-book-btn">Book This Decoration →</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
