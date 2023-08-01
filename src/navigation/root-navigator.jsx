import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import BottomTabNavigator from './bottom-tab-navigator';
import {SettingsScreen} from '../screen/settings';
import {NotificationScreen} from '../screen/notification';
import {LoginScreen} from '../screen/login';
import {Header} from '../components/header';
import {colors} from '../theme';
import {useRootNavigation} from '../hooks/use-navigation';
import {ProductScreen} from '../screen/product';

const RootStack = createStackNavigator();

export const RootNavigator = () => {
  const navigation = useRootNavigation();
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
          header: () => (
            <Header
              titleStyle={{color: colors.black}}
              leftIcon="caretLeft"
              leftIconColor={colors.black}
              onLeftPress={() => navigation.goBack()}
            />
          ),
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
