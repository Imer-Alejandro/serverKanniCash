"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function AlcanceBento() {
  return (
    <section className="alcance-section" id="alcance">
      <div className="container">
        <ScrollReveal style={{ textAlign: "center", marginBottom: "80px" }}>
          <div className="section-label">Alcance y Potencial</div>
          <h2 className="section-title">Explora nuestros productos <em>clave</em></h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Kannicash se adapta a diferentes modelos de negocio financiero en el mercado dominicano, 
            brindando herramientas de nivel empresarial a todo escala.
          </p>
        </ScrollReveal>

        <div className="bento-grid-custom">
          {/* LARGE CENTER CARD */}
          <ScrollReveal className="bento-item bento-main" delay={100}>
            <div className="bento-icon-lg">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3>Gestión Centralizada</h3>
            <p>Control total de tu cartera desde un solo lugar. Seguridad, orden y eficiencia garantizados.</p>
          </ScrollReveal>

          {/* SECONDARY CARDS */}
          <ScrollReveal className="bento-item bento-sec-1" delay={200}>
            <div className="bento-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <h4>Prestamistas</h4>
            <p>Ideal para quienes gestionan capital propio.</p>
          </ScrollReveal>

          <ScrollReveal className="bento-item bento-sec-2" delay={300}>
            <div className="bento-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            </div>
            <h4>Financieras</h4>
            <p>Herramientas de nivel bancario para oficinas.</p>
          </ScrollReveal>

          <ScrollReveal className="bento-item bento-sec-3" delay={400}>
            <div className="bento-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            </div>
            <h4>Ventas a Cuotas</h4>
            <p>Gestión de cobros para tiendas y negocios.</p>
          </ScrollReveal>

          <ScrollReveal className="bento-item bento-sec-4" delay={500}>
            <div className="bento-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            </div>
            <h4>Reportes Real-Time</h4>
            <p>Estadísticas precisas de tu flujo de caja.</p>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .alcance-section {
          padding: 120px 24px;
          background: #f8fafc;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .bento-grid-custom {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 240px);
          gap: 24px;
        }

        .bento-item {
          background: #ffffff;
          border-radius: 32px;
          padding: 40px;
          border: 1px solid var(--gray-100);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
        }

        .bento-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.06);
          border-color: var(--primary-light);
        }

        .bento-main {
          grid-column: span 2;
          grid-row: span 2;
          justify-content: center;
          text-align: center;
          background: linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%);
        }

        .bento-main h3 {
          font-size: 2rem;
          font-weight: 850;
          color: var(--gray-900);
          margin-bottom: 16px;
        }

        .bento-main p {
          font-size: 1.1rem;
          color: var(--gray-500);
          max-width: 320px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .bento-icon-lg {
          margin-bottom: 32px;
          color: var(--primary);
          display: flex;
          justify-content: center;
        }

        .bento-icon {
          width: 44px;
          height: 44px;
          background: var(--primary-soft);
          color: var(--primary);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: auto;
        }

        .bento-item h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: 8px;
        }

        .bento-item p {
          font-size: 0.9rem;
          color: var(--gray-500);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .bento-grid-custom {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
          }
          .bento-main {
            grid-column: span 2;
            padding: 60px 40px;
          }
          .bento-item {
            height: 280px;
          }
        }

        @media (max-width: 600px) {
          .bento-grid-custom {
            grid-template-columns: 1fr;
          }
          .bento-main {
            grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
}
