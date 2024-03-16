import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthProvider";
import { Auth0Provider } from "react-native-auth0";
import ModalLink from "@/components/header/ModalLink";

export default function RootLayout() {
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
