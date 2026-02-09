import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "מה כולל שירות שיווק דיגיטלי 360°?",
    a: "השירות כולל ניהול קמפיינים מקצה לקצה בכל הפלטפורמות: פייסבוק, אינסטגרם, טיקטוק, גוגל (PPC + SEO), לינקדאין ופרסום נייטיב. אנחנו מטפלים בקריאייטיב, בטרגוט ובאופטימיזציה שוטפת – כדי שתקבלו לידים איכותיים ולא רק חשיפה.",
  },
  {
    q: "מה ההבדל בין צ'אטבוט לבין נציג וירטואלי (Agent)?",
    a: "צ'אטבוט קלאסי עובד לפי תסריט קבוע. נציג וירטואלי מבוסס AI יודע להבין הקשר, לענות על שאלות מורכבות, לנהל שיחת מכירה שלמה ואפילו לבצע פעולות במערכות שלכם – הכל באופן אוטונומי.",
  },
  {
    q: "כמה זמן לוקח להקים מערכת?",
    a: (
      <span>
        תלוי במורכבות הפרויקט ובכמות האינטגרציות. כדי שנוכל לתת לכם הערכת זמנים מדויקת,{" "}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-primary underline hover:text-primary/80 font-bold"
        >
          מלאו את טופס יצירת הקשר
        </a>{" "}
        עם פרטי העסק ומה שאתם צריכים – ואנחנו נחזור אליכם עם תוכנית עבודה והערכת זמנים.
      </span>
    ),
  },
  {
    q: "האם השירות מתאים לעסקים קטנים?",
    a: "בהחלט! רוב הלקוחות שלנו הם עסקים קטנים ובינוניים. אנחנו מתאימים את הפתרון לתקציב ולגודל העסק – אפשר להתחיל קטן ולגדול בהדרגה.",
  },
  {
    q: "מה סוג האתרים שאתם בונים?",
    a: "אנחנו בונים אתרים מהירים בטכנולוגיות מתקדמות – דפי נחיתה, אתרי תדמית, חנויות אונליין ואפליקציות ווב. כל אתר מותאם למובייל, ממוקד המרות ומחובר למערכות השיווק והאוטומציה שלכם.",
  },
  {
    q: "איך עובד תהליך ניתוח הדאטה?",
    a: "אנחנו מחברים את כל מקורות המידע שלכם (גוגל אנליטיקס, CRM, פלטפורמות פרסום) לדאשבורד מרכזי. אלגוריתמים חכמים מזהים דפוסים, מנבאים מגמות ומספקים המלצות פעולה לצמיחה.",
  },
  {
    q: "מה בדיוק אתם עושים ב-LeeTech?",
    a: "אנחנו מתמחים בשלושה תחומים: שיווק דיגיטלי – ניהול קמפיינים, SEO ויצירת לידים בכל הפלטפורמות. אוטומציה עסקית – חיבור מערכות, תהליכים אוטומטיים ומענה 24/7 שחוסך זמן וכסף. פיתוח ובינה מלאכותית – בניית אתרים, אפליקציות ונציגים וירטואליים חכמים שמוכרים בשבילכם.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-16 px-4">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-black mb-8 md:mb-12 text-center"
        >
          <span className="copper-gradient-text">שאלות נפוצות</span>
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
      </div>
    </section>
  );
};

export default FAQSection;
