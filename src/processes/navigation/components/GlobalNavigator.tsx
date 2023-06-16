import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames, Screens } from '@processes/navigation';
import React from 'react';

const Stack = createNativeStackNavigator();

function GlobalNavigator() {
  return (
    <Stack.Navigator initialRouteName={ScreenNames.Home}>
      {Screens.map(({ name, view, options }) => (
        <Stack.Screen
          key={name}
          name={name}
          component={view}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
}

export default GlobalNavigator;
