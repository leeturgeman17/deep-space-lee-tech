import { Target, Infinity, Brain } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Target,
    title: "שיווק דיגיטלי 360°",
    subtitle: "שליטה מלאה בכל הזירות",
    description:
      "אנחנו לא רק מעלים מודעה, אנחנו בונים לכם נוכחות דומיננטית בכל מקום שהלקוח שלכם נמצא בו.",
    bullets: [
      {
        label: "רשתות חברתיות",
        text: "ניהול קמפיינים חכמים בפייסבוק, אינסטגרם, טיקטוק ולינקדאין. קריאייטיב שעוצר את הגלילה וטרגט מדויק שמביא לידים, לא רק לייקים.",
      },
      {
        label: "PPC וחיפוש",
        text: "כשלקוח מחפש את השירות שלכם בגוגל – אתם תהיו שם ראשונים.",
      },
      {
        label: "חשיפה רחבה",
        text: "פרסום באתרי תוכן גדולים (טבולה/אאוטבריין) כדי לצרוב את המותג שלכם בתודעה של הלקוחות.",
      },
    ],
    tags: ["Meta", "Google", "TikTok", "Native Ads"],
  },
  {
    icon: Infinity,
    title: "אוטומציות עסקיות",
    subtitle: "העסק עובד 24/7 על טייס אוטומטי",
    description:
      "תשתית טכנולוגית שמחברת בין כל המערכות שלכם וחוסכת לכם עשרות שעות עבודה בחודש.",
    bullets: [
      {
        label: "סנכרון מלא",
        text: "הוואטסאפ מדבר עם ה-CRM, הליד מהאתר נכנס ישר ליומן הפגישות, והחשבונית יוצאת לבד.",
      },
      {
        label: "אפס טעויות",
        text: "המערכת לא שוכחת לחזור ללקוח, לא מתבלבלת בנתונים ולא יוצאת להפסקת צהריים.",
      },
      {
        label: "שירות לקוחות מיידי",
        text: "מענה אוטומטי חכם ללקוחות בכל שעה ביום, שמחמם את הליד לפני שאתם בכלל מדברים איתו.",
      },
    ],
    tags: ["CRM Sync", "Zero Errors", "Instant Reply"],
  },
  {
    icon: Brain,
    title: "פתרונות AI ופיתוח",
    subtitle: "כל פתרונות הבינה המלאכותית תחת קורת גג אחת",
    description:
      "העולם הטכנולוגי רץ קדימה – אנחנו מוודאים שאתם מובילים את המירוץ. פתרונות AI מותאמים אישית לצרכים שלכם.",
    bullets: [
      {
        label: "נציגים וירטואליים",
        text: "צ'אט-בוטים וסוכנים חכמים שיודעים לנהל שיחות מכירה שלמות, לתת שירות ולתפעל תהליכים מורכבים.",
      },
      {
        label: "יצירת תוכן",
        text: "מערכות ליצירת טקסטים, תמונות ווידאו שיווקי באופן אוטומטי לחיסכון אדיר בעלויות.",
      },
      {
        label: "ניתוח דאטה",
        text: "אלגוריתמים שלוקחים את המידע העסקי שלכם ומפיקים ממנו תובנות לצמיחה.",
      },
      {
        label: "בניית נכסים",
        text: "אתרים מהירים ודפי נחיתה חכמים שנבנים בטכנולוגיות העתיד.",
      },
    ],
    tags: ["Virtual Agents", "Generative AI", "Data Analysis", "Custom Dev"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="container max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="copper-gradient-text">השירותים שלנו</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                borderColor: "hsla(18,100%,50%,0.6)",
                boxShadow: "0 0 30px hsla(18,100%,50%,0.2)",
                transition: { duration: 0.3 },
              }}
              className="glass-card p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 copper-gradient-bg self-center">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-1 text-center copper-gradient-text">
                {service.title}
              </h3>
              <p className="text-sm font-medium text-foreground/70 text-center mb-4">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-4 flex-1">
                {service.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-sm leading-relaxed">
                    <span className="font-bold text-foreground">{bullet.label}: </span>
                    <span className="text-muted-foreground">{bullet.text}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border/30">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
