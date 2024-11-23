import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

type JobDetailsScreenProps = {
  route: any; // Use appropriate navigation type if using TypeScript
  navigation: any;
};

const JobDetailsScreen = ({ route, navigation }: JobDetailsScreenProps) => {
  const { job, details, pay, image } = route.params; // Extract job data

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Accept Job</Text>

      {/* Job Information */}
      <View style={styles.jobInfo}>
        <Image source={{ uri: image }} style={styles.profileImage} />
        <View>
          <Text style={styles.jobTitle}>{job}</Text>
          <Text style={styles.subTitle}>User1024: Job</Text>
          <Text style={styles.rating}>★★★★★</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
            <Text style={styles.seeProfile}>See profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Job Description */}
      <Image source={{ uri: image }} style={styles.jobImage} />
      <Text style={styles.descriptionHeader}>Description of the job:</Text>
      <Text style={styles.description}>{details}</Text>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.acceptButton}>
        <Text style={styles.acceptButtonText}>Accept Job</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Message Neighbor</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  jobInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#555',
  },
  rating: {
    fontSize: 16,
    color: '#FFD700',
    marginTop: 4,
  },
  seeProfile: {
    fontSize: 14,
    color: '#007BFF',
    textDecorationLine: 'underline',
    marginTop: 4,
  },
  jobImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  descriptionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
  },
  acceptButton: {
    backgroundColor: '#28A745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  acceptButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  messageButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default JobDetailsScreen;
