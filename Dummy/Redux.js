// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

// const ItemList = () => {
//   const [inputValue, setInputValue] = useState('');
//   const items = useSelector((state) => state.items);
//   const dispatch = useDispatch();

//   const handleAddItem = () => {
//     dispatch({
//       type: 'ADD_ITEM',
//       payload: {
//         id: uuidv4(),
//         name: inputValue,
//       },
//     });
//     setInputValue('');
//   };

//   const handleRemoveItem = (id) => {
//     dispatch({
//       type: 'REMOVE_ITEM',
//       payload: id,
//     });
//   };

//   const handleClearItems = () => {
//     dispatch({
//       type: 'CLEAR_ITEMS',
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter item name"
//           value={inputValue}
//           onChangeText={(value) => setInputValue(value)}
//         />
//         <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
//           <Text style={styles.addButtonText}>Add</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.listContainer}>
//         {items.length > 0 ? (
//           items.map((item) => (
//             <View key={item.id} style={styles.itemContainer}>
//               <Text style={styles.itemName}>{item.name}</Text>
//               <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
//                 <Text style={styles.removeButtonText}>Remove</Text>
//               </TouchableOpacity>
//             </View>
//           ))
//         ) : (
//           <Text style={styles.emptyListText}>List is empty</Text>
//         )}
//       </View>
//       <TouchableOpacity style={styles.clearButton} onPress={handleClearItems}>
//         <Text style={styles.clearButtonText}>
