import React, { useState } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

const TextOverflow = ({ children }) => {
  const [fontSize, setFontSize] = useState(32);
  const windowWidth = Dimensions.get('window').width;

  const handleTextLayout = e => {
    const { width } = e.nativeEvent.layout;
    if (width > windowWidth) {
      setFontSize(fontSize - 1);
    }
  };

  return (
    <View>
      <Text style={[{fontSize}, {fontFamily: 'Roboto_400Regular',color: '#020202',}]} onLayout={handleTextLayout}>
        {children}
      </Text>
    </View>
  );
};

export default TextOverflow;

