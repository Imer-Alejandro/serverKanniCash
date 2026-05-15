"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const FAQ_ITEMS = [
  {
    question: "¿Qué es KanniCash y para quién está diseñado?",
    answer: "KanniCash es una plataforma móvil y web para la gestión de préstamos, cobros y clientes. Está diseñada para prestamistas independientes, financieras pequeñas y negocios que manejan créditos de forma diaria, semanal, quincenal o mensual."
  },
  {
    question: "¿Qué puedo hacer con KanniCash?",
    answer: "Puedes registrar clientes, crear préstamos, controlar cuotas, registrar pagos, consultar balances pendientes y visualizar reportes desde una sola plataforma."
  },
  {
    question: "¿KanniCash funciona en celular y computadora?",
    answer: "Sí. KanniCash cuenta con una aplicación móvil y también con una plataforma web para que puedas administrar tu negocio desde cualquier dispositivo."
  },
  {
    question: "¿Cómo funciona el control de cobros?",
    answer: "Cada préstamo genera automáticamente sus cuotas y fechas de pago. El sistema te permite visualizar pagos pendientes, vencidos y próximos a vencer para mantener el control de tu cartera."
  },
  {
    question: "¿Puedo visualizar reportes y estadísticas?",
    answer: "Sí. KanniCash cuenta con estadísticas y reportes para ayudarte a analizar ingresos, préstamos activos, pagos pendientes y comportamiento de tu cartera en todos sus planes."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label">Resolviendo dudas</div>
          <h2 className="section-title">Preguntas <em>Frecuentes</em></h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Todo lo que necesitas saber sobre cómo Kannicash puede potenciar tu negocio de préstamos.
          </p>
        </ScrollReveal>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span>{item.question}</span>
                  <div className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    {item.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 120px 24px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #f8fafc;
          border: 1px solid var(--gray-100);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .faq-item:hover {
          border-color: var(--primary-light);
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .faq-item.active {
          background: #ffffff;
          border-color: var(--primary);
          box-shadow: 0 15px 40px rgba(20, 104, 138, 0.08);
        }

        .faq-question {
          padding: 24px 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          color: var(--gray-900);
          font-size: 1.1rem;
          gap: 20px;
        }

        .faq-icon {
          width: 32px;
          height: 32px;
          background: var(--primary-soft);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }

        .faq-item.active .faq-icon {
          transform: rotate(180deg);
          background: var(--primary);
          color: white;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
        }

        .faq-item.active .faq-answer {
          max-height: 200px;
          opacity: 1;
        }

        .faq-answer-inner {
          padding: 0 32px 32px;
          color: var(--gray-500);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 600px) {
          .faq-section {
            padding: 80px 20px;
          }
          .faq-question {
            padding: 20px 24px;
            font-size: 1rem;
          }
          .faq-answer-inner {
            padding: 0 24px 24px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
