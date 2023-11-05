import { StyleSheet, Text, TextStyle, TextProps } from 'react-native';
import React from 'react';

type fontTypes = 'regular' | 'bold' | 'light'

export interface TypographyProps extends TextProps {
  size?: number;
  children?: any;
  type?: fontTypes;
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  textDecorationLine?: 'line-through' | 'none' | 'underline' | 'underline line-through',
  lineHeight?: number
};

export function fonts(fontType: fontTypes) {
  switch (fontType) {
    case 'bold':
      return 'Inter-Bold'
    case 'light':
      return 'Inter-Light'
    case 'regular':
      return 'Inter-Regular'
    default:
      return 'Inter-Regular'
  }
}

const Typography: React.FC<TypographyProps> = ({
  size = 16,
  children = '',
  type = 'regular',
  color = '#000000',
  textAlign = undefined,
  textDecorationLine = undefined,
  lineHeight,
  style,
  ...props
}) => {

  const propStyling = StyleSheet.create({
    prop: {
      fontSize: size,
      color,
      textAlign,
      fontFamily: fonts(type) || undefined,
      textDecorationLine,
    },
  });
  return (
    <Text allowFontScaling={false} style={[styles.font, propStyling.prop, style]}  {...props}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  font: {
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
});
