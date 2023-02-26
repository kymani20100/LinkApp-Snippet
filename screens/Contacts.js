import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import {View, Text, TextInput, Image, TouchableOpacity, Vibration, Animated, Easing, useWindowDimensions, SectionList, StyleSheet, Linking, Keyboard, LayoutAnimation} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { ScrollView, Actionsheet, Center, useDisclose, HStack, VStack, Icon, Box, IconButton, FlatList, Divider } from "native-base";
import { Searchbar } from 'react-native-paper';
import {Ionicons, MaterialCommunityIcons, MaterialIcons, Fontisto, Entypo, FontAwesome} from "@expo/vector-icons";
import QRCode from 'react-native-qrcode-svg';
import LongPress from './LongPress';

const SPRING_CONFIG = { tension: 50, friction: 8 };
const PageName = 'CONTACTS';

const DATA = [
  { id: "1", name: "Alice Wonderland", phone: "111-111-1111" },
  { id: "27", name: "Alice Jones", phone: "111-111-1111" },
  { id: "28", name: "Ashley Beifer", phone: "111-111-1111" },
  { id: "2", name: "Bob Marley", phone: "222-222-2222" },
  { id: "3", name: "Charlie Murphy", phone: "333-333-3333" },
  { id: "4", name: "David Berker", phone: "444-444-4444" },
  { id: "5", name: "Eva Longoria", phone: "555-555-5555" },
  { id: "6", name: "Frank Dune", phone: "666-666-6666" },
  { id: "7", name: "George Coke", phone: "777-777-7777" },
  { id: "8", name: "Harry Styles", phone: "888-888-8888" },
  { id: "9", name: "Isabelle Riez", phone: "999-999-9999" },
  { id: "10", name: "Jack Brown", phone: "111-222-3333" },
  { id: "11", name: "Karen Martinez", phone: "444-555-6666" },
  { id: "12", name: "Liam Neeson", phone: "777-888-9999" },
  { id: "13", name: "Mike Tyson", phone: "111-444-7777" },
  { id: "14", name: "Nancy Pelosi", phone: "222-555-8888" },
  { id: "15", name: "Oliver Wilde", phone: "333-666-9999" },
  { id: "16", name: "Paul Mccauthney", phone: "111-555-9999" },
  { id: "17", name: "Queenie Seina", phone: "222-666-1111" },
  { id: "18", name: "Robert Denero", phone: "333-777-2222" },
  { id: "19", name: "Sam George", phone: "444-888-3333" },
  { id: "20", name: "Tina Fey", phone: "555-999-4444" },
  { id: "21", name: "Uma Omar", phone: "666-111-5555" },
  { id: "22", name: "Vera Velvet", phone: "777-222-6666" },
  { id: "23", name: "William Defoe", phone: "888-333-7777" },
  { id: "24", name: "Xavier William", phone: "999-444-8888" },
  { id: "25", name: "Yara Abdul", phone: "111-666-1111" },
  { id: "26", name: "Zoe Saldana", phone: "222-777-2222" },
];

const actions = [
    {
      text: "Scan",
      icon: require("../assets/scan.png"),
      name: "Add",
      position: 1,
      color: '#2e2a25', 
      textColor: '#fbcf9c'
    },
    {
      text: "Generate",
      icon: require("../assets/qr-code.png"),
      name: "Send",
      position: 2,
      color: '#2e2a25', 
      textColor: '#fbcf9c'
    },
  ];

const Contacts = ({navigation}) => {
    // ACTION SHEET
    const { isOpen, onOpen, onClose } = useDisclose();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAlphabet, setSelectedAlphabet] = useState(null);
//   const [contactData, setContactData] = useState([]);
    const sectionListRef = useRef(null);
