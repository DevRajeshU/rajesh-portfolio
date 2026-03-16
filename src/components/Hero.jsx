import { useState, useEffect } from 'react';

const TYPING_TEXTS = [
  { text: 'React Developer', emoji: '⚛️' },
  { text: 'Angular Developer', emoji: '🅰️' },
  { text: 'Frontend Engineer', emoji: '🚀' },
  { text: 'React Native Dev', emoji: '📱' },
];

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 120); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex].text;
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, 85);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, 42);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex(i => (i + 1) % TYPING_TEXTS.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  const scroll = href => {
    const el = document.querySelector(href);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
  };

  const ani = (delay = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: `
        radial-gradient(ellipse 90% 70% at 50% -5%, rgba(99,102,241,0.22) 0%, transparent 55%),
        radial-gradient(ellipse 50% 50% at 5% 80%, rgba(139,92,246,0.1) 0%, transparent 50%),
        radial-gradient(ellipse 40% 40% at 95% 70%, rgba(99,102,241,0.07) 0%, transparent 50%),
        #0a0a0a
      `,
    }}>
      {/* Dot-grid overlay */}
      <div style={{
        position:'absolute',inset:0,
        backgroundImage:'radial-gradient(rgba(99,102,241,0.15) 1px, transparent 1px)',
        backgroundSize:'34px 34px',
        maskImage:'radial-gradient(ellipse 75% 75% at center, black 20%, transparent 90%)',
        pointerEvents:'none',
      }}/>

      {/* Floating gradient orbs */}
      {[['-120px','10%','600px','600px','8s'],['-60px','80%','350px','350px','11s','reverse']].map(([l,t,w,h,dur,dir='normal'],i)=>(
        <div key={i} style={{
          position:'absolute',left:l,top:t,width:w,height:h,borderRadius:'50%',
          background:'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          animation:`float ${dur} ease-in-out infinite ${dir}`,pointerEvents:'none',
        }}/>
      ))}

      <div className="container" style={{ position:'relative',zIndex:1,padding:'120px 28px 80px',width:'100%' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:'60px', alignItems:'center' }} className="hero-grid">

          {/* Left column */}
          <div>
            {/* Status badge */}
            <div style={{ ...ani(0.05), display:'inline-flex', alignItems:'center', gap:'10px', padding:'7px 18px', borderRadius:'100px', background:'rgba(99,102,241,0.08)', border:'1px solid rgba(99,102,241,0.3)', marginBottom:'32px' }}>
              <span className="glow-dot" />
              <span style={{ color:'#a1a1aa', fontSize:'0.82rem', fontWeight:'500' }}>Open to opportunities · Hyderabad, India</span>
            </div>

            {/* Greeting + name */}
            <div style={{ ...ani(0.1), marginBottom:'18px' }}>
              <span style={{ color:'#71717a', fontFamily:"'Fira Code',monospace", fontSize:'1.05rem', fontWeight:'500' }}>
                Hello, world! 👋 I'm
              </span>
              <h1 style={{
                fontFamily:"'Outfit',sans-serif",
                fontSize:'clamp(3rem, 7.5vw, 5.8rem)',
                fontWeight:'900', lineHeight:'1.04', marginTop:'8px',
                background:'linear-gradient(135deg, #ffffff 0%, #e0e7ff 40%, #818cf8 100%)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
              }}>
                Uduthala<br/>Rajesh
              </h1>
            </div>

            {/* Typing line */}
            <div style={{ ...ani(0.2), display:'flex', alignItems:'center', gap:'6px', marginBottom:'22px', minHeight:'3rem' }}>
              <span style={{ color:'#6366f1', fontFamily:"'Fira Code',monospace", fontSize:'1.2rem', fontWeight:'600' }}>&gt;</span>
              <span style={{ color:'#c7d2fe', fontFamily:"'Fira Code',monospace", fontSize:'clamp(1.1rem,2.5vw,1.5rem)', fontWeight:'500' }}>
                {displayed}
              </span>
              <span style={{ width:'3px', height:'1.4em', background:'#6366f1', display:'inline-block', borderRadius:'2px', animation:'blink 1s step-end infinite' }}/>
            </div>

            {/* Subtitle */}
            <p style={{ ...ani(0.3), color:'#a1a1aa', fontSize:'clamp(0.95rem,2vw,1.1rem)', maxWidth:'540px', lineHeight:'1.9', marginBottom:'40px' }}>
              3 years crafting pixel-perfect, high-performance web & mobile apps across{' '}
              <span style={{ color:'#c7d2fe', fontWeight:'600' }}>Real Estate</span>,{' '}
              <span style={{ color:'#c7d2fe', fontWeight:'600' }}>Logistics</span> &{' '}
              <span style={{ color:'#c7d2fe', fontWeight:'600' }}>Enterprise</span>.
              I turn complex requirements into clean, scalable products.
            </p>

            {/* CTA buttons */}
            <div style={{ ...ani(0.4), display:'flex', gap:'14px', flexWrap:'wrap', marginBottom:'60px' }}>
              <button className="btn btn-primary" onClick={() => scroll('#projects')}>
                🚀 View Projects
              </button>
              <button className="btn btn-outline" onClick={() => scroll('#contact')}>
                ✉️ Contact Me
              </button>
              <a
                href="/Rajesh_Resume_Developer.png"
                download
                style={{
                  display:'inline-flex', alignItems:'center', gap:'8px',
                  padding:'14px 24px', borderRadius:'12px', fontSize:'0.88rem', fontWeight:'600',
                  color:'#71717a', border:'1.5px solid rgba(255,255,255,0.08)',
                  transition:'all 0.3s ease',
                }}
                onMouseEnter={e=>{e.currentTarget.style.color='#a1a1aa';e.currentTarget.style.borderColor='rgba(255,255,255,0.2)';}}
                onMouseLeave={e=>{e.currentTarget.style.color='#71717a';e.currentTarget.style.borderColor='rgba(255,255,255,0.08)';}}
              >
                📄 Resume
              </a>
            </div>

            {/* Stats */}
            <div style={{ ...ani(0.55), display:'flex', gap:'0', flexWrap:'wrap' }}>
              {[
                { num:'3+', label:'Years', sub:'of Experience' },
                { num:'15+', label:'Projects', sub:'Delivered' },
                { num:'3', label:'Domains', sub:'Real Estate · Logistics · Enterprise' },
              ].map((s, i) => (
                <div key={s.label} style={{ paddingRight:'32px', marginRight:'32px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)':'none' }}>
                  <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:'900', background:'linear-gradient(135deg,#fff,#818cf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', lineHeight:1 }}>
                    {s.num}
                  </div>
                  <div style={{ color:'#fff', fontWeight:'700', fontSize:'0.92rem', marginTop:'2px' }}>{s.label}</div>
                  <div style={{ color:'#52525b', fontSize:'0.75rem', marginTop:'2px' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — profile image */}
          <div style={{ ...ani(0.15) }} className="hero-img-col">
            <div style={{ position:'relative', width:'320px' }}>
              {/* Spinning ring */}
              <div style={{
                position:'absolute', inset:'-20px', borderRadius:'50%',
                border:'2px solid transparent',
                backgroundImage:'linear-gradient(#0a0a0a,#0a0a0a), linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4,#6366f1)',
                backgroundOrigin:'border-box',
                backgroundClip:'padding-box, border-box',
                animation:'rotate360 10s linear infinite',
              }}/>
              {/* Glow blob */}
              <div style={{
                position:'absolute', inset:'-30px', borderRadius:'50%',
                background:'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)',
                animation:'pulse-ring 3s ease-in-out infinite',
              }}/>
              {/* Image */}
              <div style={{
                borderRadius:'50%', overflow:'hidden',
                width:'320px', height:'320px',
                border:'3px solid rgba(99,102,241,0.4)',
                position:'relative', zIndex:1,
                boxShadow:'0 0 0 6px rgba(99,102,241,0.1), 0 20px 60px rgba(0,0,0,0.6)',
              }}>
                <img
                  src="/rajesh.png"
                  alt="Uduthala Rajesh"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', display:'block' }}
                />
              </div>
              {/* Floating chips */}
              <div style={{
                position:'absolute', bottom:'-12px', left:'-20px',
                background:'#1a1a1a', border:'1px solid rgba(99,102,241,0.3)',
                borderRadius:'12px', padding:'10px 16px',
                display:'flex', alignItems:'center', gap:'8px',
                boxShadow:'0 8px 30px rgba(0,0,0,0.5)', zIndex:2,
              }}>
                <span style={{ fontSize:'1.3rem' }}>⚛️</span>
                <div>
                  <div style={{ color:'#fff', fontSize:'0.8rem', fontWeight:'700' }}>React.js</div>
                  <div style={{ color:'#71717a', fontSize:'0.7rem' }}>Primary Stack</div>
                </div>
              </div>
              <div style={{
                position:'absolute', top:'-12px', right:'-20px',
                background:'#1a1a1a', border:'1px solid rgba(16,185,129,0.3)',
                borderRadius:'12px', padding:'10px 16px',
                display:'flex', alignItems:'center', gap:'8px',
                boxShadow:'0 8px 30px rgba(0,0,0,0.5)', zIndex:2,
              }}>
                <span style={{ fontSize:'1.3rem' }}>📱</span>
                <div>
                  <div style={{ color:'#fff', fontSize:'0.8rem', fontWeight:'700' }}>React Native</div>
                  <div style={{ color:'#71717a', fontSize:'0.7rem' }}>Mobile Dev</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        style={{ position:'absolute',bottom:'32px',left:'50%',transform:'translateX(-50%)', display:'flex',flexDirection:'column',alignItems:'center',gap:'8px', opacity: mounted ? 1:0, transition:'opacity 1s ease 1s', cursor:'pointer' }}
        onClick={() => scroll('#about')}
      >
        <span style={{ color:'#3f3f46',fontSize:'0.72rem',letterSpacing:'0.12em',textTransform:'uppercase' }}>Scroll Down</span>
        <div style={{ width:'24px',height:'40px',border:'2px solid #2a2a2a',borderRadius:'12px',display:'flex',justifyContent:'center',paddingTop:'6px' }}>
          <div style={{ width:'4px',height:'8px',background:'#6366f1',borderRadius:'2px',animation:'scrollDot 2s infinite' }}/>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; justify-items: center; text-align: center; }
          .hero-grid > div:first-child { align-items: center; display:flex; flex-direction:column; }
          .hero-img-col { order: -1; }
          .hero-img-col > div { width: 220px !important; }
          .hero-img-col > div > div:last-of-type, .hero-img-col > div > div:nth-of-type(4) { display:none; }
          .hero-img-col img { width:220px !important; height:220px !important; }
          .hero-img-col > div > div:first-child { inset: -14px !important; }
          .hero-img-col > div > div:nth-child(2) { inset: -22px !important; }
          .hero-img-col > div > div:nth-child(3) { width:220px !important; height:220px !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
