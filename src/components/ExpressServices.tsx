import { motion } from "framer-motion";
import { PenTool, Zap, Layout, Play } from "lucide-react";

const services = [
  { icon: PenTool, title: "עיצוב לוגו", desc: "Logo Design" },
  { icon: Zap, title: "קמפיין חד-פעמי", desc: "One-Time Ad" },
  { icon: Layout, title: "דף נחיתה", desc: "Landing Page" },
  { icon: Play, title: "סרטון קריאייטיב", desc: "Creative Video" },
];

const ExpressServices = () => {
  return (
    <section className="py-10 relative">
      {/* Visually separated background */}
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="container mx-auto px-4 relative z-10 max-w-lg">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 15 }}
          className="text-xl sm:text-2xl font-bold text-center mb-1"
        >
          <motion.span
            className="copper-gradient-text inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            ⚡ שירותי Express
          </motion.span>
        </motion.h2>
        <p className="text-center text-muted-foreground text-xs mb-6">
          עבודות קטנות ותוספים שמשדרגים את העסק – מהיר, חד, בלי התחייבות
        </p>

        {/* Horizontal scroll strip on mobile, grid on larger */}
        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="snap-center shrink-0 w-[140px] md:w-auto glass-card p-4 text-center"
            >
              <div className="w-10 h-10 rounded-xl copper-gradient-bg flex items-center justify-center mx-auto mb-2">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-sm mb-0.5">{s.title}</h3>
              <p className="text-muted-foreground text-[11px]">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpressServices;
