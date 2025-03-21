import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Index" }} />
      <Tabs.Screen name="home" options={{ title: "Minhas Tarefas" }} />
      <Tabs.Screen name="add-task" options={{ title: "Nova Tarefa" }} />
    </Tabs>
  );
}
