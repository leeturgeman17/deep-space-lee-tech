import { useState, useEffect } from "react";
import { Star } from "lucide-react";

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
    <section className="relative py-24 px-4">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          <span className="copper-gradient-text">לקוחות מספרים</span>
        </h2>

        <div className="relative min-h-[220px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-card p-8 md:p-10 absolute inset-0 transition-all duration-700 ${
                i === active
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-copper text-copper" />
                ))}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="copper-gradient-text font-bold text-base">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
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
  );
};

export default TestimonialsSection;
