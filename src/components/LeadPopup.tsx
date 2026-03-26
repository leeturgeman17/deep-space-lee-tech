import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, Crosshair } from "lucide-react";
import { Input } from "@/components/ui/input";

const LeadPopup = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("lead-popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    sessionStorage.setItem("lead-popup-dismissed", "1");
  };

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim()) return;
    const text = encodeURIComponent(
      `🎁 ליד חדש מהאתר!\n\nשם: ${name}\nטלפון: ${phone}\n\nמעוניין/ת בייעוץ חינמי`
    );
    window.open(`https://wa.me/972587619264?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(handleClose, 2000);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center px-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            className="relative glass-card w-full max-w-sm p-6 z-10 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 left-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                  className="w-14 h-14 rounded-2xl copper-gradient-bg flex items-center justify-center mx-auto mb-4"
                >
                  <Gift className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                <h3 className="text-lg font-bold text-foreground mb-1">
                  🎁 ייעוץ דיגיטלי חינמי!
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  השאירו פרטים ונחזור אליכם תוך שעה
                  <br />
                  עם המלצות מותאמות לעסק שלכם
                </p>

                <div className="space-y-3 mb-5">
                  <Input
                    placeholder="שם מלא"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={100}
                    className="bg-secondary/50 border-border/50 focus:border-primary text-right"
                  />
                  <Input
                    placeholder="טלפון"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={15}
                    className="bg-secondary/50 border-border/50 focus:border-primary text-right"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubmit}
                  disabled={!name.trim() || !phone.trim()}
                  className="w-full flex items-center justify-center gap-2 copper-gradient-bg text-primary-foreground font-bold py-3 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                >
                  <MessageCircle className="w-5 h-5" />
                  שלחו לי ייעוץ חינמי
                  <ArrowLeft className="w-4 h-4" />
                </motion.button>

                <p className="text-xs text-muted-foreground/60 mt-3">
                  ללא התחייבות • תגובה מהירה בוואטסאפ
                </p>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-6"
              >
                <div className="text-4xl mb-3">✅</div>
                <p className="text-lg font-bold text-foreground">תודה רבה!</p>
                <p className="text-sm text-muted-foreground">נחזור אליכם בהקדם</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadPopup;
