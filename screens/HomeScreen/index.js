import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";
import CardMain from "../../components/cardMain";
import CardList from "../../components/cardList";
import { useWeather } from "../../context/WeatherContext";

export default function HomeScreen() {
  const { data, setCity } = useWeather(); // Pegando informações globalmente
  const [cityInput, setCityInput] = useState("");

{  console.log(data)}
  // Função para atualizar a cidade no contexto
  const handleSearch = () => {
    if (cityInput.trim() !== "") {
      setCity(cityInput); // Atualiza a cidade no contexto, disparando a requisição da API
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar cidade"
        placeholderTextColor="#000"
        value={cityInput}
        onChangeText={(text) => setCityInput(text)}
        returnKeyType="search" // Define a tecla "Enter" como "Buscar"
        onSubmitEditing={handleSearch} // Chama a função ao pressionar Enter
      />

      <CardMain weather={data} />
      <CardList weather={data} style={styles.cardList}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical:40,
  },

  input: {
    backgroundColor: "rgba(217,217,217,19)",
    width: 300,
    borderRadius: 15,
    padding: 10,
    fontSize: 18,
  },
  cardList:{
    height:200,
  }
});
