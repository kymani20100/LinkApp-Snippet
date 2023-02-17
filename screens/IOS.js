import React from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const HEADER_EXPANDED_HEIGHT = 250;
const HEADER_COLLAPSED_HEIGHT = 100;

const IOS = ({ contact }) => {
  const navigation = useNavigation();
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Animated.View style={[styles.imageContainer, { opacity: imageOpacity }]}>
          <Svg height="100%" width="100%">
            <Circle cx="50%" cy="50%" r="50%" fill="white" />
          </Svg>
          <Image source={{ uri: "https://picsum.photos/200" }} style={styles.image} />
        </Animated.View>
      </Animated.View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Name</Text>
          <Text style={styles.sectionText}>Emmanuel Glimeti</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Phone</Text>
          <Text style={styles.sectionText}>+244 567 890</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Email</Text>
          <Text style={styles.sectionText}>Kymani@gmil.com</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address</Text>
          <Text style={styles.sectionText}>PO BOX 546, Accra - North</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#0B5BFE',
    paddingHorizontal: 16,
    paddingTop: 16,
    overflow: 'hidden',
  },
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
   
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    height: '60%',
    aspectRatio: 1,
    borderRadius: 75,
    marginBottom: 24,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#444444',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionText: {
    color: '#666666',
  },
});

export default IOS; 