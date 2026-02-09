import { motion } from "framer-motion";
import { Headset, Eye, Cpu, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Headset, title: "מענה 24/7", desc: "מערכות שעובדות מסביב לשעון." },
  { icon: Eye, title: "משא ומתן באמונה", desc: "אנחנו דוגלים בנשאת ונתת באמונה." },
  { icon: Cpu, title: "טכנולוגיה מתקדמת", desc: "AI וכלים חדשניים לעסק שלך." },
  { icon: TrendingUp, title: "תוצאות מוכחות", desc: "עשרות עסקים שכבר שדרגו." },
];

const WhyLeeTech = () => {
  return (
    <section className="relative py-14 px-4">
      <div className="max-w-lg mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-black text-center mb-8"
        >
          <span className="text-lg sm:text-xl">למה</span> <span className="copper-gradient-text text-3xl sm:text-5xl">LeeTech</span><span className="text-lg sm:text-xl">?</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-4 text-center"
            >
              <div className="mx-auto mb-2 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-0.5">{b.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLeeTech;
