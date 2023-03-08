import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [storageLimit, setStorageLimit] = useState('10 GB');

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };

  const setNewStorageLimit = (newLimit) => {
    setStorageLimit(newLimit);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Text style={styles.option}>Edit Profile</Text>
        <Text style={styles.option}>Change Password</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <Switch
          style={styles.switch}
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
        <Text style={styles.option}>Notifications</Text>
        <Switch
          style={styles.switch}
          value={locationEnabled}
          onValueChange={toggleLocation}
        />
        <Text style={styles.option}>Location</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Storage and Data</Text>
        <Text style={styles.option}>Storage Limit</Text>
        <Text style={styles.subOption}>{storageLimit}</Text>
        <Text
          style={styles.subOption}
          onPress={() => setNewStorageLimit('20 GB')}
        >
          Upgrade Storage
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.option}>Help Center</Text>
        <Text style={styles.option}>Contact Support</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  option: {
    fontSize: 16,
    marginBottom: 8,
  },
  subOption: {
    fontSize: 14,
    marginBottom: 4,
    color: 'gray',
  },
  switch: {
    marginBottom: 8,
  },
});

export default SettingsPage;
