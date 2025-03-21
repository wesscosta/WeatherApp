import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReceitasScreen from './screens/ReceitasScreen';
import DetalhesScreen from './screens/DetalhesScreen';
import { ReceitasProvider } from "./context/ReceitasContext"; // Importando o Provider

const Stack = createStackNavigator();

export default function App() {
  return (
    <ReceitasProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Receitas" component={ReceitasScreen} />
          <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReceitasProvider>
    
  );
}
