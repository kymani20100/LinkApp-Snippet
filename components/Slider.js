import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Image, FlatList } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width;

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleIndexChange = (index) => {
    setIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const scrollPosition = event.nativeEvent.contentOffset.x;
          const currentIndex = scrollPosition / imageWidth;
          setIndex(currentIndex);
        }}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
      <View style={styles.pagination}>
        {images.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationItem,
              i === index && styles.paginationItemSelected,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: imageWidth,
    height: imageWidth * 0.6,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 8,
    left: 0,
    right: 0,
    paddingHorizontal: 8,
  },
  paginationItem: {
    backgroundColor: '#ccc',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  paginationItemSelected: {
    backgroundColor: '#000',
  },
});

export default Slider;

// You can use this component by passing an array of image URLs as the images prop. For example:

<Slider images={['https://example.com/image1.jpg', 'https://example.com/image2.jpg', 'https://example.com/image3.jpg']} />
