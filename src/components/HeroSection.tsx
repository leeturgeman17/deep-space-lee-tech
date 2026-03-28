import { motion } from "framer-motion";
import logo from "@/assets/leetech-logo-new.png";

const WordReveal = ({ words, className }: { words: string[]; className?: string }) => (
  <span className={className}>
    {words.map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
        className="inline-block mx-1"
      >
        {word}
      </motion.span>
    ))}
  </span>
);

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
          {/* Subtle fire base glow */}
          <motion.div
            className="absolute inset-0 z-0"
            animate={{
              background: [
                "radial-gradient(ellipse at center bottom, hsla(18,100%,50%,0.1) 0%, transparent 50%)",
                "radial-gradient(ellipse at center bottom, hsla(25,100%,55%,0.18) 0%, transparent 55%)",
                "radial-gradient(ellipse at center bottom, hsla(18,100%,50%,0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "blur(30px)", transform: "scale(1.3)" }}
          />

          {/* Outer fire ring */}
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

          {/* Inner embers */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`ember-${i}`}
              className="absolute rounded-full bg-primary"
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
                "drop-shadow(0 0 8px hsla(18,100%,50%,0.15)) drop-shadow(0 3px 15px hsla(18,100%,50%,0.08))",
                "drop-shadow(0 0 20px hsla(18,100%,50%,0.3)) drop-shadow(0 3px 30px hsla(18,100%,50%,0.15))",
                "drop-shadow(0 0 8px hsla(18,100%,50%,0.15)) drop-shadow(0 3px 15px hsla(18,100%,50%,0.08))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Tagline with word reveal */}
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
          העסק שלך על טייס אוטומטי. חשיפה חכמה, שירות 24/7, ונכסים דיגיטליים שבאמת מוכרים.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
