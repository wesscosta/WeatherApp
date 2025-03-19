import { StyleSheet, TextInput, View } from 'react-native';

export default function InputHeader() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Digite o nome da cidade' placeholderTextColor={'#000'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor:'rgba(217,217,217,19)',
    width: 300,
    borderRadius:15,
    padding:10,
    fontSize:18,
  },
});
