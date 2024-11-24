// Make the types available globally
import { RootStackParamList, StudentTabParamList, NeighborTabParamList } from './navigation';
import { StudentData } from './student';

declare global {
  type GRootStackParamList = RootStackParamList;
  type GStudentTabParamList = StudentTabParamList;
  type GNeighborTabParamList = NeighborTabParamList;
  type GStudentData = StudentData;
}
