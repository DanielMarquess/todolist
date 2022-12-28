import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from "react-native";
import Logo from "../../components/svgComponents/Logo";
import Clipboard from "../../components/svgComponents/Clipboard";
import { styles } from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Task } from "../../components/Task";

export default function Home() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<{ name: string; checked: boolean }[]>([]);
  const [completedTasks, setCompletedTasks] = useState<number>(0);

  function removeTask(taskName: String, checked: Boolean) {
    setTasks((prevData) => prevData.filter((task) => task.name !== taskName));
    if (checked) {
      setCompletedTasks((prevState) => prevState - 1);
    }
  }

  function handleTaskRemove(taskName: String, checked: Boolean) {
    Alert.alert("Remover", `Remover a tarefa ${taskName}?`, [
      {
        text: "Sim",
        onPress: () => removeTask(taskName, checked),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleTaskAdd() {
    if (tasks === undefined || tasks.length == 0) {
      setCompletedTasks(0);
      setTasks([{ name: taskName, checked: false }]);
      setTaskName("");
      return;
    }

    tasks.forEach((element) => {
      if (element.name == taskName) {
        return Alert.alert(
          "Tarefa existente",
          "Já existe uma tarefa com esse nome"
        );
      }
    });
    setTasks((prevData) => [...prevData, { name: taskName, checked: false }]);
    setTaskName("");
  }

  function handleTaskCheck(taskName: String) {
    tasks.forEach((element) => {
      if (element.name == taskName) {
        if (element.checked == true) {
          element.checked = false;
          setCompletedTasks((prevState) => prevState - 1);
        } else {
          element.checked = true;
          setCompletedTasks((prevState) => prevState + 1);
        }
      }
    });
  }

  function isChecked(task: boolean) {
    return task === true;
  }

  return (
    <View style={styles.container}>
      <Logo></Logo>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleTaskAdd}>
          <EvilIcons name="plus" size={24} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
      <View style={styles.resumeContainer}>
        <View style={styles.createdAndCompletedContainer}>
          <Text style={styles.createdAndCompletedText}>Criadas</Text>
          <View style={styles.counterTextContainer}>
            <Text style={styles.counterText}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.createdAndCompletedContainer}>
          <Text style={styles.createdAndCompletedText}>Concluídas</Text>
          <View style={styles.counterTextContainer}>
            <Text style={styles.counterText}>{completedTasks}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Task
            name={item.name}
            onRemove={() => handleTaskRemove(item.name, item.checked)}
            onTaskCheck={() => handleTaskCheck(item.name)}
          ></Task>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <Clipboard />
            <Text style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptySubtext}>
              Crie tarefas e organize suas atividades
            </Text>
          </View>
        )}
      />
    </View>
  );
}
