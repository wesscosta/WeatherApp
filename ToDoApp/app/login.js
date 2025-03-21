import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

export default Login = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setUser("");
    setPassword("");
    setLogado(false);
  };

  if (logado) {
    return <Home user={user} onLogout={handleLogout} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <Text style={styles.label}>Usuário:</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuario"
        value={user}
        onChangeText={setUser}
      />

      <Text style={styles.label}>Senha:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
      />

      <Button
        title="Entrar"
        onPress={() => router.push("/home")}
        disabled={!user || !password}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    margin: "auto",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
});
