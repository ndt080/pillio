import {
  AuthScreen,
  HomeScreen,
  MedicationsScreen,
  ProfileScreen,
  SettingsScreen,
} from '@screens/index';
import { Screen, ScreenName } from '@processes/navigation';

export const Screens: Screen[] = [
  {
    name: ScreenName.Home,
    view: HomeScreen,
    options: { title: 'Home' },
  },
  {
    name: ScreenName.Auth,
    view: AuthScreen,
  },
  {
    name: ScreenName.Medications,
    view: MedicationsScreen,
    options: { title: 'Medications' },
  },
  {
    name: ScreenName.Profile,
    view: ProfileScreen,
    options: { title: 'Profile' },
  },
  {
    name: ScreenName.Settings,
    view: SettingsScreen,
    options: { title: 'Settings' },
  },
];
