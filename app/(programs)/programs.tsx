import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "@/context/AuthProvider";
import { useAuth0 } from "react-native-auth0";

const Programs = () => {
  const { user } = useAuth();
  const { getCredentials } = useAuth0();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Programs</Text>
      <Text>Programs</Text>
      <Text>Programs</Text>
      <Text>Programs</Text>
      <Text>Programs</Text>
      <Text>Programs</Text>
      <Text>Programs</Text>
      <Text>Programs</Text>
      <Text>Programs</Text>
      <Button
        title="Press Me"
        onPress={() => {
          console.log(getCredentials());
        }}
      />
    </View>
  );
};

export default Programs;
