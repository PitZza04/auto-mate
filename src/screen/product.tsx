import {Button, View, Text} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useRootNavigation} from '../hooks/use-navigation';

export function ProductScreen({route}) {
  const navigation = useRootNavigation();
  console.log(navigation.canGoBack());
  const {id} = route.params;
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => <Text>Hello</Text>,
  //   });
  // }, []);
  return (
    <View>
      <Text>{id}</Text>
      <Button
        title="go to profile 2"
        onPress={() => navigation.navigate('Product', {id: 2323})}
      />
    </View>
  );
}
