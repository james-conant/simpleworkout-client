import { View, Text, Button } from "react-native";
import { Link } from "expo-router";
import { Program } from "@/types/types";
import useFetchData from "@/hooks/useFetchData";
import { useAuth } from "@/context/AuthProvider";

export default function Home() {
  const { user } = useAuth();
  const currentProgram: Program = useFetchData("/programs/current");
  console.log("currentProgram", currentProgram);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome {user?.name}</Text>

      <Link href="/">
        <Button title="Go to current workout" />
      </Link>
      <Link href="/">
        <Button title="Go to current week" />
      </Link>
      <Link href={`./programs/${currentProgram?.id}`} asChild>
        <Button title="Go to current program" />
      </Link>
      <Link href="./programs" asChild>
        <Button title="Go to all programs" />
      </Link>
    </View>
  );
}
