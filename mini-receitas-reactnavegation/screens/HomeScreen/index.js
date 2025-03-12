import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HorizontalGallery from "../../components/HorizontalGallery";
import LogoVovo from "../../assets/vovo.svg";
import styles from "./style";

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.background, styles.container]}>
      <LinearGradient
        style={[styles.header]}
        colors={["#FF6347", "#FF6347", "#FF6347", "rgba(255, 255, 255, 0)"]} // Corrigido o valor transparente
      >
        <LogoVovo width={100} height={100} />
        <Text style={styles.title}>Receitas da Vovó</Text>
      </LinearGradient>

      <HorizontalGallery />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Receitas")}
      >
        <Text style={styles.buttonText}>Ver Receitas</Text>
      </TouchableOpacity>
    </View>
  );
}
