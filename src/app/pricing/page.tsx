import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Planes y Precios - Kannicash",
};

export default function PricingPage() {
  const features = [
    { name: "Clientes ilimitados", free: true, pro: true, enterprise: true },
    { name: "Préstamos ilimitados", free: true, pro: true, enterprise: true },
    { name: "Recibos por WhatsApp", free: "Hasta 10/mes", pro: true, enterprise: true },
    { name: "Cálculo de Mora Automático", free: true, pro: true, enterprise: true },
    { name: "Sistemas Francés y Cuota Fija", free: true, pro: true, enterprise: true },
    { name: "Reportes Financieros", free: "Básicos", pro: "Avanzados", enterprise: "Full Custom" },
    { name: "Soporte Técnico", free: "Email", pro: "WhatsApp", enterprise: "24/7 Priority" },
    { name: "Multi-usuario", free: false, pro: "Hasta 3", enterprise: "Ilimitado" },
    { name: "Contratos en PDF", free: false, pro: true, enterprise: true },
    { name: "Integración con Bancos", free: false, pro: false, enterprise: true },
  ];

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const CrossIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <LegalLayout 
      title="Planes y Precios" 
      subtitle="Compara nuestras opciones y elige la que mejor se adapte al tamaño de tu cartera."
    >
      <div style={{ overflowX: 'auto', marginTop: '40px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--gray-100)' }}>
              <th style={{ padding: '24px 16px', fontSize: '1.1rem', fontWeight: 800 }}>Funcionalidad</th>
              <th style={{ padding: '24px 16px', fontSize: '1.1rem', fontWeight: 800, textAlign: 'center' }}>Gratis</th>
              <th style={{ padding: '24px 16px', fontSize: '1.1rem', fontWeight: 800, textAlign: 'center', color: 'var(--primary)' }}>Pro</th>
              <th style={{ padding: '24px 16px', fontSize: '1.1rem', fontWeight: 800, textAlign: 'center' }}>Premium</th>
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={i} style={{ borderBottom: '1px solid var(--gray-50)' }}>
                <td style={{ padding: '16px', fontWeight: 600, color: 'var(--gray-700)' }}>{f.name}</td>
                <td style={{ padding: '16px', textAlign: 'center' }}>
                  {typeof f.free === "boolean" ? (f.free ? <CheckIcon /> : <CrossIcon />) : <span style={{ fontSize: '0.9rem' }}>{f.free}</span>}
                </td>
                <td style={{ padding: '16px', textAlign: 'center', background: 'rgba(20, 104, 138, 0.02)' }}>
                  {typeof f.pro === "boolean" ? (f.pro ? <CheckIcon /> : <CrossIcon />) : <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>{f.pro}</span>}
                </td>
                <td style={{ padding: '16px', textAlign: 'center' }}>
                  {typeof f.enterprise === "boolean" ? (f.enterprise ? <CheckIcon /> : <CrossIcon />) : <span style={{ fontSize: '0.9rem' }}>{f.enterprise}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '60px', padding: '40px', background: 'var(--primary-soft)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 850, marginBottom: '16px', color: 'var(--primary)' }}>¿No sabes cuál elegir?</h3>
        <p style={{ marginBottom: '24px', color: 'var(--gray-600)' }}>Nuestro equipo puede asesorarte según el volumen de tus operaciones.</p>
        <a href="/support" className="btn-primary">Hablar con soporte</a>
      </div>
    </LegalLayout>
  );
}
