import React from "react";
import { FlatList, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import IconPanela from "../assets/icon_panela.svg";
import { useReceitas } from "../context/ReceitasContext"; // Importando o contexto

export default function Categorias({ modoLista = false }) {
  const { receitas } = useReceitas(); // Pegando receitas do contexto

  // Extraindo categorias únicas
  const categorias = [...new Set(receitas.map((r) => r.categoria))];

  return modoLista ? (
    <CategoriaLista categorias={categorias} />
  ) : (
    <CategoriaCard categorias={categorias} />
  );
}

// Componente para exibir categorias como Cards (Grade)
const CategoriaCard = ({ categorias }) => (
  <FlatList
    data={categorias}
    keyExtractor={(item) => item}
    numColumns={2} // Exibe duas colunas
    contentContainerStyle={styles.container}
    renderItem={({ item }) => (
      <TouchableOpacity style={[styles.photoContainer, { backgroundColor: getRandomColor(item) }]}>
        <IconPanela width={30} height={30} />
        <Text style={styles.photoText}>{item}</Text>
      </TouchableOpacity>
    )}
  />
);

// Componente para exibir categorias como Lista Vertical
const CategoriaLista = ({ categorias }) => (
  <FlatList
    data={categorias}
    keyExtractor={(item) => item}
    renderItem={({ item }) => (
      <View style={styles.listItem}>
        <IconPanela width={20} height={20} />
        <Text style={styles.listText}>{item}</Text>
      </View>
    )}
  />
);

// Função para gerar uma cor única baseada no nome da categoria
const getRandomColor = (categoria) => {
  return `rgba(255, 99, 71, 0.5)`;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  photoContainer: {
    flex: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderRadius: 10,
  },
  photoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 10,
  },
  listText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

