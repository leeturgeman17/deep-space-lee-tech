import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accessibility, Plus, Minus, Type, Eye, RotateCcw } from "lucide-react";

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const next = Math.min(fontSize + 10, 150);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };

  const decreaseFontSize = () => {
    const next = Math.max(fontSize - 10, 80);
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}%`;
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("high-contrast");
  };

  const reset = () => {
    setFontSize(100);
    setHighContrast(false);
    document.documentElement.style.fontSize = "100%";
    document.documentElement.classList.remove("high-contrast");
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="glass-card p-5 mb-3 w-56 space-y-4"
          >
            <h3 className="text-sm font-bold text-foreground text-center">נגישות</h3>

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Type className="w-3.5 h-3.5" /> גודל טקסט
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center hover:bg-secondary/80"
                  aria-label="הקטן טקסט"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs w-8 text-center">{fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center hover:bg-secondary/80"
                  aria-label="הגדל טקסט"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <button
              onClick={toggleContrast}
              className={`w-full flex items-center gap-2 text-xs px-3 py-2 rounded-md transition-colors ${
                highContrast ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              ניגודיות גבוהה
            </button>

            <button
              onClick={reset}
              className="w-full flex items-center justify-center gap-2 text-xs px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              איפוס
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full copper-gradient-bg copper-glow flex items-center justify-center shadow-lg"
        aria-label="תפריט נגישות"
      >
        <Accessibility className="w-6 h-6 text-primary-foreground" />
      </motion.button>
    </div>
  );
};

export default AccessibilityWidget;
