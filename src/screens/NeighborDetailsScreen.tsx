import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

type NeighborDetailsScreenProps = {
  navigation: any; // Use appropriate navigation type if using TypeScript
};

const NeighborDetailsScreen = ({ navigation }: NeighborDetailsScreenProps) => {
  const [idImage, setIdImage] = useState(null);
  const [services, setServices] = useState('');
  const [interests, setInterests] = useState('');
  const [address, setAddress] = useState('');
  const [schools, setSchools] = useState('');

  const handleContinue = () => {
    navigation.navigate('NeighborHome');
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Section 1: Tell us about yourself */}
      <Text style={styles.title}>Tell us a little more about yourself!</Text>

      {/* Upload ID Section */}
      <Text style={styles.subtitle}>Upload an image of your ID below:</Text>
      <TouchableOpacity style={styles.uploadButton}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios/50/000000/upload.png' }} // Replace with your upload icon
          style={styles.uploadIcon}
        />
      </TouchableOpacity>

      {/* Service Interest Section */}
      <Text style={styles.subtitle}>
        What services are you looking for, and what are some things that interest you?
      </Text>
      <TextInput
        style={styles.textArea}
        placeholder="Enter here:"
        multiline
        value={interests}
        onChangeText={setInterests}
      />

      {/* Service Selection Section */}
      <Text style={styles.subtitle}>Select some services you would like done:</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search here"
        value={services}
        onChangeText={setServices}
      />
      <View style={styles.servicesList}>
        <Text style={styles.serviceItem}>Dogwalking</Text>
        <Text style={styles.serviceItem}>Tutoring</Text>
        <Text style={styles.serviceItem}>Cleaning</Text>
        <Text style={styles.serviceItem}>Heading</Text>
        <Text style={styles.serviceItem}>Garden Help</Text>
      </View>

      {/* Section 2: Additional Fields */}
      <Text style={styles.subtitle}>Type in your address below:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.subtitle}>
        What schools in your area would you like to be serviced from?
      </Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search here"
        value={schools}
        onChangeText={setSchools}
      />
      <View style={styles.schoolsList}>
        <Text style={styles.schoolItem}>UCLA</Text>
        <Text style={styles.schoolItem}>UCR</Text>
        <Text style={styles.schoolItem}>USC</Text>
      </View>

      {/* Waiver and Continue Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Click to sign waiver</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        By clicking continue, you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexGrow: 1, // Ensures content scrolls properly
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
  uploadButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
  uploadIcon: {
    width: 50,
    height: 50,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    height: 80,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  servicesList: {
    marginBottom: 20,
  },
  serviceItem: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    height: 50,
  },
  schoolsList: {
    marginBottom: 20,
  },
  schoolItem: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#6B6B6B',
    textAlign: 'center',
    marginTop: 10,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#007BFF',
  },
});

export default NeighborDetailsScreen;
