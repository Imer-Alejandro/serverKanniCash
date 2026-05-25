"use client";

import React from "react";

interface FeatureRow {
  name: string;
  basic: boolean | string;
  standard: boolean | string;
  enterprise: boolean | string;
}

const features: FeatureRow[] = [
  { name: "Clientes", basic: "20", standard: "150", enterprise: "Ilimitados" },
  { name: "Operaciones por mes", basic: "120", standard: "600", enterprise: "Ilimitadas" },
  { name: "Comprobantes por mes", basic: "50", standard: "200", enterprise: "Ilimitados" },
  { name: "Reportes básicos", basic: true, standard: true, enterprise: true },
  { name: "Reportes avanzados", basic: false, standard: true, enterprise: true },
  { name: "Exportación Excel/PDF", basic: false, standard: true, enterprise: true },
  { name: "Sin marca de agua", basic: false, standard: true, enterprise: true },
  { name: "Usuarios simultáneos", basic: "1", standard: "3", enterprise: "Ilimitados" },
  { name: "API de desarrollador", basic: false, standard: false, enterprise: true },
  { name: "Integración WhatsApp", basic: false, standard: false, enterprise: true },
  { name: "Soporte por email", basic: true, standard: true, enterprise: true },
  { name: "Soporte prioritario", basic: false, standard: false, enterprise: true },
  { name: "Soporte 24/7", basic: false, standard: false, enterprise: true },
];

export default function PricingComparison() {
  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  const FeatureCell = ({ value }: { value: boolean | string }) => {
    if (typeof value === "string") {
      return (
        <div style={{
          textAlign: "center",
          padding: "16px",
          color: "var(--gray-700)",
          fontSize: "0.95rem",
          fontWeight: 600
        }}>
          {value}
        </div>
      );
    }
    return (
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        color: value ? "var(--primary)" : "var(--gray-300)"
      }}>
        {value ? <CheckIcon /> : <XIcon />}
      </div>
    );
  };

  return (
    <div style={{ marginBottom: "80px" }}>
      <div style={{
        textAlign: "center",
        marginBottom: "60px"
      }}>
        <h2 style={{
          fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
          fontWeight: 800,
          color: "var(--gray-900)",
          marginBottom: "16px"
        }}>
          Comparativa de <em style={{ fontStyle: "italic", color: "var(--primary)" }}>Planes</em>
        </h2>
        <p style={{
          fontSize: "1.05rem",
          color: "var(--gray-600)",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: 1.6
        }}>
          Consulta todas las características incluidas en cada plan y elige la opción que mejor se ajuste a tu negocio.
        </p>
      </div>

      {/* Desktop Table */}
      <div style={{
        overflowX: "auto"
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "var(--white)",
          border: "1px solid rgba(15, 23, 42, 0.08)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden"
        }}>
          <thead>
            <tr style={{
              background: "var(--gray-50)",
              borderBottom: "1px solid rgba(15, 23, 42, 0.08)"
            }}>
              <th style={{
                textAlign: "left",
                padding: "24px 32px",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--gray-900)",
                borderRight: "1px solid rgba(15, 23, 42, 0.08)"
              }}>
                Característica
              </th>
              <th style={{
                textAlign: "center",
                padding: "24px",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--gray-900)",
                borderRight: "1px solid rgba(15, 23, 42, 0.08)"
              }}>
                Básico
              </th>
              <th style={{
                textAlign: "center",
                padding: "24px",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--primary)",
                borderRight: "1px solid rgba(15, 23, 42, 0.08)",
                background: "rgba(20, 104, 138, 0.02)"
              }}>
                Estándar
              </th>
              <th style={{
                textAlign: "center",
                padding: "24px",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--gray-900)"
              }}>
                Empresarial
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={idx} style={{
                borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
                background: idx % 2 === 0 ? "var(--white)" : "rgba(15, 23, 42, 0.02)"
              }}>
                <td style={{
                  padding: "20px 32px",
                  fontSize: "0.95rem",
                  color: "var(--gray-700)",
                  fontWeight: 500,
                  borderRight: "1px solid rgba(15, 23, 42, 0.08)"
                }}>
                  {feature.name}
                </td>
                <td style={{
                  borderRight: "1px solid rgba(15, 23, 42, 0.08)"
                }}>
                  <FeatureCell value={feature.basic} />
                </td>
                <td style={{
                  background: "rgba(20, 104, 138, 0.02)",
                  borderRight: "1px solid rgba(15, 23, 42, 0.08)"
                }}>
                  <FeatureCell value={feature.standard} />
                </td>
                <td>
                  <FeatureCell value={feature.enterprise} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          table {
            font-size: 0.85rem;
          }
          th, td {
            padding: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
