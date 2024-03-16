import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useFetchData from "@/hooks/useFetchData";
import { Program } from "@/types/types";
import { Link } from "expo-router";

const Programs = () => {
  const programs: Program[] = useFetchData("/programs");

  const currentPath = "./programs";

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Link href={`${currentPath}/create`} asChild>
        <Button title="Create a new program" />
      </Link>
      {programs?.map((program: Program) => {
        return (
          <Link key={program.id} href={`${currentPath}/${program.name}`} asChild>
            <Text style={styles.name}>{program.name}</Text>
          </Link>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  name: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 16,
    padding: 8,
  },
  button: {
    width: "100%",
  },
});
export default Programs;
