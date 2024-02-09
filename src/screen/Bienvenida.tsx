import React from 'react'
import { Button, Text, View, StyleSheet, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ButtonComponent } from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Back_Color } from '../commons/ContantColo';
interface Props extends StackScreenProps<any,any>{}
useWindowDimensions
export const Bienvenida = ({navigation}:Props) => {
  return (
    <View style={{backgroundColor:Back_Color}}>
       <ButtonComponent title='Imagen1'  onPress={()=>navigation.navigate('Imagen1')} />
       <ButtonComponent title='Imagen2'  onPress={()=>navigation.navigate('Imagen2')}/>
       <ButtonComponent title='MayorIguales' onPress={()=>navigation.navigate('MayorIguales')}/>
       <ButtonComponent title='MenorIguales' onPress={()=>navigation.navigate('MenorIguales')}/>
    </View>
  )
}



