import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import NeighborDetailsScreen from './src/screens/NeighborDetailsScreen';
import NeighborSignUpScreen from './src/screens/NeighborSignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import StudentSignUpScreen from './src/screens/StudentSignUpScreen';
import StudentDetailsScreen from './src/screens/StudentDetailsScreen';
import StudentHomeScreen from './src/screens/StudentHomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PostJobScreen from './src/screens/PostJobScreen';
import SearchScreen from './src/screens/SearchScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import JobDetailsScreen from './src/screens/JobDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Student Tab Navigator
function StudentTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 5 },
      }}
    >
      <Tab.Screen name="Home" component={StudentHomeScreen} />
      <Tab.Screen name="PostService" component={PostJobScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ studentId: 'defaultStudentId' }} // Pass default or dynamic studentId
      />
    </Tab.Navigator>
  );
}

// Neighbor Tab Navigator
function NeighborTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 80 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 1 },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="PostJob" component={PostJobScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RoleSelection"
        screenOptions={{
          headerShown: true,
        }}
      >
        {/* Role Selection Screen */}
        <Stack.Screen
          name="RoleSelection"
          component={RoleSelectionScreen}
          options={{ headerShown: false }}
        />

        {/* Neighbor Navigation */}
        <Stack.Screen
          name="NeighborSignUp"
          component={NeighborSignUpScreen}
          options={{ title: 'Sign Up - Neighbor' }}
        />
        <Stack.Screen
          name="NeighborDetails"
          component={NeighborDetailsScreen}
          options={{ title: 'Neighbor Details' }}
        />
        <Stack.Screen
          name="NeighborHome"
          component={NeighborTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="JobDetails"
          component={JobDetailsScreen}
          options={{ title: 'Job Details' }}
        />

        {/* Student Navigation */}
        <Stack.Screen
          name="StudentSignUp"
          component={StudentSignUpScreen}
          options={{ title: 'Sign Up - Student' }}
        />
        <Stack.Screen
          name="StudentDetails"
          component={StudentDetailsScreen}
          options={{ title: 'Student Details' }}
        />
        <Stack.Screen
          name="StudentHome"
          component={StudentTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
