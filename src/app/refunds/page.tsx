import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Política de Devoluciones - Kannicash",
};

export default function RefundsPage() {
  return (
    <LegalLayout 
      title="Política de Devoluciones" 
      subtitle="Información sobre reembolsos y cancelaciones de suscripción."
    >
      <h2>1. Periodo de Prueba</h2>
      <p>
        Kannicash ofrece un periodo de prueba gratuito (o plan gratuito limitado) para que los usuarios evalúen la plataforma antes de realizar cualquier pago. Recomendamos encarecidamente utilizar este periodo para asegurar que el servicio cumple con sus necesidades.
      </p>

      <h2>2. Cancelación de Suscripción</h2>
      <p>
        Usted puede cancelar su suscripción en cualquier momento desde el panel de facturación. La cancelación evitará futuros cargos, pero no otorga derecho a un reembolso por el periodo ya facturado, a menos que se cumplan las condiciones del punto 3.
      </p>

      <h2>3. Elegibilidad para Reembolsos</h2>
      <p>
        Procesamos reembolsos en los siguientes casos:
      </p>
      <ul>
        <li>Cargos duplicados o errores en el procesamiento del pago.</li>
        <li>Solicitudes realizadas dentro de los primeros 7 días de la compra inicial si el usuario experimentó fallos técnicos críticos demostrables que impidieron el uso del servicio.</li>
      </ul>

      <h2>4. Proceso de Solicitud</h2>
      <p>
        Para solicitar un reembolso, debe contactar a nuestro equipo de soporte en <a href="mailto:soporte@kannicash.com">soporte@kannicash.com</a> indicando su ID de transacción y el motivo de la solicitud. Evaluaremos cada caso de forma individual.
      </p>

      <h2>5. Proveedor de Pagos</h2>
      <p>
        Nuestros pagos son procesados a través de Paddle. En algunos casos, la gestión del reembolso puede estar sujeta a las políticas y tiempos de procesamiento de Paddle y de su entidad bancaria.
      </p>
    </LegalLayout>
  );
}
