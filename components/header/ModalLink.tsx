import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/AuthProvider";

export default function ModalLink() {
  const { user } = useAuth();
  return (
    <View>
      <Link href="/modal">
        <Image
          resizeMode="contain"
          borderRadius={50}
          style={styles.logo}
          source={{
            uri: user?.picture,
          }}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 40,
    height: 40,
  },
});

{
  /* <View>
<Link href="/modal">
  <Ionicons
    name="menu"
    size={35}
    image={() => (
      <Image
        style={styles.logo}
        source={{
          uri: user?.pictureUrl,
        }}
      />
    )}
  />
  <Image
    style={styles.logo}
    source={{
      uri: user?.pictureUrl,
    }}
  />
</Link>
</View> */
}
