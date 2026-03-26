// WhatsApp SVG icon used instead of lucide
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/972587619264"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 left-20 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform group"
    >
      {/* pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-7 h-7 text-white relative z-10" />
      {/* tooltip */}
      <span className="absolute right-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 bg-card border border-border text-foreground text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        דברו איתנו בוואטסאפ
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
