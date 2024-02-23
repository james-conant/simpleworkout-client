import React from "react";
import { Link, Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ModalLink = () => (
  <Link href="/modal">
    <Ionicons name="menu" size={35} />
  </Link>
);

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        headerRight: () => <ModalLink />,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          href: "/home",
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color}></Ionicons>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Current Workout",
          headerShown: true,
          href: {
            pathname: "/account",
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
