import {Text, View, Button, ViewStyle} from 'react-native';
import React from 'react';

import {useRootNavigation} from '../hooks/use-navigation';

export const SettingsScreen = () => {
  const navigation = useRootNavigation();
  const goToNotification = () => {
    navigation.navigate('Notification');
  };
  return (
    <View style={$root}>
      <Button title="Go to Notification" onPress={goToNotification} />
      <Text>SettingsScreen</Text>
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
