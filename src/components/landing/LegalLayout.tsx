"use client";

import React from "react";
import Navbar from "./Navbar";
import ScrollReveal from "./ScrollReveal";
import Footer from "@/components/landing/Footer";

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

          <Footer />
      
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
