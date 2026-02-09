import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 animate-fade-in-up">
          <span className="copper-gradient-text">הופכים גולשים ללקוחות:</span>
          <br />
          <span className="silver-text">שיווק, אוטומציה ו-AI</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up animation-delay-200 max-w-xl mx-auto leading-relaxed">
          העסק שלך על טייס אוטומטי. חשיפה חכמה, שירות 24/7, ונכסים דיגיטליים שבאמת מוכרים.
        </p>

        <a
          href="https://wa.me/972000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 copper-gradient-bg copper-glow text-primary-foreground font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_hsla(30,60%,46%,0.4)] animate-fade-in-up animation-delay-400"
        >
          <MessageCircle className="w-6 h-6" />
          בואו נדבר
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
