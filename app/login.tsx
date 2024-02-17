import { Button, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useAuth0 } from "react-native-auth0";
import { Redirect } from "expo-router";

export default function Login() {
  const LoginButton = () => {
    const { authorize, user } = useAuth0();

    const onPress = async () => {
      try {
        await authorize();
      } catch (e) {
        console.log(e);
      }
    };

    return <Button onPress={onPress} title="Log in" />;
  };

  const Profile = () => {
    const { user, error } = useAuth0();

    return (
      <>
        <Text>tesxt</Text>
        {user && <Text>Logged in as {user.name}</Text>}
        {!user && <Text>Not logged in</Text>}
        {error && <Text>{error.message}</Text>}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <LoginButton />
        <Profile />
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
