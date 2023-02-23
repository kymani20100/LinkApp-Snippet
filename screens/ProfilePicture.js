import React, { useState, useRef } from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const ProfilePicture = () => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollViewRef = useRef(null);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: true }
  );

  const profileSize = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [80, 40],
    extrapolate: 'clamp',
  });

  const enlargeProfile = lastScrollY > scrollY;

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    setLastScrollY(scrollPosition);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        onScroll={onScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
        onMomentumScrollEnd={(event) => handleScroll(event)}
        onScrollEndDrag={(event) => handleScroll(event)}
      >
        <Animated.Image
          source={require("../assets/add-user.png")}
          style={[
            styles.profilePicture,
            { width: profileSize, height: profileSize },
            enlargeProfile && styles.enlargeProfile,
          ]}
        />
        {/* Rest of the content */}
        <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  superficial suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  superficial suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  superficial suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  superficial suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  profilePicture: {
    borderRadius: 40,
    margin: 20,
  },
  enlargeProfile: {
    width: 80,
    height: 80,
  },
});

export default ProfilePicture;