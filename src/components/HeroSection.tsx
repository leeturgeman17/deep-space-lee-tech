import { motion } from "framer-motion";
import logo from "@/assets/leetech-logo-new.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-6 px-4">
      <div className="text-center max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <img
            src={logo}
            alt="LeeTech — שיווק דיגיטלי, אוטומציה ו-AI"
            className="h-24 sm:h-32 md:h-40 w-auto mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 flex items-center justify-center gap-3"
        >
          <motion.span
            className="copper-gradient-text-shimmer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            שיווק
          </motion.span>
          <motion.span
            className="silver-text"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
          >
            ·
          </motion.span>
          <motion.span
            className="copper-gradient-text-shimmer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            מערכות
          </motion.span>
          <motion.span
            className="silver-text"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          >
            ·
          </motion.span>
          <motion.span
            className="copper-gradient-text-shimmer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            סדר
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-sm md:text-lg text-foreground font-bold mb-8 max-w-md mx-auto leading-relaxed px-2"
        >
          העסק שלך על טייס אוטומטי. חשיפה חכמה, שירות 24/6, ונכסים דיגיטליים שבאמת מוכרים.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
