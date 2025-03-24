import { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import CardMain from "../../components/cardMain";
import CardList from "../../components/cardList";
import { useWeather } from "../../context/WeatherContext";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  const { data, setCity } = useWeather(); // Pegando informações globalmente
  const [cityInput, setCityInput] = useState("");
  const [isInputVisible, setIsInputVisible] = useState(false);
  const inputRef = useRef(null); // Referência para o input

  console.log(data);

  // Função para atualizar a cidade no contexto
  const handleSearch = () => {
    if (cityInput.trim() !== "") {
      setCity(cityInput); // Atualiza a cidade no contexto
      setCityInput(""); // Limpa o campo após a busca
    }
    setIsInputVisible(false); // Oculta o input após a busca
  };

  // Quando o input for exibido, foca automaticamente nele
  const showInput = () => {
    setIsInputVisible(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0A0C14", "#17243E", "#17243E"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={StyleSheet.absoluteFill} // Aplica ao fundo inteiro
      >
        <View style={styles.content}>
          {!isInputVisible ? (
            <TouchableOpacity style={styles.searchButton} onPress={showInput}>
                <MaterialIcons name="search" size={40} color="#CCC" />
            </TouchableOpacity>
          ) : (
            <TextInput
              ref={inputRef}
              style={styles.input}
              placeholder="Digite a cidade..."
              placeholderTextColor="#555"
              value={cityInput}
              onChangeText={setCityInput}
              returnKeyType="search"
              onSubmitEditing={handleSearch}
              onBlur={() => setIsInputVisible(false)} // Esconde o input quando perder o foco
            />
          )}

          <CardMain weather={data} />
          <CardList weather={data} style={styles.cardList} />

          <StatusBar style="light" />
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 40,
  },
  searchButton: {
    backgroundColor: "#00A080",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius:50,
    alignItems:'le'
  },

  input: {
    backgroundColor: "rgba(217,217,217,0.7)",
    width: 300,
    borderRadius: 15,
    padding: 10,
    fontSize: 18,
    color: "#000",
  },
  cardList: {
    height: 200,
  },
});
