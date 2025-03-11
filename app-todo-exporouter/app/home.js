import { useEffect, useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const loadTasks = async () => {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) setTasks(JSON.parse(savedTasks));
    };
    loadTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Adicionar Tarefa" onPress={() => router.push("/add-task")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  task: { fontSize: 18, padding: 10, borderBottomWidth: 1 },
});
