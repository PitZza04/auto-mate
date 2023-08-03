import {StyleSheet, View, TouchableOpacity} from 'react-native';
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
        style={[styles.flexCenter, styles.socialBtn]}
        onPress={handleLoginWithGoogle}>
        <View style={styles.iconWrapper}>
          <SvgGoogleOriginal width={24} height={24} />
        </View>
        <Text weight="medium" size="xxs" style={styles.socialText}>
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
  socialBtn: {
    padding: spacing.extraSmall,
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
    borderRadius: 25,
  },
  iconWrapper: {
    position: 'absolute',
    left: 10,
  },
  socialText: {color: '#1E1E1E'},
});
