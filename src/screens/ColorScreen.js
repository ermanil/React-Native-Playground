import { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = (props) => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={[styles.colorSquare, { backgroundColor: item }]} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  colorSquare: {
    height: 100,
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
  },
});

export default ColorScreen;
