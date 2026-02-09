import { Instagram, Facebook, Linkedin, Phone, Mail } from "lucide-react";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
        {/* Contact row */}
        <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
          <a
            href="tel:+972587619264"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            058-761-9264
          </a>
          <a
            href="mailto:info@leetech.co.il"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            info@leetech.co.il
          </a>
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground text-sm">
          © 2026 <span className="copper-gradient-text font-bold">LeeTech</span>
        </p>

        <div className="flex justify-center gap-4 text-xs text-muted-foreground/60">
          <span className="hover:text-primary cursor-pointer transition-colors">הצהרת נגישות</span>
          <span>|</span>
          <span className="hover:text-primary cursor-pointer transition-colors">מדיניות פרטיות</span>
        </div>

        {/* בשם ה */}
        <p className="text-xs text-muted-foreground/50 mt-2">בשם ה׳ נעשה ונצליח</p>

        {/* Social icons - at bottom */}
        <div className="flex justify-center gap-4 pt-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary/10 hover:border-primary/60 transition-colors"
            >
              <s.icon className="w-4 h-4 text-primary" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
