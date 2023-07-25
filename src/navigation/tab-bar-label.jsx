import React from 'react';

import {StyleSheet, Text} from 'react-native';

const TabBarLabel = ({focused, label}) => {
  return (
    <Text
      adjustsFontSizeToFit
      style={[styles.label, {color: focused ? '#000' : '#5e6267'}]}>
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