//   const [keyboardShown, setKeyboardShown] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    // const onChangeSearch = query => setSearchQuery(query);

    // GENERATION
    const [longPress, setLongPressed] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleItemPress = (itemId) => {
        setLongPressed(true);
        // Add the selected item's ID to the array
        if (selectedItems.includes(itemId)) {
        // If the item is already selected, remove it from the array
        setSelectedItems(selectedItems.filter(id => id !== itemId));
        } else {
        // If the item is not selected, add it to the array
        setSelectedItems([...selectedItems, itemId]);
        }
        // Vibrate the device for 500 milliseconds
        Vibration.vibrate(100);
    };

    const generateQRCode = () => {
        const data = selectedItems.join(',');
        return <QRCode value={data} size={200} />;
    };

    // CLEAR THE ITEM
    const clearItems = () => {
        setSelectedItems([]);
        // Vibrate the device for 500 milliseconds
        Vibration.vibrate(100);
        setLongPressed(false);
    };
    // GENERATION

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

  const handleSearchTermChange = (value) => {
    setSearchTerm(value);
    setSelectedAlphabet(null);
    if (sectionListRef.current) {
      const firstSection = sections[0];
      const firstItem = firstSection?.data?.[0];
      if (sections.length > 0 && firstItem) {
        sectionListRef.current.scrollToLocation({
          sectionIndex: 0,
          itemIndex: 0,
          viewOffset: 0,
        });
      }
    }
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

  // LONG & SHORT
  const handleShortPress = (item) => {
    if(longPress === true){
      handleItemPress(item.id)
    }else{
      navigation.push('Profile', {
        itemId: item.id,
        items: item,
      })
    }
    // Navigation.navigate('Profile')
    // handlePhoneIconPress(item.phone);
  };

  const handleLongPress = (item) => {
    handleItemPress(item.id)
  };


  return (
    <VStack bg="#2e2a25" flex={1}>
    <StatusBar bg="#2e2a25" zIndex={200} barStyle="light-content" />
    <Box safeAreaTop zIndex={200} bg="#2e2a25" />
    {selectedItems.length > 0 ? 
      (
      <HStack bg="#2e2a25" px="3" mt={-2} zIndex={200} justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center" mt={-2}>
            <TouchableOpacity onPress={clearItems}>
                <IconButton
                    icon={<Icon as={Ionicons} name="ios-arrow-back" size="sm" color="#fbcf9c" />}
                />
            </TouchableOpacity>
            <Text style={styles.selectedItems}>{selectedItems.length} item(s) in the</Text>
            <Image source={require('../assets/img/gift.png')} style={{width: 10, height: 10, marginLeft: 5}} />
        </HStack>
        <IconButton
        icon={
            <Icon
            as={Ionicons}
            name="md-person-add"
            size="sm"
            color="#fbcf9c"
            />
        }
        />
    </HStack>
    ) 
    : 
    (
    <HStack bg="#2e2a25" px="3" mt={-2} zIndex={200} justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <Text style={styles.ApplicationName}>LinkApp</Text>
        <IconButton
        icon={
        <Icon
            as={Ionicons}
            name="md-person-add"
            size="sm"
            color="#fbcf9c"
        />
        }
        />
    </HStack>
    ) 
    }
    

      <HStack bg="#2e2a25" px="3" mt={-2} zIndex={200} py="2" w="100%" maxW="350">
            <Searchbar
                elevation={0}
                inputStyle={{color: '#fbcf9c'}}
                iconColor={'#fbcf9c'}
                style={{height: 35, width: '100%', borderRadius: 5, backgroundColor: '#201d1a'}}
                placeholder="Search..."
                onChangeText={handleSearchTermChange}
                value={searchTerm}
            />
        </HStack>

        {/* THIS IS THE SECTION LIST BLOCK */}
        <SectionList
            ref={sectionListRef}
            sections={sections}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <LongPress onShortPress={() => handleShortPress(item)} onLongPress={() => handleLongPress(item)} longPressDuration={300} style={{ backgroundColor: '#2e2a25' }}>
                      <View style={styles.contactItem}>
                        <Text style={styles.contactList}>{item.name}</Text>
                      </View>
              </LongPress>
            )}
            onScroll={onScroll}
            renderSectionHeader={({ section }) => (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
            )}
        />

        {/* THIS IS THE ALPHABET RENDERING BLOCK */}
        <View style={styles.alphabetList}>
            {alphabet.map((letter, index) => (
            <TouchableOpacity
                key={letter}
                onPress={() => handleAlphabetClick(index)}>
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

        {/* THIS IS THE FLOATING ACTION BUTTON */}
        <FloatingAction
            color="#2e2a25"
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

        {/* THIS IS THE FLOATING TAB BAR */}
        <Animated.View style={[styles.tabBar, { transform: [{ translateY }] }]}>
            <View style={styles.tabBackground}>
                <View style={styles.tabBarItem}>
                  {PageName === 'CONTACTS' ? ( <MaterialCommunityIcons name="home" size={24} color="#b6844a" />) : ( <MaterialCommunityIcons name="home" size={24} color="#fbcf9c" />)}
                </View>
                <View style={styles.tabBarItem}>
                    <Ionicons name="ios-search" size={24} color="#fbcf9c" />
                </View>
                <View style={styles.tabBarItem}>
                    <MaterialCommunityIcons name="account" size={24} color="#fbcf9c" />
                </View>
            </View>
        </Animated.View>

        {/* THIS BLOCK IS FOR THE BAR CODE */}
        <Center>
          <Actionsheet isOpen={isOpen} onClose={onClose} disableOverlay>
            <Actionsheet.Content bg={'#201d1a'}>
            <View style={{width: '100%',alignItems: 'center'}}>
                <Text style={styles.barCodeTitle}>SCAN THE CODE</Text>
                <Text style={styles.barCodeText}>Thumb selects, Camera scans - Magic!</Text>
            </View>
            <View style={styles.barcodeGenerator}>
              {generateQRCode()}
            </View>
            </Actionsheet.Content>
          </Actionsheet>
        </Center>

    </VStack>
  );
};
export default Contacts;

const styles = StyleSheet.create({
    ApplicationName: {
      fontFamily: "Roboto_900Black",
      fontSize: 20,
      letterSpacing: 1.5,
      color: "#fbcf9c",
    },
    selectedItems: {
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: "Roboto_500Medium",
      color: "#fbcf9c",
      marginLeft: 10,
    },
  searchContainer: {
    padding: 8,
  },
  searchInput: {
    backgroundColor: "#eee",
    borderRadius: 4,
    padding: 8,
  },
  contactItem: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    height: 40,
    width: '95%',
    marginLeft: 10,
    backgroundColor: '#2e2a25',
    justifyContent: 'center',
    borderBottomColor: '#161412',
    borderBottomWidth: 0.5,
  },
  contactList: {
    fontFamily: "Roboto_300Light",
    color: "#fbcf9c",
    letterSpacing: 1,
  },
  sectionHeader: {
    backgroundColor: "#201d1a",
    padding: 8,
  },
  sectionHeaderText: {
    fontWeight: "bold",
    color: '#dedede'
  },
  alphabetList: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: 20,
  },
  alphabet: {
    color: "#fbcf9c",
    fontSize: 12,
    width: '100%',
    paddingHorizontal: 10,
  },
  selectedAlphabet: {
    color: "#b6844a",
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
  // TAB BAR STARTS HERE
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
    backgroundColor: "#2e2a25",
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
  // ACTION SHEET & BARCODE
  qrCode: {
    marginVertical: 16,
  },
  barCodeTitle: {
    fontFamily: "Roboto_900Black",
    color: "#fbcf9c",
    fontSize: 20,
    marginVertical: 5
  },
  barCodeText: {
    fontFamily: "Roboto_300Light",
    color: "#fbcf9c",
    fontSize: 12,
    marginBottom: 10
  },
  barcodeGenerator: {
    backgroundColor: '#2e2a25', 
    padding: 20, 
    marginBottom: 20, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
