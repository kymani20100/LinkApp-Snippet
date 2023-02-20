import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import SegmentList from './SegmentList';

const DATA = [
  {
    title: 'Section 1',
    data: [{ key: '1', name: 'Item 1' }, { key: '2', name: 'Item 2' }],
  },
  {
    title: 'Section 2',
    data: [{ key: '3', name: 'Item 3' }, { key: '4', name: 'Item 4' }],
  },
];

const Segment = () => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const renderItem = ({ item }) => {
    return <SegmentList item={item} onClose={() => setDialogVisible(false)} />;
  };

  const renderSectionHeader = ({ section }) => {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  };

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 10,
  },
});

export default Segment;
