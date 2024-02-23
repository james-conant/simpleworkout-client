import { View, Text } from "react-native";
import { useAuth } from "../../context/AuthProvider";

export default function Accout() {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Account</Text>
      <Text>{user && user.name}</Text>
    </View>
  );
}
