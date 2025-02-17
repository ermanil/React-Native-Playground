import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import ButtonApp from "../components/Button";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
      <ButtonApp
        title="Rendering List"
        onPress={() => navigation.navigate("List")}
      />
      <ButtonApp title="Images" onPress={() => navigation.navigate("Image")} />
      <ButtonApp
        title="Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <ButtonApp title="Colors" onPress={() => navigation.navigate("Color")} />
      <ButtonApp
        title="Color Regulator"
        onPress={() => navigation.navigate("Square")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
