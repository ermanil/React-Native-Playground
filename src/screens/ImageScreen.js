import { View, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = ({ title, score, imageSource }) => {
  return (
    <View style={styles.container}>
      <ImageDetail
        title="Beach"
        score={0}
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="forest"
        score={0}
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="mountain"
        score={0}
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ImageScreen;
