import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const ImageForm = () => {
  const [formFields, setFormFields] = useState([{ type: '', value: '' }]);
  const [image, setImage] = useState(null);

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

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // const express = require('express');
  // const bodyParser = require('body-parser');
  // const multer = require('multer');
  // const path = require('path');
  // const app = express();
  // const PORT = 5000;

  // // Configure Multer for handling file uploads
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     cb(null, 'uploads/')
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  //   }
  // })
  // const upload = multer({ storage: storage });

  // // Configure body-parser for parsing form data
  // app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(bodyParser.json());

  // // Define a route for handling form submissions
  // app.post('/submit-form', upload.single('image'), (req, res) => {
  //   // Extract form data from the request
  //   const { name, email, phone } = req.body;
  //   const image = req.file;

  //   // Process the form data as needed
  //   // For this example, we'll just log the form data to the console
  //   console.log(`Name: ${name}`);
  //   console.log(`Email: ${email}`);
  //   console.log(`Phone: ${phone}`);
  //   console.log(`Image: ${image ? image.filename : 'None'}`);

  //   // Send a response to the client
  //   res.status(200).send('Form submitted successfully!');
  // });

  // // Start the server
  // app.listen(PORT, () => {
  //   console.log(`Server listening on port ${PORT}`);
  // });

  

  const submitForm = () => {
    const formData = new FormData();
    formFields.forEach((field, index) => {
      formData.append(`type[${index}]`, field.type);
      formData.append(`value[${index}]`, field.value);
    });
    if (image) {
      formData.append('image', { uri: image, name: 'image.jpg', type: 'image/jpeg' });
    }

    axios.post('http://your-node-backend-url.com/submit-contact-form', formData)
      .then(() => {
        Alert.alert('Form submitted successfully');
        setFormFields([{ type: '', value: '' }]);
        setImage(null);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Form submission failed');
      });
  };

  return (
    <View style={{marginTop: 25, padding: 10}}>
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
      {index === formFields.length - 1 && (
        <TouchableOpacity onPress={() => duplicateFormField(index)}>
          <Text style={{ fontSize: 24, marginLeft: 10 }}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  ))}
  <TouchableOpacity onPress={addFormField}>
    <Text style={{ fontSize: 24 }}>Add Field</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={pickImage}>
    <Text style={{ fontSize: 24 }}>Pick Image</Text>
  </TouchableOpacity>
  {image && (
    <Image source={{ uri: image }} style={{ width: 200, height: 200, marginBottom: 10 }} />
  )}
  <TouchableOpacity onPress={submitForm}>
    <Text style={{ fontSize: 24, backgroundColor: 'blue', color: 'white', padding: 10 }}>Submit Form</Text>
  </TouchableOpacity>
</View>
);
};

export default ImageForm;
