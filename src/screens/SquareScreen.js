import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adjust RGB Colors</Text>

      <View style={styles.controlsContainer}>
        <ColorCounter
          onIncrease={() =>
            dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
          }
          onDecrease={() =>
            dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
          }
          color="Red"
        />
        <ColorCounter
          onIncrease={() =>
            dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
          }
          onDecrease={() =>
            dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
          }
          color="Blue"
        />
        <ColorCounter
          onIncrease={() =>
            dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
          }
          onDecrease={() =>
            dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
          }
          color="Green"
        />
      </View>

      <View
        style={[
          styles.colorPreview,
          { backgroundColor: `rgb(${red},${green},${blue})` },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  controlsContainer: {
    width: "100%",
    marginBottom: 30,
  },
  colorPreview: {
    width: 200,
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default SquareScreen;
