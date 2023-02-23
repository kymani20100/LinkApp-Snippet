import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import {
  Actionsheet,
  Center,
  useDisclose,
  Button,
  Box,
  HStack,
  Avatar,
  VStack,
  IconButton,
  Icon,
  Progress,
  Heading,
  Divider,
  Flex
} from "native-base";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
  Entypo,
  FontAwesome,
  Octicons,
} from "@expo/vector-icons";

const DATA = [
  { id: '1', title: 'Call', icon: 'phone', },
  { id: '2', title: 'Message', icon: 'comment', },
  { id: '3', title: 'Share', icon: 'qrcode', },
];

const ProfilePage = () => {
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
    <VStack bg="#f2f2f7" flex={1}>
      <StatusBar bg="#f2f2f7" barStyle="light-content" />
      <Box safeAreaTop bg="#f2f2f7" />
      <HStack
        bg="#f2f2f7"
        px="1"
        py="0"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <HStack alignItems="center">
          <TouchableOpacity onPress={() => {}}>
            <IconButton
              icon={
                <Icon
                  as={Ionicons}
                  name="ios-arrow-back"
                  size="sm"
                  color="#0085f7"
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
                <Icon as={Octicons} name="trash" size="sm" color="#0085f7" />
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
              <Text style={styles.name}>Kymani Emmanuel Glimeti</Text>
            </Box>

              <Center w="100%">
                <FlatList
                  horizontal={true}
                  data={DATA}
                  contentContainerStyle={{padding: 8}}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { width: ITEM_WIDTH, marginLeft: ITEM_MARGIN, marginRight: ITEM_MARGIN }]}>
                      <FontAwesome name={item.icon} size={12} color="#007ef6" />
                      <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                  )}
                />
              </Center>

              <Center w={windowWidth - 30} mt={2}>
                <View style={styles.palette}>
                    <View>
                      <Text style={styles.LabelTitle}>home</Text>
                      <Text style={styles.LabelContent}>(123)-345 987 234</Text>
                      <Divider bg="#f2f2f7" thickness="1" mx="2" orientation="horizontal" />
                    </View>
                    <View>
                      <Text style={styles.LabelTitle}>mobile</Text>
                      <Text style={styles.LabelContent}>(123)-345 987 234</Text>
                      <Divider bg="#f2f2f7" thickness="1" mx="2" orientation="horizontal" />
                    </View>
                    <View>
                      <Text style={styles.LabelTitle}>work</Text>
                      <Text style={styles.LabelContent}>(123)-345 987 234</Text>
                    </View>
                </View>
              </Center>

              <Center w={windowWidth - 30} mt={2}>
                <View style={styles.palette}>
                    <View>
                      <Text style={styles.LabelTitle}>Email</Text>
                      <Text style={styles.LabelContent}>kymani.emmanuel@gmail.com</Text>
                    </View>
                </View>
              </Center>

              <Center w={windowWidth - 30} mt={2}>
                <View style={styles.palette}>
                    <View>
                      <Text style={styles.LabelTitle}>home</Text>
                      <Text style={styles.LabelContent}>(123)-345 987 234</Text>
                      <Divider bg="#f2f2f7" thickness="1" mx="2" orientation="horizontal" />
                    </View>
                    <View>
                      <Text style={styles.LabelTitle}>mobile</Text>
                      <Text style={styles.LabelContent}>(123)-345 987 234</Text>
                      <Divider bg="#f2f2f7" thickness="1" mx="2" orientation="horizontal" />
                    </View>
                    <View>
                      <Text style={styles.LabelTitle}>work</Text>
                      <Text style={styles.LabelContent}>(123)-345 987 234</Text>
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
    color: "#000",
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
    color: "#0085f7",
    marginLeft: 10,
  },
  itemContainer: {
    backgroundColor: '#FFF',
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
    color: "#0085f7",
  },
  palette: {
    width: "100%",
    // height: 200,
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    // padding: 10,
    // shadowColor: "#8d8d8d",
    // shadowOffset: { width: -5, height: 5},
    // shadowOpacity: .4,
    // shadowRadius: 3,
    // elevation: 2,
  },
  LabelTitle: {
    fontFamily: 'Roboto_400Regular',
    color: '#000',
    fontSize: 12,
    marginHorizontal: 5,
    marginBottom: 1,
    marginTop: 2
  },
  LabelContent: {
    fontFamily: 'Roboto_300Light',
    color: '#0085f7',
    fontSize: 12,
    letterSpacing: 1,
    margin: 5
  }
});

export default ProfilePage;
