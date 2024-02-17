import { StyleSheet } from "react-native";

const page = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  row: {
    alignSelf: "stretch",
    padding: 10,
  },
});

export { page };
