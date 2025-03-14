import React from "react";
import {ScrollView, Text} from "react-native";
import CardReceita from "../../components/CardReceita";
import styles from "./style";

export default function ReceitasScreen({ navigation }) {
  const receitas = [
    {
      id: 1,
      titulo: "Bolo de Chocolate",
      Categoria: "Sobremesa",
      descricao: "Um delicioso bolo de chocolate fofinho e úmido.",
      ingredientes: "Farinha, Ovos, Chocolate...",
      preparo: "Misture tudo e asse por 40min.",
      imagem:require("../../assets/rec-bolo-chocolocate.jpg"),
    },
    {
      id: 2,
      titulo: "Panqueca",
      Categoria: "Sobremesa",
      descricao: "Um delicioso bolo de chocolate fofinho e úmido.",
      ingredientes: "Farinha, Leite, Ovos...",
      preparo: "Misture tudo e frite em uma frigideira.",
      imagem:require("../../assets/rec-panqueca.jpg"),
    },
    {
      id: 3,
      titulo: "Brigadeiro",
      Categoria: "Doces",
      descricao: "Um delicioso bolo de chocolate fofinho e úmido.",
      ingredientes: "Leite Condensado, Chocolate, Manteiga...",
      preparo: "Cozinhe até engrossar e enrole.",
      imagem:require("../../assets/rec-brigadeiro.jpg"),
    },
    {
      id: 4,
      titulo: "Salada de Folhas",
      descricao: "Um delicioso bolo de chocolate fofinho e úmido.",
      ingredientes: "Leite Condensado, Chocolate, Manteiga...",
      preparo: "Cozinhe até engrossar e enrole.",
      imagem:require("../../assets/rec-salada.jpg"),
    },
  ];
  const handleVerReceita = (receita) => {
    console.log("Abrindo receita:", receita.titulo);
    
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🍽 Lista de Receitas</Text>
      {receitas.map((receita) => (
              <CardReceita receita={receita} onVerReceita={handleVerReceita} navigation={navigation}/>
      ))}
    </ScrollView>
  );
}

