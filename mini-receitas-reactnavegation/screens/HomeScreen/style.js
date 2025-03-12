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
      paddingTop: 50,
      width: "100%",
      marginBottom: 10,

    },
    logo:{width:100, height:100},
    title: {
      fontSize: 40,
      fontWeight: "bold",
      marginBottom: 30,
      color: "#fff",
    },
    button: {
      padding: 15,
      width: 300,
      height: 50,
      alignItems: "center",
      borderRadius: 15,
      backgroundColor: "#FF6347",
      marginTop: 20, // Ajustado para um valor mais razoável
      marginBottom:400,
    },
    buttonText: {
      color: "#fff", // Para garantir que o texto seja legível
      fontSize: 18,
      fontWeight: "bold",
    },
  });  
