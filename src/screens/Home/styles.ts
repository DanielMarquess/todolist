import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    paddingTop: 70,
  },
  textInput: {
    backgroundColor: "#262626",
    color: "#FFF",
    height: 54,
    borderRadius: 6,
    padding: 16,
    flex: 1,
    fontSize: 16,
  },

  addButton: {
    marginLeft: 6,
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 32,
  },
  resumeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 68,
  },
  createdAndCompletedText: {
    color: "#4EA8DE",
    marginRight: 8,
  },
  counterText: {
    color: "#fff",
  },
  createdAndCompletedContainer: {
    flexDirection: "row",
  },
  counterTextContainer: {
    flexDirection: "row",
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  listEmptyContainer: {
    width: 320,
    alignItems: "center",
    justifyContent: "center",
  },

  listEmptyText: {
    marginTop: 16,
    width: 287,
    fontWeight: "bold",
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
  },
  listEmptySubtext: {
    width: 287,
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
  },
});
