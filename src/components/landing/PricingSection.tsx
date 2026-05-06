"use client";

import React, { useState, useEffect, useRef } from "react";

interface PlanDetails {
  int: string;
  dec: string;
  total: number;
  cycles: number;
  cycleLabel: string;
  discount?: number;
}

const pricingData: Record<string, Record<string, PlanDetails>> = {
  standard: {
    monthly: { int: "19", dec: ".99", total: 19.99, cycles: 1, cycleLabel: "mes" },
    quarterly: { int: "17", dec: ".99", total: 17.99, cycles: 3, cycleLabel: "trimestre", discount: 10 },
    annual: { int: "15", dec: ".59", total: 15.59, cycles: 12, cycleLabel: "año", discount: 22 },
  },
  enterprise: {
    monthly: { int: "39", dec: ".99", total: 39.99, cycles: 1, cycleLabel: "mes" },
    quarterly: { int: "35", dec: ".99", total: 35.99, cycles: 3, cycleLabel: "trimestre", discount: 10 },
    annual: { int: "31", dec: ".19", total: 31.19, cycles: 12, cycleLabel: "año", discount: 22 },
  },
};

const DOP_RATE = 60;
const periodLabels = {
  monthly: "USD / mes",
  quarterly: "USD / mes — facturado trimestral",
  annual: "USD / mes — facturado anual",
};

