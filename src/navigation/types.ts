import type {NavigatorScreenParams} from '@react-navigation/native';
export type HomeBottomTabsParamList = {
  Home: undefined;
  Diagnostic: undefined;
  Transactions: undefined;
  Account: undefined;
};
interface Props {
  id: number;
}
export type RootStackParamList = {
  App: NavigatorScreenParams<HomeBottomTabsParamList>;
  Product: Props;
  Login: undefined;
  Notification: undefined;
};
