import { View, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = ({ title, imageSource }) => {
  return (
    <View style={styles.container}>
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "lightyellow",
  },
});

export default ImageScreen;
