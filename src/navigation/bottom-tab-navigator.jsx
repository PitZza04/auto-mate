import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screen/home';
import {Home} from 'lucide-react-native';
import TabBarLabel from './tab-bar-label';
import HomeNavigator from '../pages/home';
import SettingsNavigator from '../pages/settings';
// listeners={{
//   tabPress: tabPressHandler('Home'),
// }}
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#b61616',
        tabBarInactiveTintColor: '#000',

        tabBarLabel: function tabBarLabel({focused, color}) {
          return <TabBarLabel label={`${route.name}`} focused={focused} />;
        },
      })}>
      <Tab.Screen
        name="HomeTab"
        options={{
          tabBarIcon: props => <Home {...props} />,
          tabBarLabel: 'Home',
        }}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="SettingTab"
        options={{
          tabBarIcon: props => <Home {...props} />,
          tabBarLabel: 'Settings',
        }}
        component={SettingsNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
