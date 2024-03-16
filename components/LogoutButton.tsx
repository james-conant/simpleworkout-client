import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthProvider";
import { Link } from "expo-router";
import { Button } from "react-native";

const LogoutButton = () => {
  const { logout } = useAuth();

  const onPress = async () => {
    try {
      await logout();
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
