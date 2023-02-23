import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export default function ActionSheet() {
  const [sheetOpened, setSheetOpened] = useState(false);
  const bottomSheetRef = React.createRef();
  const snapPoints = React.useMemo(() => [0, '45%'], []);

  const handleSheetOpen = () => {
    bottomSheetRef.current.expand();
    setSheetOpened(true);
  };

  const handleSheetClose = () => {
    bottomSheetRef.current.collapse();
    setSheetOpened(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.bio}>Software Developer</Text>
      </View>
      <TouchableOpacity style={styles.detailsButton} onPress={handleSheetOpen}>
        <Text style={styles.detailsButtonText}>View Details</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        initialSnapIndex={0}
        enablePanDownToClose
        onCloseEnd={handleSheetClose}
        >
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Profile Details</Text>
          <Text style={styles.detailsText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            varius turpis sit amet dui sagittis, id auctor urna semper.
          </Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
  },
  detailsButton: {
    backgroundColor: '#2196f3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 18,
  },
});
