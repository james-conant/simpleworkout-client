import { Button, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
// import { useAuth0 } from "react-native-auth0";

export default function HomePage() {
//   const LoginButton = () => {
//     const { authorize } = useAuth0();

//     const onPress = async () => {
//       try {
//         await authorize();
//       } catch (e) {
//         console.log(e);
//       }
//     };

//     return <Button onPress={onPress} title="Log in" />;
//   };

//   const LogoutButton = () => {
//     const { clearSession } = useAuth0();

//     const onPress = async () => {
//       try {
//         await clearSession();
//       } catch (e) {
//         console.log(e);
//       }
//     };

//     return <Button onPress={onPress} title="Log out" />;
//   };

  // const Profile = () => {
  //   const { user, error } = useAuth0();

  //   return (
  //     <>
  //       {user && <Text>Logged in as {user.name}</Text>}
  //       {!user && <Text>Not logged in</Text>}
  //       {error && <Text>{error.message}</Text>}
  //     </>
  //   );
  // };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* <Link href={`/plans/`}>
          <Text>Go To All Workout Plans</Text>
        </Link> */}
        {/* <LoginButton />
        <LogoutButton />
        <Profile /> */}
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
