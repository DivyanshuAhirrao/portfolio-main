import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Parallax effect for background elements
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach((element) => {
      const speed = element.dataset.parallax || 0.5;
      
      gsap.to(element, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Motion path animation
    const motionPath = document.querySelector('#motion-path');
    if (motionPath) {
      gsap.to('#moving-element', {
        motionPath: {
          path: motionPath,
          align: motionPath,
          alignOrigin: "0.5 0.5",
          autoRotate: true,
        },
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* Motion Path SVG - Hidden but functional */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
        <path
          id="motion-path"
          d="M100,100 Q400,50 800,200 T1200,300 Q1400,250 1600,400"
          fill="none"
          stroke="transparent"
        />
      </svg>
      
      {/* Moving Element */}
      <div
        id="moving-element"
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
        style={{ zIndex: 10 }}
      >
        <div className="w-full h-full bg-white rounded-full animate-pulse opacity-50"></div>
      </div>

      {children}
    </div>
  );
};

export default ParallaxWrapper;
