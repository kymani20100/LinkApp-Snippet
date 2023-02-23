import React, { useState, useRef } from "react";
import {
  SectionList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const data = [
  { title: "A", data: ["Apple", "Apricot", "Avocado"] },
  { title: "B", data: ["Banana", "Blackberry", "Blueberry"] },
  { title: "C", data: ["Cherry", "Coconut", "Cranberry"] },
  { title: "D", data: ["Date", "Dragonfruit", "Durian"] },
  { title: "E", data: ["Elderberry"] },
  { title: "F", data: ["Fig"] },
  { title: "G", data: ["Grape", "Guava"] },
  { title: "H", data: ["Honeydew", "Huckleberry"] },
  { title: "I", data: ["Indian Prune", "Indian Fig"] },
  { title: "J", data: ["Jackfruit", "Jambul", "Jujube"] },
  { title: "K", data: ["Kiwi", "Kumquat"] },
  { title: "L", data: ["Lemon", "Lime", "Lychee"] },
  { title: "M", data: ["Mango", "Melon"] },
  { title: "N", data: ["Nectarine"] },
  { title: "O", data: ["Orange"] },
  {
    title: "P",
    data: ["Papaya", "Peach", "Pear", "Pineapple", "Plum", "Pomegranate"],
  },
  { title: "Q", data: ["Quince"] },
  { title: "R", data: ["Raspberry"] },
  { title: "S", data: ["Strawberry"] },
  { title: "T", data: ["Tangerine"] },
  { title: "U", data: ["Ugli fruit"] },
  { title: "V", data: ["Vanilla Bean"] },
  { title: "W", data: ["Watermelon"] },
  { title: "X", data: ["Xigua"] },
  { title: "Y", data: ["Yellow Watermelon"] },
  { title: "Z", data: ["Zucchini"] },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{item}</Text>
  </View>
);

const renderSectionHeader = ({ section }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{section.title}</Text>
  </View>
);

const NewSection = () => {
  const [search, setSearch] = useState("");
  const sectionListRef = useRef();

  const filteredData = data
    .map((section) => ({
      ...section,
      data: section.data.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.data.length > 0);

  const scrollToListItem = (letter) => {
    const index = data.findIndex((section) => section.title === letter);
    sectionListRef.current.scrollToLocation({
      sectionIndex: index,
      itemIndex: 0,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.alphabetList}>
        {alphabet.map((letter) => (
          <TouchableOpacity
            key={letter}
            style={styles.alphabetItem}
            onPress={() => scrollToListItem(letter)}
          >
            <Text style={styles.alphabetText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <SectionList
        ref={sectionListRef}
        sections={filteredData}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  searchBar: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  alphabetList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 0,
    top: 100,
    bottom: 50,
    width: 20,
    backgroundColor: "transparent",
  },
  alphabetItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
  },
  alphabetText: {
    color: "#999",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#eee",
    padding: 10,
  },
  headerText: {
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#fff",
    padding: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default NewSection;
