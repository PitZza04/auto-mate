import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './bottom-tab-navigator';

import {NotificationScreen} from '../screen/notification';
import {LoginScreen} from '../screen/login';

import {ProductScreen} from '../screen/product';
import type {RootStackParamList} from './types';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="App" component={BottomTabNavigator} />
      <RootStack.Screen name="Product" component={ProductScreen} />

      <RootStack.Group
        screenOptions={{
          headerShown: true,
        }}>
        <RootStack.Screen
          name={'Login'}
          component={LoginScreen}
          options={{headerTitle: 'Log In'}}
        />
      </RootStack.Group>

      <RootStack.Group
        screenOptions={{
          headerShown: true,
        }}>
        <RootStack.Screen name="Notification" component={NotificationScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
