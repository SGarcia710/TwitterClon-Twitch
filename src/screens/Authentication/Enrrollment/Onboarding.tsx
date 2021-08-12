import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const Onboarding = () => {
  const insets = useSafeAreaInsets();
  console.log(insets);
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
      }}
    >
      <Header />
    </View>
  );
};

export default Onboarding;
