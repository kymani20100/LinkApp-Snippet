import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
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
  FlatList,
} from "native-base";

const KeypadScreen = () => {
  return (
    <VStack flex={1}>
      <StatusBar bg="#425c5a" barStyle="light-content" />
      <Box safeAreaTop bg="#425c5a" />
      <HStack
        bg="#425c5a"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <HStack alignItems="center">
          <Text>LinkApp</Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={Ionicons}
                name="md-person-add"
                size="md"
                color="#ffcea2"
              />
            }
          />
          <IconButton
            icon={<Icon as={Fontisto} name="trash" size="md" color="#ffcea2" />}
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="md"
                color="#ffcea2"
              />
            }
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default KeypadScreen;

const styles = StyleSheet.create({});
