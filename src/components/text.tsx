import {
  StyleProp,
  TextStyle,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import React from 'react';
import {colors, typography} from '../theme';

type Sizes = keyof typeof $sizeStyles;
type Weights = keyof typeof typography.primary;
type Presets = keyof typeof $presets;

interface CustomTextProps {
  /**
   * Text which is looked up via i18n.
   */

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<TextStyle>;
  /**
   * One of the different types of text presets.
   */
  preset?: Presets;
  /**
   * Text weight modifier.
   */
  weight?: Weights;
  /**
   * Text size modifier.
   */
  size?: Sizes;
  /**
   * Children components.
   */
  children?: React.ReactNode;
}

export type TextProps = CustomTextProps & RNTextProps;

export function Text(props: TextProps) {
  const {weight, size, text, children, style: $styleOverride, ...rest} = props;

  const content = text || children;
  const preset = $presets[props.preset!] ? props.preset : 'default';

  const $styles = [
    $presets[preset!],
    $fontWeightStyles[weight!],
    $sizeStyles[size!],
    $styleOverride,
  ];

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
}

const $sizeStyles = {
  xxl: {fontSize: 36, lineHeight: 44} as TextStyle,
  xl: {fontSize: 24, lineHeight: 34} as TextStyle,
  lg: {fontSize: 20, lineHeight: 32} as TextStyle,
  md: {fontSize: 18, lineHeight: 26} as TextStyle,
  sm: {fontSize: 16, lineHeight: 24} as TextStyle,
  xs: {fontSize: 14, lineHeight: 21} as TextStyle,
  xxs: {fontSize: 12, lineHeight: 18} as TextStyle,
};

const $fontWeightStyles = Object.entries(typography.primary).reduce(
  (acc, [weight, fontFamily]) => {
    return {...acc, [weight]: {fontFamily}};
  },
  {},
) as Record<Weights, TextStyle>;

const $baseStyle = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  {color: colors.black},
];
const $errorStyle = [
  $sizeStyles.xs,
  $fontWeightStyles.light,
  {
    color: colors.error,
  },
];

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  heading: [
    $baseStyle,
    $sizeStyles.xxl,
    $fontWeightStyles.bold,
    {fontFamily: typography.fonts.roboto.normal},
  ] as StyleProp<TextStyle>,

  subheading: [
    $baseStyle,
    $sizeStyles.lg,
    $fontWeightStyles.medium,
  ] as StyleProp<TextStyle>,

  formLabel: [
    $baseStyle,
    $sizeStyles.xxs,
    $fontWeightStyles.bold,
  ] as StyleProp<TextStyle>,
  helperText: [$errorStyle] as StyleProp<TextStyle>,

  formHelper: [
    $baseStyle,
    $sizeStyles.sm,
    $fontWeightStyles.normal,
  ] as StyleProp<TextStyle>,
};
