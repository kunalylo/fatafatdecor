const TRANSFORMS = [
  {
    before: {
      src: '/image1.jpeg',
      alt: 'Before: plain living room ready for birthday decor',
      className: 'transform-shot transform-shot-first-before',
    },
    after: {
      src: '/before1.png',
      alt: 'After: elegant birthday balloon setup in the living room',
      className: 'transform-shot transform-shot-first-after',
    },
    title: 'Elegant Birthday Balloon Setup',
    tag: '✦ Birthday · Living Room',
    delay: '',
  },
  {
    before: {
      src: '/image5.jpeg',
      alt: 'Before: plain bedroom before romantic decoration',
      className: 'transform-shot',
    },
    after: {
      src: '/befor5.png',
      alt: 'After: romantic candle and rose bedroom decoration',
      className: 'transform-shot',
    },
    title: 'Romantic Candle & Rose Decoration',
    tag: '✦ Romantic Surprise · Bedroom',
    delay: ' fade-up-delay-1',
  },
  {
    before: {
      src: '/image4.jpeg',
      alt: 'Before: plain dining area before anniversary setup',
      className: 'transform-shot',
    },
    after: {
      src: '/befor4.png',
      alt: 'After: luxury anniversary dining setup',
      className: 'transform-shot',
    },
    title: 'Luxury Anniversary Setup',
    tag: '✦ Anniversary · Dining Area',
    delay: ' fade-up-delay-2',
  },
];

export default function Transformations() {
  return (
    <section id="transformations">
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="center fade-up">
          <span className="section-tag">Real Results</span>
          <h2 className="section-title">
            Real Decor <span className="gradient-text">Transformations</span>
          </h2>
          <p className="section-subtitle">
            See the magic — before and after our expert decorators work their art.
          </p>
        </div>
        <div className="transforms-grid">
          {TRANSFORMS.map((t) => (
            <div key={t.title} className={`transform-card fade-up${t.delay}`}>
              <div className="transform-visual">
                <div className="tv-before">
                  <img
                    className={t.before.className}
                    src={t.before.src}
                    alt={t.before.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="tv-after">
                  <img
                    className={t.after.className}
                    src={t.after.src}
                    alt={t.after.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="tv-divider">
                  <div className="tv-arrow">→</div>
                </div>
              </div>
              <div className="transform-info">
                <div className="transform-title">{t.title}</div>
                <div className="transform-tag">{t.tag}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 16 }} className="fade-up">
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            📸 Real photo transformations coming soon — powered by Fatafat Decor AI
          </div>
        </div>
      </div>
    </section>
  );
}
