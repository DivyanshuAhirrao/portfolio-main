import { useState, useEffect, useMemo } from 'react';
import './styles/SuspenseLoader.css'; // Import the CSS file

const SuspenseLoader = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = useMemo(() => [
    "Initializing Experience",
    "Loading Assets",
    "Preparing Interface",
    "Almost Ready"
  ], []);

  // Generate particles once
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: 3 + Math.random() * 4,
      animationDelay: Math.random() * 2
    })), []
  );

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 3;
      });
    }, 100);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [loadingTexts.length]);

  const progressPercentage = Math.min(Math.floor(progress), 100);

  return (
    <div className="advanced-loader">
      {/* Background particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDuration: `${particle.animationDuration}s`,
              animationDelay: `${particle.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="loader-content">
        {/* Loading ring */}
        <div className="loading-ring-container">
          <div className="outer-ring" />
          <div className="spinning-ring" />
          <div className="inner-circle" />
          <div className="core-dot" />
        </div>

        {/* Loading text */}
        <div className="loading-text-container">
          <h2 className="loading-text">
            {loadingTexts[currentText]}
            <span className="loading-dots">...</span>
          </h2>
        </div>

        {/* Progress bar */}
        <div className="progress-container">
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="progress-bar-shine" />
            </div>
          </div>
          <div className="progress-text">
            {progressPercentage}%
          </div>
        </div>

        {/* Floating shapes */}
        <div className="floating-shape-1" />
        <div className="floating-shape-2" />
        
        {/* Floating dots */}
        <div className="floating-dot-1" />
        <div className="floating-dot-2" />
      </div>

      {/* Brand area */}
      <div className="brand-container">
        <div className="brand-text">DIVYANSHU'S PORTFOLIO</div>
        <div className="brand-dots">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="brand-dot"
              style={{animationDelay: `${i * 0.3}s`}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuspenseLoader;