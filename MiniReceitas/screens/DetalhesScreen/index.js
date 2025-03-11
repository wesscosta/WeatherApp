import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  const { nome, ingredientes, preparo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <Text style={styles.text}>{ingredientes}</Text>
      <Text style={styles.subtitle}>Modo de Preparo:</Text>
      <Text style={styles.text}>{preparo}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
