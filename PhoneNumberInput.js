import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (input) => {
    // Remove all non-digit characters
    const cleaned = input.replace(/\D/g, '');

    // Add the formatting characters
    let formatted = '';
    if (cleaned.length > 0) {
      formatted += '(' + cleaned.substring(0, 3) + ')';
    }
    if (cleaned.length >= 4) {
      formatted += ' ' + cleaned.substring(3, 6);
    }
    if (cleaned.length >= 7) {
      formatted += '-' + cleaned.substring(6, 10);
    }

    // Return the formatted phone number
    return formatted;
  };

  const handlePhoneNumberChange = (input) => {
    // Format the phone number and update the state
    setPhoneNumber(formatPhoneNumber(input));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 35,}}>
        <TextInput
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          keyboardType="phone-pad"
          placeholder="(123) 456-7890"
          maxLength={14}
        />
    </View> 
  );
};

export default PhoneNumberInput;
