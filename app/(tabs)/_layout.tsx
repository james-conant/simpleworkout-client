import { Tabs, Redirect } from "expo-router";

import { Button, Text } from "react-native";
import { useAuth0 } from "react-native-auth0";
import Login from "../login";

const TabsLayout = () => {
  const { user, isLoading, authorize, clearSession } = useAuth0();

  const LogoutButton = () => {
    const onPress = async () => {
      try {
        await clearSession();
      } catch (e) {
        console.log(e);
      }
    };

    return <Button onPress={onPress} title="Log out" />;
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  console.log(isLoading);

  // can probably go to higher layout
  // need to double refresh 
  return user ? (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",

          headerRight: () => <LogoutButton />,
        }}
      />
    </Tabs>
  ) : (
    <Login />
  );
};

export default TabsLayout;
