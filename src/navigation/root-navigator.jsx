import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './bottom-tab-navigator';

const RootStack = createStackNavigator();
export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="App" component={BottomTabNavigator} />
    </RootStack.Navigator>
  );
};
