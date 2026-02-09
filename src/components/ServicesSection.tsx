import { Target, Infinity, Brain, ChevronDown, TrendingUp, Zap, Bot, BarChart3, Globe, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ParallaxBg from "./ParallaxBg";

const services = [
  {
    icon: Target,
    title: "שליטה בזירה",
    subtitle: "Marketing 360°",
    bullets: [
      { icon: Megaphone, text: "קמפיינים חכמים ברשתות" },
      { icon: TrendingUp, text: "PPC שמביא לידים, לא לייקים" },
      { icon: Globe, text: "חשיפה רחבה ב-Display & Native" },
    ],
    tags: ["Meta", "Google", "TikTok"],
  },
  {
    icon: Infinity,
    title: "עסק על טייס אוטומטי",
    subtitle: "Business Automation",
    bullets: [
      { icon: Zap, text: "פועל 24/7 בלי התערבות" },
      { icon: BarChart3, text: "סנכרון CRM מלא" },
      { icon: Target, text: "אפס טעויות אנושיות" },
    ],
    tags: ["CRM Sync", "WhatsApp", "Zero Errors"],
  },
  {
    icon: Brain,
    title: "טכנולוגיית העתיד",
    subtitle: "AI & Development",
    bullets: [
      { icon: Bot, text: "נציגים וירטואליים חכמים" },
      { icon: Zap, text: "יצירת נכסים דיגיטליים" },
      { icon: TrendingUp, text: "המרות גבוהות מוכחות" },
    ],
    tags: ["Virtual Agents", "AI", "High Conversion"],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="glass-card"
    >
      <button
        className="w-full p-5 flex items-center gap-4 text-right min-h-[56px]"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <div className="shrink-0 w-12 h-12 rounded-xl copper-gradient-bg flex items-center justify-center">
          <service.icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold copper-gradient-text leading-tight">
            {service.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{service.subtitle}</p>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-border/20">
              <ul className="space-y-3 mt-3">
                {service.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <b.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{b.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <ParallaxBg variant="glow">
      <section id="services" className="relative py-16 px-4">
        <div className="container max-w-lg mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-black mb-8 text-center"
          >
            <span className="copper-gradient-text">המסלולים שלנו</span>
          </motion.h2>

          <div className="space-y-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </ParallaxBg>
  );
};

export default ServicesSection;
