import { StyleSheet, Text, Image, View } from "react-native";

export default CardMain = ({ weather }) => {
  if (!weather?.list || !weather?.city) return null; // Evita erro caso os dados não estejam carregados

  const currentWeather = weather.list[0]; // Dados da previsão atual
  const cityName = weather.city.name || "Cidade Desconhecida";
  const country = weather.city.country || "País Desconhecido";
  const temperature = Math.round(currentWeather.main.temp) || "-";
  const weatherDescription = currentWeather.weather[0]?.description || "Sem descrição";
  const windSpeed = currentWeather.wind?.speed || "-";
  const iconCode = currentWeather.weather[0]?.icon;

  return (
    <View style={styles.container}>
      {/* Cidade e País */}
      <Text style={styles.city}>
        {cityName}, {country}
      </Text>

      {/* Temperatura */}
      <View style={styles.tempContainer}>
        <Text style={styles.temperature}>{temperature}ºC</Text>
        {iconCode && (
          <Image
            style={styles.icon}
            source={{ uri: `https://openweathermap.org/img/wn/${iconCode}@2x.png` }}
          />
        )}
      </View>

      {/* Descrição do clima */}
      <Text style={styles.description}>{weatherDescription}</Text>

      {/* Velocidade do vento */}
      <Text style={styles.wind}>Vento: {windSpeed} m/s</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginVertical: 10,
    width: 280,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  city: {
    fontSize: 22,
    fontWeight: "bold",
  },
  tempContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  temperature: {
    fontSize: 26,
    fontWeight: "bold",
    marginRight: 10,
  },
  icon: {
    width: 80,
    height: 80,
  },
  description: {
    fontSize: 18,
    fontStyle: "italic",
    marginVertical: 5,
  },
  wind: {
    fontSize: 16,
    marginTop: 5,
  },
});

