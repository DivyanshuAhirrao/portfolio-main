import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50"
        style={{
          scaleX: scrollProgress,
          transformOrigin: '0%',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      />
      
      {/* Circular Progress Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollProgress > 0.1 ? 1 : 0,
          scale: scrollProgress > 0.1 ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-gray-300 dark:text-gray-600"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="3"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-blue-500"
            stroke="currentColor"
            fill="transparent"
            strokeWidth="3"
            strokeLinecap="round"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            style={{
              strokeDasharray: `${scrollProgress * 100}, 100`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default ScrollProgressBar;
