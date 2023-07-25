import {Text, View, ViewStyle} from 'react-native';
import React from 'react';

export const AccountScreen = () => {
  return (
    <View style={$root}>
      <Text>AccountScreen</Text>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
};
