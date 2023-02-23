import React from 'react';
import { View, Text, StyleSheet, ProgressBarAndroid } from 'react-native';

const ProfileRegistration = () => {
  const progress = 0.5; // Progress value between 0 and 1
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Registration</Text>
      <ProgressBarAndroid styleAttr="Horizontal" progress={progress} indeterminate={false} />
      <Text style={styles.subtitle}>50% completed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default ProfileRegistration;
