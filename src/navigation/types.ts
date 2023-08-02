import type {NavigatorScreenParams} from '@react-navigation/native';
export type HomeBottomTabsParamList = {
  Home: undefined;
  Diagnostic: undefined;
  Transactions: undefined;
  Account: undefined;
};

export type RootStackParamList = {
  App: NavigatorScreenParams<HomeBottomTabsParamList>;
  Product: undefined;
  Login: undefined;
  Notification: undefined;
};
