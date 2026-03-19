import { useEffect, useRef, useState } from 'react';

const contactInfo = [
  { icon:'✉️', label:'Email', value:'uduthalarajesh@gmail.com', href:'mailto:uduthalarajesh@gmail.com', color:'#6366f1' },
  { icon:'📞', label:'Phone', value:'+91 9908378387', href:'tel:+919908378387', color:'#10b981' },
  { icon:'📍', label:'Location', value:'Hyderabad, Telangana', href:null, color:'#f59e0b' },
  { icon:'💼', label:'LinkedIn', value:'linkedin.com/in/rajesh-uduthala', href:'https://linkedin.com/in/rajesh-uduthala', color:'#0077b5' },
  { icon:'🐙', label:'GitHub', value:'github.com/rajesh-uduthala', href:'https://github.com/rajesh-uduthala', color:'#a1a1aa' },
];

const Contact = () => {
  const ref = useRef(null);
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    ref.current.querySelectorAll('.fade-in,.fade-in-left,.fade-in-right').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleChange = e => setForm(s => ({ ...s, [e.target.name]:e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); setForm({ name:'', email:'', message:'' }); }, 1600);
  };

  return (
    <section id="contact" className="section" ref={ref} style={{ background:'#0a0a0a', position:'relative', overflow:'hidden' }}>
      {/* Top line */}
      <div style={{ position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:'900px', height:'1px', background:'linear-gradient(90deg,transparent,rgba(99,102,241,0.3),transparent)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', right:'-100px', top:'20%', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle,rgba(99,102,241,0.06) 0%,transparent 70%)', pointerEvents:'none' }}/>

      <div className="container">
        <div className="fade-in" style={{ marginBottom:'64px' }}>
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-desc" style={{ marginBottom:0 }}>
             I'm currently open to full-time frontend roles, freelance projects, and interesting collaborations. 
            Pick up the fastest channel or drop a message below.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:'60px', alignItems:'start' }} className="contact-grid">

          {/* Left */}
          <div className="fade-in-left">
            {/* CTA strip */}
            <div style={{ padding:'24px', borderRadius:'16px', background:'linear-gradient(135deg,rgba(99,102,241,0.1),rgba(139,92,246,0.05))', border:'1px solid rgba(99,102,241,0.2)', marginBottom:'32px' }}>
              <div style={{ fontSize:'2rem', marginBottom:'12px' }}>👋</div>
              <h3 style={{ color:'#fff', fontWeight:'700', fontSize:'1.02rem', marginBottom:'8px' }}>Ready to bring ideas to life</h3>
              <p style={{ color:'#a1a1aa', fontSize:'0.86rem', lineHeight:'1.75' }}>
                Whether it's a complex enterprise dashboard, a consumer-facing React app, or a cross-platform mobile product — 
                I'm at my best when the challenges are real and the stakes are high.
              </p>
            </div>

            {/* Contact items */}
            <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
              {contactInfo.map(info => (
                <div key={info.label} style={{ display:'flex', gap:'14px', alignItems:'center', padding:'14px 16px', borderRadius:'12px', background:'#141414', border:'1px solid rgba(255,255,255,0.06)', transition:'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor=`${info.color}35`; e.currentTarget.style.transform='translateX(5px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.06)'; e.currentTarget.style.transform='translateX(0)'; }}>
                  <div style={{ width:'40px', height:'40px', borderRadius:'10px', background:`${info.color}14`, border:`1px solid ${info.color}25`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem', flexShrink:0 }}>
                    {info.icon}
                  </div>
                  <div style={{ minWidth:0 }}>
                    <div style={{ color:'#52525b', fontSize:'0.72rem', fontWeight:'600', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:'2px' }}>{info.label}</div>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http')?'_blank':'_self'} rel="noopener noreferrer"
                        style={{ color:'#e4e4e7', fontSize:'0.87rem', fontWeight:'500', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', display:'block', transition:'color 0.2s' }}
                        onMouseEnter={e => e.target.style.color=info.color}
                        onMouseLeave={e => e.target.style.color='#e4e4e7'}>
                        {info.value}
                      </a>
                    ) : (
                      <span style={{ color:'#e4e4e7', fontSize:'0.87rem', fontWeight:'500' }}>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="fade-in-right">
            <div style={{ background:'#141414', border:'1px solid rgba(255,255,255,0.08)', borderRadius:'20px', padding:'36px' }}>
              {sent ? (
                <div style={{ textAlign:'center', padding:'48px 0' }}>
                  <div style={{ fontSize:'4rem', marginBottom:'16px' }}>🎉</div>
                  <h3 style={{ color:'#fff', fontWeight:'800', fontSize:'1.3rem', marginBottom:'8px' }}>Message Sent!</h3>
                  <p style={{ color:'#a1a1aa', fontSize:'0.9rem', marginBottom:'28px' }}>Thanks for reaching out, Rajesh will reply within 24 hours.</p>
                  <button onClick={() => setSent(false)} style={{ padding:'11px 26px', borderRadius:'10px', background:'rgba(99,102,241,0.12)', border:'1px solid rgba(99,102,241,0.3)', color:'#818cf8', fontWeight:'600', cursor:'pointer', fontSize:'0.88rem' }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ color:'#fff', fontWeight:'700', fontSize:'1.05rem', marginBottom:'6px' }}>Send a Message</h3>
                  <p style={{ color:'#52525b', fontSize:'0.82rem', marginBottom:'28px' }}>I'll get back to you within 24 hours.</p>
                  <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'18px' }}>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'14px' }} className="form-row">
                      {[{ label:'Your Name', name:'name', type:'text', placeholder:'John Doe' },
                        { label:'Email Address', name:'email', type:'email', placeholder:'john@example.com' }].map(f => (
                        <div key={f.name}>
                          <label style={{ display:'block', color:'#a1a1aa', fontSize:'0.8rem', fontWeight:'600', marginBottom:'7px', letterSpacing:'0.04em' }}>{f.label}</label>
                          <input type={f.type} name={f.name} required placeholder={f.placeholder} value={form[f.name]} onChange={handleChange}
                            style={{ width:'100%', padding:'12px 14px', background:'#0f0f0f', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'10px', color:'#fff', fontSize:'0.88rem', outline:'none', fontFamily:'Inter,sans-serif', transition:'border-color 0.2s ease' }}
                            onFocus={e => e.target.style.borderColor='rgba(99,102,241,0.55)'}
                            onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.07)'}/>
                        </div>
                      ))}
                    </div>
                    <div>
                      <label style={{ display:'block', color:'#a1a1aa', fontSize:'0.8rem', fontWeight:'600', marginBottom:'7px', letterSpacing:'0.04em' }}>Message</label>
                      <textarea name="message" required placeholder="Tell me about your project, role, or idea..." rows={5} value={form.message} onChange={handleChange}
                        style={{ width:'100%', padding:'12px 14px', background:'#0f0f0f', border:'1px solid rgba(255,255,255,0.07)', borderRadius:'10px', color:'#fff', fontSize:'0.88rem', outline:'none', resize:'vertical', fontFamily:'Inter,sans-serif', transition:'border-color 0.2s ease', minHeight:'130px' }}
                        onFocus={e => e.target.style.borderColor='rgba(99,102,241,0.55)'}
                        onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.07)'}/>
                    </div>
                    <button type="submit" disabled={sending} className="btn btn-primary" style={{ width:'100%', justifyContent:'center', padding:'14px', fontSize:'0.95rem', opacity: sending ? 0.75 : 1 }}>
                      {sending ? (
                        <><span style={{ display:'inline-block', width:'16px', height:'16px', border:'2px solid rgba(255,255,255,0.3)', borderTopColor:'#fff', borderRadius:'50%', animation:'rotate360 0.7s linear infinite' }}/> Sending...</>
                      ) : '🚀 Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:36px!important;}.form-row{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
};

export default Contact;
