import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default CardList = ({ weather }) => {
  if (!weather?.list || !weather?.city) return null; // Evita erros caso `weather` seja undefined

  // Filtra os índices 0, 8, 16, 24, 32
  const filteredData = weather.list.filter(
    (_, index) => index % 8 === 0 && index <= 39
  );

  return (
    <View     style={styles.container}>
      <FlatList
        horizontal
    
        data={filteredData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.dt.toString()} // `dt` é único e representa o timestamp da previsão
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>
              {weather.city.name}, {weather.city.country}
            </Text>

            <View style={styles.infoContainer}>
              <Text style={styles.temp}>{Math.round(item.main.temp)}ºC</Text>
              <Image
                style={styles.icon}
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
                }}
              />
              <Text style={styles.wind}>Vento: {item.wind.speed} m/s</Text>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  item: {
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  temp: {
    fontSize: 22,
    fontWeight: "bold",
  },
  icon: {
    width: 50,
    height: 50,
  },
  wind: {
    marginTop: 5,
    fontSize: 16,
  },
});
