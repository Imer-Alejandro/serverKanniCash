"use client";

import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function NotFound() {
  return (
    <div className="landing-wrapper">
      <Navbar />
      
      {/* 404 Content */}
      <section style={{
        minHeight: "calc(100vh - 120px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "120px",
        paddingBottom: "80px",
        background: "linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)",
      }}>
        <div style={{
          textAlign: "center",
          maxWidth: "600px",
          padding: "40px 20px",
        }}>
          {/* Large 404 Number */}
          <div style={{
            fontSize: "clamp(80px, 15vw, 180px)",
            fontWeight: 900,
            background: "linear-gradient(135deg, var(--primary), #0066ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}>
            404
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 700,
            color: "var(--gray-900)",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}>
            Página no encontrada
          </h1>

          {/* Description */}
          <p style={{
            fontSize: "16px",
            color: "var(--gray-600)",
            marginBottom: "40px",
            lineHeight: 1.6,
            maxWidth: "400px",
            margin: "0 auto 40px",
          }}>
            Parece que la página que buscas no existe. No te preocupes, aquí en Kannicash siempre encontramos la ruta correcta.
          </p>

          {/* Illustration - Decorative circles */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginBottom: "48px",
            opacity: 0.6,
          }}>
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--primary), transparent)",
              animation: "float 3s ease-in-out infinite",
            }} />
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, transparent, #0066ff)",
              animation: "float 3s ease-in-out infinite 0.5s",
            }} />
            <div style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #0066ff, var(--primary))",
              animation: "float 3s ease-in-out infinite 1s",
            }} />
          </div>

          {/* CTA Button */}
          <a
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "14px 32px",
              fontSize: "16px",
              fontWeight: 600,
              color: "white",
              background: "linear-gradient(135deg, var(--primary), #0066ff)",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(34, 80, 207, 0.3)",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
              (e.target as HTMLElement).style.boxShadow = "0 15px 40px rgba(34, 80, 207, 0.4)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.transform = "translateY(0)";
              (e.target as HTMLElement).style.boxShadow = "0 10px 30px rgba(34, 80, 207, 0.3)";
            }}
          >
            ← Volver al inicio
          </a>

          {/* Additional Links */}
          <div style={{
            marginTop: "48px",
            paddingTop: "48px",
            borderTop: "1px solid var(--gray-200)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "32px",
          }}>
            <a href="/precios" style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              transition: "color 0.3s ease",
            }} 
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#0052cc"}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = "var(--primary)"}
            >
              Ver precios
            </a>
            <a href="/demostracion" style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#0052cc"}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = "var(--primary)"}
            >
              Ver demostración
            </a>
            <a href="/soporte" style={{
              color: "var(--primary)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#0052cc"}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = "var(--primary)"}
            >
              Contacta soporte
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
