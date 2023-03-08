import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PP = ({
  name,
  age,
  email,
  phone,
  gender,
  race,
  ethnicity,
  maritalStatus,
  language,
  religion,
  financial,
  employment,
  health,
  education,
  socialMediaHandles,
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.age}>{age}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoFields}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Email:</Text>
            <Text style={styles.fieldValue}>{email}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Phone:</Text>
            <Text style={styles.fieldValue}>{phone}</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Identifying Information</Text>
        <View style={styles.infoFields}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Gender:</Text>
            <Text style={styles.fieldValue}>{gender}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Race:</Text>
            <Text style={styles.fieldValue}>{race}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Ethnicity:</Text>
            <Text style={styles.fieldValue}>{ethnicity}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Marital Status:</Text>
            <Text style={styles.fieldValue}>{maritalStatus}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Language:</Text>
            <Text style={styles.fieldValue}>{language}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Religion:</Text>
            <Text style={styles.fieldValue}>{religion}</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Financial Information</Text>
        <View style={styles.infoFields}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Income:</Text>
            <Text style={styles.fieldValue}>{financial.income}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Debt:</Text>
            <Text style={styles.fieldValue}>{financial.debt}</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Employment Information</Text>
        <View style={styles.infoFields}>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Occupation:</Text>
            <Text style={styles.fieldValue}>{employment.occupation}</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldLabel}>Employer:</Text>
            <Text style={styles.fieldValue}>{employment.employer}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  info: {
    marginTop: 20,
  },
  infoFields: {
    marginBottom: 10,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: "bold",
    width: 100,
    marginRight: 10,
  },
  fieldValue: {
    fontSize: 16,
  },
  handles: {
    marginTop: 10,
  },
  handle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  handleLabel: {
    fontSize: 16,
    fontWeight: "bold",
    width: 100,
    marginRight: 10,
  },
  handleValue: {
    fontSize: 16,
    color: "blue",
  },
});

export default PP;
