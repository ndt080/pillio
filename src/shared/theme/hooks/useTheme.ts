import { useColorScheme } from 'react-native';
import { ThemeName } from '../types';

export function useTheme(defaultTheme: ThemeName = 'light'): ThemeName {
  return useColorScheme() ?? defaultTheme;
}
