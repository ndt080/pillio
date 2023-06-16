import { Header } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import { CustomStatusBar } from 'src/features/CustomStatusBar';

function ProfileScreen() {
  return (
    <SafeAreaView>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <Header />
        <View />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;
