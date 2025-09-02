import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../context/ThemeContext';

const ScrollBackgroundAnimation = () => {
  const backgroundRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const background = backgroundRef.current;
    const tl = gsap.timeline({ paused: true });

    if (isDark) {
      // Dark mode colors
      tl.to(background, { duration: 0.2, backgroundColor: 'transparent' })    
        .to(background, { duration: 0.2, backgroundColor: '#1f2937' }) // dark gray
        .to(background, { duration: 0.2, backgroundColor: '#374151' }) // darker gray
        .to(background, { duration: 0.2, backgroundColor: '#4b5563' }) // darkest gray
    } else {
      // Light mode colors (original)
      tl.to(background, { duration: 0.2, backgroundColor: 'transparent' })    
        .to(background, { duration: 0.2, backgroundColor: '#f5a38f' }) 
        .to(background, { duration: 0.2, backgroundColor: '#c9f75f' }) 
        .to(background, { duration: 0.2, backgroundColor: '#ab87cd80' }) 
    }
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollProgress = scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
      tl.progress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      tl.kill();
    };
  }, [isDark]);

  return (
    <div
      ref={backgroundRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: isDark ? '#111827' : '#fff',
        zIndex: -1,
      }}
    />
  );
};

export default ScrollBackgroundAnimation;
