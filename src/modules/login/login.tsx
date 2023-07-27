import {View, StyleSheet, Pressable, Text as RNText} from 'react-native';
import React from 'react';
import {Text} from '../../components/text';
import {z} from 'zod';
import PhoneField from './phone-field';
import {colors, spacing} from '../../theme';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {phoneSchema} from '../../lib/validations/auth';
import {LoginWithGoogle} from './login-with-google';
import {LoginWithFacebook} from './login-with-facebook';
type PhoneFormValues = z.infer<typeof phoneSchema>;
export function LoginComponent() {
  const {control, handleSubmit} = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
  });

  const navigateToTerms = () => {
    console.log('awit');
  };
  return (
    <View style={styles.container}>
      {/* Phone Input Field */}
      <View style={styles.flexColumn}>
        <PhoneField
          name="phone"
          control={control}
          keyboardType="phone-pad"
          label={'Phone Number'}
          placeholder="910 124 4567"
          placeholderTextColor={'#625C58'}
          maxLength={11}
        />
        <Pressable
          style={styles.sendCode}
          onPress={() => {
            console.log('hello');
          }}>
          <Text style={{color: '#fff', fontSize: 14}}>Send Code</Text>
        </Pressable>
        <RNText
          style={{
            fontSize: 12,
            fontFamily: 'Inter-SemiBold',
            fontWeight: '500',

            color: colors.black,
          }}>
          OR
        </RNText>
        <LoginWithFacebook />
        <LoginWithGoogle />
        <Text style={styles.terms}>
          By signing in you agree to our{' '}
          <Text
            onPress={navigateToTerms}
            style={[
              styles.terms,
              {fontFamily: 'Inter-SemiBold', fontWeight: 'bold'},
            ]}>
            Terms & Conditions
          </Text>
        </Text>
      </View>

      {/* Social Login */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 16,
  },
  flexColumn: {
    marginHorizontal: spacing.large,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  phoneBox: {
    flexDirection: 'row',
  },
  sendCode: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3C3C3C',
    width: '100%',
    marginTop: spacing.extraSmall,
    borderRadius: 25,
    padding: spacing.extraSmall,
  },
  terms: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
  },
});
