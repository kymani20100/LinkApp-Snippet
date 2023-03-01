import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {View,Text,ScrollView,Image,StyleSheet,TouchableOpacity,FlatList,Dimensions,Vibration} from "react-native";
import {Actionsheet,Center,useDisclose,Box,HStack,Avatar,VStack,IconButton,Icon} from "native-base";
import {Ionicons,FontAwesome,Octicons} from "@expo/vector-icons";

import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  { id: '1', title: 'Call', icon: 'phone', },
  { id: '2', title: 'Message', icon: 'comment', },
  { id: '3', title: 'Share', icon: 'qrcode', },
];

const ProfilePage = ({route}) => {
  const navigation = useNavigation();

  const { itemId, Params } = route.params;
  const [copiedText, setCopiedText] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedHome, setCopiedHome] = useState(false);
  const [copiedMobile, setCopiedMobile] = useState(false);
  const [copiedWork, setCopiedWork] = useState(false);

  const copyToClipboard = async (term, field) => {
    const result = await Clipboard.setStringAsync(term);
    if(result){
      if(field === 'email'){
        setCopiedEmail(true);
        Vibration.vibrate(100);
          Toast.show({
              type: 'success',
              position: 'top',
              text1: `${field} copied`,
              text2: `Copied ${term} to Clipboard`,
              visibilityTime: 4000,
              autoHide: true,
              topOffset: 30,
              bottomOffset: 40,
              onShow: () => {},
              onHide: () => {}, // called when Toast hides (if `autoHide` was set to `true`)
              onPress: () => {},
              props: {} // any custom props passed to the Toast component
          });
        setTimeout(() => {
          setCopiedEmail(false);
        }, 5000);
      }else if (field === 'home'){
        setCopiedHome(true);
        Vibration.vibrate(100);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: `${field} contact copied`,
          text2: `Copied ${term} to Clipboard`,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {}, // called when Toast hides (if `autoHide` was set to `true`)
          onPress: () => {},
          props: {} // any custom props passed to the Toast component
      });
        setTimeout(() => {
          setCopiedHome(false);
        }, 5000);
      }else if (field === 'mobile'){
        setCopiedMobile(true);
        Vibration.vibrate(100);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: `${field} contact copied`,
          text2: `Copied ${term} to Clipboard`,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {}, // called when Toast hides (if `autoHide` was set to `true`)
          onPress: () => {},
          props: {} // any custom props passed to the Toast component
      });
        setTimeout(() => {
          setCopiedMobile(false);
        }, 5000);
      }else if (field === 'work'){
        setCopiedWork(true);
        Vibration.vibrate(100);
        Toast.show({
          type: 'success',
          position: 'top',
          text1: `${field} contact copied`,
          text2: `Copied ${term} to Clipboard`,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
          onShow: () => {},
          onHide: () => {}, // called when Toast hides (if `autoHide` was set to `true`)
          onPress: () => {},
          props: {} // any custom props passed to the Toast component
      });
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
        setProfilePictureSize(30);
      } else {
        setProfilePictureSize(70);
      }
    }
  };

  const { isOpen, onOpen, onClose } = useDisclose();

  const ITEM_WIDTH = 70; // Change as needed
  const ITEM_MARGIN = 10; // Change as needed

  return (
    <VStack bg="#201d1a" flex={1}>
      <StatusBar bg="#2e2a25" barStyle="light-content" />
      <Box safeAreaTop bg="#2e2a25" />
      <HStack bg="#2e2a25" px="1" py="0" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconButton
              icon={
                <Icon
                  as={Ionicons}
                  name="ios-arrow-back"
                  size="sm"
                  color="#fbcf9c"
                />
              }
            />
          </TouchableOpacity>

          <Text style={styles.selectedItems}>Contacts</Text>
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
      </HStack>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.profileContainer}>
          <Center w="100%" mt={-5}>
            <Avatar
              bg="green.500"
              style={{ width: profilePictureSize, height: profilePictureSize }}
              source={require("../assets/add-user.png")}
            />
        
            <Box w="90%" maxW="400">

              <HStack px="3" justifyContent="center" alignItems="center" w="100%" maxW="350">
                  <Text style={styles.name}>{Params.name}</Text>
                  <Image source={require('../assets/img/icons/verify.png')} style={{width: 15, height: 15, marginLeft: 5, marginTop: 10}} />
              </HStack>
              
            </Box>

              <Center w="100%">
                <FlatList
                  horizontal={true}
                  data={DATA}
                  contentContainerStyle={{padding: 8}}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { width: ITEM_WIDTH, marginLeft: ITEM_MARGIN, marginRight: ITEM_MARGIN }]}>
                      <FontAwesome name={item.icon} size={12} color="#fbcf9c" />
                      <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                  )}
                />
              </Center>

              <Center w={windowWidth - 30} mt={2}>
                <View style={styles.palette}>
                    <View>
                        <HStack justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                            <Text style={styles.LabelTitle}>home</Text>
                        </HStack>

                        <TouchableOpacity onPress={() => copyToClipboard('(123)-345 987 235', 'home')}>
                          <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                              <Text style={styles.LabelContent}>(123)-345 987 235</Text>
                              <View style={styles.Clipbox}>
                              {copiedHome === true ? (<Image source={require('../assets/img/icons/tick.png')} style={{width: 12, height: 12}} />) : (<Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />)}
                              </View>
                          </HStack>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <HStack justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                            <Text style={styles.LabelTitle}>mobile</Text>
                        </HStack>

                        <TouchableOpacity onPress={() => copyToClipboard('(123)-345 987 235', 'mobile')}>
                          <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                              <Text style={styles.LabelContent}>(123)-345 987 235</Text>
                              <View style={styles.Clipbox}>
                              {copiedMobile === true ? (<Image source={require('../assets/img/icons/tick.png')} style={{width: 12, height: 12}} />) : (<Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />)}
                              </View>
                          </HStack>
                        </TouchableOpacity>
                        
                    </View>

                    <View>
                        <HStack justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                            <Text style={styles.LabelTitle}>work</Text>
                        </HStack>

                        <TouchableOpacity onPress={() => copyToClipboard('(123)-345 987 235', 'work')}>
                          <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                              <Text style={styles.LabelContent}>(123)-345 987 235</Text>
                              <View style={styles.Clipbox}>
                              {copiedWork === true ? (<Image source={require('../assets/img/icons/tick.png')} style={{width: 12, height: 12}} />) : (<Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />)}
                              </View>
                          </HStack>
                        </TouchableOpacity>
                        
                    </View>
                </View>
              </Center>

              <Center w={windowWidth - 30} mt={2}>
                <View style={styles.palette}>
                    <View>
                        <HStack justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
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
              </Center>

              <Center w={windowWidth - 30} mt={2}>
                <View style={styles.palette}>
                    <View>
                        <HStack justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                            <Text style={styles.LabelTitle}>home</Text>
                        </HStack>

                        <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                            <Text style={styles.LabelContent}>(123)-345 987 235</Text>
                            <View style={styles.Clipbox}>
                              <Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />
                            </View>
                        </HStack>
                    </View>

                    <View>
                        <HStack justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                            <Text style={styles.LabelTitle}>mobile</Text>
                        </HStack>

                        <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                            <Text style={styles.LabelContent}>(123)-345 987 235</Text>
                            <View style={styles.Clipbox}>
                              <Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />
                            </View>
                        </HStack>
                    </View>

                    <View>
                        <HStack justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                            <Text style={styles.LabelTitle}>work</Text>
                        </HStack>

                        <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
                            <Text style={styles.LabelContent}>(123)-345 987 235</Text>
                            <View style={styles.Clipbox}>
                              <Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />
                            </View>
                        </HStack>
                    </View>
                </View>
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
    marginTop: 10,
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
    paddingBottom: 10,
    paddingTop: 5,
    paddingHorizontal: 10,
    backgroundColor: '#2e2a25',
    borderRadius: 5,
    padding: 10,
    shadowColor: "#8d8d8d",
    shadowOffset: { width: -5, height: 5},
    shadowOpacity: .4,
    shadowRadius: 3,
    elevation: 6,
  },
  LabelTitle: {
    fontFamily: 'Roboto_400Regular',
    color: '#fbcf9c',
    fontSize: 12,
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
  
});

export default ProfilePage;
