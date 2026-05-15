import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export const metadata = {
  title: "Demo - Kannicash",
  description: "Explora cómo funciona Kannicash en una demo interactiva. Gestión de préstamos, cobros y clientes en tiempo real.",
};

export default function DemoPage() {
  return (
    <div className="landing-wrapper">
      <Navbar />
      <section style={{ minHeight: "100vh", paddingTop: "120px", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", padding: "0 24px" }}>
          <div className="section-label">Demo Interactiva</div>
          <h1 className="section-title">Ve Kannicash <em>en acción</em></h1>
          <p className="section-sub" style={{ margin: "0 auto 40px" }}>
            Explora todas las funcionalidades antes de comprometerte. Sin tarjeta de crédito, sin complicaciones.
          </p>
          <a href="/precios" className="btn-primary">Ver planes y comenzar</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
