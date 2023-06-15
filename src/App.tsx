import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';
import { useTheme } from '@shared/theme';

function App() {
  const isDarkMode = useTheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <Header />
        <View />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
