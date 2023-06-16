import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName, Screens } from '@processes/navigation';
import React from 'react';

const Stack = createNativeStackNavigator();

function GlobalNavigator() {
  return (
    <Stack.Navigator initialRouteName={ScreenName.Home}>
      {Screens.map(({ name, view, options }) => (
        <Stack.Screen
          key={name}
          name={name as never}
          component={view}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
}

export default GlobalNavigator;
