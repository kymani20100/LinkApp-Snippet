import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DATA = [
  { name: "Amy" },
  { name: "Bob" },
  { name: "Charlie" },
  { name: "David" },
  { name: "Edward" },
  { name: "Frank" },
  { name: "George" },
  { name: "Harry" },
  { name: "Ivy" },
  { name: "Jack" },
  { name: "Kenny" },
  { name: "Larry" },
  { name: "Micky" },
  { name: "Nancy" },
  { name: "Oscar" },
  { name: "Peter" },
  { name: "Queen" },
  { name: "Rose" },
  { name: "Sarah" },
  { name: "Tommy" },
  { name: "Umbrella" },
  { name: "Victor" },
  { name: "William" },
  { name: "Xander" },
  { name: "Yvonne" },
  { name: "Zack" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionHeader: {
    backgroundColor: "#f2f2f2",
    padding: 8,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  alphabetList: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
  },
  alphabet: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 18,
  },
  selectedAlphabet: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default function Jackpot() {
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);
  const sectionListRef = useRef(null);

  const handleAlphabetClick = (index) => {
    setSelectedAlphabet(DATA[index].name[0]);
    sectionListRef.current.scrollToLocation({
      animated: true,
      itemIndex: 0,
      sectionIndex: index,
    });
  };

  const sections = DATA.reduce((acc, curr) => {
    const title = curr.name[0];
    const index = acc.findIndex((section) => section.title === title);
    if (index === -1) {
      return [...acc, { title, data: [curr] }];
    }
    acc[index].data.push(curr);
    return acc;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={{ padding: 10,}}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          )}
          ref={sectionListRef}
        />
        <View style={styles.alphabetList}>
          {sections.map((section, index) => (
            <TouchableOpacity
              key={section.title}
              onPress={() => handleAlphabetClick(index)}
            >
              <Text
                style={
                  selectedAlphabet === section.title
                    ? styles.selectedAlphabet
                    : styles.alphabet
                }
              >
                {section.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
