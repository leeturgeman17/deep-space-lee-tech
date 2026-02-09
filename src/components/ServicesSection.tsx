import { Target, Infinity, Brain } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Target,
    title: "שיווק דיגיטלי 360°",
    description: "לא סתם 'מפרסמים'. אנחנו בונים מכונה מדויקת שמוצאת את הלקוח המדויק שלך בגוגל, מטא וטיקטוק.",
    copper: true,
  },
  {
    icon: Infinity,
    title: "אוטומציה עסקית 24/7",
    description: "תדמיינו עובד שלא ישן לעולם. אנחנו מחברים את הוואטסאפ והCRM שלך לטפל בלידים אוטומטית, אפס טעויות.",
    copper: false,
  },
  {
    icon: Brain,
    title: "אתרים ופתרונות AI",
    description: "אתרים מהירים וצ'אטבוטים עם AI שסוגרים עסקאות. אנחנו בונים נכסים דיגיטליים, לא סתם עמודים.",
    copper: true,
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
    <section className="relative py-24 px-4">
      <div className="container max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          <span className="copper-gradient-text">השירותים שלנו</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${service.copper ? "copper-gradient-bg" : "bg-secondary"}`}>
                <service.icon className={`w-8 h-8 ${service.copper ? "text-primary-foreground" : "text-silver"}`} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${service.copper ? "copper-gradient-text" : "silver-text"}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
