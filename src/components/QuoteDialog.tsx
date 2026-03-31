import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Send, Building2, Users, Target, Wallet, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const steps = [
  {
    icon: Building2,
    title: "מה סוג העסק שלך?",
    field: "businessType",
    type: "select",
    options: ["עסק קטן / פרילנסר", "חברה בינונית", "סטארטאפ", "חנות אונליין", "נותן שירותים", "אחר"],
  },
  {
    icon: Target,
    title: "מה המטרה העיקרית שלך?",
    field: "goal",
    type: "select",
    options: ["להגדיל לידים ומכירות", "בניית נוכחות דיגיטלית", "אוטומציה של תהליכים", "בניית אתר / דף נחיתה", "שיווק ברשתות חברתיות", "פתרון AI מותאם"],
  },
  {
    icon: Wallet,
    title: "מה התקציב החודשי המשוער?",
    field: "budget",
    type: "select",
    options: ["עד ₪3,000", "₪3,000 - ₪7,000", "₪7,000 - ₪15,000", "₪15,000+", "פרויקט חד-פעמי", "עדיין לא בטוח/ה"],
  },
  {
    icon: Users,
    title: "פרטים ליצירת קשר",
    field: "contact",
    type: "contact",
  },
];

interface QuoteDialogProps {
  open: boolean;
  onClose: () => void;
}

const QuoteDialog = ({ open, onClose }: QuoteDialogProps) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    businessType: "",
    goal: "",
    budget: "",
    name: "",
    phone: "",
    notes: "",
    honeypot: "",
  });

  const current = steps[step];
  const isLast = step === steps.length - 1;
  const isFirst = step === 0;

  const canProceed = () => {
    if (current.type === "contact") return answers.name.trim() && answers.phone.trim();
    return answers[current.field].trim() !== "";
  };

  const handleSelect = (option: string) => {
    setAnswers({ ...answers, [current.field]: option });
  };

  const handleSubmit = () => {
    // Honeypot spam protection
    if (answers.honeypot) return;
    const text = encodeURIComponent(
      `🔥 בקשת הצעת מחיר חדשה\n\nסוג עסק: ${answers.businessType}\nמטרה: ${answers.goal}\nתקציב: ${answers.budget}\nשם: ${answers.name}\nטלפון: ${answers.phone}${answers.notes ? `\nהערות: ${answers.notes}` : ""}`
    );
    window.open(`https://wa.me/972587619264?text=${text}`, "_blank");
    onClose();
    setStep(0);
    setAnswers({ businessType: "", goal: "", budget: "", name: "", phone: "", notes: "" });
  };

  const next = () => {
    if (isLast) {
      handleSubmit();
    } else {
      setStep(step + 1);
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative glass-card w-full max-w-md p-8 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 left-4 text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>

            {/* Progress bar */}
            <div className="flex gap-1.5 mb-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                    i <= step ? "copper-gradient-bg" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl copper-gradient-bg flex items-center justify-center">
                    <current.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{current.title}</h3>
                </div>

                {current.type === "select" && (
                  <div className="grid grid-cols-2 gap-2">
                    {current.options!.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`p-3 rounded-xl text-sm font-medium text-right transition-all duration-200 border ${
                          answers[current.field] === option
                            ? "border-primary bg-primary/15 text-primary"
                            : "border-border/50 bg-secondary/30 text-foreground/70 hover:border-primary/40"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}

                {current.type === "contact" && (
                  <div className="space-y-4">
                    <Input
                      placeholder="שם מלא"
                      value={answers.name}
                      onChange={(e) => setAnswers({ ...answers, name: e.target.value })}
                      maxLength={100}
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                    <Input
                      placeholder="טלפון"
                      type="tel"
                      value={answers.phone}
                      onChange={(e) => setAnswers({ ...answers, phone: e.target.value })}
                      maxLength={15}
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                    <Textarea
                      placeholder="הערות נוספות (אופציונלי)"
                      value={answers.notes}
                      onChange={(e) => setAnswers({ ...answers, notes: e.target.value })}
                      maxLength={500}
                      rows={3}
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => setStep(step - 1)}
                disabled={isFirst}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isFirst ? "opacity-0 pointer-events-none" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <ArrowRight className="w-4 h-4" />
                הקודם
              </button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={next}
                disabled={!canProceed()}
                className="flex items-center gap-2 copper-gradient-bg text-primary-foreground font-bold px-6 py-2.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              >
                {isLast ? (
                  <>
                    <MessageCircle className="w-4 h-4" />
                    שליחה בוואטסאפ
                  </>
                ) : (
                  <>
                    הבא
                    <ArrowLeft className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteDialog;
