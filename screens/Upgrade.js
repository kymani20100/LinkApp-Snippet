import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, FlatList } from 'react-native';

const CIRCLE_RADIUS = 30;

const Upgrade = (props) => {
  
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogX, setDialogX] = useState(0);
  const [dialogY, setDialogY] = useState(0);
  const dialogScale = useRef(new Animated.Value(0)).current;

  const handleLongPress = (event) => {
    setDialogX(event.nativeEvent.pageX - CIRCLE_RADIUS);
    setDialogY(event.nativeEvent.pageY - CIRCLE_RADIUS);
    setDialogVisible(true);

    Animated.spring(dialogScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    setDialogVisible(false);
  };

  const handleOptionSelect = (option) => {
    console.log(option);
    setDialogVisible(false);
    Animated.spring(dialogScale, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    // add more items as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={handleClose}
      onLongPress={handleLongPress}
      activeOpacity={0.6}
    >
      <Text style={styles.itemText}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      {dialogVisible && (
        <Animated.View
          style={[
            styles.circleContainer,
            { left: dialogX, top: dialogY, transform: [{ scale: dialogScale }] },
          ]}
        >
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionSelect('Option 1')}
          >
            <Text style={styles.optionText}>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionSelect('Option 2')}
          >
            <Text style={styles.optionText}>Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionContainer}
            onPress={() => handleOptionSelect('Option 3')}
          >
            <Text style={styles.optionText}>Option 3</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#c0dfdb',
    borderWidth: 1,
  },
  itemText: {
    fontSize: 16,
  },
  circleContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    backgroundColor: 'white',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    backgroundColor: '#f5f5f5',
  },
  optionContainer: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
  },
});

export default Upgrade;