import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';

export const DiagnoseScreen = () => {
  return (
    <View style={$root}>
      <Text>Diagnose Screen</Text>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Type:</Text>
        <View style={styles.spacing} />
        <Text style={styles.text}>1.0</Text>
      </View>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  text: {},
  spacing: {
    flexGrow: 1,

    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderStyle: 'dotted',
    marginBottom: 2,
  },
});
