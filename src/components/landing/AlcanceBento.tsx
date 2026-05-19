"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function AlcanceBento() {
  return (
    <section className="alcance-section" id="alcance">
      <div className="container">
        <ScrollReveal style={{ textAlign: "center", marginBottom: "60px" }}>
          <div className="section-label">Modelos de Negocio</div>
          <h2 className="section-title">Diseñado para tu forma de <em>cobrar</em></h2>
          <p className="section-sub" style={{ margin: "0 auto", maxWidth: "600px" }}>
            Kannicash se adapta con precisión a diferentes modelos de negocio financiero, brindando herramientas puntuales para optimizar tu flujo de caja de inmediato.
          </p>
        </ScrollReveal>

        <div className="business-grid">
          {/* CARD 1: PRESTAMISTAS */}
          <ScrollReveal className="card-business border-purple" delay={100}>
            <div className="card-header">
              <div className="icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  <path d="M12 6v6"></path>
                  <circle cx="12" cy="9" r="2"></circle>
                </svg>
              </div>
              <div className="header-info">
                <h3>Prestamistas</h3>
              </div>
            </div>
            
            <p>Controla tus préstamos personales, cobros diarios o semanales, cálculo automático de intereses y mora en tiempo real.</p>
            
            <ul className="check-list">
              <li>
                <span className="check-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Cobros diarios, semanales o quincenales
              </li>
              <li>
                <span className="check-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Interés simple y compuesto automático
              </li>
              <li>
                <span className="check-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Generación rápida de recibos de pago
              </li>
            </ul>
          </ScrollReveal>

          {/* CARD 2: VENTAS A CRÉDITO */}
          <ScrollReveal className="card-business border-emerald" delay={200}>
            <div className="card-header">
              <div className="icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                  <path d="M3 6h18"></path>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <div className="header-info">
                <h3>Ventas a Crédito</h3>
              </div>
            </div>
            
            <p>Ideal para tiendas de ropa, electrodomésticos y servicios que venden a plazos y necesitan un cobro recurrente.</p>
            
            <ul className="check-list">
              <li>
                <span className="check-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Registro rápido de abonos y saldos
              </li>
              <li>
                <span className="check-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Cálculo del saldo pendiente al instante
              </li>
              <li>
                <span className="check-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Control simple de cuentas por cobrar
              </li>
            </ul>
          </ScrollReveal>

          {/* CARD 3: FINANCIERAS Y COOPERATIVAS */}
          <ScrollReveal className="card-business border-blue" delay={300}>
            <div className="card-header">
              <div className="icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18"></path>
                  <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3"></path>
                  <path d="M4 21V10h16v11"></path>
                </svg>
              </div>
              <div className="header-info">
                <h3>Financieras</h3>
              </div>
            </div>
            
            <p>Para oficinas y equipos que administran carteras de microcréditos de mediana escala de manera organizada.</p>
            
            <ul className="check-list">
              <li>
                <span className="check-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Múltiples cobradores con roles y permisos
              </li>
              <li>
                <span className="check-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Control de préstamos activos de la cartera
              </li>
              <li>
                <span className="check-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Reportes avanzados de ganancias y flujo
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </div>

      <style jsx>{`
        .alcance-section {
          padding: 140px 24px;
          background: #f8fafc;
          position: relative;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
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
        }

        .business-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 60px;
        }

        /* Scoped style overriding using :global wrapper because of ScrollReveal custom component wrapper */
        .business-grid :global(.card-business) {
          border-radius: 32px;
          padding: 44px 36px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 15px 35px -5px rgba(0,0,0,0.02), 0 5px 15px -5px rgba(0,0,0,0.01);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          text-align: left;
          transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          overflow: hidden;
          z-index: 1;
        }

        /* Curated dynamic gradient backgrounds */
        .business-grid :global(.card-business.border-purple) {
          background: linear-gradient(180deg, #ffffff 50%, #faf5ff 100%);
        }

        .business-grid :global(.card-business.border-emerald) {
          background: linear-gradient(180deg, #ffffff 50%, #f0fdf4 100%);
        }

        .business-grid :global(.card-business.border-blue) {
          background: linear-gradient(180deg, #ffffff 50%, #eff6ff 100%);
        }

        /* Organic colorful smoke/fog gradient bleeding from the top center */
        .business-grid :global(.card-business)::before {
          content: "";
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 100px;
          filter: blur(24px);
          opacity: 0.55;
          z-index: 0;
          pointer-events: none;
          transition: opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .business-grid :global(.card-business.border-purple)::before {
          background: radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.35) 0%, rgba(139, 92, 246, 0) 70%);
        }

        .business-grid :global(.card-business.border-emerald)::before {
          background: radial-gradient(circle at 50% 0%, rgba(16, 185, 129, 0.35) 0%, rgba(16, 185, 129, 0) 70%);
        }

        .business-grid :global(.card-business.border-blue)::before {
          background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0) 70%);
        }

        /* Softly enhance smoke glow on card hover */
        .business-grid :global(.card-business:hover)::before {
          opacity: 0.85;
        }

        /* Glowing radial mesh orbs inside cards (top right corner) */
        .business-grid :global(.card-business)::after {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.04;
          z-index: 0;
          top: -30px;
          right: -30px;
          transition: all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
          pointer-events: none;
        }

        .business-grid :global(.card-business.border-purple)::after { background: #8b5cf6; }
        .business-grid :global(.card-business.border-emerald)::after { background: #10b981; }
        .business-grid :global(.card-business.border-blue)::after { background: #3b82f6; }

        /* Hover animations and color-matched glowing shadows */
        .business-grid :global(.card-business.border-purple:hover) {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 35px 70px -10px rgba(139, 92, 246, 0.12), 0 10px 25px -5px rgba(139, 92, 246, 0.04);
          border-color: rgba(139, 92, 246, 0.25);
        }

        .business-grid :global(.card-business.border-emerald:hover) {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 35px 70px -10px rgba(16, 185, 129, 0.12), 0 10px 25px -5px rgba(16, 185, 129, 0.04);
          border-color: rgba(16, 185, 129, 0.25);
        }

        .business-grid :global(.card-business.border-blue:hover) {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 35px 70px -10px rgba(59, 130, 246, 0.12), 0 10px 25px -5px rgba(59, 130, 246, 0.04);
          border-color: rgba(59, 130, 246, 0.25);
        }

        .business-grid :global(.card-business:hover)::after {
          opacity: 0.14;
          transform: scale(1.4) translate(-10px, 10px);
        }

        /* Horizontal card header layout */
        .business-grid :global(.card-business) .card-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          z-index: 2;
        }

        .business-grid :global(.card-business) .header-info {
          display: flex;
          flex-direction: column;
        }

        /* Icon wrapper in horizontal header */
        .business-grid :global(.card-business) .icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0;
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          z-index: 2;
          flex-shrink: 0;
        }

        .business-grid :global(.card-business:hover) .icon-wrap {
          transform: scale(1.1) rotate(2deg);
        }

        .business-grid :global(.card-business.border-purple) .icon-wrap {
          background: rgba(139, 92, 246, 0.05);
          color: #8b5cf6;
        }

        .business-grid :global(.card-business.border-emerald) .icon-wrap {
          background: rgba(16, 185, 129, 0.05);
          color: #10b981;
        }

        .business-grid :global(.card-business.border-blue) .icon-wrap {
          background: rgba(59, 130, 246, 0.05);
          color: #3b82f6;
        }

        /* Titles and descriptions */
        .business-grid :global(.card-business) h3 {
          font-size: 1.45rem;
          font-weight: 850;
          color: var(--gray-900);
          margin: 0;
          letter-spacing: -0.02em;
          z-index: 2;
          line-height: 1.1;
        }

        .business-grid :global(.card-business) p {
          font-size: 0.92rem;
          color: var(--gray-500);
          line-height: 1.6;
          margin: 0 0 28px 0;
          font-weight: 550;
          flex-grow: 1;
          z-index: 2;
        }

        /* Quick check bullet list */
        .business-grid :global(.card-business) .check-list {
          list-style: none;
          padding: 24px 0 0 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
          border-top: 1px solid rgba(226, 232, 240, 0.7);
          z-index: 2;
        }

        .business-grid :global(.card-business) .check-list li {
          font-size: 0.86rem;
          color: var(--gray-700);
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          line-height: 1.4;
        }

        /* Colored check badges */
        .business-grid :global(.card-business) .check-badge {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .business-grid :global(.card-business:hover) .check-badge {
          transform: scale(1.15);
        }

        .business-grid :global(.card-business.border-purple) .check-badge {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
        }

        .business-grid :global(.card-business.border-emerald) .check-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .business-grid :global(.card-business.border-blue) .check-badge {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          .business-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            max-width: 500px;
            margin: 50px auto 0;
          }
          
          .business-grid :global(.card-business) {
            padding: 36px 30px;
          }
        }

        @media (max-width: 600px) {
          .section-title {
            font-size: 2.2rem;
          }
          
          .alcance-section {
            padding: 100px 16px;
          }
        }
      `}</style>
    </section>
  );
}
