// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { Picker } from '@react-native-picker/picker';

// const AdvancedProfilePage = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [selectedGender, setSelectedGender] = useState('Male');
//   const [selectedRace, setSelectedRace] = useState('White');
//   const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('Single');
//   const [selectedLanguage, setSelectedLanguage] = useState('English');
//   const [selectedReligion, setSelectedReligion] = useState('Christianity');
//   const [passportNumber, setPassportNumber] = useState('');
//   const [socialMediaHandles, setSocialMediaHandles] = useState('');
//   const [annualIncome, setAnnualIncome] = useState('');
//   const [employmentStatus, setEmploymentStatus] = useState('Employed');
//   const [jobTitle, setJobTitle] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [healthConditions, setHealthConditions] = useState('');
//   const [highestEducationLevel, setHighestEducationLevel] = useState('Bachelor\'s Degree');
//   const [schoolName, setSchoolName] = useState('');

//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleDateConfirm = (date) => {
//     hideDatePicker();
//     console.log("Selected Date: ", date);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.profileHeader}>
//         <Image style={styles.profileImage} source={require('./assets/profile.jpg')} />
//         <Text style={styles.profileName}>John Doe</Text>
//         <TouchableOpacity style={styles.editButton}>
//           <Ionicons name="pencil-sharp" size={24} color="black" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.category}>
//         <Text style={styles.categoryTitle}>Identifying Information</Text>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Passport Number</Text>
//           <TextInput
//             style={styles.input}
//             value={passportNumber}
//             onChangeText={(text) => setPassportNumber(text)}
//           />
//         </View>
//       </View>

//       <View style={styles.category}>
//         <Text style={styles.categoryTitle}>Contact Information</Text>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Social Media Handles</Text>
//           <TextInput
//             style={styles.input}
//             value={socialMediaHandles}
//             onChangeText={(text) => setSocialMediaHandles(text)}
//           />
//         </View>
//       </View>

//       <View style={styles.category}>
//         <Text style={styles.categoryTitle}>Demographic Information</Text>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Gender</Text>
//           <Picker
//             style={styles.picker}
//             selectedValue={selectedGender}
//             onValueChange={(itemValue) => setSelectedGender(itemValue)}
//           >
//             <Picker.Item label="Male" value="Male" />
//             <Picker.Item label="Female" value="Female" />
//             <Picker.Item label="Non-binary" value="Non-binary" />
          

