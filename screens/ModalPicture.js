// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';

// const ModalPicture = () => {
//   const [image, setImage] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const selectImage = (img) => {
//     setImage(img);
//     setModalVisible(false);
//   };

//   const images = [
//     require('../assets/img/profile/p1.png'),
//     require('../assets/img/profile/p1.png'),
//     require('../assets/img/profile/p1.png'),
//     require('../assets/img/profile/p1.png'),
//     require('../assets/img/profile/p1.png'),
//     require('../assets/img/profile/p1.png'),
//   ];

//   return (
//     <View style={styles.container}>
//       {image ? (
//         <Image source={image} style={styles.image} />
//       ) : (
//         <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.selectImage}>
//           <Text style={styles.text}>Select Profile Picture</Text>
//         </TouchableOpacity>
//       )}

//       <Modal visible={modalVisible} animationType="slide">
//         <ScrollView>
//           <View style={styles.modalContainer}>
//             {images.map((img, index) => (
//               <TouchableOpacity key={index} onPress={() => selectImage(img)}>
//                 <Image source={img} style={styles.modalImage} />
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity onPress={() => setModalVisible(false)}>
//               <Text style={styles.closeBtn}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </ScrollView>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//   },
//   image: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//   },
//   selectImage: {
//     backgroundColor: '#2c2723',
//     borderRadius: 75,
//     width: 150,
//     height: 150,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: '#fbcf9c',
//     fontSize: 16,
//     fontFamily: 'Roboto_300Light',
//     letterSpacing: 1,
//   },
//   modalContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginHorizontal: 10,
//     marginVertical: 20,
//   },
//   modalImage: {
//     width: 100,
//     height: 100,
//     marginVertical: 10,
//   },
//   closeBtn: {
//     color: '#fbcf9c',
//     fontSize: 16,
//     fontFamily: 'Roboto_300Light',
//     letterSpacing: 1,
//     marginTop: 20,
//     alignSelf: 'center',
//   },
// });

// export default ModalPicture;
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, ScrollView } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';

// const ModalPicture = () => {
//   const [image, setImage] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   const openImagePickerAsync = async () => {
//     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//       alert('Permission to access camera roll is required!');
//       return;
//     }

//     const pickerResult = await ImagePicker.launchImageLibraryAsync();
//     if (pickerResult.cancelled === true) {
//       return;
//     }

//     setImage(pickerResult.uri);
//   };

//   const renderImage = () => {
//     if (image) {
//       return <Image source={{ uri: image }} style={styles.image} />;
//     }

//     return (
//       <TouchableOpacity style={styles.defaultImage} onPress={() => setModalVisible(true)}>
//         <MaterialIcons name="add-a-photo" size={30} color="#fbcf9c" />
//         <Text style={styles.defaultImageText}>Add Photo</Text>
//       </TouchableOpacity>
//     );
//   };

//   const handleDefaultImagePress = (imageUrl) => {
//     setModalVisible(false);
//     setImage(imageUrl);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>{renderImage()}</View>

//       <TouchableOpacity style={styles.cameraIcon} onPress={openImagePickerAsync}>
//         <MaterialIcons name="photo-camera" size={20} color="#2c2723" />
//       </TouchableOpacity>

//       <Modal visible={modalVisible} animationType="slide">
//         <View style={styles.modalContainer}>
//           <ScrollView contentContainerStyle={styles.imageList}>
//             {defaultImages.map((imageUrl) => (
//               <TouchableOpacity
//                 key={imageUrl}
//                 style={styles.modalImageContainer}
//                 onPress={() => handleDefaultImagePress(imageUrl)}
//               >
//                 <Image source={{ uri: imageUrl }} style={styles.modalImage} />
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//           <TouchableOpacity style={styles.modalCloseButton} onPress={() => setModalVisible(false)}>
//             <MaterialIcons name="close" size={24} color="#fbcf9c" />
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const defaultImages = [
//   'https://i.imgur.com/QnCWa2g.jpg',
//   'https://i.imgur.com/wPTT22K.jpg',
//   'https://i.imgur.com/9Wj1N2O.jpg',
//   'https://i.imgur.com/jGW6l08.jpg',
//   'https://i.imgur.com/tXGyfFF.jpg',
// ];

// const styles = StyleSheet.create({
//   container: {
//     position: 'relative',
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     overflow: 'hidden',
//   },
//   imageContainer: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   defaultImage: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#2c2723',
//     justifyContent: 'center'
//   },
//   defaultImageText: {

//   },
//   modalImageContainer: {

//   }
// });
// export default ModalPicture;

import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Modal, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ModalPicture = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    { id: '1', src: require('../assets/img/profile/p1.png') },
    { id: '2', src: require('../assets/img/profile/p2.png') },
    { id: '3', src: require('../assets/img/profile/p1.png') },
    { id: '4', src: require('../assets/img/profile/p2.png') },
    { id: '5', src: require('../assets/img/profile/p1.png') },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedImage(item.src)}>
      <Image source={item.src} style={styles.imageItem} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        {selectedImage ? (
          <Image source={selectedImage} style={styles.profilePic} />
        ) : (
          <MaterialIcons name="person" size={80} color="#fbcf9c" />
        )}
      </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <FlatList
            data={images}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <MaterialIcons name="close" size={24} color="#2c2723" />
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.cameraIconContainer}>
        <TouchableOpacity style={styles.cameraIcon}>
          <MaterialIcons name="photo-camera" size={20} color="#2c2723" />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  modalContainer: {
    padding: 20,
    flex: 1,
    backgroundColor: '#2c2723',
  },
  imageItem: {
    width: 150,
    height: 150,
    margin: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fbcf9c',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {},
});

export default ModalPicture;

