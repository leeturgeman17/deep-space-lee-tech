import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
        <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
          <motion.a
            href="tel:+972587619264"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Phone className="w-4 h-4 text-primary" />
            058-761-9264
          </motion.a>
          <motion.a
            href="mailto:leetechdigital@gmail.com"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-4 h-4 text-primary" />
            leetechdigital@gmail.com
          </motion.a>
        </div>

        <p className="text-muted-foreground text-sm">
          © 2026 <span className="copper-gradient-text-shimmer font-bold">LeeTech</span>
        </p>

        <div className="flex justify-center gap-4 text-xs text-muted-foreground/60">
          <span className="hover:text-primary cursor-pointer transition-colors">הצהרת נגישות</span>
          <span>|</span>
          <span className="hover:text-primary cursor-pointer transition-colors">מדיניות פרטיות</span>
        </div>

        <p className="text-xs text-muted-foreground/50 mt-2">בשם ה׳ נעשה ונצליח</p>

        {/* Logo + Slogan */}
        <div className="pt-4 flex flex-col items-center gap-1">
          <span className="copper-gradient-text-shimmer font-black text-lg">LeeTech</span>
          <span className="text-xs text-muted-foreground">שיווק · מערכות · סדר</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
