"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function PricingCTA() {
  return (
    <section style={{
      padding: "80px 60px",
      background: "linear-gradient(135deg, var(--primary-soft) 0%, rgba(34, 164, 214, 0.05) 100%)",
      borderTop: "1px solid rgba(20, 104, 138, 0.1)"
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <ScrollReveal>
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.2rem)",
            fontWeight: 800,
            color: "var(--gray-900)",
            marginBottom: "20px"
          }}>
            ¿Preguntas sobre nuestros <em style={{ fontStyle: "italic", color: "var(--primary)" }}>planes</em>?
          </h2>
          <p style={{
            fontSize: "1.05rem",
            color: "var(--gray-600)",
            marginBottom: "40px",
            lineHeight: 1.6
          }}>
            Nuestro equipo está disponible para ayudarte a elegir el plan correcto y responder cualquier duda que tengas sobre funcionalidades, integración o soporte.
          </p>
          <CTAButton />
        </ScrollReveal>
      </div>
    </section>
  );
}

function CTAButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="/soporte"
      style={{
        display: "inline-block",
        background: "linear-gradient(135deg, var(--primary), var(--primary-light))",
        color: "white",
        padding: "14px 40px",
        borderRadius: "100px",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: "0.95rem",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 24px rgba(20, 104, 138, 0.35)"
          : "0 4px 14px rgba(20, 104, 138, 0.25)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Contactar Soporte
    </a>
  );
}
