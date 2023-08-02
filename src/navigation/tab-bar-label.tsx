import {LabelPosition} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React from 'react';

import {StyleSheet, Text} from 'react-native';

interface TabBarLabelProps {
  focused: boolean;
  color: string;
  position: LabelPosition;
  children: React.ReactNode;
}
const TabBarLabel = ({focused, children}: TabBarLabelProps) => {
  const activeColor = focused ? '#000' : '#5e6267';
  return (
    <>
      <Text adjustsFontSizeToFit style={[styles.label, {color: activeColor}]}>
        {children}
      </Text>
    </>
  );
};

export default TabBarLabel;

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    textAlign: 'center',
  },
});
