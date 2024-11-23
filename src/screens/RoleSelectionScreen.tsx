import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function RoleSelectionScreen({ navigation }): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Neighbor or Student?</Text>
      <Text style={styles.subtitle}>Select an option.</Text>
      <View style={styles.buttonContainer}>
        {/* Navigate to NeighborSignUpScreen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NeighborSignUp')}
        >
          <Text style={styles.buttonText}>Continue as Neighbor</Text>
        </TouchableOpacity>

        {/* Navigate to StudentSignUpScreen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('StudentSignUp')}
        >
          <Text style={styles.buttonText}>Continue as Student</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B6B6B',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
});

export default RoleSelectionScreen;
