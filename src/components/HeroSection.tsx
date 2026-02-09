import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/leetech-logo-new.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center pt-20 pb-6 px-4">
      <div className="text-center max-w-lg mx-auto">
        {/* Animated Logo with burning bush fire effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", damping: 10, stiffness: 100 }}
          className="mb-6 relative inline-block"
        >
          {/* Realistic fire base glow */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{
              background: [
                "radial-gradient(ellipse at center bottom, hsla(18,100%,50%,0.3) 0%, transparent 60%)",
                "radial-gradient(ellipse at center bottom, hsla(25,100%,55%,0.5) 0%, transparent 70%)",
                "radial-gradient(ellipse at center bottom, hsla(18,100%,50%,0.3) 0%, transparent 60%)",
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "blur(20px)", transform: "scale(1.5)" }}
          />

          {/* Outer fire ring - large flames */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`outer-${i}`}
              className="absolute"
              style={{
                left: `${30 + Math.sin(i * 0.628) * 40}%`,
                bottom: `${10 + Math.cos(i * 0.9) * 15}%`,
              }}
              animate={{
                y: [0, -40 - Math.random() * 50, -80 - Math.random() * 40],
                x: [0, (i % 2 === 0 ? 1 : -1) * (5 + Math.random() * 15)],
                opacity: [0, 0.9, 0],
                scale: [0.4, 1.2 + Math.random() * 0.5, 0.1],
                rotate: [0, (i % 2 === 0 ? 1 : -1) * 20],
              }}
              transition={{
                duration: 1 + Math.random() * 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeOut",
              }}
            >
              <Flame
                className="text-primary"
                style={{
                  width: `${14 + Math.random() * 10}px`,
                  height: `${14 + Math.random() * 10}px`,
                  filter: "blur(0.5px)",
                }}
              />
            </motion.div>
          ))}

          {/* Inner embers - tiny sparks */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`ember-${i}`}
              className="absolute rounded-full bg-orange-400"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                left: `${25 + Math.random() * 50}%`,
                bottom: "20%",
              }}
              animate={{
                y: [0, -60 - Math.random() * 80],
                x: [(i % 2 === 0 ? 1 : -1) * Math.random() * 30],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.8 + Math.random() * 1,
                repeat: Infinity,
                delay: i * 0.2 + Math.random() * 0.5,
                ease: "easeOut",
              }}
            />
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

        {/* Tagline */}
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
          className="text-sm md:text-lg text-foreground font-bold mb-8 max-w-md mx-auto leading-relaxed px-2"
        >
          העסק שלך על טייס אוטומטי. חשיפה חכמה, שירות 24/7, ונכסים דיגיטליים שבאמת מוכרים.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
