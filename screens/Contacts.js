import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {View, Text, TextInput, Image, TouchableOpacity, Vibration, Animated, Easing, useWindowDimensions, SectionList, StyleSheet, Linking, Keyboard, LayoutAnimation} from "react-native";
import { FloatingAction } from "react-native-floating-action";
import { Pressable, Actionsheet, Center, useDisclose, HStack, VStack, Icon, Box, IconButton, Button, Badge } from "native-base";
import { Searchbar, Chip, TouchableRipple } from 'react-native-paper';
import {Ionicons, MaterialCommunityIcons, AntDesign, Fontisto, Entypo, FontAwesome} from "@expo/vector-icons";
import QRCode from 'react-native-qrcode-svg';
import Card from "../components/Card";

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { clearItems } from '../store/reducers/reducer';

const SPRING_CONFIG = { tension: 50, friction: 8 };
const PageName = 'CONTACTS';

import { DATA } from "../Data/fake-api";

const Generate = [
    {
      text: "Generate",
      icon: require("../assets/qr-code.png"),
      name: "Send",
      position: 2,
      color: '#2e2a25', 
      textColor: '#fbcf9c'
    },
  ];

  const Scan = [
    {
      text: "Scan",
      icon: require("../assets/scan.png"),
      name: "Add",
      position: 1,
      color: '#2e2a25', 
      textColor: '#fbcf9c'
    }
  ];

const Contacts = ({navigation}) => {
    // Redux
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);

    // ACTION SHEET
    const { isOpen, onOpen, onClose } = useDisclose();
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedAlphabet, setSelectedAlphabet] = useState(null);
    const sectionListRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');

    // REFRESH
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
      console.log('From within the belly of the beast');
      Vibration.vibrate(100);
      dispatch(clearItems());
      setRefreshing(true);
      // Perform any refresh logic here
      setRefreshing(false);
    };

    const generateQRCode = () => {
        const data = items.join(',');
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

  const handleAlphabetClick = useCallback((index) => {
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
  }, []);

  const filteredData = useMemo(() => {
    return DATA.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const sections = useMemo(() => {
    const dataBySection = {};
    filteredData.forEach((item) => {
      const sectionTitle = item.name[0].toUpperCase();
      if (!dataBySection[sectionTitle]) {
        dataBySection[sectionTitle] = [];
      }
      dataBySection[sectionTitle].push(item);
    });
    return Object.keys(dataBySection).map((title) => ({
      title, data: dataBySection[title],
    }));
  }, [filteredData]);

  const alphabet = useMemo(() => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), []);

  return (
    <VStack bg="#2e2a25" flex={1}>
    <StatusBar bg="#2e2a25" zIndex={200} barStyle="light-content" />
    <Box safeAreaTop zIndex={200} bg="#2e2a25" />
    {items.length > 0 ? 
      (
      <HStack bg="#2e2a25" px="3" mt={0} zIndex={200} justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center" mt={-1}>
           
              <Pressable onPress={() => handleRefresh()} rounded="2" height={25} maxW="96" style={{justifyContent: 'center', width: 150, }} bg="#2e2a25">
                <HStack alignItems="center">
                  <Text style={styles.selectedItems}>{items.length}</Text>
                  <IconButton icon={<Icon as={Entypo} name="v-card" size={3} color="#fbcf9c" />} />
                  <Text style={styles.selectedItems}>in the</Text>
                  <Image source={require('../assets/img/gift.png')} style={{width: 10, height: 10, marginLeft: 5}} />
                </HStack>
              </Pressable>
            
        </HStack>

        <TouchableOpacity onPress={() => handleRefresh()}>
            <IconButton icon={<Icon as={Ionicons} name="ios-trash-outline" size="sm" color="#fbcf9c" />} />
        </TouchableOpacity>
    </HStack>
    ) 
    : 
    (
    <HStack bg="#2e2a25" px="3" mt={-2} zIndex={200} justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <Text style={styles.ApplicationName}>LinkApp</Text>
        <IconButton icon={<Icon as={Entypo} name="v-card" size="sm" color="#fbcf9c" />} />
    </HStack>
    ) 
    }
    
      <HStack bg="#2e2a25" px="3" mt={-2} zIndex={200} py="2" w="100%" maxW="350">
        <Searchbar
            elevation={0}
            inputStyle={{color: '#fbcf9c'}}
            iconColor={'#fbcf9c'}
            style={{height: 30, width: '100%', borderRadius: 5, backgroundColor: '#201d1a'}}
            placeholder="Search..."
            placeholderTextColor="#292522"
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
              <Card props={item} />
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
                <Text style={selectedAlphabet === index ? styles.selectedAlphabet : styles.alphabet}>
                  {letter}
                </Text>
            </TouchableOpacity>
            ))}
        </View>

        {/* THIS IS THE FLOATING ACTION BUTTON */}
        {items.length > 0 ? (<FloatingAction
            color="#2e2a25"
            iconHeight={15}
            iconWidth={15}
            buttonSize={50}
            textElevation={5}
            actions={Generate}
            distanceToEdge={{vertical: 70, horizontal: 30}}
            onPressItem={(name) => {
            // if (name === "Add") {
            //     // handle option 1 click
            //     handleClearItems()
            // } else if (name === "Send") {
            //     // handle option 2 click
            //     onOpen()
            // }
            }}
        />) : (<FloatingAction
          color="#2e2a25"
          iconHeight={15}
          iconWidth={15}
          buttonSize={50}
          textElevation={5}
          actions={Scan}
          distanceToEdge={{vertical: 70, horizontal: 30}}
          onPressItem={(name) => {
          // if (name === "Add") {
          //     // handle option 1 click
          //     handleClearItems()
          // } else if (name === "Send") {
          //     // handle option 2 click
          //     onOpen()
          // }
          }}
      />)}
        

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
    },
  searchContainer: {
    padding: 8,
  },
  searchInput: {
    backgroundColor: "#eee",
    borderRadius: 4,
    padding: 8,
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
