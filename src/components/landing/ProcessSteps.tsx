"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    title: "Registro Cliente",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
    ),
    className: "b-item b-small b-pos-1"
  },
  {
    title: "Asignar Préstamos",
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
    ),
    className: "b-item b-large b-pos-2"
  },
  {
    title: "Calcular Cuotas",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
    ),
    className: "b-item b-small b-pos-3"
  },
  {
    title: "Recibos Digitales",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
    ),
    className: "b-item b-small b-pos-4"
  },
  {
    title: "Trabajo Colaborativo",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    ),
    className: "b-item b-medium b-pos-5"
  },
];

export default function ProcessSteps() {
  return (
    <section className="bento-section" id="caracteristicas">
      {/* Background Elements */}
      <div className="bg-grid"></div>
      <div className="smoke smoke-1"></div>
      <div className="smoke smoke-2"></div>

      <div className="container relative z-10">
        <div className="bento-header">
          <ScrollReveal style={{ textAlign: "center", marginBottom: "60px" }}>
            <div className="section-label">Características</div>
            <h2 className="section-title">Explora nuestras características principales</h2>
            <p className="section-sub" style={{ margin: "0 auto", maxWidth: "600px" }}>
              Kannicash automatiza las tareas operativas de tu negocio financiero para que puedas escalar tu cartera de clientes de forma segura.
            </p>
          </ScrollReveal>
        </div>

        <div className="bento-cluster">
          {FEATURES.map((feat, idx) => (
            <ScrollReveal key={idx} delay={idx * 80} className={feat.className}>
              <div className="b-icon">{feat.icon}</div>
              <h3 className="b-title">{feat.title}</h3>
            </ScrollReveal>
          ))}

          {/* Pequeño texto descriptivo y botón + como en el ejemplo */}
          <ScrollReveal delay={500} className="b-bottom-row b-pos-6">
            <a href="/demostracion" className="b-plus-btn">
              <span>+</span>
            </a>
            <div className="b-item b-text-card-content">
              <p>Automatiza tareas repetitivas y mantén el control absoluto de tus finanzas en un solo lugar.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .bento-section {
          padding: 140px 24px;
          background: #fdfdfd;
          position: relative;
          overflow: hidden;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 50px 50px;
          z-index: 0;
        }

        .smoke {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          z-index: 0;
          pointer-events: none;
        }

        .smoke-1 {
          top: 10%;
          left: 15%;
          width: 500px;
          height: 500px;
          background: var(--primary);
          opacity: 0.08;
        }

        .smoke-2 {
          bottom: 10%;
          right: 15%;
          width: 600px;
          height: 600px;
          background: #8b5cf6;
          opacity: 0.08;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .bento-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .section-label {
          display: inline-block;
          color: var(--primary);
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 16px;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 850;
          color: var(--gray-900);
          margin-bottom: 20px;
          letter-spacing: -0.04em;
          line-height: 1.15;
        }

        .section-sub {
          font-size: 1.1rem;
          color: var(--gray-500);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .bento-cluster {
          display: grid;
          grid-template-columns: 1fr 1.15fr 1fr;
          grid-template-rows: auto auto auto;
          gap: 28px;
          max-width: 920px;
          margin: 0 auto;
          align-items: start;
        }

        /* Base Card Styling using global to override ScrollReveal wrapper */
        .bento-cluster :global(.b-item) {
          background: #ffffff;
          border-radius: 32px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 15px 35px -5px rgba(0,0,0,0.03), 0 5px 15px -5px rgba(0,0,0,0.01);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 28px;
          position: relative;
          width: 100%;
          box-sizing: border-box;
          transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        /* Specific card variants */
        .bento-cluster :global(.b-small) {
          height: 180px;
        }

        .bento-cluster :global(.b-medium) {
          height: 210px;
        }

        .bento-cluster :global(.b-large) {
          height: 285px;
          border-radius: 40px;
          padding: 40px 32px;
          border-color: rgba(226, 232, 240, 0.9);
        }

        /* Positioning & Columns Offsets (to match image organic flow) */
        .bento-cluster :global(.b-pos-1) {
          grid-column: 1;
          grid-row: 1;
          animation: float-col-1-top 9s ease-in-out infinite;
          --hover-translate: 33px;
        }

        .bento-cluster :global(.b-pos-4) {
          grid-column: 1;
          grid-row: 2;
          animation: float-col-1-mid 9.5s ease-in-out infinite;
          --hover-translate: 33px;
        }

        .bento-cluster :global(.b-pos-7) {
          grid-column: 1;
          grid-row: 3;
          animation: float-col-1-bot 10s ease-in-out infinite;
          --hover-translate: 33px;
        }

        .bento-cluster :global(.b-pos-2) {
          grid-column: 2;
          grid-row: 1 / 3;
          animation: float-col-2 8s ease-in-out infinite;
          --hover-translate: -12px;
        }

        .bento-cluster :global(.b-pos-6) {
          grid-column: 2;
          grid-row: 3;
          width: 100%;
        }

        .bento-cluster :global(.b-pos-3) {
          grid-column: 3;
          grid-row: 1;
          height: 150px;
          animation: float-col-3-top 9.2s ease-in-out infinite;
          --hover-translate: 8px;
        }

        .bento-cluster :global(.b-pos-5) {
          grid-column: 3;
          grid-row: 2;
          animation: float-col-3-mid 9.7s ease-in-out infinite;
          --hover-translate: 8px;
        }

        .bento-cluster :global(.b-pos-8) {
          grid-column: 3;
          grid-row: 3;
          animation: float-col-3-bot 10.2s ease-in-out infinite;
          --hover-translate: 8px;
        }

        /* Hover animation overlays with smooth exit */
        .bento-cluster :global(.b-item:hover) {
          transform: translateY(var(--hover-translate, 0px)) scale(1.03) !important;
          box-shadow: 0 30px 60px -10px rgba(0,0,0,0.08), 0 10px 20px -5px rgba(0,0,0,0.02);
          border-color: rgba(139, 92, 246, 0.25);
          z-index: 10;
        }

        /* Icons and Titles */
        .bento-cluster :global(.b-icon) {
          color: var(--gray-700);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .bento-cluster :global(.b-item:hover .b-icon) {
          transform: scale(1.1);
        }

        .bento-cluster :global(.b-title) {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--gray-800);
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* Large Card specific details */
        .bento-cluster :global(.b-large .b-icon) {
          color: var(--primary);
          margin-bottom: 24px;
        }

        .bento-cluster :global(.b-large .b-title) {
          font-size: 1.35rem;
          font-weight: 850;
          color: var(--gray-900);
          letter-spacing: -0.02em;
        }

        /* Bottom Row containing Plus button and Text card */
        .bento-cluster :global(.b-bottom-row) {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          box-sizing: border-box;
        }

        .bento-cluster :global(.b-plus-btn) {
          width: 48px;
          height: 48px;
          background: #ffffff;
          border-radius: 50%;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 10px 25px rgba(0,0,0,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gray-500);
          font-size: 1.45rem;
          font-weight: 300;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          flex-shrink: 0;
          cursor: pointer;
          text-decoration: none;
        }

        .bento-cluster :global(.b-plus-btn:hover) {
          transform: scale(1.12) rotate(90deg);
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: 0 12px 30px rgba(139, 92, 246, 0.15);
        }

        .bento-cluster :global(.b-text-card-content) {
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.6);
          border-radius: 24px;
          padding: 16px 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.01);
          text-align: left;
          flex-grow: 1;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          height: auto !important;
          display: block;
        }

        .bento-cluster :global(.b-text-card-content:hover) {
          border-color: rgba(226, 232, 240, 0.9);
          background: #f1f5f9;
        }

        .bento-cluster :global(.b-text-card-content p) {
          margin: 0;
          font-size: 0.82rem;
          color: var(--gray-500);
          line-height: 1.55;
          font-weight: 550;
        }

        /* Staggered Floating Animations per Column/Position to maintain translations and ensure extreme smoothness */
        @keyframes float-col-1-top {
          0%, 100% { transform: translateY(45px); }
          50% { transform: translateY(33px); }
        }
        @keyframes float-col-1-mid {
          0%, 100% { transform: translateY(45px); }
          50% { transform: translateY(37px); }
        }
        @keyframes float-col-1-bot {
          0%, 100% { transform: translateY(45px); }
          50% { transform: translateY(35px); }
        }
        @keyframes float-col-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-col-3-top {
          0%, 100% { transform: translateY(20px); }
          50% { transform: translateY(8px); }
        }
        @keyframes float-col-3-mid {
          0%, 100% { transform: translateY(20px); }
          50% { transform: translateY(12px); }
        }
        @keyframes float-col-3-bot {
          0%, 100% { transform: translateY(20px); }
          50% { transform: translateY(10px); }
        }

        @keyframes float-mobile {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        /* Responsive Layouts */
        @media (max-width: 900px) {
          .bento-cluster {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            max-width: 700px;
          }

          .bento-cluster :global(.b-pos-1),
          .bento-cluster :global(.b-pos-2),
          .bento-cluster :global(.b-pos-3),
          .bento-cluster :global(.b-pos-4),
          .bento-cluster :global(.b-pos-5),
          .bento-cluster :global(.b-pos-6),
          .bento-cluster :global(.b-pos-7),
          .bento-cluster :global(.b-pos-8) {
            grid-column: auto !important;
            grid-row: auto !important;
            transform: none !important;
            animation: float-mobile 6s ease-in-out infinite !important;
          }

          .bento-cluster :global(.b-pos-2) {
            grid-column: span 2 !important;
          }

          .bento-cluster :global(.b-pos-6) {
            grid-column: span 2 !important;
          }
          
          .bento-cluster :global(.b-item:hover) {
            transform: translateY(-8px) scale(1.02) !important;
          }
        }

        @media (max-width: 600px) {
          .section-title {
            font-size: 2.2rem;
          }
          
          .bento-section {
            padding: 100px 16px;
          }
        }

        @media (max-width: 480px) {
          .bento-cluster {
            grid-template-columns: 1fr;
          }

          .bento-cluster :global(.b-pos-2),
          .bento-cluster :global(.b-pos-6) {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
