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
    q: "כמה זמן לוקח להקים מערכת אוטומציה?",
    a: "תלוי במורכבות. אוטומציה בסיסית (סנכרון CRM + מענה אוטומטי בוואטסאפ) יכולה לעלות לאוויר תוך 3-5 ימי עבודה. מערכת מורכבת עם מספר אינטגרציות לוקחת בין 2-4 שבועות.",
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
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-24 px-4">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-16 text-center"
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
                  <AccordionTrigger className="text-base md:text-lg font-bold text-foreground hover:text-primary hover:no-underline text-right py-5 px-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed px-6 pb-5">
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
