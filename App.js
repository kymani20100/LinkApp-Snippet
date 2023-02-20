import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  AppRegistry
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { ThemeProvider } from "styled-components";
import { name as appName } from "./app.json";
import { NativeBaseProvider, Box } from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./styling/theme";
import { Provider as PaperProvider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
} from "@expo-google-fonts/roboto";
import { Fondamento_400Regular } from "@expo-google-fonts/fondamento";
import { ShortStack_400Regular } from "@expo-google-fonts/short-stack";
import {
  CrimsonText_400Regular,
  CrimsonText_600SemiBold,
  CrimsonText_700Bold,
} from "@expo-google-fonts/crimson-text";

function RecentsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Recents!</Text>
    </View>
  );
}

function ContacttScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contacts!</Text>
    </View>
  );
}

function KeypadDial() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contacts!</Text>
    </View>
  );
}

const slides = [
  {
    key: 's1',
    title: 'Accuracy',
    text: 'Accurate Contact Info Sharing in a Snap! Goodbye to manual typing and cluttered address books with LinkApp.',
    image: require('./assets/img/intro_1.png'),
    backgroundColor: '#f6437b',
  },
  {
    key: 's2',
    title: 'Effortlessly',
    text: 'Our innovative solution combines a sleek user-friendly interface with advanced filtering to help you quickly and easily find the information you need.',
    image: require('./assets/img/intro_2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's4',
    title: 'Profiles',
    text: 'Discover the many layers of others from their interests and hobbies to their goals and aspirations. Connect and learn what makes others truly special.',
    image: require('./assets/img/intro_4.png'),
    backgroundColor: '#20d2bb',
  }
];

import FavoriteScreen from "./screens/FavoriteScreen";
import KeypadScreen from "./screens/KeypadScreen";
import Filter from "./screens/Filter";
import Alphabet from "./screens/Alphabet";
import Section from "./screens/Section"; // Left Columned laid alphabet
import Jackpot from "./screens/Jackpot";
import JackpotSearch from "./screens/JackpotSearch";
import ProfilePage from "./screens/ProfilePage";
import Profile from "./screens/Profile";
import IOS from "./screens/IOS";
import FormGenerator from "./screens/FormGenerator";
import ContactForm from "./screens/ContactForm";
import ImageForm from "./screens/ImageForm";
import Shrinking from "./screens/Shrinking";
import PhoneNumberInput from "./PhoneNumberInput";
import Pinterest from "./screens/Pinterest";
import FloatingTabBar from "./screens/FloatingTabBar";
import FlatListWithDialog from "./screens/FlatListWithDialog";
import Dialog from "./screens/Dialog";
import Upgrade from "./screens/Upgrade";
import Segment from "./screens/Segment";
import FormField from "./screens/FormField";


// Production
import ContactScreen from "./screens/ContactScreen";
import StartScreen from "./screens/StartScreen";
import SignUpScreen from "./screens/SignUpScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabCollection = () => {
  return (
    <Tab.Navigator
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      if (route.name === "Favorites") {
                        iconName = focused ? "ios-star" : "ios-star-sharp";
                      } else if (route.name === "Recents") {
                        iconName = focused ? "ios-time" : "ios-time-sharp";
                      } else if (route.name === "Contacts") {
                        iconName = focused
                          ? "ios-person-circle"
                          : "ios-person-circle-sharp";
                      } else if (route.name === "Keypad") {
                        iconName = focused ? "ios-keypad" : "ios-keypad";
                      }
                      // You can return any component that you like here!
                      return (
                        <Ionicons name={iconName} size={size} color={color} />
                      );
                    },
                    tabBarActiveTintColor: "#015ba8",
                    tabBarInactiveTintColor: "#0085f7",
                    tabBarLabelStyle: {
                      fontFamily: "Roboto_400Regular",
                      marginBottom: 3,
                    },
                    tabBarStyle: { backgroundColor: "#f7f7f7" },
                  })}
                >
                  <Tab.Screen
                    options={{ headerShown: false }}
                    name="Favorites"
                    component={FlatListWithDialog}
                  />
                  <Tab.Screen
                    options={{ headerShown: false }}
                    name="Recents"
                    component={ContactForm}
                  />
                  <Tab.Screen
                    options={{ headerShown: false }}
                    name="Contacts"
                    component={FormField}
                  />
                  <Tab.Screen
                    options={{ headerShown: false }}
                    name="Keypad"
                    component={KeypadScreen}
                  />
                </Tab.Navigator>
  )
}

export default function App() {
  // THIS IS THE USETATE FOR THE INTRO BLOCK
  const [showRealApp, setShowRealApp] = useState(false);

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
    Fondamento_400Regular,
    ShortStack_400Regular,
    CrimsonText_400Regular,
    CrimsonText_600SemiBold,
    CrimsonText_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // THIS IS FOR THE INTRO BLOCK
  const onDone = () => {
    setShowRealApp(true);
  };

  // THIS IS FOR THE INTRO BLOCK
  const onSkip = () => {
    setShowRealApp(true);
  };

  // THIS IS FOR THE INTRO BLOCK
  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <ThemeProvider theme={theme}>
          <NativeBaseProvider>
            <PaperProvider>
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen options={{ headerShown: false }} name="Home" component={StartScreen} />
                  <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
                  <Stack.Screen options={{ headerShown: false }} name="Floating" component={FloatingTabBar} />
                  <Stack.Screen options={{ headerShown: false }} name="Pinterest" component={Pinterest} />
                </Stack.Navigator>
              </NavigationContainer>
            </PaperProvider>
          </NativeBaseProvider>
        </ThemeProvider>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: "Roboto_700Bold",
  },
});
