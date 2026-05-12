import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Sobre Nosotros - Kannicash",
};

export default function AboutPage() {
  return (
    <LegalLayout 
      title="Nuestra Visión" 
      subtitle="Transformando la gestión financiera para los prestamistas del mañana."
    >
      <h2>¿Qué es Kannicash?</h2>
      <p>
        Kannicash nace de una necesidad real observada en el mercado financiero de la República Dominicana: la falta de herramientas profesionales, seguras y accesibles para los prestamistas independientes y pequeñas financieras.
      </p>
      <p>
        Representamos el puente entre la gestión tradicional (la libreta y el Excel) y la automatización inteligente. Nuestro objetivo no es solo digitalizar datos, sino profesionalizar un sector vital de nuestra economía.
      </p>

      <h2>Nuestros Valores</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', margin: '40px 0' }}>
        <div style={{ background: 'var(--primary-soft)', padding: '24px', borderRadius: 'var(--radius)' }}>
            <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '10px' }}>Transparencia</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Cálculos claros y honestos tanto para el prestamista como para el cliente.</p>
        </div>
        <div style={{ background: 'var(--primary-soft)', padding: '24px', borderRadius: 'var(--radius)' }}>
            <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '10px' }}>Seguridad</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Protección absoluta de la información con estándares de nivel bancario.</p>
        </div>
        <div style={{ background: 'var(--primary-soft)', padding: '24px', borderRadius: 'var(--radius)' }}>
            <h4 style={{ fontWeight: 800, color: 'var(--primary)', marginBottom: '10px' }}>Simplicidad</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Tecnología avanzada que cualquiera puede usar desde su celular.</p>
        </div>
      </div>

      <h2>Hacia dónde vamos</h2>
      <p>
        El rumbo de Kannicash está marcado por la innovación constante. Buscamos convertirnos en el ecosistema financiero #1 para prestamistas en toda Latinoamérica, empezando por nuestra casa, RD.
      </p>
      <p>
        Nuestra hoja de ruta incluye:
      </p>
      <ul>
        <li><strong>Inteligencia Artificial:</strong> Análisis predictivo para evaluar el riesgo de los clientes antes de prestar.</li>
        <li><strong>Inclusión Financiera:</strong> Herramientas para que los prestamistas puedan reportar historial crediticio y ayudar a sus clientes a crecer.</li>
        <li><strong>Pagos Integrados:</strong> Recibir cobros directamente a través de canales digitales enlazados a la app.</li>
      </ul>

      <div style={{ marginTop: '60px', borderTop: '1px solid var(--gray-100)', paddingTop: '40px' }}>
        <blockquote>
          <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--gray-500)', borderLeft: '4px solid var(--primary)', paddingLeft: '20px' }}>
            "Nuestra misión es que cada prestamista independiente tenga la tecnología de un banco en la palma de su mano."
          </p>
          <footer style={{ marginTop: '10px', fontWeight: 700 }}>— El Equipo de Kannicash</footer>
        </blockquote>
      </div>
    </LegalLayout>
  );
}
