import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useTransform } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const EnhancedScrollEffects = ({ children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8]);

  useEffect(() => {
    // Text reveal animations
    const textElements = document.querySelectorAll('[data-text-reveal]');
    textElements.forEach((element) => {
      gsap.from(element, {
        yPercent: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });
    });

    // Stagger animations for cards/elements
    const staggerElements = document.querySelectorAll('[data-stagger]');
    if (staggerElements.length > 0) {
      gsap.from(staggerElements, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: staggerElements[0].parentElement,
          start: "top 70%",
        }
      });
    }

    // Morphing shapes
    const morphElements = document.querySelectorAll('[data-morph]');
    morphElements.forEach((element) => {
      gsap.to(element, {
        borderRadius: "50%",
        rotation: 180,
        scale: 1.2,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Floating background elements with parallax */}
      <motion.div
        className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        style={{ y: y1, rotate }}
      />
      <motion.div
        className="fixed top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-pink-400/20 to-yellow-400/20 rounded-full blur-xl"
        style={{ y: y2, scale }}
      />
      <motion.div
        className="fixed bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-full blur-xl"
        style={{ y: y3 }}
      />

      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px',
             }}>
        </div>
      </div>

      {children}
    </div>
  );
};

export default EnhancedScrollEffects;
