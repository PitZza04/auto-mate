import {Pressable, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';

import {Text} from '../../components/text';
import {spacing} from '../../theme';
import SvgFacebook from '../../components/icon/facebook';

export function LoginWithFacebook() {
  const handleLoginWithFacebook = () => {
    console.log('hello');
  };
  return (
    <>
      <TouchableOpacity
        style={[
          styles.flexCenter,
          {
            padding: spacing.extraSmall + 2,
            borderWidth: 1,
            borderColor: '#000',
            width: '100%',
            borderRadius: 25,
          },
        ]}
        onPress={handleLoginWithFacebook}>
        <View
          style={{
            position: 'absolute',
            left: 10,
          }}>
          <SvgFacebook width={24} height={24} color={'#4267B2'} />
        </View>
        <Text weight="medium" size="xxs" style={{color: '#1E1E1E'}}>
          Continue With Facebook
        </Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  flexCenter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
