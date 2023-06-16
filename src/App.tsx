import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GlobalNavigator } from '@processes/navigation';

function App() {
  return (
    <NavigationContainer>
      <GlobalNavigator />
    </NavigationContainer>
  );
}

export default App;
