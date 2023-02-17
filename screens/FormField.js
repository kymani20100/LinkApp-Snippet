import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FormField = ({ options, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 1, marginRight: 10 }}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => setValue(itemValue)}
        >
          {options.map((option, index) => (
            <Picker.Item key={index} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>
      <View style={{ flex: 1 }}>
        <TextInput
          value={value}
          onChangeText={(text) => setValue(text)}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 5 }}
        />
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Text style={{ fontSize: 24, marginLeft: 10 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormField;
