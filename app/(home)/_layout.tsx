import React from "react";
import { Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ModalLink from "@/components/header/ModalLink";

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
        name="current-workout"
        options={{
          title: "Current Workout",
          headerShown: true,
          href: {
            pathname: "/current-workout",
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
      <Tabs.Screen
        name="programs"
        options={{
          title: "Programs",
          headerTitle: "Programs",
          href: null,
        }}
      />
    </Tabs>
  );
}
