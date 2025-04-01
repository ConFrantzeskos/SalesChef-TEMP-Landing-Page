
// Design System Constants
// These values align with Dieter Rams principles and Apple Design Guidelines

// Spacing scale (in rem)
export const spacing = {
  xs: 0.25,  // 4px
  sm: 0.5,   // 8px
  md: 1,     // 16px
  lg: 1.5,   // 24px
  xl: 2,     // 32px
  '2xl': 2.5,// 40px
  '3xl': 3,  // 48px
  '4xl': 4,  // 64px
  '5xl': 6,  // 96px
};

// Typography scale
export const typography = {
  // Font sizes (in rem)
  size: {
    xs: 0.75,    // 12px
    sm: 0.875,   // 14px
    base: 1,     // 16px
    lg: 1.125,   // 18px
    xl: 1.25,    // 20px
    '2xl': 1.5,  // 24px
    '3xl': 1.875,// 30px
    '4xl': 2.25, // 36px
    '5xl': 3,    // 48px
    '6xl': 3.75, // 60px
  },
  
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
};

// Color palette
export const colorPalette = {
  // Brand colors
  brand: {
    purple: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    pink: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
  },
  
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.375rem',   // 6px
  md: '0.75rem',    // 12px
  lg: '1rem',       // 16px
  xl: '1.5rem',     // 24px
  full: '9999px',
};

// Shadows
export const shadows = {
  sm: '0 4px 12px -2px rgba(147,51,234,0.15)',
  md: '0 8px 24px -4px rgba(147,51,234,0.2)',
  lg: '0 12px 36px -6px rgba(147,51,234,0.25)',
};

// Animation timing
export const animation = {
  fast: '0.15s',
  normal: '0.3s',
  slow: '0.5s',
};

// Component-specific spacing
export const componentSpacing = {
  // Section spacing
  section: {
    sm: spacing['3xl'], // 48px
    md: spacing['4xl'], // 64px
    lg: spacing['5xl'], // 96px
  },
  
  // Card padding
  card: {
    sm: spacing.md,     // 16px
    md: spacing.lg,     // 24px
    lg: spacing.xl,     // 32px
  },
  
  // Button padding
  button: {
    sm: `${spacing.sm}rem ${spacing.md}rem`,  // 8px 16px
    md: `${spacing.md}rem ${spacing.lg}rem`,  // 16px 24px
    lg: `${spacing.md}rem ${spacing.xl}rem`,  // 16px 32px
  },
};

// Design Principles based on Dieter Rams and Apple:
export const designPrinciples = [
  "Good design is innovative",
  "Good design makes a product useful",
  "Good design is aesthetic",
  "Good design makes a product understandable",
  "Good design is unobtrusive",
  "Good design is honest",
  "Good design is long-lasting",
  "Good design is thorough down to the last detail",
  "Good design is environmentally-friendly",
  "Good design is as little design as possible",
  "Clarity takes precedence over beauty",
  "Function dictates form",
  "Consistency creates familiarity and efficiency",
  "Interfaces should respond immediately to user actions"
];
