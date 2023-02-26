import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

const Fab = () => {
  const actions = [
    {
      text: 'Option 1',
      icon: require("../assets/qr-code.png"),
      name: 'option1',
      position: 1,
      color: "#ff4081",
      textBackground: "#ff4081",  // Change sub button background color here
    },
    {
      text: 'Option 2',
      icon: require("../assets/qr-code.png"),
      name: 'option2',
      position: 2,
      color: "#ff4081",
      textBackground: "#ff4081",  // Change sub button background color here
    },
    {
      text: 'Option 3',
      icon: require("../assets/qr-code.png"),
      name: 'option3',
      position: 3,
      color: "#ff4081",
      textBackground: "#ff4081", // Change sub button background color here
    },
  ];

  return (
    <View style={styles.container}>
      <FloatingAction
        actions={actions}
        color="#ff4081"
        onPressItem={(name) => console.log(`Pressed ${name}`)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Fab;
