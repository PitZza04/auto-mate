import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useRootNavigation} from '../../hooks/use-navigation';
import {Header} from '../../components/header';
import {colors} from '../../theme';
export const Home = () => {
  const navigation = useRootNavigation();
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerShown: true,
  //     header: () => (
  //       <Header
  //         titleStyle={{color: colors.black}}
  //         leftIcon="x"
  //         leftIconColor={colors.black}
  //         onLeftPress={() => navigation.goBack()}
  //       />
  //     ),
  //   });
  // }, []);
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

const styles = StyleSheet.create({});
