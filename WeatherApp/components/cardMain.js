import { StyleSheet, Text, Image, View } from 'react-native';

export default function CardMain() {
  return (
    <View style={styles.container}>
      <Text>Teresina</Text>
      <Text>38ºC</Text>
      <Image  style={styles.icon} source={{uri:'https://openweathermap.org/img/wn/10d@2x.png'}}/>
      <Text>vento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
display:'flex',
alignItems:'center',
textAlign:'center'
  },
  icon: {
    width:100,
    height:100,
    
  }
});
