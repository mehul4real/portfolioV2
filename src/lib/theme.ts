/**
 * Portfolio Theme Configuration
 * Centralized color and design token management
 */

export const theme = {
  // Core Colors (HSL format for easy manipulation)
  colors: {
    // Base colors
    background: {
      primary: 'hsl(240 15% 6%)',
      secondary: 'hsl(240 12% 10%)',
      muted: 'hsl(240 10% 20%)',
    },
    
    foreground: {
      primary: 'hsl(240 10% 95%)',
      muted: 'hsl(240 5% 65%)',
      destructive: 'hsl(240 10% 95%)',
    },
    
    // Brand colors
    brand: {
      primary: 'hsl(260 100% 70%)',
      secondary: 'hsl(180 100% 50%)',
      accent: 'hsl(340 100% 65%)',
    },
    
    // UI Colors
    ui: {
      border: 'hsl(240 10% 18%)',
      input: 'hsl(240 10% 18%)',
      ring: 'hsl(260 100% 70%)',
      destructive: 'hsl(0 84% 60%)',
    },
    
    // Card and surface colors
    surface: {
      card: 'hsl(240 12% 10%)',
      popover: 'hsl(240 12% 10%)',
    },
  },
  
  // Gradients
  gradients: {
    primary: 'linear-gradient(135deg, hsl(260 100% 70%) 0%, hsl(180 100% 50%) 100%)',
    accent: 'linear-gradient(135deg, hsl(340 100% 65%) 0%, hsl(260 100% 70%) 100%)',
    secondary: 'linear-gradient(180deg, hsl(240 15% 6%) 0%, hsl(240 12% 10%) 100%)',
    timeline: 'linear-gradient(to bottom, hsl(260 100% 70% / 0.5), hsl(180 100% 50% / 0.5), hsl(340 100% 65% / 0.5))',
    hero: {
      orb1: 'linear-gradient(to bottom right, hsl(260 100% 70% / 0.3), hsl(180 100% 50% / 0.2))',
      orb2: 'linear-gradient(to bottom right, hsl(180 100% 50% / 0.3), hsl(340 100% 65% / 0.2))',
      orb3: 'linear-gradient(to bottom right, hsl(340 100% 65% / 0.2), hsl(260 100% 70% / 0.2))',
      shape: 'linear-gradient(to bottom right, hsl(340 100% 65% / 0.4), hsl(260 100% 70% / 0.4))',
    },
  },
  
  // Glass morphism effects
  glass: {
    background: 'hsla(240 12% 10% / 0.8)',
    border: 'hsla(260 100% 70% / 0.2)',
    backdropBlur: '12px',
  },
  
  // Shadows and glows
  shadows: {
    glow: '0 0 30px hsla(260 100% 70% / 0.3)',
    card: '0 8px 32px hsla(0 0% 0% / 0.4)',
    hover: '0 20px 40px hsla(260 100% 70% / 0.2)',
  },
  
  // Border radius
  radius: {
    sm: 'calc(0.75rem - 4px)',
    md: 'calc(0.75rem - 2px)',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
  },
  
  // Spacing scale
  spacing: {
    section: '6rem', // 24 in Tailwind
    component: '4rem', // 16 in Tailwind
    element: '2rem', // 8 in Tailwind
  },
  
  // Animation durations
  animations: {
    fast: '200ms',
    normal: '300ms',
    slow: '500ms',
    verySlow: '800ms',
  },
  
  // Breakpoints (for reference)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Helper functions to work with theme
export const getThemeColor = (path: string): string => {
  const keys = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = theme.colors;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      console.warn(`Theme color path "${path}" not found`);
      return '';
    }
  }
  
  return typeof value === 'string' ? value : '';
};

// CSS custom properties generator
export const generateCSSVariables = () => {
  return {
    // Background colors
    '--background': '240 15% 6%',
    '--foreground': '240 10% 95%',
    
    '--card': '240 12% 10%',
    '--card-foreground': '240 10% 95%',
    
    '--popover': '240 12% 10%',
    '--popover-foreground': '240 10% 95%',
    
    // Brand colors
    '--primary': '260 100% 70%',
    '--primary-foreground': '240 15% 6%',
    
    '--secondary': '180 100% 50%',
    '--secondary-foreground': '240 15% 6%',
    
    '--accent': '340 100% 65%',
    '--accent-foreground': '240 15% 6%',
    
    // Muted colors
    '--muted': '240 10% 20%',
    '--muted-foreground': '240 5% 65%',
    
    // UI colors
    '--destructive': '0 84% 60%',
    '--destructive-foreground': '240 10% 95%',
    
    '--border': '240 10% 18%',
    '--input': '240 10% 18%',
    '--ring': '260 100% 70%',
    
    '--radius': '0.75rem',
    
    // Portfolio specific variables
    '--gradient-primary': theme.gradients.primary,
    '--gradient-accent': theme.gradients.accent,
    '--gradient-secondary': theme.gradients.secondary,
    '--gradient-timeline': theme.gradients.timeline,
    
    '--glass-bg': theme.glass.background,
    '--glass-border': theme.glass.border,
    
    '--shadow-glow': theme.shadows.glow,
    '--shadow-card': theme.shadows.card,
    '--shadow-hover': theme.shadows.hover,
    
    '--timeline-line': 'hsla(260 100% 70% / 0.5)',
  };
};

// Color utilities for dynamic color manipulation
export const colorUtils = {
  // Convert HSL to RGB
  hslToRgb: (h: number, s: number, l: number): [number, number, number] => {
    h /= 360;
    s /= 100;
    l /= 100;
    
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h * 6) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    
    if (0 <= h && h < 1/6) {
      r = c; g = x; b = 0;
    } else if (1/6 <= h && h < 1/3) {
      r = x; g = c; b = 0;
    } else if (1/3 <= h && h < 1/2) {
      r = 0; g = c; b = x;
    } else if (1/2 <= h && h < 2/3) {
      r = 0; g = x; b = c;
    } else if (2/3 <= h && h < 5/6) {
      r = x; g = 0; b = c;
    } else if (5/6 <= h && h < 1) {
      r = c; g = 0; b = x;
    }
    
    return [
      Math.round((r + m) * 255),
      Math.round((g + m) * 255),
      Math.round((b + m) * 255)
    ];
  },
  
  // Create color with opacity
  withOpacity: (color: string, opacity: number): string => {
    if (color.includes('hsl')) {
      return color.replace('hsl(', `hsla(`).replace(')', ` / ${opacity})`);
    }
    return color;
  },
  
  // Lighten color
  lighten: (hslString: string, amount: number): string => {
    const match = hslString.match(/hsl\((\d+)\s+(\d+)%\s+(\d+)%\)/);
    if (!match) return hslString;
    
    const [, h, s, l] = match;
    const newL = Math.min(100, parseInt(l) + amount);
    return `hsl(${h} ${s}% ${newL}%)`;
  },
  
  // Darken color
  darken: (hslString: string, amount: number): string => {
    const match = hslString.match(/hsl\((\d+)\s+(\d+)%\s+(\d+)%\)/);
    if (!match) return hslString;
    
    const [, h, s, l] = match;
    const newL = Math.max(0, parseInt(l) - amount);
    return `hsl(${h} ${s}% ${newL}%)`;
  },
};

export default theme;