import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// Navigator
import HomeNavigator from './HomeNav';
import AuthNavigator from './AuthNav';

const AppNavigator = createSwitchNavigator(
  {
    Login: AuthNavigator,
    Home: HomeNavigator
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null
    },
  }
)

export default RootNavigation = createAppContainer(AppNavigator);