import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "תוך כמה זמן אני אראה תוצאות מהקמפיינים?",
    a: "אנחנו לא מבטיחים ניסים בן לילה כי אנחנו מחויבים לנתוני אמת. קמפיינים ממומנים מתחילים לייצר תנועה מיד, אבל ה'קסם' קורה אחרי שבועיים-שלושה של למידת מכונה (Machine Learning), כשמערכת האופטימיזציה שלנו מבינה מי הקהל המדויק שלך.",
  },
  {
    q: "אני עסק קטן, זה לא 'גדול' עלי?",
    a: "להפך. אוטומציה ו-AI הם בדיוק הכלים שמאפשרים לעסק קטן להתנהל כמו חברה גדולה בלי לגייס עשרה עובדים. השירותים שלנו מודולריים – אפשר להתחיל בפרויקט אקספרס קטן ולגדול משם בהתאם לברכה וההצלחה של העסק.",
  },
  {
    q: "כמה זה עולה לי בשורה התחתונה?",
    a: 'אנחנו לא מוכרים "חבילות מדף". כל עסק הוא עולם ומלואו, ולכן המחיר נקבע לפי מורכבות המערכת והיקף הקמפיין. המטרה שלנו היא שההשקעה שלך תחזור אליך פי כמה (ROI חיובי), אחרת לא עשינו כלום. אנחנו מאמינים ביושרה מלאה – הצעת המחיר שתקבל היא סופית וברורה, בלי "הפתעות" בדרך.',
  },
  {
    q: "מה עושים עם קמפיינים בשבת? מכבים?",
    a: "מבצעים שאלת רב.",
  },
  {
    q: "למה לבחור דווקא ב-LeeTech?",
    a: "כי אנחנו משלבים שני עולמות: מקצוענות טכנולוגית בקצה של הקצה יחד עם ערכים של פעם – יושרה, שקיפות, ואמונה בכל מה שאנחנו עושים. כשאתה עובד איתנו, אתה יודע שיש מישהו שבאמת אכפת לו מההצלחה של העסק שלך ורואה בה שליחות.",
  },
];

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="faq" className="relative py-16 px-4">
      <div className="container max-w-3xl">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full flex items-center justify-center gap-3 mb-4 cursor-pointer group"
        >
          <h2 className="text-2xl md:text-4xl font-black">
            <span className="copper-gradient-text">שאלות נפוצות</span>
          </h2>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-primary" />
          </motion.div>
        </motion.button>

        <p className="text-center text-muted-foreground text-sm mb-6">
          לחצו לפתיחת השאלות
        </p>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="glass-card p-0"
                  >
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`faq-${i}`} className="border-none">
                        <AccordionTrigger className="text-sm md:text-lg font-bold text-foreground hover:text-primary hover:no-underline text-right py-4 px-4 md:px-6">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed px-4 md:px-6 pb-4 md:pb-5">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FAQSection;
