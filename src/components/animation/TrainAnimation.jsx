import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TrainAnimation = () => {
  const trainRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight+0.02;
      setScrollProgress(progress); // Ensure minimum visibility
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trainPosition = scrollProgress * (window.innerHeight - 200); // Adjust based on viewport

  return (
    <div className="fixed w-16 h-full z-10 pointer-events-none md:scale-75 sm:scale-[68] xs:scale-[0.6] md:left-4 sm:left-3 xs:-left-0 md:top-12 sm:top-16  xs:top-20">
      {/* Railway Track */}
      <div className="absolute left-4 top-0 w-1 xl:h-[81%] lg:h-[81%] md:h-[82%] sm:h-[85%] xs:h-[84%] bg-gradient-to-b from-gray-400 via-gray-600 to-gray-400"></div>
      <div className="absolute left-3 top-0 w-3 h-full">
        {/* Railway ties */}
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-1 bg-amber-800 left-0"
            style={{ top: `${i * 3}%`, transform: 'translateX(-25%)' }}
          ></div>
        ))}
      </div>

      {/* Train */}
      <motion.div
        ref={trainRef}
        className="absolute left-0.5 z-40"
        style={{ 
          top: `${Math.max(0, Math.min(trainPosition, window.innerHeight - 100))}px`,
        }}
        animate={{
          y: scrollProgress > 0 ? 0 : -10,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Train Body */}
        <div className="relative">
          {/* Main train car */}
          <div className="w-8 h-14 bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-lg border border-red-900">
            {/* Windows */}
            <div className="absolute top-8 left-1 w-2 h-3 bg-blue-200 rounded opacity-70"></div>
            <div className="absolute top-8 right-1 w-2 h-3 bg-blue-200 rounded opacity-70"></div>
             <div className="absolute top-3 left-1 w-2 h-3 bg-blue-200 rounded opacity-70"></div>
            <div className="absolute top-3 right-1 w-2 h-3 bg-blue-200 rounded opacity-70"></div>
            
            {/* Headlights - Glowing effect */}
            <div className="absolute -bottom-0 left-1 w-2 h-1 bg-yellow-300 rounded-full shadow-lg animate-pulse"></div>
            <div className="absolute -bottom-0 right-1 w-2 h-1 bg-yellow-300 rounded-full shadow-lg animate-pulse"></div>
            
            {/* Light beams */}
            <div className="absolute top-14 left-0.5 w-1 h-8 bg-gradient-to-t from-transparent to-yellow-300 opacity-50 transform -skew-x-12"></div>
            <div className="absolute top-14 right-0.5 w-1 h-8 bg-gradient-to-t from-transparent to-yellow-300 opacity-50 transform skew-x-12"></div>
          </div>
          
          {/* Wheels */}
          <div className="absolute -top-1 left-1 w-2 h-2 bg-gray-800 rounded-full border border-gray-600"></div>
          <div className="absolute -top-1 right-1 w-2 h-2 bg-gray-800 rounded-full border border-gray-600"></div>
          
          {/* Smoke/Steam effect */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              opacity: scrollProgress > 0.1 ? [0.3, 0.7, 0.3] : 0,
              scale: scrollProgress > 0.1 ? [1, 1.2, 1] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-3 h-3 bg-gray-300 rounded-full opacity-60"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full opacity-40 mt-1 ml-1"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrainAnimation;
