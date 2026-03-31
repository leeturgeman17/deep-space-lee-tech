import { useState } from "react";
import { Star, Quote, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ParallaxBg from "./ParallaxBg";
import testimonialImg1 from "@/assets/testimonial-whatsapp-1.jpeg";
import testimonialImg2 from "@/assets/testimonial-whatsapp-2.jpeg";

const testimonials = [
  {
    name: "דניאל ברוך",
    role: "בעלים, ברוך דיגיטל",
    text: "LeeTech הבינו את העסק שלי מהרגע הראשון. תוך שבועיים כבר היה לי מערך שיווק שלם שרץ לבד ומביא לידים איכותיים כל יום.",
    stars: 5,
  },
  {
    name: "מיכל לוי",
    role: "בעלת חנות אונליין",
    text: "האוטומציה של הוואטסאפ חסכה לי עובד במשרה מלאה. הלקוחות מקבלים מענה תוך שניות, 24 שעות ביממה.",
    stars: 5,
  },
  {
    name: "נועם אשכנזי",
    role: "בעל חנות יודאיקה",
    text: "הם לקחו רעיון גולמי והפכו אותו לאתר שמוכר בעצמו. המקצועיות והיצירתיות של LeeTech הם ברמה אחרת לגמרי.",
    stars: 5,
  },
  {
    name: "רונית שפירא",
    role: "מנהלת קליניקה",
    text: "מקצוענים ברמה אחרת. הקמפיינים מדויקים, השירות אישי, והתוצאות מדברות בעד עצמן.",
    stars: 5,
  },
];

const screenshots = [
  { src: testimonialImg1, alt: "משוב לקוח על מצגת בת מצווה AI" },
  { src: testimonialImg2, alt: "משוב לקוח על עיצוב לוגו" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const nextSlide = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <ParallaxBg variant="orbs">
      <section id="testimonials" className="relative py-16 px-4 section-alt">
        <div className="container max-w-3xl text-center">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 15, stiffness: 200 }}
            className="text-2xl md:text-4xl font-bold mb-2"
          >
            <span className="copper-gradient-text-shimmer">הוכחות בשטח: הלקוחות שלנו מדברים</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm mb-10"
          >
            במקום לדבר על תוצאות, בחרנו להראות לכם אותן. צילומי מסך אמיתיים מהשטח.
          </motion.p>

          {/* Text Testimonials Carousel */}
          <div className="relative min-h-[220px] mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}
                transition={{ duration: 0.6, type: "spring", damping: 20 }}
                className="glass-card p-6 md:p-8 relative"
              >
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

                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-5 italic font-light">
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>

                <div className="flex items-center justify-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full copper-gradient-bg p-[2px] animate-spin" style={{ animationDuration: "8s" }}>
                      <div className="w-full h-full rounded-full bg-card" />
                    </div>
                    <div className="w-12 h-12 rounded-full copper-gradient-bg flex items-center justify-center text-primary-foreground font-bold text-base relative z-10">
                      {testimonials[active].name.charAt(0)}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="copper-gradient-text font-bold text-sm">{testimonials[active].name}</p>
                    <p className="text-slate-accent text-xs">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-6 w-8 h-8 rounded-full bg-card/80 border border-border/40 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="הקודם">
              <ChevronLeft className="w-4 h-4 text-primary" />
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-6 w-8 h-8 rounded-full bg-card/80 border border-border/40 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="הבא">
              <ChevronRight className="w-4 h-4 text-primary" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mb-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "copper-gradient-bg w-8"
                    : "bg-muted hover:bg-muted-foreground/30 w-2.5"
                }`}
                aria-label={`ביקורת ${i + 1}`}
              />
            ))}
          </div>

          {/* Real Feedback Screenshots */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {screenshots.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightboxImg(img.src)}
                className="glass-card p-2 cursor-pointer group border border-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
                <p className="text-xs text-muted-foreground mt-2 group-hover:text-primary transition-colors">
                  לחצו להגדלה
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImg(null)}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="relative max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightboxImg(null)}
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full copper-gradient-bg flex items-center justify-center z-10"
                >
                  <X className="w-4 h-4 text-primary-foreground" />
                </button>
                <img
                  src={lightboxImg}
                  alt="צילום מסך מוגדל"
                  className="w-full h-auto rounded-xl border-2 border-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ParallaxBg>
  );
};

export default TestimonialsSection;
