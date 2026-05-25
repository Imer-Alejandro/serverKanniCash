"use client";

import React, { useState } from "react";

const faqs = [
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí. Puedes actualizar o degradar tu plan desde el panel de control. Los cambios en facturación se aplican en el siguiente período.",
  },
  {
    q: "¿Qué sucede si supero el límite de clientes del plan?",
    a: "Recibirás una notificación y podrás actualizar al plan que mejor se ajuste a tu volumen. También ofrecemos facturación personalizada para casos empresariales.",
  },
  {
    q: "¿Ofrecen integraciones o API?",
    a: "Las integraciones básicas están planificadas para las versiones avanzadas; la API completa estará disponible para planes empresariales.",
  },
  {
    q: "¿Cómo resguardan los datos?",
    a: "Encriptamos en tránsito y en reposo, además realizamos respaldos regulares. Nos tomamos la seguridad muy en serio.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section style={{ padding: "60px 24px", background: "var(--gray-50)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h3 style={{ fontSize: "1.4rem", marginBottom: 12, fontWeight: 800 }}>Preguntas frecuentes</h3>
        <div style={{ display: "grid", gap: 8 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(15,23,42,0.06)", background: "white" }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "14px 18px",
                  background: "transparent",
                  border: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 700,
                  color: "var(--gray-900)",
                  cursor: "pointer"
                }}
              >
                <span>{f.q}</span>
                <span style={{ color: "var(--primary)" }}>{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div style={{ padding: "12px 18px", color: "var(--gray-700)", lineHeight: 1.6, fontSize: "0.98rem" }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
