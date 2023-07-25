import {Text, View, ViewStyle} from 'react-native';
import React from 'react';

export const NotificationScreen = () => {
  return (
    <View style={$root}>
      <Text>NotificationScreen</Text>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
