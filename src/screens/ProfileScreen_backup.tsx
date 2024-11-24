import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

// Example user data (replace with actual user data from login or API)
const userData = {
  name: 'Matin',
  bio: 'Love my dog, my kids, and wokring outside',
  following: 300,
  followers: '20',
  closeFriends: 5,
  profilePicture: 'https://via.placeholder.com/100',
  verified: true,
  instagram: 'https://www.instagram.com',
  portfolioImages: [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ],
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image source={{ uri: userData.profilePicture }} style={styles.profileImage} />
        {userData.verified && (
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/4776/4776584.png',
            }}
            style={styles.verifiedIcon}
          />
        )}
      </View>
      <Text style={styles.name}>Hi, I'm {userData.name}</Text>
      <Text style={styles.bio}>{userData.bio}</Text>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userData.following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userData.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{userData.closeFriends}</Text>
          <Text style={styles.statLabel}>Jobs Done</Text>
        </View>
      </View>

      {/* Follow Me Section */}
      <Text style={styles.followMeLabel}>Follow Me</Text>
      <TouchableOpacity onPress={() => Linking.openURL(userData.instagram)}>
        <Text style={styles.link}>{userData.instagram}</Text>
      </TouchableOpacity>

      {/* Portfolio Section */}
      <View style={styles.portfolioContainer}>
        {userData.portfolioImages.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.portfolioImage} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  verifiedIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 10,
    right: 120,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  bio: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
  },
  followMeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  link: {
    fontSize: 14,
    color: '#007BFF',
    marginBottom: 20,
  },
  portfolioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portfolioImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

export default ProfileScreen;
