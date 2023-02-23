import React, { useRef } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const data = [
  { title: 'A', data: ['Apple', 'Ape', 'Artichoke'] },
  { title: 'B', data: ['Banana', 'Beetroot'] },
  { title: 'C', data: ['Carrot'] },
  { title: 'D', data: ['Date'] },
  { title: 'E', data: ['Eggplant'] },
  { title: 'F', data: ['Fig'] },
  { title: 'G', data: ['Grape', 'Guava'] },
  { title: 'H', data: ['Honeydew'] },
  { title: 'I', data: ['Ice cream'] },
  { title: 'J', data: ['Jicama'] },
  { title: 'K', data: ['Kiwi'] },
  { title: 'L', data: ['Lemon'] },
  { title: 'M', data: ['Mango'] },
  { title: 'N', data: ['Nectarine'] },
  { title: 'O', data: ['Orange'] },
  { title: 'P', data: ['Papaya', 'Pear', 'Pineapple'] },
  { title: 'Q', data: ['Quince'] },
  { title: 'R', data: ['Raspberry'] },
  { title: 'S', data: ['Strawberry'] },
  { title: 'T', data: ['Tangerine'] },
  { title: 'U', data: ['Ugli fruit'] },
  { title: 'V', data: ['Vanilla bean'] },
  { title: 'W', data: ['Watermelon'] },
  { title: 'X', data: ['Xigua'] },
  { title: 'Y', data: ['Yellow apple'] },
  { title: 'Z', data: ['Zucchini'] },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderSectionHeader = ({ section: { title } }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const scrollToIndex = (index) => {
  sectionListRef.current.scrollToLocation({
    sectionIndex: index,
    itemIndex: 0,
  });
};

const scrollToListItem = (letter) => {
  const index = data.findIndex((section) => section.title === letter);
  scrollToIndex(index);
};

const Final = () => {
  const sectionListRef = useRef(null);

  return (
    <View style={styles.container}>
      <SectionList
        ref={sectionListRef}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={renderSectionHeader}
      />
      <View style={styles.letters}>
        {data.map((section, index) => (
          <Text key={section.title} onPress={() => scrollToIndex(index)}>
            {section.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  headerText: {
    fontSize: 22,
    color: 'white',
    },
    title: {
    fontSize: 18,
    },
    letters: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
    top: 0,
    bottom: 0,
    paddingRight: 10,
    },
    letter: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 3,
    },
    });
    
    export default Final;