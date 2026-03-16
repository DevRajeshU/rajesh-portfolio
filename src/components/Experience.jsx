import { useEffect, useRef } from 'react';

const experiences = [
  {
    role: 'Senior Product Developer',
    company: 'Inncircles Technologies',
    period: 'Oct 2025 – Present',
    duration: 'Present',
    domain: 'Real Estate',
    domainColor: '#f59e0b',
    domainIcon: '🏠',
    tech: ['React.js', 'React Native', 'Angular', 'Node.js'],
    overview: 'Working on the ASBL Ecosystem — a comprehensive real estate platform covering inventory, finance, and field operations. Building across web and mobile.',
    points: [
      { icon:'💰', text:'Built the Financial Module with flat-wise payment structures, EMI calculators, and payment milestone tracking — handling complex business logic for ASBL\'s real estate transactions.' },
      { icon:'📱', text:'Developed React Native mobile UI for Site Visit Digitization, enabling field agents to manage site visits, buyer interactions, and unit markings from mobile devices.' },
      { icon:'📊', text:'Implemented Excel-driven inventory update flows — bulk operations with validations, conflict resolution, and real-time state sync across the platform.' },
      { icon:'👁️', text:'Integrated user behavior tracking via Intersection Observer API to generate actionable heatmaps and engagement reports for UI/UX decisions.' },
    ],
  },
  {
    role: 'Associate Software Developer',
    company: 'Digitele Networks',
    period: 'Dec 2024 – Sep 2025',
    duration: '10 months',
    domain: 'Logistics',
    domainColor: '#06b6d4',
    domainIcon: '🚚',
    tech: ['React.js', 'Angular'],
    overview: 'Built real-time logistics operations tools and a cross-org document signing platform for Greenko. Led feature demos to enterprise clients.',
    points: [
      { icon:'📦', text:'Built real-time order lifecycle tracking dashboard — from dispatch to delivery — with live status updates, map integrations, and SLA breach alerts.' },
      { icon:'✍️', text:'Developed a digital document signing solution for Greenko supporting sequential, parallel, and hybrid PDF approval workflows — replacing manual paper trails.' },
      { icon:'🔐', text:'Implemented RBAC + JWT authentication across the platform — role-based route guards, token refresh, and session management for enterprise security requirements.' },
      { icon:'🎤', text:'Led client-facing demos and technical walkthroughs for enterprise stakeholders, directly contributing to contract renewals and feature prioritisation.' },
    ],
  },
  {
    role: 'Associate Software Developer',
    company: 'Brane Enterprises',
    period: 'Apr 2023 – Dec 2024',
    duration: '1 yr 9 months',
    domain: 'Enterprise',
    domainColor: '#10b981',
    domainIcon: '🏢',
    tech: ['React.js', 'Angular'],
    overview: 'Started career here building a powerful enterprise UI and dashboard platform. Focused on data visualisation, customisable layouts, and test quality.',
    points: [
      { icon:'🎨', text:'Engineered a Page Builder UI with drag-and-drop customisable widgets, layouts, and theme editors — enabling non-tech users to build dashboards without writing code.' },
      { icon:'📈', text:'Integrated 6+ chart types using FusionCharts — bar, line, heatmap, funnel, treemap, scatter — with reusable chart wrapper components and dynamic data binding.' },
      { icon:'📋', text:'Built multi-tabbed dashboards capable of rendering 10+ concurrent datasets without UI freeze — using virtualisation and lazy data fetching strategies.' },
      { icon:'🧪', text:'Improved code coverage by 15% by introducing unit test suites for critical components — reducing regression bugs in production releases.' },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.06 }
    );
    ref.current.querySelectorAll('.fade-in').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="experience" className="section" ref={ref} style={{ background:'#0a0a0a', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', left:'-200px', bottom:'10%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle,rgba(99,102,241,0.04) 0%,transparent 70%)', pointerEvents:'none' }}/>

      <div className="container">
        <div className="fade-in" style={{ marginBottom:'64px' }}>
          <p className="section-eyebrow">Career Journey</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-desc" style={{ marginBottom:0 }}>
            From junior engineer to senior developer across real estate, logistics, and enterprise SaaS — 
            shipping impactful features that users rely on every day.
          </p>
        </div>

        <div style={{ position:'relative', paddingLeft:'36px' }}>
          {/* Vertical line */}
          <div style={{ position:'absolute', left:'9px', top:'28px', bottom:'28px', width:'2px', background:'linear-gradient(180deg,#6366f1 0%,#4338ca 70%,transparent 100%)', borderRadius:'2px' }}/>

          {experiences.map((exp, i) => (
            <div key={exp.company} className="fade-in" style={{ position:'relative', marginBottom: i < 2 ? '52px' : 0, transitionDelay:`${i*0.15}s` }}>
              {/* Timeline dot */}
              <div style={{ position:'absolute', left:'-33px', top:'28px', width:'18px', height:'18px', borderRadius:'50%', background:'linear-gradient(135deg,#6366f1,#818cf8)', border:'3px solid #0a0a0a', boxShadow:'0 0 14px rgba(99,102,241,0.7)', zIndex:1 }}/>
              {/* Duration label */}
              <div style={{ position:'absolute', left:'-90px', top:'24px', color:'#3f3f46', fontSize:'0.7rem', fontFamily:"'Fira Code',monospace", whiteSpace:'nowrap', transform:'rotate(-90deg)', transformOrigin:'center', display:'none' }}>{exp.duration}</div>

              <div style={{
                background:'#141414', border:'1px solid rgba(255,255,255,0.07)',
                borderRadius:'18px', overflow:'hidden', transition:'all 0.35s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(99,102,241,0.3)'; e.currentTarget.style.boxShadow='0 16px 50px rgba(99,102,241,0.1)'; e.currentTarget.style.transform='translateX(5px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateX(0)'; }}>

                {/* Top bar */}
                <div style={{ padding:'24px 28px', borderBottom:'1px solid rgba(255,255,255,0.05)', display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:'16px' }}>
                  <div>
                    <h3 style={{ color:'#fff', fontWeight:'800', fontSize:'1.08rem', marginBottom:'5px' }}>{exp.role}</h3>
                    <p style={{ color:'#818cf8', fontWeight:'600', fontSize:'0.95rem' }}>{exp.company}</p>
                    <p style={{ color:'#52525b', fontSize:'0.8rem', marginTop:'3px', fontFamily:"'Fira Code',monospace" }}>{exp.period} · {exp.duration}</p>
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:'8px' }}>
                    <span style={{
                      background:`${exp.domainColor}15`, color:exp.domainColor,
                      padding:'5px 14px', borderRadius:'100px', fontSize:'0.78rem', fontWeight:'700',
                      border:`1px solid ${exp.domainColor}30`, display:'flex', alignItems:'center', gap:'5px',
                    }}>{exp.domainIcon} {exp.domain}</span>
                    <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', justifyContent:'flex-end' }}>
                      {exp.tech.map(t => <span key={t} className="tag" style={{ fontSize:'0.73rem', padding:'3px 10px' }}>{t}</span>)}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding:'24px 28px' }}>
                  <p style={{ color:'#a1a1aa', fontSize:'0.88rem', lineHeight:'1.75', marginBottom:'20px', fontStyle:'italic' }}>
                    {exp.overview}
                  </p>
                  <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                    {exp.points.map((pt, j) => (
                      <div key={j} style={{ display:'flex', gap:'12px', alignItems:'flex-start', padding:'12px', borderRadius:'10px', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.04)', transition:'background 0.2s ease' }}
                        onMouseEnter={e=>e.currentTarget.style.background='rgba(99,102,241,0.05)'}
                        onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.02)'}>
                        <span style={{ fontSize:'1.1rem', minWidth:'24px' }}>{pt.icon}</span>
                        <p style={{ color:'#a1a1aa', fontSize:'0.86rem', lineHeight:'1.7' }}>{pt.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
