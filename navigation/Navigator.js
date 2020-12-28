import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SearchJokesScreen from '../screens/SearchJokeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const JokesNavigator = createStackNavigator({
  SearchJokes: {
    screen: SearchJokesScreen,
    navigationOptions: { drawerLabel: 'Jokes' },
  },
});

const SettingsNavigator = createStackNavigator({
  SettingsStack: SettingsScreen,
});

const MainNavigator = createDrawerNavigator({
  Jokes: {
    screen: JokesNavigator,
    navigationOptions: { drawerLabel: 'Jokes' },
  },
  Settings: {
    screen: SettingsNavigator,
    navigationOptions: { drawerLabel: 'Settings' },
  },
});

export default createAppContainer(MainNavigator);
