import { Text, FlatList, StyleSheet } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 22 },
    { name: "David", age: 30 },
    { name: "Emma", age: 27 },
    { name: "Frank", age: 24 },
    { name: "Grace", age: 26 },
    { name: "Hannah", age: 29 },
    { name: "Ian", age: 23 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text style={styles.text}>
            {index + 1}. {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 5,
    padding: 7,
  },
});

export default ListScreen;
