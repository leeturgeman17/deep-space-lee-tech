import Starfield from "@/components/Starfield";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import ExpressServices from "@/components/ExpressServices";

import WhyLeeTech from "@/components/WhyLeeTech";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCTA from "@/components/FloatingCTA";
import SiteLoader from "@/components/SiteLoader";
import LeadPopup from "@/components/LeadPopup";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SiteLoader />
      {/* <Starfield /> */}
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <ExpressServices />
        
        <WhyLeeTech />
        <ProcessTimeline />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCTA />
      <AccessibilityWidget />
      <LeadPopup />
    </div>
  );
};

export default Index;
