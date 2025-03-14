import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default CardReceita = ({ receita, onVerReceita, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={receita.imagem} style={styles.imagem} />
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{receita.titulo}</Text>
        <Text style={styles.descricao} numberOfLines={2}>{receita.ingredientes}</Text>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("Detalhes", receita)}>
          <Text style={styles.botaoTexto}>Ver Receita</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
    margin: 16,
  },
  imagem: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    marginVertical: 8,
  },
  botao: {
    backgroundColor: "#FF6F00",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 6,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});


