import React from "react";
import { FlatList,Text, StyleSheet, TouchableOpacity } from "react-native";
import IconPanela from "../assets/icon_panela.svg";

const photos = Array.from({ length:4 }, (_, index) => `Categoria ${index + 1}`);

export default Categorias = () => {
  return (
    <FlatList
      data={photos}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // Define o número de colunasF
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.photoContainer}>
          <Text style={styles.photoText}><IconPanela width={30} height={30}  /></Text>
          <Text style={styles.photoText}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
  },
  photoContainer: {
    flex: 1,
    height: 100,
    backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 10,
  },
  photoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
