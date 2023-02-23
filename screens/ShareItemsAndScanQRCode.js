import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import QRCode from 'react-native-qrcode-svg';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const ShareItemsAndScanQRCode = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showQRCode, setShowQRCode] = useState(false);
  const [scannedData, setScannedData] = useState(null);

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
      setShowQRCode(true);
    }
  }, [scannedData]);

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
        <QRCodeScanner
          onRead={handleQRCodeScan}
          cameraType={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          reactivate={true}
          reactivateTimeout={5000}
          showMarker={true}
          markerStyle={{ borderColor: '#FFF', borderRadius: 10 }}
          bottomContent={
            <View>
              <Text style={{ color: '#FFF', fontSize: 18, marginTop: 24 }}>Scan a QR Code</Text>
            </View>
          }
        />
      </View>
    </View>
  );
};

export default ShareItemsAndScanQRCode;
