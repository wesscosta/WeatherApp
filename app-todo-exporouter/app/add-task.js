import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function AddTask() {
  const [task, setTask] = useState("");
  const router = useRouter();

  const saveTask = async () => {
    const savedTasks = await AsyncStorage.getItem("tasks");
    const tasksArray = savedTasks ? JSON.parse(savedTasks) : [];
    tasksArray.push(task);
    await AsyncStorage.setItem("tasks", JSON.stringify(tasksArray));
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nova Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua tarefa"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Salvar" onPress={saveTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20, borderRadius: 5 },
});
