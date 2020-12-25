import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import SearchJokesScreen from '../screens/SearchJokeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const JokesNavigator = createStackNavigator({
  SearchJokes: SearchJokesScreen,
});

const SettingsNavigator = createStackNavigator({
  SettingsStack: SettingsScreen,
});

const MainNavigator = createDrawerNavigator({
  Jokes: JokesNavigator,
  Settings: SettingsNavigator,
});

export default createAppContainer(MainNavigator);
