import {Text, View, ViewStyle, TextStyle} from 'react-native';
import React from 'react';

export const LoginScreen = () => {
  return (
    <View style={$root}>
      <Text style={$title}>LoginScreen</Text>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
};

const $title: TextStyle = {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#000',
};
