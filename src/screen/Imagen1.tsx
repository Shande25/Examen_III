import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import App from '../../App';
import { ButtonComponent } from '../components/ButtonComponent';
import { StackScreenProps } from '@react-navigation/stack';
import { RouterStackParamList } from '../navigator/StackNavigator';


export const Imagen1 = () => {
  return (
    <View>
       <Image  style={styles.Image} source ={{ uri:'https://yt3.googleusercontent.com/3PU3ubbOENgeh2m2BaIVQM_hxakKExjUJ3EU6QAwxcopxUk0KcQbN9Dp-8Vrk4al7GB5mago=s900-c-k-c0x00ffffff-no-rj'}}/>
    </View>
  )
}
const styles=StyleSheet.create({
    Image:{
        width: '100%',
        height: '100%',
    }})
