"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    num: "01",
    title: "Registra Clientes",
    desc: "Añade clientes y préstamos en segundos. Define montos y tasas fácilmente.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
    )
  },
  {
    num: "02",
    title: "Cobro Automático",
    desc: "La app calcula cuotas y mora por ti. Registra pagos con un solo toque.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    )
  },
  {
    num: "03",
    title: "Envía Recibos",
    desc: "Genera comprobantes en PDF y envíalos directamente por WhatsApp.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
    )
  }
];

export default function ProcessSteps() {
  return (
    <section className="process-section" id="paso-a-paso">
      <div className="container">
        <div className="process-header">
          <ScrollReveal>
            <div className="section-label">Paso a paso</div>
            <h2 className="section-title">El mejor proceso para <em>tu éxito</em></h2>
            <p className="section-sub">
              Hemos diseñado un flujo intuitivo que te permite pasar de la libreta a la gestión digital en minutos. 
              Simple, rápido y profesional.
            </p>
          </ScrollReveal>
        </div>

        <div className="process-grid">
          {STEPS.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} className="process-card">
              <div className="process-num">{step.num}</div>
              <div className="process-icon-wrap">
                {step.icon}
              </div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.desc}</p>
              {idx < STEPS.length - 1 && (
                <div className="process-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-section {
          padding: 120px 24px;
          background: #ffffff;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .process-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 80px;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          position: relative;
        }

        .process-card {
          background: #ffffff;
          padding: 48px 40px;
          border-radius: 32px;
          border: 1px solid var(--gray-100);
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .process-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
          border-color: var(--primary-light);
        }

        .process-num {
          position: absolute;
          top: -20px;
          right: -10px;
          font-size: 100px;
          font-weight: 900;
          color: var(--gray-50);
          line-height: 1;
          z-index: 0;
          user-select: none;
        }

        .process-icon-wrap {
          width: 56px;
          height: 56px;
          background: var(--primary-soft);
          color: var(--primary);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .process-card-title {
          font-size: 1.25rem;
          font-weight: 850;
          color: var(--gray-900);
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .process-card-desc {
          font-size: 1rem;
          color: var(--gray-500);
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .process-arrow {
          position: absolute;
          top: 50%;
          right: -32px;
          transform: translateY(-50%);
          color: var(--gray-200);
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .process-arrow {
            display: none;
          }
          .process-card {
            padding: 40px;
          }
        }
      `}</style>
    </section>
  );
}
