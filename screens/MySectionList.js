import React, { useState, useRef } from 'react';
import {
  SectionList,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const MySectionList = ({ data }) => {
  const [search, setSearch] = useState('');
  const sectionListRef = useRef();

  const handleSearch = (text) => {
    setSearch(text);
  };

  const handleScrollToIndex = (index) => {
    sectionListRef.current.scrollToLocation({
      sectionIndex: index,
      itemIndex: 0,
      animated: true,
    });
  };

  const renderSectionHeader = ({ section }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => alert(item.name)}>
      <View style={styles.itemIconContainer}>
        <Text style={styles.itemIcon}>{item.name[0]}</Text>
      </View>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const filteredData = data ? data.filter((section) =>
    section.data.some((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  ) : [];

  const alphabet = filteredData.map((section) => section.title[0].toUpperCase());

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={search}
        onChangeText={handleSearch}
      />
      <SectionList
        ref={sectionListRef}
        sections={filteredData}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.alphabetContainer}>
        {alphabet.map((letter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              const sectionIndex = filteredData.findIndex((section) => section.title[0].toUpperCase() === letter);
              if (sectionIndex >= 0) {
                handleScrollToIndex(sectionIndex);
              }
            }}
          >
            <Text style={styles.alphabetText}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchInput: {
    height: 40,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
  },
  sectionHeaderContainer: {
    height: 32,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    paddingLeft: 16,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  itemIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  itemIcon: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemText: {
  fontSize: 16,
  },
  alphabetContainer: {
  position: 'absolute',
  top: 48,
  bottom: 0,
  right: 0,
  width: 32,
  backgroundColor: 'transparent',
  justifyContent: 'center',
  alignItems: 'center',
  },
  alphabetText: {
  color: '#007aff',
  fontWeight: 'bold',
  fontSize: 14,
  marginVertical: 2,
  },
  });
  
  export default MySectionList;

// import React, { useState, useRef } from 'react';
// import {
//   SectionList,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';

// const MySectionList = ({ data }) => {
//   const [search, setSearch] = useState('');
//   const sectionListRef = useRef();

//   const handleSearch = (text) => {
//     setSearch(text);
//   };

//   const handleScrollToIndex = (index) => {
//     sectionListRef.current.scrollToLocation({
//       sectionIndex: index,
//       itemIndex: 0,
//       animated: true,
//     });
//   };

//   const renderSectionHeader = ({ section }) => (
//     <Text>{section.title}</Text>
//   );

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => alert(item.name)}>
//       <View>
//         <Text>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   const filteredData = data ? data.filter((section) =>
//     section.data.some((item) =>
//       item.name.toLowerCase().includes(search.toLowerCase())
//     )
//   ) : [];

//   const alphabet = filteredData.map((section) => section.title[0].toUpperCase());

//   return (
//     <View>
//       <TextInput
//         placeholder="Search"
//         value={search}
//         onChangeText={handleSearch}
//       />
//       <SectionList
//         ref={sectionListRef}
//         sections={filteredData}
//         renderSectionHeader={renderSectionHeader}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//       <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
//         {alphabet.map((letter, index) => (
//           <TouchableOpacity
//             key={index}
//             onPress={() => {
//               const sectionIndex = filteredData.findIndex((section) => section.title[0].toUpperCase() === letter);
//               if (sectionIndex >= 0) {
//                 handleScrollToIndex(sectionIndex);
//               }
//             }}
//           >
//             <Text style={{ fontSize: 18 }}>{letter}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// };

// export default MySectionList;
