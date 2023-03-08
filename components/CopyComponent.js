import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { HStack } from 'native-base';
import * as Clipboard from 'expo-clipboard';
import CustomToast from "../components/CustomToast";

const CopyComponent = ({label, content}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

//   const copyToClipboard = (text, label) => {
//     // Implement your copy to clipboard logic here
//     setCopiedEmail(true);
//   };

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


  return (
    <View style={{marginBottom: 10}}>
      <HStack justifyContent={'space-between'} alignItems="center" w="100%">
        <Text style={styles.LabelTitle}>{label}</Text>
      </HStack>

      <TouchableOpacity onPress={() => copyToClipboard('kymani.emmanuel@gmail.com', 'email')}>
        <HStack flex={1} justifyContent={'space-between'} alignItems="center" w="100%" maxW="350">
          <Text style={styles.LabelContent}>{content}</Text>
          <View style={styles.Clipbox}>
            {copiedEmail === true ? (
              <Image source={require('../assets/img/icons/tick.png')} style={{width: 12, height: 12}} />
            ) : (
              <Image source={require('../assets/img/icons/clipboard.png')} style={{width: 12, height: 12}} />
            )}
          </View>
        </HStack>
      </TouchableOpacity>
    </View>
  );
};

export default CopyComponent;

const styles = StyleSheet.create({
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
})
