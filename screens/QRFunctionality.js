import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const QRFunctionality = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showQRCode, setShowQRCode] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleItemPress = (item) => {
    const newSelectedItems = [...selectedItems];
    if (scannedData) {
      newSelectedItems.push(scannedData);
      setScannedData(null);
    } else {
      const index = newSelectedItems.indexOf(item);
      if (index > -1) {
        newSelectedItems.splice(index, 1);
      } else {
        newSelectedItems.push(item);
      }
    }
    setSelectedItems(newSelectedItems);
  };

  const generateQRCode = () => {
    const data = selectedItems.join(',');
    return <QRCode value={data} size={200} />;
  };

  const handleQRCodeScan = (event) => {
    setScannedData(event.data);
  };

  useEffect(() => {
    if (scannedData) {
      const newSelectedItems = [...selectedItems];
      newSelectedItems.push(scannedData);
      setSelectedItems(newSelectedItems);
      setScannedData(null);
    }
  }, [scannedData]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {showQRCode ? (
        <>
          {generateQRCode()}
          <Button title="Hide QR Code" onPress={() => setShowQRCode(false)} />
        </>
      ) : (
        <>
          <Text>Select items to share:</Text>
          {items.map((item) => (
            <TouchableOpacity key={item} onPress={() => handleItemPress(item)}>
              <Text style={{ color: selectedItems.includes(item) ? 'blue' : 'black' }}>{item}</Text>
            </TouchableOpacity>
          ))}
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            <Button title="Generate QR Code" disabled={selectedItems.length === 0} onPress={() => setShowQRCode(true)} />
          </View>
        </>
      )}
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={handleQRCodeScan}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

export default QRFunctionality;
