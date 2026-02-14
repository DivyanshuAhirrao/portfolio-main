import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const titles = [
  "Fullstack_engineer",
  "Frontend_Developer",
  "Backend_Developer",
];

export default function RotatingTitle({ interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div style={{ position: "relative", height: "24px", color:" #888", fontSize:"14px", textAlign:"left"}}>
      <AnimatePresence mode="wait">
        <motion.span
          key={titles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
          }}
        >
          @{titles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}