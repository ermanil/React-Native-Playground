import { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = (props) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Text>Courrent count: {state.count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CounterScreen;
