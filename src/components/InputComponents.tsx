import React from 'react'
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface InputProps {
    placeholder: string;
    numero: number|string;
    onChangeText: (text: string) => void;
  }
  export const InputComponent = ({ placeholder, numero, onChangeText }: InputProps) => {
    return (
      <TextInput style={styles.inputText} placeholder={placeholder} value={numero.toString()} onChangeText={onChangeText}/>
    );
  };
  const styles=StyleSheet.create({
    inputText:{
        borderRadius:5,
        backgroundColor:'#f1f4f5', 
        marginVertical:10,
        paddingHorizontal:10
    }
})
