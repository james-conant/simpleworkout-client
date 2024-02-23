import { View, Text, Button } from "react-native";
import { useAuth } from "../../context/AuthProvider";
import { Link, useRouter } from "expo-router";

export default function Home() {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome {user && user.name}</Text>

      <Link href="/(programs)/programs" asChild>
        <Button title="Go to all programs" />
      </Link>
      <Link href="/">
        <Button title="Go to current week" />
      </Link>
      <Link href="/">
        <Button title="Go to current workout" />
      </Link>
    </View>
  );
}
