import React from "react";
import ValueCard from "@/components/landing/ValueCard";

export default function PricingHighlights() {
  return (
    <section style={{ padding: "60px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div className="section-label">Beneficios</div>
          <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginTop: 8 }}>Lo que obtienes con Kannicash</h3>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20
        }}>
          <ValueCard
            title="Arranque rápido"
            description="Configura tu primer cliente y primer préstamo en minutos.">
          </ValueCard>

          <ValueCard
            title="Datos protegidos"
            description="Backups automáticos y cifrado de datos desde el inicio.">
          </ValueCard>

          <ValueCard
            title="Escala cuando lo necesites"
            description="Pasa de usuarios individuales a equipos sin migraciones complejas.">
          </ValueCard>

          <ValueCard
            title="Soporte directo"
            description="Soporte por correo y documentación práctica para resolver dudas reales.">
          </ValueCard>
        </div>
      </div>
    </section>
  );
}
