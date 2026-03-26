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
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#FF5500" }}
                >
                  <Crosshair className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-lg font-bold text-foreground mb-1">
                  בואו נדבר תכל׳ס: אפיון והצעת מחיר
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  השאירו פרטים, ונשלח לכם הודעת וואטסאפ מהירה
                  <br />
                  כדי להבין בדיוק מה העסק שלכם צריך.
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
                  className="w-full flex items-center justify-center gap-2 text-white font-bold py-3 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                  style={{ background: "#FF5500" }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.783-1.258A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.308-.724-5.993-1.953a.5.5 0 00-.404-.078l-3.384.89.727-2.903a.5.5 0 00-.063-.396A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                  שלחו לי הודעה לוואטסאפ
                  <ArrowLeft className="w-4 h-4" />
                </motion.button>

                <p className="text-xs text-muted-foreground/60 mt-3">
                  מענה מהיר • ללא התחייבות מצדכם
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
