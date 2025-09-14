import { useEffect, useRef, useState } from 'react';

const TrainAnimation = () => {
  const trainRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(Math.max(scrollTop / docHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate train position - moves from top to bottom as user scrolls
  const trainPosition = scrollProgress * (typeof window !== 'undefined' ? window.innerHeight - 120 : 600);

  return (
    <div className="fixed sm:left-4 xs:left-3 sm:top-11 xs:top-14 w-8 h-full z-50 pointer-events-none sm:scale-90 xs:scale-[0.55]">
      {/* Modern Railway Track */}
      <div className="absolute left-3 w-0.5 sm:h-full xs:h-[93%] opacity-70">
        {/* Main track line with gradient */}
        <div className="w-full h-full bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 opacity-80"></div>
        
        {/* Glowing effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-pink-400 via-purple-400 to-pink-400 blur-sm opacity-40"></div>
      </div>

      {/* Sleek Modern Train */}
      <div
        ref={trainRef}
        className="absolute left-0 transition-transform duration-75 ease-out"
        style={{ 
          transform: `translateY(${Math.max(0, Math.min(trainPosition, typeof window !== 'undefined' ? window.innerHeight - 100 : 600))}px)`,
        }}
      >
        {/* Train Container */}
        <div className="relative">
          {/* Main Train Body - Sleek Capsule Design */}
          <div className="w-7 h-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-full shadow-2xl border border-gray-700 relative overflow-hidden">
            
            {/* Metallic shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-20 transform -skew-y-12 translate-x-full animate-pulse"></div>
            
            {/* Front nose cone */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full border border-gray-600"></div>
            
            {/* Windows - Modern rectangular design */}
            <div className="absolute top-3 left-0.5 w-6 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm opacity-90 shadow-inner"></div>
            <div className="absolute top-6 left-0.5 w-6 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm opacity-90 shadow-inner"></div>
            <div className="absolute top-9 left-0.5 w-6 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm opacity-90 shadow-inner"></div>
            
            {/* Side detail lines */}
            <div className="absolute top-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60"></div>
            <div className="absolute bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60"></div>
            
            {/* LED status lights */}
            <div className="absolute top-12 left-1 w-1 h-1 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <div className="absolute top-12 right-1 w-1 h-1 bg-red-400 rounded-full animate-pulse shadow-lg shadow-red-400/50"></div>
          </div>
          
          {/* Front headlight beam */}
          <div 
            className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
              scrollProgress > 0.02 ? 'opacity-70' : 'opacity-30'
            }`}
          >
            <div className="w-8 h-20 bg-gradient-to-b from-yellow-200/60 via-yellow-300/40 to-transparent rounded-full blur-sm"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-gradient-to-b from-white/80 via-yellow-200/60 to-transparent rounded-full"></div>
          </div>
          
          {/* Motion blur effect when moving */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full transition-opacity duration-200 ${
              scrollProgress > 0.05 ? 'opacity-40' : 'opacity-0'
            }`}
          >
          </div>
          
          {/* Speed particles effect */}
          {scrollProgress > 0.1 && (
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-4 bg-gradient-to-b from-purple-400 to-transparent opacity-60"
                  style={{
                    left: `${i * 2}px`,
                    animationDelay: `${i * 0.1}s`,
                    animation: 'moveLeft 0.3s linear infinite'
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainAnimation;
