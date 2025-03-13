import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
  },
  header: {
    alignItems: "center",
    paddingTop: 25,
    width: "100%",
    marginBottom: 10,
    flex: 0.15,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  button: {
    width: 280,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#FF6347",
    overflow: "hidden",
    elevation: 4,
  },
  buttonText: {
    color: "#fff", // Para garantir que o texto seja legível
    fontSize: 20,
    fontWeight: "bold",
  },
  h3:{
    fontSize:22,
    fontWeight:'bold',
    paddingLeft:10,
    paddingBottom:5,
    color:'#1a1a1a',
  },

  main: { 
    flex: 0.8 
  },
  footer: {
    flex: 0.1,
    flexDirection:'row',
    marginBottom:10,
  },
});
