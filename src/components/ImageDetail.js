import { View, StyleSheet, Text, Image } from "react-native";

function ImageDetail({ title, score, imageSource }) {
  return (
    <View style={styles.container}>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ImageDetail;
