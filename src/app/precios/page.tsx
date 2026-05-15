import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PremiumPricingHero from "@/components/landing/PremiumPricingHero";
import ScrollReveal from "@/components/landing/ScrollReveal";

export const metadata = {
  title: "Planes y Precios - Kannicash",
  description: "Encuentra el plan perfecto para escalar tu negocio de préstamos en República Dominicana. Transparencia, seguridad y control total.",
};

export default function PricingPage() {
  return (
    <div className="landing-wrapper">
      <Navbar />

      {/* PREMIUM HERO — white bg, RD dotted map, centered phone */}
      <PremiumPricingHero />

      {/* PRICING PLANS — overlapping the hero bottom */}
      <div className="pricing-page-section" id="precios">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px 120px" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "80px" }}>
              <div className="section-label">Planes</div>
              <h2 className="section-title">Elige el plan para <em>tu negocio</em></h2>
              <p className="section-sub" style={{ margin: "0 auto" }}>
                Escala según tus necesidades sin contratos forzosos.
              </p>
            </div>
          </ScrollReveal>

          <div className="pricing-grid">
            <PricingCard
              name="Básico"
              price="0"
              description="Para prestamistas individuales que están comenzando."
              features={["Hasta 20 clientes", "120 operaciones/mes", "Reportes básicos", "Soporte por email"]}
            />
            <PricingCard
              name="Estándar"
              price="19.99"
              featured
              description="La solución completa para financieras en crecimiento."
              features={["Hasta 150 clientes", "Operaciones ilimitadas", "Multi-usuario (3)", "Reportes avanzados", "Sin marca de agua"]}
            />
            <PricingCard
              name="Empresarial"
              price="39.99"
              description="Potencia máxima para operaciones a gran escala."
              features={["Clientes ilimitados", "Multi-usuario ilimitado", "Integración WhatsApp", "API de desarrollador", "Soporte 24/7"]}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function PricingCard({ name, price, description, features, featured = false }: any) {
  const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
  return (
    <div className={`pricing-card reveal visible${featured ? " featured" : ""}`}>
      {featured && <div className="pricing-badge">Más Popular</div>}
      <div className="pricing-name">{name}</div>
      <div className="pricing-price-wrap">
        <div className="pricing-price">
          <span className="price-currency">$</span>
          <span className="price-integer">{price}</span>
        </div>
      </div>
      <div className="pricing-period">{price === "0" ? "Gratis para siempre" : "USD / mes"}</div>
      <ul className="pricing-features">
        {features.map((f: string, i: number) => (
          <li key={i}><CheckIcon /> {f}</li>
        ))}
      </ul>
      <a href="#" className="pricing-btn">
        {price === "0" ? "Empezar ahora" : "Elegir Plan"}
      </a>
    </div>
  );
}
