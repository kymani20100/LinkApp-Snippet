// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";

// const DemographicInformationForm = () => {
//   const [gender, setGender] = useState("");
//   const [race, setRace] = useState("");
//   const [ethnicity, setEthnicity] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("");
//   const [language, setLanguage] = useState("");
//   const [religion, setReligion] = useState("");

//   const handleSave = () => {
//     // Handle saving the demographic information here
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Text style={styles.header}>Demographic Information</Text>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Gender:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter gender"
//             value={gender}
//             onChangeText={setGender}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Race:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter race"
//             value={race}
//             onChangeText={setRace}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Ethnicity:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter ethnicity"
//             value={ethnicity}
//             onChangeText={setEthnicity}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Marital Status:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter marital status"
//             value={maritalStatus}
//             onChangeText={setMaritalStatus}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Language:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter language"
//             value={language}
//             onChangeText={setLanguage}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Religion:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter religion"
//             value={religion}
//             onChangeText={setReligion}
//           />
//         </View>
//         <TouchableOpacity style={styles.button} onPress={handleSave}>
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   input: {
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//   },
//   button: {
//     backgroundColor: "#007aff",
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 18,
//     textAlign: "center",
//   },
// });
// export default DemographicInformationForm;

import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';

const DemographicInformationForm = () => {
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [language, setLanguage] = useState("");
  const [religion, setReligion] = useState("");

  const handleSave = () => {
    // Handle saving the demographic information here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Demographic Information</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender:</Text>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Non-binary" value="nonBinary" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Race:</Text>
        <Picker
          selectedValue={race}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setRace(itemValue)}
        >
          <Picker.Item label="Select Race" value="" />
          <Picker.Item label="White" value="white" />
          <Picker.Item label="Black or African American" value="black" />
          <Picker.Item label="Asian" value="asian" />
          <Picker.Item
            label="Native American or Alaska Native"
            value="nativeAmerican"
          />
          <Picker.Item
            label="Native Hawaiian or Other Pacific Islander"
            value="pacificIslander"
          />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ethnicity:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter ethnicity"
          value={ethnicity}
          onChangeText={setEthnicity}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Marital Status:</Text>
        <Picker
          selectedValue={maritalStatus}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setMaritalStatus(itemValue)}
        >
          <Picker.Item label="Select Marital Status" value="" />
          <Picker.Item label="Married" value="married" />
          <Picker.Item label="Divorced" value="divorced" />
          <Picker.Item label="Separated" value="separated" />
          <Picker.Item label="Single" value="single" />
          <Picker.Item label="Widowed" value="widowed" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Language:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter language"
          value={language}
          onChangeText={setLanguage}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Religion:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter religion"
          value={religion}
          onChangeText={setReligion}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
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
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default DemographicInformationForm;

