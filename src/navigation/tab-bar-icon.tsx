import {Home, User2} from 'lucide-react-native';
import {Diagnose, Transaction} from '../components/icon';

type TabBarIconProps = {
  color: string;
  focused: boolean;
  size: number;
};

export const HomeTabBarIcon = (props: TabBarIconProps) => {
  return <Home {...props} />;
};

export const DiagnosticTabBarIcon = (props: TabBarIconProps) => {
  return <Diagnose {...props} />;
};

export const TransactionsTabBarIcon = (props: TabBarIconProps) => {
  return <Transaction {...props} />;
};

export const AccountTabBarIcon = (props: TabBarIconProps) => {
  return <User2 {...props} />;
};
