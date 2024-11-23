import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const jobs = [
  { id: '1', job: 'Dog Walking', details: '30 min walk', pay: '$20' },
  { id: '2', job: 'Tutoring', details: 'Math for grade 5', pay: '$30' },
  { id: '3', job: 'Cleaning', details: '2-bedroom apartment', pay: '$50' },
  { id: '4', job: 'Gardening', details: 'Plant care', pay: '$25' },
  { id: '5', job: 'Pet Sitting', details: '2 hours', pay: '$40' },
];

const NeighborHomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Jobs In Area</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Value" />
        <TouchableOpacity>
          <Text style={styles.clearText}>X</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Button */}
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>

      {/* Job List */}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.jobRow}>
            <Image
              source={{
                uri: 'https://placekitten.com/50/50', // Placeholder image
              }}
              style={styles.jobImage}
            />
            <Text style={styles.jobText}>{item.job}</Text>
            <Text style={styles.detailsText}>{item.details}</Text>
            <Text style={styles.payText}>{item.pay}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  clearText: {
    fontSize: 16,
    color: '#AAA',
    marginLeft: 8,
  },
  filterButton: {
    backgroundColor: '#EEE',
    alignSelf: 'flex-start',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  filterText: {
    fontSize: 16,
    color: '#000',
  },
  jobRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  jobImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  jobText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  detailsText: {
    flex: 2,
    fontSize: 16,
    color: '#666',
  },
  payText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});

export default NeighborHomeScreen;
