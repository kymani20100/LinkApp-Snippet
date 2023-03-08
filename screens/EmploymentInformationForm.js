import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const EmploymentInformationForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');

  const handleSave = () => {
    // Handle saving of form data here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Employment Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Company Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter company name"
          value={companyName}
          onChangeText={setCompanyName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Job Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter job title"
          value={jobTitle}
          onChangeText={setJobTitle}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Employment Type:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter employment type"
          value={employmentType}
          onChangeText={setEmploymentType}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Employment Status:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter employment status"
          value={employmentStatus}
          onChangeText={setEmploymentStatus}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#3f51b5',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EmploymentInformationForm;