//             <View style={styles.container}>
//   <ScrollView>
//     <View style={styles.category}>
//       <Text style={styles.categoryTitle}>Identifying Information</Text>
//       <View style={styles.infoContainer}>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Full Name</Text>
//           <Text style={styles.infoText}>John Doe</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Date of Birth</Text>
//           <Text style={styles.infoText}>01/01/1990</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Passport Number</Text>
//           <Text style={styles.infoText}>XXXXX</Text>
//         </View>
//       </View>
//     </View>
//     <View style={styles.category}>
//       <Text style={styles.categoryTitle}>Contact Information</Text>
//       <View style={styles.infoContainer}>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Email Address</Text>
//           <Text style={styles.infoText}>johndoe@example.com</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Phone Number</Text>
//           <Text style={styles.infoText}>(555) 555-5555</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Address</Text>
//           <Text style={styles.infoText}>123 Main St</Text>
//         </View>
//       </View>
//     </View>
//     <View style={styles.category}>
//       <Text style={styles.categoryTitle}>Demographic Information</Text>
//       <View style={styles.infoContainer}>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Gender</Text>
//           <Text style={styles.infoText}>Male</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Race</Text>
//           <Text style={styles.infoText}>Caucasian</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Ethnicity</Text>
//           <Text style={styles.infoText}>Not Hispanic or Latino</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Marital Status</Text>
//           <Text style={styles.infoText}>Single</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Language</Text>
//           <Text style={styles.infoText}>English</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Religion</Text>
//           <Text style={styles.infoText}>Christianity</Text>
//         </View>
//       </View>
//     </View>
//     <View style={styles.category}>
//       <Text style={styles.categoryTitle}>Financial Information</Text>
//       <View style={styles.infoContainer}>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Annual Income</Text>
//           <Text style={styles.infoText}>$50,000</Text>
//         </View>
//         <View style={styles.info}>
//           <Text style={styles.infoTitle}>Credit Score</Text>
//           <Text style={styles.infoText}>750</Text>
//         </View>
//         <View style={styles.info}>
//   <View style={styles.infoSection}>
//     <FontAwesome5 name="user" size={24} color={colors.primary} style={styles.infoIcon} />
//     <Text style={styles.infoLabel}>Identifying Information</Text>
//   </View>
//   <View style={styles.infoFields}>
//     <View style={styles.infoField}>
//       <FontAwesome5 name="id-card" size={20} color={colors.grey} style={styles.fieldIcon} />
//       <Text style={styles.fieldLabel}>ID Number: </Text>
//       <Text style={styles.fieldValue}>1234567890</Text>
//     </View>
//     <View style={styles.infoField}>
//       <FontAwesome5 name="user" size={20} color={colors.grey} style={styles.fieldIcon} />
//       <Text style={styles.fieldLabel}>Full Name: </Text>
//       <Text style={styles.fieldValue}>John Doe</Text>
//     </View>
//     <View style={styles.infoField}>
//       <FontAwesome5 name="calendar-alt" size={20} color={colors.grey} style={styles.fieldIcon} />
//       <Text style={styles.fieldLabel}>Date of Birth: </Text>
//       <Text style={styles.fieldValue}>01/01/1990</Text>
//     </View>
//     <View style={styles.infoField}>
//       <FontAwesome5 name="venus-mars" size={20} color={colors.grey} style={styles.fieldIcon} />
//       <Text style={styles.fieldLabel}>Gender: </Text>
//       <Text style={styles.fieldValue}>Male</Text>
//     </View>
//     <View style={styles.infoField}>
//       <FontAwesome5 name="globe" size={20} color={colors.grey} style={styles.fieldIcon} />
//       <Text style={styles.fieldLabel}>Nationality: </Text>
//       <Text style={styles.fieldValue}>Nigerian</Text>
//     </View>
//   </View>

//   <View style={styles.infoSection}>
//     <FontAwesome5 name="phone" size={24} color={colors.primary} style={styles.infoIcon} />
//     <Text style={styles.infoLabel}>Contact Information</Text>
//   </View>
//   <View style={styles.infoFields}>
//     <View style={styles.infoField}>
//       <FontAwesome5 name="phone" size={20} color={colors.grey} style={styles.fieldIcon} />
//       <Text style={styles.fieldLabel}>Phone Number: </Text>
//       <Text style={styles.fieldValue}>08012345678</Text>
//     </View>
//     <View style={styles.infoField}>
//       <FontAwesome5 name="envelope" size={20} color={colors.grey} style={styles.fieldIcon} />
//       <Text style={styles.fieldLabel}>Email Address: </Text>
//       <Text style={styles.fieldValue}>johndoe@gmail.com</Text>
//     </View>
//     <View style={styles.infoField}>
//       <FontAwesome5 name="home" size={20} color={colors.grey} style={styles.fieldIcon} />
//       <Text style={styles.fieldLabel}>Home Address: </Text>
//       <Text style={styles.fieldValue}>123 Main St, Lagos</Text>
//     </View>
//   </View>

//   <View style={styles.infoSection}>
//     <FontAwesome5 name="credit-card" size={24} color={colors.primary} style={styles.infoIcon} />
//     <Text style={styles.infoLabel}>Financial Information</Text>
//   </View>
//   <View style={styles.infoFields}>
//   {/* Identifying Information */}
//   <View style={styles.field}>
//     <Text style={styles.fieldLabel}>Name:</Text>
//     <Text style={styles.fieldValue}>John Doe</Text>
//   </View>
//   <View style={styles.field}>
//     <Text style={styles.fieldLabel}>Date of Birth:</Text>
//     <Text style={styles.fieldValue}>01/01/1980</Text>
//   </View>
//   <View style={styles.field}>
//     <Text style={styles.fieldLabel}>Social Security Number:</Text>
//     <Text style={styles.fieldValue}>XXX-XX-XXXX</Text>
//   </View>
  


