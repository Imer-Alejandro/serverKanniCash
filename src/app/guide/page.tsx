import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Guía de Uso - Kannicash",
};

export default function GuidePage() {
  return (
    <LegalLayout 
      title="Guía de Uso" 
      subtitle="Aprende a sacar el máximo provecho a Kannicash para tu negocio de préstamos."
    >
      <h2>Bienvenido a Kannicash</h2>
      <p>
        Esta guía te ayudará a configurar tu cuenta y empezar a gestionar tus préstamos de forma profesional en pocos minutos.
      </p>

      <h2>1. Configuración Inicial</h2>
      <p>
        Lo primero que debes hacer es completar tu perfil de negocio. Sube tu logo y define tus datos de contacto; esto aparecerá en los recibos que envíes a tus clientes.
      </p>

      <h2>2. Registro de Clientes</h2>
      <p>
        Ve a la sección de "Clientes" y añade a tus prestatarios. Solo necesitas su nombre y teléfono (preferiblemente WhatsApp) para empezar.
      </p>

      <h2>3. Creación de Préstamos</h2>
      <p>
        Selecciona un cliente y haz clic en "Nuevo Préstamo". Podrás elegir:
      </p>
      <ul>
        <li><strong>Sistema Francés:</strong> Amortización constante con intereses sobre saldo.</li>
        <li><strong>Cuota Fija:</strong> El sistema más común para préstamos rápidos en RD.</li>
        <li><strong>Frecuencia:</strong> Diario, semanal, quincenal o mensual.</li>
      </ul>

      <h2>4. Gestión de Cobros</h2>
      <p>
        El sistema te avisará automáticamente quién debe pagar hoy. Cuando recibas un pago, regístralo con un clic y el sistema generará un recibo PDF profesional que podrás compartir por WhatsApp al instante.
      </p>

      <h2>5. Reportes y Estadísticas</h2>
      <p>
        Consulta tu flujo de caja, el total de capital en calle y los intereses generados en la sección de "Reportes" para tener control total de tu rentabilidad.
      </p>
    </LegalLayout>
  );
}
