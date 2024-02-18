import { Button, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { useAuth0 } from "react-native-auth0";
import { useRouter, useFocusEffect } from "expo-router";
import LoginButton from "@/components/LoginButton";

export default function Login() {
  const { user } = useAuth0();
  const router = useRouter();

  useFocusEffect(() => {
    if (user) {
      router.replace("/(tabs)");
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <LoginButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  row: {
    alignSelf: "stretch",
    padding: 10,
  },
});
