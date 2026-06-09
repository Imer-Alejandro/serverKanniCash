import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SoportePageClient from "@/components/landing/SoportePage";

export const metadata = {
  title: "Soporte Técnico - Kannicash",
};

export default function SupportPage() {
  return (
    <div className="landing-wrapper">
      <Navbar />
      <SoportePageClient />
      <Footer />
    </div>
  );
}
