import {
  AuthScreen,
  HomeScreen,
  MedicationDetailsScreen,
  MedicationsScreen,
  ProfileScreen,
  SettingsScreen,
} from '@screens/index';
import { Screen } from '@processes/navigation';
import { ScreenNames } from './screenName';

export const Screens: Screen[] = [
  {
    name: ScreenNames.Home,
    view: HomeScreen,
    options: { title: 'Home' },
  },
  {
    name: ScreenNames.Auth,
    view: AuthScreen,
  },
  {
    name: ScreenNames.Medications,
    view: MedicationsScreen,
    options: { title: 'Medications' },
  },
  {
    name: ScreenNames.MedicationDetails,
    view: MedicationDetailsScreen,
  },
  {
    name: ScreenNames.Profile,
    view: ProfileScreen,
    options: { title: 'Profile' },
  },
  {
    name: ScreenNames.Settings,
    view: SettingsScreen,
    options: { title: 'Settings' },
  },
];
