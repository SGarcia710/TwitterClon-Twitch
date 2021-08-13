import React from 'react';
import { TextInputProps, TextInput, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// const _Input = styled.TextInput`
//   border-bottom: 1px solid #7d8289;
// `;

interface InputProps extends TextInputProps {
  marginBottom?: number;
}

const Input = (props: InputProps) => {
  return (
    <TextInput
      style={[
        {
          marginBottom: props.marginBottom ? props.marginBottom : 0,
        },
        styles.input,
      ]}
      placeholderTextColor="#7d8289"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#7d8289',
    paddingBottom: 6,
  },
});

export default Input;
