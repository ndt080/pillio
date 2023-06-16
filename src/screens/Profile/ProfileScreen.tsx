import { SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import { CustomStatusBar } from '@features/CustomStatusBar';

function ProfileScreen() {
  return (
    <SafeAreaView>
      <CustomStatusBar />
      <ScrollView contentInsetAdjustmentBehavior='automatic'>
        <View />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;
