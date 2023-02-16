import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styled from "styled-components";
import { Avatar } from 'react-native-paper';
import { Ionicons, Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import {ScrollView, Spacer, Center, Heading, Text, HStack, VStack, Icon, Box, IconButton, FlatList} from "native-base";

const Touchable = styled(TouchableOpacity)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin: ${(props) => props.theme.space[1]};
    width: 48.6%;
    height: 100px;
    border-radius: ${(props) => props.theme.space[1]};
`;

const ContactColumn = styled(View)`
    flex-direction: column;
    justify-content: space-between;
    padding: 3px;
`;

const ColumnTop = styled(View)`
    flex-direction: row;
    justify-content: space-between;
`;

const ColumnBottom = styled(View)`
    margin-top: 1px;
    flex-direction: column;
    justify-content: space-between;
`;

const ImageView = styled(View)`
    flex-direction: row;
    justify-content: space-evenly;
`;

const DetailsView = styled(View)`
    margin-top: 6px;
    flex-direction: row;
    justify-content: space-evenly;
`;



const ViewCard = ({props, color}) => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
   
  return (
    <Touchable style={[styles.shadow,{backgroundColor: color}]} onLongPress={() => setIsOverlayVisible(true)}
        onPressOut={() => setIsOverlayVisible(false)}
      >
        <ContactColumn>
            <ColumnTop>
                <Ionicons name="star-sharp" size={14} color="#FFF" />
                <Feather name="check" size={24} color="#FFF" />
            </ColumnTop>
            <ColumnBottom>

                <ImageView>
                    <Avatar.Image size={40} source={{ uri:props.avatarUrl}} />
                </ImageView>

                <DetailsView>

                    <View style={{}}>
                        <Text _dark={{color: "warmGray.50"}} color="coolGray.800" bold>
                            {props.fullName}
                        </Text>
                    </View>

                </DetailsView>
            </ColumnBottom>
        </ContactColumn>
    </Touchable>
  )
}

export default ViewCard

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#a5a5a6",
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: .5,
        shadowRadius: 20,
        elevation: 5,
    }
})