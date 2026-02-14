import { useState, useEffect, useCallback } from 'react';

const ANIMATION_SEEN_KEY = 'entrance-animation-seen';

/**
 * Custom hook for managing entrance animation state with responsive features
 * 
 * @param {Object} options - Configuration options
 * @param {boolean} options.showOnce - Show animation only once (default: true)
 * @param {boolean} options.sessionOnly - Use sessionStorage instead of localStorage (default: false)
 * @param {number} options.delay - Delay before showing animation in ms (default: 0)
 * @param {boolean} options.skipOnMobile - Skip animation on mobile devices (default: false)
 * @param {number} options.mobileBreakpoint - Breakpoint to consider as mobile (default: 768)
 * 
 * @returns {Object} Animation state and control functions
 */
export const useEntranceAnimation = (options = {}) => {
  const {
    showOnce = true,
    sessionOnly = false,
    delay = 0,
    skipOnMobile = false,
    mobileBreakpoint = 768
  } = options;

  const [shouldShow, setShouldShow] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    screenWidth: 0,
    screenHeight: 0,
    orientation: 'portrait'
  });

  // Detect device type and screen dimensions
  const detectDevice = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const orientation = width > height ? 'landscape' : 'portrait';
    
    const info = {
      isMobile: width < mobileBreakpoint,
      isTablet: width >= mobileBreakpoint && width < 1024,
      isDesktop: width >= 1024,
      screenWidth: width,
      screenHeight: height,
      orientation,
      isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
      pixelRatio: window.devicePixelRatio || 1
    };

    setIsMobile(info.isMobile);
    setDeviceInfo(info);

    return info;
  }, [mobileBreakpoint]);

  useEffect(() => {
    const device = detectDevice();
    const storage = sessionOnly ? sessionStorage : localStorage;
    const hasSeenAnimation = storage.getItem(ANIMATION_SEEN_KEY);

    // Skip animation on mobile if configured
    if (skipOnMobile && device.isMobile) {
      setShouldShow(false);
      setIsReady(true);
      return;
    }

    // Check if animation should be shown
    if (showOnce && hasSeenAnimation === 'true') {
      setShouldShow(false);
      setIsReady(true);
    } else {
      const timer = setTimeout(() => {
        setShouldShow(true);
        setIsReady(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [showOnce, sessionOnly, delay, skipOnMobile, detectDevice]);

  // Handle window resize for responsive updates
  useEffect(() => {
    let resizeTimer;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        detectDevice();
      }, 150); // Debounce resize events
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [detectDevice]);

  const handleComplete = useCallback(() => {
    if (showOnce) {
      const storage = sessionOnly ? sessionStorage : localStorage;
      storage.setItem(ANIMATION_SEEN_KEY, 'true');
    }
  }, [showOnce, sessionOnly]);

  const reset = useCallback(() => {
    const storage = sessionOnly ? sessionStorage : localStorage;
    storage.removeItem(ANIMATION_SEEN_KEY);
    setShouldShow(true);
  }, [sessionOnly]);

  const forceSkip = useCallback(() => {
    setShouldShow(false);
    const storage = sessionOnly ? sessionStorage : localStorage;
    storage.setItem(ANIMATION_SEEN_KEY, 'true');
  }, [sessionOnly]);

  return {
    shouldShow,
    isReady,
    isMobile,
    deviceInfo,
    handleComplete,
    reset,
    forceSkip
  };
};

/**
 * Hook to get current viewport dimensions with debouncing
 */
export const useViewport = (debounceMs = 150) => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
    isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false,
    isDesktop: typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  });

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        setViewport({
          width,
          height,
          isMobile: width < 768,
          isTablet: width >= 768 && width < 1024,
          isDesktop: width >= 1024
        });
      }, debounceMs);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      clearTimeout(timeoutId);
    };
  }, [debounceMs]);

  return viewport;
};
