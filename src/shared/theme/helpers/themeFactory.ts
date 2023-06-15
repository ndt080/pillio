import { ThemeName } from '../types';
import { AppThemes } from '../values';

export function themeFactory(name: ThemeName) {
  return AppThemes[name];
}
