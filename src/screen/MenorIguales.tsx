import { StackScreenProps } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { RouterStackParamList } from '../navigator/StackNavigator'
import { InputComponent } from '../components/InputComponents';
import { ButtonComponent } from '../components/ButtonComponent';

export const MenorIguales = () => {
    const [numero1, setNumero1] = useState(''); 
    const [numero2, setNumero2] = useState(''); 
    const [resultado, setResultado] = useState('');

    const NumeroMayor = () => {
        const num1 = parseFloat(numero1);
        const num2 = parseFloat(numero2);

        if ((num1) && (num2)) {
            const menor = Math.min(num1, num2);
            setResultado(`El numero menor es: ${menor}`);
        }
    };
    return (
        <View>
            <InputComponent placeholder="numero1" numero={numero1} onChangeText={setNumero1} />
            <InputComponent placeholder="numero2" numero={numero2} onChangeText={setNumero2} />
            <ButtonComponent title=">=" onPress={NumeroMayor} />
            <Text>{resultado}</Text>
        </View>
    );
};
