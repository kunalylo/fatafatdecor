import YearStamp from './YearStamp';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-header">
            <span className="brand-mark footer-brand-mark">
              <img src="/logo-mark.png" alt="Fatafat Decor logo" loading="lazy" decoding="async" />
            </span>
            <div className="footer-brand-copy">
              <div className="footer-brand-note">Celebrate Faster</div>
              <div className="footer-unit">
                A unit of <strong>Your Local Online</strong>
              </div>
              <div className="footer-logo-text">FATAFAT DECOR</div>
            </div>
          </div>
          <p className="footer-tagline">
            <strong>Fatafat Decor</strong>, YLO Workspace, 101, 1st floor, Surendra Singh compound
            Anantham Apartment, Kokar Chowk, Kokar, Ranchi, Jharkhand 834001.
          </p>
          <div className="footer-info-list">
            <div className="footer-info-item">
              Same-day room decoration service for birthdays, anniversaries, proposals, and surprise
              celebrations.
            </div>
            <div className="footer-info-item">
              Serving Ranchi with quick booking support and AI-based decor previews before setup.
            </div>
            <div className="footer-info-item footer-contact">
              <span className="footer-contact-label">Call or WhatsApp us for bookings:</span>
              <span className="footer-contact-row">
                <a className="footer-tel" href="tel:+916204711205">+91 62047 11205</a>
                <a
                  className="footer-wa"
                  href="https://wa.me/916204711205"
                  target="_blank"
                  rel="noopener"
                  aria-label="Chat on WhatsApp with +91 62047 11205"
                >
                  💬 WhatsApp
                </a>
              </span>
              <span className="footer-contact-row">
                <a className="footer-tel" href="tel:+918002266606">+91 80022 66606</a>
                <a
                  className="footer-wa"
                  href="https://wa.me/918002266606"
                  target="_blank"
                  rel="noopener"
                  aria-label="Chat on WhatsApp with +91 80022 66606"
                >
                  💬 WhatsApp
                </a>
              </span>
            </div>
          </div>
          <br />
          <p className="footer-tagline">Instant décor. Beautiful spaces. Effortless celebrations.</p>
          <div className="footer-social">
            <a className="social-btn" href="#" aria-label="Instagram">📸</a>
            <a className="social-btn" href="#" aria-label="Facebook">👍</a>
            <a
              className="social-btn"
              href="https://wa.me/916204711205"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
            >
              💬
            </a>
            <a className="social-btn" href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            <li><a href="#ai-section">Instant Decor AI</a></li>
            <li><a href="#occasions">Birthday Decor</a></li>
            <li><a href="#occasions">Romantic Decor</a></li>
            <li><a href="#occasions">Corporate Events</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Support</div>
          <ul className="footer-links">
            <li>
              <a href="https://wa.me/916204711205" target="_blank" rel="noopener">Contact Us</a>
            </li>
            <li>
              <a href="https://wa.me/916204711205" target="_blank" rel="noopener">
                WhatsApp Support
              </a>
            </li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; <YearStamp /> Fatafat Decor. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
}
