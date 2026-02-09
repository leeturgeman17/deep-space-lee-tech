import { motion } from "framer-motion";
import { Search, Cog, Rocket, Moon } from "lucide-react";
import { useState } from "react";
import ParallaxBg from "./ParallaxBg";

const steps = [
  { icon: Search, title: "גילוי", desc: "מבינים את העסק, הקהל והמטרות שלכם" },
  { icon: Cog, title: "בנייה ואוטומציה", desc: "מקימים מערכות, קמפיינים ותהליכים" },
  { icon: Rocket, title: "השקה", desc: "יוצאים לאוויר ומתחילים לייצר תוצאות" },
];

const StepIcon = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-16 h-16 md:w-24 md:h-24 rounded-full copper-gradient-bg copper-glow flex items-center justify-center mb-4 md:mb-5 relative z-10 cursor-pointer"
    >
      {/* Discovery - magnifying glass wobble */}
      {index === 0 && (
        <motion.div
          animate={hovered ? { rotate: [0, -15, 15, -10, 10, 0], scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.6 }}
        >
          <step.icon className="w-7 h-7 md:w-10 md:h-10 text-primary-foreground" />
        </motion.div>
      )}

      {/* Build & Automate - spinning gear */}
      {index === 1 && (
        <motion.div
          animate={hovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1, ease: "linear", repeat: hovered ? Infinity : 0 }}
        >
          <step.icon className="w-7 h-7 md:w-10 md:h-10 text-primary-foreground" />
        </motion.div>
      )}

      {/* Launch - rocket flies up */}
      {index === 2 && (
        <div className="relative">
          <motion.div
            animate={hovered ? {
              y: [-0, -20, -35],
              x: [0, 3, 8],
              scale: [1, 0.9, 0.7],
              opacity: [1, 0.8, 0],
            } : { y: 0, x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <step.icon className="w-7 h-7 md:w-10 md:h-10 text-primary-foreground" />
          </motion.div>
          {/* Moon target */}
          <motion.div
            className="absolute -top-6 right-0"
            animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Moon className="w-4 h-4 text-primary-foreground/60" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

const ProcessTimeline = () => {
  return (
    <ParallaxBg variant="grid">
      <section id="process" className="relative py-16 px-4">
        <div className="container max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-black mb-8 md:mb-12 text-center"
          >
            <span className="copper-gradient-text">איך זה עובד?</span>
          </motion.h2>

          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 justify-between">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-l from-primary/60 via-primary/30 to-primary/60" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 15, stiffness: 200, delay: i * 0.25 }}
                className="relative flex flex-col items-center text-center flex-1"
              >
                <StepIcon step={step} index={i} />
                <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ParallaxBg>
  );
};

export default ProcessTimeline;
