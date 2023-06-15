import { Theme, ThemeName } from '../types';
import { LightTheme } from './LightTheme';
import { DarkTheme } from './DarkTheme';

export const AppThemes: Record<ThemeName, Theme> = {
  light: LightTheme,
  dark: DarkTheme,
};
