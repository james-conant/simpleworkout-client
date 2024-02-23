import { createContext, useContext, useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

import { useSegments, useRouter } from "expo-router";
import Auth0, { useAuth0 } from "react-native-auth0";

type User = {
  name: string;
};

type AuthType = {
  user: User | null;
  token: string;
};

const AuthContext = createContext<AuthType>({
  user: null,
  token: "",
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(user: any) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/login");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/home");
    }
  }, [user, segments]);
}

export function AuthProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const { authorize, user } = useAuth0();
  const [token, setToken] = useState<string | null>(null);

  const auth0 = new Auth0({
    domain: "dev-sw6s7q1oda2gdtei.us.auth0.com",
    clientId: "jjILNCpn9XGBMGUUfnZl5ZO58zEoZ3ip",
  });

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: "openid profile email", // Add any additional scopes you need
      });
      // Save token to AsyncStorage
      AsyncStorage.setItem("token", credentials.accessToken);
      setToken(credentials.accessToken);
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const authorizeUser = async () => {
    gimmeToken();
  };

  useProtectedRoute(user);

  type AuthType = {
    user: User | null;
    token: string;
    authorizeUser: () => void;
  };

  const authContext: AuthType = {
    user: {
      name: user?.name || "",
    },
    token: "",
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}
