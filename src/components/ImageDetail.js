import { View, StyleSheet, Text, Image } from "react-native";

function ImageDetail({ title, imageSource }) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 5,
  },
});

export default ImageDetail;
