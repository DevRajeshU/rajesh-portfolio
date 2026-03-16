import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Core Frontend',
    icon: '⚡',
    color: '#6366f1',
    bgColor: 'rgba(99,102,241,0.08)',
    desc: 'My primary weapons — battle-tested across enterprise and consumer products.',
    skills: [
      { name:'React.js', level:95, note:'Primary framework · 3 yrs' },
      { name:'Angular', level:95, note:'NgRx, RxJS, lazy loading' },
      { name:'React Native', level:80, note:'Cross-platform mobile' },
      { name:'TypeScript', level:88, note:'Strict mode, generics' },
      { name:'JavaScript ES6+', level:92, note:'Async, closures, patterns' },
      { name:'HTML5 & CSS3', level:95, note:'Semantic, accessible' },
    ],
  },
  {
    category: 'State Management',
    icon: '🔄',
    color: '#8b5cf6',
    bgColor: 'rgba(139,92,246,0.08)',
    desc: 'Managing complex state in large-scale single-page applications.',
    skills: [
      { name:'Redux', level:88, note:'Redux Toolkit + thunks' },
      { name:'Context API', level:93, note:'Custom hooks pattern' },
      { name:'RxJS', level:90, note:'Observable streams' },
      { name:'NgRx', level:75, note:'Angular state store' },
    ],
  },
  {
    category: 'Backend & APIs',
    icon: '🔧',
    color: '#06b6d4',
    bgColor: 'rgba(6,182,212,0.08)',
    desc: 'Full-stack awareness — I understand what happens beyond the browser.',
    skills: [
      { name:'Node.js', level:75, note:'Express, REST endpoints' },
      { name:'REST APIs', level:90, note:'Design + integration' },
      { name:'JWT Auth', level:85, note:'RBAC, token refresh' },
      { name:'MongoDB', level:70, note:'Schema design, queries' },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: '🛠️',
    color: '#10b981',
    bgColor: 'rgba(16,185,129,0.08)',
    desc: 'Shipping with quality — version control, testing, and collaboration.',
    skills: [
      { name:'Git & GitHub', level:92, note:'Branching, PRs, reviews' },
      { name:'Jira', level:88, note:'Sprint planning, agile' },
      { name:'Postman', level:85, note:'API testing, collections' },
      { name:'VS Code', level:95, note:'Extensions, shortcuts' },
    ],
  },
];

const SkillBar = ({ name, level, note, color, visible }) => (
  <div style={{ marginBottom:'14px' }}>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'6px' }}>
      <div>
        <span style={{ color:'#e4e4e7', fontSize:'0.87rem', fontWeight:'600' }}>{name}</span>
        <span style={{ color:'#52525b', fontSize:'0.72rem', marginLeft:'8px' }}>{note}</span>
      </div>
      <span style={{ color:color, fontSize:'0.8rem', fontWeight:'700' }}>{level}%</span>
    </div>
    <div style={{ height:'5px', background:'rgba(255,255,255,0.06)', borderRadius:'3px', overflow:'hidden' }}>
      <div style={{
        height:'100%',
        width: visible ? `${level}%` : '0%',
        background: `linear-gradient(90deg, ${color}, ${color}cc)`,
        borderRadius:'3px',
        transition:`width 1.2s cubic-bezier(0.4,0,0.2,1)`,
        boxShadow:`0 0 8px ${color}60`,
      }}/>
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          setVisible(true);
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    ref.current.querySelectorAll('.fade-in').forEach(el => io.observe(el));
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className="section" ref={ref} style={{ background:'#0d0d0d', position:'relative', overflow:'hidden' }}>
      {/* BG accent */}
      <div style={{ position:'absolute', right:'-200px', top:'10%', width:'500px', height:'500px', borderRadius:'50%', background:'radial-gradient(circle,rgba(99,102,241,0.05) 0%,transparent 70%)', pointerEvents:'none' }}/>

      <div className="container">
        <div className="fade-in" style={{ marginBottom:'60px' }}>
          <p className="section-eyebrow">Tech Stack</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-desc" style={{ marginBottom:0 }}>
            3 years of hands-on engineering across frontend frameworks, state management, and tooling. 
            Proficiency levels reflect real production usage.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'24px' }}>
          {skillGroups.map((g, gi) => (
            <div key={g.category} className="fade-in" style={{ transitionDelay:`${gi*0.1}s` }}>
              <div style={{
                background:'#141414', border:'1px solid rgba(255,255,255,0.07)',
                borderRadius:'18px', padding:'28px', height:'100%',
                transition:'all 0.35s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=`${g.color}40`; e.currentTarget.style.boxShadow=`0 12px 40px ${g.color}15`; e.currentTarget.style.transform='translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)'; }}>
                {/* Header */}
                <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'8px' }}>
                  <div style={{ width:'44px', height:'44px', borderRadius:'12px', background:g.bgColor, border:`1px solid ${g.color}25`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem' }}>{g.icon}</div>
                  <h3 style={{ color:'#fff', fontWeight:'700', fontSize:'0.97rem' }}>{g.category}</h3>
                </div>
                <p style={{ color:'#52525b', fontSize:'0.78rem', marginBottom:'22px', lineHeight:'1.6' }}>{g.desc}</p>

                {/* Skill bars */}
                {g.skills.map(s => (
                  <SkillBar key={s.name} {...s} color={g.color} visible={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
