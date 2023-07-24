import {Text, View, ViewStyle} from 'react-native';
import React from 'react';

export const HomeScreen = () => {
  return (
    <View style={$root}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
