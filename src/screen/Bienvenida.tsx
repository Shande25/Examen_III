import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
interface Props extends StackScreenProps<any,any>{}

export const Bienvenida = ({navigation}:Props) => {
  return (
    <View>
       <ButtonComponent title='Imagen1'  onPress={()=>navigation.navigate('Imagen1')} />
       <ButtonComponent title='Imagen2'  onPress={()=>navigation.navigate('Imagen2')}/>
       <ButtonComponent title='MayorIguales' onPress={()=>navigation.navigate('MayorIguales')}/>
       <ButtonComponent title='MenorIguales' onPress={()=>navigation.navigate('MenorIguales')}/>
    </View>
  )
}


