import { StatusBar } from "expo-status-bar";
import React, { Component, useState, useRef, useEffect } from "react";
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
  StyleSheet,
  Linking,
  ScrollView,
  Keyboard,
  LayoutAnimation,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import nicecolors from "nice-color-palettes";
const colors = [
  ...nicecolors[3].slice(1, nicecolors[1].length),
  ...nicecolors[55].slice(0, 3),
];
import { Avatar, Button, Card, TextInput } from "react-native-paper";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import {
  Spacer,
  Center,
  Heading,
  HStack,
  Stack,
  VStack,
  Icon,
  Input,
  Box,
  Text,
  IconButton,
  FlatList,
  Divider,
  Pressable,
  Image,
} from "native-base";

// COMPONENTS
import KeyboardShift from "../components/KeyboardShift";

const SignUpScreen = ({ navigation }) => {
  const [text, setText] = React.useState("");
  const [show, setShow] = React.useState(false);

  return (
    <VStack bg="#FFF" flex={1}>
      <StatusBar bg="#FFF" barStyle="light-content" />
      <Box safeAreaTop bg="#FFF" />

      <Center
        bg="#FFF"
        px="1"
        py="0"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <Text style={styles.ApplicationName} fontSize="2xl">
          Create A New Account
        </Text>
      </Center>

      <ScrollView>
        <KeyboardShift style={{ width: "100%" }}>
          {() => (
            <Stack space={4} w="90%" maxW="300px" mx="auto" my="4">
              <Center
                bg="#FFF"
                px="1"
                py="3"
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                maxW="350"
              >
                <Image
                  source={require("../assets/SignUp.png")}
                  alt="Alternate Text"
                  size="xl"
                />
              </Center>
              <Input
                variant="outline"
                size="xs"
                placeholder="Enter full name"
              />

              <Input
                variant="outline"
                size="xs"
                keyboardType='numeric' 
                placeholder="Enter phone number"
              />

              <Input
                variant="outline"
                size="xs"
                placeholder="Enter email"
              />
              <Input
                variant="outline"
                size="xs"
                placeholder="Enter password"
                type={show ? "text" : "password"}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={show ? "visibility" : "visibility-off"}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
              />

              <Button
                style={{ borderRadius: 4 }}
                icon="camera"
                mode="elevated"
                buttonColor="#0085f7"
                textColor="#FFF"
                onPress={() => {navigation.navigate('Contacts')}}
              >
                Sign Up
              </Button>

              <Center
                bg="#FFF"
                px="1"
                py="1"
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                maxW="350"
              >
                <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
                  <Text style={styles.Typo} fontSize="xs">
                    Already have an account? Log in.
                  </Text>
                </TouchableOpacity>
              </Center>
            </Stack>
          )}
        </KeyboardShift>
      </ScrollView>
    </VStack>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  ApplicationName: {
    fontFamily: "Roboto_900Black",
    letterSpacing: 1,
    color: "#0085f7",
  },
  Typo: {
    fontFamily: "Roboto_400Regular",
    letterSpacing: 1,
    color: "#A1A1A1",
  },
});
