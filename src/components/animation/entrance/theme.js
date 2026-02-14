/**
 * RESPONSIVE THEME CONFIGURATION
 * Optimized for web and mobile devices
 */

export const theme = {
  colors: {
    // Primary dark theme
    background: {
      primary: '#0a0a0a',
      secondary: '#1a1a1a',
      tertiary: '#2a2a2a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
      tertiary: '#a0a0a0',
    },
    accent: {
      primary: '#ffffff',
      secondary: '#f0f0f0',
      glow: 'rgba(255, 255, 255, 0.1)',
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.2)',
      strong: 'rgba(255, 255, 255, 0.3)',
    }
  },
  
  typography: {
    fonts: {
      display: '"Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", sans-serif',
      mono: '"SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace',
    },
    // Responsive font sizes using clamp()
    sizes: {
      mobile: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      tablet: {
        xs: '0.875rem',
        sm: '1rem',
        base: '1.0625rem',
        lg: '1.1875rem',
        xl: '1.375rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '4rem',
      },
      desktop: {
        xs: '0.875rem',
        sm: '1rem',
        base: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3.5rem',
        '5xl': '4.5rem',
        '6xl': '5.5rem',
      }
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    }
  },
  
  spacing: {
    mobile: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
    },
    tablet: {
      xs: '0.375rem',
      sm: '0.625rem',
      md: '0.875rem',
      lg: '1.25rem',
      xl: '1.75rem',
      '2xl': '2.5rem',
      '3xl': '3.5rem',
      '4xl': '5rem',
    },
    desktop: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
      '3xl': '4rem',
      '4xl': '6rem',
      '5xl': '8rem',
    }
  },
  
  effects: {
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px rgba(0, 0, 0, 0.4)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
      xl: '0 20px 25px rgba(0, 0, 0, 0.6)',
      glow: '0 0 20px rgba(255, 255, 255, 0.2)',
    },
    transitions: {
      // Faster transitions on mobile for snappier feel
      mobile: {
        fast: '100ms ease',
        base: '200ms ease',
        slow: '300ms ease',
      },
      desktop: {
        fast: '150ms ease',
        base: '250ms ease',
        slow: '350ms ease',
      },
      smooth: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    animations: {
      fadeIn: 'fadeIn 0.6s ease forwards',
      slideUp: 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      scaleIn: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
    }
  },
  
  breakpoints: {
    xs: 475,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  
  // Mobile-specific configurations
  mobile: {
    tapTargetSize: '44px', // Minimum touch target
    headerHeight: '56px',
    bottomNavHeight: '64px',
    safeAreaTop: 'env(safe-area-inset-top, 0)',
    safeAreaBottom: 'env(safe-area-inset-bottom, 0)',
    containerPadding: '1rem',
  },
  
  // Tablet-specific configurations
  tablet: {
    tapTargetSize: '48px',
    headerHeight: '64px',
    containerPadding: '1.5rem',
  },
  
  // Desktop-specific configurations
  desktop: {
    headerHeight: '72px',
    containerPadding: '2rem',
    maxContentWidth: '1280px',
  }
};

/**
 * Get responsive value based on screen width
 * @param {number} width - Screen width in pixels
 * @param {Object} values - Object with mobile, tablet, desktop values
 * @returns {any} - Appropriate value for screen size
 */
export const getResponsiveValue = (width, values) => {
  if (width < theme.breakpoints.md) return values.mobile;
  if (width < theme.breakpoints.lg) return values.tablet || values.mobile;
  return values.desktop || values.tablet || values.mobile;
};

/**
 * Check if current device is mobile
 * @param {number} width - Screen width
 * @returns {boolean}
 */
export const isMobile = (width = window.innerWidth) => {
  return width < theme.breakpoints.md;
};

/**
 * Check if current device is tablet
 * @param {number} width - Screen width
 * @returns {boolean}
 */
export const isTablet = (width = window.innerWidth) => {
  return width >= theme.breakpoints.md && width < theme.breakpoints.lg;
};

