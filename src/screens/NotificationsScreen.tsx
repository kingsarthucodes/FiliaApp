import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const NotificationsScreen = () => {
  const notifications = [
    {
      id: '1',
      user: 'Cameron Coyle, Laura Patrick',
      message: 'left you a great review - 5 stars!"',
      time: '1h',
      avatar: 'https://via.placeholder.com/50',
      background: '#E3F2FD',
    },
    {
      id: '2',
      user: 'Tonja Bell',
      message: 'reacted to a photo you are tagged in: "I had a great time wokring for you today !"',
      time: '6m',
      avatar: 'https://via.placeholder.com/50',
      background: '#FCE4EC',
    },
    {
      id: '3',
      user: 'Kristi Monroe',
      message: 'posted 3 links: "This would be Demeter 😊"',
      time: '9h',
      avatar: 'https://via.placeholder.com/50',
      background: '#E8F5E9',
    },
    {
      id: '4',
      user: 'Ivy Leaf Boutique',
      message: 'Your post is waiting for an application.',
      time: '12h',
      avatar: 'https://via.placeholder.com/50',
      background: '#FFF3E0',
    },
  ];

  const renderNotification = ({ item }) => (
    <TouchableOpacity style={[styles.notificationContainer, { backgroundColor: item.background }]}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.notificationText}>
          <Text style={styles.userName}>{item.user}</Text> {item.message}
        </Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    paddingTop: 60,
    fontWeight: 'bold',
    color: '#333',
  },
  listContainer: {
    paddingVertical: 10,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 18,
  },
  userName: {
    fontWeight: '600',
    color: '#007BFF',
  },
  timeText: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
});

export default NotificationsScreen;
