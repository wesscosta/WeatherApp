import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default ReceitaDoDia = ({ receita, navigation}) => {

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detalhes", receita)}
    >
      <Image source={receita.imagem} style={styles.imagem} />
      <View style={styles.infoContainer}>
        <Text style={styles.titulo}>{receita.titulo}</Text>
        <Text style={styles.descricao} numberOfLines={2}>
          {receita.descricao}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF6347",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
    alignItems: "center",
    flexDirection: "row",
    width: "95%",
    justifyContent:'center',
    margin:'auto',
    justifyContent:"flex-start",
  },
  imagem: {
    right:0,
    marginLeft: 10,
    width: 120,
    height: 100,
    resizeMode: "cover",
  },
  infoContainer: {
    paddingLeft: 16,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    
  },
  descricao: {
    fontSize: 14,
    color: "#fff",
    marginVertical: 8,
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
