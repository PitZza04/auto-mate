import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, ShoppingCart, User2} from 'lucide-react-native';
import {useRootNavigation} from '../hooks/use-navigation';

import {HomeScreen} from '../screen/home';
import {AccountScreen} from '../screen/account';
import {CartScreen} from '../screen/cart';

import AccountNavigator from '../pages/account';
import TabBarLabel from './tab-bar-label';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const isConnected = false;

  const navigation = useRootNavigation();
  const tabPressHandler = name => {
    return e => {
      if (!isConnected) {
        navigation.navigate('Login');
        e.preventDefault();
      }
    };
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#5e6267',
        tabBarLabelStyle: {
          paddingTop: 5,
        },
        tabBarLabel: function tabBarLabel({focused, color}) {
          return <TabBarLabel label={`${route.name}`} focused={focused} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: props => <Home {...props} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarIcon: props => <ShoppingCart {...props} />,
        }}
        component={CartScreen}
      />
      <Tab.Screen
        name="Account"
        options={{
          headerShown: false,
          tabBarIcon: props => <User2 {...props} />,
        }}
        component={AccountScreen}
        listeners={{
          tabPress: tabPressHandler('Profile'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
