import Starfield from "@/components/Starfield";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsStrip from "@/components/StatsStrip";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsStrip />
        <ProcessTimeline />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
};

export default Index;
