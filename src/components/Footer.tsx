import { Instagram, Facebook, Linkedin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/30">
      {/* Subtle top gradient */}
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
            href="mailto:info@leetech.co.il"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Mail className="w-4 h-4 text-primary" />
            info@leetech.co.il
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

        <div className="flex justify-center gap-4 pt-2">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/60 transition-all"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <s.icon className="w-4 h-4 text-primary" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
