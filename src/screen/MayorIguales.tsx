import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { InputComponent } from '../components/InputComponents'; 
import { ButtonComponent } from '../components/ButtonComponent';

export const MayorIguales = () => {
    const [numero1, setNumero1] = useState(''); 
    const [numero2, setNumero2] = useState(''); 
    const [resultado, setResultado] = useState('');

    const NumeroMayor= () => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        if ((num1) && (num2)) {
            const mayor = Math.max(num1, num2);
            setResultado(`${mayor}`);
        }
    };

    return (
        <View>
            <InputComponent placeholder="numero1" numero={numero1} onChangeText={setNumero1} />
            <InputComponent placeholder="numero2" numero={numero2} onChangeText={setNumero2} />
            <ButtonComponent title=">=" onPress={NumeroMayor} />
            <Text style={styles.Resultado}>El numero mayor: {resultado}</Text>
        </View>
    );
};
const styles=StyleSheet.create({
    Resultado:{
    fontSize:27,
    color:'white',
    fontWeight:'bold',
    textAlign:'center'
    }
})
