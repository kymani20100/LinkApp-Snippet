import React, { useState } from 'react';
import Toast from 'react-native-toast-message';

const CustomToast = ({ field, term, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHide = () => {
    setIsVisible(false);
  };

  return (
    <Toast
      type={type}
      position="top"
      text1={`${field} contact copied`}
      text2={`Copied ${term} to Clipboard`}
      visibilityTime={4000}
      autoHide
      topOffset={30}
      bottomOffset={40}
      onHide={handleHide}
    />
  );
};

export default CustomToast;
