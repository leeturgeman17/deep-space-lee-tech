import { Target, Infinity, Brain, ChevronDown, TrendingUp, Zap, Bot, BarChart3, Globe, Megaphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ParallaxBg from "./ParallaxBg";

const services = [
  {
    icon: Target,
    title: "זורעים וקוצרים",
    verse: "הזורעים בדמעה ברינה יקצורו",
    subtitle: "קמפיינים ממוקדים שפוגעים בול",
    bullets: [
      { icon: Megaphone, text: "פרסום באינסטגרם, פייסבוק וטיקטוק שמביא המרות מכל סוג" },
      { icon: TrendingUp, text: "קמפיינים ממומנים בגוגל שמביאים לידים" },
      { icon: Globe, text: "קידום אורגני לאתרים ולרשתות החברתיות – נוכחות שצומחת מתוך תוכן, לא רק מתקציב" },
    ],
    tags: ["Instagram", "TikTok", "Facebook", "Google"],
    tagHue: 18,
  },
  {
    icon: Infinity,
    title: "עסק על טייס אוטומטי",
    subtitle: "Business Automation",
    bullets: [
      { icon: Zap, text: "הודעות ללקוחות נשלחות אוטומטית בוואטסאפ ובמייל" },
      { icon: BarChart3, text: "כל הלידים מסודרים במקום אחד – בלי אקסלים" },
      { icon: Target, text: "תזכורות, מעקב ומענה – בלי שתצטרך לזכור כלום" },
    ],
    tags: ["WhatsApp", "אוטומציה", "ניהול לידים"],
    tagHue: 30,
  },
  {
    icon: Brain,
    title: "טכנולוגיית העתיד",
    subtitle: "AI & Development",
    bullets: [
      { icon: Bot, text: "צ׳אטבוט חכם שעונה ללקוחות 24/7 במקומך" },
      { icon: Zap, text: "אתרים, דפי נחיתה ומערכות מותאמות לעסק שלך" },
      { icon: TrendingUp, text: "כלים שהופכים גולשים ללקוחות משלמים" },
    ],
    tags: ["צ׳אטבוט", "אתרים", "בינה מלאכותית"],
    tagHue: 10,
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
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, type: "spring", damping: 20 }}
      className="glass-card shimmer-border"
    >
      <button
        className="w-full p-5 flex items-center gap-4 text-right min-h-[56px]"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <motion.div
          className="shrink-0 w-12 h-12 rounded-xl copper-gradient-bg flex items-center justify-center"
          whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <service.icon className="w-6 h-6 text-primary-foreground" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold copper-gradient-text-shimmer leading-tight">
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
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <b.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{b.text}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {service.tags.map((tag, ti) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: `hsla(${service.tagHue + ti * 8}, 100%, 50%, 0.1)`,
                      borderColor: `hsla(${service.tagHue + ti * 8}, 100%, 50%, 0.25)`,
                      color: `hsl(${service.tagHue + ti * 8}, 100%, 60%)`,
                    }}
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
      <section id="services" className="relative py-10 px-4 section-alt">
        <div className="container max-w-lg mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-black mb-6 text-center"
          >
            <span className="copper-gradient-text-shimmer">המסלולים שלנו</span>
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
