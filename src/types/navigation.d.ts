import { NavigatorScreenParams } from '@react-navigation/native';

// Define the stack navigation parameters
export type RootStackParamList = {
  RoleSelection: undefined;
  NeighborSignUp: undefined;
  NeighborDetails: undefined;
  NeighborHome: undefined;
  JobDetails: { jobId: string };
  StudentSignUp: undefined;
  StudentDetails: undefined;
  StudentHome: undefined;
  Profile: { studentId: string }; // Pass studentId to ProfileScreen
};

// Define the tab navigation parameters for the student and neighbor tabs
export type StudentTabParamList = {
  Home: undefined;
  PostService: undefined;
  Search: undefined;
  Notifications: undefined;
  Profile: NavigatorScreenParams<RootStackParamList>;
};

export type NeighborTabParamList = {
  Home: undefined;
  PostJob: undefined;
  Search: undefined;
  Notifications: undefined;
  Profile: undefined;
};
