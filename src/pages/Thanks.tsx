import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4" dir="rtl">
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
          className="w-20 h-20 rounded-full copper-gradient-bg flex items-center justify-center mx-auto"
        >
          <CheckCircle className="w-10 h-10 text-primary-foreground" />
        </motion.div>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          תודה רבה!
        </h1>

        <p className="text-muted-foreground text-base leading-relaxed">
          הפרטים התקבלו בברכה! נחזור אליכם בהקדם לשיחת אפיון.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="copper-gradient-bg text-primary-foreground font-bold px-8 py-3 rounded-full inline-flex items-center gap-2 mt-4"
          >
            <ArrowRight className="w-5 h-5" />
            חזרה לדף הבית
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Thanks;
