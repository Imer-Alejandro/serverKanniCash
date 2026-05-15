import React from "react";
import LegalLayout from "@/components/landing/LegalLayout";

export const metadata = {
  title: "Términos de Servicio - Kannicash",
};

export default function TermsPage() {
  return (
    <LegalLayout 
      title="Términos de Servicio" 
      subtitle="Reglas y condiciones para el uso de nuestra plataforma de gestión financiera."
    >
      <h2>1. Aceptación de los Términos</h2>
      <p>
        Al acceder y utilizar Kannicash, usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso. Si no está de acuerdo con alguna parte de estos términos, no podrá utilizar nuestros servicios.
      </p>

      <h2>2. Uso del Servicio</h2>
      <p>
        Kannicash es una herramienta diseñada para la gestión de préstamos y carteras financieras. El usuario es responsable de la veracidad de los datos ingresados y del cumplimiento de las leyes locales vigentes en la República Dominicana relacionadas con préstamos y tasas de interés.
      </p>

      <h2>3. Registro de Cuenta</h2>
      <p>
        Para utilizar el servicio, debe registrarse y mantener una cuenta activa. Usted es responsable de mantener la confidencialidad de su contraseña y de todas las actividades que ocurran bajo su cuenta.
      </p>

      <h2>4. Propiedad Intelectual</h2>
      <p>
        Todo el contenido, características y funcionalidad de la plataforma son propiedad exclusiva de Kannicash y están protegidos por las leyes internacionales de derechos de autor, marcas comerciales y otras leyes de propiedad intelectual.
      </p>

      <h2>5. Limitación de Responsabilidad</h2>
      <p>
        Kannicash no se hace responsable por pérdidas financieras resultantes del uso de la herramienta, errores en los datos ingresados por el usuario o interrupciones técnicas fuera de nuestro control razonable.
      </p>

      <h2>6. Modificaciones de los Términos</h2>
      <p>
        Nos reservamos el derecho de modificar estos términos en cualquier momento. Notificaremos a los usuarios sobre cambios significativos a través de la plataforma o por correo electrónico.
      </p>
    </LegalLayout>
  );
}
