import { motion } from "framer-motion";
import { Headset, Eye, Cpu, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Headset,
    title: "מענה 24/7",
    desc: "תמיד זמינים — בוטים חכמים ומערכות אוטומטיות שעובדים בשבילך מסביב לשעון.",
  },
  {
    icon: Eye,
    title: "שקיפות מלאה",
    desc: "דוחות בזמן אמת, גישה מלאה לנתונים — אתה תמיד יודע מה קורה.",
  },
  {
    icon: Cpu,
    title: "טכנולוגיה מתקדמת",
    desc: "AI, אוטומציה וכלים חדשניים שמעניקים לעסק שלך יתרון תחרותי.",
  },
  {
    icon: TrendingUp,
    title: "תוצאות מוכחות",
    desc: "עשרות עסקים שכבר שדרגו — הנתונים מדברים בעד עצמם.",
  },
];

const WhyLeeTech = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-center mb-14"
        >
          למה <span className="copper-gradient-text">LeeTech</span>?
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-md p-5 text-center hover:border-primary/50 transition-colors"
            >
              <motion.div
                className="mx-auto mb-3 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <b.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-bold text-sm md:text-base mb-1">{b.title}</h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLeeTech;
