import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Logo from "../../components/svgComponents/Logo";
import { styles } from "./styles";
import { EvilIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Logo style={styles.todoLogo}></Logo>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          color="#FFF"
        />
        <TouchableOpacity style={styles.addButton}>
          <EvilIcons name="plus" size={24} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
      <View style={styles.resumeContainer}>
        <View style={styles.createdAndConcludedContainer}>
          <Text style={styles.createdAndConcludedText}>Criadas</Text>
          <View style={styles.counterTextContainer}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </View>
        <View style={styles.createdAndConcludedContainer}>
          <Text style={styles.createdAndConcludedText}>Concluídas</Text>
          <View style={styles.counterTextContainer}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
