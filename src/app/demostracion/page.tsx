import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import DemoInteractive from "@/components/landing/demostracion/DemoInteractive";

export const metadata = {
  title: "Demo - Kannicash",
  description: "Explora cómo funciona Kannicash en una demo visual interactiva de préstamos y cuotas.",
};

export default function DemoPage() {
  return (
    <div className="landing-wrapper demo-page">
      <Navbar />
      <DemoInteractive />
      <Footer />
    </div>
  );
}
