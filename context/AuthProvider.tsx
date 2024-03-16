import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSegments, useRouter } from "expo-router";
import { useAuth0 } from "react-native-auth0";
import "core-js/stable/atob";
import { useFetchUser } from "./contextUtils";
import { User } from "@/types/types";

type AuthType = {
  user: User | null;
  login: () => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthType>({
  user: null,
  login: () => Promise.resolve(),
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(dbUser: User | null) {
  const segments = useSegments();
  const router = useRouter();
  const { user } = useAuth0();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      (!user && !inAuthGroup) ||
      !dbUser
    ) {
      // Redirect to the sign-in page.
      router.replace("/login");
    } else if (user && inAuthGroup) {
      router.replace("/home");
    }
  }, [user, dbUser, segments]);
}

export function AuthProvider({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  const { authorize, clearSession, user: auth0User } = useAuth0();
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    if (auth0User) {
      try {
        const result = await useFetchUser();
        setUser(result);
      } catch (error) {
        console.error("Can not fetch user:", error);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [auth0User]);

  const login = async () => {
    try {
      const getAuthorized = await authorize({
        audience: "https://simpleworkoutAPI",
      });
      const accessToken = getAuthorized?.accessToken ?? "";
      AsyncStorage.setItem("token", accessToken);
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  const logout = async () => {
    try {
      await clearSession();
      setUser(null);
      AsyncStorage.removeItem("token");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };
  useProtectedRoute(user);

  type AuthType = {
    user: User | null;
    login: () => Promise<void>;
    logout: () => void;
  };

  const authContext: AuthType = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
}
