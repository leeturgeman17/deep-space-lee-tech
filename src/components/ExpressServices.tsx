import { motion } from "framer-motion";
import { PenTool, Zap, Layout, Play } from "lucide-react";

const services = [
  { icon: PenTool, title: "זהות מיתוגית מיידית", desc: "לוגו ומיתוג" },
  { icon: Zap, title: "קמפיין ממוקד חד-פעמי", desc: "Meta / TikTok Ad Blast" },
  { icon: Layout, title: "דף נחיתה במהירות", desc: "One-Pager Website" },
  { icon: Play, title: "הפקת קריאייטיב", desc: "וידאו ופרסומות" },
];

const ExpressServices = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-secondary/40" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-center mb-3"
        >
          <span className="copper-gradient-text">שירותי Spotlight</span>{" "}
          <span className="text-muted-foreground text-lg font-normal">(פרויקטים חד-פעמיים)</span>
        </motion.h2>
        <p className="text-center text-muted-foreground text-sm mb-10">מהיר • חד • בלי התחייבות</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, borderColor: "hsl(18, 100%, 50%)" }}
              className="glass-card p-5 text-center cursor-default"
            >
              <div className="w-10 h-10 rounded-xl copper-gradient-bg flex items-center justify-center mx-auto mb-3">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-sm mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-xs">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpressServices;
