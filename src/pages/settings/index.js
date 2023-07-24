import React from 'react';
import {createStackNavigator} from '../../navigation/create-stack-navigator';

import {SettingsScreen} from '../../screen/settings';

const SettingsStack = createStackNavigator();
function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Setting" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsNavigator;
