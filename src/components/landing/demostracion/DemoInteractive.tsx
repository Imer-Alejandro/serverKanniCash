"use client";

import React, { useEffect, useRef } from "react";
import HeroShowcase from "./HeroShowcase";
import PricingComparison from "../PricingComparison";

export default function DemoInteractive() {
  const particlesRef = useRef<HTMLDivElement>(null);

  const modules = [
    {
      title: "Orquestador de Préstamos",
      desc: "Gestiona clientes, préstamos y abonos desde un solo lugar. Crea préstamos, registra abonos y genera recibos en PDF al instante con consistencia de datos en tiempo real.",
      video: "/landi/video_header.mp4",
      color: "blue",
      chips: ["⚡ Rapidez", "👥 Gestión de Clientes"],
      reverse: false
    },
    {
      title: "Motor de Amortización",
      desc: "Cálculos matemáticos exactos. Soporta amortización Francesa y Plana con redondeo inteligente, garantizando que el cuadro de pagos siempre cuadre al centavo.",
      video: "/landi/video_header.mp4",
      color: "purple",
      chips: ["🧮 Cálculos Exactos", "📊 Cuadros de Pago"],
      reverse: true
    },
    {
      title: "Control de Mora Dinámico",
      desc: "La mora se actualiza bajo demanda. El sistema detecta automáticamente atrasos y aplica reglas de penalidad para que jamás pierdas el rastro de cuotas vencidas.",
      video: "/landi/video_header.mp4",
      color: "teal",
      chips: ["⚠️ Detección Automática", "💰 Reglas de Penalidad"],
      reverse: false
    }
  ];

  useEffect(() => {
    const renderParticles = (c: HTMLDivElement | null, colors: string[]) => {
      if (!c) return;
      for (let i = 0; i < 30; i++) {
        const p = document.createElement("div");
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 4 + 1;
        p.style.cssText = `
          position:absolute;
          width:${size}px;height:${size}px;
          background:rgba(${color},${Math.random() * 0.6 + 0.1});
          border-radius:50%;
          left:${Math.random() * 100}%;top:${Math.random() * 100}%;
          animation:diFloatSP ${Math.random() * 20 + 14}s infinite ease-in-out;
          animation-delay:${Math.random() * -22}s;
          pointer-events:none;
        `;
        c.appendChild(p);
      }
      return () => { c.innerHTML = ""; };
    };

    renderParticles(particlesRef.current, ["34,211,238", "14,165,233", "99,102,241"]);
  }, []);

  return (
    <div className="landing-wrapper demo-page">
      <HeroShowcase />

      {/* ══════════════════════════════════════════════════════════
          SECCIÓN 1 — BENTO BOX ESTADÍSTICAS
      ══════════════════════════════════════════════════════════ */}
      <section className="di-bento-section">
        <div className="di-bento-particles" ref={particlesRef} aria-hidden="true" />
        <div className="di-inner">
          <div className="di-section-intro">
            <h2>Gestión Inteligente y Precisa</h2>
            <p>La herramienta diseñada para profesionalizar tu cartera. Respaldada por tecnología robusta, garantizamos seguridad y rendimiento en cada transacción.</p>
          </div>

          <div className="di-bento-layout">
            <div className="di-bento-dark-card">
              <div className="di-bento-dark-content">
                <h3>Arquitectura Moderna</h3>
                <p>Nuestra plataforma está construida pensando en la consistencia de datos y la velocidad operativa. Sincronización en tiempo real para que operes sin fricciones.</p>
                <div className="di-bento-author">
                  <div className="author-avatar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <span>Kannicash Team</span>
                </div>
              </div>
            </div>

            <div className="di-bento-light-grid">
              <div className="di-bento-stat-card">
                <div className="stat-head"><span className="stat-num">100%</span><span className="stat-label">Digital</span></div>
                <p>Olvida el papel y las libretas físicas. Todo tu negocio en la nube.</p>
              </div>
              <div className="di-bento-stat-card">
                <div className="stat-head"><span className="stat-num">0</span><span className="stat-label">Errores</span></div>
                <p>Cálculo exacto de cuotas e intereses sin margen de error humano.</p>
              </div>
              <div className="di-bento-stat-card">
                <div className="stat-head"><span className="stat-num">24/7</span><span className="stat-label">Soporte</span></div>
                <p>Disponibilidad y soporte técnico para tu tranquilidad total.</p>
              </div>
              <div className="di-bento-stat-card">
                <div className="stat-head"><span className="stat-num">AES</span><span className="stat-label">Seguridad</span></div>
                <p>Tus datos financieros cifrados con grado bancario de extremo a extremo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECCIÓN 2 — MÓDULOS EXPLICATIVOS
      ══════════════════════════════════════════════════════════ */}
      <section className="di-modules-section">
        <div className="di-smoke di-smoke-1" />
        <div className="di-smoke di-smoke-2" />
        
        <div className="di-inner">
          <div className="di-section-intro di-intro-dark">
            <span className="di-label di-label-glow">Funcionalidad Principal</span>
            <h2 style={{color: '#fff'}}>Módulos Potentes</h2>
            <p style={{color: 'rgba(255,255,255,0.7)'}}>Descubre el corazón de Kannicash a través de nuestros módulos principales diseñados para el control absoluto.</p>
          </div>

          <div className="modules-container">
            {modules.map((mod, i) => (
              <div key={i} className={`module-row ${mod.reverse ? 'module-reverse' : ''}`}>
                <div className="module-content">
                  <div className={`module-icon-wrap ${mod.color}`}>
                    <span className="module-step">{i + 1}</span>
                  </div>
                  <h3>{mod.title}</h3>
                  <p>{mod.desc}</p>
                  
                  <div className="module-chips">
                    {mod.chips.map((chip, idx) => (
                      <span key={idx} className="chip">{chip}</span>
                    ))}
                  </div>
                </div>

                <div className="module-visual">
                  <div className={`module-blob ${mod.color}`} />
                  <div className="di-modern-phone">
                    <div className="phone-frame">
                      <div className="phone-island"></div>
                      <video autoPlay loop muted playsInline className="di-phone-video">
                        <source src={mod.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECCIÓN 3 — INVITACIÓN AL BLOG
      ══════════════════════════════════════════════════════════ */}
      <section className="di-blog-section">
        <div className="di-inner" style={{ textAlign: 'center' }}>
          <span className="di-label">Recursos</span>
          <h2>Aprende con Kannicash</h2>
          <p className="section-sub" style={{ margin: '0 auto 40px' }}>
            Explora nuestro blog para descubrir estrategias de cobranza, novedades regulatorias y consejos para hacer crecer tu cartera de préstamos.
          </p>
          <a href="https://blog.kannicash.com" className="di-btn-outline" target="_blank" rel="noopener noreferrer">
            Explorar artículos del Blog
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECCIÓN 4 — PLANES
      ══════════════════════════════════════════════════════════ */}
      <section className="di-pp-section">
        <div className="di-inner">
          <PricingComparison />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECCIÓN 5 — COTIZAR
      ══════════════════════════════════════════════════════════ */}
      <section className="di-quote-section">
        <div className="di-quote-bg"></div>
        <div className="di-inner">
          <div className="di-quote-box">
            <h2>¿Necesitas un plan personalizado?</h2>
            <p>Si tu cartera supera los límites estándar o necesitas funciones específicas, hablemos para armarte una cotización a medida.</p>
            <div className="di-quote-actions">
              <a href="https://portal.kannicash.com" target="_blank" rel="noopener noreferrer" className="btn-primary">Empezar gratis</a>
              <a href="/soporte" className="btn-ghost" style={{ background: 'white' }}>Hablar con un asesor</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* ═══════════════ KEYFRAMES ═══════════════ */
        @keyframes diFloatSP {
          0%,100% { transform:translate(0,0) scale(1); }
          33%      { transform:translate(30px,-40px) scale(1.1); }
          66%      { transform:translate(-20px,-65px) scale(0.9); }
        }
        @keyframes diSmoke {
          0%   { transform:translate(0,0) scale(1); opacity:0.15; }
          50%  { transform:translate(35px,-25px) scale(1.25); opacity:0.25; }
          100% { transform:translate(-25px,12px) scale(0.9); opacity:0.15; }
        }
        @keyframes floatPhone {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        /* ═══════════════ BASE ═══════════════ */
        .demo-page { background:#ffffff; overflow-x:hidden; }
        .di-inner { max-width:1200px; margin:0 auto; position:relative; z-index:2; }

        .di-section-intro { text-align:center; max-width:720px; margin:0 auto 72px; }
        .di-section-intro h2 { font-size:clamp(2rem,4vw,3.1rem); margin:0 0 16px; font-weight:800; color:var(--gray-900); letter-spacing:-0.03em; }
        .di-section-intro p { font-size:1.1rem; color:var(--gray-600); margin:0; line-height:1.65; }

        .di-label { display:inline-flex; padding:7px 16px; border-radius:100px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; font-size:0.75rem; margin-bottom:18px; }
        .di-label-glow { background:rgba(34,211,238,0.1); color:#0ea5e9; border:1px solid rgba(34,211,238,0.22); }

        .di-smoke { position:absolute; border-radius:50%; pointer-events:none; filter:blur(90px); animation:diSmoke 22s infinite ease-in-out; }
        .di-smoke-1 { width:600px; height:600px; background:rgba(34,211,238,0.12); top:10%; right:-100px; }
        .di-smoke-2 { width:500px; height:500px; background:rgba(139,92,246,0.12); bottom:20%; left:-100px; }

        /* Modern Phone Frame */
        .di-modern-phone {
          width: 280px; height: 570px;
          background: #0f172a; border-radius: 44px; padding: 12px;
          box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset;
          position: relative;
          animation: floatPhone 6s infinite ease-in-out;
        }
        .phone-frame {
          width: 100%; height: 100%; background: #000; border-radius: 32px;
          position: relative; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .phone-island {
          position: absolute; top: 12px; left: 50%; transform: translateX(-50%);
          width: 85px; height: 24px; background: #000; border-radius: 12px; z-index: 10;
        }
        .di-phone-video { width: 100%; height: 100%; object-fit: cover; }

        /* ═══════════════ BENTO SECTION ═══════════════ */
        .di-bento-section { padding:120px 60px; position:relative; background:#ffffff; }
        .di-bento-particles { position:absolute; inset:0; }
        .di-bento-layout { display:grid; grid-template-columns: 1.1fr 1fr; gap:24px; align-items:stretch; }
        
        .di-bento-dark-card {
          background: linear-gradient(145deg, #0f172a, #020817);
          border-radius: 32px; padding: 60px 40px; color: white;
          display: flex; flex-direction: column; justify-content: space-between;
          position: relative; overflow: hidden;
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .di-bento-dark-card::before {
          content:''; position:absolute; top:-30%; left:-30%; width:160%; height:160%;
          background: radial-gradient(circle at 50% 0%, rgba(34, 211, 238, 0.2), transparent 50%);
          pointer-events:none;
        }
        .di-bento-dark-content { position:relative; z-index:2; height: 100%; display: flex; flex-direction: column; }
        .di-bento-dark-content h3 { font-size:2.2rem; font-weight:800; margin-bottom:24px; letter-spacing:-0.03em; }
        .di-bento-dark-content p { font-size:1.15rem; line-height:1.6; color:rgba(255,255,255,0.75); margin-bottom: 40px; flex: 1; }
        
        .di-bento-author { display:inline-flex; align-items:center; gap:12px; background:rgba(255,255,255,0.08); padding:8px 24px 8px 8px; border-radius:100px; width: fit-content; border: 1px solid rgba(255,255,255,0.15); backdrop-filter: blur(10px); }
        .author-avatar { width:36px; height:36px; border-radius:50%; background:var(--primary); display:flex; align-items:center; justify-content:center; }
        .di-bento-author span { font-weight:600; font-size:0.9rem; }

        .di-bento-light-grid { display:grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap:24px; }
        .di-bento-stat-card {
          background: white; border-radius: 24px; padding: 32px;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.05);
          display: flex; flex-direction: column; justify-content: center;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .di-bento-stat-card:hover { transform: translateY(-6px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.12); border-color: rgba(34,211,238,0.4); }
        .stat-head { display:flex; align-items:baseline; justify-content:space-between; margin-bottom:16px; border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 16px; }
        .stat-num { font-size: 2.2rem; font-weight: 900; color: #0f172a; letter-spacing: -0.04em; }
        .stat-label { font-size: 0.8rem; font-weight: 700; color: var(--primary); text-transform: uppercase; letter-spacing: 0.05em; background: var(--primary-soft); padding: 4px 10px; border-radius: 8px; }
        .di-bento-stat-card p { font-size: 0.95rem; color: var(--gray-600); line-height: 1.5; margin: 0; }

        /* ═══════════════ MODULES SECTION ═══════════════ */
        .di-modules-section { padding:140px 60px; position:relative; background:linear-gradient(135deg,#020817 0%,#0f172a 100%); overflow:hidden; }
        
        .modules-container { display: flex; flex-direction: column; gap: 140px; margin-top: 80px; }
        .module-row { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .module-reverse { direction: rtl; }
        .module-reverse > * { direction: ltr; }
        
        .module-content { max-width: 500px; }
        .module-icon-wrap { width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800; color: white; margin-bottom: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
        .module-icon-wrap.blue { background: linear-gradient(135deg, #3b82f6, #60a5fa); }
        .module-icon-wrap.purple { background: linear-gradient(135deg, #8b5cf6, #c084fc); }
        .module-icon-wrap.teal { background: linear-gradient(135deg, #14b8a6, #2dd4bf); }
        
        .module-content h3 { font-size: 2.2rem; color: #fff; margin-bottom: 20px; font-weight: 800; letter-spacing: -0.02em; }
        .module-content p { font-size: 1.1rem; color: rgba(255,255,255,0.7); line-height: 1.7; margin-bottom: 30px; }
        
        .module-chips { display: flex; flex-wrap: wrap; gap: 12px; }
        .chip { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); padding: 8px 16px; border-radius: 100px; color: rgba(255,255,255,0.9); font-size: 0.9rem; font-weight: 600; backdrop-filter: blur(10px); }

        .module-visual { position: relative; display: flex; justify-content: center; align-items: center; }
        .module-blob { position: absolute; width: 400px; height: 400px; border-radius: 50%; filter: blur(80px); z-index: 0; opacity: 0.3; }
        .module-blob.blue { background: #3b82f6; }
        .module-blob.purple { background: #8b5cf6; }
        .module-blob.teal { background: #14b8a6; }

        /* ═══════════════ BLOG SECTION ═══════════════ */
        .di-blog-section { padding: 120px 60px; background: #f8fafc; }
        .di-btn-outline {
          display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px;
          border-radius: 12px; border: 2px solid var(--primary); color: var(--primary);
          font-weight: 700; font-size: 0.95rem; text-decoration: none;
          transition: all 0.3s ease;
        }
        .di-btn-outline:hover { background: var(--primary); color: white; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(20,104,138,0.2); }

        /* ═══════════════ QUOTE / PRE-FOOTER SECTION ═══════════════ */
        .di-quote-section { padding: 120px 60px; background: #ffffff; position: relative; overflow: hidden; }
        .di-quote-bg {
          position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 120%, rgba(34,211,238,0.15), transparent 70%);
          pointer-events: none;
        }
        .di-quote-box {
          background: linear-gradient(145deg, #f0f9ff, #e0f2fe);
          border-radius: 32px; padding: 70px 40px; text-align: center;
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 20px 40px rgba(0,0,0,0.03);
          max-width: 800px; margin: 0 auto; position: relative; z-index: 2;
        }
        .di-quote-box h2 { font-size: 2.5rem; font-weight: 800; color: var(--gray-900); margin-bottom: 16px; letter-spacing: -0.03em; }
        .di-quote-box p { font-size: 1.15rem; color: var(--gray-600); margin-bottom: 40px; line-height: 1.6; }
        .di-quote-actions { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        /* ═══════════════ RESPONSIVE ═══════════════ */
        @media (max-width:1100px) {
          .di-bento-layout { grid-template-columns: 1fr; }
          .di-bento-dark-card { padding: 40px; }
          .module-row { grid-template-columns: 1fr; gap: 60px; text-align: center; }
          .module-reverse { direction: ltr; }
          .module-content { max-width: 100%; display: flex; flex-direction: column; align-items: center; }
          .module-chips { justify-content: center; }
        }
        @media (max-width:768px) {
          .di-bento-section, .di-modules-section, .di-blog-section, .di-quote-section { padding: 60px 20px; }
          .di-bento-light-grid { grid-template-columns: 1fr; }
          .di-modern-phone { width: 240px; height: 500px; }
          .di-quote-box { padding: 40px 20px; }
          .di-quote-box h2 { font-size: 1.8rem; }
          .modules-container { gap: 100px; }
        }
      `}</style>
    </div>
  );
}
