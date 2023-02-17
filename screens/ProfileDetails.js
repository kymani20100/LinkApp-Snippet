import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
  PanResponderGestureState,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const PROFILE_PICTURE_MAX_HEIGHT = SCREEN_HEIGHT * 0.4;
const PROFILE_PICTURE_MIN_HEIGHT = SCREEN_HEIGHT * 0.2;
const SHEET_MAX_HEIGHT = SCREEN_HEIGHT * 0.8;
const SHEET_MIN_HEIGHT = 100;

const ProfileDetails = () => {
  const [sheetVisible, setSheetVisible] = useState(false);
  const [profilePictureHeight, setProfilePictureHeight] = useState(
    PROFILE_PICTURE_MAX_HEIGHT
  );
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        const { dx, dy } = gestureState;
        return dx !== 0 && dy !== 0;
      },
      onPanResponderGrant: () => {
        // noop
      },
      onPanResponderMove: (_, gestureState) => {
        const { dy } = gestureState;
        if (profilePictureHeight - dy > PROFILE_PICTURE_MAX_HEIGHT) {
          setProfilePictureHeight(PROFILE_PICTURE_MAX_HEIGHT);
        } else if (profilePictureHeight - dy < PROFILE_PICTURE_MIN_HEIGHT) {
          setProfilePictureHeight(PROFILE_PICTURE_MIN_HEIGHT);
        } else {
          setProfilePictureHeight(profilePictureHeight - dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const { dy } = gestureState;
        if (dy > 50) {
          setSheetVisible(false);
          Animated.spring(sheetContainerStyle.height, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(sheetContainerStyle.height, {
            toValue: SHEET_MIN_HEIGHT,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;

  const profilePictureStyle = {
    height: profilePictureHeight,
  };

  const sheetContainerStyle = {
    height: useRef(new Animated.Value(0)).current,
  };

  const handleSheetDrag = Animated.event(
    [{ nativeEvent: { translationY: sheetContainerStyle.height } }],
    { useNativeDriver: true }
  );

  const handleSheetStateChange = (nativeEvent) => {
    if (nativeEvent.oldState === 4 && nativeEvent.translationY < -50) {
      setSheetVisible(false);
      Animated.spring(sheetContainerStyle.height, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else if (nativeEvent.oldState === 4 && nativeEvent.translationY > 50) {
      setSheetVisible(true);
      Animated.spring(sheetContainerStyle.height, {
        toValue: SHEET_MAX_HEIGHT,
        useNativeDriver: true,
      }).start();
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Profile Page</Text>
        <Text style={styles.subheading}>
          Scroll to Resize the Profile Picture
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
          justo vel felis bibendum hendrerit. Proin gravida posuere ultrices ex,
          id faucibus odio tincidunt in. Sed sit amet tellus a ligula malesuada
          efficitur eu in. Sed sit amet tellus a ligula malesuada efficitur eu
        </Text>
      </View>
      <View
        style={styles.profilePictureContainer}
        {...panResponder.panHandlers}
      >
        <Animated.Image
          style={[styles.profilePicture, profilePictureStyle]}
          source={{ uri: "https://picsum.photos/200" }}
        />
      </View>
      <Animated.View
        style={[
          styles.bottomSheetContainer,
          { height: sheetContainerStyle.height },
        ]}
        {...panResponder.panHandlers}
      >
        <Animated.View
          style={styles.sheetHandle}
          {...panResponder.panHandlers}
        />
        <View style={styles.sheetContent} {...panResponder.panHandlers}>
          <Text style={styles.sheetTitle}>User Details</Text>
          <Text style={styles.sheetDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
            justo vel felis bibendum hendrerit. Proin gravida posuere ultrices
            ex, id faucibus odio tincidunt in. Sed sit amet tellus a ligula
            malesuada efficitur eu in nulla. Aliquam vel diam nunc. Donec
            hendrerit lacus vel magna lacinia, et finibus nulla lacinia.
          </Text>
        </View>
        <Animated.View
          style={[
            styles.sheetButtonContainer,
            { bottom: sheetContainerStyle.height },
          ]}
        >
          <Text style={styles.sheetButton}>Save</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  profilePictureContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: PROFILE_PICTURE_MAX_HEIGHT,
    overflow: "hidden",
  },
  profilePicture: {
    width: "100%",
  },
  bottomSheetContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  sheetHandle: {
    height: 4,
    width: 40,
    borderRadius: 2,
    backgroundColor: "#ccc",
    alignSelf: "center",
    margin: 10,
  },
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sheetDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  sheetButtonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    paddingBottom: 20,
  },
  sheetButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    textAlign: "center",
  },
});

export default ProfileDetails;
