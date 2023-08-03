import {Controller, Control} from 'react-hook-form';
import {StyleSheet, TextInput, View} from 'react-native';
import {Text} from './text';

import React from 'react';
import {colors, countryList} from '../theme';

type ControlledInputProps = {
  control: Control;
  name: string;
} & React.ComponentProps<typeof TextInput>;

export function ControlledInput({
  control,
  name,
  ...textInputProps
}: ControlledInputProps) {
  const showFlex = (invalid: Boolean) => (invalid ? 'flex' : 'none');
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: {value, onChange, onBlur},
        fieldState: {error, invalid},
      }) => (
        <View style={styles.container}>
          <Text preset="bold">{countryList.emoji}</Text>
          <TextInput
            {...textInputProps}
            style={{backgroundColor: colors.background}}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
          <Text preset="helperText" style={{display: showFlex(invalid)}}>
            {error?.message}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
