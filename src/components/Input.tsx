import { StyleSheet, ViewStyle, ColorValue, View, TextInput, TextInputProps } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import Typography, { fonts } from './Typography';

interface InputT extends TextInputProps {
  placeholder?: string;
  style?: ViewStyle;
  placeholderTextColor?: ColorValue;
  secureTextEntry?: boolean;
  value: string;
  TextSize?: number;
  label?: string;
}

const Input = ({
  placeholder = '',
  style = {},
  placeholderTextColor = '#3F4B63',
  onChangeText = () => { },
  secureTextEntry = false,
  value = '',
  label = 'label',
  TextSize = 20,
  ...props
}: InputT) => {
  return (
    <View
      style={[styles.input, style]}>
      <Typography size={20} color='#fff' type='bold'>{label}</Typography>
      <TextInput
        cursorColor={'#E88607'}
        style={{ fontSize: TextSize, fontFamily: fonts('regular'), color: '#fff' }}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#091224',
    marginTop: 10,
    width: '100%'
  }
});