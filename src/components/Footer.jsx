const Footer = () => {
  const year = new Date().getFullYear();

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/DevRajeshU',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/rajesh-uduthala',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'Email',
      href: 'mailto:uduthalarajesh@gmail.com',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <polyline points="2,4 12,13 22,4"/>
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '60px 0 30px',
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px', marginBottom: '50px' }}>
          {/* Brand */}
          <div style={{ maxWidth: '280px' }}>
            <a href="#hero" onClick={e => { e.preventDefault(); handleScroll('#hero'); }} style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: '1.4rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #ffffff, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              marginBottom: '16px',
              cursor: 'pointer',
            }}>
              Rajesh.dev
            </a>
            <p style={{ color: '#52525b', fontSize: '0.88rem', lineHeight: '1.7' }}>
              Software Engineer building scalable, beautiful web experiences across real estate, logistics & enterprise domains.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ color: '#a1a1aa', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={e => { e.preventDefault(); handleScroll(link.href); }}
                    style={{ color: '#71717a', fontSize: '0.9rem', transition: 'color 0.2s ease', cursor: 'pointer' }}
                    onMouseEnter={e => e.target.style.color = '#818cf8'}
                    onMouseLeave={e => e.target.style.color = '#71717a'}
                  >{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ color: '#a1a1aa', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    color: '#71717a', fontSize: '0.9rem',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#818cf8'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#71717a'; }}
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: '#3f3f46', fontSize: '0.83rem' }}>
            © {year} Uduthala Rajesh. Built with{' '}
            <span style={{ color: '#6366f1' }}>♥</span> using React.
          </p>
          <p style={{ color: '#3f3f46', fontSize: '0.83rem', fontFamily: "'Fira Code', monospace" }}>
            {'<'}Rajesh.dev{' />'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
