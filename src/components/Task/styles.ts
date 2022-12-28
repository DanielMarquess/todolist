import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#333333",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8,
  },
  name: {
    marginHorizontal: 8,
    marginVertical: 12,
    flex: 2,
    fontSize: 14,
    height: 19.6,
    color: "#F2F2F2",
  },
  trashButton: {
    justifyContent: "center",
    width: 32,
    height: 32,
    color: "#808080",
  },
  checkBox: {
    marginLeft: 12,
  },
  lineThroughName: {
    marginHorizontal: 8,
    marginVertical: 12,
    flex: 2,
    fontSize: 14,
    height: 19.6,
    color: "#808080",
    textDecorationLine: "line-through",
  },
});
