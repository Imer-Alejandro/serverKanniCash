import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import PremiumPricingHero from "@/components/landing/PremiumPricingHero";
import PricingSection from "@/components/landing/PricingSection";
import PricingComparison from "@/components/landing/PricingComparison";
import PricingHighlights from "@/components/landing/PricingHighlights";
import PricingFAQ from "@/components/landing/PricingFAQ";
import PricingCTA from "@/components/landing/PricingCTA";
import ScrollReveal from "@/components/landing/ScrollReveal";

export const metadata = {
  title: "Planes y Precios - Kannicash",
  description: "Encuentra el plan perfecto para escalar tu negocio de préstamos en República Dominicana. Transparencia, seguridad y control total.",
};

export default function PricingPage() {
  return (
    <div className="landing-wrapper">
      <Navbar />

      {/* PREMIUM HERO — white bg, RD dotted map, centered phone */}
      <PremiumPricingHero />

      {/* PRICING PLANS — overlapping the hero bottom */}
      <div className="pricing-page-section" id="precios" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px 120px" }}>
          <PricingSection />
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <PricingHighlights />

      {/* PRICING COMPARISON */}
      <section style={{
        padding: "80px 24px",
        background: "var(--white)"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <ScrollReveal>
            <PricingComparison />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <PricingFAQ />
       
      {/* CTA SECTION */}
      <PricingCTA />

      <Footer />
    </div>
  );
}
