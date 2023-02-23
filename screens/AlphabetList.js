import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const AlphabetList = ({ contacts, onContactSelect }) => {
  const [selectedAlphabet, setSelectedAlphabet] = useState(null);

  const handleAlphabetClick = (alphabet) => {
    setSelectedAlphabet(alphabet);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1 }}>
        {contacts &&
          contacts.map((contact) => {
            if (
              selectedAlphabet === null ||
              contact.name[0].toLowerCase() === selectedAlphabet.toLowerCase()
            ) {
              return (
                <TouchableOpacity
                  key={contact.id}
                  onPress={() => onContactSelect(contact)}
                >
                  <Text>{contact.name}</Text>
                </TouchableOpacity>
              );
            }
          })}
      </View>
      <View style={{ width: 30 }}>
        {Array(26)
          .fill()
          .map((_, index) => String.fromCharCode(65 + index))
          .map((alphabet) => (
            <TouchableOpacity
              key={alphabet}
              onPress={() => handleAlphabetClick(alphabet)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                height: 20,
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>{alphabet}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default AlphabetList;
