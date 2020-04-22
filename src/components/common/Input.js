import React from 'react';
import {View, Text, TextInput} from 'react-native';

const Input = ({label, value, placeholder, secureTextEntry, onChangeText}) => {
  const {containerStyle, inputStyle, labelStyle} = style;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const style = {
  inputStyle: {
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20,
    width: 100,
  },
  labelStyle: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export {Input};
