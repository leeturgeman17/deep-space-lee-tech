import Starfield from "@/components/Starfield";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Starfield />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
