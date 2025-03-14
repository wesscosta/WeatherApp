import React from "react";
import {ScrollView, Text} from "react-native";
import CardReceita from "../../components/CardReceita";
import styles from "./style";
import { useReceitas } from "../../context/ReceitasContext"; // Importando o contexto

export default function ReceitasScreen({ navigation }) {

  const { receitas } = useReceitas(); // Pegando receitas globalmente
  
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

