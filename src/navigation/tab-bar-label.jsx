import React from 'react';

import {StyleSheet, Text} from 'react-native';

const TabBarLabel = ({focused, label}) => {
  return (
    <Text
      adjustsFontSizeToFit
      style={[styles.label, {color: focused ? '#b61616' : '#000'}]}>
      {label}
    </Text>
  );
};

export default TabBarLabel;

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    textAlign: 'center',
  },
});
