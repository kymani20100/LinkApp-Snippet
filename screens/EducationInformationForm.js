import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const EducationInformationForm = () => {
  const [highestDegree, setHighestDegree] = useState('');
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  const handleSave = () => {
    // Handle saving of form data here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Education Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Highest Degree:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter highest degree"
          value={highestDegree}
          onChangeText={setHighestDegree}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>School:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter school"
          value={school}
          onChangeText={setSchool}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Major:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter major"
          value={major}
          onChangeText={setMajor}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Graduation Year:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter graduation year"
          value={graduationYear}
          onChangeText={setGraduationYear}
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

export default EducationInformationForm;
