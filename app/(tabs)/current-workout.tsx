import { Text, View } from "@/components/Themed";
import { useAuth0 } from "react-native-auth0";
import Loading from "@/components/Loading";

export default function CurrentWorkout() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> IM IN</Text>
    </View>
  );
}
