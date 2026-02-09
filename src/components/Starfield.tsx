import { useMemo } from "react";

const Starfield = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 200 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.5,
      duration: `${Math.random() * 4 + 3}s`,
      maxOpacity: Math.random() * 0.7 + 0.3,
      delay: `${Math.random() * 5}s`,
    }));
  }, []);

  const nebulas = useMemo(() => [
    { left: "10%", top: "20%", size: 500, color: "hsla(50, 100%, 50%, 0.04)", delay: "0s" },
    { left: "75%", top: "50%", size: 400, color: "hsla(240, 60%, 50%, 0.03)", delay: "2s" },
    { left: "40%", top: "75%", size: 600, color: "hsla(280, 50%, 40%, 0.03)", delay: "4s" },
    { left: "85%", top: "10%", size: 300, color: "hsla(50, 80%, 50%, 0.03)", delay: "1s" },
  ], []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {nebulas.map((n, i) => (
        <div
          key={`nebula-${i}`}
          className="absolute rounded-full animate-float"
          style={{
            left: n.left,
            top: n.top,
            width: n.size,
            height: n.size,
            background: `radial-gradient(circle, ${n.color}, transparent 70%)`,
            animationDelay: n.delay,
            filter: "blur(80px)",
          }}
        />
      ))}

      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            "--duration": star.duration,
            "--max-opacity": star.maxOpacity,
            animationDelay: star.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Starfield;
