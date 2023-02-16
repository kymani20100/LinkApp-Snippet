import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState, useLayoutEffect, useCallback} from 'react'
import {
    useNavigation,
    useFocusEffect,
  } from '@react-navigation/native';

const Filter = () => {
const navigation = useNavigation();
const [data, setData] = useState([]);
const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
      fetchData("https://randomuser.me/api/?results=20");
    }, [])

    useEffect(() => {
      navigation.setOptions({
        headerLargeTitle: true,
        headerTitle: "Home",
        headerRight: () => (
            <TouchableOpacity
                onPress={() => navigation.navigate("Contacts")}
                style={{
                    marginRight: 10,
                    backgroundColor: 'purple',
                    width: 30,
                    height: 30, 
                    borderRadius: 10,
                    justifyContent: 'center'
                }}
            >
                <Text style={{fontSize: 15, textAlign: "center", color: "white"}}>+</Text>
            </TouchableOpacity>
        ),
        headerSearchBarOptions: {
            placeholder: "Search",
            onChangeText: (event) => {
                searchFilterFunction(event.nativeEvent.text);
            },
          },

      });
    }, [navigation]);
    
    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setFilteredData(json.results);
        } catch (error) {
            console.error(error);
        }
    }

    const searchFilterFunction = (text) => {
        if(text){
            const newData = data.filter(item => {
                const itemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredData(newData);
        }else {
            setFilteredData(data);
        }
    }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.textFriends}>Friends</Text>
      {filteredData.map((item, index) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <Image style={styles.image} source={{uri: item.picture.large}} />
                <View>
                    <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
                    <Text style={styles.textEmail}>{item.login.username}</Text>
                </View>
            </View>
        )
      })}
    </ScrollView>
  )
}

export default Filter

const styles = StyleSheet.create({
    textFriends: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 10
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textName: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "600"
    },
    textEmail: {
        fontSize: 14,
        marginLeft: 10,
        color: "gray"
    }
})