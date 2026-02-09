import { Target, Infinity, Brain, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import ParallaxBg from "./ParallaxBg";

const services = [
  {
    icon: Target,
    title: "שיווק דיגיטלי 360°",
    subtitle: "שליטה מלאה בכל הזירות (Meta, Google & More)",
    description:
      "אנחנו לא רק מעלים מודעה, אנחנו בונים לכם נוכחות דומיננטית בכל מקום שהלקוח שלכם נמצא בו.",
    bullets: [
      {
        label: "רשתות חברתיות (Social & Meta)",
        text: "ניהול קמפיינים חכמים בפייסבוק, אינסטגרם, טיקטוק ולינקדאין. אנחנו דואגים לקריאייטיב שעוצר את הגלילה ולטרגט (Targeting) מדויק שמביא לידים, לא רק לייקים.",
      },
      {
        label: "PPC וחיפוש",
        text: "כשלקוח מחפש את השירות שלכם בגוגל – אתם תהיו שם ראשונים.",
      },
      {
        label: "חשיפה רחבה (Display & Native)",
        text: "פרסום באתרי תוכן גדולים (כמו טבולה/אאוטבריין) כדי לצרוב את המותג שלכם בתודעה של הלקוחות.",
      },
    ],
    tags: ["Meta", "Google", "TikTok", "LinkedIn", "Native Ads"],
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
    tags: ["CRM Sync", "Zero Errors", "Instant Reply", "WhatsApp"],
  },
  {
    icon: Brain,
    title: "פתרונות AI ופיתוח",
    subtitle: "כל פתרונות הבינה המלאכותית תחת קורת גג אחת",
    description:
      "העולם הטכנולוגי רץ קדימה – אנחנו מוודאים שאתם מובילים את המירוץ. פתרונות AI מכל הסוגים, מותאמים אישית לצרכים שלכם.",
    bullets: [
      {
        label: "נציגים וירטואליים (Agents)",
        text: "צ'אט-בוטים וסוכנים חכמים שיודעים לנהל שיחות מכירה שלמות, לתת שירות ולתפעל תהליכים מורכבים.",
      },
      {
        label: "יצירת תוכן (Generative AI)",
        text: "מערכות ליצירת טקסטים, תמונות ווידאו שיווקי באופן אוטומטי לחיסכון אדיר בעלויות שיווק.",
      },
      {
        label: "ניתוח דאטה",
        text: "אלגוריתמים שיודעים לקחת את המידע העסקי שלכם ולהפיק ממנו תובנות לצמיחה.",
      },
      {
        label: "בניית נכסים",
        text: "אתרים מהירים ודפי נחיתה חכמים שנבנים בטכנולוגיות העתיד.",
      },
    ],
    tags: ["Virtual Agents", "Generative AI", "Data Analysis", "Custom Dev"],
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      custom={index}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", damping: 20, stiffness: 150, delay: index * 0.15 }}
      className="glass-card overflow-hidden"
    >
      {/* Card Header */}
      <div
        className="p-8 md:p-10 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start gap-5">
          <div className="shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-2xl copper-gradient-bg">
            <service.icon className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl md:text-3xl font-bold copper-gradient-text mb-1">
              {service.title}
            </h3>
            <p className="text-base md:text-lg text-foreground/70 font-medium">
              {service.subtitle}
            </p>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0 mt-2"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </div>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: expanded ? "auto" : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0">
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 border-t border-border/30 pt-6">
            {service.description}
          </p>

          <ul className="space-y-6">
            {service.bullets.map((bullet, bIdx) => (
              <li key={bIdx} className="flex gap-4">
                <div className="shrink-0 w-2 h-2 rounded-full copper-gradient-bg mt-3" />
                <div>
                  <span className="font-bold text-foreground text-base md:text-lg block mb-1">
                    {bullet.label}
                  </span>
                  <span className="text-muted-foreground text-base leading-relaxed">
                    {bullet.text}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border/30">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <ParallaxBg variant="glow">
    <section id="services" className="relative py-24 px-4">
      <div className="container max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black mb-16 text-center"
        >
          <span className="copper-gradient-text">המסלולים שלנו</span>
        </motion.h2>

        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
    </ParallaxBg>
  );
};

export default ServicesSection;
