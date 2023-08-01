import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, User2} from 'lucide-react-native';
import {colors} from '../theme/colors';
import {useRootNavigation} from '../hooks/use-navigation';

import {HomeScreen} from '../screen/home';
import {AccountScreen} from '../screen/account';

import TabBarLabel from './tab-bar-label';
import {TransactionScreen} from '../screen/transaction';
import {DiagnoseScreen} from '../screen/diagnose';

import SvgDiagnose from '../components/icon/bottom-tab/diagnose';
import SvgTransaction from '../components/icon/bottom-tab/transaction';
import {ScreenProps} from 'react-native-screens';
import {RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

// const TabBarIcon = props => {
//   console.log('TabBarIcon', props);
//   return <Home {...props} />;
// };

function TabBarIcon(props) {
  return <SvgTransaction {...props} />;
}
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

  // return <TabBarLabel label={`${route.name}`} focused={focused} />;

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
        tabBarLabel: props => <TabBarLabel label={route.name} {...props} />,
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
          tabBarIcon: TabBarIcon,
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
