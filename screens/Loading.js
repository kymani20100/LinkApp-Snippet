import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textPrimary}>Loading</Text>
      <Text style={styles.textSecondary}>Please wait...</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#2e2a25'
  },
  textPrimary: {
    color: '#fbcf9c',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  textSecondary: {
    color: '#fbcf9c',
    fontSize: 14,
    // fontWeight: 'bold',
  },

})