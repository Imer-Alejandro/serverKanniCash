"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

// Definición de tipos para las exportaciones
type ExportKey = "all" | "clients" | "loans" | "payments";

interface ExportOption {
  key: ExportKey;
  title: string;
  subtitle: string;
  color: string;
  iconBg: string;
  icon: React.ReactNode;
}

export default function DemoPage() {
  const [period, setPeriod] = useState<"mensual" | "trimestral" | "anual">("mensual");
  const [loadingExport, setLoadingExport] = useState<ExportKey | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Estados para la calculadora interactiva
  const [calcAmount, setCalcAmount] = useState<number>(10000);
  const [calcInterest, setCalcInterest] = useState<number>(10); // 10%
  const [calcCuotas, setCalcCuotas] = useState<number>(5);

  // Datos dinámicos según el período seleccionado
  const periodData = {
    mensual: {
      total: "2,384,000.00",
      percentage: "+2.5%",
      chartPath: "M0 80 Q 50 20, 100 70 T 200 30 T 300 90 T 400 10",
      activeClients: 142,
      pendingAmount: "RD$ 184,200",
    },
    trimestral: {
      total: "7,152,000.00",
      percentage: "+4.8%",
      chartPath: "M0 60 Q 50 100, 100 40 T 200 90 T 300 20 T 400 40",
      activeClients: 388,
      pendingAmount: "RD$ 412,500",
    },
    anual: {
      total: "28,608,000.00",
      percentage: "+12.3%",
      chartPath: "M0 90 Q 50 40, 100 10 T 200 50 T 300 30 T 400 20",
      activeClients: 1204,
      pendingAmount: "RD$ 1,840,000",
    },
  };

  // Cálculo de cuota sugerida (método simple usado comúnmente por prestamistas locales)
  const totalInteres = calcAmount * (calcInterest / 100);
  const totalPagar = calcAmount + totalInteres;
  const cuotaValor = Math.round(totalPagar / calcCuotas);

  const handleExport = (key: ExportKey, name: string) => {
    if (loadingExport) return;
    setLoadingExport(key);

    setTimeout(() => {
      setLoadingExport(null);
      setToastMessage(`✓ ${name} exportado en formato Excel (.xlsx)`);
    }, 1200);
  };

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const EXPORT_OPTIONS: ExportOption[] = [
    {
      key: "all",
      title: "Exportar Todo",
      subtitle: "Clientes, préstamos y pagos",
      color: "#3b82f6",
      iconBg: "rgba(59, 130, 246, 0.08)",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      )
    },
    {
      key: "clients",
      title: "Exportar Clientes",
      subtitle: "Información y contactos",
      color: "#10b981",
      iconBg: "rgba(16, 185, 129, 0.08)",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      key: "loans",
      title: "Exportar Préstamos",
      subtitle: "Estado y amortizaciones",
      color: "#8b5cf6",
      iconBg: "rgba(139, 92, 246, 0.08)",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    {
      key: "payments",
      title: "Exportar Pagos",
      subtitle: "Historial de abonos",
      color: "#f59e0b",
      iconBg: "rgba(245, 158, 11, 0.08)",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      )
    }
  ];

  // Renderizador de un set de widgets para el carrusel marquee
  const renderWidgetsSet = (suffix: string) => (
    <>
      {/* CARD 1: PERIOD & TOTAL LENT */}
      <div className="interactive-card period-card" key={`card-period-${suffix}`}>
        <div className="card-period-header">
          <div className="tabs-row">
            {(["mensual", "trimestral", "anual"] as const).map((p) => (
              <button
                key={`${p}-${suffix}`}
                onClick={() => setPeriod(p)}
                className={`tab-btn ${period === p ? "active" : ""}`}
              >
                {p.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="calendar-icon-wrap">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </div>

        <div className="metrics-box">
          <div className="metrics-main">
            <div className="metric-label">TOTAL PRESTADO</div>
            <div className="metric-val-wrap">
              <span className="currency-symbol">RD$</span>
              <span className="metric-val">{periodData[period].total}</span>
            </div>
            <div className="metric-badge">
              <span className="badge-arrow">↑</span>
              {periodData[period].percentage}
            </div>
          </div>

          <div className="sparkline-container">
            <svg viewBox="0 0 400 100" className="sparkline-svg">
              <path
                d={periodData[period].chartPath}
                fill="none"
                stroke="rgba(255,255,255,0.75)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="metric-meta-row">
          <div className="meta-stat">
            <div className="meta-lbl">Clientes Activos</div>
            <div className="meta-val">{periodData[period].activeClients}</div>
          </div>
          <div className="meta-stat">
            <div className="meta-lbl">Pendiente de Cobro</div>
            <div className="meta-val">{periodData[period].pendingAmount}</div>
          </div>
        </div>
      </div>

      {/* CARD 2: EXPORT PANEL */}
      <div className="interactive-card export-card" key={`card-export-${suffix}`}>
        <div className="export-header">
          <div className="export-title-main">Exportar Excel</div>
          <span className="excel-badge">XLSX</span>
        </div>
        
        <div className="export-list">
          {EXPORT_OPTIONS.map((opt) => (
            <button
              key={`${opt.key}-${suffix}`}
              onClick={() => handleExport(opt.key, opt.title)}
              className={`export-item-btn ${loadingExport === opt.key ? "loading" : ""}`}
              disabled={loadingExport !== null}
            >
              <div className="export-left">
                <div className="export-icon" style={{ backgroundColor: opt.iconBg, color: opt.color }}>
                  {loadingExport === opt.key ? (
                    <div className="spinner"></div>
                  ) : (
                    opt.icon
                  )}
                </div>
                <div className="export-info">
                  <span className="export-opt-title">{opt.title}</span>
                  <span className="export-opt-sub">{opt.subtitle}</span>
                </div>
              </div>
              <div className="export-arrow">
                {loadingExport === opt.key ? (
                  <span className="loading-txt">...</span>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CARD 3: CLIENT WHATSAPP RECEIPT */}
      <div className="interactive-card receipt-card" key={`card-receipt-${suffix}`}>
        <div className="receipt-header">
          <div className="receipt-brand">
            <span className="wa-icon">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.284 5.349.001 11.82.001c3.137.001 6.086 1.222 8.303 3.441a11.666 11.666 0 0 1 3.435 8.3c-.006 6.525-5.293 11.808-11.766 11.808-2.007-.001-3.982-.516-5.733-1.498L0 24zm6.59-4.817c1.662.986 3.298 1.492 4.962 1.493 5.4 0 9.794-4.39 9.799-9.786.002-2.613-1.013-5.071-2.86-6.921A9.704 9.704 0 0 0 11.82 1.996c-5.4 0-9.795 4.391-9.8 9.789a9.721 9.721 0 0 0 1.503 5.093l-.995 3.634 3.73-.978L6.647 19.18z"/>
              </svg>
            </span>
            Comprobante de Pago
          </div>
          <span className="status-badge">ENVIADO</span>
        </div>

        <div className="receipt-body">
          <div className="receipt-row">
            <span className="receipt-lbl">Cliente</span>
            <span className="receipt-val">Carlos Mendoza</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-lbl">Monto Recibido</span>
            <span className="receipt-val accent-val">RD$ 4,500.00</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-lbl">Frecuencia</span>
            <span className="receipt-val">Semanal</span>
          </div>
        </div>

        <div className="receipt-footer">
          <div className="receipt-checked">
            <span className="check-bubble">✓</span>
            <span>Registrado en el historial local</span>
          </div>
        </div>
      </div>

      {/* CARD 4: INTERACTIVE CALCULATOR */}
      <div className="interactive-card calc-card" key={`card-calc-${suffix}`}>
        <div className="calc-header">
          <div className="calc-title-main">Simulador de Amortización</div>
          <span className="calc-badge">ESTADÍSTICA</span>
        </div>

        <div className="calc-body">
          <div className="calc-control-group">
            <div className="calc-ctrl-header">
              <span className="calc-lbl">Monto Prestado</span>
              <span className="calc-val-display">RD$ {calcAmount.toLocaleString()}</span>
            </div>
            <div className="calc-buttons">
              <button onClick={() => setCalcAmount(Math.max(5000, calcAmount - 5000))} className="calc-btn-act">- RD$5K</button>
              <button onClick={() => setCalcAmount(Math.min(100000, calcAmount + 5000))} className="calc-btn-act">+ RD$5K</button>
            </div>
          </div>

          <div className="calc-row-inputs">
            <div className="calc-input-half">
              <span className="calc-lbl">Tasa (Simple)</span>
              <div className="calc-val-row">
                <button onClick={() => setCalcInterest(Math.max(5, calcInterest - 5))} className="calc-step-btn">-</button>
                <span className="calc-val-sm">{calcInterest}%</span>
                <button onClick={() => setCalcInterest(Math.min(30, calcInterest + 5))} className="calc-step-btn">+</button>
              </div>
            </div>
            <div className="calc-input-half">
              <span className="calc-lbl">Cuotas</span>
              <div className="calc-val-row">
                <button onClick={() => setCalcCuotas(Math.max(2, calcCuotas - 1))} className="calc-step-btn">-</button>
                <span className="calc-val-sm">{calcCuotas}</span>
                <button onClick={() => setCalcCuotas(Math.min(24, calcCuotas + 1))} className="calc-step-btn">+</button>
              </div>
            </div>
          </div>

          <div className="calc-result-box">
            <div className="calc-result-lbl">VALOR CUOTA SUGERIDO</div>
            <div className="calc-result-val">RD$ {cuotaValor.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="landing-wrapper">
      <Navbar />

      <main className="demo-hero-section">
        {/* Ambient Lights */}
        <div className="smoke smoke-left"></div>
        <div className="smoke smoke-right"></div>
        <div className="bg-grid"></div>

        <div className="demo-container">
          <div className="demo-grid">
            
            {/* LEFT COLUMN: REDISEÑADO */}
            <div className="demo-text-col">
              <div className="demo-header-card">
                <span className="demo-pill">Demostración</span>
                <span className="demo-header-tag">Interfaz moderna para cobranza</span>
              </div>

              <h1 className="demo-title">
                Gestiona tus cobros con <span className="demo-title-accent">KanniCash</span>
              </h1>

              <p className="demo-subtitle">
                Explora una plataforma limpia, rápida y profesional para controlar clientes, préstamos y pagos desde un solo lugar.
              </p>

              <div className="demo-actions">
                <a href="/precios" className="btn-primary">Ver planes</a>
                <a href="/" className="btn-ghost">Volver al inicio</a>
              </div>

              <div className="demo-ratings">
                <div className="rating-item">
                  <span className="rating-num">4.7</span>
                  <span className="rating-label">App Store</span>
                </div>
                <div className="rating-divider"></div>
                <div className="rating-item">
                  <span className="rating-num">4.8</span>
                  <span className="rating-label">Google Play</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: VISUAL CARDS */}
            <div className="demo-visual-col">
              <div className="demo-carousel-container">
                <div className="demo-particles particle-1"></div>
                <div className="demo-particles particle-2"></div>
                <div className="demo-particles particle-3"></div>
                <div className="carousel-fade-overlay left"></div>
                <div className="carousel-fade-overlay right"></div>

                <div className="demo-track">
                  {/* Render two sets of widgets side-by-side to guarantee infinite loop */}
                  {renderWidgetsSet("set-1")}
                  {renderWidgetsSet("set-2")}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* TOAST SUCCESS NOTIFICATION */}
      {toastMessage && (
        <div className="toast-notification">
          <div className="toast-content">
            <span className="toast-icon">✓</span>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        .demo-hero-section {
          padding: 130px 24px 110px;
          background: #fdfdfd;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.015) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.015) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
        }

        .smoke {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          z-index: 0;
          pointer-events: none;
          width: 450px;
          height: 450px;
          opacity: 0.08;
        }

        .smoke-left {
          top: 20%;
          left: -5%;
          background: var(--primary);
        }

        .smoke-right {
          bottom: 20%;
          right: -5%;
          background: #8b5cf6;
        }

        .demo-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 10;
        }

        .demo-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 40px;
          align-items: center;
        }

        /* LEFT COLUMN */
        .demo-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
        }

        .demo-header-card {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-bottom: 4px;
        }

        .demo-pill {
          display: inline-flex;
          align-items: center;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(16, 185, 129, 0.12);
          color: #047857;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .demo-header-tag {
          color: var(--gray-500);
          font-size: 0.95rem;
          font-weight: 600;
        }

        .demo-title {
          font-size: clamp(3rem, 5vw, 4rem);
          font-weight: 850;
          color: var(--gray-900);
          line-height: 1.02;
          letter-spacing: -0.04em;
          margin-bottom: 0;
          max-width: 560px;
        }

        .demo-title-accent {
          color: var(--primary);
        }

        .demo-subtitle {
          font-size: 1.05rem;
          color: var(--gray-600);
          line-height: 1.8;
          max-width: 520px;
          margin-bottom: 0;
          font-weight: 500;
        }

        .demo-badge,
        .demo-hero-intro,
        .demo-headline-chip,
        .demo-headline-copy {
          display: none;
        }

        .demo-badge span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
          animation: pulse 2s infinite;
        }

        .demo-title {
          font-size: 3.2rem;
          font-weight: 850;
          color: var(--gray-900);
          line-height: 1.12;
          letter-spacing: -0.04em;
          margin-bottom: 20px;
        }

        .demo-title em {
          font-family: var(--font-instrument);
          font-style: italic;
          font-weight: 400;
          color: var(--primary);
        }

        .demo-subtitle {
          font-size: 1.05rem;
          color: var(--gray-500);
          line-height: 1.6;
          margin-bottom: 30px;
          max-width: 520px;
          font-weight: 450;
        }

        .demo-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }

        .demo-ratings {
          display: flex;
          align-items: center;
          gap: 28px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          padding-top: 24px;
          width: 100%;
          max-width: 450px;
        }

        .rating-item {
          display: flex;
          flex-direction: column;
        }

        .rating-num {
          font-size: 1.6rem;
          font-weight: 850;
          color: var(--gray-900);
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 4px;
        }

        .rating-label {
          font-size: 0.78rem;
          color: var(--gray-500);
          font-weight: 600;
        }

        .rating-divider {
          width: 1px;
          height: 30px;
          background: rgba(226, 232, 240, 0.8);
        }

        /* RIGHT COLUMN (HORIZONTAL CAROUSEL) */
        .demo-visual-col {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .demo-carousel-container {
          position: relative;
          width: 100%;
          min-height: 460px;
          height: auto;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.96) 100%);
          border-radius: 32px;
          padding: 32px 26px;
          box-shadow: 0 30px 100px rgba(15, 23, 42, 0.08);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          border: 1px solid rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(16px);
        }

        .demo-carousel-container::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 32px;
          background: radial-gradient(circle at 15% 20%, rgba(56, 189, 248, 0.12), transparent 18%),
                      radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.12), transparent 20%),
                      radial-gradient(circle at 50% 90%, rgba(14, 165, 233, 0.08), transparent 28%);
          pointer-events: none;
          opacity: 0.85;
        }

        .demo-visual-col {
          position: relative;
          overflow: hidden;
          width: 100%;
          padding-top: 14px;
        }

        .demo-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scroll-horizontal 28s linear infinite;
          will-change: transform;
        }
          min-height: 460px;
          height: auto;
          overflow: hidden;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at top right, rgba(59, 130, 246, 0.16), transparent 26%),
                      radial-gradient(circle at bottom left, rgba(59, 130, 246, 0.1), transparent 28%),
                      linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,250,252,0.95));
          border-radius: 32px;
          padding: 28px;
          box-shadow: 0 28px 80px rgba(15, 23, 42, 0.12);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          border: 1px solid rgba(255,255,255,0.65);
          backdrop-filter: blur(10px);
        }

        .demo-particles {
          position: absolute;
          border-radius: 50%;
          opacity: 0.14;
          pointer-events: none;
        }

        .particle-1 {
          width: 180px;
          height: 180px;
          top: 20px;
          right: 20px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.24), transparent 65%);
        }

        .particle-2 {
          width: 120px;
          height: 120px;
          bottom: 40px;
          left: 30px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.22), transparent 60%);
        }

        .particle-3 {
          width: 80px;
          height: 80px;
          top: 140px;
          left: 180px;
          background: radial-gradient(circle, rgba(14, 165, 233, 0.2), transparent 55%);
        }

        .demo-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scroll-horizontal 28s linear infinite;
          will-change: transform;
        }

        .interactive-card {
          position: relative;
          background: rgba(255, 255, 255, 0.96);
          border-radius: 28px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
          padding: 20px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
          box-sizing: border-box;
          transition: all 0.35s ease;
          backdrop-filter: blur(12px);
        }

        .interactive-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 50px rgba(15, 23, 42, 0.12);
          border-color: rgba(56, 189, 248, 0.18);
        }

        .interactive-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 28px;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255,255,255,0.2), transparent 55%);
          opacity: 0.4;
        }

        .interactive-card > * {
          position: relative;
          z-index: 1;
        }

        .period-card,
        .export-card,
        .receipt-card,
        .calc-card {
          width: 280px;
        }

        .card-period-header,
        .export-header,
        .receipt-header,
        .calc-header {
          gap: 10px;
          background: rgba(15, 23, 42, 0.03);
          border-radius: 18px;
          padding: 12px 14px;
          margin-bottom: 14px;
          align-items: center;
        }

        .card-period-header {
          justify-content: space-between;
        }

        .export-header,
        .receipt-header,
        .calc-header {
          justify-content: space-between;
        }

        .calendar-icon-wrap,
        .status-badge,
        .excel-badge,
        .calc-badge {
          border-radius: 999px;
          padding: 6px 10px;
          font-size: 0.65rem;
          font-weight: 700;
        }

        .calendar-icon-wrap {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.18);
        }

        .status-badge {
          background: rgba(14, 165, 233, 0.1);
          color: #0ea5e9;
        }

        .excel-badge {
          background: rgba(16, 185, 129, 0.1);
          color: #047857;
        }

        .calc-badge {
          background: rgba(59, 130, 246, 0.1);
          color: #2563eb;
        }

        .sparkline-container {
          position: absolute;
          bottom: 10px;
          right: 10px;
          width: 48%;
          height: 55px;
          opacity: 0.55;
          pointer-events: none;
        }

        .receipt-body,
        .calc-control-group {
          background: rgba(248, 250, 252, 0.8);
          border-color: rgba(15, 23, 42, 0.07);
        }

        .receipt-body {
          padding: 16px 18px;
        }

        .carousel-fade-overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 20;
          pointer-events: none;
        }

        .carousel-fade-overlay.left {
          left: 0;
          background: linear-gradient(to right, #fdfdfd 10%, transparent);
        }

        .carousel-fade-overlay.right {
          right: 0;
          background: linear-gradient(to left, #fdfdfd 10%, transparent);
        }

        .demo-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: scroll-horizontal 35s linear infinite;
        }

        /* PAUSE MARQUEE ON HOVER SO USER CAN INTERACT */
        .demo-carousel-container:hover .demo-track {
          animation-play-state: paused;
        }

        /* INTERACTIVE CARDS STYLE */
        .interactive-card {
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 12px 30px -8px rgba(0,0,0,0.02), 0 4px 12px -4px rgba(0,0,0,0.01);
          padding: 20px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 320px;
          box-sizing: border-box;
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .interactive-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.05);
          border-color: rgba(20, 104, 138, 0.18);
        }

        /* CARD 1: PERIODS */
        .period-card {
          width: 330px;
        }

        .card-period-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .tabs-row {
          display: flex;
          background: #f1f5f9;
          padding: 3px;
          border-radius: 10px;
          gap: 1px;
        }

        .tab-btn {
          border: none;
          background: transparent;
          color: var(--gray-500);
          font-size: 0.65rem;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 7px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-btn.active {
          background: #ffffff;
          color: var(--gray-900);
          box-shadow: 0 3px 8px rgba(0,0,0,0.03);
        }

        .calendar-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(226, 232, 240, 0.8);
          color: var(--gray-500);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metrics-box {
          background: #14688a;
          border-radius: 16px;
          padding: 16px 20px;
          color: #ffffff;
          position: relative;
          overflow: hidden;
          margin-bottom: 14px;
        }

        .metric-label {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 4px;
        }

        .metric-val-wrap {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 6px;
        }

        .currency-symbol {
          font-size: 1rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.8);
        }

        .metric-val {
          font-size: 1.6rem;
          font-weight: 850;
          letter-spacing: -0.02em;
        }

        .metric-badge {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          background: rgba(255, 255, 255, 0.16);
          padding: 2px 8px;
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 750;
        }

        .sparkline-container {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40%;
          height: 60px;
          opacity: 0.5;
          pointer-events: none;
        }

        .sparkline-svg {
          width: 100%;
          height: 100%;
        }

        .metric-meta-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          border-top: 1px solid rgba(226, 232, 240, 0.6);
          padding-top: 12px;
        }

        .meta-stat {
          display: flex;
          flex-direction: column;
        }

        .meta-lbl {
          font-size: 0.65rem;
          color: var(--gray-500);
          font-weight: 600;
        }

        .meta-val {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--gray-900);
        }

        /* CARD 2: EXPORT */
        .export-card {
          width: 300px;
        }

        .export-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .export-title-main {
          font-size: 0.85rem;
          font-weight: 850;
          color: var(--gray-900);
        }

        .excel-badge {
          font-size: 0.6rem;
          font-weight: 850;
          background: #f0fdf4;
          color: #10b981;
          padding: 3px 6px;
          border-radius: 5px;
        }

        .export-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .export-item-btn {
          width: 100%;
          border: 1px solid rgba(226, 232, 240, 0.6);
          background: #ffffff;
          padding: 8px 12px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .export-item-btn:hover {
          border-color: rgba(20, 104, 138, 0.2);
          background: #f8fafc;
        }

        .export-item-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .export-left {
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
        }

        .export-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .export-info {
          display: flex;
          flex-direction: column;
        }

        .export-opt-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--gray-800);
        }

        .export-opt-sub {
          font-size: 0.65rem;
          color: var(--gray-500);
          font-weight: 550;
        }

        .export-arrow {
          color: var(--gray-400);
        }

        /* CARD 3: RECEIPT */
        .receipt-card {
          width: 290px;
        }

        .receipt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .receipt-brand {
          font-size: 0.78rem;
          font-weight: 850;
          color: var(--gray-900);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .wa-icon {
          color: #25d366;
          display: flex;
          align-items: center;
        }

        .status-badge {
          font-size: 0.6rem;
          font-weight: 800;
          background: #eff6ff;
          color: #2563eb;
          padding: 3px 6px;
          border-radius: 5px;
        }

        .receipt-body {
          background: #f8fafc;
          border-radius: 12px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 12px;
          border: 1px solid rgba(226, 232, 240, 0.4);
        }

        .receipt-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .receipt-lbl {
          font-size: 0.68rem;
          color: var(--gray-500);
          font-weight: 550;
        }

        .receipt-val {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--gray-800);
        }

        .receipt-val.accent-val {
          color: var(--primary);
          font-size: 0.8rem;
        }

        .receipt-footer {
          border-top: 1px dashed rgba(226, 232, 240, 1);
          padding-top: 10px;
        }

        .receipt-checked {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.68rem;
          color: var(--gray-600);
        }

        .check-bubble {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #dcfce7;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.55rem;
          font-weight: 900;
        }

        /* CARD 4: CALCULATOR */
        .calc-card {
          width: 300px;
        }

        .calc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .calc-title-main {
          font-size: 0.85rem;
          font-weight: 850;
          color: var(--gray-900);
        }

        .calc-badge {
          font-size: 0.6rem;
          font-weight: 850;
          background: #eff6ff;
          color: #3b82f6;
          padding: 3px 6px;
          border-radius: 5px;
        }

        .calc-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .calc-control-group {
          background: #f8fafc;
          border-radius: 12px;
          padding: 8px 12px;
          border: 1px solid rgba(226, 232, 240, 0.5);
        }

        .calc-ctrl-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .calc-lbl {
          font-size: 0.65rem;
          color: var(--gray-500);
          font-weight: 600;
        }

        .calc-val-display {
          font-size: 0.8rem;
          font-weight: 850;
          color: var(--gray-900);
        }

        .calc-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }

        .calc-btn-act {
          border: 1px solid rgba(226, 232, 240, 0.8);
          background: #ffffff;
          border-radius: 6px;
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--gray-700);
          padding: 4px 0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .calc-btn-act:hover {
          background: var(--primary-soft);
          color: var(--primary);
          border-color: var(--primary-light);
        }

        .calc-row-inputs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .calc-input-half {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .calc-val-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8fafc;
          border: 1px solid rgba(226, 232, 240, 0.5);
          border-radius: 8px;
          padding: 3px 6px;
        }

        .calc-step-btn {
          border: none;
          background: transparent;
          color: var(--gray-500);
          font-weight: 900;
          cursor: pointer;
          padding: 0 4px;
        }

        .calc-val-sm {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--gray-800);
        }

        .calc-result-box {
          background: var(--primary-soft);
          border-radius: 12px;
          padding: 10px 12px;
          text-align: center;
          border: 1px solid rgba(20, 104, 138, 0.1);
        }

        .calc-result-lbl {
          font-size: 0.58rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--primary);
          margin-bottom: 2px;
        }

        .calc-result-val {
          font-size: 1.15rem;
          font-weight: 850;
          color: var(--primary);
        }

        /* SPINNER ANIMATION */
        .spinner {
          width: 12px;
          height: 12px;
          border: 2px solid transparent;
          border-top-color: currentColor;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        /* TOAST SUCCESS NOTIFICATION */
        .toast-notification {
          position: fixed;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          background: #0f172a;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .toast-icon {
          color: #10b981;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes slideUp {
          from {
            transform: translate(-50%, 40px);
            opacity: 0;
          }
          to {
            transform: translate(-50%, 0);
            opacity: 1;
          }
        }

        @keyframes scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* RESPONSIVE LAYOUT */
        @media (max-width: 992px) {
          .demo-hero-section {
            padding-top: 130px;
          }

          .demo-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .demo-text-col {
            align-items: center;
            text-align: center;
          }

          .demo-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .demo-visual-col {
            width: 100%;
            margin-top: 20px;
          }
        }

        @media (max-width: 576px) {
          .demo-title {
            font-size: 2.4rem;
          }

          .demo-actions {
            flex-direction: column;
            width: 100%;
          }

          .demo-actions a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
