import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import videoSrc from "@/assets/video-project.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black leading-tight mb-6"
        >
          <span className="copper-gradient-text">הופכים גולשים ללקוחות:</span>
          <br />
          <span className="silver-text">שיווק, אוטומציה ו-AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed"
        >
          העסק שלך על טייס אוטומטי. חשיפה חכמה, שירות 24/7, ונכסים דיגיטליים שבאמת מוכרים.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 40px hsla(18,100%,50%,0.35), 0 0 80px hsla(18,100%,50%,0.15)",
            border: "1.5px solid hsla(18,100%,50%,0.5)",
          }}
        >
          <div className="aspect-video">
            <video
              src={videoSrc}
              controls
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.a
          href="https://wa.me/972000000000"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
