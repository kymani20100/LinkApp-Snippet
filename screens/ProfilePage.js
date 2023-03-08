import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {View,Text,ScrollView,Image,StyleSheet,TouchableOpacity,FlatList,Dimensions,Vibration} from "react-native";
import {Divider,Actionsheet,Center,useDisclose,Box,HStack,Avatar,VStack,IconButton,Icon} from "native-base";
import {Ionicons,FontAwesome,Entypo,AntDesign} from "@expo/vector-icons";
import { Button } from "react-native-paper";
import Accordion from "../components/Accordion";


import * as Clipboard from 'expo-clipboard';
import CustomToast from "../components/CustomToast";
import { useNavigation } from '@react-navigation/native';

const DATA = [
  { id: '1', title: 'Call', icon: 'phone', },
  { id: '2', title: 'Message', icon: 'comment', },
  { id: '3', title: 'Share', icon: 'qrcode', },
];

// FLATLIST WIDTH & MARGIN
const ITEM_WIDTH = 70; // Change as needed
const ITEM_MARGIN = 10; // Change as needed

const ProfilePage = ({route}) => {
  const navigation = useNavigation();

  const { itemId, Params } = route.params;
  const [copiedText, setCopiedText] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedHome, setCopiedHome] = useState(false);
  const [copiedMobile, setCopiedMobile] = useState(false);
  const [copiedWork, setCopiedWork] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const EmailComponent = () => {
    return (
      <View style={styles.palette}>
          <View style={{marginBottom: 10}}>
            <HStack justifyContent={'space-between'} alignItems="center" w="100%">
                <Text style={styles.LabelTitle}>email</Text>
            </HStack>

          <TouchableOpacity onPress={() => copyToClipboard('kymani.emmanuel@gmail.com', 'email')}>
            <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                <Text style={styles.LabelContent}>kymani.emmanuel@gmail.com</Text>
                <View style={styles.Clipbox}>
                  {copiedEmail === true ? (<Image source={require('../assets/img/icons/tick.png')} style={{width: 12, height: 12}} />) : (<Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />)}
                </View>
            </HStack>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
            <HStack justifyContent={'space-between'} alignItems="center" w="100%">
                <Text style={styles.LabelTitle}>email</Text>
            </HStack>

          <TouchableOpacity onPress={() => copyToClipboard('kymani.emmanuel@gmail.com', 'email')}>
            <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                <Text style={styles.LabelContent}>kymani.emmanuel@gmail.com</Text>
                <View style={styles.Clipbox}>
                  {copiedEmail === true ? (<Image source={require('../assets/img/icons/tick.png')} style={{width: 12, height: 12}} />) : (<Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />)}
                </View>
            </HStack>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
            <HStack justifyContent={'space-between'} alignItems="center" w="100%">
                <Text style={styles.LabelTitle}>email</Text>
            </HStack>

          <TouchableOpacity onPress={() => copyToClipboard('kymani.emmanuel@gmail.com', 'email')}>
            <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                <Text style={styles.LabelContent}>kymani.emmanuel@gmail.com</Text>
                <View style={styles.Clipbox}>
                  {copiedEmail === true ? (<Image source={require('../assets/img/icons/tick.png')} style={{width: 12, height: 12}} />) : (<Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />)}
                </View>
            </HStack>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
            <HStack justifyContent={'space-between'} alignItems="center" w="100%">
                <Text style={styles.LabelTitle}>email</Text>
            </HStack>

          <TouchableOpacity onPress={() => copyToClipboard('kymani.emmanuel@gmail.com', 'email')}>
            <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                <Text style={styles.LabelContent}>kymani.emmanuel@gmail.com</Text>
                <View style={styles.Clipbox}>
                  {copiedEmail === true ? (<Image source={require('../assets/img/icons/tick.png')} style={{width: 12, height: 12}} />) : (<Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />)}
                </View>
            </HStack>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 10}}>
            <HStack justifyContent={'space-between'} alignItems="center" w="100%">
                <Text style={styles.LabelTitle}>email</Text>
            </HStack>

          <TouchableOpacity onPress={() => copyToClipboard('kymani.emmanuel@gmail.com', 'email')}>
            <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                <Text style={styles.LabelContent}>kymani.emmanuel@gmail.com</Text>
                <View style={styles.Clipbox}>
                  {copiedEmail === true ? (<Image source={require('../assets/img/icons/tick.png')} style={{width: 12, height: 12}} />) : (<Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />)}
                </View>
            </HStack>
          </TouchableOpacity>
        </View>
         
      </View>
    );
  }

  const copyToClipboard = async (term, field) => {
    const result = await Clipboard.setStringAsync(term);
    if(result){
      if(field === 'email'){
        setCopiedEmail(true);
        Vibration.vibrate(100);
        CustomToast({ field: 'Work', term: 'email', type: 'success' });
          
        setTimeout(() => {
          setCopiedEmail(false);
        }, 5000);
      }else if (field === 'home'){
        setCopiedHome(true);
        Vibration.vibrate(100);
        CustomToast({ field: 'Work', term: 'email', type: 'success' });
        setTimeout(() => {
          setCopiedHome(false);
        }, 5000);
      }else if (field === 'mobile'){
        setCopiedMobile(true);
        Vibration.vibrate(100);
        CustomToast({ field: 'Work', term: 'email', type: 'success' });
        setTimeout(() => {
          setCopiedMobile(false);
        }, 5000);
      }else if (field === 'work'){
        setCopiedWork(true);
        Vibration.vibrate(100);
        CustomToast({ field: 'Work', term: 'email', type: 'success' });
        setTimeout(() => {
          setCopiedWork(false);
        }, 5000);
      }
    }
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  const windowWidth = Dimensions.get('window').width;
  const [scrollDirection, setScrollDirection] = useState("none");
  const [profilePictureSize, setProfilePictureSize] = useState(70);

  const handleScroll = (event) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > 0 ? "up" : "down";

    if (direction !== scrollDirection) {
      setScrollDirection(direction);

      if (direction === "up") {
        setProfilePictureSize(70);
      } else {
        setProfilePictureSize(70);
      }
    }
  };

  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <VStack bg="#201d1a" flex={1} mt={-6}>
      <StatusBar bg="#2e2a25" barStyle="light-content" />
      {/* <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#2e2a25" translucent = {true}/> */}
      <Box safeAreaTop bg="#2e2a25" />
      
      {/* <HStack bg="#2e2a25" px="1" py="0" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="flex-start">

            <Pressable onPress={() => navigation.goBack()} rounded="2" height={25} maxW="96" style={{justifyContent: 'center', width: 150, }} bg="#2e2a25">
                <HStack alignItems="center">
                  <IconButton icon={<Icon as={AntDesign} name="arrowleft" size="sm" color="#fbcf9c" />} /> 
                  <Text style={styles.selectedItems}> Contacts</Text>
                </HStack>
            </Pressable>
        </HStack>
        <HStack mr={1}>
          <TouchableOpacity onPress={() => {}}>
            <IconButton
              icon={
                <Icon as={Octicons} name="trash" size="sm" color="#fbcf9c" />
              }
            />
          </TouchableOpacity>
        </HStack>
      </HStack> */}

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.profileContainer}>
          <Center w="100%" mt={-2}>
            <Avatar
              bg="green.500"
              style={{ width: profilePictureSize, height: profilePictureSize }}
              source={require("../assets/img/icons/mk.jpg")}
            />
        
            <Box justifyContent="center" alignItems="center" w="100%" maxW="400">

              <HStack px="3" justifyContent="center" alignItems="center" w="100%" maxW="350">
                  <Text style={styles.name}>{Params.name}</Text>
                  <Image source={require('../assets/img/social/verify.png')} style={{width: 12, height: 12, marginLeft: 5, marginTop: 8}} />

              </HStack>

              <HStack px="3" justifyContent="center" alignItems="center" w="100%" maxW="350">

                  <View style={styles.EditName}>
                    <Text style={styles.Edit}> <Entypo name="edit" size={15} color="#fbcf9c" /> Edit</Text>
                  </View>

                  <Divider height={6} orientation="vertical" ml="3" mr="2" mt="2" _light={{
                      bg: "muted.800"
                    }} _dark={{
                      bg: "muted.50"
                    }} />

                  <View style={styles.EditName}>
                    <Text style={styles.Edit}>  <Image source={require('../assets/img/social/broken-link.png')} style={{width: 10, height: 10}} /> Linked</Text>
                  </View>

              </HStack>
              
            </Box>

              <Center w="100%">
                <FlatList
                  horizontal={true}
                  data={DATA}
                  contentContainerStyle={{padding: 8}}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {navigation.navigate('Screen', { itemId: item.id, Params: item })}}>
                        <View style={[styles.itemContainer, { width: ITEM_WIDTH, marginLeft: ITEM_MARGIN, marginRight: ITEM_MARGIN }]}>
                          <FontAwesome name={item.icon} size={12} color="#fbcf9c" />
                          <Text style={styles.itemTitle}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                  )}
                />

              </Center>

              <Divider my="2" _light={{bg: "muted.800"}} _dark={{ bg: "muted.50"}} />

              <Center flex={1} w={windowWidth - 30} mt={0.3}>
                  <Accordion 
                    style={styles.accordShadow}
                    title="Basic Information"
                    height={250}
                    content={<EmailComponent />}
                  />

                  <Accordion 
                    style={styles.accordShadow}
                    title="Demographic Information"
                    height={250}
                    content={<EmailComponent />}
                  />

                  <Accordion 
                    style={styles.accordShadow}
                    title="Educational Information"
                    height={250}
                    content={<EmailComponent />}
                  />

                  <Accordion 
                    style={styles.accordShadow}
                    title="Employment Information"
                    height={250}
                    content={<EmailComponent />}
                  />

                  <Accordion 
                    style={styles.accordShadow}
                    title="Social Information"
                    height={250}
                    content={<EmailComponent />}
                  />
              </Center>

          </Center>
           
            

          <Center>
            <Actionsheet isOpen={false} onClose={onClose} disableOverlay>
              <Actionsheet.Content>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  superficial suscipit, vel tempus velit tristique.
                </Text>
                <Text style={styles.bio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum consequat lectus vitae enim suscipit, vel tempus
                  velit tristique. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum consequat lectus vitae enim
                  suscipit, vel tempus velit tristique.
                </Text>
              </Actionsheet.Content>
            </Actionsheet>
          </Center>
        </View>

        {/* Additional content goes here */}
      </ScrollView>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 16,
    fontFamily: "Roboto_300Light",
    color: "#fbcf9c",
    marginTop: 5,
  },
  EditName: {
    marginLeft: 5,
    marginTop: 5,
    // paddingHorizontal: 8,
    // paddingVertical: 3,
    height: 25,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e2a25',
    borderRadius: 3
  },
  Edit: {
    fontSize: 12,
    fontFamily: "Roboto_300Light",
    color: "#fbcf9c",
  },
  subName: {
    fontSize: 12,
    fontFamily: "Roboto_300Light",
    color: "#fbcf9c",
    marginBottom: 5,
    marginTop: 3
  },
  bio: {
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  selectedItems: {
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto_500Medium",
    color: "#fbcf9c",
    marginLeft: 10,
  },
  itemContainer: {
    backgroundColor: '#2e2a25',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#8d8d8d",
    shadowOffset: { width: -5, height: 5},
    shadowOpacity: .4,
    shadowRadius: 3,
    elevation: 6,
  },
  itemTitle: {
    fontFamily: "Roboto_100Thin",
    fontSize: 10,
    color: "#fbcf9c",
  },
  palette: {
    width: "100%",
    // height: 100,
    paddingBottom: 10,
    paddingTop: 5,
    paddingHorizontal: 10,
    backgroundColor: '#2c2723',
    borderRadius: 5,
    padding: 10,
    // shadowColor: "#8d8d8d",
    // shadowOffset: { width: -5, height: 5},
    // shadowOpacity: .4,
    // shadowRadius: 3,
    // elevation: 6,
  },
  LabelTitle: {
    fontFamily: 'Roboto_400Regular',
    color: '#fbcf9c',
    fontSize: 12,
    height: 30,
    marginHorizontal: 5,
    marginBottom: 1,
    marginTop: 2
  },
  LabelContent: {
    fontFamily: 'Roboto_300Light',
    color: '#dedede',
    fontSize: 12,
    height: 20,
    letterSpacing: 1,
    margin: 5,
    backgroundColor: '#201d1a',
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    flex: 1,
  },
  Clipbox: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#201d1a',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    borderColor: '#151310',
    borderWidth: 1,
    position: 'relative',
    left: -5,
  },
  accordShadow: {
    shadowColor: "#8d8d8d",
    shadowOffset: { width: -5, height: 5},
    shadowOpacity: .4,
    shadowRadius: 3,
    elevation: 9,
  },
  imageBackground: {
    padding: 4,
    borderRadius: 10,
    backgroundColor: '#201d1a',
    marginLeft: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  }
});

export default ProfilePage;
