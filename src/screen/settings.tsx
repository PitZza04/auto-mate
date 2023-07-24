import {Text, View, ViewStyle} from 'react-native';
import React from 'react';

export const SettingsScreen = () => {
  return (
    <View style={$root}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
