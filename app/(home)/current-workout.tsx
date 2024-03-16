import { useAuth } from "@/context/AuthProvider";
import { View, Text } from "react-native";

export default function CurrentWorkout() {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Current Workout</Text>
      <Text>{user && user.name}</Text>
    </View>
  );
}
