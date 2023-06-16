export type ScreenName =
  | 'Home'
  | 'Auth'
  | 'Medications'
  | 'MedicationDetails'
  | 'Settings'
  | 'Profile';

export const ScreenNames: Record<ScreenName, ScreenName> = {
  Home: 'Home',
  Auth: 'Auth',
  Medications: 'Medications',
  MedicationDetails: 'MedicationDetails',
  Settings: 'Settings',
  Profile: 'Profile',
};
