import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Image, Vibration } from 'react-native';
import {MaterialIcons, FontAwesome, AntDesign} from "@expo/vector-icons";
import {IconButton,Icon} from "native-base";

const Accordion = ({ title, content, height }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    const toValue = expanded ? 0 : 1;
    Vibration.vibrate(100);
    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setExpanded(!expanded);
    });
  };

  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height], // set the height of the content here
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleContainer} onPress={handlePress}>

          <View style={styles.imageBackground}>
            {/* <Image source={require('../assets/img/social/verify.png')} style={{width: 15, height: 15}} /> */}
            <AntDesign name="star" size={16} color="#ffc107" />
          </View>
        
        <Text style={[styles.title]}>{title}</Text>
        <View style={styles.icon}>{expanded ? (<IconButton icon={<Icon as={MaterialIcons} name="keyboard-arrow-up" size="md" color="#fbcf9c" />} /> ) : (<IconButton icon={<Icon as={MaterialIcons} name="keyboard-arrow-down" size="md" color="#fbcf9c" />} /> )}</View>
      </TouchableOpacity>
      <Animated.View style={{ height: contentHeight, overflow: 'hidden' }}>
        <View style={styles.content}>{content}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginVertical: 8,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: '#2c2723',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    height: 40,
    backgroundColor: '#2e2a25'
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto_300Light',
    letterSpacing: 1,
    color: "#fbcf9c",
  },
  imageBackground: {

  },
  content: {
    padding: 3,
  },
});

export default Accordion;