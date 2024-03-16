import React from "react";
import { Stack } from "expo-router";
import ModalLink from "@/components/header/ModalLink";

const ProgramsLayout = () => (
  <Stack>
    <Stack.Screen
      name="create"
      options={{
        title: "Create a Program",
        headerRight: () => <ModalLink />,
      }}
    />
    <Stack.Screen
      name="index"
      options={{
        title: "Programs",
        headerRight: () => <ModalLink />,
      }}
    />
  </Stack>
);
export default ProgramsLayout;
