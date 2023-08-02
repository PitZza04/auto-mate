import {
  BottomTabNavigationEventMap,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {colors} from '../theme/colors';
import {useRootNavigation} from '../hooks/use-navigation';

import {HomeScreen} from '../screen/home';
import {AccountScreen} from '../screen/account';

import TabBarLabel from './tab-bar-label';
import {TransactionScreen} from '../screen/transaction';
import {DiagnoseScreen} from '../screen/diagnose';

import type {HomeBottomTabsParamList} from './types';
import {EventListenerCallback} from '@react-navigation/native';
import {
  AccountTabBarIcon,
  DiagnosticTabBarIcon,
  HomeTabBarIcon,
  TransactionsTabBarIcon,
} from './tab-bar-icon';

const Tab = createBottomTabNavigator<HomeBottomTabsParamList>();

const BottomTabNavigator = () => {
  const isConnected = false;

  const navigation = useRootNavigation();
  const tabPressHandler = (
    name: keyof HomeBottomTabsParamList,
  ): EventListenerCallback<BottomTabNavigationEventMap, 'tabPress'> => {
    return e => {
      if (name === 'Transactions') {
        console.log('awit');
      }
      if (!isConnected) {
        navigation.navigate('Login');
        e.preventDefault();
      }
    };
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShadowVisible: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: colors.textDim,
        tabBarLabelStyle: {
          paddingTop: 5,
        },
        tabBarLabel: TabBarLabel,
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: HomeTabBarIcon,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Diagnostic"
        options={{
          headerShown: false,
          tabBarIcon: DiagnosticTabBarIcon,
        }}
        component={DiagnoseScreen}
      />
      <Tab.Screen
        name="Transactions"
        options={{
          headerShown: false,
          tabBarIcon: TransactionsTabBarIcon,
        }}
        component={TransactionScreen}
      />
      <Tab.Screen
        name="Account"
        options={{
          headerShown: false,
          tabBarIcon: AccountTabBarIcon,
        }}
        component={AccountScreen}
        listeners={{
          tabPress: tabPressHandler('Account'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
