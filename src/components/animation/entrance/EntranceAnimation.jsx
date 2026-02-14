import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './EntranceAnimation.css';

const EntranceAnimation = ({ onComplete, children, shouldShow = true }) => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const linesRef = useRef([]);
  const [isAnimating, setIsAnimating] = useState(shouldShow);
  const [isComplete, setIsComplete] = useState(!shouldShow);
  
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!shouldShow) {
      setIsAnimating(false);
      setIsComplete(true);
      return;
    }

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          setIsComplete(true);
          onComplete?.();
        }
      });

      // Initial state - everything hidden
      gsap.set([logoRef.current, textRef.current], {
        opacity: 0,
        y: isMobile ? 30 : 50,
        scale: 0.95
      });

      gsap.set(linesRef.current, {
        scaleX: 0,
        transformOrigin: 'left center'
      });

      // Animation sequence optimized for both desktop and mobile
      tl
        // Decorative lines appear first
        .to(linesRef.current, {
          scaleX: 1,
          duration: isMobile ? 0.6 : 0.8,
          stagger: 0.1,
          ease: 'power2.inOut'
        })
        // Logo reveals with scale effect
        .to(logoRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isMobile ? 0.8 : 1.2,
          ease: 'power3.out'
        }, '-=0.4')
        // Text follows smoothly
        .to(textRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5')
        // Hold for impact (shorter on mobile)
        .to({}, { duration: isMobile ? 0.3 : 0.5 })
        // Exit sequence - faster on mobile
        .to([logoRef.current, textRef.current], {
          opacity: 0,
          y: isMobile ? -20 : -30,
          scale: 0.95,
          duration: 1.5,
          ease: 'power2.in'
        })
        .to(linesRef.current, {
          scaleX: 0,
          transformOrigin: 'right center',
          duration: 0.5,
          stagger: 0.05,
          ease: 'power2.in'
        }, '-=0.6')
        // Overlay slides away
        .to(overlayRef.current, {
          yPercent: -100,
          duration:0.6,
          ease: 'power4.inOut'
        }, '-=0.3')
        // Final fade
        .to(containerRef.current, {
          opacity: 0,
          duration: 2,
          onComplete: () => {
            if (containerRef.current) {
              containerRef.current.style.pointerEvents = 'none';
            }
          }
        });
    }, containerRef);

    return () => ctx.revert();
  }, [shouldShow, onComplete]);

  const addToLinesRef = (el) => {
    if (el && !linesRef.current.includes(el)) {
      linesRef.current.push(el);
    }
  };

  return (
    <>
      {isAnimating && (
        <div ref={containerRef} className="entrance-container">
          <div ref={overlayRef} className="entrance-overlay">
            <div className="entrance-content">
              {/* Decorative animated lines */}
              <div className="entrance-lines">
                <div ref={addToLinesRef} className="entrance-line"></div>
                <div ref={addToLinesRef} className="entrance-line"></div>
                <div ref={addToLinesRef} className="entrance-line"></div>
              </div>

              {/* Logo container */}
              <div ref={logoRef} className="entrance-logo">
                <svg viewBox="0 0 120 120" className="logo-svg" aria-hidden="true">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <circle 
                    cx="60" 
                    cy="60" 
                    r="40" 
                    fill="none" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2"
                    className="logo-circle"
                  />
                  <path 
                    d="M 35 60 L 60 35 L 85 60 L 60 85 Z" 
                    fill="url(#logoGradient)"
                    className="logo-shape"
                  />
                </svg>
              </div>

              {/* Text container */}
              <div ref={textRef} className="entrance-text">
                <h1 className="entrance-title">Welcome</h1>
                <p className="entrance-subtitle">Divyanshu&apos;s | <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isComplete && children}
    </>
  );
};

export default EntranceAnimation;
