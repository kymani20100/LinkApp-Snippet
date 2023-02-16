import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React from 'react';
import { SafeArea } from '../components/SafeArea';
import styled from "styled-components";
import { Avatar, Button, Card } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import {ScrollView, Spacer, Center, Heading, Text, HStack, VStack, Icon, Box, IconButton, FlatList} from "native-base";

import {data, icons} from '../Data/fake-api';


  const RestaurantCard = styled(View)`
      background-color: ${(props) => props.theme.colors.bg.primary};
      margin: ${(props) => props.theme.space[1]};
      width: 48.5%;
      height: 100px;
      border-radius: ${(props) => props.theme.space[1]};
  `;

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  const FavoritesScreen = () => {
    const [selected, setSelected] = React.useState(1);
    
  return (
    
      <VStack>
        <StatusBar bg="#FFF" barStyle="light-content" />
      <Box safeAreaTop bg="#FFF" />
      <HStack bg="#FFF" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="#007cff" />} />
          <Text color="#007cff" fontSize="20" fontWeight="bold">
            LinkApp
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="#007cff" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="#007cff" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="#007cff" />} />
        </HStack>
      </HStack>

      <ScrollView>
        <VStack w="100%" bg="#FFF" space={1}>
          <FlatList data={data} numColumns={2} renderItem={({item}) => <RestaurantCard style={[{backgroundColor: item.background}]}>
        
             <View style={{flexDirection: 'column', justifyContent: 'space-between', padding: 3,}}>

                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <FontAwesome5 name="user-circle" size={24} color="black" />
                    <Ionicons name="md-list-circle" size={24} color="black" />
                </View>

                <View style={{marginTop: 8,}}>
                  <Text>One</Text>
                </View>

             </View>
              
            </RestaurantCard>} keyExtractor={item => item.id} />
        </VStack>
      </ScrollView>
    </VStack>
    
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({})