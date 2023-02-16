import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React from 'react';
import { SafeArea } from '../components/SafeArea';
import styled from "styled-components";
import {  Card } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Fontisto, Feather } from '@expo/vector-icons';
import {ScrollView, Input, Center, Heading, Text, HStack, VStack, Icon, Box, IconButton, FlatList} from "native-base";
import { ListItem, Button, Avatar, } from '@rneui/themed';

  const ListItems = ({props}) => {
    const [selected, setSelected] = React.useState(1);
    
  return (
    <ListItem.Swipeable
        leftContent={(reset) => (<Button title="Call" onPress={() => reset()} icon={{ name: 'call', color: 'white' }} buttonStyle={{ minHeight: '100%' }} /> )}
        rightContent={(reset) => (<Button title="Delete" onPress={() => reset()} icon={{ name: 'delete', color: 'white' }} buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }} />)}
        topDivider containerStyle={{ backgroundColor: '#ededed'}}>
            <Avatar rounded source={{ uri: props.avatarUrl }}  />
            <ListItem.Content>
            <ListItem.Title style={{fontSize: 14, color: "#414048", fontFamily: 'Roboto_500Medium'}}>{props.fullName}</ListItem.Title>
            <ListItem.Subtitle style={{fontSize: 11, color: "#0c7ef3", fontFamily: 'Roboto_400Regular'}}>{props.recentText}, {props.timeStamp},</ListItem.Subtitle>
        </ListItem.Content>

        <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{backgroundColor: props.background, paddingVertical: 5, marginRight: 2, paddingHorizontal: 10, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, color: "#FFF"}}>
                <Text style={{color: "#FFF"}}>
                <Feather name="phone-call" size={18} color="#FFF" />
                </Text>
          </View>
          <View style={{backgroundColor: '#0c7ef3',paddingVertical: 5, paddingHorizontal: 10, borderTopRightRadius: 20, borderBottomRightRadius: 20, color: "#FFF"}}>
                <Text style={{color: "#FFF"}}>
                    <MaterialIcons name="video-call" size={24} color="#FFF" />
                </Text>
          </View>
        </View>

    </ListItem.Swipeable>
  )
}

export default ListItems

const styles = StyleSheet.create({})