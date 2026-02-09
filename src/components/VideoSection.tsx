import { motion } from "framer-motion";
import videoSrc from "@/assets/video-project.mp4";

const VideoSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="container max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="copper-gradient-text">ראו אותנו בפעולה</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-card p-2 md:p-3 copper-glow"
        >
          <video
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-xl aspect-video bg-black"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
