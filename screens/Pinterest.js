import React, { useRef, useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    { id: '164', title: 'Item 4' },
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

const TabBar = () => {
  const [showTabBar, setShowTabBar] = useState(true);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const y = event.nativeEvent.contentOffset.y;
    setShowTabBar(y <= 0 || y + event.nativeEvent.layoutMeasurement.height >= event.nativeEvent.contentSize.height);
  };

  const handleScrollToTop = () => {
    flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
  };

  return (
    <View style={[styles.tabBar, showTabBar ? null : styles.hide]}>
      <MaterialCommunityIcons name="home" size={24} color="black" />
      <MaterialCommunityIcons name="bell" size={24} color="black" />
      <MaterialCommunityIcons name="email" size={24} color="black" />
      <MaterialCommunityIcons name="magnify" size={24} color="black" />
      <MaterialCommunityIcons name="account" size={24} color="black" onPress={handleScrollToTop} />
    </View>
  );
};

const Pinterest = () => {
    const [showTabBar, setShowTabBar] = useState(true);
    const flatListRef = useRef(null);
  
    const handleScroll = (event) => {
      const offsetY = event.nativeEvent.contentOffset.y;
  
      if (offsetY > 0 && showTabBar) {
        setShowTabBar(false);
      } else if (offsetY <= 0 && !showTabBar) {
        setShowTabBar(true);
      }
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
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onScroll={handleScroll}
        />
        {showTabBar && <TabBar />}
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'white',
    elevation: 8,
  },
  hide: {
    transform: [{ translateY: 50 }],
    elevation: 0,
  },
});

export default Pinterest;
