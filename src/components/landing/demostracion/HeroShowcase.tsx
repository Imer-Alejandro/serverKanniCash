"use client";

import React, { useEffect, useRef } from "react";

export default function HeroShowcase() {
  const dashCardRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll < window.innerHeight) {
        if (gridRef.current) gridRef.current.style.transform = `translateY(${scroll * 0.25}px)`;
        if (blobsRef.current) blobsRef.current.style.transform = `translateY(${scroll * 0.4}px)`;
        if (contentRef.current) contentRef.current.style.transform = `translateY(${scroll * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="demo-hero">
      {/* Background Aesthetics Matching Home Page */}
      <div className="demo-hero-grid" ref={gridRef} aria-hidden="true" />
      <div className="demo-hero-blobs" ref={blobsRef} aria-hidden="true">
        <div className="demo-blob demo-blob-1" />
        <div className="demo-blob demo-blob-2" />
        <div className="demo-blob demo-blob-3" />
      </div>

      <div className="particles-container" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`particle particle-${i}`} />
        ))}
      </div>

      <div className="demo-hero-container">
        {/* Left Column: Premium content text */}
        <div className="demo-hero-copy" ref={contentRef}>
          <div className="demo-hero-badge">
            <span className="badge-pulse" /> 🚀 Demostración en vivo
          </div>

          <h1 className="demo-hero-title">
            Gestiona tus
            <br />
            préstamos con
            <br />
            <span className="demo-hero-brand">
              <span className="brand-kanni">Kanni</span>
              <em className="brand-cash">cash</em>
            </span>
          </h1>

          <p className="demo-hero-subtitle">
            Mira cómo registras clientes, calculas cuotas automáticamente y haces seguimiento de cobros en un flujo simple, moderno y adaptado al mercado dominicano.
          </p>

          <div className="demo-hero-actions">
            <a href="/precios" className="demo-btn demo-btn-primary">
              Empezar gratis
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="demo-hero-ratings">
            <div className="rating-item">
              <div className="rating-value">4.7</div>
              <div className="rating-label">Valoración de uso</div>
            </div>
            <div className="rating-divider" />
            <div className="rating-item">
              <div className="rating-value">4.8</div>
              <div className="rating-label">Satisfacción soporte</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive visual showcase with 3 rows & blur overlays */}
        <div className="demo-hero-visual" aria-hidden="true">
          <div className="visual-surface">
            <div className="surface-grid" />
            
            {/* Capas de difuminado (glassmorphism/blur) en los 4 bordes para ocultar gradualmente */}
            <div className="surface-overlay surface-overlay--top" />
            <div className="surface-overlay surface-overlay--bottom" />
            <div className="surface-overlay surface-overlay--left" />
            <div className="surface-overlay surface-overlay--right" />

            <div className="ui-marquee" aria-hidden="true">
              
              {/* FILA 1: Top (Scroll normal - Izquierda) */}
              <div className="ui-track ui-track--top">
                <div className="ui-stack">
                  
                  {/* Card 1: Stats */}
                  <div className="ui-card ui-card--stats">
                    <div className="ui-tabs">
                      <span className="ui-tab active">MENSUAL</span>
                      <span className="ui-tab">SEMANAL</span>
                    </div>
                    <div className="ui-stat-body">
                      <div className="ui-stat-label">TOTAL PRESTADO</div>
                      <div className="ui-stat-value">RD$ 2,384,000.00</div>
                      <div className="ui-stat-sub">+2.8% vs período anterior</div>
                    </div>
                  </div>

                  {/* Card 2: Notification / Recordatorio */}
                  <div className="ui-card ui-card--notification">
                    <div className="noti-header">
                      <div className="noti-icon">🔔</div>
                      <div className="noti-meta">
                        <span className="noti-title">Recordatorio Enviado</span>
                        <span className="noti-time">Hace 2 min</span>
                      </div>
                    </div>
                    <p className="noti-text">Se envió la plantilla de cobro automático a <strong>Carlos Gómez</strong> vía WhatsApp.</p>
                    <span className="noti-badge">WHATSAPP</span>
                  </div>

                  {/* Card 3: Summary */}
                  <div className="ui-card ui-card--summary">
                    <div className="sum-top">
                      <div className="sum-title">RESUMEN DE CARTERA</div>
                      <div className="sum-chip">AL DÍA</div>
                    </div>
                    <div className="sum-grid">
                      <div className="sum-kpi">
                        <span>TOTAL</span>
                        <strong>28</strong>
                      </div>
                      <div className="sum-kpi">
                        <span>EN MORA</span>
                        <strong className="bad">0</strong>
                      </div>
                      <div className="sum-kpi">
                        <span>AL DÍA</span>
                        <strong className="ok">28</strong>
                      </div>
                    </div>
                    <div className="sum-foot">
                      <span>CRÉDITO ACTIVO</span>
                      <strong>RD$ 342,000.00</strong>
                    </div>
                  </div>

                </div>

                {/* Duplicado Fila 1 para loop infinito fluido */}
                <div className="ui-stack" aria-hidden="true">
                  <div className="ui-card ui-card--stats">
                    <div className="ui-tabs">
                      <span className="ui-tab active">MENSUAL</span>
                      <span className="ui-tab">SEMANAL</span>
                    </div>
                    <div className="ui-stat-body">
                      <div className="ui-stat-label">TOTAL PRESTADO</div>
                      <div className="ui-stat-value">RD$ 2,384,000.00</div>
                      <div className="ui-stat-sub">+2.8% vs período anterior</div>
                    </div>
                  </div>

                  <div className="ui-card ui-card--notification">
                    <div className="noti-header">
                      <div className="noti-icon">🔔</div>
                      <div className="noti-meta">
                        <span className="noti-title">Recordatorio Enviado</span>
                        <span className="noti-time">Hace 2 min</span>
                      </div>
                    </div>
                    <p className="noti-text">Se envió la plantilla de cobro automático a <strong>Carlos Gómez</strong> vía WhatsApp.</p>
                    <span className="noti-badge">WHATSAPP</span>
                  </div>

                  <div className="ui-card ui-card--summary">
                    <div className="sum-top">
                      <div className="sum-title">RESUMEN DE CARTERA</div>
                      <div className="sum-chip">AL DÍA</div>
                    </div>
                    <div className="sum-grid">
                      <div className="sum-kpi">
                        <span>TOTAL</span>
                        <strong>28</strong>
                      </div>
                      <div className="sum-kpi">
                        <span>EN MORA</span>
                        <strong className="bad">0</strong>
                      </div>
                      <div className="sum-kpi">
                        <span>AL DÍA</span>
                        <strong className="ok">28</strong>
                      </div>
                    </div>
                    <div className="sum-foot">
                      <span>CRÉDITO ACTIVO</span>
                      <strong>RD$ 342,000.00</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* FILA 2: Middle (Scroll inverso - Derecha) */}
              <div className="ui-track ui-track--middle ui-track--reverse">
                <div className="ui-stack">

                  {/* Card 4: Loan Calculator */}
                  <div className="ui-card ui-card--calculator">
                    <div className="calc-header">
                      <span className="calc-title">CALCULADORA DE PRÉSTAMOS</span>
                      <span className="calc-badge">20% INTERÉS</span>
                    </div>
                    <div className="calc-row">
                      <div className="calc-item">
                        <span>Monto</span>
                        <strong>RD$ 20,000.00</strong>
                      </div>
                      <div className="calc-item">
                        <span>Cuotas</span>
                        <strong>4 Quincenales</strong>
                      </div>
                    </div>
                    <div className="calc-result">
                      <span>CUOTA ESTIMADA</span>
                      <strong>RD$ 6,000.00 / cuota</strong>
                    </div>
                  </div>

                  {/* Card 5: Clients List */}
                  <div className="ui-card ui-card--clients">
                    <div className="sum-top">
                      <div className="sum-title">MIS CLIENTES</div>
                      <div className="sum-chip">ACTIVOS</div>
                    </div>
                    <div className="mini-client">
                      <div className="mini-avatar">AM</div>
                      <div className="mini-main">
                        <div className="mini-title">Ana María Encarnación</div>
                        <div className="mini-sub">Cédula • 001-1823941-2</div>
                      </div>
                      <div className="mini-tag">AL DÍA</div>
                    </div>
                    <div className="mini-client">
                      <div className="mini-avatar">JP</div>
                      <div className="mini-main">
                        <div className="mini-title">Juan Pérez Martínez</div>
                        <div className="mini-sub">Cédula • 223-0012932-1</div>
                      </div>
                      <div className="mini-tag mini-tag--warn">HOY</div>
                    </div>
                  </div>

                  {/* Card 6: Detailed Progress Card */}
                  <div className="ui-card ui-card--progress">
                    <div className="progress-header">
                      <div className="progress-info">
                        <span className="progress-title">Préstamo Activo #1042</span>
                        <span className="progress-client">Pedro Santana</span>
                      </div>
                      <div className="progress-percentage">80%</div>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: "80%" }} />
                    </div>
                    <div className="progress-footer">
                      <span>Restan: RD$ 2,000.00</span>
                      <span>Total: RD$ 10,000.00</span>
                    </div>
                  </div>

                </div>

                {/* Duplicado Fila 2 para loop infinito fluido */}
                <div className="ui-stack" aria-hidden="true">
                  <div className="ui-card ui-card--calculator">
                    <div className="calc-header">
                      <span className="calc-title">CALCULADORA DE PRÉSTAMOS</span>
                      <span className="calc-badge">20% INTERÉS</span>
                    </div>
                    <div className="calc-row">
                      <div className="calc-item">
                        <span>Monto</span>
                        <strong>RD$ 20,000.00</strong>
                      </div>
                      <div className="calc-item">
                        <span>Cuotas</span>
                        <strong>4 Quincenales</strong>
                      </div>
                    </div>
                    <div className="calc-result">
                      <span>CUOTA ESTIMADA</span>
                      <strong>RD$ 6,000.00 / cuota</strong>
                    </div>
                  </div>

                  <div className="ui-card ui-card--clients">
                    <div className="sum-top">
                      <div className="sum-title">MIS CLIENTES</div>
                      <div className="sum-chip">ACTIVOS</div>
                    </div>
                    <div className="mini-client">
                      <div className="mini-avatar">AM</div>
                      <div className="mini-main">
                        <div className="mini-title">Ana María Encarnación</div>
                        <div className="mini-sub">Cédula • 001-1823941-2</div>
                      </div>
                      <div className="mini-tag">AL DÍA</div>
                    </div>
                    <div className="mini-client">
                      <div className="mini-avatar">JP</div>
                      <div className="mini-main">
                        <div className="mini-title">Juan Pérez Martínez</div>
                        <div className="mini-sub">Cédula • 223-0012932-1</div>
                      </div>
                      <div className="mini-tag mini-tag--warn">HOY</div>
                    </div>
                  </div>

                  <div className="ui-card ui-card--progress">
                    <div className="progress-header">
                      <div className="progress-info">
                        <span className="progress-title">Préstamo Activo #1042</span>
                        <span className="progress-client">Pedro Santana</span>
                      </div>
                      <div className="progress-percentage">80%</div>
                    </div>
                    <div className="progress-bar-container">
                      <div className="progress-bar-fill" style={{ width: "80%" }} />
                    </div>
                    <div className="progress-footer">
                      <span>Restan: RD$ 2,000.00</span>
                      <span>Total: RD$ 10,000.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FILA 3: Bottom (Scroll normal - Izquierda) */}
              <div className="ui-track ui-track--bottom">
                <div className="ui-stack">

                  {/* Card 7: Export actions */}
                  <div className="ui-card ui-card--export">
                    <div className="ui-row">
                      <div className="ui-ico blue" />
                      <div className="ui-row-main">
                        <div className="ui-row-title">Exportar Clientes</div>
                        <div className="ui-row-sub">Formato Excel y PDF</div>
                      </div>
                      <div className="ui-chevron">›</div>
                    </div>
                    <div className="ui-row">
                      <div className="ui-ico green" />
                      <div className="ui-row-main">
                        <div className="ui-row-title">Generar Pagaré Notarial</div>
                        <div className="ui-row-sub">Documento legal firmado</div>
                      </div>
                      <div className="ui-chevron">›</div>
                    </div>
                  </div>

                  {/* Card 8: Recent Transactions Feed */}
                  <div className="ui-card ui-card--transactions">
                    <div className="trans-header">
                      <span className="trans-title">ABONOS RECIENTES</span>
                      <span className="trans-count">HOY</span>
                    </div>
                    <div className="trans-list">
                      <div className="trans-item">
                        <div className="trans-dot green" />
                        <div className="trans-info">
                          <span className="trans-name">Ramón Abreu</span>
                          <span className="trans-sub">Cuota 3 de 6</span>
                        </div>
                        <span className="trans-amount">+RD$ 3,500</span>
                      </div>
                      <div className="trans-item">
                        <div className="trans-dot green" />
                        <div className="trans-info">
                          <span className="trans-name">Lucía Santos</span>
                          <span className="trans-sub">Cuota 1 de 4</span>
                        </div>
                        <span className="trans-amount">+RD$ 5,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 9: Interests Metric */}
                  <div className="ui-card ui-card--stats ui-card--revenue">
                    <div className="ui-tabs">
                      <span className="ui-tab active">RENDIMIENTO</span>
                    </div>
                    <div className="ui-stat-body" style={{ background: "linear-gradient(135deg, #0d5073, #083c58)" }}>
                      <div className="ui-stat-label">INTERESES PROYECTADOS</div>
                      <div className="ui-stat-value" style={{ color: "#22d3ee" }}>RD$ 476,800.00</div>
                      <div className="ui-stat-sub">Margen neto de cartera: 20%</div>
                    </div>
                  </div>

                </div>

                {/* Duplicado Fila 3 para loop infinito fluido */}
                <div className="ui-stack" aria-hidden="true">
                  <div className="ui-card ui-card--export">
                    <div className="ui-row">
                      <div className="ui-ico blue" />
                      <div className="ui-row-main">
                        <div className="ui-row-title">Exportar Clientes</div>
                        <div className="ui-row-sub">Formato Excel y PDF</div>
                      </div>
                      <div className="ui-chevron">›</div>
                    </div>
                    <div className="ui-row">
                      <div className="ui-ico green" />
                      <div className="ui-row-main">
                        <div className="ui-row-title">Generar Pagaré Notarial</div>
                        <div className="ui-row-sub">Documento legal firmado</div>
                      </div>
                      <div className="ui-chevron">›</div>
                    </div>
                  </div>

                  <div className="ui-card ui-card--transactions">
                    <div className="trans-header">
                      <span className="trans-title">ABONOS RECIENTES</span>
                      <span className="trans-count">HOY</span>
                    </div>
                    <div className="trans-list">
                      <div className="trans-item">
                        <div className="trans-dot green" />
                        <div className="trans-info">
                          <span className="trans-name">Ramón Abreu</span>
                          <span className="trans-sub">Cuota 3 de 6</span>
                        </div>
                        <span className="trans-amount">+RD$ 3,500</span>
                      </div>
                      <div className="trans-item">
                        <div className="trans-dot green" />
                        <div className="trans-info">
                          <span className="trans-name">Lucía Santos</span>
                          <span className="trans-sub">Cuota 1 de 4</span>
                        </div>
                        <span className="trans-amount">+RD$ 5,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="ui-card ui-card--stats ui-card--revenue">
                    <div className="ui-tabs">
                      <span className="ui-tab active">RENDIMIENTO</span>
                    </div>
                    <div className="ui-stat-body" style={{ background: "linear-gradient(135deg, #0d5073, #083c58)" }}>
                      <div className="ui-stat-label">INTERESES PROYECTADOS</div>
                      <div className="ui-stat-value" style={{ color: "#22d3ee" }}>RD$ 476,800.00</div>
                      <div className="ui-stat-sub">Margen neto de cartera: 20%</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        .demo-hero {
          position: relative;
          padding: 120px 60px 80px;
          background: #ffffff;
          overflow: hidden;
        }

        /* Ambient background aesthetics matching Landing Page */
        .demo-hero-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-size: 60px 60px;
          background-image: 
            linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px), 
            linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
          pointer-events: none;
          mask-image: radial-gradient(circle at 50% 50%, black 30%, transparent 95%);
        }

        .demo-hero-blobs {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .demo-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.22;
          animation: floatDemoBlob 30s infinite alternate ease-in-out;
        }

        .demo-blob-1 {
          width: 400px;
          height: 400px;
          background: var(--primary-light, #22a4d6);
          top: -100px;
          right: -50px;
        }

        .demo-blob-2 {
          width: 350px;
          height: 350px;
          background: var(--accent, #22d3ee);
          bottom: 50px;
          left: -50px;
          animation-delay: -5s;
        }

        .demo-blob-3 {
          width: 300px;
          height: 300px;
          background: #cffafe;
          top: 50%;
          left: 20%;
          animation-delay: -10s;
        }

        @keyframes floatDemoBlob {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(60px, 40px) scale(1.1); }
        }

        .particles-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(20, 104, 138, 0.2);
          border-radius: 50%;
          opacity: 0.6;
          animation: float-particle 15s infinite linear;
        }

        @keyframes float-particle {
          0% { transform: translate(0, 0); }
          33% { transform: translate(30px, -50px); }
          66% { transform: translate(-20px, -20px); }
          100% { transform: translate(0, 0); }
        }

        .particle-0 { top: 12%; left: 8%; width: 6px; height: 6px; }
        .particle-1 { bottom: 15%; right: 18%; animation-delay: -3s; }
        .particle-2 { top: 65%; left: 35%; width: 5px; height: 5px; animation-delay: -6s; }
        .particle-3 { top: 40%; right: 25%; animation-delay: -9s; }
        .particle-4 { bottom: 35%; left: 15%; animation-delay: -2s; }
        .particle-5 { top: 20%; left: 45%; animation-delay: -5s; }
        .particle-6 { top: 80%; right: 40%; animation-delay: -8s; }
        .particle-7 { bottom: 10%; right: 8%; animation-delay: -12s; }

        .demo-hero-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .demo-hero-copy {
          display: grid;
          gap: 20px;
        }

        .demo-hero-badge {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          border-radius: 100px;
          background: var(--primary-soft, #f0f9ff);
          color: var(--primary, #14688A);
          font-weight: 700;
          font-size: 0.85rem;
        }

        .badge-pulse {
          width: 8px;
          height: 8px;
          background: var(--primary, #14688A);
          border-radius: 50%;
          display: block;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.7; }
        }

        .demo-hero-title {
          margin: 0;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--gray-900, #0f172a);
        }

        .demo-hero-brand {
          display: inline-flex;
          align-items: baseline;
          gap: 0;
          letter-spacing: -0.04em;
          white-space: nowrap;
        }

        .brand-kanni {
          font-weight: 900;
          color: var(--gray-900, #0f172a);
        }

        .brand-cash {
          font-family: var(--font-instrument), serif;
          font-style: italic;
          font-weight: 400;
          color: var(--primary, #14688A);
          position: relative;
          margin-left: 2px;
        }

        .brand-cash::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -8px;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--primary, #14688A), transparent);
          opacity: 0.95;
        }

        .demo-hero-subtitle {
          margin: 0;
          max-width: 540px;
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--gray-600, #475569);
        }

        .demo-hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .demo-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: var(--radius, 12px);
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
          letter-spacing: -0.01em;
        }

        .demo-btn-primary {
          background: linear-gradient(135deg, var(--primary, #14688A), var(--primary-light, #22a4d6));
          color: white;
          box-shadow: 0 8px 20px rgba(20, 104, 138, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(20, 104, 138, 0.05);
        }

        .demo-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 25px rgba(20, 104, 138, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
          filter: brightness(1.05);
        }

        .demo-hero-ratings {
          margin-top: 14px;
          display: flex;
          align-items: center;
          gap: 18px;
          padding-top: 18px;
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          max-width: 520px;
        }

        .rating-item {
          display: grid;
          gap: 2px;
        }

        .rating-value {
          font-weight: 850;
          font-size: 1.25rem;
          color: var(--gray-900, #0f172a);
          letter-spacing: -0.02em;
        }

        .rating-label {
          font-size: 0.85rem;
          color: var(--gray-500, #64748b);
          font-weight: 600;
        }

        .rating-divider {
          width: 1px;
          height: 34px;
          background: rgba(15, 23, 42, 0.1);
        }

        /* Right Column Showcase Visuals */
        .demo-hero-visual {
          position: relative;
          min-height: 580px;
        }

        .visual-surface {
          position: relative;
          height: 580px;
          border-radius: 24px;
          background: transparent;
          border: none;
          box-shadow: none;
          overflow: hidden;
        }

        .surface-grid {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(20, 104, 138, 0.04), transparent 45%),
            radial-gradient(circle at 70% 45%, rgba(34, 211, 238, 0.04), transparent 50%);
        }

        /* Blur masks for the edges */
        .surface-overlay {
          position: absolute;
          pointer-events: none;
          z-index: 5;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .surface-overlay--top {
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.8) 45%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .surface-overlay--bottom {
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(
            to top,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.8) 45%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .surface-overlay--left {
          top: 0;
          bottom: 0;
          left: 0;
          width: 90px;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.8) 45%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .surface-overlay--right {
          top: 0;
          bottom: 0;
          right: 0;
          width: 90px;
          background: linear-gradient(
            to left,
            rgba(255, 255, 255, 0.98) 0%,
            rgba(255, 255, 255, 0.8) 45%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        .ui-marquee {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: block;
          pointer-events: none;
          
          /* Combining horizontal & vertical masks to blend all 4 edges seamlessly */
          mask-image: 
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, transparent 100%),
            linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 16%, rgba(0,0,0,1) 84%, transparent 100%);
          mask-composite: intersect;
          -webkit-mask-image: 
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 18%, rgba(0,0,0,1) 82%, transparent 100%),
            linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 16%, rgba(0,0,0,1) 84%, transparent 100%);
          -webkit-mask-composite: source-in;
        }

        .ui-track {
          position: absolute;
          left: 10px;
          right: 10px;
          display: flex;
          gap: 20px;
          padding: 10px;
          width: max-content;
          animation: ui-scroll-x 26s linear infinite;
          will-change: transform;
          align-items: center;
        }

        .ui-track--top {
          top: 35px;
        }

        .ui-track--middle {
          top: 50%;
          transform: translateY(-50%);
        }

        .ui-track--bottom {
          bottom: 35px;
        }

        .ui-track--reverse {
          animation-name: ui-scroll-x-rev;
        }

        @keyframes ui-scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes ui-scroll-x-rev {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .ui-stack {
          display: flex;
          align-items: center;
          gap: 20px;
          flex: none;
        }

        /* Component Cards Style: Sleeker border-radius (14px) and glassmorphism */
        .ui-card {
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 
            0 12px 35px rgba(15, 23, 42, 0.05),
            0 2px 8px rgba(15, 23, 42, 0.02),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
          overflow: hidden;
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          min-width: 320px;
          max-width: 380px;
        }

        /* 1. Stats Card */
        .ui-tabs {
          display: flex;
          gap: 8px;
          padding: 10px 14px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
          background: rgba(255,255,255,0.7);
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--gray-500, #64748b);
          letter-spacing: 0.06em;
        }

        .ui-tab.active {
          color: var(--primary, #14688A);
          font-weight: 900;
        }

        .ui-stat-body {
          padding: 16px 18px;
          background: linear-gradient(135deg, rgba(20, 104, 138, 0.94), rgba(13, 80, 115, 0.96));
          color: white;
        }

        .ui-stat-label {
          font-size: 0.65rem;
          opacity: 0.85;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .ui-stat-value {
          margin-top: 6px;
          font-size: 1.55rem;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .ui-stat-sub {
          margin-top: 6px;
          font-size: 0.72rem;
          opacity: 0.9;
          font-weight: 600;
        }

        /* 2. Notification Card */
        .ui-card--notification {
          padding: 14px 16px;
          display: grid;
          gap: 10px;
        }

        .noti-header {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .noti-icon {
          font-size: 1.15rem;
        }

        .noti-meta {
          display: grid;
          gap: 1px;
        }

        .noti-title {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--gray-900, #0f172a);
        }

        .noti-time {
          font-size: 0.65rem;
          color: var(--gray-400, #94a3b8);
        }

        .noti-text {
          margin: 0;
          font-size: 0.76rem;
          line-height: 1.4;
          color: var(--gray-600, #475569);
        }

        .noti-badge {
          width: fit-content;
          font-size: 0.6rem;
          font-weight: 900;
          padding: 3px 8px;
          background: rgba(37, 211, 102, 0.12);
          color: #128c7e;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        /* 3. Summary Card */
        .ui-card--summary {
          padding: 16px;
          display: grid;
          gap: 12px;
        }

        .sum-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .sum-title {
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: var(--gray-500, #64748b);
        }

        .sum-chip {
          padding: 4px 10px;
          border-radius: 100px;
          background: rgba(20, 104, 138, 0.08);
          color: var(--primary, #14688A);
          font-size: 0.68rem;
          font-weight: 800;
        }

        .sum-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          text-align: center;
        }

        .sum-kpi span {
          display: block;
          font-size: 0.6rem;
          font-weight: 800;
          color: var(--gray-400, #94a3b8);
          letter-spacing: 0.05em;
        }

        .sum-kpi strong {
          display: block;
          margin-top: 3px;
          font-size: 1.1rem;
          font-weight: 900;
          color: var(--gray-900, #0f172a);
        }

        .sum-kpi strong.ok { color: #10b981; }
        .sum-kpi strong.bad { color: #ef4444; }

        .sum-foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding-top: 10px;
          border-top: 1px solid rgba(15, 23, 42, 0.06);
          font-size: 0.76rem;
          color: var(--gray-600, #475569);
          font-weight: 700;
        }

        .sum-foot strong {
          color: var(--gray-900, #0f172a);
          font-weight: 900;
        }

        /* 4. Calculator Card */
        .ui-card--calculator {
          padding: 14px 16px;
          display: grid;
          gap: 12px;
        }

        .calc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .calc-title {
          font-size: 0.65rem;
          font-weight: 900;
          color: var(--gray-500, #64748b);
          letter-spacing: 0.08em;
        }

        .calc-badge {
          font-size: 0.6rem;
          font-weight: 800;
          color: var(--primary, #14688A);
          background: var(--primary-soft, #f0f9ff);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .calc-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .calc-item span {
          display: block;
          font-size: 0.65rem;
          color: var(--gray-400, #94a3b8);
        }

        .calc-item strong {
          display: block;
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--gray-800, #1e293b);
        }

        .calc-result {
          background: rgba(20, 104, 138, 0.05);
          padding: 10px 12px;
          border-radius: 8px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .calc-result span {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--primary, #14688A);
        }

        .calc-result strong {
          font-size: 0.9rem;
          font-weight: 900;
          color: var(--primary, #14688A);
        }

        /* 5. Clients List Card */
        .ui-card--clients {
          padding: 14px 16px;
          display: grid;
          gap: 10px;
        }

        .mini-client {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 10px;
          align-items: center;
          padding: 8px 10px;
          border-radius: 10px;
          border: 1px solid rgba(15, 23, 42, 0.05);
          background: rgba(255, 255, 255, 0.6);
        }

        .mini-main {
          display: grid;
          gap: 1px;
        }

        .mini-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary, #14688A), var(--primary-dark, #0d4b64));
          color: white;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 0.72rem;
        }

        .mini-title {
          font-weight: 800;
          color: var(--gray-900, #0f172a);
          font-size: 0.8rem;
        }

        .mini-sub {
          font-weight: 600;
          color: var(--gray-400, #94a3b8);
          font-size: 0.68rem;
        }

        .mini-tag {
          padding: 3px 8px;
          border-radius: 100px;
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
          font-size: 0.6rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .mini-tag--warn {
          background: rgba(245, 158, 11, 0.12);
          color: #f59e0b;
        }

        /* 6. Detailed Progress Card */
        .ui-card--progress {
          padding: 16px;
          display: grid;
          gap: 12px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .progress-info {
          display: grid;
          gap: 1px;
        }

        .progress-title {
          font-size: 0.65rem;
          font-weight: 900;
          color: var(--gray-400, #94a3b8);
          letter-spacing: 0.05em;
        }

        .progress-client {
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--gray-900, #0f172a);
        }

        .progress-percentage {
          font-size: 0.9rem;
          font-weight: 900;
          color: var(--primary, #14688A);
        }

        .progress-bar-container {
          height: 6px;
          background: rgba(15, 23, 42, 0.06);
          border-radius: 100px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary, #14688A), var(--primary-light, #22a4d6));
          border-radius: 100px;
        }

        .progress-footer {
          display: flex;
          justify-content: space-between;
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--gray-500, #64748b);
        }

        /* 7. Export Card */
        .ui-card--export {
          display: grid;
        }

        .ui-row {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 12px;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(15, 23, 42, 0.05);
        }

        .ui-row:last-child {
          border-bottom: none;
        }

        .ui-ico {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: rgba(20, 104, 138, 0.08);
          color: var(--primary, #14688A);
        }

        .ui-ico::before {
          content: "↓";
          font-weight: 900;
          font-size: 0.95rem;
        }

        .ui-row-title {
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--gray-900, #0f172a);
        }

        .ui-row-sub {
          font-size: 0.7rem;
          color: var(--gray-400, #94a3b8);
          font-weight: 600;
        }

        .ui-chevron {
          color: var(--gray-300, #cbd5e1);
          font-size: 1.1rem;
        }

        /* 8. Transactions Card */
        .ui-card--transactions {
          padding: 14px 16px;
          display: grid;
          gap: 10px;
        }

        .trans-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .trans-title {
          font-size: 0.65rem;
          font-weight: 900;
          color: var(--gray-500, #64748b);
          letter-spacing: 0.08em;
        }

        .trans-count {
          font-size: 0.6rem;
          font-weight: 800;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .trans-list {
          display: grid;
          gap: 8px;
        }

        .trans-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 10px;
          align-items: center;
        }

        .trans-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .trans-dot.green { background: #10b981; }

        .trans-info {
          display: grid;
          gap: 1px;
        }

        .trans-name {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--gray-900, #0f172a);
        }

        .trans-sub {
          font-size: 0.65rem;
          color: var(--gray-400, #94a3b8);
          font-weight: 600;
        }

        .trans-amount {
          font-size: 0.8rem;
          font-weight: 900;
          color: #10b981;
        }

        /* Responsive Breakpoints & Container adjustments */
        @media (max-width: 1100px) {
          .demo-hero {
            padding: 100px 32px 60px;
          }

          .demo-hero-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .demo-hero-visual {
            min-height: 520px;
          }

          .visual-surface {
            height: 520px;
          }
        }

        @media (max-width: 768px) {
          .demo-hero {
            padding: 90px 24px 50px;
          }

          .demo-btn {
            width: 100%;
            justify-content: center;
          }

          .demo-hero-visual {
            min-height: 480px;
          }

          .visual-surface {
            height: 480px;
            border-radius: 16px;
          }

          .ui-card {
            min-width: 290px;
            max-width: 320px;
          }

          .surface-overlay--left,
          .surface-overlay--right {
            width: 50px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .particle,
          .demo-blob {
            animation: none;
          }

          .ui-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
