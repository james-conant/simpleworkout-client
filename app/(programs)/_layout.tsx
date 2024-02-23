import React from "react";
import { Link, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const ProgramsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="programs"
        options={{
          tabBarLabel: "Programs",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="page1"
        options={{
          tabBarLabel: "Page 1",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default ProgramsLayout;
