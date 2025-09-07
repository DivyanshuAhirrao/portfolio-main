import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextRevealAnimation = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' // up, down, left, right
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const directions = {
    up: { y: 100, x: 0 },
    down: { y: -100, x: 0 },
    left: { y: 0, x: 100 },
    right: { y: 0, x: -100 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directions[direction]
      }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        x: 0
      } : {}}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default TextRevealAnimation;
