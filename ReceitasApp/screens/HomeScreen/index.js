import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, SafeAreaView,ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import InfinityGallery from "../../components/InfinityGallery";
import ReceitaDoDia from "../../components/ReceitaDoDia";
import Categorias from "../../components/Categorias";
import LogoVovo from "../../assets/vovo.svg";
import { useReceitas } from "../../context/ReceitasContext"; // Importando o contexto
import styles from "./style";


export default function HomeScreen({ navigation }) {
  const { receitas } = useReceitas(); // Obtendo as receitas do contexto
  const receita = useMemo(() => {
    if (receitas.length === 0) return null; // Se não houver receitas, retorna null
    return receitas[Math.floor(Math.random() * receitas.length)];
  }, [receitas]); // Atualiza sempre que `receitas` mudar
  
  const handleVerReceita = (receita) => {
    console.log("Abrindo receita:", receita.titulo);
  };
  return (
    <SafeAreaView style={[styles.background, styles.container]}>
      <LinearGradient
        style={[styles.header]}
        colors={["#FF6347", "#FF6347", "#FF6347", "rgba(255, 255, 255, 0)"]} // Corrigido o valor transparente
      >
        <LogoVovo width={90} height={90} />
      </LinearGradient>
      <ScrollView style={styles.main}>
        <Text style={styles.h3}>Em Alta</Text>
        <InfinityGallery />
        <View>
          <Text style={styles.h3}>Receita do Dia</Text>
          <ReceitaDoDia receita={receita} onVerReceita={handleVerReceita} navigation={navigation}/>
        </View>
        <View>
          <Text style={styles.h3}>Categorias do Dia</Text>
          <Categorias/>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Receitas")}
        >
          <Text style={styles.buttonText}>Ver Todas as Receitas</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

