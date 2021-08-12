import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timeline from '../screens/Root/Home/Timeline';
import Profile from '../screens/Root/Home/Profile';
import Lists from '../screens/Root/Home/Lists';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Timeline" component={Timeline} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Lists" component={Lists} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
