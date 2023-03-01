// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Accordion = ({ title, content }) => {
//   const [expanded, setExpanded] = useState(false);

//   const handlePress = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.titleContainer} onPress={handlePress}>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.icon}>{expanded ? '-' : '+'}</Text>
//       </TouchableOpacity>
//       <View>
//         {expanded && <Text style={styles.content}>{content}</Text>}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginVertical: 10,
//     overflow: 'hidden',
//     width: '100%'
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#f2f2f2',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   icon: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   content: {
//     paddingVertical: 10,
//     paddingHorizontal: 5,
//   },
// });

// export default Accordion;

import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const Accordion = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    const toValue = expanded ? 0 : 1;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setExpanded(!expanded);
    });
  };

  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // set the height of the content here
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleContainer} onPress={handlePress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.icon}>{expanded ? '-' : '+'}</Text>
      </TouchableOpacity>
      <Animated.View style={{ height: contentHeight, overflow: 'hidden' }}>
        <View style={styles.content}>{content}</View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginVertical: 10,
    overflow: 'hidden',
    width: '100%'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 10,
  },
});

export default Accordion;

