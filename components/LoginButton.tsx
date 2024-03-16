import { useAuth } from "@/context/AuthProvider";
import { Button } from "react-native";

const LoginButton = () => {
  const { login } = useAuth();

  const onPress = async () => {
    try {
      await login();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />;
};
export default LoginButton;
