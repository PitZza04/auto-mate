import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

export const CartScreen = () => {
  return (
    <View style={$root}>
      <Text>Cart</Text>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
};
const styles = StyleSheet.create({});
