import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  SectionList,
  TouchableOpacity,
} from "react-native";

const data = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
  { name: "David" },
  { name: "Eve" },
  { name: "Frank" },
  { name: "Gina" },
  { name: "Hank" },
  { name: "Isaac" },
  { name: "Julia" },
  { name: "Kirk" },
  { name: "Linda" },
  { name: "Mike" },
  { name: "Nina" },
  { name: "Oscar" },
  { name: "Paula" },
  { name: "Quinn" },
  { name: "Rachel" },
  { name: "Steve" },
  { name: "Tina" },
  { name: "Uma" },
  { name: "Victor" },
  { name: "Wendy" },
  { name: "Xavier" },
  { name: "Yvonne" },
  { name: "Zane" },
];

data.sort((a, b) => a.name.localeCompare(b.name));

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("A".charCodeAt(0) + i)
);

const styles = StyleSheet.create({
  alphabet: {
    padding: 5,
    fontSize: 14,
    color: "#999",
  },
  selectedAlphabet: {
    padding: 5,
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  sectionHeader: {
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default function Section() {
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);
  const sectionListRef = useRef(null);

  useEffect(() => {
    if (selectedAlphabet) {
      const index = alphabet.indexOf(selectedAlphabet);
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: index,
        itemIndex: 0,
      });
    }
  }, [selectedAlphabet]);

  const filteredData = data.filter(
    (item) => item.name.charAt(0).toUpperCase() === selectedAlphabet
  );

  const sections = filteredData.reduce((acc, item) => {
    const initial = item.name.charAt(0).toUpperCase();
    const index = acc.findIndex((section) => section.title === initial);
    if (index === -1) {
      acc.push({ title: initial, data: [item] });
    } else {
      acc[index].data.push(item);
    }
    return acc;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <FlatList
          data={alphabet}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedAlphabet(item)}>
              <Text
                style={
                  selectedAlphabet === item
                    ? styles.selectedAlphabet
                    : styles.alphabet
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          style={{ backgroundColor: "#f2f2f2" }}
          contentContainerStyle={{ justifyContent: "center" }}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        />
        <SectionList
          ref={sectionListRef}
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
