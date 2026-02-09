import { motion } from "framer-motion";
import { Search, Cog, Rocket } from "lucide-react";

const steps = [
  { icon: Search, title: "גילוי", desc: "מבינים את העסק, הקהל והמטרות שלכם" },
  { icon: Cog, title: "בנייה ואוטומציה", desc: "מקימים מערכות, קמפיינים ותהליכים" },
  { icon: Rocket, title: "השקה", desc: "יוצאים לאוויר ומתחילים לייצר תוצאות" },
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="relative py-24 px-4">
      <div className="container max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-16 text-center"
        >
          <span className="copper-gradient-text">איך זה עובד?</span>
        </motion.h2>

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 justify-between">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-l from-primary/60 via-primary/30 to-primary/60" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center flex-1"
            >
              <div className="w-24 h-24 rounded-full copper-gradient-bg copper-glow flex items-center justify-center mb-5 relative z-10">
                <step.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm max-w-[200px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
