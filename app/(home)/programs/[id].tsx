import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

export default function Program() {
  const { id } = useLocalSearchParams();

  return <Text>Program id is: {id}</Text>;
}