export default function PricingSection() {
  const [period, setPeriod] = useState<"monthly" | "quarterly" | "annual">("monthly");
  const [isUpdating, setIsUpdating] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeTab = tabsRef.current?.querySelector(".pricing-tab.active");
    if (activeTab && indicatorRef.current && tabsRef.current) {
      const tabsRect = tabsRef.current.getBoundingClientRect();
      const activeRect = activeTab.getBoundingClientRect();
      indicatorRef.current.style.width = activeRect.width + "px";
      indicatorRef.current.style.left = activeRect.left - tabsRect.left + "px";
    }
  }, [period]);

  const handlePeriodChange = (p: "monthly" | "quarterly" | "annual") => {
    setIsUpdating(true);
    setPeriod(p);
    setTimeout(() => setIsUpdating(false), 300);
  };

  const formatDOP = (usd: number) => {
    const dop = Math.round(usd * DOP_RATE);
    return "~RD$ " + dop.toLocaleString("es-DO") + " /mes";
  };

  const getBillingLabel = (cycles: number) => {
    if (cycles === 1) return "Total al mes:";
    if (cycles === 3) return "Total al trimestre:";
    return "Total al año:";
  };

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const std = pricingData.standard[period];
  const ent = pricingData.enterprise[period];

  return (
    <section style={{ background: "var(--gray-50)" }} id="precios">
      <div className="reveal visible" style={{ textAlign: "center" }}>
        <div className="section-label">Planes</div>
        <h2 className="section-title">Elige el plan para <em>tu negocio</em></h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>Escala según tus necesidades sin contratos forzosos.</p>
      </div>

      <div className="pricing-tabs-wrapper reveal visible">
        <div className="pricing-tabs" ref={tabsRef}>
          {(["monthly", "quarterly", "annual"] as const).map((p) => (
            <div
              key={p}
              className={`pricing-tab ${period === p ? "active" : ""}`}
              onClick={() => handlePeriodChange(p)}
            >
              <span className="tab-label">{p === "monthly" ? "Mensual" : p === "quarterly" ? "Trimestral" : "Anual"}</span>
              {p === "quarterly" && <span className="tab-discount">-10%</span>}
              {p === "annual" && <span className="tab-discount tab-discount-best">-22%</span>}
            </div>
          ))}
          <div className="pricing-tab-indicator" ref={indicatorRef}></div>
        </div>
      </div>

      <div className="pricing-grid">
        {/* BASICO */}
        <div className="pricing-card reveal visible">
          <div className="pricing-name">Básico</div>
          <div className="pricing-price-wrap">
            <div className="pricing-price">$0</div>
          </div>
          <div className="pricing-period">Gratis para siempre</div>
          <ul className="pricing-features">
            <li><CheckIcon /> Hasta 20 clientes</li>
            <li><CheckIcon /> 120 operaciones/mes</li>
            <li><CheckIcon /> 50 comprobantes/mes</li>
            <li><CheckIcon /> Reportes básicos</li>
            <li className="pricing-feature-disabled"><XIcon /> Sin marca de agua</li>
            <li className="pricing-feature-disabled"><XIcon /> Multi-usuario</li>
          </ul>
          <a href="#" className="pricing-btn">Empezar ahora</a>
        </div>

        {/* ESTANDAR */}
        <div className={`pricing-card featured reveal visible ${isUpdating ? "card-updating" : ""}`}>
          <div className="pricing-badge">Más Popular</div>
          <div className="pricing-name">Estándar</div>
          <div className="pricing-price-wrap">
            <div className={`pricing-price ${isUpdating ? "price-changing" : ""}`}>
              <span className="price-currency">$</span>
              <span className="price-integer">{std.int}</span>
              <span className="price-decimal">{std.dec}</span>
            </div>
            <div className={`pricing-price-dop ${isUpdating ? "price-changing" : ""}`}>{formatDOP(std.total)}</div>
          </div>
          <div className="pricing-period">{periodLabels[period]}</div>
          <div className={`pricing-total ${isUpdating ? "price-changing" : ""}`}>
            {getBillingLabel(std.cycles)} <strong>${(std.total * std.cycles).toFixed(2)} USD</strong> 
            <span className="total-dop"> (~RD$ {Math.round(std.total * std.cycles * DOP_RATE).toLocaleString("es-DO")})</span>
          </div>
          {std.discount && <div className="pricing-save-badge visible">🎉 Ahorras {std.discount}%</div>}
          <ul className="pricing-features">
            <li><CheckIcon /> Hasta 150 clientes</li>
            <li><CheckIcon /> 600 operaciones/mes</li>
            <li><CheckIcon /> 200 comprobantes/mes</li>
            <li><CheckIcon /> Exportación Excel/PDF</li>
            <li><CheckIcon /> Sin marca de agua</li>
            <li><CheckIcon /> Multi-usuario <strong>(hasta 3)</strong></li>
          </ul>
          <button className="pricing-btn" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>Elegir Plan</button>
        </div>

        {/* EMPRESARIAL */}
        <div className={`pricing-card reveal visible ${isUpdating ? "card-updating" : ""}`}>
          <div className="pricing-badge-dev">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            En Desarrollo
          </div>
          <div className="pricing-name">Empresarial</div>
          <div className="pricing-price-wrap">
            <div className={`pricing-price ${isUpdating ? "price-changing" : ""}`}>
              <span className="price-currency">$</span>
              <span className="price-integer">{ent.int}</span>
              <span className="price-decimal">{ent.dec}</span>
            </div>
            <div className={`pricing-price-dop ${isUpdating ? "price-changing" : ""}`}>{formatDOP(ent.total)}</div>
          </div>
          <div className="pricing-period">{periodLabels[period]}</div>
          <div className={`pricing-total ${isUpdating ? "price-changing" : ""}`}>
            {getBillingLabel(ent.cycles)} <strong>${(ent.total * ent.cycles).toFixed(2)} USD</strong>
            <span className="total-dop"> (~RD$ {Math.round(ent.total * ent.cycles * DOP_RATE).toLocaleString("es-DO")})</span>
          </div>
          {ent.discount && <div className="pricing-save-badge visible">🎉 Ahorras {ent.discount}%</div>}
          <ul className="pricing-features">
            <li><CheckIcon /> Todo lo del Estándar mejorado</li>
            <li><CheckIcon /> Versión Web y Escritorio</li>
            <li><CheckIcon /> Multi-usuario <strong>(hasta 18)</strong></li>
            <li className="pricing-feature-highlight">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.435 5.634 1.436h.005c6.558 0 11.894-5.335 11.897-11.893 0-3.18-1.238-6.17-3.486-8.418z"/></svg>
               Integración WhatsApp
            </li>
            <li className="pricing-feature-highlight">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.93A8.01 8.01 0 0 1 20 18h-2a6 6 0 0 0-12 0H4a8.01 8.01 0 0 1 7.25-7.93C9.4 9.57 8 7.95 8 6a4 4 0 0 1 4-4z"></path><path d="M15 2.5c1.5 1 2.5 3 2.5 5"></path><path d="M9 2.5C7.5 3.5 6.5 5.5 6.5 7.5"></path></svg>
              Inteligencia Artificial
            </li>
            <li><CheckIcon /> Soporte prioritario 24/7</li>
          </ul>
          <button className="pricing-btn pricing-btn-dev" disabled style={{ width: '100%', border: 'none' }}>Próximamente</button>
        </div>
      </div>
    </section>
  );
}
