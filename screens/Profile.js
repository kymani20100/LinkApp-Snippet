import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const PROFILE_PICTURE_MAX_HEIGHT = SCREEN_WIDTH * 0.8;

const Profile = () => {
  const scrollOffsetY = useSharedValue(0);
  const sheetTranslateY = useSharedValue(0);
  const sheetHeight = useSharedValue(0);
  const [sheetVisible, setSheetVisible] = useState(false);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffsetY.value = event.contentOffset.y;
    },
  });

  const handleSheetDrag = (event) => {
    sheetTranslateY.value = event.translationY;
  };

  const handleSheetStateChange = (event) => {
    if (event.nativeEvent.oldState === 4) {
      const dragToss = 0.1;
      const endOffsetY =
        event.nativeEvent.translationY + dragToss * event.nativeEvent.velocityY;

      sheetTranslateY.value = withSpring(endOffsetY, {
        overshootClamping: true,
        restDisplacementThreshold: 10,
        restSpeedThreshold: 10,
      });
    }
  };

  const profilePictureStyle = useAnimatedStyle(() => {
    const shrinkRatio =
      PROFILE_PICTURE_MAX_HEIGHT / SCREEN_WIDTH - scrollOffsetY.value / 300;
    const translateY = scrollOffsetY.value / 2;
    const scale = shrinkRatio >= 0.5 ? shrinkRatio : 0.5;
    return {
      transform: [{ translateY }, { scale }],
    };
  });

  const sheetContainerStyle = useAnimatedStyle(() => {
    sheetHeight.value = SCREEN_WIDTH * 0.9 + sheetTranslateY.value;
    return {
      transform: [{ translateY: sheetTranslateY.value }],
      height: sheetHeight.value,
    };
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingTop: PROFILE_PICTURE_MAX_HEIGHT }}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.content}>
          <Text style={styles.heading}>John Doe</Text>
          <Text style={styles.subheading}>Software Developer</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            justo vel felis bibendum hendrerit. Proin gravida posuere ultrices
            ex, id faucibus odio tincidunt in. Sed sit amet tellus a ligula
            malesuada efficitur eu eu turpis. Nam id sollicitudin mi. Morbi
            varius risus nibh, in tempor lectus tempor et. Donec eu odio vel
            ipsum pharetra pellentesque. Integer posuere justo felis, in gravida
            lorem varius vel.
          </Text>
        </View>
      </ScrollView>
      <View style={styles.profilePictureContainer}>
        <Animated.Image
          style={[styles.profilePicture, profilePictureStyle]}
          source={{ uri: "https://picsum.photos/200" }}
        />
      </View>
      {sheetVisible && (
        <PanGestureHandler
          onGestureEvent={handleSheetDrag}
          onHandlerStateChange={handleSheetStateChange}
        >
          <Animated.View style={[styles.sheetContainer, sheetContainerStyle]}>
            <View style={styles.sheetHandle} />
            <View style={styles.sheetContent}>
              <Text style={styles.sheetHeading}>Details</Text>
              <Text style={styles.sheetDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                at justo vel felis bibendum hendrerit. Proin gravida posuere
                ultrices ex, id faucibus odio tincidunt in. Sed sit amet tellus
                a ligula malesuada efficitur eu eu turpis. Nam id sollicitudin
                mi. Morbi varius risus nibh, in tempor lectus tempor et. Donec
                eu odio vel ipsum pharetra pellentesque. Integer posuere justo
                felis, in gravida lorem varius vel.
              </Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      )}
      <View style={styles.sheetButtonContainer}>
        <Text
          style={styles.sheetButton}
          onPress={() => setSheetVisible(!sheetVisible)}
        >
          {sheetVisible ? "Hide Details" : "Show Details"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subheading: {
    fontSize: 18,
    color: "gray",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "black",
  },
  profilePictureContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  profilePicture: {
    width: SCREEN_WIDTH,
    height: PROFILE_PICTURE_MAX_HEIGHT,
    resizeMode: "cover",
    borderRadius: SCREEN_WIDTH,
  },
  sheetContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
  },
  sheetHandle: {
    alignSelf: "center",
    width: 40,
    height: 5,
    backgroundColor: "lightgray",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
  },
  sheetContent: {
    paddingBottom: 20,
  },
  sheetHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sheetDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "black",
  },
  sheetButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F5FCFF",
    padding: 20,
  },
  sheetButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
});

export default Profile;
