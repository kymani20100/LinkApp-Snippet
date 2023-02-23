import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Easing,
  useWindowDimensions,
  FlatList,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
  Linking,
  Keyboard,
  LayoutAnimation,
  Vibration,
} from "react-native";

const SPRING_CONFIG = { tension: 50, friction: 8 };

import { Avatar, Button, Card } from "react-native-paper";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
  Entypo,
  FontAwesome,
  Octicons
} from "@expo/vector-icons";
import {
  Actionsheet,
  useDisclose,
  ScrollView,
  Spacer,
  Center,
  Heading,
  HStack,
  VStack,
  Icon,
  Box,
  IconButton,
  Divider,
} from "native-base";

import { FloatingAction } from "react-native-floating-action";
import QRCode from 'react-native-qrcode-svg';
// FLOATING
const CIRCLE_RADIUS = 30;
const ITEM_HEIGHT = 35;

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

const FloatingTabBar = () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  // FROM CONTACT SCREEN
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);
  // const [contactData, setContactData] = useState([]);
  const sectionListRef = useRef(null);
  // const [keyboardShown, setKeyboardShown] = useState(false);
  // const [dialogVisible, setDialogVisible] = useState(false);

  const [longPress, setLongPressed] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  // const [showQRCode, setShowQRCode] = useState(false);

  const handleItemPress = (itemId) => {
    setLongPressed(true);
    // Add the selected item's ID to the array
    // Vibrate the device for 500 milliseconds
    Vibration.vibrate(100);

    if (selectedItems.includes(itemId)) {
      // If the item is already selected, remove it from the array
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      // If the item is not selected, add it to the array
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  // CLEAR THE ITEM
  const clearItems = () => {
    setSelectedItems([]);
    // Vibrate the device for 500 milliseconds
    Vibration.vibrate(100);
    setLongPressed(false);
  };

  const generateQRCode = () => {
    const data = selectedItems.join(',');
    return <QRCode value={data} size={200} />;
  };

  // THIS IS FOR THE TAB FLOATING
  const { width } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(true);
  const translateY = useRef(new Animated.Value(0)).current;
  const prevOffsetY = useRef(0);

  // THIS BLOCK HANDLES SCROLL CLICK
  const onScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const visible = offsetY < 200 || offsetY < prevOffsetY.current; // show the tab bar only when scrolling up a bit or when scrolling down
    if (visible !== isVisible) {
      setIsVisible(visible);
      Animated.spring(translateY, {
        toValue: visible ? 0 : 90,
        ...SPRING_CONFIG,
        useNativeDriver: true,
      }).start();
    }
    prevOffsetY.current = offsetY;
  };
  // THIS IS FOR THE TAB FLOATING

  // THIS IS FROM CONTACT SCREEN
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

  // THIS BLOCK HANDLES ALPHABET CLICK
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

  // const getItemLayout = (data, index) => ({
  //   length: ITEM_HEIGHT,
  //   offset: ITEM_HEIGHT * index,
  //   index,
  // });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleActionSheet = () => {
    onOpen();
  };

  return (
    <VStack bg="#FFF" flex={1}>
      <StatusBar bg="#0085f7" zIndex={200} barStyle="light-content" />
      <Box safeAreaTop bg="#0085f7" zIndex={200} />

      {selectedItems.length > 0 ? 
      (
        <HStack
        bg="#0085f7"
        px="1"
        py="0"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
        zIndex={200}
      >
        <HStack alignItems="center">
        <TouchableOpacity onPress={clearItems}>
                <IconButton
                  icon={<Icon as={Ionicons} name="ios-arrow-back" size="sm" color="#FFF" />}
                />
            </TouchableOpacity> 

            <Text style={styles.selectedItems}>{selectedItems.length} Contact Selected</Text>
        </HStack>
        <HStack mr={1}>
         <TouchableOpacity onPress={handleActionSheet}>
                <IconButton
                  icon={<Icon as={Octicons} name="trash" size="sm" color="#FFF" />}
                />
            </TouchableOpacity> 
        </HStack>
      </HStack>    
      ) : (
        <HStack
        bg="#0085f7"
        px="1"
        py="0"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
        zIndex={200}
      >
        <HStack alignItems="center">
          <Text style={styles.ApplicationName}>LinkApp</Text>
        </HStack>
        <HStack mr={0}>
          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name="md-person-add"
                size="sm"
                color="#FFF"
              />
            }
          />
         
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="#FFF"
              />
            }
          />
        </HStack>
      </HStack>
      )}
     

      <HStack
        bg="#0085f7"
        px="1"
        py="-2"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
        zIndex={200}
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
            onPress={() => {longPress === true ? handleItemPress(item.id) : handlePhoneIconPress(item.phone)}}
            onLongPress={() => handleItemPress(item.id)}
          >
            <View style={{padding: 10,}}>
              <Text style={styles.contactList}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        // getItemLayout={getItemLayout} // add this line
        onScroll={onScroll}
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
        distanceToEdge={{vertical: 70, horizontal: 30}}
        onPressItem={(name) => {
          if (name === "Add") {
            // handle option 1 click
          } else if (name === "Send") {
            // handle option 2 click
            onOpen()
          }
        }}
      />

      <Animated.View style={[styles.tabBar, { transform: [{ translateY }] }]}>
        <View style={styles.tabBackground}>
          <View style={styles.tabBarItem}>
            <MaterialCommunityIcons name="home" size={24} color="#FFF" />
          </View>
          <View style={styles.tabBarItem}>
            <Ionicons name="ios-search" size={24} color="#FFF" />
          </View>
          <View style={styles.tabBarItem}>
            <MaterialCommunityIcons name="account" size={24} color="#FFF" />
          </View>
        </View>
      </Animated.View>

      <Center>
          <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
            <Actionsheet.Content>
            <View style={{width: '100%',alignItems: 'center'}}>
                <Text style={styles.barCodeTitle}>SCAN THE CODE</Text>
                <Text style={styles.barCodeText}>Thumb selects, Camera scans - Magic!</Text>
            </View>
            <View style={{backgroundColor: '#0085f7', padding: 20, marginBottom: 20, justifyContent: 'center', alignItems: 'center'}}>
              {generateQRCode()}
            </View>
            </Actionsheet.Content>
          </Actionsheet>
        </Center>
    </VStack>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBackground: {
    width: "90%",
    height: 50,
    borderRadius: 40,
    backgroundColor: "#0085f7",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#8d8d8d",
    shadowOffset: { width: -5, height: 5},
    shadowOpacity: .4,
    shadowRadius: 3,
    elevation: 6,
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ApplicationName: {
    fontFamily: "Roboto_900Black",
    fontSize: 18,
    letterSpacing: 1,
    color: "#FFF",
    marginLeft: 10,
  },
  selectedItems: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Roboto_500Medium",
    color: "#FFF",
    marginLeft: 10,
  },
  contactList: {
    fontFamily: "Roboto_400Regular",
    color: "#A1A1A1",
    letterSpacing: 1,
  },
  searchContainer: {
    flex: 1,
    padding: 8,
  },
  searchInput: {
    backgroundColor: "#FFF",
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
    fontFamily: "Roboto_900Black",
    color: "#000",
  },
  alphabetList: {
    position: "absolute",
    right: 5,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    zIndex: 100,
    paddingTop: 35
  },
  alphabet: {
    fontFamily: "Roboto_400Regular",
    color: "#0085f7",
    fontSize: 13,
    width: '100%',
    paddingHorizontal: 10
  },
  selectedAlphabet: {
    fontFamily: "Roboto_900Black",
    color: "#015ba8",
    fontSize: 15,
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
  barCodeTitle: {
    fontFamily: "Roboto_900Black",
    color: "#015ba8",
    fontSize: 20,
    marginVertical: 5
  },
  barCodeText: {
    fontFamily: "Roboto_300Light",
    color: "#015ba8",
    fontSize: 12,
    marginBottom: 10
  }
});

export default FloatingTabBar;
