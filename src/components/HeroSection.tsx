import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/leetech-logo-new.png";
import heroVideo from "@/assets/video-project.mp4";

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
            className="h-24 sm:h-36 md:h-48 w-auto mx-auto drop-shadow-[0_0_40px_hsla(18,100%,50%,0.4)]"
            animate={{
              filter: [
                "drop-shadow(0 0 20px hsla(18,100%,50%,0.3))",
                "drop-shadow(0 0 50px hsla(18,100%,50%,0.7))",
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
          className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
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
          className="text-base md:text-xl text-muted-foreground mb-10 md:mb-12 max-w-xl mx-auto leading-relaxed px-2"
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
          className="inline-flex items-center gap-3 copper-gradient-bg copper-glow text-primary-foreground font-bold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-full transition-shadow duration-300 hover:shadow-[0_0_50px_hsla(18,100%,50%,0.4)]"
        >
          <MessageCircle className="w-6 h-6" />
          בואו נדבר
        </motion.a>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 md:mt-14 max-w-2xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_40px_hsla(18,100%,50%,0.2)]">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
