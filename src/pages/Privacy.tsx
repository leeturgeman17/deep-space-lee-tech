import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-4" dir="rtl">
      <Helmet>
        <title>מדיניות פרטיות | LeeTech</title>
        <meta name="description" content="מדיניות הפרטיות של LeeTech: כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך באתר ובטופסי יצירת הקשר." />
        <link rel="canonical" href="https://leetechdigital.com/privacy" />
        <meta property="og:title" content="מדיניות פרטיות | LeeTech" />
        <meta property="og:description" content="כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך." />
        <meta property="og:url" content="https://leetechdigital.com/privacy" />
      </Helmet>
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">מדיניות פרטיות</h1>
          </div>

          <div className="glass-card p-8 md:p-10 space-y-6 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">1. כללי</h2>
              <p>
                LeeTech ("החברה") מכבדת את פרטיות המשתמשים באתר. מדיניות פרטיות זו מתארת כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">2. איסוף מידע</h2>
              <p>
                אנו אוספים מידע שאתם מוסרים לנו מרצונכם באמצעות טופסי יצירת הקשר באתר, כגון: שם מלא, מספר טלפון והודעה חופשית. מידע זה משמש אך ורק ליצירת קשר חוזר מצדנו.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">3. שימוש בעוגיות (Cookies)</h2>
              <p>
                האתר עשוי להשתמש בעוגיות (Cookies) לצורכי שיפור חוויית המשתמש, ניתוח תעבורה (Analytics) וקמפיינים שיווקיים. עוגיות אלו מסייעות לנו להבין כיצד גולשים משתמשים באתר ולייעל את השירות שלנו.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">4. הגנה על המידע</h2>
              <p>
                אנו נוקטים באמצעי אבטחה מתקדמים על מנת להגן על המידע האישי שלכם מפני גישה בלתי מורשית, שימוש לרעה או חשיפה. המידע שלכם לא יועבר לצד שלישי ללא הסכמתכם, אלא אם כן נדרש על פי חוק.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">5. זכויות המשתמש</h2>
              <p>
                בכל עת, תוכלו לפנות אלינו בבקשה לעיין במידע שנאסף, לתקנו או למחקו. ניתן ליצור קשר דרך הדוא״ל: leetechdigital@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">6. עדכונים למדיניות</h2>
              <p>
                החברה רשאית לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר.
              </p>
            </section>

            <p className="text-sm text-muted-foreground pt-4 border-t border-border/30">
              עדכון אחרון: מרץ 2026
            </p>
          </div>

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="copper-gradient-bg text-primary-foreground font-bold px-6 py-2.5 rounded-full inline-flex items-center gap-2 mt-4"
            >
              <ArrowRight className="w-4 h-4" />
              חזרה לדף הבית
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
