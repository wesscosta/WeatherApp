import { StyleSheet, Text, Image, View } from "react-native";

export default CardMain = ({ weather }) => {
  const codIcon = weather?.list?.[0]?.weather?.[0]?.icon;
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Text style={styles.label}>
          {weather?.city?.name || "Cidade Desconhecida"}
        </Text>
        <Text style={styles.label}> - </Text>
        <Text style={styles.label}>
          {weather?.city?.country || "Pais Desconhecida"}
        </Text>
      </View>

      <View style={styles.flexRow}>
        <Text style={styles.label}>
          {Math.round(weather?.list?.[0]?.main?.temp) || "-"}
        </Text>
        <Text style={styles.label}>ºC</Text>
      </View>

      <Image
        style={styles.icon}
        source={{ uri: `https://openweathermap.org/img/wn/${codIcon}@2x.png` }}
      />
      <Text>vento</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  flexRow: {
    flexDirection: "row",
    gap: 3,
  },
  
  label: {
    fontSize: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
});
