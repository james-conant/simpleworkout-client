import { Tabs } from "expo-router";
import LogoutButton from "@/components/LogoutButton";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          headerRight: () => <LogoutButton />,
        }}
      />
      <Tabs.Screen
        name="current-workout"
        options={{
          headerTitle: "Current Workout",
          title: "Current Workout",
          headerRight: () => <LogoutButton />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
