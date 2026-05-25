import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Términos de Servicio - Kannicash",
};

export default function TermsPage() {
  return (
    <LegalLayout 
  title="Términos de Servicio" 
  subtitle="Condiciones generales para el acceso y uso de la plataforma Kannicash."
>
  <h2>1. Aceptación de los Términos</h2>
  <p>
    Al acceder, registrarse o utilizar Kannicash, el usuario acepta estos 
    Términos de Servicio y las políticas relacionadas publicadas en la plataforma. 
    Si el usuario no está de acuerdo con alguna de estas condiciones, deberá 
    abstenerse de utilizar los servicios ofrecidos.
  </p>

  <h2>2. Descripción del Servicio</h2>
  <p>
    Kannicash proporciona herramientas digitales orientadas a la administración 
    y seguimiento de préstamos, clientes, pagos y operaciones financieras. 
    El usuario es responsable del uso adecuado de la plataforma y del cumplimiento 
    de las leyes y regulaciones aplicables en su jurisdicción.
  </p>

  <h2>3. Registro y Seguridad de la Cuenta</h2>
  <p>
    Para acceder a determinadas funcionalidades, el usuario deberá crear una 
    cuenta proporcionando información válida y actualizada. El usuario es responsable 
    de mantener la confidencialidad de sus credenciales de acceso y de toda actividad 
    realizada desde su cuenta.
  </p>

  <h2>4. Suscripciones y Facturación</h2>
  <p>
    Algunas funcionalidades de Kannicash pueden estar sujetas a planes de pago 
    o suscripciones. Los pagos podrán ser procesados mediante proveedores externos 
    autorizados de procesamiento de pagos. El usuario acepta cumplir con las 
    condiciones de facturación, renovación y cancelación aplicables al plan seleccionado.
  </p>

  <h2>5. Uso Aceptable</h2>
  <p>
    El usuario se compromete a utilizar la plataforma de forma legal y responsable. 
    No está permitido utilizar Kannicash para actividades fraudulentas, ilícitas 
    o que puedan afectar la seguridad, estabilidad o funcionamiento del servicio.
  </p>

  <h2>6. Propiedad Intelectual</h2>
  <p>
    Todos los derechos relacionados con la plataforma, incluyendo software, diseño, 
    logotipos, contenido y funcionalidades, pertenecen a Kannicash o a sus respectivos 
    licenciantes y se encuentran protegidos por las leyes aplicables de propiedad 
    intelectual.
  </p>

  <h2>7. Limitación de Responsabilidad</h2>
  <p>
    Kannicash proporciona la plataforma &quot;tal como está&quot; y realiza esfuerzos razonables 
    para mantener la disponibilidad y seguridad del servicio. Sin embargo, no garantiza 
    que el servicio estará libre de interrupciones, errores o fallos técnicos. 
    En la medida permitida por la ley, Kannicash no será responsable por pérdidas 
    indirectas, daños financieros o inconvenientes derivados del uso de la plataforma.
  </p>

  <h2>8. Modificaciones del Servicio y de los Términos</h2>
  <p>
    Kannicash podrá actualizar o modificar estos Términos de Servicio en cualquier 
    momento para reflejar cambios legales, técnicos o comerciales. Cuando corresponda, 
    los usuarios serán notificados mediante la plataforma o por correo electrónico.
  </p>

  <h2>9. Contacto</h2>
  <p>
    Para consultas relacionadas con estos términos o con el uso de la plataforma, 
    puede contactarnos a través de soporte@kannicash.com.
  </p>
</LegalLayout>
  );
}
