import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchJokesScreen from '../screens/SearchJokeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Navigator = createStackNavigator({
    SearchJokes: SearchJokesScreen,
    Settings: SettingsScreen,
});

export default createAppContainer(Navigator);