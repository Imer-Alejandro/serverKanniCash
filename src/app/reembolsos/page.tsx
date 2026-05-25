import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Política de Devoluciones - Kannicash",
};

export default function RefundsPage() {
  return (
    <LegalLayout 
  title="Política de Reembolsos y Cancelaciones" 
  subtitle="Información relacionada con suscripciones, cancelaciones y solicitudes de reembolso."
>
  <h2>1. Periodo de Evaluación</h2>
  <p>
    Kannicash podrá ofrecer un periodo de prueba gratuito o un plan con 
    funcionalidades limitadas para que los usuarios evalúen la plataforma antes 
    de contratar un plan de pago. Recomendamos utilizar este periodo para verificar 
    que el servicio se ajusta a sus necesidades.
  </p>

  <h2>2. Cancelación de Suscripción</h2>
  <p>
    El usuario podrá cancelar su suscripción en cualquier momento desde la sección 
    de facturación o configuración de la cuenta, cuando dicha funcionalidad esté disponible. 
    La cancelación evitará futuras renovaciones automáticas, pero no generará reembolsos 
    automáticos por periodos previamente facturados, salvo en los casos descritos en esta política.
  </p>

  <h2>3. Elegibilidad para Reembolsos</h2>
  <p>
    Las solicitudes de reembolso podrán ser evaluadas en circunstancias como las siguientes:
  </p>

  <ul>
    <li>Cargos duplicados o errores relacionados con el procesamiento del pago.</li>
    <li>
      Problemas técnicos críticos verificables que hayan impedido el acceso o uso 
      razonable del servicio durante los primeros 7 días posteriores a la compra inicial.
    </li>
    <li>
      Cobros realizados por error o suscripciones no autorizadas sujetas a validación.
    </li>
  </ul>

  <h2>4. Solicitud de Reembolso</h2>
  <p>
    Para solicitar una revisión de reembolso, el usuario deberá contactar al equipo 
    de soporte mediante <a href="mailto:soporte@kannicash.com">soporte@kannicash.com</a> 
    proporcionando información suficiente para identificar la transacción y describir 
    el motivo de la solicitud. Cada caso será revisado individualmente.
  </p>

  <h2>5. Procesamiento de Pagos</h2>
  <p>
    Los pagos y suscripciones de Kannicash pueden ser gestionados mediante proveedores 
    externos de procesamiento de pagos autorizados. Dependiendo del método de pago utilizado, 
    ciertos reembolsos, tiempos de procesamiento o validaciones podrán estar sujetos a las 
    políticas y procedimientos del proveedor correspondiente y de la entidad bancaria del usuario.
  </p>

  <h2>6. Cambios en esta Política</h2>
  <p>
    Kannicash podrá actualizar esta Política de Reembolsos y Cancelaciones para reflejar 
    cambios operativos, legales o comerciales. Las modificaciones relevantes podrán ser 
    notificadas a través de la plataforma o mediante correo electrónico.
  </p>
</LegalLayout>
  );
}
