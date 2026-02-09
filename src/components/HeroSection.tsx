import { MessageCircle, Flame } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/leetech-logo-new.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-6 px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Animated Logo with flame effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", damping: 10, stiffness: 100 }}
          className="mb-6 relative"
        >
          {/* Flame particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2"
              animate={{
                y: [0, -60 - i * 10, -80 - i * 15],
                x: [0, (i % 2 === 0 ? 1 : -1) * (10 + i * 5), (i % 2 === 0 ? 1 : -1) * (20 + i * 3)],
                opacity: [0, 0.8, 0],
                scale: [0.3, 1, 0.2],
              }}
              transition={{
                duration: 1.5 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            >
              <Flame className="w-5 h-5 text-primary" style={{ filter: "blur(1px)" }} />
            </motion.div>
          ))}

          <motion.img
            src={logo}
            alt="LeeTech"
            className="h-24 sm:h-32 md:h-40 w-auto mx-auto relative z-10"
            animate={{
              filter: [
                "drop-shadow(0 0 15px hsla(18,100%,50%,0.4)) drop-shadow(0 5px 30px hsla(18,100%,50%,0.2))",
                "drop-shadow(0 0 40px hsla(18,100%,50%,0.8)) drop-shadow(0 5px 60px hsla(18,100%,50%,0.5))",
                "drop-shadow(0 0 15px hsla(18,100%,50%,0.4)) drop-shadow(0 5px 30px hsla(18,100%,50%,0.2))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Tagline - centered */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-4 flex items-center justify-center gap-3"
        >
          <span className="copper-gradient-text">שיווק</span>
          <span className="silver-text">·</span>
          <span className="copper-gradient-text">מערכות</span>
          <span className="silver-text">·</span>
          <span className="copper-gradient-text">סדר</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm md:text-lg text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed px-2"
        >
          העסק שלך על טייס אוטומטי. חשיפה חכמה, שירות 24/7, ונכסים דיגיטליים שבאמת מוכרים.
        </motion.p>

        <motion.a
          href="https://wa.me/972587619264"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 copper-gradient-bg copper-glow text-primary-foreground font-bold text-base px-8 py-3.5 min-h-[48px] rounded-full transition-shadow duration-300 hover:shadow-[0_0_50px_hsla(18,100%,50%,0.4)]"
        >
          <MessageCircle className="w-6 h-6" />
          בואו נדבר
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
