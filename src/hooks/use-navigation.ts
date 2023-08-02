import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from '../navigation/types';

export const useRootNavigation = () =>
  useNavigation<StackNavigationProp<RootStackParamList>>();
