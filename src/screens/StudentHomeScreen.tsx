import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const jobs = [
  { id: '1', job: 'placeholder', details: 'placeholder', pay: 'placeholder' },
  { id: '2', job: 'placeholder', details: 'placeholder', pay: 'placeholder' },
  { id: '3', job: 'placeholder', details: 'placeholder', pay: 'placeholder' },
];

const StudentHomeScreen = () => {
  const renderJobItem = ({ item }) => (
    <View style={styles.jobRow}>
      <View style={styles.jobImage} />
      <Text style={styles.jobText}>{item.job}</Text>
      <Text style={styles.jobText}>{item.details}</Text>
      <Text style={styles.jobText}>{item.pay}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobs In Area</Text>
      <TextInput style={styles.searchInput} placeholder="Value" />
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>
      <FlatList
        data={jobs}
        renderItem={renderJobItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#eee',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  filterText: {
    color: '#000',
  },
  list: {
    marginTop: 10,
  },
  jobRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  jobImage: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
    borderRadius: 25,
  },
  jobText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default StudentHomeScreen;
