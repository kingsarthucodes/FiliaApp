import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation'; // Import the navigation types
import { StudentData } from '../types/student'; // Import the student types

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

interface Props {
  route: ProfileScreenRouteProp;
}

const ProfileScreen: React.FC<Props> = ({ route }) => {
  const { studentId } = route.params;
  const [studentData, setStudentData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/students/${studentId}`);
        const data: StudentData = await response.json();
        setStudentData(data);
      } catch (error) {
        console.error('Failed to fetch student data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [studentId]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <View>
          <Text>{studentData?.name}</Text>
          <Image
            source={{ uri: studentData?.profilePicture || 'https://via.placeholder.com/100' }}
            style={{ width: 100, height: 100 }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
