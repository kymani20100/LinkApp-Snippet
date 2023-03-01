import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Item = () => {
  return (
    <View>
      <Text>Item</Text>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({})

import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { DATA } from './data';
import { addItemToCart, removeItemFromCart, clearCart } from './actions';

const Item = ({ item, onPress, onLongPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} onLongPress={onLongPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const dispatch = useDispatch();
  const selectedIds = useSelector((state) => state.selectedIds);

  const handlePress = (id) => {
    if (selectedIds.includes(id)) {
      dispatch(removeItemFromCart(id));
    } else {
      dispatch(addItemToCart(id));
    }
  };

  const handleLongPress = (id) => {
    if (selectedIds.includes(id)) {
      dispatch(removeItemFromCart(id));
    } else {
      dispatch(addItemToCart(id));
    }
  };

  const handleClearSelected = () => {
    dispatch(clearCart());
  };

  const renderItem = ({ item }) => {
    const backgroundColor = selectedIds.includes(item.id) ? '#6e3b6e' : '#f9c2ff';
    const textColor = selectedIds.includes(item.id) ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => handlePress(item.id)}
        onLongPress={() => handleLongPress(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color: textColor }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleClearSelected} style={styles.button}>
          <Text style={styles.buttonText}>Clear Selected</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectItem, clearSelectedItems } from './redux/actions';

const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

const App = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const selectedIds = useSelector(state => state.selectedIds);
  const dispatch = useDispatch();

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleLongPress = id => {
    if (!isEditMode) {
      toggleEditMode();
    }
    dispatch(selectItem(id));
  };

  const handlePress = id => {
    if (isEditMode) {
      dispatch(selectItem(id));
    } else {
      // Navigate to item details screen
    }
  };

  const handleClearSelectedItems = () => {
    dispatch(clearSelectedItems());
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleEditMode}>
          <Text style={styles.headerText}>{isEditMode ? 'Done' : 'Edit'}</Text>
        </TouchableOpacity>
        {isEditMode && (
          <TouchableOpacity onPress={handleClearSelectedItems}>
            <Text style={styles.headerText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const backgroundColor = selectedIds.includes(item.id) ? 'blue' : 'white';
    const textColor = selectedIds.includes(item.id) ? 'white' : 'black';
    return (
      <TouchableOpacity
        style={[styles.item, { backgroundColor }]}
        onLongPress={() => handleLongPress(item.id)}
        onPress={() => handlePress(item.id)}
      >
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
  },
});

export default App;
