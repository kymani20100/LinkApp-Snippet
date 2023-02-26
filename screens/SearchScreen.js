import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const SearchScreen = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchHistory, setSearchHistory] = useState([]);

//   useEffect(() => {
//     // Load the search history from AsyncStorage when the component mounts
//     AsyncStorage.getItem('searchHistory').then(history => {
//       if (history) {
//         setSearchHistory(JSON.parse(history));
//       }
//     });
//   }, []);

//   const handleSearch = () => {
//     // Add the current search term to the search history
//     const newSearchHistory = [searchTerm, ...searchHistory.slice(0, 4)];
//     setSearchHistory(newSearchHistory);

//     // Save the updated search history to AsyncStorage
//     AsyncStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
//   };

//   const handleDelete = index => {
//     // Remove the search term at the given index from the search history
//     const newSearchHistory = [...searchHistory.slice(0, index), ...searchHistory.slice(index + 1)];
//     setSearchHistory(newSearchHistory);

//     // Save the updated search history to AsyncStorage
//     AsyncStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
//   };

//   return (
//     <View style={{marginTop: 30}}>
//       <TextInput
//         placeholder="Search"
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//         onSubmitEditing={handleSearch}
//       />
//       {searchHistory.length > 0 && (
//         <View>
//           <Text>Recent Searches:</Text>
//           {searchHistory.map((term, index) => (
//             <TouchableOpacity key={index} onPress={() => handleDelete(index)}>
//               <Text>{term}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// export default SearchScreen;


// const MAX_SEARCH_HISTORY_LENGTH = 10;

// const SearchScreen = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchHistory, setSearchHistory] = useState([]);

//   useEffect(() => {
//     // Load the search history from AsyncStorage when the component mounts
//     AsyncStorage.getItem('searchHistory').then(history => {
//       if (history) {
//         setSearchHistory(JSON.parse(history));
//       }
//     });
//   }, []);

//   const handleSearch = () => {
//     // Add the current search term to the search history
//     const newSearchHistory = [searchTerm, ...searchHistory.slice(0, MAX_SEARCH_HISTORY_LENGTH - 1)];
//     setSearchHistory(newSearchHistory);

//     // Save the updated search history to AsyncStorage
//     AsyncStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
//   };

//   const handleDelete = index => {
//     // Remove the search term at the given index from the search history
//     const newSearchHistory = [...searchHistory.slice(0, index), ...searchHistory.slice(index + 1)];
//     setSearchHistory(newSearchHistory);

//     // Save the updated search history to AsyncStorage
//     AsyncStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
//   };

//   return (
//     <View style={{marginTop: 30}}>
//       <TextInput
//         placeholder="Search"
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//         onSubmitEditing={handleSearch}
//       />
//       {searchHistory.length > 0 && (
//         <View>
//           <Text>Recent Searches:</Text>
//           {searchHistory.map((term, index) => (
//             <TouchableOpacity key={index} onPress={() => handleDelete(index)}>
//               <Text>{term}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// export default SearchScreen;

const MAX_SEARCH_HISTORY_LENGTH = 5;

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    // Load the search history from AsyncStorage when the component mounts
    AsyncStorage.getItem('searchHistory').then(history => {
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    });
  }, []);

  const handleSearch = () => {
    // Remove any duplicates of the current search term from the search history
    const newSearchHistory = [searchTerm, ...searchHistory.filter(term => term !== searchTerm).slice(0, MAX_SEARCH_HISTORY_LENGTH - 1)];
    setSearchHistory(newSearchHistory);

    // Save the updated search history to AsyncStorage
    AsyncStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
  };

  const handleDelete = index => {
    // Remove the search term at the given index from the search history
    const newSearchHistory = [...searchHistory.slice(0, index), ...searchHistory.slice(index + 1)];
    setSearchHistory(newSearchHistory);

    // Save the updated search history to AsyncStorage
    AsyncStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
  };

  return (
    <View style={{marginTop: 30}}>
      <TextInput
        placeholder="Search"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch}
      />
      {searchHistory.length > 0 && (
        <View>
          <Text>Recent Searches:</Text>
          {searchHistory.map((term, index) => (
            <TouchableOpacity key={index} onPress={() => handleDelete(index)}>
              <Text>{term}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SearchScreen;

