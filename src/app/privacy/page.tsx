import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Política de Privacidad - Kannicash",
};

export default function PrivacyPage() {
  return (
    <LegalLayout 
      title="Política de Privacidad" 
      subtitle="Cómo protegemos y manejamos tu información personal y financiera."
    >
      <h2>1. Recolección de Información</h2>
      <p>
        Recopilamos información que usted nos proporciona directamente al crear una cuenta, como nombre, correo electrónico y datos de contacto. También recopilamos los datos relacionados con su gestión de préstamos para el funcionamiento core de la app.
      </p>

      <h2>2. Uso de los Datos</h2>
      <p>
        Utilizamos su información para:
      </p>
      <ul>
        <li>Proveer, mantener y mejorar nuestros servicios.</li>
        <li>Procesar transacciones y enviar notificaciones relacionadas.</li>
        <li>Enviar comunicaciones de soporte técnico y actualizaciones.</li>
        <li>Garantizar la seguridad de su cuenta y prevenir fraudes.</li>
      </ul>

      <h2>3. Protección de Información</h2>
      <p>
        Implementamos medidas de seguridad de grado bancario, incluyendo cifrado SSL y almacenamiento seguro en la nube, para proteger sus datos contra acceso no autorizado, alteración o divulgación.
      </p>

      <h2>4. Compartición de Datos</h2>
      <p>
        No vendemos ni alquilamos su información personal a terceros. Solo compartimos datos con proveedores de servicios esenciales (como procesadores de pago como Paddle) necesarios para operar la plataforma.
      </p>

      <h2>5. Sus Derechos</h2>
      <p>
        Usted tiene derecho a acceder, corregir o eliminar sus datos personales en cualquier momento a través de la configuración de su cuenta o contactando a nuestro soporte.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Utilizamos cookies para mejorar la experiencia de navegación y recordar sus preferencias de sesión. Puede configurar su navegador para rechazar cookies, aunque esto podría afectar la funcionalidad de la app.
      </p>
    </LegalLayout>
  );
}
