import { Target, Infinity, Brain } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "שיווק דיגיטלי 360°",
    description: "לא סתם 'מפרסמים'. אנחנו בונים מכונה מדויקת שמוצאת את הלקוח המדויק שלך בגוגל, מטא וטיקטוק.",
    copper: true,
    delay: "",
  },
  {
    icon: Infinity,
    title: "אוטומציה עסקית 24/7",
    description: "תדמיינו עובד שלא ישן לעולם. אנחנו מחברים את הוואטסאפ והCRM שלך לטפל בלידים אוטומטית, אפס טעויות.",
    copper: false,
    delay: "animation-delay-200",
  },
  {
    icon: Brain,
    title: "אתרים ופתרונות AI",
    description: "אתרים מהירים וצ'אטבוטים עם AI שסוגרים עסקאות. אנחנו בונים נכסים דיגיטליים, לא סתם עמודים.",
    copper: true,
    delay: "animation-delay-400",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`glass-card p-8 text-center animate-fade-in-up animate-float ${service.delay}`}
              style={{ animationDelay: `${index * 0.2}s`, ["--float-delay" as string]: `${index * 0.8}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
