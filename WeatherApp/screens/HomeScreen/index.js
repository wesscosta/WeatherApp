import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View } from 'react-native';
import CardMain from '../../components/cardMain';
import { useWeather } from '../../context/WeatherContext';

export default function HomeScreen() {
  const {data} = useWeather() //pegando informações globalmente
  {console.log(data)}
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Buscar cidade' placeholderTextColor={'#000'}/>

      <CardMain weather={data} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    backgroundColor:'rgba(217,217,217,19)',
    width: 300,
    borderRadius:15,
    padding:10,
    fontSize:18,
  },
});
