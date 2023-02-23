import React, { useRef } from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DATA = [
  {
    title: 'A',
    data: ['Apple', 'Apricot', 'Avocado'],
  },
  {
    title: 'B',
    data: ['Banana', 'Blueberry'],
  },
  {
    title: 'C',
    data: ['Cherry', 'Coconut'],
  },
  {
    title: 'D',
    data: ['Date'],
  },
];

const Merged = () => {
  const sectionListRef = useRef(null);

  const onAlphabetSelect = (sectionId) => {
    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex: 0,
        itemIndex: 0,
        viewOffset: 30,
        viewPosition: 0.5,
        animated: false,
      });
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };

  const renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        ref={sectionListRef}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        stickySectionHeadersEnabled={true}
      />
      <View style={styles.alphabetListContainer}>
        {DATA.map((section) => (
          <TouchableOpacity key={section.title} onPress={() => onAlphabetSelect(section.title)}>
            <Text style={styles.alphabetListText}>{section.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  sectionHeader: {
    backgroundColor: '#eee',
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  alphabetListContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alphabetListText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
});

export default Merged;
