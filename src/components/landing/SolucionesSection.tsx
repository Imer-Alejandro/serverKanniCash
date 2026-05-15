"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function SolucionesSection() {
  return (
    <section className="soluciones-section" id="soluciones">
      <div className="container">
        <div className="soluciones-grid">
          {/* LEFT COLUMN: TEXT & FEATURES */}
          <div className="soluciones-left">
            <ScrollReveal>
              <div className="section-label">Valor Añadido</div>
              <h2 className="section-title">Soluciones diseñadas para <em>tu negocio</em></h2>
              <p className="section-sub-left">
                Nuestra solución innovadora está específicamente diseñada para optimizar tu flujo de trabajo y aumentar la eficiencia operativa.
              </p>
            </ScrollReveal>

            <div className="features-refined-list">
              <ScrollReveal delay={100} className="feature-block">
                <h3>Analiza Datos</h3>
                <p>Visualiza métricas precisas y el estado real de tu cartera en un panel intuitivo y potente.</p>
              </ScrollReveal>

              <ScrollReveal delay={150} className="feature-block">
                <h3>Colabora Seguro</h3>
                <p>Gestiona múltiples usuarios con permisos granulares, manteniendo el control total de tu información.</p>
              </ScrollReveal>

              <ScrollReveal delay={200} className="feature-block">
                <h3>Comunicación Fácil</h3>
                <p>Automatiza el envío de recordatorios y recibos digitales por WhatsApp para mejorar la cobranza.</p>
              </ScrollReveal>

              <ScrollReveal delay={250} className="feature-block">
                <h3>Seguridad en la Nube</h3>
                <p>Tus datos están cifrados y respaldados automáticamente, accesibles en cualquier momento y lugar.</p>
              </ScrollReveal>

              <ScrollReveal delay={300} className="feature-block">
                <h3>Reportes Inteligentes</h3>
                <p>Toma decisiones estratégicas basadas en reportes detallados de ingresos y proyecciones de cobro.</p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="soluciones-actions">
                <a href="#precios" className="btn-primary">Empezar Gratis</a>
                <a href="/demostracion" className="btn-ghost">Ver Demostración</a>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: STICKY INTERACTIVE CHART BOX */}
          <div className="soluciones-right">
            <div className="sticky-box-wrapper">
              <ScrollReveal delay={400}>
                <div className="chart-box-outer">
                  <div className="s-float f-chip-1">✓ Pago registrado</div>
                  <div className="s-float f-chip-2">RD$ 2,500</div>
                  <div className="s-float f-chip-3">WhatsApp enviado</div>
                  <div className="s-float f-chip-4">Capital: +RD$ 50k</div>

                  <div className="chart-box-main">
                    <div className="chart-box-header">
                      <div>
                        <span className="c-label">Ingresos</span>
                        <div className="c-values">
                          <span className="c-val-main">$3,580</span>
                          <span className="c-val-prev">$3,010</span>
                        </div>
                      </div>
                      <div className="c-legend">
                        <span><i className="dot d-blue"></i> 2026</span>
                        <span><i className="dot d-gray"></i> 2025</span>
                      </div>
                    </div>

                    <div className="c-body">
                      <svg viewBox="0 0 400 150" className="c-svg">
                        <defs>
                          <linearGradient id="chartGradient5" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,120 Q50,80 100,100 T200,60 T300,80 T400,40" fill="none" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
                        <path d="M0,120 Q50,80 100,100 T200,60 T300,80 T400,40 V150 H0 Z" fill="url(#chartGradient5)" />
                        <path d="M0,140 Q50,110 100,130 T200,90 T300,110 T400,70" fill="none" stroke="var(--gray-300)" strokeWidth="2" strokeDasharray="6,6" opacity="0.6" />
                      </svg>
                    </div>

                    <div className="c-footer">
                      <div className="c-stat-item">
                        <div className="c-s-info">
                          <span>Próximos Cobros</span>
                          <strong>72%</strong>
                        </div>
                        <div className="c-s-bar"><div className="c-s-progress" style={{ width: '72%', background: 'var(--primary)' }}></div></div>
                      </div>
                      <div className="c-stat-item">
                        <div className="c-s-info">
                          <span>Capital Activo</span>
                          <strong>88%</strong>
                        </div>
                        <div className="c-s-bar"><div className="c-s-progress" style={{ width: '88%', background: '#8b5cf6' }}></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .soluciones-section {
          padding: 160px 24px;
          background: #ffffff;
          position: relative;
          overflow: visible; /* CRITICAL for position: sticky */
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .soluciones-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: stretch; /* Column must be full height */
          position: relative;
        }

        .soluciones-left {
          max-width: 520px;
          padding-bottom: 150px;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 850;
          color: var(--gray-900);
          line-height: 1;
          margin-bottom: 24px;
          letter-spacing: -0.04em;
        }

        .section-sub-left {
          font-size: 1.1rem;
          color: var(--gray-500);
          line-height: 1.6;
          margin-bottom: 60px;
        }

        .features-refined-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .feature-block {
          position: relative;
          padding-left: 24px;
          border-left: 1px solid var(--gray-100);
          transition: border-color 0.3s ease;
        }

        .feature-block:hover {
          border-left-color: var(--primary);
        }

        .feature-block h3 {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .feature-block p {
          font-size: 1.05rem;
          color: var(--gray-500);
          line-height: 1.65;
          font-weight: 450;
        }

        .soluciones-actions {
          margin-top: 60px;
          display: flex;
          gap: 16px;
          align-items: center;
        }

        /* RIGHT SIDE: STICKY BOX */
        .soluciones-right {
          position: relative;
          width: 100%;
          height: 100%; /* Important for inner sticky to work */
        }

        .sticky-box-wrapper {
          position: sticky;
          top: 120px;
          z-index: 10;
        }

        .chart-box-outer {
          position: relative;
          width: 100%;
          max-width: 380px; /* TAMAÑO PROPORCIONAL */
          margin: 0 auto;
        }

        .chart-box-main {
          background: #ffffff;
          border-radius: 32px; /* TAMAÑO MEDIO */
          padding: 32px; /* TAMAÑO MEDIO */
          border: 1px solid var(--gray-100);
          box-shadow: 0 40px 100px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
        }

        .chart-box-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px; /* MEDIO */
          position: relative;
        }

        .c-label { font-size: 0.75rem; font-weight: 700; color: var(--gray-400); text-transform: uppercase; letter-spacing: 0.05em; }
        .c-values { display: flex; align-items: baseline; gap: 10px; margin-top: 4px; }
        .c-val-main { font-size: 2rem; font-weight: 850; color: var(--gray-900); }
        .c-val-prev { font-size: 1rem; font-weight: 700; color: #10b981; }

        .c-legend { display: flex; gap: 16px; font-size: 0.75rem; font-weight: 700; color: var(--gray-500); }
        .dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 4px; }
        .d-blue { background: var(--primary); }
        .d-gray { background: var(--gray-300); }

        .c-body { margin-bottom: 24px; position: relative; }
        .c-svg { width: 100%; height: auto; overflow: visible; }

        .c-footer {
          display: flex;
          flex-direction: column;
          gap: 16px; /* MEDIO */
          position: relative;
        }

        .c-stat-item { display: flex; flex-direction: column; gap: 6px; }
        .c-s-info { display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 700; color: var(--gray-500); }
        .c-s-bar { width: 100%; height: 7px; background: var(--gray-100); border-radius: 20px; overflow: hidden; }
        .c-s-progress { height: 100%; border-radius: 20px; }

        /* Floating elements */
        .s-float {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border: 1px solid rgba(255, 255, 255, 0.6);
          z-index: 20;
          animation: s-float 6s ease-in-out infinite;
          color: var(--gray-800);
          white-space: nowrap;
        }

        .f-chip-1 { top: -15px; right: -25px; animation-delay: 0s; }
        .f-chip-2 { bottom: 50px; left: -50px; animation-delay: -2s; background: var(--primary); color: white; border: none; }
        .f-chip-3 { top: 60px; left: -100px; animation-delay: -4s; }
        .f-chip-4 { bottom: -10px; right: -10px; animation-delay: -1.5s; background: #8b5cf6; color: white; border: none; }

        @keyframes s-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }

        @media (max-width: 1024px) {
          .soluciones-grid { grid-template-columns: 1fr; gap: 80px; text-align: center; }
          .soluciones-left { max-width: 100%; padding-bottom: 0; }
          .feature-block { padding-left: 0; border-left: none; }
          .soluciones-actions { justify-content: center; }
          .section-title { font-size: 2.4rem; }
          .sticky-box-wrapper { position: static; margin-top: 40px; }
        }
      `}</style>
    </section>
  );
}
