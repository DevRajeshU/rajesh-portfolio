import { useEffect, useRef } from 'react';

const projects = [
  {
    title: 'IoT-Based Fire Alerting System',
    emoji: '🔥',
    category: 'Hardware + Software',
    tags: ['Python', 'Arduino', 'IoT', 'REST APIs'],
    color: '#f97316',
    year: '2022',
    description:
      'A multi-sensor real-time fire detection system fusing temperature, flame, and smoke sensor data for high-confidence alerts — deployed in physical environments.',
    problem: 'Traditional single-sensor fire detectors have high false-positive rates. Single-condition triggers lead to unnecessary evacuations or missed real fires.',
    solution: 'Fused three sensor types (DHT11 temp, IR flame sensor, MQ-2 smoke) via Arduino, with a Python backend applying threshold logic and REST API pushes to cloud dashboards.',
    highlights: [
      { icon:'📈', text:'20% improved detection reliability over single-sensor systems' },
      { icon:'🏭', text:'Deployed and tested in 10+ real-world environments' },
      { icon:'🔗', text:'RESTful API layer for cloud alert delivery and audit logging' },
      { icon:'⚡', text:'<2 second detection-to-alert latency across all deployments' },
    ],
    github: 'https://github.com/DevRajeshU',
  },
  {
    title: 'Fake Twitter Account Detection',
    emoji: '🤖',
    category: 'Machine Learning',
    tags: ['Python', 'Machine Learning', 'NumPy', 'JavaScript'],
    color: '#6366f1',
    year: '2022',
    description:
      'An ML classifier that identifies bot/fake Twitter accounts using behavioral features — follower ratios, activity patterns, engagement rates — achieving 99% accuracy with Random Forest.',
    problem: 'Social media platforms are flooded with fake accounts that manipulate discourse and spread misinformation. Manual moderation doesn\'t scale.',
    solution: 'Trained a Random Forest classifier on 1000+ labeled Twitter profiles using NumPy feature engineering. Built a JavaScript frontend for interactive analysis.',
    highlights: [
      { icon:'🎯', text:'99% classification accuracy using Random Forest' },
      { icon:'📊', text:'Analyzed behavioral patterns across 1000+ accounts' },
      { icon:'⬇️', text:'Reduced false positives by 15% via feature engineering' },
      { icon:'🖥️', text:'JavaScript frontend for interactive result exploration' },
    ],
    github: 'https://github.com/DevRajeshU',
  },
];

const Projects = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    ref.current.querySelectorAll('.fade-in').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="projects" className="section" ref={ref} style={{ background:'#0d0d0d', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'0', left:'50%', transform:'translateX(-50%)', width:'900px', height:'1px', background:'linear-gradient(90deg,transparent,rgba(99,102,241,0.3),transparent)', pointerEvents:'none' }}/>

      <div className="container">
        <div className="fade-in" style={{ marginBottom:'64px' }}>
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc" style={{ marginBottom:0 }}>
            Beyond daily work — self-driven engineering explorations showcasing hardware integration and machine learning. 
            Each built to solve a real problem.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(360px,1fr))', gap:'28px' }}>
          {projects.map((proj, i) => (
            <div key={proj.title} className="fade-in" style={{ transitionDelay:`${i*0.12}s` }}>
              <div style={{
                background:'#141414', border:'1px solid rgba(255,255,255,0.07)',
                borderRadius:'20px', overflow:'hidden', height:'100%',
                display:'flex', flexDirection:'column', transition:'all 0.35s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=`${proj.color}40`; e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.boxShadow=`0 24px 60px ${proj.color}18`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}>

                {/* Banner */}
                <div style={{ height:'150px', background:`linear-gradient(135deg,${proj.color}18 0%,${proj.color}08 100%)`, borderBottom:`1px solid ${proj.color}20`, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 28px', position:'relative', overflow:'hidden' }}>
                  <div style={{ position:'absolute', inset:0, backgroundImage:`radial-gradient(circle at 80% 50%,${proj.color}15 0%,transparent 60%)` }}/>
                  <span style={{ fontSize:'4.5rem', filter:'drop-shadow(0 4px 16px rgba(0,0,0,0.5))', position:'relative', zIndex:1 }}>{proj.emoji}</span>
                  <div style={{ position:'relative', zIndex:1, textAlign:'right' }}>
                    <div style={{ color:`${proj.color}`, fontSize:'0.7rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'4px' }}>{proj.category}</div>
                    <div style={{ fontFamily:"'Fira Code',monospace", color:'#3f3f46', fontSize:'0.72rem' }}>{proj.year}</div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding:'28px', flex:1, display:'flex', flexDirection:'column' }}>
                  <h3 style={{ color:'#fff', fontSize:'1.1rem', fontWeight:'800', marginBottom:'10px', lineHeight:'1.35' }}>{proj.title}</h3>

                  <div style={{ display:'flex', flexWrap:'wrap', gap:'7px', marginBottom:'16px' }}>
                    {proj.tags.map(t => (
                      <span key={t} style={{ padding:'3px 10px', borderRadius:'6px', fontSize:'0.73rem', fontWeight:'600', background:`${proj.color}12`, border:`1px solid ${proj.color}28`, color:proj.color }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <p style={{ color:'#a1a1aa', fontSize:'0.86rem', lineHeight:'1.75', marginBottom:'16px' }}>{proj.description}</p>

                  {/* Problem / Solution */}
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'20px' }}>
                    {[{ label:'Problem', text:proj.problem, color:'#ef4444' }, { label:'Solution', text:proj.solution, color:'#10b981' }].map(item => (
                      <div key={item.label} style={{ padding:'12px', borderRadius:'10px', background:'rgba(255,255,255,0.02)', border:`1px solid ${item.color}18` }}>
                        <div style={{ color:item.color, fontSize:'0.68rem', fontWeight:'700', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'6px' }}>⚠ {item.label}</div>
                        <p style={{ color:'#71717a', fontSize:'0.75rem', lineHeight:'1.6' }}>{item.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div style={{ display:'flex', flexDirection:'column', gap:'8px', flex:1, marginBottom:'22px' }}>
                    {proj.highlights.map((h, j) => (
                      <div key={j} style={{ display:'flex', gap:'10px', alignItems:'flex-start' }}>
                        <span style={{ fontSize:'0.9rem', minWidth:'20px' }}>{h.icon}</span>
                        <span style={{ color:'#a1a1aa', fontSize:'0.82rem', lineHeight:'1.65' }}>{h.text}</span>
                      </div>
                    ))}
                  </div>

                  <a href={proj.github} target="_blank" rel="noopener noreferrer"
                    style={{ display:'flex', alignItems:'center', gap:'8px', justifyContent:'center', padding:'12px', borderRadius:'10px', border:`1px solid ${proj.color}30`, color:proj.color, fontSize:'0.84rem', fontWeight:'600', background:`${proj.color}08`, transition:'all 0.25s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.background=`${proj.color}18`; e.currentTarget.style.borderColor=`${proj.color}55`; }}
                    onMouseLeave={e => { e.currentTarget.style.background=`${proj.color}08`; e.currentTarget.style.borderColor=`${proj.color}30`; }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
