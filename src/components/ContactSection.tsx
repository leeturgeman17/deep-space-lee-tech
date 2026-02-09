import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, User, MessageSquare } from "lucide-react";
import ParallaxBg from "./ParallaxBg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedName || !trimmedPhone || !trimmedMessage) {
      toast({ title: "שגיאה", description: "יש למלא את כל השדות", variant: "destructive" });
      return;
    }

    if (!/^[\d\-+() ]{7,15}$/.test(trimmedPhone)) {
      toast({ title: "שגיאה", description: "מספר טלפון לא תקין", variant: "destructive" });
      return;
    }

    setSending(true);

    const text = encodeURIComponent(
      `שם: ${trimmedName}\nטלפון: ${trimmedPhone}\nהודעה: ${trimmedMessage}`
    );
    window.open(`https://wa.me/972587619264?text=${text}`, "_blank");

    setTimeout(() => {
      setSending(false);
      setForm({ name: "", phone: "", message: "" });
      toast({ title: "נשלח בהצלחה!", description: "נחזור אליך בהקדם 🚀" });
    }, 1000);
  };

  return (
    <ParallaxBg variant="rings">
    <section id="contact" className="relative py-24 px-4">
      <div className="container max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
        >
          <span className="copper-gradient-text">דברו איתנו</span>
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card p-5 md:p-10 space-y-4 md:space-y-5"
        >
          <div className="relative">
            <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="שם מלא"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="pr-10 bg-secondary/50 border-border/50 focus:border-copper placeholder:text-muted-foreground/60"
            />
          </div>

          <div className="relative">
            <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="טלפון"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={15}
              className="pr-10 bg-secondary/50 border-border/50 focus:border-copper placeholder:text-muted-foreground/60"
            />
          </div>

          <div className="relative">
            <MessageSquare className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
            <Textarea
              placeholder="ספרו לנו במה נוכל לעזור..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={4}
              className="pr-10 bg-secondary/50 border-border/50 focus:border-copper placeholder:text-muted-foreground/60 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full copper-gradient-bg copper-glow text-primary-foreground font-bold text-lg py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
            {sending ? "שולח..." : "שליחה"}
          </motion.button>
        </motion.form>
      </div>
    </section>
    </ParallaxBg>
  );
};

export default ContactSection;
