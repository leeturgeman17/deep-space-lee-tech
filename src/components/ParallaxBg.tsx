import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBgProps {
  children: React.ReactNode;
  className?: string;
  /** Which decorative variant to render behind the content */
  variant?: "glow" | "grid" | "orbs" | "rings";
}

const ParallaxBg = ({ children, className = "", variant = "glow" }: ParallaxBgProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax decorative layer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {variant === "glow" && (
          <>
            <motion.div
              style={{ y: y1, scale }}
              className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
              {...{ style: { y: y1, scale, background: "radial-gradient(circle, hsla(50,100%,50%,0.15), transparent 70%)" } }}
            />
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full"
              {...{ style: { y: y2, background: "radial-gradient(circle, hsla(240,60%,50%,0.08), transparent 70%)" } }}
            />
          </>
        )}

        {variant === "grid" && (
          <>
            <motion.div
              style={{ y: y1, opacity: 0.04 }}
              className="absolute inset-0"
              {...{ style: { y: y1, backgroundImage: "linear-gradient(hsla(50,100%,50%,0.12) 1px, transparent 1px), linear-gradient(90deg, hsla(50,100%,50%,0.12) 1px, transparent 1px)", backgroundSize: "60px 60px" } }}
            />
            <motion.div
              style={{ y: y3, rotate }}
              className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/10 rounded-2xl"
            />
            <motion.div
              style={{ y: y2, rotate }}
              className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-primary/5 rounded-full"
            />
          </>
        )}

        {variant === "orbs" && (
          <>
            <motion.div
              style={{ y: y1, x: -20, scale }}
              className="absolute top-10 right-[10%] w-48 h-48 rounded-full"
              {...{ style: { y: y1, scale, background: "radial-gradient(circle, hsla(50,100%,50%,0.1), transparent 70%)", filter: "blur(40px)" } }}
            />
            <motion.div
              style={{ y: y2, x: 20 }}
              className="absolute bottom-10 left-[15%] w-64 h-64 rounded-full"
              {...{ style: { y: y2, background: "radial-gradient(circle, hsla(280,50%,40%,0.08), transparent 70%)", filter: "blur(50px)" } }}
            />
            <motion.div
              style={{ y: y3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
              {...{ style: { y: y3, background: "radial-gradient(circle, hsla(50,80%,50%,0.06), transparent 70%)", filter: "blur(30px)" } }}
            />
          </>
        )}

        {variant === "rings" && (
          <>
            <motion.div
              style={{ y: y1, rotate, scale }}
              className="absolute -top-10 right-[5%] w-72 h-72 rounded-full border border-primary/10"
            />
            <motion.div
              style={{ y: y2, rotate }}
              className="absolute -bottom-16 left-[10%] w-56 h-56 rounded-full border border-primary/5"
            />
            <motion.div
              style={{ y: y3 }}
              className="absolute top-1/3 left-[60%] w-20 h-20 rounded-full border border-primary/8"
            />
          </>
        )}
      </div>

      {/* Actual content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxBg;
