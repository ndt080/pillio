import { StatusBar } from 'react-native';
import React from 'react';
import { useTheme } from '@shared/theme';
import type { StatusBarStyle } from 'react-native/Libraries/Components/StatusBar/StatusBar';

function CustomStatusBar() {
  const isDarkMode = useTheme() === 'dark';

  const barStyle: StatusBarStyle = isDarkMode
    ? 'light-content'
    : 'dark-content';

  return <StatusBar barStyle={barStyle} />;
}

export default CustomStatusBar;
