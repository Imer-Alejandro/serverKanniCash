import React from "react";
import PricingSection from "@/components/landing/PricingSection";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ScrollReveal from "@/components/landing/ScrollReveal";
import Footer from "@/components/landing/Footer";
import FAQSection from "@/components/landing/FAQSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SolucionesSection from "@/components/landing/SolucionesSection";
import ProcessSteps from "@/components/landing/ProcessSteps";
import AlcanceBento from "@/components/landing/AlcanceBento";

export const metadata = {
  title: "Kannicash - Gestión de Préstamos para RD 🇩🇴",
  description: "La app diseñada para prestamistas informales en República Dominicana. Control total de clientes, cuotas e intereses.",
};

export default function LandingPage() {
  const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <div className="landing-wrapper">
      <Navbar />
      <Hero />

      {/* LOGOS BAND */}
      <div className="logos-band">
        <div className="logos-label">Confiado por financieras independientes en todo RD</div>
        <div style={{ overflow: "hidden" }}>
          <div className="logos-track">
            {["SANTO DOMINGO", "SANTIAGO", "LA VEGA", "SAN CRISTÓBAL", "LA ROMANA", "PUERTO PLATA", "BARAHONA", "MOCA"].map((city, i) => (
              <React.Fragment key={i}>
                <span>{city}</span><span>•</span>
              </React.Fragment>
            ))}
            {["SANTO DOMINGO", "SANTIAGO", "LA VEGA", "SAN CRISTÓBAL", "LA ROMANA", "PUERTO PLATA", "BARAHONA", "MOCA"].map((city, i) => (
              <React.Fragment key={`dup-${i}`}>
                <span>{city}</span><span>•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* SOLUCIONES SECTION */}
      <SolucionesSection />

      {/* CÓMO FUNCIONA / PASO A PASO */}
      <ProcessSteps />

      {/* ALCANCE / BENTO SECTION */}
      <AlcanceBento />


      {/* PRECIOS */}
      <PricingSection />

      {/* BLOG BENTO SECTION */}
      <section id="blog">
        <ScrollReveal style={{ textAlign: 'center' }}>
          <div className="section-label">Contenido Destacado</div>
          <h2 className="section-title">Tu paz mental, <em>nuestra prioridad</em></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Nos encargamos de los detalles para que avances con confianza y respaldo total.
          </p>
        </ScrollReveal>

        <div className="blog-bento">
          <ScrollReveal className="bento-card bento-1">
            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
              <div className="bento-stat" style={{ fontSize: '4rem', color: 'var(--primary)' }}>500+</div>
              <div className="bento-stat-label" style={{ fontSize: '1.1rem', color: 'var(--gray-900)', fontWeight: 800 }}>Préstamos procesados</div>
              <p className="bento-desc" style={{ marginTop: '16px' }}>Soporte técnico 24/7 y notificaciones automáticas para tu tranquilidad.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="bento-card bento-2">
            <div className="bento-stat">95%</div>
            <div className="bento-stat-label">Cobros recibidos al instante, más rápido y sin fricción.</div>
          </ScrollReveal>

          <ScrollReveal className="bento-card bento-3">
            <div>
              <div style={{ background: 'var(--primary-soft)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', color: 'var(--primary)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="bento-title">Seguro y Confiable</h3>
              <p className="bento-desc">Tus datos están cifrados y protegidos con los estándares más altos de la industria.</p>
            </div>
            <a href="#" className="bento-footer">Saber más →</a>
          </ScrollReveal>

          <ScrollReveal className="bento-card bento-4">
            <div>
              <h3 className="bento-title">Mantén tu salud financiera</h3>
              <p className="bento-desc">Controla tu flujo de caja y mantén un bienestar libre de preocupaciones con nuestras herramientas personalizadas.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <div style={{ background: 'white', padding: '8px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid var(--gray-100)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                Reportes
              </div>
              <div style={{ background: 'white', padding: '8px 16px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid var(--gray-100)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                Gestión
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="bento-card bento-5">
            <div className="bento-stat" style={{ color: '#e11d48' }}>45%</div>
            <div className="bento-stat-label">Reducción en tiempos de aprobación y entrega de fondos.</div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="blog-actions">
          <a href="#" className="btn-explore">
            Explorar más artículos
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </ScrollReveal>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section">
        <div className="cta-blobs">
          <div className="cta-blob cta-blob-1"></div>
          <div className="cta-blob cta-blob-2"></div>
        </div>
        <ScrollReveal style={{ textAlign: 'center' }}>
          <h2 className="cta-title">Deja atrás la libreta y<br /><em>profesionaliza tu negocio</em></h2>
          <p className="cta-sub">La herramienta definitiva para el prestamista moderno. Seguridad, automatización y control total.</p>
          <div className="cta-actions">
            <a href="#precios" className="btn-primary">Empezar ahora</a>
            <a href="#" className="btn-ghost">Hablar por WhatsApp</a>
          </div>
        </ScrollReveal>
      </section>

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <FAQSection />

      {/* BANNER PRE-FOOTER */}
      <section className="banner-section">
        <ScrollReveal className="banner-card">
          <div className="banner-content">
            <h2 className="banner-title">¿Listo para transformar tu gestión financiera?</h2>
            <p className="banner-sub">Experimenta el futuro de las finanzas con nuestra plataforma líder. ¡Empieza a optimizar tu operación hoy mismo!</p>
            <a href="#precios" className="btn-white">
              Obtener gratis
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div className="banner-visual">
            <div className="floating-ui-mini fb-1">
              <div className="f-icon-mini">✓</div>
            </div>
            <div className="floating-ui-mini fb-2">
              <div className="f-icon-mini">$</div>
            </div>
            <div className="b-stack">
              <div className="b-phone-mockup b-img-1">
                <div className="phone-frame">
                  <div className="phone-island"></div>
                  <img src="/landi/img1.jpeg" alt="Screen 1" className="b-phone-img" />
                </div>
              </div>
              <div className="b-phone-mockup b-img-2">
                <div className="phone-frame">
                  <div className="phone-island"></div>
                  <img src="/landi/img2.jpeg" alt="Screen 2" className="b-phone-img" />
                </div>
              </div>
              <div className="b-phone-mockup b-img-3">
                <div className="phone-frame">
                  <div className="phone-island"></div>
                  <img src="/landi/img3.jpeg" alt="Screen 3" className="b-phone-img" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>



      <Footer />
    </div>
  );
}
