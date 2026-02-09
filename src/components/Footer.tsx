const Footer = () => {
  return (
    <footer className="relative py-10 border-t border-border/30 text-center">
      <p className="text-muted-foreground text-sm mb-2">
        © 2026 <span className="copper-gradient-text font-bold">LeeTech</span>
      </p>
      <div className="flex justify-center gap-4 text-xs text-muted-foreground/60">
        <span className="hover:text-primary cursor-pointer transition-colors">הצהרת נגישות</span>
        <span>|</span>
        <span className="hover:text-primary cursor-pointer transition-colors">מדיניות פרטיות</span>
      </div>
    </footer>
  );
};

export default Footer;
