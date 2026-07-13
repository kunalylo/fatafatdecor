import WhatsAppIcon from './WhatsAppIcon';

export default function Connect() {
  return (
    <section id="connect">
      <div className="connect-inner fade-up">
        <span className="section-tag">Let&apos;s Celebrate</span>
        <h2 className="section-title">
          Need Help Planning <span className="gradient-text">Your Decor?</span>
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Our team is happy to assist you. Click below to speak with a representative and get the
          perfect décor setup for your celebration.
        </p>
        <div className="connect-actions">
          <a
            href="https://wa.me/916204711205"
            className="btn btn-whatsapp btn-lg"
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon size={20} fill="currentColor" />
            Connect on WhatsApp
          </a>
          <a
            href="https://fatafatdecor.ylo.co.in"
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener"
          >
            ✨ Try Decor AI First
          </a>
        </div>
        <div className="trust-row">
          <div className="trust-item"><div className="trust-dot"></div> Expert Decorators</div>
          <div className="trust-item"><div className="trust-dot"></div> Decor in Under 2 Hours</div>
          <div className="trust-item"><div className="trust-dot"></div> AI Preview Included</div>
          <div className="trust-item"><div className="trust-dot"></div> 50+ Occasion Types</div>
        </div>
      </div>
    </section>
  );
}
