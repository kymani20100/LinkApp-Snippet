import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
  StyleSheet,
  Linking,
  Keyboard,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from "react-native";
import nicecolors from "nice-color-palettes";
const colors = [
  ...nicecolors[3].slice(1, nicecolors[1].length),
  ...nicecolors[55].slice(0, 3),
];
import { Avatar, Button, Card } from "react-native-paper";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import {
  ScrollView,
  Spacer,
  Center,
  Heading,
  HStack,
  VStack,
  Icon,
  Box,
  IconButton,
  FlatList, Divider
} from "native-base";

import { FloatingAction } from "react-native-floating-action";
import QRCode from "qrcode.react";

const DATA = [
  { id: "1", name: "Alice", phone: "111-111-1111" },
  { id: "2", name: "Bob", phone: "222-222-2222" },
  { id: "27", name: "Alice", phone: "111-111-1111" },
  { id: "28", name: "Ashley", phone: "111-111-1111" },
  { id: "3", name: "Charlie", phone: "333-333-3333" },
  { id: "4", name: "David", phone: "444-444-4444" },
  { id: "5", name: "Eva", phone: "555-555-5555" },
  { id: "6", name: "Frank", phone: "666-666-6666" },
  { id: "7", name: "George", phone: "777-777-7777" },
  { id: "8", name: "Harry", phone: "888-888-8888" },
  { id: "9", name: "Isabelle", phone: "999-999-9999" },
  { id: "10", name: "Jack", phone: "111-222-3333" },
  { id: "11", name: "Karen", phone: "444-555-6666" },
  { id: "12", name: "Liam", phone: "777-888-9999" },
  { id: "13", name: "Mike", phone: "111-444-7777" },
  { id: "14", name: "Nancy", phone: "222-555-8888" },
  { id: "15", name: "Oliver", phone: "333-666-9999" },
  { id: "16", name: "Paul", phone: "111-555-9999" },
  { id: "17", name: "Queenie", phone: "222-666-1111" },
  { id: "18", name: "Robert", phone: "333-777-2222" },
  { id: "19", name: "Sam", phone: "444-888-3333" },
  { id: "20", name: "Tina", phone: "555-999-4444" },
  { id: "21", name: "Uma", phone: "666-111-5555" },
  { id: "22", name: "Vera", phone: "777-222-6666" },
  { id: "23", name: "William", phone: "888-333-7777" },
  { id: "24", name: "Xavier", phone: "999-444-8888" },
  { id: "25", name: "Yara", phone: "111-666-1111" },
  { id: "26", name: "Zoe", phone: "222-777-2222" },
];

const ContactScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedAlphabet, setSelectedAlphabet] = useState(null);
  const [contactData, setContactData] = useState([]);
  const sectionListRef = useRef(null);
  const [keyboardShown, setKeyboardShown] = useState(false);

  const actions = [
    {
      text: "Add",
      icon: require("../assets/scan.png"),
      name: "Add",
      position: 1,
    },
    {
      text: "Send",
      icon: require("../assets/qr-code.png"),
      name: "Send",
      position: 2,
      onPress: {},
    },
  ];

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
    setSelectedAlphabet(null);
    sectionListRef.current.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      viewOffset: 0,
    });
  };

  const handlePhoneIconPress = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleAlphabetClick = (index) => {
    setSelectedAlphabet(index);
    const matchingItemIndex = DATA.findIndex((item) =>
      item.name.toUpperCase().startsWith(String.fromCharCode(65 + index))
    );
    if (matchingItemIndex === -1) {
      return;
    }
    const sectionIndex = sections.findIndex(
      (section) => section.data[0].id === DATA[matchingItemIndex].id
    );
    if (sectionIndex !== -1) {
      sectionListRef.current.scrollToLocation({
        sectionIndex: sectionIndex,
        itemIndex: 0,
        viewOffset: 0,
      });
    }
  };

  // Filter
  const filteredData = DATA.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sections = [];
  const dataBySection = {};
  filteredData.forEach((item) => {
    const sectionTitle = item.name[0].toUpperCase();
    if (!dataBySection[sectionTitle]) {
      dataBySection[sectionTitle] = [];
      sections.push({
        title: sectionTitle,
        data: dataBySection[sectionTitle],
      });
    }
    dataBySection[sectionTitle].push(item);
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <VStack bg="#f7f7f7" flex={1}>
      <StatusBar bg="#f7f7f7" barStyle="light-content" />
      <Box safeAreaTop bg="#f7f7f7" />

      <HStack
        bg="#f7f7f7"
        px="1"
        py="0"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <HStack alignItems="center">
          <Text style={styles.ApplicationName}>LinkApp</Text>
        </HStack>
        <HStack mr={1}>
          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name="md-person-add"
                size="sm"
                color="#0085f7"
              />
            }
          />
          <IconButton
            icon={<Icon as={Fontisto} name="trash" size="sm" color="#0085f7" />}
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="#0085f7"
              />
            }
          />
        </HStack>
      </HStack>

      <HStack
        bg="#f7f7f7"
        px="1"
        py="-2"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <HStack alignItems="center">
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchTerm}
              onChangeText={handleSearchTermChange}
            />
          </View>
        </HStack>
      </HStack>

      <SectionList
        ref={sectionListRef}
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePhoneIconPress(item.phone)}
            onLongPress={() => alert(`Selected ${item.name}`)}
          >
            <View style={{ padding: 8 }}>
              <Text style={{color: '#000'}}>{item.name}</Text>
              <Text style={{ color: "#aaa" }}>{item.phone}</Text>
            </View>
            <Divider bg="#f9f9f9" thickness={3} />
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
          </View>
        )}
      />

      <View style={styles.alphabetList}>
        {alphabet.map((letter, index) => (
          <TouchableOpacity
            key={letter}
            onPress={() => handleAlphabetClick(index)}
          >
            <Text
              style={
                selectedAlphabet === index
                  ? styles.selectedAlphabet
                  : styles.alphabet
              }
            >
              {letter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FloatingAction
        color="#0085f7"
        // iconColor="#2eac86"
        iconHeight={15}
        iconWidth={15}
        buttonSize={50}
        textElevation={5}
        actions={actions}
        onPressItem={(name) => {
          if (name === "Add") {
            // handle option 1 click
          } else if (name === "Send") {
            // handle option 2 click
          }
        }}
      />
    </VStack>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  ApplicationName: {
    fontFamily: "Roboto_500Medium",
    fontSize: 18,
    letterSpacing: 1,
    color: "#0085f7",
    marginLeft: 10,
  },
  searchContainer: {
    flex: 1,
    padding: 8,
  },
  searchInput: {
    backgroundColor: "#e5e5e5",
    borderRadius: 5,
    padding: 8,
    width: "96%",
    height: 30,
  },
  sectionHeader: {
    backgroundColor: "#e5e5e5",
    padding: 8,
  },
  sectionHeaderText: {
    fontWeight: "bold",
    color: "#000",
  },
  alphabetList: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#121212",
    width: 20,
  },
  alphabet: {
    color: "#0085f7",
    fontSize: 12,
  },
  selectedAlphabet: {
    color: "#015ba8",
    fontSize: 14,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
  },
  itemText: {},
  modal: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginVertical: 16,
  },
  qrCode: {
    marginVertical: 16,
  },
});
