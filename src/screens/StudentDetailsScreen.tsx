import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

const StudentDetailsScreen = ({ navigation }) => {
  const [idImage, setIdImage] = useState(null);
  const [studyField, setStudyField] = useState('');
  const [services, setServices] = useState('');
  const [school, setSchool] = useState('');
  const [travelDistance, setTravelDistance] = useState('');

  const createStudent = async () => {
    const studentData = {
      studyField,
      services,
      school,
      travelDistance,
      idImage: idImage?.uri || null,
    };

    console.log('Sending Student Data:', studentData); // Log the payload being sent

    try {
      const response = await fetch('http://127.0.0.1:5000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Student Created:', result); // Log successful response
        Alert.alert('Success', 'Student created successfully!');
        navigation.navigate('StudentHome'); // Navigate to the next screen
      } else {
        const error = await response.json();
        console.error('API Error:', error); // Log error response
        Alert.alert('Error', error.error || 'Failed to create student.');
      }
    } catch (err) {
      console.error('Network Error:', err); // Log network errors
      Alert.alert('Error', 'An error occurred while connecting to the server.');
    }
  };

  const handleContinue = () => {
    if (!studyField || !services || !school || !travelDistance) {
      Alert.alert('Validation Error', 'All fields are required.');
      return;
    }
    createStudent(); // Call the API
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tell us a little more about yourself!</Text>

      <Text style={styles.subtitle}>What are you studying or interested in studying?</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter here:"
        multiline
        value={studyField}
        onChangeText={setStudyField}
      />

      <Text style={styles.subtitle}>What are three services you would like to provide?</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter here:"
        value={services}
        onChangeText={setServices}
      />

      <Text style={styles.subtitle}>What school do you currently attend:</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter your school"
        value={school}
        onChangeText={setSchool}
      />

      <Text style={styles.subtitle}>How far would you like to travel for work:</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter distance (e.g., 5 miles)"
        value={travelDistance}
        onChangeText={setTravelDistance}
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B6B6B',
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    height: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StudentDetailsScreen;
