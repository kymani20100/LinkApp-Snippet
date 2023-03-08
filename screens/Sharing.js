import React, { useState } from "react";
import { StyleSheet, Text, View, Switch, ScrollView } from "react-native";

export default function Sharing() {
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
    console.log(sharingOptions);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Select what you want to share</Text>
        <View style={styles.category}>
          <Text style={styles.categoryName}>Identifying Information</Text>
          <Text style={styles.categoryDescription}>
            Name, date of birth, social security number, driver's license
            number, passport number
          </Text>
          <Switch
            value={sharingOptions.identifying}
            onValueChange={() => handleSharingOptionChange("identifying")}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryName}>Contact Information</Text>
          <Text style={styles.categoryDescription}>
            Phone number, email address, physical address, social media handles
          </Text>
          <Switch
            value={sharingOptions.contact}
            onValueChange={() => handleSharingOptionChange("contact")}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryName}>Demographic Information</Text>
          <Text style={styles.categoryDescription}>
            Gender, race, ethnicity, marital status, language, religion
          </Text>
          <Switch
            value={sharingOptions.demographic}
            onValueChange={() => handleSharingOptionChange("demographic")}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryName}>Financial Information</Text>
          <Text style={styles.categoryDescription}>
            Bank account number, credit card number, income, expenses, debts,
            investments
          </Text>
          <Switch
            value={sharingOptions.financial}
            onValueChange={() => handleSharingOptionChange("financial")}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryName}>Employment Information</Text>
          <Text style={styles.categoryDescription}>
            Job title, employer name, work address, salary, benefits, work
            history
          </Text>
          <Switch
            value={sharingOptions.employment}
            onValueChange={() => handleSharingOptionChange("employment")}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryName}>Health Information</Text>
          <Text style={styles.categoryDescription}>
            Medical conditions, medications, health insurance, doctor's name,
            hospital visits
          </Text>
          <Switch
            value={sharingOptions.health}
            onValueChange={() => handleSharingOptionChange("health")}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryName}>Educational Information</Text>
          <Text style={styles.categoryDescription}>
            School name, degree obtained, graduation date, field of study, GPA
          </Text>
          <Switch
            value={sharingOptions.education}
            onValueChange={() => handleSharingOptionChange("education")}
          />
        </View>
        <View style={styles.category}>
          <Text style={styles.categoryName}>Online Activity Information</Text>
          <Text style={styles.categoryDescription}>
            Websites visited, search history, social media activity, online
            purchases
          </Text>
          <Switch
            value={sharingOptions.onlineActivity}
            onValueChange={() => handleSharingOptionChange("onlineActivity")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  category: {
    marginVertical: 10,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  categoryDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
});

