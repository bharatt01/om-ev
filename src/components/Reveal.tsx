import { motion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  from?: "left" | "right" | "top" | "bottom";
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  from = "bottom",
  delay = 0,
  className = "",
}: RevealProps) {
  const map = {
    left: { x: -80, y: 0 },
    right: { x: 80, y: 0 },
    top: { x: 0, y: -80 },
    bottom: { x: 0, y: 80 },
  };
  const init = map[from];
  return (
    <motion.div
      initial={{ opacity: 0, ...init }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}