import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {View,Text,ScrollView,Image,StyleSheet,TouchableOpacity,FlatList,Dimensions,Vibration} from "react-native";
import {Pressable,Actionsheet,Center,useDisclose,Box,HStack,Avatar,VStack,IconButton,Icon} from "native-base";
import {Ionicons,FontAwesome,Octicons,AntDesign} from "@expo/vector-icons";
import { ListItem } from '@rneui/themed';
import Accordion from "../components/Accordion";

import * as Clipboard from 'expo-clipboard';
import CustomToast from "../components/CustomToast";
import { useNavigation } from '@react-navigation/native';

const DATA = [
  { id: '1', title: 'Call', icon: 'phone', },
  { id: '2', title: 'Message', icon: 'comment', },
  { id: '3', title: 'Share', icon: 'qrcode', },
];

const ProfileScreen = ({route}) => {
    const navigation = useNavigation();

    const { itemId, Params } = route.params;
    const [copiedText, setCopiedText] = useState('');
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedHome, setCopiedHome] = useState(false);
    const [copiedMobile, setCopiedMobile] = useState(false);
    const [copiedWork, setCopiedWork] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

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
    <VStack bg="#201d1a" flex={1} mt={-6}>
        <StatusBar bg="#2e2a25" barStyle="light-content" />
        <Box safeAreaTop bg="#2e2a25" />
    </VStack>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})