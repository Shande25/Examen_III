import { View } from 'react-native';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress:()=>void
    
}
export const ButtonComponent = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={style.buttonContiner}>
        <Text style={style.buttoText} onPress={onPress} >{title}</Text>
    </TouchableOpacity>
  )
}
const style=StyleSheet.create({
    buttonContiner:{
        backgroundColor:'#5bb891',
        paddingVertical:17,
        borderRadius:50,
        marginVertical:10
    },buttoText:{
        textAlign:'center',
        color:'white',
        fontSize:14,
        fontWeight:'bold'
    }
})
