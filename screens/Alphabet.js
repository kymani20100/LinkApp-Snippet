import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';

// Create an array of contacts to display, with each contact containing a name and other relevant data.

// Sort the contacts array alphabetically based on the name.

// Create an object with keys representing the alphabet letters, and the values being arrays of contacts whose names start with the corresponding letter.

// Create a state variable to store the current search query and update it as the user types.

// Write a filtering function to filter the contacts based on the current search query.

// Update the state variable containing the filtered contacts.

// Write a function to render each section of the alphabet with the corresponding contacts.

// Render a list of the alphabet sections and their corresponding contacts.

const CONTACTS = [
  { id: 1, name: 'Alice', phone: '123-456-7890' },
  { id: 2, name: 'Bob', phone: '123-456-7890' },
  { id: 3, name: 'Charlie', phone: '123-456-7890' },
  { id: 4, name: 'David', phone: '123-456-7890' },
  { id: 5, name: 'Eve', phone: '123-456-7890' },
];

const groupContactsByAlphabet = (contacts) => {
  const groupedContacts = {};
  contacts.forEach(contact => {
    const letter = contact.name.charAt(0).toUpperCase();
    if (groupedContacts[letter]) {
      groupedContacts[letter].push(contact);
    } else {
      groupedContacts[letter] = [contact];
    }
  });
  return groupedContacts;
};

const Item = ({ name, phone }) => (
  <View style={{ padding: 16 }}>
    <Text>{name}</Text>
    <Text>{phone}</Text>
  </View>
);

const Alphabet = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = CONTACTS.filter(contact =>
      contact.name.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

//   const renderSection = ({ section: { title, data } }) => (
//     <>
//       <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 16 }}>{title}</Text>
//       <FlatList
//         data={data}
//         renderItem={({ item }) => <Item name={item.name} phone={item.phone} />}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </>
//   );

const renderSection = ({ item }) => {
    const { title, data } = item;
    return (
      <>
        <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 16 }}>{title}</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item name={item.name} phone={item.phone} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </>
    );
  };
  

  const alphabetContacts = groupContactsByAlphabet(filteredContacts.length > 0 ? filteredContacts : CONTACTS);

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Search"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={Object.entries(alphabetContacts).map(([title, data]) => ({ title, data }))}
        renderItem={renderSection}
        keyExtractor={(item) => item.title}
        />

      {/* <FlatList
        data={Object.entries(alphabetContacts).map(([title, data]) => ({ title, data }))}
        renderItem={renderSection}
        keyExtractor={(item) => item.title}
      /> */}
    </View>
  );
};

export default Alphabet;