/**
 * Check if current device is desktop
 * @param {number} width - Screen width
 * @returns {boolean}
 */
export const isDesktop = (width = window.innerWidth) => {
  return width >= theme.breakpoints.lg;
};

/**
 * Check if device has touch capability
 * @returns {boolean}
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

/**
 * Get device pixel ratio
 * @returns {number}
 */
export const getPixelRatio = () => {
  return window.devicePixelRatio || 1;
};

/**
 * Generate CSS custom properties from theme
 * @param {string} device - 'mobile' | 'tablet' | 'desktop'
 * @returns {string} CSS variables
 */
export const generateCSSVariables = (device = 'desktop') => {
  const spacing = theme.spacing[device] || theme.spacing.desktop;
  const fontSize = theme.typography.sizes[device] || theme.typography.sizes.desktop;
  const transitions = theme.effects.transitions[device] || theme.effects.transitions.desktop;
  
  return `
    :root {
      /* Colors */
      --color-bg-primary: ${theme.colors.background.primary};
      --color-bg-secondary: ${theme.colors.background.secondary};
      --color-bg-tertiary: ${theme.colors.background.tertiary};
      
      --color-text-primary: ${theme.colors.text.primary};
      --color-text-secondary: ${theme.colors.text.secondary};
      --color-text-tertiary: ${theme.colors.text.tertiary};
      
      --color-accent-primary: ${theme.colors.accent.primary};
      --color-accent-secondary: ${theme.colors.accent.secondary};
      --color-accent-glow: ${theme.colors.accent.glow};
      
      --color-border-subtle: ${theme.colors.border.subtle};
      --color-border-medium: ${theme.colors.border.medium};
      --color-border-strong: ${theme.colors.border.strong};
      
      /* Typography */
      --font-display: ${theme.typography.fonts.display};
      --font-body: ${theme.typography.fonts.body};
      --font-mono: ${theme.typography.fonts.mono};
      
      /* Font sizes */
      --text-xs: ${fontSize.xs};
      --text-sm: ${fontSize.sm};
      --text-base: ${fontSize.base};
      --text-lg: ${fontSize.lg};
      --text-xl: ${fontSize.xl};
      --text-2xl: ${fontSize['2xl']};
      --text-3xl: ${fontSize['3xl']};
      --text-4xl: ${fontSize['4xl']};
      --text-5xl: ${fontSize['5xl']};
      
      /* Spacing */
      --spacing-xs: ${spacing.xs};
      --spacing-sm: ${spacing.sm};
      --spacing-md: ${spacing.md};
      --spacing-lg: ${spacing.lg};
      --spacing-xl: ${spacing.xl};
      --spacing-2xl: ${spacing['2xl']};
      --spacing-3xl: ${spacing['3xl']};
      --spacing-4xl: ${spacing['4xl']};
      
      /* Effects */
      --shadow-sm: ${theme.effects.shadows.sm};
      --shadow-md: ${theme.effects.shadows.md};
      --shadow-lg: ${theme.effects.shadows.lg};
      --shadow-xl: ${theme.effects.shadows.xl};
      --shadow-glow: ${theme.effects.shadows.glow};
      
      --transition-fast: ${transitions.fast};
      --transition-base: ${transitions.base};
      --transition-slow: ${transitions.slow};
      --transition-smooth: ${theme.effects.transitions.smooth};
    }
  `;
};

/**
 * Media query helpers
 */
export const media = {
  mobile: `@media (max-width: ${theme.breakpoints.md - 1}px)`,
  tablet: `@media (min-width: ${theme.breakpoints.md}px) and (max-width: ${theme.breakpoints.lg - 1}px)`,
  desktop: `@media (min-width: ${theme.breakpoints.lg}px)`,
  tabletUp: `@media (min-width: ${theme.breakpoints.md}px)`,
  largeDesktop: `@media (min-width: ${theme.breakpoints.xl}px)`,
  touch: '@media (hover: none) and (pointer: coarse)',
  retina: '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
  landscape: '@media (orientation: landscape)',
  portrait: '@media (orientation: portrait)',
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
};

export default theme;
