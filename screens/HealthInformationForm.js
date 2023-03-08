import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const HealthInformationForm = () => {
  const [bloodType, setBloodType] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medications, setMedications] = useState('');
  const [healthConditions, setHealthConditions] = useState('');

  const handleSave = () => {
    // Handle saving of form data here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Health Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Blood Type:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter blood type"
          value={bloodType}
          onChangeText={setBloodType}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Allergies:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter allergies"
          value={allergies}
          onChangeText={setAllergies}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Medications:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter medications"
          value={medications}
          onChangeText={setMedications}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Health Conditions:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter health conditions"
          value={healthConditions}
          onChangeText={setHealthConditions}
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

export default HealthInformationForm;
