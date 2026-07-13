const OCCASIONS = [
  { emoji: '🎂', name: 'Birthday Decorations' },
  { emoji: '💍', name: 'Anniversary Decorations' },
  { emoji: '🌹', name: 'Romantic Surprises' },
  { emoji: '💌', name: 'Proposals' },
  { emoji: '👶', name: 'Baby Showers' },
  { emoji: '👰', name: 'Bridal Showers' },
  { emoji: '🪔', name: 'Navratri Special' },
  { emoji: '🏠', name: 'House Parties' },
  { emoji: '💼', name: 'Corporate Celebrations' },
];

export default function Occasions() {
  return (
    <section id="occasions">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="center fade-up">
          <span className="section-tag">Every Celebration</span>
          <h2 className="section-title">
            Perfect Decorations for <span className="gradient-text">Every Occasion</span>
          </h2>
          <p className="section-subtitle">
            Whatever you&apos;re celebrating, we have the perfect décor theme ready for you.
          </p>
        </div>
        <div className="occasions-grid fade-up">
          {OCCASIONS.map((o) => (
            <div key={o.name} className="occasion-card">
              <span className="occasion-emoji">{o.emoji}</span>
              <div className="occasion-name">{o.name}</div>
            </div>
          ))}
          <div className="more-badge fade-up">
            <span>50+</span>
            <span>More Occasions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
