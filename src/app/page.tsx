import React from "react";
import PricingSection from "@/components/landing/PricingSection";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ScrollReveal from "@/components/landing/ScrollReveal";

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

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="ps-section" id="problema" style={{ background: "#fcfdfe" }}>
        <ScrollReveal style={{ textAlign: "center" }}>
          <div className="section-label">Soluciones</div>
          <h2 className="section-title">De la libreta a la <em>automatización</em></h2>
          <p className="section-sub" style={{ margin: "0 auto 60px" }}>
            Kannicash elimina el desorden y profesionaliza la gestión de tu cartera de préstamos.
          </p>
        </ScrollReveal>
        
        <div className="ps-grid">
          <ScrollReveal className="ps-card problem">
            <div className="ps-card-title">El Caos Actual</div>
            <div className="ps-item">
              <div className="ps-item-icon" style={{ background: '#fee2e2', color: '#ef4444' }}>✕</div>
              <div className="ps-item-text">Libretas de papel fáciles de perder y difíciles de respaldar. Tu información está en riesgo constante.</div>
            </div>
            <div className="ps-item">
              <div className="ps-item-icon" style={{ background: '#fee2e2', color: '#ef4444' }}>✕</div>
              <div className="ps-item-text">Cálculos manuales que generan errores en intereses y moras. Pierdes dinero por errores de redondeo.</div>
            </div>
            <div className="ps-item">
              <div className="ps-item-icon" style={{ background: '#fee2e2', color: '#ef4444' }}>✕</div>
              <div className="ps-item-text">Dificultad para rastrear pagos atrasados de forma eficiente. No tienes visibilidad real de tu cartera.</div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="ps-card solution">
            <div className="ps-card-title">Solución Digital</div>
            <div className="ps-item">
              <div className="ps-item-icon" style={{ background: 'var(--primary-soft)', color: 'var(--primary)' }}><CheckIcon /></div>
              <div className="ps-item-text">Automatización total: Sistemas Francés y Cuota Fija calculados al instante por el sistema.</div>
            </div>
            <div className="ps-item">
              <div className="ps-item-icon" style={{ background: 'var(--primary-soft)', color: 'var(--primary)' }}><CheckIcon /></div>
              <div className="ps-item-text">Respaldo automático en la nube con seguridad bancaria. Tu información siempre segura y accesible.</div>
            </div>
            <div className="ps-item">
              <div className="ps-item-icon" style={{ background: 'var(--primary-soft)', color: 'var(--primary)' }}><CheckIcon /></div>
              <div className="ps-item-text">Profesionalismo absoluto: Envía recibos digitales con tu logo directamente vía WhatsApp.</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona">
        <ScrollReveal className="pc-container">
          <div className="pc-intro">
            <div className="section-label">Paso a paso</div>
            <h2 className="section-title">El mejor proceso para <em>tu éxito</em></h2>
            <p className="section-sub" style={{ marginBottom: '16px' }}>
              Hemos diseñado un flujo intuitivo que te permite pasar de la libreta a la gestión digital en minutos. Simple, rápido y profesional.
            </p>
            <a href="#precios" className="btn-primary">Empezar Gratis</a>
          </div>
          <div className="pc-visual">
            <svg className="pc-path-svg" viewBox="0 0 1000 500" preserveAspectRatio="none">
              <path d="M 0,300 C 150,400 300,400 500,250 C 700,100 850,50 1000,100" fill="none" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round"/>
            </svg>

            <div className="pc-node pc-node-1">
              <div className="pc-bg-num">1</div>
              <div className="pc-dot"></div>
              <div className="pc-content">
                <h3 className="pc-title">Registra Clientes</h3>
                <p className="pc-desc">Añade clientes y préstamos en segundos. Define montos y tasas fácilmente.</p>
              </div>
            </div>
            <div className="pc-node pc-node-2">
              <div className="pc-bg-num">2</div>
              <div className="pc-dot"></div>
              <div className="pc-content">
                <h3 className="pc-title">Cobro Automático</h3>
                <p className="pc-desc">La app calcula cuotas y mora por ti. Registra pagos con un toque.</p>
              </div>
            </div>
            <div className="pc-node pc-node-3">
              <div className="pc-bg-num">3</div>
              <div className="pc-dot"></div>
              <div className="pc-content">
                <h3 className="pc-title">Envía Recibos</h3>
                <p className="pc-desc">Genera comprobantes en PDF y envíalos directamente por WhatsApp.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ALCANCE / CASOS DE USO */}
      <section id="alcance" style={{ background: 'var(--gray-50)' }}>
        <div className="hero-grid"></div>
        <ScrollReveal style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div className="section-label">Alcance</div>
          <h2 className="section-title">Versatilidad para <em>todo negocio</em></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Kannicash se adapta a diferentes modelos de negocio financiero en el mercado dominicano.
          </p>
        </ScrollReveal>
        <div className="features-grid">
          <ScrollReveal className="feature-card">
            <div className="feature-icon-wrap fi-blue">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="feature-title">Prestamistas Personales</div>
            <div className="feature-desc">La solución perfecta para quienes gestionan su propio capital y buscan orden absoluto en su cartera.</div>
          </ScrollReveal>
          <ScrollReveal className="feature-card">
            <div className="feature-icon-wrap fi-cyan">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <div className="feature-title">Micro-Financieras</div>
            <div className="feature-desc">Profesionaliza tu pequeña oficina con herramientas de nivel bancario y reportes financieros detallados.</div>
          </ScrollReveal>
          <ScrollReveal className="feature-card">
            <div className="feature-icon-wrap fi-green">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <div className="feature-title">Ventas a Cuotas</div>
            <div className="feature-desc">Ideal para negocios de electrodomésticos o muebles que venden a crédito y necesitan gestionar cobros.</div>
          </ScrollReveal>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-section">
        <ScrollReveal className="stats-container">
          <div className="stat-item">
            <div className="stat-num"><span>+</span>500</div>
            <div className="stat-label">Prestamistas activos</div>
          </div>
          <div className="stat-item">
            <div className="stat-num"><span>$</span>2M+</div>
            <div className="stat-label">En préstamos gestionados</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">99.9<span>%</span></div>
            <div className="stat-label">Seguridad de datos</div>
          </div>
        </ScrollReveal>
      </div>

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

      {/* FOOTER */}
      <footer>
        <div className="footer-grid"></div>
        <div className="footer-container">
          <div className="footer-top">
            <ScrollReveal>
              <div className="footer-brand-name">
                <div className="nav-logo-icon" style={{ width: '32px', height: '32px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                Kannicash
              </div>
              <p className="footer-brand-desc">Gestión financiera avanzada para prestamistas independientes en RD.</p>
              <div className="footer-social">
                <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="#"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
              </div>
            </ScrollReveal>
            
            <ScrollReveal>
              <div className="footer-col-title">Compañía</div>
              <ul className="footer-links">
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Carreras</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#precios">Precios</a></li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className="footer-col-title">Producto</div>
              <ul className="footer-links">
                <li><a href="#">Facturación</a></li>
                <li><a href="#">Contratos</a></li>
                <li><a href="#">Reportes</a></li>
                <li><a href="#">Propuestas</a></li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className="footer-col-title">Recursos</div>
              <ul className="footer-links">
                <li><a href="#">Plantillas</a></li>
                <li><a href="#">Tutoriales</a></li>
                <li><a href="#">Guías</a></li>
                <li><a href="#">Documentación</a></li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className="footer-col-title">Contáctanos</div>
              <ul className="footer-links">
                <li><a href="mailto:soporte@kannicash.com">soporte@kannicash.com</a></li>
                <li><a href="tel:+18090000000">+1 (809) 000-0000</a></li>
              </ul>
            </ScrollReveal>
          </div>
          <ScrollReveal className="footer-bottom">
            <p>© 2025 Kannicash. Todos los derechos reservados.</p>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
}
