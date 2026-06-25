import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4" dir="rtl">
      <Helmet>
        <title>הדף לא נמצא (404) | LeeTech</title>
        <meta name="description" content="הדף שחיפשת לא קיים. חזור לדף הבית של LeeTech כדי להמשיך לגלות את השירותים שלנו." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://leetechdigital.com/404" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card max-w-md w-full p-10 text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto"
        >
          <AlertTriangle className="w-10 h-10 text-primary" />
        </motion.div>

        <h1 className="text-5xl font-black copper-gradient-text-shimmer">404</h1>

        <p className="text-muted-foreground text-base leading-relaxed">
          אופס, נראה שסטינו מהמסלול... אל דאגה, אנחנו מחזירים אתכם למסלול הצמיחה.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="copper-gradient-bg text-primary-foreground font-bold px-8 py-3 rounded-full inline-flex items-center gap-2 mt-4"
          >
            <ArrowRight className="w-5 h-5" />
            חזרה לבית
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
