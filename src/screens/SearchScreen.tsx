import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  const jobData = [
    { id: '1', job: 'placeholder', details: 'placeholder', pay: 'placeholder', image: 'https://via.placeholder.com/50' },
    { id: '2', job: 'placeholder', details: 'placeholder', pay: 'placeholder', image: 'https://via.placeholder.com/50' },
    { id: '3', job: 'placeholder', details: 'placeholder', pay: 'placeholder', image: 'https://via.placeholder.com/50' },
  ];

  const suggestedJobs = [
    { id: '4', job: 'placeholder', details: 'placeholder', pay: 'placeholder', image: 'https://via.placeholder.com/50' },
    { id: '5', job: 'placeholder', details: 'placeholder', pay: 'placeholder', image: 'https://via.placeholder.com/50' },
  ];

  const renderJobItem = ({ item }) => (
    <View style={styles.jobRow}>
      <Image source={{ uri: item.image }} style={styles.profileImage} />
      <Text style={styles.jobText}>{item.job}</Text>
      <Text style={styles.jobText}>{item.details}</Text>
      <Text style={styles.jobText}>{item.pay}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find a Job</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for Job"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity>
          <Text style={styles.filterButton}>Filter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Job</Text>
        <Text style={styles.tableHeaderText}>Details</Text>
        <Text style={styles.tableHeaderText}>Pay($)</Text>
      </View>
      <FlatList data={jobData} renderItem={renderJobItem} keyExtractor={(item) => item.id} />
      <Text style={styles.suggestedJobsHeader}>Suggested Jobs:</Text>
      <FlatList data={suggestedJobs} renderItem={renderJobItem} keyExtractor={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    paddingTop: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginRight: 8,
  },
  filterButton: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  jobRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  jobText: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  suggestedJobsHeader: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
