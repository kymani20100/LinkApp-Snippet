import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ContactForm = () => {
  const [formFields, setFormFields] = useState([{ type: '', value: '' }]);

  const addFormField = () => {
    setFormFields([...formFields, { type: '', value: '' }]);
  };

  const removeFormField = (index) => {
    const newFormFields = [...formFields];
    newFormFields.splice(index, 1);
    setFormFields(newFormFields);
  };

  const duplicateFormField = (index) => {
    const newFormFields = [...formFields];
    newFormFields.splice(index + 1, 0, { ...newFormFields[index] });
    setFormFields(newFormFields);
  };

  return (
    <View style={{marginTop: 25}}>
      {formFields.map((field, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Picker
              selectedValue={field.type}
              onValueChange={(itemValue) => {
                const newFormFields = [...formFields];
                newFormFields[index].type = itemValue;
                setFormFields(newFormFields);
              }}
            >
              <Picker.Item label="Home" value="home" />
              <Picker.Item label="Work" value="work" />
              <Picker.Item label="Mobile" value="mobile" />
            </Picker>
          </View>
          <View style={{ flex: 2 }}>
            <TextInput
              value={field.value}
              onChangeText={(text) => {
                const newFormFields = [...formFields];
                newFormFields[index].value = text;
                setFormFields(newFormFields);
              }}
              style={{ borderWidth: 1, borderColor: '#ccc', padding: 5 }}
            />
          </View>
          <TouchableOpacity onPress={() => removeFormField(index)}>
            <Text style={{ fontSize: 24, marginLeft: 10 }}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => duplicateFormField(index)}>
            <Text style={{ fontSize: 24, marginLeft: 10 }}>+</Text>
          </TouchableOpacity>
        </View>
      ))}
      <TouchableOpacity onPress={addFormField}>
        <Text style={{ fontSize: 24 }}>Add Field</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactForm;
