import {View, StyleSheet} from 'react-native'
import Login from './login'


export default App =()=>{
  return(
  <View style={styles.container}>
    <Login/>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f0f0f0"
  },
})
