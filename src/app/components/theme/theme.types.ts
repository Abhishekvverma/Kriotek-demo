// theme.types.ts

export interface ThemeTypography {
  fontWeights: {
    regular: number;
    medium: number;
    bold: number;
    light: number;
  };
  fontFamily: string;
  fontSizes: {
    large: string;
    medium: string;
    small: string;
  };
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  dark: string;
  light: string;
  accent: string;
  accent2: string;
  textPrimary: string;
  textSecondary: string;
  accentDark: string;
  text:string
}

export interface Theme {
  colors: ThemeColors;
  typography: ThemeTypography;
}
