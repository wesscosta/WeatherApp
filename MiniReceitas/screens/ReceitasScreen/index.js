import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ReceitasScreen({ navigation }) {
  const receitas = [
    { id: 1, nome: 'Bolo de Chocolate', ingredientes: 'Farinha, Ovos, Chocolate...', preparo: 'Misture tudo e asse por 40min.' },
    { id: 2, nome: 'Panqueca', ingredientes: 'Farinha, Leite, Ovos...', preparo: 'Misture tudo e frite em uma frigideira.' },
    { id: 3, nome: 'Brigadeiro', ingredientes: 'Leite Condensado, Chocolate, Manteiga...', preparo: 'Cozinhe até engrossar e enrole.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽 Lista de Receitas</Text>
      {receitas.map((receita) => (
        <View key={receita.id} style={styles.card}>
          <Text style={styles.recipeName}>{receita.nome}</Text>
          <Button
            title="Ver Detalhes"
            onPress={() => navigation.navigate('Detalhes', receita)}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
