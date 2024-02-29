import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GraphicalBackgroundAnimation = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(backgroundRef.current, {
      duration: 1,
      backgroundColor: '#ff0000',
    })
    .to(backgroundRef.current, {
      duration: 1,
      backgroundColor: '#00ff00',
    })
    .to(backgroundRef.current, {
      duration: 1,
      backgroundColor: '#0000ff',
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ff0000', // Initial background color
      }}
    />
  );
};

export default GraphicalBackgroundAnimation;
