import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";
import ValueCard from "@/components/landing/ValueCard";

export const metadata = {
  title: "Sobre Nosotros - Kannicash",
};

// `ValueCard` is una tarjeta simple y elegante que no depende de iconos inflados.

const RoadmapCard = ({ step, title, description }: { step: number; title: string; description: string }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '24px',
    alignItems: 'flex-start',
    padding: '24px 0',
    borderBottom: '1px solid rgba(15, 23, 42, 0.08)'
  }}>
    <div style={{
      width: '38px',
      height: '38px',
      borderRadius: '50%',
      border: '2px solid var(--primary)',
      color: 'var(--primary)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 700,
      background: 'white'
    }}>
      {step}
    </div>
    <div>
      <h4 style={{
        fontWeight: 700,
        color: 'var(--gray-900)',
        margin: '0 0 8px',
        fontSize: '1.05rem'
      }}>
        {title}
      </h4>
      <p style={{
        margin: 0,
        color: 'var(--gray-600)',
        fontSize: '0.95rem',
        lineHeight: 1.7
      }}>
        {description}
      </p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <LegalLayout 
      title="Sobre Nosotros" 
      subtitle="Construyendo una plataforma financiera clara y confiable para prestamistas, paso a paso."
    >
      {/* ── MISSION & VISION ── */}
      <div style={{ marginBottom: '80px' }}>
        <h2>Nuestra Misión</h2>
        <p>
          <strong>Empoderar a cada prestamista independiente con la tecnología de un banco en la palma de su mano.</strong>
        </p>
        <p>
          Kannicash existe porque vimos una oportunidad clara: miles de prestamistas en República Dominicana y toda Latinoamérica gestionan sus operaciones con libretas y Excel, exponiéndose a riesgos innecesarios y perdiendo oportunidades de crecimiento. Decidimos cambiar eso.
        </p>
      </div>

      {/* ── WHAT IS KANNICASH ── */}
      <div style={{ marginBottom: '80px' }}>
        <h2>¿Qué es Kannicash?</h2>
        <p>
          Kannicash es una plataforma fintech diseñada para prestamistas independientes y pequeñas financieras. Buscamos combinar herramientas útiles con una interfaz clara para que la gestión de créditos sea más sencilla y menos propensa a errores.
        </p>
        <p>
          Estamos en una etapa temprana: hoy trabajamos en las capacidades básicas que más necesitan los prestamistas, como el registro de clientes, control de préstamos, seguimiento de pagos y reportes simples. Primero construimos una base sólida, luego sumamos más funcionalidades.
        </p>
      </div>

      {/* ── OUR FOCUS ── */}
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ marginBottom: '40px' }}>Nuestro enfoque</h2>
        <p>
          Estamos construyendo Kannicash desde la base, con un enfoque práctico y realista. No prometemos cifras mágicas: queremos crear una herramienta útil para prestamistas que valoran claridad, seguridad y control.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          marginTop: '32px'
        }}>
          <ValueCard
            title="Diseño limpio"
            description="Interfaz clara, navegación sencilla y decisiones enfocadas en lo que importa del crédito."
          />
          <ValueCard
            title="Seguridad básica pero responsable"
            description="Protegemos datos clave y vamos construyendo con mejores prácticas desde el primer día."
          />
          <ValueCard
            title="Funcionalidades reales"
            description="Gestión de préstamos, seguimiento de pagos y control de cartera, pensando en procesos cotidianos."
          />
        </div>
      </div>

      {/* ── VALUES ── */}
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ marginBottom: '40px' }}>Nuestros Valores</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          <ValueCard
            title="Transparencia"
            description="Dejar claro qué hace la plataforma y por qué lo hace, sin promesas exageradas."
          />
          <ValueCard
            title="Practicidad"
            description="Funcionalidades diseñadas para resolver tareas reales de prestamistas y financieras pequeñas."
          />
          <ValueCard
            title="Constancia"
            description="Mejoras paso a paso, con versiones útiles desde el inicio y sin exceso de complejidad."
          />
          <ValueCard
            title="Respeto"
            description="Entendemos los riesgos de tu negocio y trabajamos para ofrecer una herramienta confiable."
          />
        </div>
      </div>

      {/* ── WHY KANNICASH ── */}
      <div style={{ marginBottom: '80px' }}>
        <h2>¿Por qué elegir Kannicash?</h2>
        <div style={{
          background: 'linear-gradient(135deg, var(--primary-soft) 0%, rgba(34, 164, 214, 0.05) 100%)',
          padding: '40px',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(20, 104, 138, 0.1)',
          marginTop: '24px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
              <div>
              <h4 style={{ fontWeight: 800, marginBottom: '8px', color: 'var(--gray-900)' }}>Diseño funcional</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>Interfaz sencilla y foco en lo esencial para el usuario. Nada de adornos innecesarios.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: '8px', color: 'var(--gray-900)' }}>Gestión clara</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>Seguimiento de préstamos, pagos y clientes con datos comprensibles. Punto.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: '8px', color: 'var(--gray-900)' }}>Precios simples</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>Estructura básica y transparente, sin sorpresas.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: '8px', color: 'var(--gray-900)' }}>Protección responsable</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>Datos protegidos con medidas responsables desde el inicio.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: '8px', color: 'var(--gray-900)' }}>Crecimiento gradual</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>Mejoramos con cada iteración y con la retroalimentación real de usuarios.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: '8px', color: 'var(--gray-900)' }}>Soporte cercano</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', margin: 0 }}>Atención práctica y directa para resolver dudas y problemas reales.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── ROADMAP ── */}
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{ marginBottom: '24px' }}>Nuestro Camino Adelante</h2>
        <p style={{ maxWidth: '760px', color: 'var(--gray-600)', marginBottom: '32px' }}>
          Avanzamos con prioridades claras: primero entregamos estabilidad y funciones esenciales, luego agregamos mejoras que realmente sumen valor. Aquí está nuestra hoja de ruta a corto plazo.
        </p>
        <div style={{
          position: 'relative',
          background: 'var(--white)',
          border: '1px solid rgba(15, 23, 42, 0.08)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px 36px',
          boxShadow: '0 20px 50px rgba(15, 23, 42, 0.05)'
        }}>
          <div style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            bottom: '32px',
            width: '2px',
            background: 'rgba(20, 104, 138, 0.12)'
          }} />
          <div style={{ position: 'relative' }}>
            <RoadmapCard
              step={1}
              title="Funciones de base sólidas"
              description="Ya estamos enfocándonos en el registro de clientes, control de préstamos, seguimiento de pagos y reportes básicos."
            />
            <RoadmapCard
              step={2}
              title="Mejoras en la experiencia"
              description="Avanzamos en flujos más claros, validaciones más inteligentes y una navegación más simple para que usar Kannicash sea ágil."
            />
            <RoadmapCard
              step={3}
              title="Pagos y cobros más directos"
              description="Trabajamos en opciones de cobro y notificaciones para que el prestamista tenga mayor control sin depender de procesos manuales."
            />
            <RoadmapCard
              step={4}
              title="Reportes útiles"
              description="Sumamos reportes prácticos que permitan visualizar el estado de cartera, pagos pendientes y salud del negocio."
            />
            <RoadmapCard
              step={5}
              title="Construcción gradual"
              description="Cada avance se basa en lo que usan los primeros usuarios y en lo que realmente aporta valor al negocio."
            />
          </div>
        </div>
      </div>

    

      {/* ── FINAL MESSAGE ── */}
      <div style={{
        marginTop: '80px',
        borderTop: '2px solid var(--gray-100)',
        paddingTop: '60px',
        textAlign: 'center'
      }}>
        <blockquote style={{
          margin: '0 auto',
          maxWidth: '700px'
        }}>
          <p style={{
            fontStyle: 'italic',
            fontSize: '1.3rem',
            color: 'var(--primary)',
            lineHeight: 1.8,
            marginBottom: '20px',
            fontWeight: 500
          }}>
            &quot;No creemos en ser solo un software. Creemos en ser el socio que cada prestamista desearía tener. Tu éxito es nuestro éxito.&quot;
          </p>
          <footer style={{
            fontWeight: 700,
            color: 'var(--gray-700)',
            fontSize: '1rem'
          }}>
            — Kannicash
          </footer>
        </blockquote>
      </div>

    </LegalLayout>
  );
}
