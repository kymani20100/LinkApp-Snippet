import React, { useState } from 'react';
import { View, Button } from 'react-native';
import FormField from './FormField';

const FormGenerator = () => {
  const [formFields, setFormFields] = useState([
    { options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }], defaultValue: '1' },
    { options: [{ label: 'Option A', value: 'A' }, { label: 'Option B', value: 'B' }, { label: 'Option C', value: 'C' }], defaultValue: 'A' }
  ]);

  const addFormField = () => {
    setFormFields([...formFields, { options: [], defaultValue: '' }]);
  }

  return (
    <View style={{marginTop: 25}}>
      {formFields.map((field, index) => (
        <FormField key={index} options={field.options} defaultValue={field.defaultValue} />
      ))}
      <Button title="Add Form Field" onPress={addFormField} />
    </View>
  );
};

export default FormGenerator;
