import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid"></div>
      <div className="footer-container">
        <div className="footer-top">
          <ScrollReveal>
            <a href="/" className="footer-brand-name" style={{ gap: "0", letterSpacing: "-0.04em", textDecoration: "none" }}>
              <span style={{ fontWeight: 800, color: "var(--gray-900)" }}>Kanni</span>
              <em style={{
                fontFamily: "var(--font-instrument)",
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--primary)",
              }}>cash</em>
            </a>
            <p className="footer-brand-desc">
              La plataforma definitiva para la gestión de préstamos en República Dominicana.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="#" aria-label="X (Twitter)">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          <div className="footer-cols-grid">
            <ScrollReveal>
              <div className="footer-col-title">Plataforma</div>
              <ul className="footer-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/precios">Planes y Precios</a></li>
                <li><a href="/demostracion">Demostración</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className="footer-col-title">Legal</div>
              <ul className="footer-links">
                <li><a href="/terminos">Términos de Servicio</a></li>
                <li><a href="/privacidad">Política de Privacidad</a></li>
                <li><a href="/reembolsos">Política de Reembolso</a></li>
                <li><a href="/nosotros">Sobre Nosotros</a></li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <div className="footer-col-title">Recursos</div>
              <ul className="footer-links">
                <li><a href="/guia">Guía de Usuario</a></li>
                <li><a href="/soporte">Soporte Técnico</a></li>
                <li><a href="mailto:soporte@kannicash.com">Contacto Directo</a></li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal className="footer-bottom">
          <div className="footer-bottom-content">
            <p>© 2025 Kannicash. Todos los derechos reservados.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
