import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { Imagen1 } from '../screen/Imagen1';
import { Imagen2 } from '../screen/Imagen2';
import { MayorIguales } from '../screen/MayorIguales';
import { MenorIguales } from '../screen/MenorIguales';
import { Bienvenida } from '../screen/Bienvenida';
export type RouterStackParamList={
  Bienvenida: undefined,
  Imagen1:undefined,
  Imagen2:undefined,
  MayorIguales:undefined,
  MenorIguales:undefined,
  
}
const Stack = createStackNavigator<RouterStackParamList>();
export const StackNavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{headerStyle:{elevation:0}, cardStyle:{backgroundColor:'#20232a'}}} >
      {/* <Stack.Screen name="Bienvida" options={{title:'Imagen1'}} options={{headerShown:true}} component={Bienvenida} /> */}
      <Stack.Screen name="Bienvida"  component={Bienvenida} />
      <Stack.Screen name="Imagen1"  component={Imagen1} />
      <Stack.Screen name="Imagen2" component={Imagen2} />
      <Stack.Screen name="MayorIguales" component={MayorIguales} />
      <Stack.Screen name="MenorIguales" component={MenorIguales} />
    </Stack.Navigator>
  );
}   