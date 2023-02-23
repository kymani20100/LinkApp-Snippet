import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const ShareItemsQRCode = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleItemPress = (item) => {
    const newSelectedItems = [...selectedItems];
    const index = newSelectedItems.indexOf(item);
    if (index > -1) {
      newSelectedItems.splice(index, 1);
    } else {
      newSelectedItems.push(item);
    }
    setSelectedItems(newSelectedItems);
  };

  const generateQRCode = () => {
    const data = selectedItems.join(',');
    return <QRCode value={data} size={200} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Select items to share:</Text>
      {items.map((item) => (
        <TouchableOpacity key={item} onPress={() => handleItemPress(item)}>
          <Text style={{ color: selectedItems.includes(item) ? 'blue' : 'black' }}>{item}</Text>
        </TouchableOpacity>
      ))}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        {showQRCode ? (
          <>
            {generateQRCode()}
            <Button title="Hide QR Code" onPress={() => setShowQRCode(false)} />
          </>
        ) : (
          <Button
            title="Generate QR Code"
            disabled={selectedItems.length === 0}
            onPress={() => setShowQRCode(true)}
          />
        )}
      </View>
    </View>
  );
};

export default ShareItemsQRCode;
