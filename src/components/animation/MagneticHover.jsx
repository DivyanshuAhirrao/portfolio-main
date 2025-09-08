import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const MagneticHover = ({ children, strength = 0.3, className = '' }) => {
  const magnetRef = useRef(null);

  useEffect(() => {
    const magnet = magnetRef.current;
    if (!magnet) return;

    const handleMouseEnter = () => {
      gsap.to(magnet, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(magnet, {
        duration: 0.5,
        scale: 1,
        x: 0,
        y: 0,
        ease: 'elastic.out(1, 0.3)'
      });
    };

    const handleMouseMove = (e) => {
      const rect = magnet.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(magnet, {
        duration: 0.3,
        x: deltaX,
        y: deltaY,
        ease: 'power2.out'
      });
    };

    magnet.addEventListener('mouseenter', handleMouseEnter);
    magnet.addEventListener('mouseleave', handleMouseLeave);
    magnet.addEventListener('mousemove', handleMouseMove);

    return () => {
      magnet.removeEventListener('mouseenter', handleMouseEnter);
      magnet.removeEventListener('mouseleave', handleMouseLeave);
      magnet.removeEventListener('mousemove', handleMouseMove);
    };
  }, [strength]);

  return (
    <div ref={magnetRef} className={`cursor-pointer ${className}`}>
      {children}
    </div>
  );
};

export default MagneticHover;
