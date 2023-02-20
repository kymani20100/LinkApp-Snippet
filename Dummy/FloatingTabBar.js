import React, { useState, useRef } from 'react';
import { StyleSheet, View, Animated, Easing, useWindowDimensions, FlatList, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SPRING_CONFIG = { tension: 50, friction: 8 };

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
  { id: '6', title: 'Item 6' },
  { id: '7', title: 'Item 7' },
  { id: '8', title: 'Item 8' },
  { id: '9', title: 'Item 9' },
  { id: '10', title: 'Item 10' },
  { id: '11', title: 'Item 11' },
  { id: '12', title: 'Item 12' },
  { id: '13', title: 'Item 1' },
  { id: '22', title: 'Item 2' },
  { id: '31', title: 'Item 3' },
  { id: '44', title: 'Item 4' },
  { id: '15', title: 'Item 5' },
  { id: '16', title: 'Item 6' },
  { id: '17', title: 'Item 7' },
  { id: '18', title: 'Item 8' },
  { id: '19', title: 'Item 9' },
  { id: '20', title: 'Item 10' },
  { id: '21', title: 'Item 11' },
  { id: '32', title: 'Item 12' },
  { id: '41', title: 'Item 1' },
  { id: '42', title: 'Item 2' },
  { id: '43', title: 'Item 3' },
  { id: '64', title: 'Item 4' },
  { id: '45', title: 'Item 5' },
  { id: '46', title: 'Item 6' },
  { id: '47', title: 'Item 7' },
  { id: '48', title: 'Item 8' },
  { id: '49', title: 'Item 9' },
  { id: '51', title: 'Item 1' },
  { id: '52', title: 'Item 2' },
  { id: '53', title: 'Item 3' },
  { id: '54', title: 'Item 4' },
  { id: '55', title: 'Item 5' },
  { id: '56', title: 'Item 6' },
  { id: '57', title: 'Item 7' },
  { id: '58', title: 'Item 8' },
  { id: '59', title: 'Item 9' },
  { id: '61', title: 'Item 1' },
  { id: '62', title: 'Item 2' },
  { id: '63', title: 'Item 3' },
  { id: '99', title: 'Item 4' },
  { id: '65', title: 'Item 5' },
  { id: '66', title: 'Item 6' },
  { id: '67', title: 'Item 7' },
  { id: '68', title: 'Item 8' },
  { id: '69', title: 'Item 9' },
  { id: '71', title: 'Item 1' },
  { id: '72', title: 'Item 2' },
  { id: '73', title: 'Item 3' },
  { id: '74', title: 'Item 4' },
  { id: '75', title: 'Item 5' },
  { id: '76', title: 'Item 6' },
  { id: '77', title: 'Item 7' },
  { id: '78', title: 'Item 8' },
  { id: '79', title: 'Item 9' },
  { id: '81', title: 'Item 1' },
  { id: '82', title: 'Item 2' },
  { id: '83', title: 'Item 3' },
  { id: '84', title: 'Item 4' },
  { id: '85', title: 'Item 5' },
  { id: '86', title: 'Item 6' },
  { id: '87', title: 'Item 7' },
  { id: '88', title: 'Item 8' },
  { id: '89', title: 'Item 9' },
];


const FloatingTabBar = () => {
  const { width } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(true);
  const translateY = useRef(new Animated.Value(0)).current;
  const prevOffsetY = useRef(0);

  const onScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const visible = offsetY < 200 || offsetY < prevOffsetY.current; // show the tab bar only when scrolling up a bit or when scrolling down
    if (visible !== isVisible) {
      setIsVisible(visible);
      Animated.spring(translateY, {
        toValue: visible ? 0 : 90,
        ...SPRING_CONFIG,
        useNativeDriver: true,
      }).start();
    }
    prevOffsetY.current = offsetY;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  const keyExtractor = (item) => item.id;

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onScroll={onScroll}
      />
      <Animated.View style={[styles.tabBar, { transform: [{ translateY }] }]}>
        <View style={styles.tabBackground}>
          <View style={styles.tabBarItem}>
              <MaterialCommunityIcons name="home" size={24} color="black" />
          </View>
          <View style={styles.tabBarItem}>
            <MaterialCommunityIcons name="bell" size={24} color="black" />
          </View>
          <View style={styles.tabBarItem}>
            <MaterialCommunityIcons name="account" size={24} color="black" />
          </View>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    height: 50,
    // width: '100%',
    // borderRadius: 35,
    // backgroundColor: 'white',
    // borderTopWidth: StyleSheet.hairlineWidth,
    // borderTopColor: '#ccc',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
    // justifyContent: 'space-around',
  },
  tabBackground: {
    width: '90%',
    height: 50,
    borderRadius: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: '#0085f7',
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FloatingTabBar;


