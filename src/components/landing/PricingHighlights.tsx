"use client";

import React from "react";

export default function PricingHighlights() {
  const cards = [
    { 
      title: "Arranque rápido", 
      desc: "Configura tu primer cliente y primer préstamo en minutos.",
      tone: 'border-purple',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1"></circle>
          <path d="M12 7v5"></path>
          <path d="M9.71 5.05A7 7 0 0 0 5 12a7 7 0 1 0 14 0 6.967 6.967 0 0 0-4.71-6.95"></path>
        </svg>
      )
    },
    { 
      title: "Datos protegidos", 
      desc: "Backups automáticos y cifrado de datos desde el inicio.",
      tone: 'border-blue',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    { 
      title: "Escala cuando lo necesites", 
      desc: "Pasa de usuarios individuales a equipos sin migraciones complejas.",
      tone: 'border-emerald',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
        </svg>
      )
    },
    { 
      title: "Soporte directo", 
      desc: "Soporte por correo y documentación práctica para resolver dudas reales.",
      tone: 'border-gray',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          <line x1="9" y1="9" x2="15" y2="9"></line>
          <line x1="9" y1="13" x2="13" y2="13"></line>
        </svg>
      )
    },
  ];

  return (
    <section style={{ padding: "72px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div className="section-label">Beneficios</div>
          <h3 className="highlights-title">Lo que obtienes con Kannicash</h3>
        </div>

        <div className="highlights-grid">
          {cards.map((c, i) => (
            <div key={i} className={`card-business ${c.tone}`}>
              <div className="card-header">
                <div className="icon-wrap">
                  {c.icon}
                </div>
                <div className="header-info">
                  <h3>{c.title}</h3>
                </div>
              </div>

              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .highlights-title { font-size: 1.8rem; font-weight: 800; margin-top: 8px; }
        .highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }

        .card-business {
          border-radius: 28px;
          padding: 34px;
          border: 1px solid rgba(226,232,240,0.8);
          box-shadow: 0 18px 40px -12px rgba(2,6,23,0.06), 0 6px 18px -8px rgba(2,6,23,0.04);
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg,#fff 44%, rgba(255,255,255,0.9) 100%);
          transition: transform 0.6s cubic-bezier(0.2,0.9,0.25,1), box-shadow 0.6s;
        }

        .card-business::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 8%;
          right: 8%;
          height: 100px;
          filter: blur(22px);
          opacity: 0.45;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.8s;
        }

        .card-business::after {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          filter: blur(36px);
          opacity: 0.04;
          z-index: 0;
          top: -40px;
          right: -40px;
        }

        .card-business .card-header { display: flex; align-items: center; gap: 14px; z-index: 2; }
        .card-business .icon-wrap { width: 46px; height: 46px; border-radius: 12px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:18px; z-index:2; transition: transform 0.4s; }
        .card-business .header-info h3 { margin:0; font-size:1.15rem; font-weight:850; color:var(--gray-900); z-index:2; }
        .card-business p { margin: 12px 0 0 0; color:var(--gray-600); z-index:2; font-weight:550; line-height:1.6 }

        .card-business:hover { transform: translateY(-8px); box-shadow: 0 35px 70px -12px rgba(2,6,23,0.08); }

        .card-business.border-purple { background: linear-gradient(180deg,#fff,#faf5ff); }
        .card-business.border-purple::before { background: radial-gradient(circle at 50% 0%, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0) 70%); }
        .card-business.border-purple::after { background: #8b5cf6; }
        .card-business.border-purple .icon-wrap { background: rgba(139,92,246,0.06); color:#8b5cf6 }

        .card-business.border-blue { background: linear-gradient(180deg,#fff,#eff6ff); }
        .card-business.border-blue::before { background: radial-gradient(circle at 50% 0%, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0) 70%); }
        .card-business.border-blue::after { background: #3b82f6; }
        .card-business.border-blue .icon-wrap { background: rgba(59,130,246,0.06); color:#3b82f6 }

        .card-business.border-emerald { background: linear-gradient(180deg,#fff,#f0fdf4); }
        .card-business.border-emerald::before { background: radial-gradient(circle at 50% 0%, rgba(16,185,129,0.32) 0%, rgba(16,185,129,0) 70%); }
        .card-business.border-emerald::after { background: #10b981; }
        .card-business.border-emerald .icon-wrap { background: rgba(16,185,129,0.06); color:#10b981 }

        .card-business.border-gray { background: linear-gradient(180deg,#fff,#fbfdff); }
        .card-business.border-gray::before { background: radial-gradient(circle at 50% 0%, rgba(148,163,184,0.18) 0%, rgba(148,163,184,0) 70%); }
        .card-business.border-gray::after { background: #94a3b8; }
        .card-business.border-gray .icon-wrap { background: rgba(148,163,184,0.06); color:#64748b }

        @media (max-width: 768px) {
          .highlights-grid { gap: 16px; }
          .card-business { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
