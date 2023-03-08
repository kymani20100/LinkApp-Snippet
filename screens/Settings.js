import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationSharingEnabled, setLocationSharingEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsSwitch = (value) => {
    setNotificationsEnabled(value);
  };

  const handleLocationSharingSwitch = (value) => {
    setLocationSharingEnabled(value);
  };

  const handleDarkModeSwitch = (value) => {
    setDarkModeEnabled(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingsGroup}>
        <Text style={styles.settingsGroupTitle}>Notifications</Text>
        <View style={styles.settingsRow}>
          <Text style={styles.settingsLabel}>Enable Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={handleNotificationsSwitch}
          />
        </View>
      </View>
      <View style={styles.settingsGroup}>
        <Text style={styles.settingsGroupTitle}>Location Sharing</Text>
        <View style={styles.settingsRow}>
          <Text style={styles.settingsLabel}>Enable Location Sharing</Text>
          <Switch
            value={locationSharingEnabled}
            onValueChange={handleLocationSharingSwitch}
          />
        </View>
      </View>
      <View style={styles.settingsGroup}>
        <Text style={styles.settingsGroupTitle}>Appearance</Text>
        <View style={styles.settingsRow}>
          <Text style={styles.settingsLabel}>Dark Mode</Text>
          <Switch
            value={darkModeEnabled}
            onValueChange={handleDarkModeSwitch}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  settingsGroup: {
    marginBottom: 24,
  },
  settingsGroupTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  settingsLabel: {
    fontSize: 16,
  },
});

export default Settings;
