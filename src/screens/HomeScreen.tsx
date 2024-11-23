import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const jobListings = [
  { id: '1', job: 'Dogwalking', details: 'Take care of a pet for 2 hours', pay: '$20/hr', image: 'https://placekitten.com/40/40' },
  { id: '2', job: 'Tutoring', details: 'Math tutoring for high school', pay: '$30/hr', image: 'https://placekitten.com/40/40' },
  { id: '3', job: 'Cleaning', details: 'Clean a 2-bedroom apartment', pay: '$15/hr', image: 'https://placekitten.com/40/40' },
  { id: '4', job: 'Gardening', details: 'Weed removal and lawn care', pay: '$25/hr', image: 'https://placekitten.com/40/40' },
  { id: '5', job: 'House Sitting', details: 'Watch over a house for a weekend', pay: '$50/day', image: 'https://placekitten.com/40/40' },
];

const HomeScreen = ({ navigation }: any) => {
  const renderJob = ({ item }: any) => (
    <TouchableOpacity
      style={styles.jobItem}
      onPress={() =>
        navigation.navigate('JobDetails', {
          job: item.job,
          details: item.details,
          pay: item.pay,
          image: item.image,
        })
      }
    >
      <Image source={{ uri: item.image }} style={styles.jobImage} />
      <View style={styles.jobDetails}>
        <Text style={styles.jobTitle}>{item.job}</Text>
        <Text style={styles.jobDescription}>{item.details}</Text>
      </View>
      <Text style={styles.jobPay}>{item.pay}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Jobs Offered In Area</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Value"
      />
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>

      {/* Job Listings */}
      <FlatList
        data={jobListings}
        keyExtractor={(item) => item.id}
        renderItem={renderJob}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 28,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 45,
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  filterButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingBottom: 16,
  },
  jobItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  jobImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  jobDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobDescription: {
    fontSize: 14,
    color: '#666',
  },
  jobPay: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HomeScreen;
