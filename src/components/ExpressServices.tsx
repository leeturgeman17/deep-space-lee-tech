import { motion } from "framer-motion";
import { PenTool, Zap, Layout, Bot, MapPin, ClipboardCheck, CalendarDays, TrendingUp } from "lucide-react";

const services = [
  { icon: PenTool, title: "עיצוב לוגו", desc: "Logo Design" },
  { icon: Zap, title: "קמפיין חד-פעמי", desc: "One-Time Ad" },
  { icon: Layout, title: "דף נחיתה", desc: "Landing Page" },
  { icon: Bot, title: "בוט וואטסאפ בסיסי", desc: "WhatsApp Bot" },
  { icon: MapPin, title: "גוגל לעסק", desc: "Google My Business" },
  { icon: ClipboardCheck, title: "אבחון קמפיינים", desc: "Campaign Audit" },
  { icon: CalendarDays, title: "תוכנית תוכן AI", desc: "AI Content Plan" },
];

const ExpressServices = () => {
  return (
    <section className="py-10 relative">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="container mx-auto px-4 relative z-10 max-w-lg">
        <motion.h2
          initial={{ opacity: 0, scale: 0.3, y: -30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "spring", stiffness: 400, damping: 12 }}
          className="text-xl sm:text-2xl font-bold text-center mb-1"
        >
          <span className="copper-gradient-text-shimmer inline-block">
            ⚡ שירותי Express
          </span>
        </motion.h2>
        <p className="text-center text-muted-foreground text-xs mb-1 flex items-center justify-center gap-1">
          <TrendingUp className="w-3 h-3 text-primary inline" />
          עבודות מהירות ומשתלמות שישדרגו לכם את העסק
        </p>
        <p className="text-center text-xs font-bold text-primary/70 mb-6">
          שיווק · מערכות · סדר
        </p>

        <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:overflow-visible">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="snap-center shrink-0 w-[140px] md:w-auto glass-card shimmer-border p-4 text-center group"
            >
              <div className="w-10 h-10 rounded-xl copper-gradient-bg flex items-center justify-center mx-auto mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
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
