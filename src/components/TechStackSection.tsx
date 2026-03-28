import { MessageSquare, Brain, Network, Terminal, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxBg from "./ParallaxBg";

const techCards = [
  {
    icon: MessageSquare,
    title: "ManyChat",
    subtitle: "הופכים מעורבות ללידים",
    description: "מענה אוטומטי לכל תגובה או הודעה – הלקוח הגיב? הוא מיד מקבל הצעה אישית.",
  },
  {
    icon: Brain,
    title: "סוכני AI חכמים",
    subtitle: "צוות שעובד 24/6",
    description: "נציג וירטואלי שמנהל שיחות מכירה ושירות מורכבות – בדיוק כמו נציג אנושי.",
  },
  {
    icon: Network,
    title: "תשתיות n8n",
    subtitle: "העסק על טייס אוטומטי",
    description: "מחברים את כל המערכות שלכם – הנתונים זורמים חלק, הכל מסתנכרן לבד.",
  },
  {
    icon: Terminal,
    title: "הנדסת פרומפטים",
    subtitle: "100% נתוני אמת",
    description: "AI שמחויב לאמת העסקית שלכם בלבד, בלי סטיות ובלי המצאות.",
  },
  {
    icon: TrendingUp,
    title: "למידת מכונה (ML)",
    subtitle: "קמפיינים שמשתפרים בעצמם",
    description: "אלגוריתמים שרודפים בדיוק אחרי מי שהכי צפוי לקנות.",
  },
];

const TechStackSection = () => {
  return (
    <ParallaxBg variant="glow">
      <section className="relative py-14 px-4">
        <div className="container max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-black mb-2 text-center"
          >
            <span className="copper-gradient-text-shimmer">The Engine Behind The Magic</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-muted-foreground text-sm mb-8"
          >
            הטכנולוגיות שמניעות את העסק שלך קדימה
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
            {techCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group glass-card p-3 sm:p-5 border border-border/30 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_20px_hsl(var(--primary)/0.15)] ${
                  i === techCards.length - 1 && techCards.length % 2 !== 0
                    ? "col-span-2 max-w-[200px] sm:max-w-md mx-auto"
                    : ""
                }`}
              >
                <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-right gap-2 sm:gap-4">
                  <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl copper-gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-foreground leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-semibold text-primary mt-0.5">
                      {card.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ParallaxBg>
  );
};

export default TechStackSection;
