import React from 'react';
import { View, StyleSheet } from 'react-native';
import MySectionList from './MySectionList';

const data = [
  {
    title: 'A',
    data: [
      { id: '1', name: 'Alice' },
      { id: '2', name: 'Adam' },
    ],
  },
  {
    title: 'B',
    data: [
      { id: '3', name: 'Bob' },
      { id: '4', name: 'Bill' },
    ],
  },
  {
    title: 'C',
    data: [
      { id: '5', name: 'Charlie' },
      { id: '6', name: 'Cameron' },
    ],
  },
];

const Utility = () => {
  return (
    <View style={styles.container}>
      <MySectionList data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});

export default Utility;
