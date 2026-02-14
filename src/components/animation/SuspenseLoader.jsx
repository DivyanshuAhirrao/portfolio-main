import { useState, useEffect, useMemo } from 'react';
import './styles/SuspenseLoader.css';

const SuspenseLoader = () => {
  const [progress, setProgress] = useState(0);

  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      animationDuration: 3 + Math.random() * 4,
      animationDelay: Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.4
    })), []
  );

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 2.5;
      });
    }, 80);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  const progressPercentage = Math.min(Math.floor(progress), 100);

  return (
    <div className="advanced-loader">
      <div className="gradient-background" />
      {/* Background particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.animationDuration}s`,
              animationDelay: `${particle.animationDelay}s`,
              opacity: particle.opacity
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="grid-pattern" />

      {/* Main content */}
      <div className="loader-content">
        <div className="loading-ring-container">
          <div className="outer-ring" />
          <div className="middle-ring" />
          <div className="spinning-ring" />
          <div className="inner-circle" />
          <div className="core-dot">
            <div className="pulse-dot" />
          </div>
        </div>

        {/* Loading text with smooth transition */}
        <div className="loading-text-container">
          <h2 className="loading-text">
            <span className="loading-dots">
              <span className="dot-1">.</span>
              <span className="dot-2">.</span>
              <span className="dot-3">.</span>
            </span>
          </h2>
        </div>

        {/* Modern progress bar */}
        <div className="progress-container">
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="progress-bar-shine" />
              <div className="progress-bar-glow" />
            </div>
          </div>
          <div className="progress-text">
            <span className="progress-number">{progressPercentage}</span>
            <span className="progress-symbol">%</span>
          </div>
        </div>

        {/* Floating geometric shapes */}
        <div className="floating-shapes">
          <div className="floating-shape floating-shape-1" />
          <div className="floating-shape floating-shape-2" />
          <div className="floating-shape floating-shape-3" />
          <div className="floating-shape floating-shape-4" />
        </div>
        
        {/* Floating dots with trails */}
        <div className="floating-dots">
          <div className="floating-dot floating-dot-1">
            <div className="dot-trail" />
          </div>
          <div className="floating-dot floating-dot-2">
            <div className="dot-trail" />
          </div>
          <div className="floating-dot floating-dot-3">
            <div className="dot-trail" />
          </div>
        </div>
      </div>

      {/* Brand area */}
      <div className="brand-container">
        <div className="brand-text">
          <span className="brand-letter">D</span>
          <span className="brand-letter">I</span>
          <span className="brand-letter">V</span>
          <span className="brand-letter">Y</span>
          <span className="brand-letter">A</span>
          <span className="brand-letter">N</span>
          <span className="brand-letter">S</span>
          <span className="brand-letter">H</span>
          <span className="brand-letter">U</span>
          <span className="brand-separator">&apos;</span>
          <span className="brand-letter">S</span>
          <span className="brand-space"> </span>
          <span className="brand-letter">P</span>
          <span className="brand-letter">O</span>
          <span className="brand-letter">R</span>
          <span className="brand-letter">T</span>
          <span className="brand-letter">F</span>
          <span className="brand-letter">O</span>
          <span className="brand-letter">L</span>
          <span className="brand-letter">I</span>
          <span className="brand-letter">O</span>
        </div>
        <div className="brand-dots">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="brand-dot"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        <div className="brand-underline" />
      </div>

      {/* Corner accents */}
      <div className="corner-accent corner-top-left" />
      <div className="corner-accent corner-top-right" />
      <div className="corner-accent corner-bottom-left" />
      <div className="corner-accent corner-bottom-right" />
    </div>
  );
};

export default SuspenseLoader;