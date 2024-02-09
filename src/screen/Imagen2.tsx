import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { RouterStackParamList } from '../navigator/StackNavigator'


export const Imagen2 = () => {
  return (
    <View>
        <Image style={styles.Image}source ={{ uri:'https://i.pinimg.com/originals/f7/41/d4/f741d41ac07dea245521236a734480d0.jpg'}}/>
    </View>
  )
}
const styles=StyleSheet.create({
    Image:{
        width: '100%',
        height: '100%',
    }})

