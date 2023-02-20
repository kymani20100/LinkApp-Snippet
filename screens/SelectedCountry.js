import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

const ContactInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("US");

  const onPhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const onSelectCountryCode = (country) => {
    setCountryCode(country.cca2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countryPickerContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withCallingCode
          onSelect={onSelectCountryCode}
        />
      </View>
      <TextInput
        style={styles.phoneNumberInput}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={onPhoneNumberChange}
      />
      <Text style={styles.exampleText}>
        Example: +{CountryPicker.callingCode(countryCode)} XXX-XXX-XXXX
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: "gray",
  },
  countryPickerContainer: {
    marginRight: 10,
  },
  phoneNumberInput: {
    flex: 1,
  },
  exampleText: {
    marginTop: 5,
  },
});

export default ContactInput;
