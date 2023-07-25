import React from 'react';
import {createStackNavigator} from '../../navigation/create-stack-navigator';
import {AccountScreen} from '../../screen/account';

const AccountStack = createStackNavigator();
function AccountNavigator() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Profile" component={AccountScreen} />
    </AccountStack.Navigator>
  );
}

export default AccountNavigator;
