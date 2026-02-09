import { motion } from "framer-motion";
import { Users, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "20,000+", label: "חשיפה קהילתית" },
  { icon: Shield, value: "100%", label: "שקיפות מלאה" },
  { icon: Clock, value: "24/7", label: "זמינות מערכת" },
];

const StatsStrip = () => {
  return (
    <section className="relative py-16 px-4">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-black copper-gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsStrip;
