import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabNavigator from './bottom-tab-navigator';
import {SettingsScreen} from '../screen/settings';
import {NotificationScreen} from '../screen/notification';
import {LoginScreen} from '../screen/login';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }}>
      <RootStack.Screen name="App" component={BottomTabNavigator} />

      <RootStack.Group
        screenOptions={{
          presentation: 'transparentModal',
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          headerShown: true,
        }}>
        <RootStack.Screen
          name={'Login'}
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          headerShown: true,
          headerBackTitle: 'Back',
        }}>
        <RootStack.Screen name="Notification" component={NotificationScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
