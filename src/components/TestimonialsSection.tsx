import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxBg from "./ParallaxBg";

const testimonials = [
  {
    name: "יוסי כהן",
    role: "מנכ״ל, קוהן מדיה",
    text: "מאז שהתחלנו לעבוד עם LeeTech, כמות הלידים שלנו עלתה ב-340%. המכונה שהם בנו לנו פשוט עובדת לבד.",
    stars: 5,
  },
  {
    name: "מיכל לוי",
    role: "בעלת חנות אונליין",
    text: "האוטומציה של הוואטסאפ חסכה לי עובד במשרה מלאה. הלקוחות מקבלים מענה תוך שניות, 24 שעות ביממה.",
    stars: 5,
  },
  {
    name: "אבי מזרחי",
    role: "יזם נדל״ן",
    text: "האתר והצ׳אטבוט שLeeTech בנו לי סוגרים עסקאות בלי שאני מרים טלפון. השקעה שהחזירה את עצמה תוך חודש.",
    stars: 5,
  },
  {
    name: "רונית שפירא",
    role: "מנהלת קליניקה",
    text: "מקצוענים ברמה אחרת. הקמפיינים מדויקים, השירות אישי, והתוצאות מדברות בעד עצמן.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ParallaxBg variant="orbs">
      <section id="testimonials" className="relative py-16 px-4">
        <div className="container max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
            className="text-2xl md:text-4xl font-bold mb-10"
          >
            <span className="copper-gradient-text">לקוחות מספרים</span>
          </motion.h2>

          <div className="relative min-h-[240px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6, type: "spring", damping: 20 }}
                className="glass-card p-6 md:p-8 relative"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />

                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonials[active].stars }).map((_, s) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: s * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-foreground text-base md:text-lg leading-relaxed mb-5">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full copper-gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {testimonials[active].name.charAt(0)}
                  </div>
                  <div className="text-right">
                    <p className="copper-gradient-text font-bold text-sm">{testimonials[active].name}</p>
                    <p className="text-muted-foreground text-xs">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "copper-gradient-bg w-8"
                    : "bg-muted hover:bg-muted-foreground/30"
                }`}
                aria-label={`ביקורת ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </ParallaxBg>
  );
};

export default TestimonialsSection;
