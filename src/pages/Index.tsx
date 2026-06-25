import Starfield from "@/components/Starfield";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import ExpressServices from "@/components/ExpressServices";

import WhyLeeTech from "@/components/WhyLeeTech";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCTA from "@/components/FloatingCTA";
import SiteLoader from "@/components/SiteLoader";
import LeadPopup from "@/components/LeadPopup";
import { Helmet } from "react-helmet-async";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "תוך כמה זמן אני אראה תוצאות מהקמפיינים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "קמפיינים ממומנים מתחילים לייצר תנועה מיד, אך אופטימיזציה אמיתית מתרחשת לאחר שבועיים-שלושה של למידת מכונה שבהם המערכת מבינה את הקהל המדויק שלך.",
      },
    },
    {
      "@type": "Question",
      name: "אני עסק קטן, זה לא 'גדול' עלי?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "אוטומציה ו-AI הם בדיוק הכלים שמאפשרים לעסק קטן להתנהל כמו חברה גדולה. השירותים מודולריים – ניתן להתחיל בפרויקט אקספרס ולגדול משם.",
      },
    },
    {
      "@type": "Question",
      name: "כמה זה עולה לי בשורה התחתונה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "המחיר נקבע לפי מורכבות המערכת והיקף הקמפיין. הצעת המחיר היא סופית וברורה, בלי הפתעות בדרך.",
      },
    },
    {
      "@type": "Question",
      name: "מה עושים עם קמפיינים בשבת?",
      acceptedAnswer: { "@type": "Answer", text: "מבצעים שאלת רב." },
    },
    {
      "@type": "Question",
      name: "למה לבחור דווקא ב-LeeTech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "אנו משלבים מקצוענות טכנולוגית בקצה של הקצה יחד עם ערכים של פעם – יושרה, שקיפות ואכפתיות אמיתית להצלחת העסק שלך.",
      },
    },
  ],
};

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Helmet>
        <title>LeeTech | שיווק, אוטומציה ו-AI לעסקים</title>
        <meta name="description" content="הופכים גולשים ללקוחות: שיווק ממומן, אוטומציות עסקיות ופתרונות בינה מלאכותית – הכל תחת קורת גג אחת." />
        <link rel="canonical" href="https://leetechdigital.com/" />
        <meta property="og:title" content="LeeTech | שיווק, אוטומציה ו-AI לעסקים" />
        <meta property="og:description" content="הופכים גולשים ללקוחות: שיווק ממומן, אוטומציות עסקיות ופתרונות AI." />
        <meta property="og:url" content="https://leetechdigital.com/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <SiteLoader />
      {/* <Starfield /> */}
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <ExpressServices />
        
        <WhyLeeTech />
        <ProcessTimeline />
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FloatingCTA />
      <AccessibilityWidget />
      <LeadPopup />
    </div>
  );
};

export default Index;
