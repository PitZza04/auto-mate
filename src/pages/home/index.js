import {createStackNavigator} from '../../navigation/create-stack-navigator';
import {HomeScreen} from '../../screen/home';

const HomeStack = createStackNavigator();
function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeNavigator;
