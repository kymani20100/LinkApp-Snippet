import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store/reducers/reducer';

const Card = (data) => {
    const navigation = useNavigation();
    const { props } = data;

    const [cardSelected, SetCardSelected] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    // Redux
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);

    useEffect(() => {
      const isSelected = items.some((item) => item.id === props.id);
      SetCardSelected(isSelected);
    }, [items]);

    const HandleLongPress = () => {
      const itemId = props.id;
      Vibration.vibrate(100);
      if (!isPressed) {
        dispatch(addItem({ id: itemId, name: props.name }));
      } else {
        dispatch(removeItem(itemId));
      }
      setIsPressed(!isPressed);
      console.log('Long Pressed');
    };

    const HandleShortPress = () => {
      const itemId = props.id;
      if (items.length && !isPressed) {
        Vibration.vibrate(100);
        dispatch(addItem({ id: itemId, name: props.name }));
        setIsPressed(true);
        Vibration.vibrate(100);
      } else if (isPressed) {
        Vibration.vibrate(100);
        dispatch(removeItem(itemId));
        setIsPressed(false);
      } else {
        Vibration.vibrate(50);
        navigation.navigate('Profile', { itemId: itemId, Params: props });
      }
    };
    
    // const styles = isPressed ? stylesPressed : stylesUnpressed;
    const styles = cardSelected ? stylesPressed : stylesUnpressed;

    
  return (
    <TouchableOpacity style={[styles.touchableBg]} onLongPress={HandleLongPress} onPress={HandleShortPress}>
        <View style={[styles.contactItem]}>
            <Text style={[styles.contactList]}>{props.name}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Card

const stylesUnpressed = StyleSheet.create({
    touchableBg: {
        backgroundColor: '#2e2a25',
    },
    contactItem: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        height: 40,
        width: '95%',
        marginLeft: 10,
        backgroundColor: '#2e2a25',
        justifyContent: 'center',
        borderBottomColor: '#161412',
        borderBottomWidth: 0.5,
    },
      contactList: {
        fontFamily: "Roboto_300Light",
        color: "#fbcf9c",
        letterSpacing: 1,
    },
  });
  
  const stylesPressed = StyleSheet.create({
    touchableBg: {
        backgroundColor: '#2a2723',
    },
    contactItem: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        height: 40,
        width: '95%',
        marginLeft: 10,
        backgroundColor: '#2a2723',
        justifyContent: 'center',
        borderBottomColor: '#161412',
        borderBottomWidth: 0.5,
    },
      contactList: {
        fontFamily: "Roboto_400Regular",
        color: "#f6a344",
        letterSpacing: 1,
    },
  });