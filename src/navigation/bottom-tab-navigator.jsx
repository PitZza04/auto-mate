import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, ShoppingCart, User2} from 'lucide-react-native';
import {colors} from '../theme/colors';
import {useRootNavigation} from '../hooks/use-navigation';

import {HomeScreen} from '../screen/home';
import {AccountScreen} from '../screen/account';
import {CartScreen} from '../screen/cart';

import TabBarLabel from './tab-bar-label';
import {TransactionScreen} from '../screen/transaction';
import {DiagnoseScreen} from '../screen/diagnose';
import SvgFacebook from '../components/icon/facebook';
import SvgDiagnose from '../components/icon/bottom-tab/diagnose';
import SvgTransaction from '../components/icon/bottom-tab/transaction';

const Tab = createBottomTabNavigator();

const TabBarIcon = props => {
  console.log('TabBarIcon', props);
  return <Home {...props} />;
};
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
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShadowVisible: true,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: colors.textDim,
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
        name="Diagnostic"
        options={{
          headerShown: false,
          tabBarIcon: props => <SvgDiagnose {...props} />,
        }}
        component={DiagnoseScreen}
      />
      <Tab.Screen
        name="Transactions"
        options={{
          headerShown: false,
          tabBarIcon: props => <SvgTransaction {...props} />,
        }}
        component={TransactionScreen}
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
