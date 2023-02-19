import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * 0.3;

const Shrinking = () => {
    
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const { y } = event.nativeEvent.contentOffset;
    setScrollPosition(y);
  };

  const calculateImageHeight = () => {
    const IMAGE_STEP = IMAGE_HEIGHT / 4;
    const MAX_SHRINK = IMAGE_HEIGHT / 2;

    if (scrollPosition <= 0) {
      return IMAGE_HEIGHT;
    } else if (scrollPosition <= IMAGE_STEP) {
      return IMAGE_HEIGHT - (scrollPosition / IMAGE_STEP) * MAX_SHRINK;
    } else if (scrollPosition <= 2 * IMAGE_STEP) {
      return (
        IMAGE_HEIGHT -
        MAX_SHRINK +
        ((scrollPosition - IMAGE_STEP) / IMAGE_STEP) * (MAX_SHRINK / 2)
      );
    } else if (scrollPosition <= 3 * IMAGE_STEP) {
      return (
        IMAGE_HEIGHT -
        MAX_SHRINK / 2 +
        ((scrollPosition - 2 * IMAGE_STEP) / IMAGE_STEP) * (MAX_SHRINK / 4)
      );
    } else {
      return (
        IMAGE_HEIGHT -
        MAX_SHRINK / 4 +
        ((scrollPosition - 3 * IMAGE_STEP) / IMAGE_STEP) * (MAX_SHRINK / 4)
      );
    }
  };

  return (
    <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://placekitten.com/200/300" }}
          style={[styles.image, { height: calculateImageHeight() }]}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.bio}>
            I am a software engineer with experience in React Native
            development.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
  },
  profileDetails: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  bio: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default Shrinking;
