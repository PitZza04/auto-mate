import {StyleSheet, View, ViewStyle, Image} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {spacing} from '../../theme/spacing';
import {colors} from '../../theme/colors';
import {images} from '../../theme';

// import {useForm} from 'react-hook-form';
// import {zodResolver} from '@hookform/resolvers/zod';
// import {z} from 'zod';
// import {phoneSchema} from '../../lib/validations/auth';
import {LoginComponent} from './login';

import {StackHeaderProps} from '@react-navigation/stack';
import {Header} from '../../components/header';
import {useRootNavigation} from '../../hooks/use-navigation';

//type PhoneFormValues = z.infer<typeof phoneSchema>;

const renderHeader = (props: StackHeaderProps) => {
  const {navigation} = props;
  return (
    <Header
      titleStyle={{color: colors.black}}
      leftIcon="caretLeft"
      leftIconColor={colors.black}
      onLeftPress={() => navigation.goBack()}
    />
  );
};

export const Login = () => {
  const navigation = useRootNavigation();
  // const {control, handleSubmit} = useForm<PhoneFormValues>({
  //   resolver: zodResolver(phoneSchema),
  // });

  // const onAuthSubmit = (data: PhoneFormValues) => {
  //   console.log('Hello World', data);
  // };
  useLayoutEffect(() => {
    navigation.setOptions({
      header: renderHeader,
    });
  }, [navigation]);
  return (
    <View style={$root}>
      <Image source={images.logoWithTagline} style={styles.logo} />
      <LoginComponent />
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  paddingTop: spacing.large,
  alignItems: 'center',
  backgroundColor: colors.background,
  paddingHorizontal: spacing.medium,
};
// const $textField: ViewStyle = {
//   marginBottom: spacing.large,
// };
// const $containerStyles: ViewStyle = {
//   width: '100%',
//   height: 50,
//   borderBottomWidth: 2,
//   borderColor: colors.palette.cyan900,
//   paddingVertical: 0,
//   marginVertical: 0,
//   marginHorizontal: 0,
//   alignSelf: 'center',
// };
// const $title: TextStyle = {
//   fontSize: 16,
//   fontWeight: 'bold',
//   color: '#000',
//   paddingTop: 20,
// };

// const $inputStyles: TextStyle = {
//   flex: 1,
//   alignSelf: 'stretch',
//   fontFamily: typography.primary.normal,
//   color: colors.black,
//   fontSize: 16,
//   height: 24,
//   // https://github.com/facebook/react-native/issues/21720#issuecomment-532642093
//   paddingVertical: 0,
//   paddingHorizontal: 0,
//   marginVertical: spacing.extraSmall,
//   marginHorizontal: spacing.small,
// };
const styles = StyleSheet.create({
  logo: {
    height: '20%',
    width: '60%',
    resizeMode: 'contain',
  },
});
