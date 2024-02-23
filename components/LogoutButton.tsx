import { useAuth0 } from "react-native-auth0";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthProvider";
import { Link } from "expo-router";
import { Button } from "react-native";

const LogoutButton = () => {
  const { clearSession } = useAuth0();

  const onPress = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Link href="/">
      <Button onPress={onPress} title="Log out" />
    </Link>
  );
};

export default LogoutButton;
