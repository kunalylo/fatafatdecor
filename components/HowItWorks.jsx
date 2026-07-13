export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="center fade-up">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">
            Decorating Made <span className="gradient-text">Effortless</span>
          </h2>
          <p className="section-subtitle">
            From idea to a beautifully decorated space in just a few easy steps.
          </p>
        </div>
        <div className="steps-grid">
          <div className="step-card fade-up fade-up-delay-1">
            <span className="step-num">STEP 01</span>
            <span className="step-icon">📸</span>
            <div className="step-title">Preview with Instant Decor AI</div>
            <p className="step-desc">
              Upload your room photo and see beautiful décor ideas visualized instantly with our AI
              engine.
            </p>
          </div>
          <div className="step-card fade-up fade-up-delay-2">
            <span className="step-num">STEP 02</span>
            <span className="step-icon">💡</span>
            <div className="step-title">Choose Your Style</div>
            <p className="step-desc">
              Browse décor themes tailored to your occasion. Pick the one that feels just right for
              your celebration.
            </p>
          </div>
          <div className="step-card fade-up fade-up-delay-3">
            <span className="step-num">STEP 03</span>
            <span className="step-icon">📲</span>
            <div className="step-title">Book in Seconds</div>
            <p className="step-desc">
              Select your favourite design and confirm your booking instantly through the app or via
              WhatsApp.
            </p>
          </div>
        </div>
        {/* Step 4 - full width highlight */}
        <div className="step-card step4-card fade-up">
          <span className="step-icon">🎉</span>
          <div>
            <span className="step-num">STEP 04</span>
            <div className="step-title">Expert Setup — We Come to You</div>
            <p className="step-desc">
              Our professional decorators arrive at your location and recreate the exact design you
              saw in the AI preview. Sit back and enjoy the magic.
            </p>
          </div>
          <a
            href="https://fatafatdecor.ylo.co.in"
            className="btn btn-primary step4-cta"
            target="_blank"
            rel="noopener"
          >
            Book Now →
          </a>
        </div>
      </div>
    </section>
  );
}
