import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.a
      href="https://wa.me/972587619264"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="בואו נדבר"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed top-1/2 -translate-y-1/2 right-0 z-40 flex items-center gap-1.5 copper-gradient-bg text-primary-foreground font-bold text-xs px-3 py-2.5 rounded-l-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300 hover:pr-4"
    >
      <MessageCircle className="w-4 h-4" />
      <span className="hidden sm:inline">בואו נדבר</span>
    </motion.a>
  );
};

export default FloatingCTA;
