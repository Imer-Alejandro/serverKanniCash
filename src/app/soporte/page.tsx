import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Soporte Técnico - Kannicash",
};

export default function SupportPage() {
  return (
    <LegalLayout 
      title="Soporte Técnico" 
      subtitle="¿Necesitas ayuda? Estamos aquí para resolver tus dudas técnicas y operativas."
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '40px' }}>
        <div style={{ background: 'var(--gray-50)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-100)' }}>
            <div style={{ color: 'var(--primary)', marginBottom: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: 800 }}>Vía WhatsApp</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-600)', marginBottom: '20px' }}>Atención inmediata para problemas urgentes y dudas rápidas.</p>
            <a href="#" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Chatear ahora</a>
        </div>

        <div style={{ background: 'var(--gray-50)', padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-100)' }}>
            <div style={{ color: 'var(--primary)', marginBottom: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2-2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', fontWeight: 800 }}>Correo Electrónico</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--gray-600)', marginBottom: '20px' }}>Para consultas detalladas, sugerencias o reportes de errores técnicos.</p>
            <a href="mailto:soporte@kannicash.com" className="btn-ghost" style={{ width: '100%', justifyContent: 'center' }}>Enviar Email</a>
        </div>
      </div>

      <h2 style={{ marginTop: '80px' }}>Preguntas Frecuentes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
            <h4 style={{ fontWeight: 800, color: 'var(--gray-900)', marginBottom: '8px' }}>¿Qué pasa si pierdo mi celular?</h4>
            <p>Tus datos no se pierden. Toda tu información está respaldada de forma segura en la nube. Solo necesitas iniciar sesión desde otro dispositivo.</p>
        </div>
        <div>
            <h4 style={{ fontWeight: 800, color: 'var(--gray-900)', marginBottom: '8px' }}>¿Es seguro ingresar los datos de mis clientes?</h4>
            <p>Absolutamente. Utilizamos cifrado de grado bancario (AES-256) para proteger toda la información almacenada en nuestra base de datos.</p>
        </div>
        <div>
            <h4 style={{ fontWeight: 800, color: 'var(--gray-900)', marginBottom: '8px' }}>¿Cómo actualizo mi plan de suscripción?</h4>
            <p>Puedes hacerlo desde la sección de "Facturación" dentro de la aplicación en cualquier momento.</p>
        </div>
      </div>
    </LegalLayout>
  );
}
