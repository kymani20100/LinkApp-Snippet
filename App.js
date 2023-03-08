import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
// import all the components we are going to use
import {SafeAreaView,StyleSheet,View,Text,Image,Button,AppRegistry} from 'react-native';
import Toast from 'react-native-toast-message';
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
  Roboto_300Light_Italic,
  Roboto_900Black
} from "@expo-google-fonts/roboto";
import { Fondamento_400Regular } from "@expo-google-fonts/fondamento";
import { ShortStack_400Regular } from "@expo-google-fonts/short-stack";
import {
  CrimsonText_400Regular,
  CrimsonText_600SemiBold,
  CrimsonText_700Bold,
} from "@expo-google-fonts/crimson-text";

const slides = [
  {
    key: 's1',
    title: 'ACCURACY',
    text: 'Accurate Contact Info Sharing in a Snap! Goodbye to manual typing and cluttered address books with LinkApp.',
    image: require('./assets/img/intro_1.png'),
    backgroundColor: '#201d1a',
  },
  {
    key: 's2',
    title: 'SEAMLESS',
    text: 'Our innovative solution combines a sleek user-friendly interface with advanced filtering to help you quickly and easily find the information you need.',
    image: require('./assets/img/intro_2.png'),
    backgroundColor: '#201d1a',
  },
  {
    key: 's4',
    title: 'PROFILES',
    text: 'Discover the many layers of others from their interests and hobbies to their goals and aspirations. Connect and learn what makes others truly special.',
    image: require('./assets/img/intro_4.png'),
    backgroundColor: '#201d1a',
  }
];

import FavoriteScreen from "./screens/FavoriteScreen";
import KeypadScreen from "./screens/KeypadScreen";
import Filter from "./screens/Filter";
import Alphabet from "./screens/Alphabet";
import Section from "./screens/Section"; // Left Columned laid alphabet
import AlphabetList from "./screens/AlphabetList";
import JackpotSearch from "./screens/JackpotSearch";
import ProfilePage from "./screens/ProfilePage";
// import Profile from "./screens/Profile";
// import ProfileDetails from "./screens/ProfileDetails"
import IOS from "./screens/IOS";
import FormGenerator from "./screens/FormGenerator";
import ContactForm from "./screens/ContactForm";
import ImageForm from "./screens/ImageForm";
import Shrinking from "./screens/Shrinking";
import PhoneNumberInput from "./screens/PhoneNumberInput";
import Pinterest from "./screens/Pinterest";
import FloatingTabBar from "./screens/FloatingTabBar";
import FlatListWithDialog from "./screens/FlatListWithDialog";
import Dialog from "./screens/Dialog";
import Upgrade from "./screens/Upgrade";
import Segment from "./screens/Segment";
import FormField from "./screens/FormField";
import ActionSheet from "./screens/ActionSheet";
import ProfileRegistration from "./screens/ProfileRegistration";
import ProfilePicture from "./screens/ProfilePicture";
import ShareItemsQRCode from "./screens/ShareItemsQRCode";
// import ShareItemsAndScanQRCode from "./screens/ShareItemsAndScanQRCode";
import QRFunctionality from "./screens/QRFunctionality";
import Utility from "./screens/Utility";
import NewSection from "./screens/NewSection";
import Updated from "./screens/Updated";
import Merged from "./screens/Merged";
import Merger from "./screens/Merger";
import LongPress from "./screens/LongPress";
import SearchScreen from "./screens/SearchScreen";
import Fab from "./screens/Fab";

///////////////////////////////////////
import Loading from "./screens/Loading";
import ContactSharing from "./screens/ContactSharing";
import Sharing from "./screens/Sharing";
import ContactInformation from "./screens/ContactInformation";
import IdentifyingInformationForm from "./screens/IdentifyingInformationForm";
import DemographicInformationForm from "./screens/DemographicInformationForm";
import Settings from "./screens/Settings";
import SettingsPage from "./screens/SettingsPage";
import ProfileScreen from "./screens/ProfileScreen";
import ModalPicture from "./screens/ModalPicture";

// Production
import ContactScreen from "./screens/ContactScreen";
import StartScreen from "./screens/StartScreen";
import SignUpScreen from "./screens/SignUpScreen";

// redux
import { Provider } from 'react-redux';
import store from "./store/store";

// Revised
import Contacts from "./screens/Contacts";

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

  // TOAST CONFIG
  const toastConfig = {
    success: ({ text1, ...rest }) => (
      <View style={[styles.toastContainer, styles.successToast]}>
        <Text style={styles.toastText}>{text1}</Text>
      </View>
    ),
  };

  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_300Light_Italic,
    Roboto_900Black,
    Fondamento_400Regular,
    ShortStack_400Regular,
    CrimsonText_400Regular,
    CrimsonText_600SemiBold,
    CrimsonText_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
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
        <Provider store={store}>
            <ThemeProvider theme={theme}>
              <NativeBaseProvider>
                <PaperProvider>
                  <NavigationContainer>
                    <Stack.Navigator >
                      <Stack.Screen options={{ headerShown: false }} name="Home" component={StartScreen} />
                      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
                      <Stack.Screen 
                        options={{ 
                                headerShown: true, 
                                headerStyle: {backgroundColor: '#201d1a'},
                                headerTintColor: '#fbcf9c',
                                headerTitleStyle: {
                                fontFamily: "Roboto_700Bold",}, }} 
                        name="Profile" component={ProfilePage} />
                      <Stack.Screen options={{ headerShown: false }} name="Pinterest" component={Pinterest} />
                      <Stack.Screen options={{ headerShown: false }} name="Contacts" component={Contacts} />
                      <Stack.Screen options={{ headerShown: true }} name="Screen" component={ProfileScreen} />
                    </Stack.Navigator>
                    <Toast config={toastConfig} />
                  </NavigationContainer>
                </PaperProvider>
              </NativeBaseProvider>
            </ThemeProvider>
        </Provider>
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
    color: '#fbcf9c',
    textAlign: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10
  },
  introTitleStyle: {
    fontSize: 25,
    color: '#fbcf9c',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: "Roboto_700Bold",
  },
  // Toast Here
  toastContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  successToast: {
    backgroundColor: '#201d1a', // set your desired color here
  },
  toastText: {
    color: '#fbcf9c',
  },
});
