'use client';

import { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const onDocClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) setMenuOpen(false);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onDocClick);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onDocClick);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar" ref={navRef} className={scrolled ? 'scrolled' : undefined}>
      <a className="nav-logo" href="#hero" aria-label="Fatafat Decor home">
        <span className="brand-mark nav-brand-mark" aria-hidden="true">
          <img src="/logo-mark.png" alt="" loading="eager" fetchPriority="high" decoding="async" />
        </span>
        <span className="nav-logo-copy">
          <span className="nav-logo-text">FATAFAT DECOR</span>
          <span className="nav-logo-kicker">AI previews and fast setup</span>
        </span>
      </a>
      <ul className={`nav-links${menuOpen ? ' mobile-open' : ''}`} id="primary-navigation">
        <li><a href="#how-it-works" onClick={closeMenu}>How It Works</a></li>
        <li><a href="#ai-section" onClick={closeMenu}>Decor AI</a></li>
        <li><a href="#occasions" onClick={closeMenu}>Occasions</a></li>
        <li>
          <a
            href="https://fatafatdecor.ylo.co.in"
            className="nav-cta"
            target="_blank"
            rel="noopener"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </li>
      </ul>
      <button
        className="hamburger"
        id="hamburger"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
