import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Blog - Kannicash",
};

export default function BlogPage() {
  const posts = [
    {
      title: "Cómo profesionalizar tu negocio de préstamos",
      desc: "Descubre las herramientas clave para pasar de la libreta a la gestión digital sin complicaciones.",
      tag: "Guía",
      date: "May 10, 2025"
    },
    {
      title: "Seguridad bancaria en apps financieras",
      desc: "Te explicamos cómo protegemos tus datos y los de tus clientes con cifrado de última generación.",
      tag: "Seguridad",
      date: "May 8, 2025"
    },
    {
      title: "5 consejos para reducir la mora en tu cartera",
      desc: "Estrategias probadas para mejorar el flujo de caja y asegurar que tus clientes paguen a tiempo.",
      tag: "Consejos",
      date: "May 5, 2025"
    }
  ];

  return (
    <LegalLayout 
      title="Blog de Kannicash" 
      subtitle="Artículos, consejos y noticias para mejorar la gestión de tu capital."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '40px' }}>
        {posts.map((post, i) => (
          <article key={i} style={{ 
            background: 'white', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid var(--gray-100)',
            overflow: 'hidden',
            transition: '0.3s',
            cursor: 'pointer'
          }}>
            <div style={{ height: '200px', background: 'var(--gray-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gray-300)' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
            </div>
            <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', background: 'var(--primary-soft)', padding: '4px 10px', borderRadius: '100px' }}>{post.tag}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>{post.date}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '12px', color: 'var(--gray-900)' }}>{post.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--gray-600)', lineHeight: 1.6 }}>{post.desc}</p>
                <div style={{ marginTop: '24px', fontWeight: 700, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}>
                    Leer más 
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </div>
          </article>
        ))}
      </div>
    </LegalLayout>
  );
}
