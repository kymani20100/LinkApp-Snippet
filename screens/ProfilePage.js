import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const ProfilePage = () => {
  const [scrollDirection, setScrollDirection] = useState('none');
  const [profilePictureSize, setProfilePictureSize] = useState(150);

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > 0 ? 'up' : 'down';

    if (direction !== scrollDirection) {
      setScrollDirection(direction);

      if (direction === 'up') {
        setProfilePictureSize(80);
      } else {
        setProfilePictureSize(180);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/add-user.png')}
            style={{ width: profilePictureSize, height: profilePictureSize }}
          />
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
          </Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
          </Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
          </Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
          </Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
          </Text>
          <Text style={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat lectus vitae enim suscipit, vel tempus velit tristique.
          </Text>
        </View>

        {/* Additional content goes here */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default ProfilePage;
