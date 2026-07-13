const THEMES = [
  { emoji: '🎈', name: 'Balloon Arch Celebration' },
  { emoji: '🕯️', name: 'Romantic Candle Setup' },
  { emoji: '👑', name: 'Luxury Birthday Backdrop' },
  { emoji: '💐', name: 'Proposal Decoration' },
  { emoji: '🦄', name: 'Kids Theme Decoration' },
];

export default function Trending() {
  return (
    <section id="trending" style={{ background: '#060606' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="center fade-up">
          <span className="section-tag">Trending Now</span>
          <h2 className="section-title">
            Trending <span className="gradient-text">Decor Themes</span>
          </h2>
        </div>
        <div className="trending-grid fade-up">
          {THEMES.map((t) => (
            <div key={t.name} className="occasion-card">
              <span className="occasion-emoji">{t.emoji}</span>
              <div className="occasion-name">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
