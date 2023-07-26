import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
  TextStyle,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useImperativeHandle, useRef} from 'react';
import {spacing} from '../../theme/spacing';
import {colors} from '../../theme/colors';
import {images, typography} from '../../theme';

export const Login = () => {
  const input = useRef<TextInput>();

  function focusInput() {
    console.log('hello', input.current);
    input.current?.focus();
  }

  const handleSubmit = () => {
    console.log('Hello World');
  };
  return (
    <View style={$root}>
      <Image
        source={images.logoWithTagline}
        style={{
          height: '60%',
          width: '60%',

          resizeMode: 'contain',
        }}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={$containerStyles}
        onPress={focusInput}>
        <TextInput
          placeholder="Email"
          underlineColorAndroid={colors.transparent}
          textAlignVertical="center"
          placeholderTextColor={colors.palette.neutral900}
          style={$inputStyles}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        style={$containerStyles}
        onPress={focusInput}>
        <TextInput
          placeholder="Password"
          underlineColorAndroid={colors.transparent}
          textAlignVertical="center"
          placeholderTextColor={colors.palette.neutral900}
          style={$inputStyles}
        />
      </TouchableOpacity>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.background,
  paddingHorizontal: spacing.medium,
};

const $containerStyles: ViewStyle = {
  width: '100%',
  height: 50,
  borderBottomWidth: 2,
  borderColor: colors.palette.cyan900,
  paddingVertical: 0,
  marginVertical: 0,
  marginHorizontal: 0,
  alignSelf: 'center',
};
const $title: TextStyle = {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
  paddingTop: 20,
};

const $inputStyles: TextStyle = {
  flex: 1,
  alignSelf: 'stretch',
  fontFamily: typography.primary.normal,
  color: colors.black,
  fontSize: 16,
  height: 24,
  // https://github.com/facebook/react-native/issues/21720#issuecomment-532642093
  paddingVertical: 0,
  paddingHorizontal: 0,
  marginVertical: spacing.extraSmall,
  marginHorizontal: spacing.small,
};
const styles = StyleSheet.create({});
