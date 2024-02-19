import { Link, Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ModalLink = () => (
  <Link href="/modal">
    <Ionicons name="menu" size={35} />
  </Link>
);
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerRight: () => <ModalLink />,
        }}
      />
      <Tabs.Screen
        name="current-workout"
        options={{
          headerTitle: "Current Workout",
          title: "Current Workout",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              size={size}
              color={color}
            />
          ),
          headerRight: () => <ModalLink />,
        }}
      />
      <Tabs.Screen
        name="(tabs2)"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
