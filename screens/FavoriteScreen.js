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

import { data, icons } from "../Data/fake-api";
import ViewCard from "../components/ViewCard";

export default class FavoriteScreen extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  toggleOpen = () => {
    const toValue = this._open ? 0 : 1;

    Animated.timing(this.state.animation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();

    this._open = !this._open;
  };
  render() {
    const bgStyle = {
      transform: [
        {
          scale: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 30],
          }),
        },
      ],
    };

    const reloadStyle = {
      transform: [
        {
          scale: this.state.animation,
        },
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70],
          }),
        },
      ],
    };

    const OrderStyle = {
      transform: [
        {
          scale: this.state.animation,
        },
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140],
          }),
        },
      ],
    };

    const labelPositionInterplate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-30, -90],
    });

    const opacityInterpolate = this.state.animation.interpolate({
      inputRange: [0, 0.2, 1],
      outputRange: [0, 0, 1],
    });

    const labelStyle = {
      opacity: opacityInterpolate,
      transform: [
        {
          translateX: labelPositionInterplate,
        },
      ],
    };

    return (
      <VStack bg="#FFFFFF" flex={1}>
        <StatusBar bg="#0a1c29" barStyle="light-content" />
        <Box safeAreaTop bg="#0a1c29" />
        <HStack
          bg="#0a1c29"
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
          maxW="350"
        >
          <HStack alignItems="center">
            <Text style={styles.pageTitle}>LinkApp</Text>
          </HStack>
          <HStack>
            <IconButton
              icon={
                <Icon
                  as={Ionicons}
                  name="md-person-add"
                  size="sm"
                  color="#e1e1e1"
                />
              }
            />
            <IconButton
              icon={
                <Icon
                  as={Ionicons}
                  name="ios-trash"
                  size="sm"
                  color="#e1e1e1"
                />
              }
            />
            <IconButton
              icon={
                <Icon
                  as={MaterialIcons}
                  name="more-vert"
                  size="sm"
                  color="#e1e1e1"
                />
              }
            />
          </HStack>
        </HStack>

        <ScrollView>
          <View>
            <FlatList
              data={data}
              numColumns={2}
              renderItem={({ item, index }) => (
                <ViewCard props={item} color={item.background} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>

        <Animated.View style={[styles.background, bgStyle]} />
        <TouchableWithoutFeedback onPress={() => {}}>
          <Animated.View style={[styles.button, styles.other, OrderStyle]}>
            <Animated.Text style={[styles.label, labelStyle]}>
              Reload
            </Animated.Text>
            <MaterialCommunityIcons
              name="email-receive"
              size={20}
              color="#294258"
            />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => {}}>
          <Animated.View style={[styles.button, styles.other, reloadStyle]}>
            <Animated.Text style={[styles.label, labelStyle]}>
              Order
            </Animated.Text>
            <FontAwesome name="send-o" size={24} color="#294258" />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.toggleOpen}>
          <View style={[styles.button, styles.pay]}>
            <Animated.Text style={[styles.label, labelStyle]}>
              Pay
            </Animated.Text>
            <Text style={styles.payText}>
              <Ionicons name="ios-qr-code" size={20} color="#294258" />
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </VStack>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: "rgba(0,0,0,.2)",
    position: "absolute",
    width: 60,
    height: 60,
    bottom: 20,
    right: 20,
    borderRadius: 30,
  },
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#333",
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  other: {
    backgroundColor: "#FFF",
  },
  pay: {
    backgroundColor: "#FFF",
  },
  payText: {
    color: "#FFF",
  },
  label: {
    color: "#FFF",
    position: "absolute",
    fontSize: 18,
    backgroundColor: "transparent",
  },
  pageTitle: {
    fontSize: 20,
    color: "#f9c206",
    marginLeft: 10,
    fontFamily: "CrimsonText_700Bold",
  },
});
