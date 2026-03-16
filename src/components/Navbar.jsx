import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      transition: 'all 0.4s ease',
      background: scrolled
        ? 'rgba(10, 10, 10, 0.85)'
        : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#hero" onClick={e => handleNavClick(e, '#hero')} style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '1.25rem',
          fontWeight: '600',
          background: 'linear-gradient(135deg, #ffffff, #818cf8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.02em',
          cursor: 'pointer',
        }}>
          Rajesh<span style={{ color: '#6366f1', WebkitTextFillColor: '#6366f1' }}>.dev</span>
        </a>

        {/* Desktop Links */}
        <ul style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          listStyle: 'none',
        }} className="nav-desktop">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                style={{
                  color: '#a1a1aa',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  transition: 'all 0.25s ease',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  e.target.style.color = '#fff';
                  e.target.style.background = 'rgba(99,102,241,0.12)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = '#a1a1aa';
                  e.target.style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={e => handleNavClick(e, '#contact')}
              className="btn btn-primary"
              style={{ padding: '9px 22px', fontSize: '0.875rem' }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: '#fff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 1 ? 'opacity: 0; scaleX(0)'
                : 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(10,10,10,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              style={{
                color: '#a1a1aa',
                fontSize: '1rem',
                fontWeight: '500',
                padding: '12px 16px',
                borderRadius: '10px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.target.style.color = '#fff';
                e.target.style.background = 'rgba(99,102,241,0.12)';
              }}
              onMouseLeave={e => {
                e.target.style.color = '#a1a1aa';
                e.target.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
