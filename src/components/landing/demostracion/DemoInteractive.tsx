"use client";

import React from "react";
import HeroShowcase from "./HeroShowcase";

export default function DemoInteractive() {
  return (
    <div className="landing-wrapper demo-page">
      <HeroShowcase />

      <section className="demo-features" id="how-it-works">
        <div className="section-intro">
          <span className="section-label">Cómo funciona</span>
          <h2>Una herramienta diseñada para tu flujo de trabajo.</h2>
          <p>
            Kannicash organiza el registro de préstamos, cálculos automáticos de cuotas, cobros y seguimiento en un flujo natural y moderno.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon feature-icon--blue">1</div>
            <h3>Registro rápido</h3>
            <p>Ingresa los datos del cliente y préstamo en segundos. Campos simples y explicaciones claras.</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon feature-icon--purple">2</div>
            <h3>Cálculo automático</h3>
            <p>La cuota mensual, interés y total a pagar se generan automáticamente. Exactitud al instante.</p>
          </article>

          <article className="feature-card">
            <div className="feature-icon feature-icon--green">3</div>
            <h3>Seguimiento en tiempo real</h3>
            <p>Agenda de cobros, estado de clientes y alertas de vencimiento. Todo visible de una mirada.</p>
          </article>
        </div>
      </section>

      <style jsx>{`
        .demo-page {
          background: linear-gradient(180deg, #f5f9ff 0%, #f8fbff 45%, #ffffff 100%);
        }

        .demo-features {
          padding: 80px 60px;
          max-width: 1180px;
          margin: 0 auto;
        }

        .section-intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
        }

        .section-label {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(22, 117, 161, 0.12);
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.78rem;
          margin-bottom: 18px;
        }

        .section-intro h2 {
          font-size: clamp(2rem, 2.5vw, 2.8rem);
          margin: 0 auto 16px;
          line-height: 1.12;
          color: var(--gray-900);
        }

        .section-intro p {
          color: var(--gray-600);
          line-height: 1.8;
          margin: 0;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(15, 23, 42, 0.08);
          border-radius: 28px;
          padding: 32px;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.06);
          display: grid;
          gap: 18px;
        }

        .feature-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          font-weight: 800;
          color: white;
          font-size: 1rem;
        }

        .feature-icon--blue {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
        }

        .feature-icon--purple {
          background: linear-gradient(135deg, #8b5cf6, #c084fc);
        }

        .feature-icon--green {
          background: linear-gradient(135deg, #10b981, #5eead4);
        }

        .feature-card h3 {
          font-size: 1.1rem;
          color: var(--gray-900);
          margin: 0;
        }

        .feature-card p {
          color: var(--gray-600);
          line-height: 1.8;
          margin: 0;
        }

        @media (max-width: 1100px) {
          .demo-features {
            padding: 60px 32px;
          }
        }

        @media (max-width: 768px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .demo-features {
            padding: 60px 24px;
          }
        }
      `}</style>
    </div>
  );
}
