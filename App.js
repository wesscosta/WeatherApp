import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen'
import { WeatherProvider } from "./context/WeatherContext";


const Stack = createStackNavigator();

export default function App(){
  return(
    <WeatherProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </WeatherProvider>
  )
}
