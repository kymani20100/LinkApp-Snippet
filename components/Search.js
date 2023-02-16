import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Header
        centerComponent={
          <TextInput
            style={styles.input}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search"
            placeholderTextColor="#fff"
          />
        }
        containerStyle={styles.headerContainer}
      />
      <Text>Other content here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#333',
  },
  input: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 8,
    flex: 1,
  },
});

export default Search;
