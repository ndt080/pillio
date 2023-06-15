export interface Theme {
  fonts: {
    primary: string;
    [key: string]: string;
  };
  fontSizes: {
    L: number;
    M: number;
    S: number;
    XS: number;
    [key: string]: number;
  };
  fontWeight: {
    SemiBold: number;
    Medium: number;
    Regular: number;
    [key: string]: number;
  };
  colors: {
    primary: string;
    secondary: string;
    success: string;
    error: string;
    warning: string;
    [key: string]: string;
  };
}
