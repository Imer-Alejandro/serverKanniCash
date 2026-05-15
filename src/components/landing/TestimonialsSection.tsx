"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const TESTIMONIALS_COL1 = [
  { name: "Pedro Martínez", role: "Inversionista", text: "Increíble aplicación, me ha facilitado la vida con el control de mis clientes y sus cuotas." },
  { name: "Luis García", role: "Prestamista Independiente", text: "El mejor software para prestamistas en RD. Muy intuitivo y profesional." },
  { name: "María Sánchez", role: "Financiera Familiar", text: "Seguridad y rapidez. Mis cobros están al día gracias a los recordatorios de Kannicash." },
  { name: "José Rodríguez", role: "Empresario", text: "Excelente soporte técnico y facilidad de uso. Lo recomiendo al 100%." },
];

const TESTIMONIALS_COL2 = [
  { name: "Ana Peralta", role: "Agente de Crédito", text: "Ya no uso libretas, todo lo tengo en mi celular y sincronizado en la nube. ¡Una joya!" },
  { name: "Carlos Tejada", role: "Gestor de Cartera", text: "La automatización de cuotas es lo mejor. Ahorro horas de trabajo manual cada semana." },
  { name: "Ramón Valdez", role: "Inversionista", text: "Transparencia total para mis clientes y para mí. Los reportes son muy detallados." },
  { name: "Elena Espinal", role: "Consultora", text: "La interfaz es limpia y moderna. Da mucha confianza a mis clientes cuando les muestro su balance." },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-content">
          <ScrollReveal>
            <div className="section-label">Testimonios</div>
            <h2 className="section-title">Lo que dicen <em>nuestros clientes</em></h2>
            <p className="section-sub">
              KanniCash ayuda a prestamistas y pequeños negocios a llevar un mejor control de sus préstamos, clientes y cobros desde una plataforma simple, accesible y diseñada para el trabajo diario.
            </p>

            <div className="testimonials-stats">
              <div className="t-stat">
                <span className="t-stat-num">100%</span>
                <span className="t-stat-label">Manejo eficiente</span>
              </div>
              <div className="t-stat">
                <span className="t-stat-num">100%</span>
                <span className="t-stat-label">Crecimiento escalable</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="testimonials-visual">
          <div className="testimonials-fade-overlay top"></div>
          <div className="testimonials-fade-overlay bottom"></div>

          <div className="t-grid">
            <div className="t-col t-col-1">
              <div className="t-track">
                {[...TESTIMONIALS_COL1, ...TESTIMONIALS_COL1].map((t, i) => (
                  <div key={i} className="t-card">
                    <div className="t-card-header">
                      <div className="t-avatar">{t.name[0]}</div>
                      <div>
                        <div className="t-name">{t.name}</div>
                        <div className="t-role">{t.role}</div>
                      </div>
                    </div>
                    <p className="t-text">"{t.text}"</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="t-col t-col-2">
              <div className="t-track reverse">
                {[...TESTIMONIALS_COL2, ...TESTIMONIALS_COL2].map((t, i) => (
                  <div key={i} className="t-card">
                    <div className="t-card-header">
                      <div className="t-avatar" style={{ background: 'var(--accent)', color: 'var(--gray-900)' }}>{t.name[0]}</div>
                      <div>
                        <div className="t-name">{t.name}</div>
                        <div className="t-role">{t.role}</div>
                      </div>
                    </div>
                    <p className="t-text">"{t.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 120px 60px;
          background: #f8fafc;
          overflow: hidden;
          position: relative;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .testimonials-content {
          max-width: 500px;
        }

        .testimonials-stats {
          display: flex;
          gap: 40px;
          margin-top: 48px;
        }

        .t-stat {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .t-stat-num {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--gray-900);
          letter-spacing: -0.04em;
        }

        .t-stat-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--gray-500);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .testimonials-visual {
          position: relative;
          height: 600px;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
        }

        .t-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          height: 100%;
        }

        .t-col {
          height: 100%;
          position: relative;
        }

        .t-track {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: scroll-vertical 30s linear infinite;
        }

        .t-track.reverse {
          animation: scroll-vertical-reverse 35s linear infinite;
        }

        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @keyframes scroll-vertical-reverse {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        .t-card {
          background: white;
          padding: 28px;
          border-radius: 24px;
          border: 1px solid var(--gray-100);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          transition: transform 0.3s ease;
        }

        .t-card:hover {
          transform: scale(1.02);
          border-color: var(--primary-light);
        }

        .t-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .t-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
        }

        .t-name {
          font-size: 1rem;
          font-weight: 800;
          color: var(--gray-900);
        }

        .t-role {
          font-size: 0.8rem;
          color: var(--gray-500);
          font-weight: 600;
        }

        .t-text {
          font-size: 0.95rem;
          color: var(--gray-600);
          line-height: 1.6;
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .testimonials-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .testimonials-content {
            max-width: 100%;
            text-align: center;
          }
          .testimonials-stats {
            justify-content: center;
          }
          .testimonials-visual {
            height: 500px;
          }
        }

        @media (max-width: 600px) {
          .testimonials-section {
            padding: 80px 24px;
          }
          .t-grid {
            grid-template-columns: 1fr;
          }
          .t-col-2 {
            display: none;
          }
          .t-stat-num {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
