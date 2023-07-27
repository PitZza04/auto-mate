import {Controller, Control} from 'react-hook-form';
import {
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import {Text} from '../../components/text';
import {colors, countryList, spacing} from '../../theme';
import {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

type PhoneFieldProps = {
  control: Control;
  name: string;
  style?: StyleProp<TextStyle>;
  label: string;
  contentContainerStyle?: StyleProp<ViewStyle>;
} & React.ComponentProps<typeof TextInput>;

export default function PhoneField({
  control,
  name,
  contentContainerStyle,
  label,
  style,
  ...textInputProps
}: PhoneFieldProps) {
  const [isEditable, setIsEditable] = useState(false);

  const handleFocus = () => {
    // Prevent editing by setting isEditable to false on focus
    setIsEditable(false);
  };
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: {value, onChange, onBlur},
        fieldState: {error, invalid},
      }) => (
        <View
          style={{
            width: '100%',
            padding: spacing.medium,
            paddingBottom: spacing.small,
            backgroundColor: '#efefef',
            borderRadius: 10,
          }}>
          <Text preset="formLabel" style={{fontWeight: 'bold'}}>
            {label}
          </Text>
          <View style={[styles.flexRow, {paddingTop: spacing.micro}]}>
            <Text
              style={{
                fontSize: 14,
                padding: 0,
                marginRight: 10,
                fontWeight: 'bold',
              }}>{`${countryList.emoji} ${countryList.dial_code}`}</Text>
            <TextInput
              {...textInputProps}
              style={{
                color: colors.black,
                padding: 0,
                fontWeight: '500',
              }}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          </View>

          <Text
            preset="helperText"
            style={{display: invalid ? 'flex' : 'none'}}>
            {`error?.message`}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
