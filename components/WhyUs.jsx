const FEATURES = [
  {
    icon: '⚡',
    title: 'Instant Decor Setup',
    desc: "Quick decoration services delivered to your location. We're in your space in under 2 hours.",
    delay: '',
  },
  {
    icon: '🤖',
    title: 'AI Decor Visualization',
    desc: 'Preview your décor ideas before booking. See exactly how your space will look — no surprises.',
    delay: ' fade-up-delay-1',
  },
  {
    icon: '🎨',
    title: 'Expert Decorators',
    desc: 'Professional teams trained to create beautiful setups that match your AI preview exactly.',
    delay: ' fade-up-delay-2',
  },
  {
    icon: '🎊',
    title: 'Perfect for Any Occasion',
    desc: 'From intimate surprises to large celebrations — we have themes for 50+ different occasions.',
    delay: '',
  },
  {
    icon: '📲',
    title: 'Easy Booking',
    desc: 'Book your decoration in just a few taps through our app or WhatsApp. Effortless from start to finish.',
    delay: ' fade-up-delay-1',
  },
  {
    icon: '⭐',
    title: 'Reliable Service',
    desc: 'Quality setups designed to impress every time. Trusted by hundreds of happy customers.',
    delay: ' fade-up-delay-2',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="center fade-up">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            Why People <span className="gradient-text">Love Fatafat Decor</span>
          </h2>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className={`feature-card fade-up${f.delay}`}>
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
