import { useEffect, useRef } from 'react';

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll('.fade-in,.fade-in-left,.fade-in-right').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const highlights = [
    { icon: '🏆', num: '3+', label: 'Years Experience', color: '#f59e0b', desc: 'Delivering production-grade apps since 2023 across multiple domains and tech stacks.' },
    { icon: '📦', num: '15+', label: 'Projects Delivered', color: '#6366f1', desc: 'From MVPs to complex enterprise platforms — built end-to-end with clean architecture.' },
    { icon: '🌐', num: '3', label: 'Industry Domains', color: '#10b981', desc: 'Real Estate · Logistics · Enterprise — deep domain knowledge in each.' },
  ];

  const traits = [
    { icon: '🎯', title: 'Product Mindset', desc: "I think beyond code — understanding user journeys, business KPIs, and how frontend decisions impact real outcomes." },
    { icon: '🔬', title: 'Detail Oriented', desc: "Pixel-perfect execution. I care about micro-interactions, accessibility, and performance as much as features." },
    { icon: '🤝', title: 'Team Collaborator', desc: "Led client demos, aligned with PMs, and mentored peers on best practices — I thrive in cross-functional teams." },
    { icon: '⚡', title: 'Fast Learner', desc: 'Built across 3 tech ecosystems (React, Angular, React Native) and multiple domains in under 3 years.' },
  ];

  return (
    <section id="about" className="section" ref={ref} style={{ background:'linear-gradient(180deg,#0a0a0a 0%,#0d0d0d 100%)' }}>
      <div className="container">
        {/* Top: bio + stats */}
        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:'80px', alignItems:'start', marginBottom:'80px' }} className="about-top">

          {/* Left bio */}
          <div className="fade-in-left">
            <p className="section-eyebrow">About Me</p>
            <h2 className="section-title">Building the web<br/>one <span style={{ color:'#818cf8', WebkitTextFillColor:'#818cf8' }}>component</span> at a time</h2>
            <p style={{ color:'#a1a1aa', lineHeight:'1.95', fontSize:'1.01rem', marginBottom:'20px' }}>
              I'm a Software Engineer from Hyderabad specialising in <strong style={{ color:'#e4e4e7' }}>React.js, Angular, and React Native</strong>. 
              Over three years I've shipped features at the intersection of design and engineering — 
              from real-time financial dashboards to mobile-first site visit apps.
            </p>
            <p style={{ color:'#a1a1aa', lineHeight:'1.95', fontSize:'1.01rem', marginBottom:'32px' }}>
              My approach: understand the <em style={{ color:'#c7d2fe' }}>why</em> before writing a single line. 
              I've worked in agile teams, led client-facing demos, improved test coverage from scratch, 
              and integrated everything from IoT sensors to PDF signing workflows.
            </p>

            {/* Tech strip */}
            <div style={{ padding:'20px', borderRadius:'14px', background:'rgba(99,102,241,0.05)', border:'1px solid rgba(99,102,241,0.15)', display:'flex', flexWrap:'wrap', gap:'10px' }}>
              {['React.js','Angular','React Native','TypeScript','Node.js','Redux','RxJS','MongoDB'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right highlights */}
          <div style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
            {highlights.map((h, i) => (
              <div key={h.label} className="fade-in-right" style={{ transitionDelay:`${i*0.12}s` }}>
                <div style={{
                  background:'#141414', border:'1px solid rgba(255,255,255,0.07)',
                  borderRadius:'16px', padding:'22px 24px',
                  display:'flex', gap:'18px', alignItems:'flex-start',
                  transition:'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=`${h.color}40`; e.currentTarget.style.transform='translateX(6px)'; e.currentTarget.style.boxShadow=`0 8px 32px ${h.color}15`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.transform='translateX(0)'; e.currentTarget.style.boxShadow='none'; }}>
                  <div style={{ fontSize:'1.6rem', width:'48px', height:'48px', borderRadius:'12px', background:`${h.color}15`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, border:`1px solid ${h.color}25` }}>{h.icon}</div>
                  <div>
                    <div style={{ display:'flex', alignItems:'baseline', gap:'8px', marginBottom:'5px' }}>
                      <span style={{ fontFamily:"'Outfit',sans-serif", color:'#fff', fontWeight:'800', fontSize:'1.55rem', lineHeight:1 }}>{h.num}</span>
                      <span style={{ color:h.color, fontWeight:'700', fontSize:'0.82rem' }}>{h.label}</span>
                    </div>
                    <p style={{ color:'#71717a', fontSize:'0.84rem', lineHeight:'1.65' }}>{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: personality traits */}
        <div>
          <h3 className="fade-in" style={{ color:'#a1a1aa', fontWeight:'600', fontSize:'0.82rem', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'24px' }}>
            What makes me tick
          </h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'20px' }}>
            {traits.map((t, i) => (
              <div key={t.title} className="fade-in" style={{ transitionDelay:`${i*0.1}s` }}>
                <div style={{
                  background:'#141414', border:'1px solid rgba(255,255,255,0.06)',
                  borderRadius:'14px', padding:'24px',
                  transition:'all 0.3s ease', cursor:'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(99,102,241,0.3)'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 32px rgba(99,102,241,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}>
                  <div style={{ fontSize:'1.7rem', marginBottom:'12px' }}>{t.icon}</div>
                  <h4 style={{ color:'#fff', fontWeight:'700', fontSize:'0.95rem', marginBottom:'8px' }}>{t.title}</h4>
                  <p style={{ color:'#71717a', fontSize:'0.83rem', lineHeight:'1.7' }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`.about-top{@media(max-width:768px){grid-template-columns:1fr!important;gap:50px!important;}}`}</style>
      <style>{`@media(max-width:768px){.about-top{grid-template-columns:1fr!important;gap:50px!important;}}`}</style>
    </section>
  );
};

export default About;
