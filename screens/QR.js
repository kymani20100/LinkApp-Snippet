import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
  StyleSheet,
  Linking,
} from "react-native";
import React,{useState} from "react";
import QRCode from 'react-native-qrcode-svg';
import Share from 'react-native-share';

const QR = ({ contact }) => {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleQRCodePress = () => {
    setShowQRCode(!showQRCode);
  };

  const handleShareQRCode = async () => {
    try {
      const qrCode = await QRCode.toDataURL(contact);
      Share.share({
        message: "Contact QR Code",
        url: qrCode,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { name, phone } = contact;

  return (
    <TouchableOpacity onPress={handleQRCodePress}>
      <View style={{ padding: 16, flexDirection: "row" }}>
        <Text style={{ fontWeight: "bold", flex: 1 }}>{name}</Text>
        <Text style={{ color: "black" }}>{phone}</Text>
      </View>
      {showQRCode && (
        <View style={{ alignItems: "center" }}>
          <QRCode value={JSON.stringify(contact)} />
          <TouchableOpacity onPress={handleShareQRCode}>
            <Text style={{ color: "blue", marginTop: 16 }}>Share QR Code</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default QR;

const styles = StyleSheet.create({});
