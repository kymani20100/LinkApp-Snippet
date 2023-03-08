import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const FinancialInformationForm = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savings, setSavings] = useState('');
  const [debts, setDebts] = useState('');

  const handleSave = () => {
    // Handle saving of form data here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Financial Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Income:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter income"
          keyboardType="numeric"
          value={income}
          onChangeText={setIncome}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Expenses:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter expenses"
          keyboardType="numeric"
          value={expenses}
          onChangeText={setExpenses}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Savings:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter savings"
          keyboardType="numeric"
          value={savings}
          onChangeText={setSavings}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Debts:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter debts"
          keyboardType="numeric"
          value={debts}
          onChangeText={setDebts}
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

export default FinancialInformationForm;
