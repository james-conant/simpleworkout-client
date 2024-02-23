import { useAuth } from "@/context/AuthProvider";
import { Button } from "react-native";

const LoginButton = () => {
  const {  } = useAuth();

  const onPress = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Log in" />;
};
export default LoginButton;
