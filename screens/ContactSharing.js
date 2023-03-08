import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function ContactSharing() {
  const [sharingOptions, setSharingOptions] = useState({
    identifying: false,
    contact: false,
    demographic: false,
    financial: false,
    employment: false,
    health: false,
    education: false,
    onlineActivity: false,
  });

  const handleSharingOptionChange = (option) => {
    setSharingOptions({ ...sharingOptions, [option]: !sharingOptions[option] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select what you want to share</Text>
      <View style={styles.category}>
        <Text style={styles.categoryName}>Identifying Information</Text>
        <Switch
          value={sharingOptions.identifying}
          onValueChange={() => handleSharingOptionChange('identifying')}
        />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryName}>Contact Information</Text>
        <Switch
          value={sharingOptions.contact}
          onValueChange={() => handleSharingOptionChange('contact')}
        />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryName}>Demographic Information</Text>
        <Switch
          value={sharingOptions.demographic}
          onValueChange={() => handleSharingOptionChange('demographic')}
        />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryName}>Financial Information</Text>
        <Switch
          value={sharingOptions.financial}
          onValueChange={() => handleSharingOptionChange('financial')}
        />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryName}>Employment Information</Text>
        <Switch
          value={sharingOptions.employment}
          onValueChange={() => handleSharingOptionChange('employment')}
        />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryName}>Health Information</Text>
        <Switch
          value={sharingOptions.health}
          onValueChange={() => handleSharingOptionChange('health')}
        />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryName}>Educational Information</Text>
        <Switch
          value={sharingOptions.education}
          onValueChange={() => handleSharingOptionChange('education')}
        />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryName}>Online Activity Information</Text>
        <Switch
          value={sharingOptions.onlineActivity}
          onValueChange={() => handleSharingOptionChange('onlineActivity')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
  },
});
