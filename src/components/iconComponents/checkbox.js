import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MyCheckbox({
  onChange,
  checked,
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
  activeIconProps = {},
  inactiveIconProps = {},
}) {
  const iconProps = checked ? activeIconProps : inactiveIconProps;
  return (
    <Pressable
      style={[buttonStyle, checked ? activeButtonStyle : inactiveButtonStyle]}
      onPress={() => onChange(!checked)}
    >
      {checked && (
        <Ionicons
          name="checkmark-sharp"
          size={20}
          color="white"
          {...iconProps}
        />
      )}
    </Pressable>
  );
}
