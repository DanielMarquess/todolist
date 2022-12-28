import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useState } from "react";

type Props = {
  name: string;
  onRemove: () => void;
  onTaskCheck: () => void;
};

export function Task({ name, onRemove, onTaskCheck }: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Checkbox
        color={checked ? "#5E60CE" : "#4EA8DE"}
        style={styles.checkBox}
        value={checked}
        onValueChange={(e) => {
          onTaskCheck();
          setChecked(e);
        }}
      />
      <Text style={checked ? styles.lineThroughName : styles.name}>{name}</Text>
      <TouchableOpacity style={styles.trashButton} onPress={onRemove}>
        <EvilIcons name="trash" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
