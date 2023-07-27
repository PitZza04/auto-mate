import {Pressable, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgGoogleOriginal from '../../components/icon/google-original';
import {Text} from '../../components/text';
import {spacing} from '../../theme';

export function LoginWithGoogle() {
  const handleLoginWithGoogle = () => {
    console.log('hello');
  };
  return (
    <>
      <TouchableOpacity
        style={[
          styles.flexCenter,
          {
            padding: spacing.extraSmall,
            borderWidth: 1,
            borderColor: '#000',
            width: '100%',
            borderRadius: 25,
          },
        ]}
        onPress={handleLoginWithGoogle}>
        <View
          style={{
            position: 'absolute',
            left: 10,
          }}>
          <SvgGoogleOriginal width={24} height={24} />
        </View>
        <Text weight="medium" size="xxs" style={{color: '#1E1E1E'}}>
          Continue With Google
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
