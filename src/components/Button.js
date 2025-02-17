import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
    height: 100,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 10,
  },
});

export default Button;
