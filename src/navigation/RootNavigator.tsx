import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../screens/Root/Search';
import Messages from '../screens/Root/Messages';
import Notifications from '../screens/Root/Notifications';
import HomeNavigator from './HomeNavigator';
import { Image } from 'react-native';

const Tabs = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, focused, size }) => {
          switch (route.name) {
            case 'Home':
              return (
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/home-filled.png')
                      : require('../../assets/icons/home-outline.png')
                  }
                />
              );
            case 'Search':
              return (
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/search-filled.png')
                      : require('../../assets/icons/search-outline.png')
                  }
                />
              );
            case 'Messages':
              return (
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/messages-filled.png')
                      : require('../../assets/icons/messages-outline.png')
                  }
                />
              );
            case 'Notifications':
              return (
                <Image
                  source={
                    focused
                      ? require('../../assets/icons/notifications-filled.png')
                      : require('../../assets/icons/notifications-outline.png')
                  }
                />
              );
          }
        },
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen name="Home" component={HomeNavigator} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Messages" component={Messages} />
      <Tabs.Screen name="Notifications" component={Notifications} />
    </Tabs.Navigator>
  );
};

export default RootNavigator;
