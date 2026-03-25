import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: 20000, suffix: "+", label: "חשיפה קהילתית" },
  { icon: Shield, value: 100, suffix: "%", label: "שקיפות מלאה" },
  { icon: Clock, value: 24, suffix: "/7", label: "זמינות מערכת" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 12, stiffness: 150, delay: i * 0.2 }}
                className={`text-center relative ${
                  i < stats.length - 1
                    ? "md:border-l md:border-border/30"
                    : ""
                }`}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 pulse-glow" />
                <div className="text-3xl md:text-5xl font-black copper-gradient-text-shimmer mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
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
