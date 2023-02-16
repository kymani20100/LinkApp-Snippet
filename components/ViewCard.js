import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import {
  Ionicons,
  Feather,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import {
  ScrollView,
  Spacer,
  Center,
  Heading,
  Text,
  HStack,
  VStack,
  Icon,
  Box,
  IconButton,
  FlatList,
} from "native-base";

const Touchable = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin: ${(props) => props.theme.space[1]};
  width: 48.6%;
  height: 90px;
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

const ViewCard = ({ props, color }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const active = isOverlayVisible ? 0.8 : 1;

  return (
    <>
      <Touchable
        activeOpacity={1}
        style={[styles.shadow, { opacity: active }]}
        onPress={() => setIsOverlayVisible(false)}
        onLongPress={() => setIsOverlayVisible(true)}>
        <LinearGradient
        
        colors={['#e5eaed', '#e6ebef', '#eef3f6', '#edf2f5', '#e9eef1']}
        style={styles.button}>

        {/* This is the outer  */}
        <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 5, flexDirection: 'column'}}>

            </View>

            <View style={{flex: 1, flexDirection: 'column', backgroundColor: props.column}}>
                <View style={{flex: 2, backgroundColor: props.column, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{position: 'relative', top: -5.5, left: -5.5}}>
                      <IconButton
                        icon={
                          <Icon
                            as={Ionicons}
                            name="shield-checkmark"
                            size="sm"
                            color="#e1e1e1"
                          />
                        }
                      />
                    </Text>
                </View>
                <View style={{flex: 5, backgroundColor: color}}>

                </View>
            </View>
        </View>

      </LinearGradient>
      
      </Touchable>
    </>
  );
};

export default ViewCard;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#6b848f",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 8,
  },
  customFont: {
    fontFamily: "ShortStack_400Regular",
  },
  button: {
    width: '100%',
    height: 90,
  }
});
