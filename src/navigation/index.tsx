import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Authentication/Enrrollment/Onboarding';
import Signup from '../screens/Authentication/Enrrollment/Signup';
import Signin from '../screens/Authentication/Signin';
import CreatePost from '../screens/CreatePost';
import MessagesSettings from '../screens/MessagesSettings';
import Settings from '../screens/Settings';
import RootNavigator from './RootNavigator';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Root" component={RootNavigator} />
        <Stack.Screen name="Create Post" component={CreatePost} />
        <Stack.Screen name="Messages Settings" component={MessagesSettings} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
