import type { Metadata } from "next";
import { Sora, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./landing.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kannicash.com"),
  title: "Kannicash - Gestión de Préstamos para RD 🇩🇴",
  description: "La app diseñada para prestamistas informales en República Dominicana. Control total de clientes, cuotas e intereses con Kannicash.",
  keywords: ["préstamos", "gestión de créditos", "app de préstamos", "prestamistas", "República Dominicana", "finanzas"],
  authors: [{ name: "Kannicash", url: "https://kannicash.com" }],
  creator: "Kannicash Team",
  publisher: "Kannicash",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://kannicash.com",
    siteName: "Kannicash",
    title: "Kannicash - Gestión de Préstamos para RD 🇩🇴",
    description: "La app diseñada para prestamistas informales en República Dominicana. Control total de clientes, cuotas e intereses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kannicash - Gestión de Préstamos",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kannicash - Gestión de Préstamos para RD 🇩🇴",
    description: "La app diseñada para prestamistas informales en República Dominicana.",
    images: ["/og-image.jpg"],
    creator: "@kannicash",
  },
  alternates: {
    canonical: "https://kannicash.com",
    languages: {
      "es-DO": "https://kannicash.com",
      "es": "https://kannicash.com",
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema.org JSON-LD para mejor SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kannicash",
              url: "https://kannicash.com",
              logo: "https://kannicash.com/favicon.ico",
              description: "La app diseñada para prestamistas informales en República Dominicana.",
              sameAs: [
                "https://blog.kannicash.com",
                "https://portal.kannicash.com",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                url: "https://kannicash.com/soporte",
              },
              areaServed: "DO",
              serviceType: "Loan Management Software",
            }),
          }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Kannicash" />
      </head>
      <body>{children}</body>
    </html>
  );
}
