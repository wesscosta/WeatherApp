import React from 'react';
import { Image, Text, Button, ScrollView } from 'react-native';
import styles from "./style";

export default function DetalhesScreen({ route, navigation }) {
  const { titulo, categoria, descricao, ingredientes, preparo, imagem } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.imagem} source={imagem}/>
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.category}>{categoria}</Text>
      <Text style={styles.description}>{descricao}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <Text style={styles.text}>{ingredientes}</Text>
      <Text style={styles.subtitle}>Modo de Preparo:</Text>
      <Text style={styles.text}>{preparo}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

