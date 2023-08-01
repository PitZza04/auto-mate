import React from 'react';

import {StyleSheet, Text} from 'react-native';

const TabBarLabel = props => {
  console.log('Props', props);
  return (
    <Text
      adjustsFontSizeToFit
      style={[styles.label, {color: props.focused ? '#000' : '#5e6267'}]}>
      {/* {label} */} hello
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
