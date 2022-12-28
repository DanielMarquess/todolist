import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import { useState } from "react";
import MyCheckbox from "../iconComponents/checkbox";

type Props = {
  name: string;
  onRemove: () => void;
  onTaskCheck: () => void;
};

export function Task({ name, onRemove, onTaskCheck }: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <MyCheckbox
        onChange={() => {
          setChecked(!checked);
          onTaskCheck();
        }}
        checked={checked}
        buttonStyle={styles.checkboxBase}
        activeButtonStyle={styles.checkboxChecked}
      />

      <Text style={checked ? styles.lineThroughName : styles.name}>{name}</Text>
      <TouchableOpacity style={styles.trashButton} onPress={onRemove}>
        <EvilIcons name="trash" size={24} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
