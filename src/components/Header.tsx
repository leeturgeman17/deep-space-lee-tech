import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import logo from "@/assets/leetech-logo-new.png";
import QuoteDialog from "@/components/QuoteDialog";

const navItems = [
  { label: "שירותים", href: "#services" },
  { label: "איך זה עובד", href: "#process" },
  { label: "שאלות נפוצות", href: "#faq" },
  { label: "ביקורות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-border/30 py-2"
            : "bg-transparent py-4"
        }`}
      >
        {/* BS"D */}
        <span className="absolute top-2 right-4 text-xs text-foreground/50 select-none">בס״ד</span>

        <div className="container flex items-center justify-center gap-6">
          {/* Mobile hamburger - right side */}
          <button
            className="md:hidden absolute right-4 p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="תפריט"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo - mobile */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
            className="md:hidden"
            aria-label="חזרה לדף הראשי"
          >
            <img
              src={logo}
              alt="LeeTech — שיווק דיגיטלי ואוטומציה"
              className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Desktop nav - centered */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToTop(); }}
              aria-label="חזרה לדף הראשי"
            >
              <img
                src={logo}
                alt="LeeTech — שיווק דיגיטלי ואוטומציה"
                className="h-11 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
            <div className="h-6 w-px bg-border/40" />
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="h-6 w-px bg-border/40" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setQuoteOpen(true)}
              className="flex items-center gap-2 copper-gradient-bg text-primary-foreground font-bold text-sm px-5 py-2 rounded-full"
            >
              <FileText className="w-4 h-4" />
              הצעת מחיר
            </motion.button>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/30 overflow-hidden"
            >
              <div className="container py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleClick(item.href)}
                    className="block w-full text-right text-base font-medium text-foreground/80 hover:text-primary min-h-[44px] py-2.5 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => { setMobileOpen(false); setQuoteOpen(true); }}
                  className="block w-full text-right text-base font-bold text-primary py-2"
                >
                  📋 הצעת מחיר
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <QuoteDialog open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};

export default Header;
