"use client";

import React from "react";
import Navbar from "./Navbar";
import ScrollReveal from "./ScrollReveal";

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="landing-wrapper">
      <Navbar />
      
      <header className="legal-header" style={{ 
        padding: '160px 24px 80px', 
        background: 'var(--gray-50)', 
        textAlign: 'center',
        borderBottom: '1px solid var(--gray-100)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="hero-grid" style={{ opacity: 0.3 }}></div>
        <ScrollReveal>
          <div className="section-label" style={{ marginBottom: '16px' }}>Documentación</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '16px', lineHeight: 1.1 }}>
            {title.split(' ').map((word, i) => (
              i === title.split(' ').length - 1 ? <em key={i}> {word}</em> : <span key={i}>{word} </span>
            ))}
          </h1>
          {subtitle && <p className="section-sub" style={{ margin: '0 auto', maxWidth: '600px' }}>{subtitle}</p>}
        </ScrollReveal>
      </header>

      <main className="legal-content" style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        padding: '100px 24px',
        lineHeight: '1.8',
        color: 'var(--gray-700)'
      }}>
        <ScrollReveal>
          <div className="prose-content" style={{ fontSize: '1.1rem' }}>
            {children}
          </div>
        </ScrollReveal>
      </main>

      <footer style={{ background: 'var(--white)', borderTop: '1px solid var(--gray-100)', padding: '100px 24px 60px' }}>
         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '80px' }}>
                <div>
                    <div className="footer-brand-name" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', fontWeight: 850, fontSize: '1.3rem' }}>
                        <div className="nav-logo-icon" style={{ width: '32px', height: '32px' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        </div>
                        Kannicash
                    </div>
                    <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem' }}>Gestión financiera avanzada para prestamistas independientes en RD.</p>
                </div>
                <div>
                    <div className="footer-col-title" style={{ fontWeight: 800, marginBottom: '24px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-900)' }}>Legal</div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="/about" style={{ color: 'var(--gray-500)', textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }}>Nosotros</a></li>
                        <li><a href="/terms" style={{ color: 'var(--gray-500)', textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }}>Términos de Servicio</a></li>
                        <li><a href="/privacy" style={{ color: 'var(--gray-500)', textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }}>Privacidad</a></li>
                        <li><a href="/refunds" style={{ color: 'var(--gray-500)', textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }}>Devoluciones</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-col-title" style={{ fontWeight: 800, marginBottom: '24px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-900)' }}>Soporte</div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="/guide" style={{ color: 'var(--gray-500)', textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }}>Guía de uso</a></li>
                        <li><a href="/support" style={{ color: 'var(--gray-500)', textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }}>Contacto Técnico</a></li>
                        <li><a href="/blog" style={{ color: 'var(--gray-500)', textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }}>Blog</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ borderTop: '1px solid var(--gray-100)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <p style={{ color: 'var(--gray-400)', fontSize: '0.9rem' }}>© 2025 Kannicash. Todos los derechos reservados.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="/" style={{ color: 'var(--gray-400)', textDecoration: 'none', fontSize: '0.9rem' }}>Volver al inicio</a>
                </div>
            </div>
         </div>
      </footer>

      <style jsx>{`
        .prose-content h2 {
          font-size: 1.8rem;
          color: var(--gray-900);
          margin: 48px 0 24px;
          font-weight: 800;
        }
        .prose-content p {
          margin-bottom: 24px;
        }
        .prose-content ul {
          margin-bottom: 32px;
          padding-left: 24px;
        }
        .prose-content li {
          margin-bottom: 12px;
        }
        .footer-links li a:hover {
          color: var(--primary) !important;
          padding-left: 5px;
        }
      `}</style>
    </div>
  );
};

export default LegalLayout;
