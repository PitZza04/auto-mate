import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

export const TransactionScreen = () => {
  return (
    <View style={$root}>
      <Text>TransacitonScreen</Text>
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
