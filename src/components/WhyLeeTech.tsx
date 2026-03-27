import { motion } from "framer-motion";
import { Headset, Eye, Cpu, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Headset, title: "מענה 24/7", desc: "מערכות שעובדות מסביב לשעון." },
  { icon: Eye, title: "משא ומתן באמונה", desc: "אנחנו דוגלים בנשאת ונתת באמונה." },
  { icon: Cpu, title: "חכמה, בינה ודעת", desc: "חיבור בין 'בינת' המכונה ל'דעת' האנושית. אנחנו רותמים את ה-AI לבניית פתרונות חכמים, יצירת תוכן (UGC) ואפיון מדויק שמביא לחיסכון אדיר בעסק.", highlightWord: "בינה", glowIcon: true },
  { icon: TrendingUp, title: "תוצאות מוכחות", desc: "עשרות עסקים שכבר שדרגו." },
];

const WhyLeeTech = () => {
  return (
    <section className="relative py-14 px-4 section-alt">
      <div className="max-w-lg mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-black text-center mb-8"
        >
          <span className="text-lg sm:text-xl">למה</span>{" "}
          <span className="copper-gradient-text-shimmer text-3xl sm:text-5xl">LeeTech</span>
          <span className="text-lg sm:text-xl">?</span>
        </motion.h2>

        <div className="grid grid-cols-2 gap-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, type: "spring", damping: 18 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-card p-4 text-center relative overflow-hidden group"
            >
              {/* Right accent strip */}
              <div className="absolute top-0 right-0 w-1 h-full copper-gradient-bg opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className={`mx-auto mb-3 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors ${b.glowIcon ? 'shadow-[0_0_16px_hsl(var(--primary)/0.5)]' : ''}`}>
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1">
                {b.highlightWord
                  ? b.title.split(b.highlightWord).map((part, idx, arr) => (
                      <span key={idx}>
                        {part}
                        {idx < arr.length - 1 && (
                          <span className="text-primary">{b.highlightWord}</span>
                        )}
                      </span>
                    ))
                  : b.title}
              </h3>
              <div className="w-8 h-[1px] bg-primary/30 mx-auto mb-1" />
              <p className="text-muted-foreground text-xs leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLeeTech;
