"use client";

import React, { useEffect, useRef } from "react";
import ScrollReveal from "@/components/landing/ScrollReveal";

export default function SoportePageClient() {
  const heroRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll < window.innerHeight) {
        if (gridRef.current) gridRef.current.style.transform = `translateY(${scroll * 0.25}px)`;
        if (blobsRef.current) blobsRef.current.style.transform = `translateY(${scroll * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="hero" ref={heroRef} style={{ gridTemplateColumns: "1fr" }}>
        <div className="hero-grid" ref={gridRef}></div>
        <div className="hero-blobs" ref={blobsRef}>
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="particle p-1"></div>
        <div className="particle p-2"></div>
        <div className="particle p-3"></div>

        <div className="hero-content" style={{ zIndex: 10, textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
          <div className="hero-badge reveal visible">
            <span></span> Estamos para <em>ayudarte</em>
          </div>
          <h1 className="hero-title reveal visible">
            Soporte <em>rápido y confiable</em>
          </h1>
          <p className="hero-subtitle reveal visible" style={{ fontSize: "1.1rem", color: "var(--gray-600)", marginTop: "20px" }}>
            Contacta con nuestro equipo en tiempo real. Resolvemos tus dudas técnicas y operativas al instante.
          </p>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section style={{ padding: "80px 60px", background: "var(--white)", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <p className="section-label">Canales de Soporte</p>
              <h2 className="section-title">Elige tu forma de <em>contactar</em></h2>
            </div>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px" }}>
            {/* WhatsApp */}
            <ScrollReveal>
              <div
                style={{
                  background: "linear-gradient(135deg, var(--primary-soft) 0%, rgba(34, 211, 238, 0.1) 100%)",
                  padding: "40px 32px",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid rgba(20, 104, 138, 0.2)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(10px)"
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = "0 20px 50px rgba(20, 104, 138, 0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", background: "radial-gradient(circle, rgba(34, 211, 238, 0.3) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }}></div>
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: "20px" }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="whatsappGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--primary)" />
                          <stop offset="100%" stopColor="var(--primary-light)" />
                        </linearGradient>
                      </defs>
                      <rect width="48" height="48" rx="12" fill="url(#whatsappGrad)" opacity="0.15" />
                      <path d="M24 8C15.2 8 8 15.2 8 24c0 3.2.8 6.4 2.4 9.2L8 40l7.2-2.4c2.8 1.6 6 2.4 9.2 2.4 8.8 0 16-7.2 16-16S32.8 8 24 8m0 29.6c-2.8 0-5.6-.8-8-2.4l-.8-.4-8 2.8 2.8-8.4-.4-.8c-1.6-2.4-2.4-5.2-2.4-8 0-7.6 6.4-14 14-14s14 6.4 14 14-6.4 14-14 14m7.2-10.8c-.4-.2-2.4-1.2-2.8-1.4-.4-.2-.8-.2-1.2.2-.4.4-1.2 1.4-1.6 1.8-.4.4-.8.4-1.2.2-.4-.2-2-1-3.8-2.6-1.4-1.2-2.4-2.8-2.8-3.2-.4-.4 0-.8.2-1.2.2-.4.4-.8.4-1.2.2-.4 0-.8-.2-1.2-.2-.4-1.2-2.8-1.6-3.8-.4-1.2-.8-1.2-1.2-1.2H16c-.4 0-1.2.2-1.6.8-.4.4-1.2 1.4-1.2 2.8 0 1.6.8 3.2 1 3.6.2.4 2 3 4.8 4.4 2.8 1.4 2.8 1 3.4.8.4-.2 2.4-1.2 2.8-2.4.4-1.2.4-2 .2-2.4-.2-.4-.4-.4-.8-.6z" fill="var(--primary)" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "12px", color: "var(--gray-900)" }}>WhatsApp</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--gray-600)", marginBottom: "24px" }}>
                    Soporte inmediato para urgencias y dudas rápidas
                  </p>
                  <a
                    href="https://wa.me/1234567890"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
                      color: "white",
                      padding: "11px 24px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      transition: "box-shadow 0.3s ease",
                      boxShadow: "0 4px 14px rgba(20, 104, 138, 0.25)"
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 8px 24px rgba(20, 104, 138, 0.35)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 4px 14px rgba(20, 104, 138, 0.25)";
                    }}
                  >
                    Chatear ahora →
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Email */}
            <ScrollReveal>
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, var(--primary-soft) 100%)",
                  padding: "40px 32px",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid rgba(34, 211, 238, 0.2)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(10px)"
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = "0 20px 50px rgba(34, 211, 238, 0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", background: "radial-gradient(circle, rgba(20, 104, 138, 0.3) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }}></div>
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: "20px" }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="emailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--accent)" />
                          <stop offset="100%" stopColor="var(--primary-light)" />
                        </linearGradient>
                      </defs>
                      <rect width="48" height="48" rx="12" fill="url(#emailGrad)" opacity="0.15" />
                      <path d="M10 14h28c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H10c-1.1 0-2-.9-2-2V16c0-1.1.9-2 2-2z" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 16l14 11 14-11" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "12px", color: "var(--gray-900)" }}>Email</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--gray-600)", marginBottom: "24px" }}>
                    Para consultas detalladas y reportes técnicos
                  </p>
                  <a
                    href="mailto:soporte@kannicash.com"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "linear-gradient(135deg, var(--accent), var(--primary-light))",
                      color: "white",
                      padding: "11px 24px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      transition: "box-shadow 0.3s ease",
                      boxShadow: "0 4px 14px rgba(34, 211, 238, 0.25)"
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 8px 24px rgba(34, 211, 238, 0.35)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.boxShadow = "0 4px 14px rgba(34, 211, 238, 0.25)";
                    }}
                  >
                    Enviar Email →
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Help Center */}
            <ScrollReveal>
              <div
                style={{
                  background: "linear-gradient(135deg, var(--primary-soft) 0%, rgba(34, 211, 238, 0.05) 100%)",
                  padding: "40px 32px",
                  borderRadius: "var(--radius-xl)",
                  border: "1px solid rgba(20, 104, 138, 0.15)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  backdropFilter: "blur(10px)"
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = "0 20px 50px rgba(20, 104, 138, 0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", background: "radial-gradient(circle, rgba(20, 104, 138, 0.2) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }}></div>
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: "20px" }}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="helpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--primary)" />
                          <stop offset="100%" stopColor="var(--accent)" />
                        </linearGradient>
                      </defs>
                      <rect width="48" height="48" rx="12" fill="url(#helpGrad)" opacity="0.15" />
                      <path d="M14 10h20c1.1 0 2 .9 2 2v24c0 1.1-.9 2-2 2H14c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2z" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18 16h12M18 22h12M18 28h8" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "12px", color: "var(--gray-900)" }}>Centro de Ayuda</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--gray-600)", marginBottom: "24px" }}>
                    Encuentra respuestas en nuestra base de conocimiento
                  </p>
                  <a
                    href="#"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "var(--gray-100)",
                      color: "var(--primary)",
                      padding: "11px 24px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      transition: "background 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "var(--primary-soft)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "var(--gray-100)";
                    }}
                  >
                    Explorar →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: "80px 60px", background: "var(--gray-50)", position: "relative" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <p className="section-label">Dudas Comunes</p>
              <h2 className="section-title">Preguntas <em>frecuentes</em></h2>
            </div>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                q: "¿Qué pasa si pierdo mi celular?",
                a: "Tus datos no se pierden. Toda tu información está respaldada de forma segura en la nube. Solo necesitas iniciar sesión desde otro dispositivo."
              },
              {
                q: "¿Es seguro ingresar los datos de mis clientes?",
                a: "Absolutamente. Utilizamos cifrado de grado bancario (AES-256) para proteger toda la información almacenada en nuestra base de datos."
              },
              {
                q: "¿Cómo actualizo mi plan de suscripción?",
                a: "Puedes hacerlo desde la sección de 'Facturación' dentro de la aplicación en cualquier momento."
              }
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <details
                  style={{
                    background: "var(--white)",
                    padding: "24px",
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--gray-100)",
                    cursor: "pointer",
                    transition: "all 0.3s"
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--primary)";
                    el.style.boxShadow = "0 8px 20px rgba(20, 104, 138, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--gray-100)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <summary style={{ fontWeight: 800, color: "var(--gray-900)", fontSize: "1.05rem", outline: "none", userSelect: "none" }}>
                    {item.q}
                  </summary>
                  <p style={{ marginTop: "16px", color: "var(--gray-600)", lineHeight: "1.6" }}>
                    {item.a}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--primary-soft);
          color: var(--primary);
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 24px;
          border: 1px solid rgba(20, 104, 138, 0.2);
        }

        .hero-badge span {
          width: 8px;
          height: 8px;
          background: var(--primary);
          border-radius: 50%;
          display: inline-block;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .section-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          line-height: 1.2;
          margin-top: 12px;
        }

        .section-title em {
          color: var(--primary);
        }

        details {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        summary::-webkit-details-marker {
          display: none;
        }

        summary::after {
          content: "▼";
          float: right;
          transition: transform 0.3s;
          color: var(--primary);
        }

        details[open] summary::after {
          transform: rotate(180deg);
        }
      `}</style>
    </>
  );
}
