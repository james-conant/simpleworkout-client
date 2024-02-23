import { Link, Stack } from "expo-router";
import { AuthProvider } from "../context/AuthProvider";
import { Ionicons } from "@expo/vector-icons";
import { Auth0Provider } from "react-native-auth0";

export default function RootLayout() {
  const ModalLink = () => (
    <Link href="/modal">
      <Ionicons name="menu" size={35} />
    </Link>
  );
  return (
    <Auth0Provider
      domain={"dev-sw6s7q1oda2gdtei.us.auth0.com"}
      clientId={"jjILNCpn9XGBMGUUfnZl5ZO58zEoZ3ip"}
    >
      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="(home)"
            options={{
              headerShown: false,
              title: "Home",
              headerRight: () => <ModalLink />,
            }}
          />
          <Stack.Screen
            name="(programs)"
            options={{
              title: "Programs",
              headerRight: () => <ModalLink />,
            }}
          />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
            }}
          />
        </Stack>
      </AuthProvider>
    </Auth0Provider>
  );
}
