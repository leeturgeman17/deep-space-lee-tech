import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/leetech-logo-new.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img
            src={logo}
            alt="LeeTech"
            className="h-32 md:h-44 w-auto mx-auto drop-shadow-[0_0_40px_hsla(18,100%,50%,0.4)]"
            animate={{
              filter: [
                "drop-shadow(0 0 20px hsla(18,100%,50%,0.3))",
                "drop-shadow(0 0 40px hsla(18,100%,50%,0.6))",
                "drop-shadow(0 0 20px hsla(18,100%,50%,0.3))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-5xl md:text-7xl font-black leading-tight mb-6"
        >
          <span className="copper-gradient-text">שיווק</span>
          <span className="silver-text mx-3">·</span>
          <span className="copper-gradient-text">מערכות</span>
          <span className="silver-text mx-3">·</span>
          <span className="copper-gradient-text">סדר</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed"
        >
          העסק שלך על טייס אוטומטי. חשיפה חכמה, שירות 24/7, ונכסים דיגיטליים שבאמת מוכרים.
        </motion.p>

        <motion.a
          href="https://wa.me/972587619264"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 copper-gradient-bg copper-glow text-primary-foreground font-bold text-lg px-10 py-4 rounded-full transition-shadow duration-300 hover:shadow-[0_0_50px_hsla(18,100%,50%,0.4)]"
        >
          <MessageCircle className="w-6 h-6" />
          בואו נדבר
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
