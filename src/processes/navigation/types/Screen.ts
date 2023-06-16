import React from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { ScreenName } from '@processes/navigation';

export interface Screen {
  name: ScreenName;
  view: (...args: unknown[]) => React.JSX.Element;
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, ScreenName.Profile>;
        navigation: unknown;
      }) => NativeStackNavigationOptions)
    | undefined;
}
